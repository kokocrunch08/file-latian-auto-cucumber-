import Page from './page.js'

class FrontPage extends Page {

    get LoginMenu() {
        return $(`[data-target='#logInModal']`)
    }

    get inputUserName() {
        return $(`#loginusername`)
    }

    get inputPassword() {
        return $(`#loginpassword`)
    }

    get klickLogin() {
        return $(`[onclick='logIn()']`)
    }

    async isBtnLoginDisplayed () {
        await (await this.klickLogin).waitForDisplayed(5000);
        return await (await this.klickLogin).isDisplayed();
    }

    async login(username, password) {
        await this.LoginMenu.click();
        await browser.pause(2000)
        // await this.isBtnLoginDisplayed()
        await this.inputUserName.setValue(username);
        await this.inputPassword.setValue(password);
        await this.klickLogin.click()
    }

 open() {
    return super.open('index.html');
 }
}

export default new FrontPage