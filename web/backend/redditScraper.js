import fetch from 'node-fetch';
import fs from 'fs';

// Configuration
const CONFIG = {
  CLIENT_ID: process.env.REDDIT_CLIENT_ID,
  CLIENT_SECRET: process.env.REDDIT_CLIENT_SECRET,
  USERNAME: process.env.REDDIT_USERNAME,
  PASSWORD: process.env.REDDIT_PASSWORD,
  USER_AGENT: 'CreatorPulse/1.0.0 (by /u/Food_Personal)'
};

// Validate environment variables
if (!CONFIG.CLIENT_ID || !CONFIG.CLIENT_SECRET || !CONFIG.USERNAME || !CONFIG.PASSWORD) {
  throw new Error('Missing required Reddit credentials in environment variables');
}

async function getAccessToken() {
  const auth = Buffer.from(`${CONFIG.CLIENT_ID}:${CONFIG.CLIENT_SECRET}`).toString('base64');
  
  const response = await fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': CONFIG.USER_AGENT
    },
    body: `grant_type=password&username=${CONFIG.USERNAME}&password=${CONFIG.PASSWORD}`
  });

  const data = await response.json();
  if (!data.access_token) {
    throw new Error('Failed to get access token: ' + JSON.stringify(data));
  }
  return data.access_token;
}

async function fetchPosts(subreddit, accessToken, limit = 100) {
  const response = await fetch(`https://oauth.reddit.com/r/${subreddit}/new?limit=${limit}`, {
    headers: {
      'Authorization': `bearer ${accessToken}`,
      'User-Agent': CONFIG.USER_AGENT
    }
  });

  const data = await response.json();
  
  if (!data.data?.children) {
    throw new Error('Failed to fetch posts: ' + JSON.stringify(data));
  }

  return data.data.children.map(post => ({
    title: post.data.title,
    author: post.data.author,
    url: `https://reddit.com${post.data.permalink}`,
    created: new Date(post.data.created_utc * 1000).toISOString(),
    score: post.data.score,
    num_comments: post.data.num_comments,
    selftext: post.data.selftext
  }));
}

async function main() {
  try {
    console.log('Getting access token...');
    const accessToken = await getAccessToken();
    console.log('Access token obtained successfully');

    console.log('Fetching posts from r/CreatorServices...');
    const posts = await fetchPosts('CreatorServices', accessToken);
    console.log(`Fetched ${posts.length} posts successfully`);

    // Save posts with timestamp
    const filename = `reddit_posts_${Date.now()}.json`;
    fs.writeFileSync(filename, JSON.stringify(posts, null, 2));
    console.log(`Saved posts to ${filename}`);

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
