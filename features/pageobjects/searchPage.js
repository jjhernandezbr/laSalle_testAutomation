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
        return $('#btnSubmitHomeSearcher');
    }

    get rdbReturn (){
        return $('#returnLabel .radio-circle_outer');
    }
    get rdbOneWay (){
        return $('#oneWayLabel');
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
    get monthTrip(){
        return $('.ui-datepicker-month');
    }
    get dayTrip(){
        return "#calendarDaysTable2023";
    }
    get btnNextMonth(){
        return $('#nextButtonCalendar');
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
        if(tripType === "Ida"){
            await this.rdbOneWay.waitForDisplayed(2000);
            await new Promise(r => setTimeout(r, 2000));
            return await this.rdbOneWay.click();
        }else{
            await this.rdbReturn.waitForDisplayed();
            return await this.rdbReturn.click();
        }
    }

    async selectDate(DateTripDay, DateTripMonth){
       var monthSelected = await this.monthTrip.getText();
       console.log("month : " + monthSelected);
       while(monthSelected != DateTripMonth){
            await this.btnNextMonth.click();
            await new Promise(r => setTimeout(r, 2000));
            await this.monthTrip.waitForDisplayed();
            monthSelected = await this.monthTrip.getText();
            console.log("month : " + monthSelected);
        }
        const options = { month: "numeric" };
        const monthNumber = new Date(`${DateTripMonth} 1, 2000`).toLocaleString("es-ES", options);
        console.log(monthNumber);
        var dayToSelect = $(this.dayTrip + monthNumber + DateTripDay);
        await dayToSelect.click();
        await this.btnSubmit.click();
    }
}

module.exports = new SearchPage();