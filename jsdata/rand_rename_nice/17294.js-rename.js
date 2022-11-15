'use strict';
function* f() {
  yield;
  [yield];
  {
    yield;
  }
  yield;
  if (true) {
    yield;
  } else {
    1;
  }
  yield;
  1;
}
;
