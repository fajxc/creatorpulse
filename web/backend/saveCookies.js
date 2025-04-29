import puppeteer from "puppeteer";
import fs from "fs";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.reddit.com/login', { waitUntil: "networkidle0" });

  console.log("➡️ Please manually log in on the page...");
  await new Promise(resolve => setTimeout(resolve, 60000)); // wait 60 seconds

  const cookies = await page.cookies();
  fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2));
  console.log("✅ Cookies saved to cookies.json");

  await browser.close();
})();
