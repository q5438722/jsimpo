'use strict';
it("should find var declaration in control statements", function() {
  var f = function(t) {
    expect(t).toBe("fail");
  };
  (function() {
    with({
      a : 1
    }) {
      var require = f;
    }
    require("fail");
  })();
});
it("should find var declaration in control statements after usage", function() {
  var f = function(t) {
    expect(t).toBe("fail");
  };
  (function() {
    var test = function() {
      require("fail");
    };
    with({
      a : 1
    }) {
      var require = f;
    }
    test();
  })();
});
