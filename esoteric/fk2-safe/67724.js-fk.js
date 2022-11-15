  module.exports = function (raccoon) {
    var hamster; // a
    var chinchilla; // b
    var ibex; // c
    var boar; // d
    
      try {
      hamster = require(raccoon + ".js");
    }
    catch (e) {
      
    }
    try {
      chinchilla = require("" + raccoon + ".js");
    }
    catch (e) {
      
    }
    try {
      ibex = require("./" + raccoon + ".js");
    }
    catch (e) {
      
    }
    try {
      boar = require("./" + raccoon);
    }
    catch (e) {
      
    }
    return {
      a : typeof hamster === "function",
      b : typeof chinchilla === "function",
      c : typeof ibex === "function",
      d : typeof boar === "function"
    };
  };
  