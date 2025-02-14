const puppeteer = require('puppeteer');
const { isArrayBuffer } = require('util/types');

(async () => {
    const browser = await puppeteer.launch({headless: true,});
        const page = await browser.newPage();
        await page.goto('https://www.twitch.tv/');
        await page.screenshot({path: 'screenshot.png'});

        // let arr = await page.evaluate(() => {

        //     let text = document.querySelectorAll('.CoreText-sc-1txzju1-0 kBMZbI').innerText
        //     return text

        // })
        // console.log(isArrayBuffer)
        await browser.close();

})();