import {Given, When, Then} from '@wdio/cucumber-framework'

import FrontPage from '../pageobject/front-page.js'
import ElementPage from '../pageobject/element-page.js'
import InteractionPage from '../pageobject/Interaction-page.js'
import { expect, assert } from 'chai'


Given(/^I am from on the front page$/, async() => {
    await FrontPage.open()
    await browser.pause(2000)
})

When(/^I am in element page$/, async() => {
    await FrontPage.klikElement()
    
  })

Then(/^I m clicking dynamic click and verify assertion$/, async() => {
  await ElementPage.klikButton()
  await ElementPage.klikOne()
  const myText = await $(`//p[@id='dynamicClickMessage']`)
const text = await myText.isDisplayed()
expect(text).to.be.true // assertion code
})

When(/^I m clicking dynamic right click$/, async() => {
  await ElementPage.klikTwo()
    
})

Then(/^I m got comment in under button$/, async() => {
    const myText2 = await $(`#rightClickMessage`)
    const text2 = await myText2.getText()
    assert(text2 === 'You have done a right click') // assertion with assert chai
  
})

When(/^I m double clicking$/, async() => {
  await ElementPage.klikThree()
  
})

Then(/^I m got comment in third time$/, async() => {
    const myText3 = await $(`#doubleClickMessage`)
    const text3 = await myText3.isDisplayed()
    expect(text3).to.be.true; // assertion code
})


Given(/^I am back to homepage$/, async() => {
  await FrontPage.open()
  await browser.pause(2000)
})


// When di scenario pertama dipanggil kembali

Then(/^I am scrolling down to interaction menu$/, async() => {
    await browser.execute('window.scrollBy(0, 1000)') // scroll to bottom
    await browser.pause(1000)
    await ElementPage.klikInteractions()
    await browser.pause(2000)
})

When(/^I am drag and drop$/, async() => {
    await InteractionPage.klikDropable()
    await browser.pause(3000)
    await InteractionPage.dragAndDrop1()
}
)

Then(/^I am validate css property of background-color to the console$/, async() => {
    await InteractionPage.validateCss()
  
})


  