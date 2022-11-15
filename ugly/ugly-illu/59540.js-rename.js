load("test/mjsunit/mjsunit.js");var resolve_handler;
const promise = new Promise(function (e, s) {
  resolve_handler = e;
});
assertPromiseResult(promise);resolve_handler({ f: 3463 });
