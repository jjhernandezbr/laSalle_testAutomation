const { Before } = require('cucumber');


module.exports = {
    // Location of feature files
    specs: [
      './features/*.feature'
    ],
  
    // Location of step definition files
    step_definitions: [
      './features/*.js'
    ],
  
    // Location of support files
    support: [
      './support/*.js'
    ],
  
    // Formatter to use for output
    format: 'progress',
  };