# laSalle_testAutomation

## Practica 2 fundamentos de pruebas

### This is a test automation framework built using WebDriverIO, Cucumber, TypeScript, and the Page Object Model pattern. The purpose of this framework is to automate web application testing and reduce maintenance costs by providing a scalable and modular approach to test development

## Installation

To use this framework, you will need to have the following installed:

Node.js
NPM

## Install the dependencies

npm install

## Usage

To run the tests, use the following command:

npm run wdio

This will execute all the tests in the ./features directory.

## Page Object Model

### This framework uses the Page Object Model (POM) pattern to separate the test code from the page-specific code. The ./features/pages directory contains page objects that define the elements and actions for each page

## Reporting

This framework uses the allure-report package to generate HTML reports for the test results. The reports can be found in the ./reports.

npm install @wdio/allure-reporter --save-dev
npm i allure-commandline

## Despues de ejecutar el test

npx allure generate allure-results --clean && npx allure open
