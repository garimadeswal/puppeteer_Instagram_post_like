const puppeteer = require('puppeteer');
//const Tag_url = (tag) => `https://www.instagram.com/explore/tags/$%7Btag%7D%60';
(async () => {

    // try{
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        slowMo: 20,
        args: ['--start-maximized', '--disable-notifications', '--incognito']
    });
    const page = await browser.newPage();

    await page.goto('https://www.instagram.com/accounts/login', {
        waitUntil: 'networkidle2'
    });
    await page.waitForSelector('input[name="username"]', {
        visible: true
    });

    await page.type('input[name="username"]', 'onepointedu', { delay: 50 });
    await page.type('input[name="password"]', "Prachi@2", { delay: 50 });
    await page.evaluate(() => {
        document.querySelector('button.sqdOP.L3NKy.y3zKF').click()
    });

    // await page.waitForSelector('.aOOlW.HoLwm', {
    //     visible: true
    // });

    // await page.click('.aOOlW.HoLwm');    
    await page.waitFor(() => document.querySelector('[placeholder=Search]'))

    await page.waitForSelector('[placeholder=Search]', {
        visible: true

    });

    await page.type('[placeholder=Search]', '#cars');
    await page.waitForSelector('div.fuqBx', {
        visible: true
    });
    await page.waitFor(1000);
    // console.log("err9");
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    // console.log("err29");
    // await page.goto(Tag_url(tag), { waitUntil: 'networkidle2' });
    await page.waitFor(1000);
    // console.log("err19");
    await page.waitForSelector('div.v1Nh3.kIKUG._bz0w', {
        visible: true
    });
    let posts = await page.$$('div.v1Nh3.kIKUG._bz0w');
    // console.log(posts[0]);
    for (let i = 0; i < 3; i++) {
        // let post = posts[i];
        console.log(i);
        await posts[i].click();

        await page.waitFor(1000);
        await page.waitForSelector('svg[aria-label=Like]', {
            visible: true
        });
        
        await page.click('svg[aria-label=Like]');
        await page.waitFor(1000);
        await page.waitForSelector('svg[aria-label=Close]', {
            visible: true
        });
        
        await page.click('svg[aria-label=Close]');
    }
    // await page.waitForSelector('div.z556c', {
    //     visible: true
    // });

    // await page.screenshot({path: 'example.png'});

    // await browser.close();

   
})();
// liketoPage = async (tags = []) => {
//     for (let tag of tags) {
//         await page.goto(Tag_url(tag), { waitUntil: 'networkidle2' });
//         await page.waitFor(1000);

//         let posts = await page.$$('article > div:nth-child(3) img[decoding="auto"]');
//         for (let i = 0; i < 3; i++) {
//             let post = posts[i];

//             await post.click();
//         }

//     }
// }