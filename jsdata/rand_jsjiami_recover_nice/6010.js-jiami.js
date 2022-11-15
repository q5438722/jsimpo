'use strict';
define(["./object", "./string", "./date", "./array", "./function", "./json", "./xhr"], function(InkElement, canCreateDiscussions, dontForceConstraints) {
  function el(element) {
    return CustomTests["test"](element);
  }
  var CustomTests;
  CustomTests = /^define|^prevent|descriptor$/i;
  InkElement["failIfShimmed"](el);
  canCreateDiscussions["setWhitespaceChars"]("\\s");
  return {
    "failIfShimmed" : InkElement["failIfShimmed"],
    "setWhitespaceChars" : canCreateDiscussions["setWhitespaceChars"],
    "setIsoCompatTest" : dontForceConstraints["setIsoCompatTest"]
  };
});

