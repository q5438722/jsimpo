'use strict';
function f() {
  throw "boom";
  try {
  } catch (o) {
  }
}
assertThrows(f);

