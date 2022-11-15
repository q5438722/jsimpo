"use strict";
  var raccoon; // printWarning
  
  raccoon = function () {
    
  };
  if (process.env.NODE_ENV !== "production")
  {
    raccoon = function (hamster, chinchilla) {
      var ibex; // n
      var boar; // t
      
          ibex = 0;
      boar = "Warning: " + (chinchilla.length > 0 ? hamster.replace(new RegExp("%s", "g"), function () {
        return chinchilla[ibex++];
      }) : hamster);
      if (typeof console !== "undefined")
      {
        console.error(boar);
      }
      try {
        throw new Error(boar);
      }
      catch (r) {
        
      }
    };
  }
  module.exports = function (llama) {
    raccoon('Please use `require("react-router-dom").%s` instead of `require("react-router-dom/%s")`. Support for the latter will be removed in the next major release.', 
    [llama, llama, ]);
  };
  