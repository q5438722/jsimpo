'use strict';
function TestNestedLoops() {
  var _0x64f23f = 0;
  var _0x3ef30a = 0;
  for (; _0x3ef30a < 200; _0x3ef30a = _0x3ef30a + 1) {
    var _0x5626cf = 0;
    for (; _0x5626cf < 200; _0x5626cf = _0x5626cf + 1) {
      _0x64f23f = _0x64f23f + 1;
    }
  }
  return _0x64f23f;
}
assertEquals(200 * 200, TestNestedLoops());

