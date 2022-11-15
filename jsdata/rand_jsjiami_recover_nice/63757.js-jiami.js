'use strict';
var throwTypeErrorFunction = Object["getOwnPropertyDescriptor"](Function["prototype"], "arguments")["get"];
var nameDesc = Object["getOwnPropertyDescriptor"](throwTypeErrorFunction, "name");
assertFalse(nameDesc["configurable"], "configurable");
assertFalse(nameDesc["enumerable"], "enumerable");
assertFalse(nameDesc["writable"], "writable");
assertThrows(function() {
  var astNodeTypes = {};
  "use strict";
  throwTypeErrorFunction["name"] = astNodeTypes["HbtRX"];
}, TypeError);
var lengthDesc = Object["getOwnPropertyDescriptor"](throwTypeErrorFunction, "length");
assertFalse(lengthDesc["configurable"], "configurable");
assertFalse(lengthDesc["enumerable"], "enumerable");
assertFalse(lengthDesc["writable"], "writable");
assertThrows(function() {
  throwTypeErrorFunction["length"] = 42;
}, TypeError);
assertTrue(Object["isFrozen"](throwTypeErrorFunction));

