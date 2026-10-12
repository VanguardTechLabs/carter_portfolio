/* Makes media/og.jpg, the link preview: Carter-TV on channel 06 at 1200 x 630.
   Needs Playwright and a local server that supports video seeking (HTTP Range), for example
     npx http-server -p 8766        (in this folder)
     node tools/og.js http://127.0.0.1:8766/
   Playwright: npm i playwright (it uses the installed Chrome). */
const { chromium } = require("playwright");
const url = process.argv[2] || "http://127.0.0.1:8766/";
(async () => {
  const browser = await chromium.launch({ channel: "chrome" });
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1, reducedMotion: "no-preference" });
  await page.goto(url + "#ch06");
  await page.addStyleTag({ content: ".hint, .cc-hint, .fine, .osd { display: none !important; }" });
  await page.waitForTimeout(2200);
  // Hold the frame at the start of the "big type" scene so the brand fills the screen.
  await page.evaluate(() => { const v = document.querySelector("#vid"); v.pause(); v.currentTime = 5.6; });
  await page.waitForTimeout(600);
  await page.screenshot({ path: require("path").join(__dirname, "..", "media", "og.jpg"), type: "jpeg", quality: 86 });
  await browser.close();
})();
