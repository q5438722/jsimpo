  var raccoon; // CONST
  var hamster; // Extend
  var chinchilla; // Align
  
  raccoon = require('./const');
  hamster = require('../../utils/object/Extend');
  chinchilla = {
    In : require('./in'),
    To : require('./to')
  };
  chinchilla = hamster(! [], chinchilla, raccoon);
  module.exports = chinchilla;
  