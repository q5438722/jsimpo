"use strict";
  function chives(boar) {
    return boar && boar.__esModule ? boar : {
      default : boar
    };
  }
  function bean_sprout(llama, capybara) {
    if (! (llama instanceof capybara))
    {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function broccoflower(mink, prairie_dog) {
    if (! mink)
    {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return prairie_dog && (typeof prairie_dog === "object" || typeof prairie_dog === "function") ? prairie_dog : mink;
  }
  function green_bean(mantis, dogfish) {
    if (typeof dogfish !== "function" && dogfish !== null)
    {
      throw new TypeError("Super expression must either be null or a function, not " + typeof dogfish);
    }
    mantis.prototype = Object.create(dogfish && dogfish.prototype, {
      constructor : {
        value : mantis,
        enumerable : false,
        writable : true,
        configurable : true
      }
    });
    if (dogfish)
      Object.setPrototypeOf ? Object.setPrototypeOf(mantis, dogfish) : mantis.__proto__ = dogfish;
  }
  var raccoon; // _node
  var hamster; // _node2
  var chinchilla; // _types
  var ibex; // Comment
  
  exports.__esModule = true;
  raccoon = require("./node");
  hamster = chives(raccoon);
  chinchilla = require("./types");
  ibex = function (snail) {
    function amaranth(dunlin) {
      var termite; // t
      
          bean_sprout(this, o);
      termite = broccoflower(this, snail.call(this, dunlin));
      termite.type = chinchilla.COMMENT;
      return termite;
    }
      green_bean(o, snail);
    return o;
  }(hamster.default);
  exports.default = ibex;
  module.exports = exports["default"];
  