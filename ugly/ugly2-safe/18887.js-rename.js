  (function (chinchilla, ibex) {
    var boar; // f
    
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
    var hamster; // t
    
      Object.defineProperty(raccoon, "__esModule", {
      value : true
    });
    raccoon.bar = void 0;
    raccoon.bar = hamster;
  });
  