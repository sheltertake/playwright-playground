const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    const navigationPromise = page.waitForNavigation()

    //await navigationPromise

    await page.goto('url')

    //await page.setViewport({ width: 1920, height: 979 })

    await navigationPromise

    await page.screenshot({ path: `stadium-1.png` });

    await page.waitForSelector('#hrd > #bySelection > .idp:nth-child(3) > .idpDescription > .largeTextNoWrap')
    await page.click('#hrd > #bySelection > .idp:nth-child(3) > .idpDescription > .largeTextNoWrap')

    await navigationPromise

    await page.screenshot({ path: `stadium-2.png` });

    await page.fill('#userNameInput', 'username')
    await page.fill('#passwordInput', 'pwd')

    await page.screenshot({ path: `stadium-3.png` });

    await page.click('#submitButton')

    await navigationPromise

    await navigationPromise
  
    await page.waitForSelector('.search-list-host > sms-stadium-search > .ng-tns-c74-2 > .filters > .filter-content')
    await page.click('.search-list-host > sms-stadium-search > .ng-tns-c74-2 > .filters > .filter-content')
    
    await page.screenshot({ path: `stadium-4.png` });

    await browser.close()
})()