  var raccoon; // m2
  var hamster; // m4
  
  exports.module1 = require("./module?we1" + __resourceQuery);
  raccoon = require("./module?we2" + __resourceQuery);
  exports.module2 = raccoon;
  this.module3 = require("./module?we3" + __resourceQuery);
  hamster = require("./module?we4" + __resourceQuery);
  this.module4 = hamster;
  