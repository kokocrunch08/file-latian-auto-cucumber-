import { Given, When, Then } from '@wdio/cucumber-framework';


import LoginPage from '../pageobjects/login.page.js';
import ItemPage from '../pageobjects/item.page.js';
import { expect, assert} from 'chai'





Given('I am on the login page', async () => {
    await LoginPage.open()
})

//postive
When('I login with username {string} and password {string}', async (username, password) => {
    await LoginPage.login(username, password)

    await browser.pause(2000)
})



Then('I should see a title Product and adding item to cart', async () => {
    await ItemPage.addingitemToCart()
    await browser.pause(2000)
    })

When('I check on the cart', async () =>{
    await ItemPage.checkingCart()
    await browser.pause(2000)
})




