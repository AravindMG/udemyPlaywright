const playwright = require("playwright");

(async () =>{

    const browser = await playwright['chromium'].launch({
        headless:false,
    });
    const context = await browser.newContext({
        recordVideo: {dir: './recordedVids'}
    });
    await context.close();
    const page = await browser.newPage();
    // Go to http://eaapp.somee.com/
    await page.goto('http://eaapp.somee.com/');
    // Click text=Login
    await page.click('text=Login');
    // await expect(page).toHaveURL('http://eaapp.somee.com/Account/Login');
    // Click input[name="UserName"]
    await page.click('input[name="UserName"]');
    // Fill input[name="UserName"]
    await page.fill('input[name="UserName"]', 'admin');
    // Press Tab
    await page.press('input[name="UserName"]', 'Tab');
    // Fill input[name="Password"]
    await page.fill('input[name="Password"]', 'password');
    // Click text=Log in
    await page.click('text=Log in');
    await page.click('text="Employee List"');
    await browser.close();
})();