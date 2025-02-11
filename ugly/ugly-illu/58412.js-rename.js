"use strict";
description("Test whether Promise treats thenable correctly.");var thisValue;
var result;
const value = { then: function (e, t) {
    testPassed("value.then is called.");thisValue = this;shouldBe("thisValue", "value");t("hello");
  } };
new Promise(function (e) {
  e(value);
}).then(function () {
  testFailed("fulfilled");finishJSTest();
}, function (e) {
  testPassed("rejected");result = e;shouldBeEqualToString("result", "hello");finishJSTest();
});debug("The promise is not rejected now.");
