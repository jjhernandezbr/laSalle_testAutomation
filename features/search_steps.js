const { Given, When, Then, Before } = require('cucumber');
const { expect } = require('chai');
const webdriver = require('selenium-webdriver');
const searchPage = require('../pages/SearchPage');


Before(function () {
    this.driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
});

Given('I am on the initial page', function (){
    this.driver.get('http://vueling.com');
    searchPage.acceptCookies();
});
module.exports = { Given, When, Then };