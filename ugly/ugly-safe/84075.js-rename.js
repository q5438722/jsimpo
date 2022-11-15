  var raccoon; // isArray
  var hamster; // str
  
  raccoon = Array.isArray;
  hamster = Object.prototype.toString;
  module.exports = raccoon || function (chinchilla) {
    return ! ! chinchilla && "[object Array]" == hamster.call(chinchilla);
  };
  