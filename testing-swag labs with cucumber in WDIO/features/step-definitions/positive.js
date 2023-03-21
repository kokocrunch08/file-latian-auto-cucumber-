import { Given, When, Then } from '@wdio/cucumber-framework';


import LoginPage from '../pageobjects/login.page.js';
import ItemPage from '../pageobjects/item.page.js';
import { expect, assert} from 'chai'





Given('I am on the login page', async () => {
    await LoginPage.open()
})

When('I login with username {string} and password {string}', async (usernames, password) => {
    await LoginPage.login(usernames, password)
    await browser.pause(2000)
})

When('I check on the cart', async () =>{
    await ItemPage.checkingCart()
    await browser.pause(2000)
})


Then('I should see a title Product and adding item to cart:', async (table) => {
    let data = table.hashes()
    console.log("DATATABLE", data)
    for(let i = 0; i < data.length; i++) {
        await ItemPage.addingitemToCart(data[i].itemName)
        await browser.pause(2000)
        await ItemPage.checkingCart()
        await browser.pause(2000)

    }
})

Then('I verify logged in', async () => {
    await ItemPage.showingProduct()
    await browser.pause(2000)
})








