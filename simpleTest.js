const {chromium} = require('playwright');

(async() => {

    //code goes here

    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://www.google.com/");
    await page.screenshot({path: 'gog.png'})
    await browser.close();

    //useful commands
    //npx playwright codegen google.com
    //PWDEBUG=1 node file.js
})();