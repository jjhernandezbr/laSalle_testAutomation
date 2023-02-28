const searchPage = require('../pageobjects/searchPage');
const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the initial page", async ()=> {
    await searchPage.open();
    await searchPage.acceptCookies();
});

When("I search a ticket from {string}", async (tripFrom)=>{
    await searchPage.typeOriginInput(tripFrom);
});

When("I search a ticket to {string}", async (tripTo) =>{
    await searchPage.typeDestinationInput(tripTo);
});

When("I select a trip type {string}", async (tripType) =>{
    await searchPage.selectTripType(tripType);
});


