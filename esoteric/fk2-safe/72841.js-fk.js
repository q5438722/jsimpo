"use strict";
  var raccoon; // printWarning
  
  raccoon = function () {
    
  };
  if (process.env.NODE_ENV !== "production")
  {
    raccoon = function (hamster, chinchilla) {
      var ibex; // index
      var boar; // message
      
          ibex = + [];
      boar = "Warning: " + (chinchilla.length > + [] ? hamster.replace(new RegExp("%s", "g"), function () {
        return chinchilla[ibex++];
      }) : hamster);
      if (typeof console !== "undefined")
      {
        console.error(boar);
      }
      try {
        throw new Error(boar);
      }
      catch (e) {
        
      }
    };
  }
  module.exports = function (llama) {
    raccoon('Please use `require("react-router-dom").%s` instead of `require("react-router-dom/%s")`. Support for the latter will be removed in the next major release.', 
    [llama, llama, ]);
  };
  