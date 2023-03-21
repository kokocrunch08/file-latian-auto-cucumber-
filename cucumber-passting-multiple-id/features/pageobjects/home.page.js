import Page from './page.js'

class HomePage extends Page {
    get accountName() {
        return $(`#nameofuser`)
    } 

    get klickAddToCart() {
        return $(`//a[text()='Add to cart']`)
    }

   

    async buttonItem(item) {
        return await $(`//a[text()='${item}']`)
    }

    async getAccount (user) {
        return await expect(await this.accountName).toHaveTextContaining(user)
    }

    async klickButtonItem (itemName) {
        await (await this.buttonItem(itemName)).click()
    }

    async klickAddToCart1 () {
        await this.klickAddToCart.click()
        await browser.pause(2000)
    }

    //accept alert
    async alert (){
        await browser.acceptAlert()
    }

    
    //back 
    async clickBack () {
        await browser.back()
        await browser.back()
    }

   



}


export default new HomePage