'use strict';
Debug = debug.Debug;
var break_point_hit_count;
function listener(event, e, n, froot) {
  if (event == Debug.DebugEvent.Break) {
    break_point_hit_count++;
  }
}
Debug.setListener(listener);
function f() {
  a = 1;
  b = 2;
}
function g() {
  f();
}
function h() {
}
break_point_hit_count = 0;
bp1 = Debug.setBreakPoint(f);
f();
assertEquals(1, break_point_hit_count);
assertThrows(() => {
  return Debug.setBreakPoint(f);
});
f();
assertEquals(2, break_point_hit_count);
Debug.clearBreakPoint(bp1);
f();
assertEquals(2, break_point_hit_count);
break_point_hit_count = 0;
bp1 = Debug.setBreakPoint(g);
g();
assertEquals(1, break_point_hit_count);
assertThrows(() => {
  return Debug.setBreakPoint(g);
});
g();
assertEquals(2, break_point_hit_count);
Debug.clearBreakPoint(bp1);
g();
assertEquals(2, break_point_hit_count);
test_count = 10;
break_point_hit_count = 0;
var i = 0;
for (; i < test_count; i++) {
  if (i == 0) {
    Debug.setBreakPoint(h);
  } else {
    assertThrows(() => {
      return Debug.setBreakPoint(h);
    });
  }
  h();
}
assertEquals(test_count, break_point_hit_count);

