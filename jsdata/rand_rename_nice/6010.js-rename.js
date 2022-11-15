'use strict';
define(["./object", "./string", "./date", "./array", "./function", "./json", "./xhr"], function(object, string, date) {
  function regexpShouldThrow(feature) {
    return failTestRx.test(feature);
  }
  var failTestRx;
  failTestRx = /^define|^prevent|descriptor$/i;
  object.failIfShimmed(regexpShouldThrow);
  string.setWhitespaceChars("\\s");
  return {
    failIfShimmed : object.failIfShimmed,
    setWhitespaceChars : string.setWhitespaceChars,
    setIsoCompatTest : date.setIsoCompatTest
  };
});

