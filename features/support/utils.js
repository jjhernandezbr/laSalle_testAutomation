const { World } = require('@cucumber/cucumber');
const { By, until, findElement} = require('selenium-webdriver');

function waitForClickable(element, time) {
    if (!time) {
        time = 5000;
    }
    this.World.driver.wait(until.elementLocated(element,time));

}

function click(target) { 
    var element = this.driver.findElement(By.id(target));
    waitForClickable(element,20000);
    return element.click();
}

module.exports = {
    click: click
}
