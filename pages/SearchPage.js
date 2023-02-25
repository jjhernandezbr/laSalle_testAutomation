const utils = require('../utils');

const searchPage = {
    cookiesAcceptButtom: ('id=onetrust-accept-btn-handler'),   

    acceptCookies: function(){
        return utils.click(this.cookiesAcceptButtom);
    }
}

module.exports = searchPage;
