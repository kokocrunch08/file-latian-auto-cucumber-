import Page from "./page.js";

class LoginPage extends Page {
    get inputUsername() { 
        return $(`#user-name`)
    }

    get inputPassword() {
        return $(`#password`)
    }

    get buttonLogin() {
        return $(`#login-button`)
    }

    open() {
        super.open();
    }

    get errorMessage() {
        return $(`//h3[.='Epic sadface: Username is required']`)
    }

    async login(usernames, password) {
        await this.inputUsername.setValue(usernames)
        await this.inputPassword.setValue(password)
        await browser.pause(2000)
        await this.buttonLogin.click()
        

    }

    async verifyErrorMessage() {
        return await expect(await this.errorMessage).toBeDisplayed()
    }
}

export default new LoginPage