 import Page from './page.js'

 class HomePage extends Page {
    get nameUser() { 
        return $(`#nameofuser`)
 }

 async verify(user) {
    return await expect(await this.nameUser).toHaveTextContaining(user)
 }
}

export default new HomePage