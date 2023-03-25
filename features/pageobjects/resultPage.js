const Page = require("./page");

class ResultPage extends Page {
    get resultsflights(){
        return $('.outboundflightCardsContainer');
    }
    async existsFlights(){
        return await this.resultsflights.isExisting();
    }
}
module.exports = new ResultPage();