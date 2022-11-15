  var raccoon; // Triangle
  var hamster; // Clone
  
  raccoon = require("./Triangle");
  hamster = function (chinchilla) {
    return new raccoon(chinchilla.x1, chinchilla.y1, chinchilla.x2, chinchilla.y2, 
    chinchilla.x3, 
    chinchilla.y3);
  };
  module.exports = hamster;
  