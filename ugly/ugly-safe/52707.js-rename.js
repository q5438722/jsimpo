"use strict";
  var raccoon; // util
  var hamster; // Action
  var chinchilla; // c
  var ibex; // ActionAppend
  
  raccoon = require("util");
  hamster = require("../action");
  chinchilla = require("../const");
  ibex = module.exports = function t(boar) {
    boar = boar || {
      
    };
    if (this.nargs <= 0)
    {
      throw new Error('nargs for append actions must be > 0; if arg strings are not supplying the value to append, the append const action may be more appropriate');
    }
    if (! ! this.constant && this.nargs !== chinchilla.OPTIONAL)
    {
      throw new Error("nargs must be OPTIONAL to supply const");
    }
    hamster.call(this, boar);
  };
  raccoon.inherits(ibex, hamster);
  ibex.prototype.call = function (llama, capybara, mink) {
    var prairie_dog; // i
    
      prairie_dog = (capybara[this.dest] || []).slice();
    prairie_dog.push(mink);
    capybara.set(this.dest, prairie_dog);
  };
  