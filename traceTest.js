const playwright = require("playwright");

(async () =>{

    const browser = await playwright['chromium'].launch({
        headless:false,
    });
    try {

        const context = await browser.newContext();
        const page = await browser.newPage();
        await browser.startTracing(page,{path:`trace.json`});
        // Go to http://eaapp.somee.com/
        await page.goto('http://eaapp.somee.com/');
        // Click text=Login
        await page.click('text=Login');
        await expect(page).toHaveURL('http://eaapp.somee.com/Account/Login');
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
        await browser.stopTracing();
        await browser.close();
        
    } catch (error) {
        
    }
    
})();