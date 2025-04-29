import OpenAI from 'openai';
import fs from 'fs';

// Your OpenAI API Key
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY environment variable is not set');
}

// Setup OpenAI client
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

// Load scraped posts
const posts = JSON.parse(fs.readFileSync('./reddit_posts_1745886922930.json', 'utf-8'));

// Function to check if a post is a good lead
async function isGoodPost(post) {
  const prompt = `This is a Reddit post:\n\nTitle: ${post.title}\nContent: ${post.selftext}\n\nIs this likely posted by a college student or organic UGC creator looking for remote work or collaborations? Answer ONLY "Yes" or "No".`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
  });

  const answer = response.choices[0].message.content.trim();
  return answer.toLowerCase().startsWith('yes');
}

// Main filtering function
async function filterPosts() {
  const goodPosts = [];

  for (const post of posts) {
    console.log(`Checking: ${post.title}`);
    const isGood = await isGoodPost(post);
    if (isGood) {
      goodPosts.push(post);
      console.log('✅ Good lead found!');
    } else {
      console.log('❌ Skipped');
    }
  }

  fs.writeFileSync('good_posts.json', JSON.stringify(goodPosts, null, 2));
  console.log('Saved good posts to good_posts.json');
}

filterPosts();
