  var raccoon; // through
  
  raccoon = require("through2");
  module.exports = function (hamster) {
    return raccoon(function (chinchilla, ibex, boar) {
      this.push(String(chinchilla).replace(new RegExp("BBB", "g"), "50"));
      boar();
    });
  };
  