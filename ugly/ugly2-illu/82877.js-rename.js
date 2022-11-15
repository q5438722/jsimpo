"use strict";
angular.module("test", []).controller("TestController", function (e, l, t) {
  e.yOffset = 50;t.scrollTo = function (t) {
    if (l.hash() !== t) {
      l.hash(t);
    } else {
      e();
    }
  };
});
