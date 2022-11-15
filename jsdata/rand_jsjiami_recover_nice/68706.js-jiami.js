'use strict';
it("should find var declaration in control statements", function() {
  var assertRAFsUsed = function(bool) {
    expect(bool)["toBe"](_0x2e9b18["BxNWD"]);
  };
  (function() {
    with({
      "a" : 1
    }) {
      var gotoNewOfflinePage = assertRAFsUsed;
    }
    gotoNewOfflinePage(_0x2e9b18["BxNWD"]);
  })();
});
it("should find var declaration in control statements after usage", function() {
  var assertRAFsUsed = function(bool) {
    expect(bool)["toBe"](_0x4a7078["msnoW"]);
  };
  (function() {
    var assertRAFsUsed = function() {
      var _0x53d822 = {
        "BnEVZ" : _0x4a7078["msnoW"]
      };
      if (_0x4a7078["WCeVo"] === _0x4a7078["WCeVo"]) {
        expect(_0x4a7078["msnoW"]);
      } else {
        expect(x)["toBe"](_0x53d822["BnEVZ"]);
      }
    };
    with({
      "a" : 1
    }) {
      var expect = assertRAFsUsed;
    }
    assertRAFsUsed();
  })();
});

