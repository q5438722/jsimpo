"use strict";
  function chives(raccoon, hamster, chinchilla, ibex) {
    var boar; // e
    var llama; // t
    var capybara; // o
    
      if (typeof raccoon !== "function")
    {
      throw new TypeError('"callback" argument must be a function');
    }
    boar = arguments.length;
    switch (boar) {
      case 0:
        

      case 1:
        return process.nextTick(raccoon);

      case 2:
        return process.nextTick(function e() {
          raccoon.call(null, hamster);
        });

      case 3:
        return process.nextTick(function e() {
          raccoon.call(null, hamster, chinchilla);
        });

      case 4:
        return process.nextTick(function e() {
          raccoon.call(null, hamster, chinchilla, ibex);
        });

      default:
        llama = new Array(boar - 1);
        capybara = 0;
        while (capybara < llama.length)
        {
          llama[capybara++] = arguments[capybara];
        }
        return process.nextTick(function e() {
          raccoon.apply(null, llama);
        });
      
    }
  }
  if (! process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0)
  {
    module.exports = {
      nextTick : nextTick
    };
  }
  else
  {
    module.exports = process;
  }
  