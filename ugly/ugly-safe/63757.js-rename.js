  var raccoon; // throwTypeErrorFunction
  var hamster; // nameDesc
  var chinchilla; // lengthDesc
  
  raccoon = Object.getOwnPropertyDescriptor(Function.prototype, "arguments").get;
  hamster = Object.getOwnPropertyDescriptor(raccoon, "name");
  assertFalse(hamster.configurable, "configurable");
  assertFalse(hamster.enumerable, "enumerable");
  assertFalse(hamster.writable, "writable");
  assertThrows(function () {
  "use strict";
    raccoon.name = "foo";
  }, 
  TypeError);
  chinchilla = Object.getOwnPropertyDescriptor(raccoon, "length");
  assertFalse(chinchilla.configurable, "configurable");
  assertFalse(chinchilla.enumerable, "enumerable");
  assertFalse(chinchilla.writable, "writable");
  assertThrows(function () {
  "use strict";
    raccoon.length = 42;
  }, 
  TypeError);
  assertTrue(Object.isFrozen(raccoon));
  