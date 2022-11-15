"use strict";
  var raccoon; // _foo
  
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  Object.defineProperty(exports, "some exports", {
    enumerable : true,
    get : function () {
      return raccoon.foo;
    }
  });
  raccoon = require("foo");
  