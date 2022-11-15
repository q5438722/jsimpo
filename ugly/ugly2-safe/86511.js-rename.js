  var raccoon; // Circle
  var hamster; // Clone
  
  raccoon = require("./Circle");
  hamster = function (chinchilla) {
    return new raccoon(chinchilla.x, chinchilla.y, chinchilla.radius);
  };
  module.exports = hamster;
  