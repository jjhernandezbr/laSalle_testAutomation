const utils = require('../support/utils');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cookiesAcceptButtom () {
        return $('#onetrust-accept-btn-handler');
    }

    get inputOrigin () {
        return $('#originInput');
    }

    get inputDestination () {
        return $('#destinationInput');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get rdbReturn (){
        return $('#returnLabel .radio-circle_outer');
    }
    get rdbOneWay (){
        return $('#oneWayLabel .radio-circle_outer');
    }

    get listItemOrigin(){
        return $('.list-item:nth-child(3)');
    }

    get listItemDestination() {
        return $('.list-item:nth-child(2)');
    }

    get dateFrom(){
        return $('.date-range > .input-group');
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('es');
    }
    async acceptCookies() {
        
        return await this.cookiesAcceptButtom.click();
    }
    async typeOriginInput(origin){
        await this.inputOrigin.click();
        await this.inputOrigin.setValue(origin);
        await this.listItemOrigin.waitForDisplayed();
        return this.listItemOrigin.click();
        
    }
    async typeDestinationInput(destination){
        await this.inputDestination.click();
        await this.inputDestination.setValue(destination);
        await this.listItemDestination.waitForDisplayed();
        return this.listItemDestination.click();
    }
    async selectTripType(tripType){
        await new Promise(r => setTimeout(r, 10000));
        if(tripType === "Ida"){
            await this.rdbOneWay.waitForDisplayed();
            return this.rdbOneWay.click();
        }else{
            await this.rdbReturn.waitForDisplayed();
            return this.rdbReturn.click();
        }
    }
}

module.exports = new SearchPage();
