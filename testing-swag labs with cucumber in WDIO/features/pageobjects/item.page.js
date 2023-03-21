import Page from './page.js';

class ItemPage extends Page {

    // button adding item to cart(multiple items) 
    async klikCart(itemName) { 
        return await $(`#add-to-cart-${itemName}`)
    }

    get CheckoutCart() {
        return $(`.shopping_cart_link`)
    }

get showProduct() {
    return $(`//span[@class='title']`)
}

    async addingitemToCart(itemName) {
        await (await this.klikCart(itemName)).click()
        
        
    }

    async checkingCart() {
        await this.CheckoutCart.click()
    }

    async showingProduct() {
        return await expect(await this.showProduct).toBeDisplayed()
    }
}

export default new ItemPage
