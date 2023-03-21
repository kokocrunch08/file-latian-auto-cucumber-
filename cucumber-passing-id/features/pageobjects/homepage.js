import Page from './page.js'

class HomePage extends Page {

    get Username() {
        return $(`#nameofuser`)
    }

    async verifyLogin(user) {
        return expect(await this.Username).toHaveTextContaining(user)
        

}
}

export default new HomePage
