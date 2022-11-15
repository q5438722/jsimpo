  var raccoon; // Test
  
  raccoon = function () {
  "use strict";
    function chives() {
      babelHelpers.classCallCheck(this, raccoon);
      return babelHelpers.get(babelHelpers.getPrototypeOf(raccoon.prototype), "constructor", 
      this);
    }
      babelHelpers.createClass(raccoon, null, [{
      key : "test",
      value : function test() {
        return babelHelpers.get(babelHelpers.getPrototypeOf(raccoon), "constructor", 
        this);
      }
    }, ]);
    return raccoon;
  }();
  expect(Object.getPrototypeOf(raccoon.prototype)).toBe(Object.prototype);
  expect(new raccoon()).toBe(Object);
  expect(Object.getPrototypeOf(raccoon)).toBe([]["filter"].prototype);
  expect(raccoon.test()).toBe([]["filter"]);
  