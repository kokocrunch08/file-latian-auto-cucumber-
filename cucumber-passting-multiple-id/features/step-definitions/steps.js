import {Given, When, Then} from '@wdio/cucumber-framework'

import FrontPage from '../pageobjects/front.page.js'

import HomePage from '../pageobjects/home.page.js'

import CartPage from '../pageobjects/cart.page.js'
import homePage from '../pageobjects/home.page.js'

Given('I am on the login page', async() => {
    await FrontPage.open()
})

When ('I login with {string} and {string}', async(username, password) => {
    await FrontPage.login(username, password)

})

Then('I should see a flash message saying {string}', async(username) => {
    await HomePage.getAccount(username)

})
When('I adding itemName to the cart:', async(table) => {
  let data =table.hashes()
  console.log("DATATABLE", data) 
  for(let i = 0; i < data.length; i++) {
    await HomePage.klickButtonItem(data[i].itemName)
    await HomePage.klickAddToCart1()
    await HomePage.alert()
    await HomePage.clickBack()
    
    
    
  }
})

Then('i m check on the item in Cart Page', async() => {
  await CartPage.clickCart()
  await browser.pause(3000)
})



