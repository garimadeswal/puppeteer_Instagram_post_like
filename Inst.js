let fs=require('fs');
let pp=require('puppeteer');

let cfile=process.argv[2];

(async function(){

    try{
     const browser= await pp.launch({
 
         headless:false, 
         defaultViewport:null,
         slowMo : 10,
         args: ['--start-mazimized','--default-notifications']
         
     });

    let contents= await fs.promises.readFile(cfile , 'utf-8');
    let obj=JSON.parse(contents);
    let user=obj.un;
    let pwd =obj.pwd;
    
    let pages= await browser.pages();
    let page=pages[0];
    page.goto('https://www.instagram.com/accounts/login/' , {
        waitUntil:'networkidle0'
    });  

    await page.waitForSelector('.i24fI', {
        visible: true
    });
    

    await page.type('input[name=username]',user);
    await page.type('input[name=password]',pwd);

    
    await page.waitForSelector('[type=submit]', {
        visible: true
    });
    await page.click('[type=submit]');

    await page.waitForSelector('.aOOlW.HoLwm', {
        visible: true
    });
    await page.click('.aOOlW.HoLwm');
    console.log("err1");
    await page.click('._2dbep.qNELH.kIKUG');
    console.log("err2");
    
    // await page.waitForSelector('div.Nnq7C.weEfm', {
    //     visible: true
    // });
    await page.waitForSelector('div.v1Nh3.kIKUG._bz0w', {
        visible: true
    });
    await page.click('div.v1Nh3.kIKUG._bz0w');
    console.log("err3");


    await page.waitForSelector('svg._8-yf5', {
        visible: true
    });
    await page.click('svg._8-yf5');
    console.log("err3");

     
    }
    catch(err)
    {
        console.log(err);
    }

})();