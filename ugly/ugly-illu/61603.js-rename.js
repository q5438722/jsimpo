const __v_9 = {};
__v_2 = { __v_2: 1 };__v_12 = new Proxy({}, {});function f() {
  const _ = new Proxy({}, __v_2);

  __v_9.__proto__ = _;__v_2.getPrototypeOf = function () {
    return __v_9;
  };Object.prototype.isPrototypeOf.call(__v_0, _);
}assertThrows(f, RangeError);
