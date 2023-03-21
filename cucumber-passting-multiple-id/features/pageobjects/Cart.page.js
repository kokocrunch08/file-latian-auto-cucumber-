import Page from './page.js'

class CartPage extends Page {
    get buttonCart() {
        return $(`#cartur`)
    }

    async clickCart() {
        await this.buttonCart.click()
        
    }


}

export default new CartPage