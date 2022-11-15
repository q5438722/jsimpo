'use strict';
description("Test whether Promise treats thenable correctly.");
var thisValue;
var result;
var value = {
  then : function(onRes, onRej) {
    testPassed("value.then is called.");
    thisValue = this;
    shouldBe("thisValue", "value");
    onRej("hello");
  }
};
(new Promise(function(e) {
  e(value);
})).then(function() {
  testFailed("fulfilled");
  finishJSTest();
}, function(q_result) {
  testPassed("rejected");
  result = q_result;
  shouldBeEqualToString("result", "hello");
  finishJSTest();
});
debug("The promise is not rejected now.");

