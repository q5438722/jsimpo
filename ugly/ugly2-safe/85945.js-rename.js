  var raccoon; // CONST
  var hamster; // CounterClockwise
  
  raccoon = require("../const");
  hamster = function (chinchilla) {
    if (chinchilla > Math.PI)
    {
      chinchilla = chinchilla - raccoon.PI2;
    }
    return Math.abs(((chinchilla + raccoon.TAU) % raccoon.PI2 - raccoon.PI2) % raccoon.PI2);
  };
  module.exports = hamster;
  