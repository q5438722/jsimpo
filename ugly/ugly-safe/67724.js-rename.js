  module.exports = function (raccoon) {
    var hamster; // t
    var chinchilla; // e
    var ibex; // c
    var boar; // n
    
      try {
      hamster = require(raccoon + ".js");
    }
    catch (r) {
      
    }
    try {
      chinchilla = require("" + raccoon + ".js");
    }
    catch (r) {
      
    }
    try {
      ibex = require("./" + raccoon + ".js");
    }
    catch (r) {
      
    }
    try {
      boar = require("./" + raccoon);
    }
    catch (r) {
      
    }
    return {
      a : typeof hamster === "function",
      b : typeof chinchilla === "function",
      c : typeof ibex === "function",
      d : typeof boar === "function"
    };
  };
  