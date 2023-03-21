// const Page = require('./page')
import Page from './page.js'

class HomePage extends Page {

    get accountName() {
        return $('#nameofuser')
    }

    get buttonLogout() {
        return $(`[onclick='logOut()']`)
    }

    get buttonAddToCart() {
        return $(`//a[text()='Add to cart']`)
    }

    async buttonItemName(itemName) {
        return await  $(`//a[text()='${itemName}']`)
    }

    async clickAddToCart() {
        await (await this.buttonAddToCart).click()
        await browser.pause(3000)
    }

    async acceptAlert() {
        await browser.acceptAlert()
    }

    async clickBackToProduct() {
        await browser.back()
        await browser.back()
    }

    async clickItemName(itemName) {
        await (await this.buttonItemName(itemName)).click()
    }

    async verifyLoginSuccess(user) {
        return await expect(await this.accountName).toHaveTextContaining(user)
    }
}

// module.exports = new HomePage();
export default new HomePage()