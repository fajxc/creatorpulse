import puppeteer from "puppeteer";
import fs from "fs/promises";

const COOKIES_PATH = "./cookies.json";
const POSTS_PATH = "./good_posts.json";
const REDDIT_URL = "https://old.reddit.com";

async function delay(min = 2000, max = 5000) {
  return new Promise(res => setTimeout(res, Math.random() * (max - min) + min));
}

async function loadCookies(page) {
  try {
    const cookies = JSON.parse(await fs.readFile(COOKIES_PATH, "utf-8"));
    await page.setCookie(...cookies);
    console.log("✅ Cookies loaded");
  } catch {
    console.warn("⚠️ No cookies found");
  }
}

async function isLoggedIn(page) {
  return await page.evaluate(() => {
    return !!document.querySelector('button[aria-label="Create Post"]') || !!document.querySelector('a[href="/chat"]');
  });
}

async function sendDM(page, user, subject, message) {
  console.log(`📨 DMing ${user}...`);

  await page.goto(`${REDDIT_URL}/message/compose/?to=${user}`, { waitUntil: "networkidle0" });
  await delay();

  await page.waitForSelector('form[action*="compose"]', { timeout: 15000 });

  const subjectInput = await page.$('input[name="subject"]');
  const messageBox = await page.$('textarea[name="message"]');
  const sendButton = await page.$('button[type="submit"]');

  if (!subjectInput || !messageBox || !sendButton) throw new Error("Missing form fields");

  await subjectInput.type(subject, { delay: 50 });
  await messageBox.type(message, { delay: 50 });
  await delay();
  await sendButton.click();

  console.log(`✅ DM sent to ${user}`);
}

async function main() {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36');

  try {
    const leads = JSON.parse(await fs.readFile(POSTS_PATH, "utf-8"));
    if (!leads.length) throw new Error("No leads found");

    await page.goto(REDDIT_URL, { waitUntil: "domcontentloaded" });
    await loadCookies(page);
    await page.reload({ waitUntil: "networkidle0" });
    await delay();

    if (!await isLoggedIn(page)) {
      throw new Error("Not logged in");
    }

    const firstLead = leads[0];
    const subject = "Quick Opportunity!";
    const message = `Hey ${firstLead.author}, just saw your post — we'd love to connect!`;

    await sendDM(page, firstLead.author, subject, message);
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    await page.screenshot({ path: `error-${Date.now()}.png` });
  } finally {
    console.log("🛑 Closing browser...");
    await browser.close();
  }
}

main();
