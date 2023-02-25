module.exports = {
    click: click
}

function waitForClickable(element, errorMessage, time) {
    const EC = protractor.ExpectedConditions;
    if (!time) {
        time = 5000;
    }
    if (errorMessage === null ) {
        return browser.driver.wait(EC.elementToBeClickable(element), time,
            'The element searched is not visible after waiting 20 seconds');
    } else {
        return browser.driver.wait(EC.elementToBeClickable(element), time, errorMessage);
    }
}

function click(target) { 
    waitForClickable(target,`The element: its not displayed`, 10000);
    return target.click();
}