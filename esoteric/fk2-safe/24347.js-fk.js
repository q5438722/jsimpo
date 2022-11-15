"use strict";
  var raccoon; // _foo
  
  Object.defineProperty(exports, "__esModule", {
    value : ! ! []
  });
  Object.defineProperty(exports, "some exports", {
    enumerable : ! ! [],
    get : function () {
      return raccoon.foo;
    }
  });
  raccoon = require("foo");
  