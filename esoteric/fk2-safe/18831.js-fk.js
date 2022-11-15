  (function (chinchilla, ibex) {
    var boar; // mod
    
      if (typeof define === "function" && define.amd)
    {
      define(["exports", ], ibex);
    }
    else
      if (typeof exports !== "undefined")
      {
        ibex(exports);
      }
      else
      {
        boar = {
          exports : {
            
          }
        };
        ibex(boar.exports);
        chinchilla.input = boar.exports;
      }
  })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, 
  function (raccoon) {
  "use strict";
    var hamster; // _default
    
      raccoon.__esModule = ! ! [];
    raccoon.default = void + [];
    hamster = [];
    raccoon.default = hamster;
  });
  