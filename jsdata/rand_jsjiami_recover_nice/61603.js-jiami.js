'use strict';
var __v_9 = {};
var __v_0 = 0;
for (; __v_0 < 1000; __v_0++) {
}
__v_2 = {
  "__v_2" : 1
};
__v_12 = new Proxy({}, {});
function f() {
  var p = new Proxy({}, __v_2);
  __v_9["__proto__"] = p;
  __v_2["getPrototypeOf"] = function() {
    return __v_9;
  };
  Object["prototype"]["isPrototypeOf"]["call"](__v_0, p);
}
assertThrows(f, RangeError);

