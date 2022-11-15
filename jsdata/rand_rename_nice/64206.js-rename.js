'use strict';
function TestNestedLoops() {
  var ret = 0;
  var s = 0;
  for (; s < 200; s = s + 1) {
    var rot = 0;
    for (; rot < 200; rot = rot + 1) {
      ret = ret + 1;
    }
  }
  return ret;
}
assertEquals(200 * 200, TestNestedLoops());

