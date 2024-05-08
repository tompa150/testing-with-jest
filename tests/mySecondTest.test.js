const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const index = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const timeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5); 

beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(index);
});
    
afterAll(async() => {
    await driver.quit();
}, timeout);

test("Checking if popup works", async () => {
    let push = await driver.findElement(By.id("push"))
    await push.click();
    let popup = await driver.switchTo().alert();
    await driver.manage().setTimeouts( { implicit: 1000 } );
    expect(popup).toBeTruthy(); 
    await popup.dismiss(); 
})