const throwTypeErrorFunction = Object.getOwnPropertyDescriptor(Function.prototype, "arguments").get;
const nameDesc = Object.getOwnPropertyDescriptor(throwTypeErrorFunction, "name");
assertFalse(nameDesc.configurable, "configurable");assertFalse(nameDesc.enumerable, "enumerable");assertFalse(nameDesc.writable, "writable");assertThrows(function () {
  "use strict";
  throwTypeErrorFunction.name = "foo";
}, TypeError);const lengthDesc = Object.getOwnPropertyDescriptor(throwTypeErrorFunction, "length");
assertFalse(lengthDesc.configurable, "configurable");assertFalse(lengthDesc.enumerable, "enumerable");assertFalse(lengthDesc.writable, "writable");assertThrows(function () {
  "use strict";
  throwTypeErrorFunction.length = 42;
}, TypeError);assertTrue(Object.isFrozen(throwTypeErrorFunction));