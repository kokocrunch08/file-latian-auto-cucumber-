import { Given, When, Then } from '@wdio/cucumber-framework';


import LoginPage from '../pageobjects/login.page.js';
// import ItemPage from '../pageobjects/item.page.js';
import { expect} from 'chai'

// Given('I am on the login page', async () => {
//     await LoginPage.open()
// })

When('I login with invalid username {string} and password {string}', async (username, password) => {
    await LoginPage.login(username, password)
    
    await browser.pause(2000)
})

Then('I verify', async () => {
    await LoginPage.verifyErrorMessage()
})
