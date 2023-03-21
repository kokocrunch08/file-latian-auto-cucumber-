import Page from "./page.js"

class ElementPage extends Page {
    get button() {
        return $(`.show li:nth-of-type(5)`)

    }

    get clickOne() {
        return $(`//button[text()='Click Me']`)
    }

    get clickTwo() {
        return $(`//button[text()='Right Click Me']`)
    }

    get clickThree() {
        return $(`//button[text()='Double Click Me']`)
    }

    get clickInteraction() {
        return $(`div:nth-of-type(5) .header-wrapper`)
    }
    async klikButton() {
        await this.button.click()
        await browser.pause(3000)
        
        
    } 

    async klikOne() {
        await this.clickOne.click()
        await browser.pause(2000)
    }

    async klikTwo() {
        await this.clickTwo.click({ button:'right'})
        await browser.pause(2000)
    }

    async klikThree() {
        await this.clickThree.doubleClick()
        await browser.pause(2000)
    }

    async klikInteractions() {
        await this.clickInteraction.click()
        await browser.pause(2000)
    }
}

export default new ElementPage