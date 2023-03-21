import Page from './page.js';

class ItemPage extends Page {
    get klikCart() { 
        return $(`#add-to-cart-sauce-labs-backpack`)
    }

    get CheckoutCart() {
        return $(`.shopping_cart_link`)
    }

    async addingitemToCart() {
        await this.klikCart.click()
        
    }

    async checkingCart() {
        await this.CheckoutCart.click()
    }

    async clickBack () {
        await browser.back()
    }
}

export default new ItemPage
