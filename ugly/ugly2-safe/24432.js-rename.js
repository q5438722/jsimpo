"use strict";
  function chives(chinchilla) {
    return chinchilla && chinchilla.__esModule ? chinchilla : {
      default : chinchilla
    };
  }
  var raccoon; // _foo
  var hamster; // _bar
  
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  raccoon = chives(require("foo"));
  hamster = require("bar");
  Object.keys(hamster).forEach(function (ibex) {
    if (ibex === "default" || ibex === "__esModule")
      return;
    if (ibex in exports && exports[ibex] === hamster[ibex])
      return;
    Object.defineProperty(exports, ibex, {
      enumerable : true,
      get : function () {
        return hamster[ibex];
      }
    });
  });
  