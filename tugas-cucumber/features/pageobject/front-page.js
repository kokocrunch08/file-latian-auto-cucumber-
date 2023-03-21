import Page from './page.js'

class FrontPage extends Page {

    get elementBtn() {
        return $(`.category-cards > div:nth-of-type(1) .card-up`)
    }

    async klikElement() {
        await this.elementBtn.click()
        await browser.pause(3000)
    }

    open() {
        return super.open()
    }
}

export default new FrontPage