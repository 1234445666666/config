const puppeteer = require('puppeteer');
const { isArrayBuffer } = require('util/types');

(async () => {
    const browser = await puppeteer.launch({headless: false,});
        const page = await browser.newPage();
        await page.goto('https://www.google.com');
        await page.screenshot({path: 'screenshot.png'});

        let arr = await page.evaluate(() => {

            let text = document.querySelectorAll(".friends-carousel-display-name").innerText
            return text

        })
        console.log(isArrayBuffer)
        await browser.close();

})();