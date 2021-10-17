const playwright = require("playwright");
const fs = require('fs');

(async () =>{

    const browser = await playwright['chromium'].launch({
        headless:false,
    });
    try {

        const context = await browser.newContext();
        const page = await browser.newPage();
        //we can add screenshots, array of categories to filter out
        // await browser.startTracing(page,{path:`trace.json`, screenshots:true, categories: ['devtools.timeline']});
        await browser.startTracing(page,{path:`trace.json`, screenshots:true});
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
        await browser.stopTracing();
        

        //Code to fetch screenshots from JSON file
        const traceInfo = JSON.parse(fs.readFileSync('./trace.json', 'utf8'));
        const traceData = traceInfo.traceEvents.filter(x =>(
            x.cat === 'disabled-by-default-devtools.screenshot' &&
            x.name === 'screenshot' &&
            typeof x.args !== 'undefined' &&
            typeof x.args.snapshot !== 'undefined'

        ));

        traceData.forEach(function(snap,index) {
            fs.writeFile(`trace-ss-${index}.png`, snap.args.snapshot, 'base64', function(err){
                if(err) {
                    console.log('The error is: ', err)
                }
            })
        });
        await browser.close();
        
    } catch (error) {
        
    }
    
})();