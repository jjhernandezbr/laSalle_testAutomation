const Page = require("./page");

class ResultPage extends Page {
    get resultsflights(){
        return $('#flightCardsContainer');
    }
    async existsFlights(){
        await this.resultsflights.waitForDisplayed(12000);
        return await this.resultsflights.isExisting();
    }
}
module.exports = new ResultPage();