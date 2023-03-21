 import Page from './page.js';

 class FrontPage extends Page {

    open() {
        return super.open('index.html');
    }
    get klikLogin () { 
        return $(`[data-target='#logInModal']`)
    }

    get buttonLogin () { 
        return $(`[onclick='logIn()']`)
    }

    get inputUsername () {
        return $(`#loginusername`)
    }

    get inputPassword () {
        return $(`#loginpassword`)
    }

    async login (username, password) {
        await this.klikLogin.click()
        await browser.pause(1000)
        await (await this.inputUsername).setValue(username)
        await (await this.inputPassword).setValue(password)
        await (await this.buttonLogin).click()

    }
 }

 export default new FrontPage