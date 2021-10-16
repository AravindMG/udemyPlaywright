const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://demosite.executeautomation.com/Login.html
  await page.goto('https://demosite.executeautomation.com/Login.html');
  // Click input[name="UserName"]
  await page.click('input[name="UserName"]');
  // Fill input[name="UserName"]
  await page.fill('input[name="UserName"]', 'admin');
  // Press Tab
  await page.press('input[name="UserName"]', 'Tab');
  // Fill input[name="Password"]
  await page.fill('input[name="Password"]', 'password');
  // Press Enter
  await page.press('input[name="Password"]', 'Enter');
  // assert.equal(page.url(), 'https://demosite.executeautomation.com/index.html?UserName=admin&Password=password&Login=Login');
  // ---------------------
  await page.hover('text="Automation Tools"');
//   await page.pause();
  await page.screenshot({path: `hover.png`});
  await context.close();
  await browser.close();
})();