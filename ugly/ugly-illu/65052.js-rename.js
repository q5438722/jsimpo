Debug = debug.Debug;var debug_step = 0;
var failure = null;
function listener(e, a, u, t) {
  if (e != Debug.DebugEvent.Break) return;try {
    if (debug_step == 0) {
      assertEquals(1, a.frame(0).evaluate("a").value());assertEquals(3, a.frame(0).evaluate("b").value());a.frame(0).evaluate("a = 4").value();debug_step++;
    } else {
      assertEquals(4, a.frame(0).evaluate("a").value());assertEquals(3, a.frame(0).evaluate("b").value());a.frame(0).evaluate("set_a_to_5()");a.frame(0).evaluate("b = 5").value();
    }
  } catch (e) {
    failure = e;
  }
}Debug.setListener(listener);function* generator(e, a) {
  function u() {
    e = 5;
  }u;const a = 3;
  debugger;yield e;yield a;debugger;yield e;return a;
}const foo = generator(1, 2);
assertEquals(4, foo.next().value);assertEquals(3, foo.next().value);assertEquals(5, foo.next().value);assertEquals(5, foo.next().value);assertNull(failure);Debug.setListener(null);
