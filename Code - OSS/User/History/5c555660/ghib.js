const puppeteer = require('puppeteer');
const { isArrayBuffer } = require('util/types');

(async () => {
    const browser = await puppeteer.launch({headless: false,});
        const page = await browser.newPage();
        await page.goto('https://www.twitch.tv/');
        await page.screenshot({path: 'screenshot.png'});

        
        
        let arr = await page.evaluate(() => {
            
            let text = document.querySelectorAll('.ScTruncateText-sc-i3kjgq-0 ickTbV').innerText
            return text
            
        })
        console.log(arr)
        await browser.close();

})();node