"use strict";
  var raccoon; // value
  
  description("Test whether Promise treats thenable correctly.");
  raccoon = {
    then : function (hamster, chinchilla) {
      testPassed("value.then is called.");
      shouldBe("thisValue", "value");
      chinchilla("hello");
    }
  };
  new Promise(function (boar) {
    boar(raccoon);
  }).then(function () {
    testFailed("fulfilled");
    finishJSTest();
  }, 
  function (ibex) {
    testPassed("rejected");
    shouldBeEqualToString("result", "hello");
    finishJSTest();
  });
  debug("The promise is not rejected now.");
  