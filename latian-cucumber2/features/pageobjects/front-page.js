 import Page from "./page.js";

 class FrontPage extends Page {
    open() {
      return super.open('index.html');
    }

    get klikLogin() {
      return $(`[data-target='#logInModal']`)
    }


    get usernames() {
      return $(`#loginusername`)
    }

    get password() {
      return $(`#loginpassword`)
    }

    
    get buttonLogin() {
      return $(`[onclick='logIn()']`)
    }

   //  async btnLoginDisplayed() {
   //    await browser.pause(3000)
   //  }
    async login(username, password) {
      await this.klikLogin.click()
      await browser.pause(2000)
      await this.usernames.setValue(username)
      await this.password.setValue(password)
      await this.buttonLogin.click()
      await browser.pause(1000)
   }
      

 }

 export default new FrontPage