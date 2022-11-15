'use strict';
description("This tests that array construction via a host call works.");
function constructArray(genericName) {
  return new genericName(100);
}
var i = 0;
for (; i < 3; ++i) {
  var array = constructArray(Array);
  shouldBeTrue("array instanceof Array");
  shouldBe("array.length", "100");
}
;
