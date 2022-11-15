'use strict';
test(function() {
  var callbackVals = _0x2c96cc["JfRaJ"]["split"]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        assert_equals(_0x2c96cc["LAyOY"](params, ""), params + "");
        continue;
      case "1":
        assert_equals(params + "", "a=B&c=d&e=f");
        continue;
      case "2":
        params["set"]("a", "B");
        continue;
      case "3":
        params["set"]("e", "f");
        continue;
      case "4":
        assert_equals(_0x2c96cc["XnhYo"](params, ""), params + "");
        continue;
      case "5":
        params["set"]("a", "B");
        continue;
      case "6":
        params = new URLSearchParams(_0x2c96cc["NRpcI"]);
        continue;
      case "7":
        var params = new URLSearchParams(_0x2c96cc["vmwHN"]);
        continue;
    }
    break;
  }
}, "Set basics");
test(function() {
  var callbackVals = "4|6|5|2|0|3|7|8|1"["split"]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        assert_true(p["has"]("a"), _0x3f987a["yeGbc"]);
        continue;
      case "1":
        assert_equals(p["get"]("a"), "4", 'Search params object has name "a" with value "4"');
        continue;
      case "2":
        p["set"](_0x3f987a["icFwZ"], 4);
        continue;
      case "3":
        assert_equals(p["get"]("a"), "1", _0x3f987a["WhOTN"]);
        continue;
      case "4":
        var p = new URLSearchParams("a=1&a=2&a=3");
        continue;
      case "5":
        assert_equals(p["get"]("a"), "1", _0x3f987a["WhOTN"]);
        continue;
      case "6":
        assert_true(p["has"]("a"), _0x3f987a["yeGbc"]);
        continue;
      case "7":
        p["set"]("a", 4);
        continue;
      case "8":
        assert_true(p["has"]("a"), _0x3f987a["yeGbc"]);
        continue;
    }
    break;
  }
}, "URLSearchParams.set");

