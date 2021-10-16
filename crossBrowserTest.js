const playwright = require('playwright');

(async() => {

    for(const browserType of ['chromium', 'firefox', 'webkit']){

        const browser = await playwright[browserType].launch({
            headless:false,
            slowMo:50
        });
    
        const page = await browser.newPage();
    
        await page.goto("https://executeautomation.com");
        await page.screenshot({path: `ea.png`});
        await browser.close();
    }

})();