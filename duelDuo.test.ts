
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})


test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('choices shows up when Draw button clicks', async ()=>{
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(5000)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBeTruthy()
    
})
test('player-duo shows up when Add to button duo button clicks',async ()=>{
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(5000)
    await driver.findElement(By.xpath('//*[@id="choices"]/div[2]/button')).click()
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await  playerDuo.isDisplayed()
    expect(displayed).toBeTruthy()
})
