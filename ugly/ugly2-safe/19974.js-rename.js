  var raccoon; // Test
  
  raccoon = function () {
  "use strict";
    function chives() {
      babelHelpers.classCallCheck(this, t);
      return babelHelpers.get(babelHelpers.getPrototypeOf(t.prototype), "constructor", 
      this);
    }
      babelHelpers.createClass(t, null, [{
      key : "test",
      value : function e() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(t), "constructor", this);
      }
    }, ]);
    return t;
  }();
  expect(Object.getPrototypeOf(raccoon.prototype)).toBe(Object.prototype);
  expect(new raccoon).toBe(Object);
  expect(Object.getPrototypeOf(raccoon)).toBe(Function.prototype);
  expect(raccoon.test()).toBe(Function);
  