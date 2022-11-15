'use strict';
Debug = debug.Debug;
var debug_step = 0;
var failure = null;
function listener(event, a, ud, un) {
  if (event != Debug.DebugEvent.Break) {
    return;
  }
  try {
    if (debug_step == 0) {
      assertEquals(1, a.frame(0).evaluate("a").value());
      assertEquals(3, a.frame(0).evaluate("b").value());
      a.frame(0).evaluate("a = 4").value();
      debug_step++;
    } else {
      assertEquals(4, a.frame(0).evaluate("a").value());
      assertEquals(3, a.frame(0).evaluate("b").value());
      a.frame(0).evaluate("set_a_to_5()");
      a.frame(0).evaluate("b = 5").value();
    }
  } catch (FETCH_FAILURE) {
    failure = FETCH_FAILURE;
  }
}
Debug.setListener(listener);
function* generator(e, state) {
  function write_dash_term() {
    e = 5;
  }
  write_dash_term;
  state = 3;
  debugger;
  yield e;
  yield state;
  debugger;
  yield e;
  return state;
}
var foo = generator(1, 2);
assertEquals(4, foo.next().value);
assertEquals(3, foo.next().value);
assertEquals(5, foo.next().value);
assertEquals(5, foo.next().value);
assertNull(failure);
Debug.setListener(null);

