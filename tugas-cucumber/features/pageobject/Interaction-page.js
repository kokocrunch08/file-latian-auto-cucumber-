import Page from "./page.js"
// const { browser } = require('webdriverio');


class InteractionPage extends Page {

    get clickDrop() { 
        return $(`.show.element-list li:nth-of-type(4)`)
    }

    // get dropValue() {
    //     return $(`.ui-state-highlight`)
    // }

   


    async klikDropable() {
        await this.clickDrop.click()
    }

    async dragAndDrop1() {
        const souceElements = $(`#draggable`)
        // const target = $(`.ui-state-highlight`)
        await souceElements.dragAndDrop({x: 300, y: 50})
        await browser.pause(2000)
    }

    async validateCss() {

        const selector = $(`.ui-state-highlight`)
        const backGround = await selector.getCSSProperty('background-color') 
        console.log(backGround)
      

    }
}

export default new InteractionPage