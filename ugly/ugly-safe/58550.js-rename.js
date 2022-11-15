  function chives(raccoon) {
    descriptor = Object.getOwnPropertyDescriptor(raccoon, "prototype");
    shouldBeTrue("descriptor['writable']");
    shouldBeFalse("descriptor['enumerable']");
    shouldBeFalse("descriptor['configurable']");
  }
  function bean_sprout() {
    
  }
  function broccoflower() {
    
  }
  function green_bean() {
    
  }
  description("Test for function.prototype's property descriptor.");
  chives(a);
  b.prototype = {
    
  };
  chives(b);
  shouldThrow("Object.defineProperty(c, 'prototype', { get: function(){} })");
  chives(c);
  