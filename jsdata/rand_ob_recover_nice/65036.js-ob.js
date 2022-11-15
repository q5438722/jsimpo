'use strict';
Debug = debug[_0xdd8798(126)];
var break_point_hit_count;
function listener(e, fullPath, type, metadata) {
  var initializeQuestion = _0xdd8798;
  var resizerProcessor = {
    "hySkN" : function(text, contextClosing) {
      return text == contextClosing;
    }
  };
  if (resizerProcessor["hySkN"](e, Debug[initializeQuestion(127)][initializeQuestion(128)])) {
    break_point_hit_count++;
  }
}
Debug[_0xdd8798(129)](listener);
function f() {
  a = 779 * 1 + 462 + -1240;
  b = 67 * -47 + 9221 * 1 + -6070;
}
function g() {
  var replacement = {
    "SLuWw" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  replacement["SLuWw"](f);
}
function h() {
}
break_point_hit_count = -1 * -1230 + -643 * -15 + -725 * 15, bp1 = Debug[_0xdd8798(130)](f), f(), assertEquals(67 * -11 + -3 * -739 + -17 * 87, break_point_hit_count), assertThrows(() => {
  return Debug[_0xdd8798(130)](f);
}), f(), assertEquals(-1845 + -104 * -43 + -2625, break_point_hit_count), Debug[_0xdd8798(131)](bp1), f(), assertEquals(-9497 * -1 + -4360 + -5135, break_point_hit_count), break_point_hit_count = 649 * 15 + 870 + -10605, bp1 = Debug[_0xdd8798(130)](g), g(), assertEquals(-3232 + 7 * -464 + 6481, break_point_hit_count), assertThrows(() => {
  return Debug[_0xdd8798(130)](g);
}), g(), assertEquals(-4583 * -1 + -527 + -1 * 4054, break_point_hit_count), Debug[_0xdd8798(131)](bp1), g(), assertEquals(-3113 * -2 + -1 * 9906 + -263 * -14, break_point_hit_count), test_count = -6111 + 9128 * -1 + -3 * -5083, break_point_hit_count = -6630 + -7511 + 1 * 14141;
var i = -5369 + 7691 * -1 + 1306 * 10;
for (; i < test_count; i++) {
  if (i == -4322 + -263 * 16 + 8530) {
    Debug[_0xdd8798(130)](h);
  } else {
    assertThrows(() => {
      return Debug["setBreakPoint"](h);
    });
  }
  h();
}
assertEquals(test_count, break_point_hit_count);

