Debug = debug.Debug;var break_point_hit_count;
function listener(t, e, n, i) {
  if (t == Debug.DebugEvent.Break) {
    break_point_hit_count++;
  }
}Debug.setListener(listener);function f() {
  a = 1;b = 2;
}function g() {
  a = 1;b = 2;
}function h() {}break_point_hit_count = 0;bp1 = Debug.setBreakPoint(f);a = 1;b = 2;assertEquals(1, break_point_hit_count);assertThrows(() => Debug.setBreakPoint(f));a = 1;b = 2;assertEquals(2, break_point_hit_count);Debug.clearBreakPoint(bp1);a = 1;b = 2;assertEquals(2, break_point_hit_count);break_point_hit_count = 0;bp1 = Debug.setBreakPoint(g);a = 1;b = 2;assertEquals(1, break_point_hit_count);assertThrows(() => Debug.setBreakPoint(g));a = 1;b = 2;assertEquals(2, break_point_hit_count);Debug.clearBreakPoint(bp1);a = 1;b = 2;assertEquals(2, break_point_hit_count);test_count = 10;break_point_hit_count = 0;for (var i = 0; i < test_count; i++) {
  if (i == 0) {
    Debug.setBreakPoint(h);
  } else {
    assertThrows(() => Debug.setBreakPoint(h));
  }
}assertEquals(test_count, break_point_hit_count);
