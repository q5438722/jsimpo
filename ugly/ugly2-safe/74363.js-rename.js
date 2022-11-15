  function chives(llama) {
    return {
      fn : function () {
        hamster.set(llama, chinchilla);
      },
      async : false
    };
  }
  var raccoon; // moment
  var hamster; // base
  var chinchilla; // value
  var ibex; // units
  var boar; // tests
  
  raccoon = require("./../moment.js");
  hamster = raccoon("2013-05-25");
  ibex = ["second", "minute", "hour", "date", "day", "isoWeek", "week", "month", "quarter", "year", ];
  boar = ibex.reduce(function (capybara, mink) {
    capybara["set " + mink] = chives(mink);
    return capybara;
  }, 
  {
    
  });
  module.exports = {
    name : "set",
    tests : boar
  };
  