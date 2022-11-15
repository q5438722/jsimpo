"use strict";
  function chives(hamster) {
    return hamster && hamster.__esModule ? hamster : {
      default : hamster
    };
  }
  var raccoon; // _foo
  
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  exports["default"] = void 0;
  raccoon = chives(require("foo"));
  console.log(raccoon["default"]);
  exports["default"] = 5;
  