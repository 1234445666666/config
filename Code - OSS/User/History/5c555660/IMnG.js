const puppeteer = require('puppeteer');
const { isArrayBuffer } = require('util/types');

(async () => {
    const browser = await puppeteer.launch({headless: false,});
        const page = await browser.newPage();
        await page.goto('https://www.twitch.tv/');
        await page.screenshot({path: 'screenshot.png'});

        
        
        let arr = await page.evaluate(() => {
            
            let text = document.querySelectorAll('.gLFyf').innerText
            return text
            
        })
        console.log(isArrayBuffer)
        // await browser.close();

})();node