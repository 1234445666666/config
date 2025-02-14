const puppeteer = require('puppeteer');
const { isArrayBuffer } = require('util/types');

(async () => {
    const browser = await puppeteer.launch({headless: false,});
        const page = await browser.newPage();
        await page.goto(https://www.google.com/search?q=%D0%BF%D0%B0%D1%80%D1%81%D0%B8%D0%BD%D0%B3+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85+js&oq=%D0%BF%D0%B0%D1%80%D1%81%D0%B8%D0%BD%D0%B3+%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85+js&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCggCEAAYgAQYogQyBwgDEAAY7wUyBwgEEAAY7wUyCggFEAAYgAQYogTSAQkzODMxajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8);
        await page.screenshot({path: 'screenshot.png'});

        await browser.close();


        let arr = await page.evaluate(() => {

            let text = document.querySelectorAll('.gLFyf').innerText
            return text

        })
        console.log(isArrayBuffer)

})();