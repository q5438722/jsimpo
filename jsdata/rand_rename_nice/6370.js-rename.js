'use strict';
define(["./forOwn"], function(isAvailable) {
  function treatCSSCode(cssCode) {
    var checkedBackgroundNodes = [];
    isAvailable(cssCode, function(n, canCreateDiscussions) {
      checkedBackgroundNodes.push(n);
    });
    return checkedBackgroundNodes;
  }
  return treatCSSCode;
});

