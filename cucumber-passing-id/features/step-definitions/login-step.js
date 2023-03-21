import { Given, When, Then } from "@cucumber/cucumber";
import FrontPage from "../pageobjects/front-page.js";
import Homepage from "../pageobjects/homepage.js";

// import Page from '../pageobjects/front-page.js'
// import HomePage from '../pageobjects/home-page.js'

Given(/^I am on the front page$/, async() => {
 await FrontPage.open()
})

// When('I try to login with username {string} and password {string}', async(username, password) => {
//     await FrontPage.login(username, password)
// })

When('I try to login with {string} and {string}', async(username, password) => {
    await FrontPage.login(username, password)
})

Then('I am successfully login with {string}', async(username) =>{
    await Homepage.verifyLogin(username)
     await browser.pause(2000)
})