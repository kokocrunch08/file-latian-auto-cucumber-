 import { Given, When, Then } from "@wdio/cucumber-framework";

 
 import HomePage from "../pageobjects/homepage.js";
 import FrontPage from "../pageobjects/front-page.js";

 Given('I am on the front page', async() => {
    await FrontPage.open()
 })

 When('I login with {string} and {string}', async(username, password) => {
    await FrontPage.login(username, password)

 })

 Then('I should see a flash message saying {string}', async(username) =>{
    await HomePage.verify(username)
 })