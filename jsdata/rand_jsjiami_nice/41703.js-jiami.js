'use strict';
var vip = "vip.v6";
var _0x196c = [vip, "w6HDgBRs", "w5vDklnDmWrCrMKBCsOHOsKowpMkwpfCi2gKCXYqw57DtMOXw7fCrzAdw4N+wqEsw4/CkcK5NGEfwqsPbMOIwrpFS8OtDMKGX8K8wpvCu8Kbwq0lw7fDucKew5IZwrtEw5vClgEhWjzChMKjwqTDusO2woZpKsOzw4TDikHCnGFcPSLCtXthJsKRw4zDm8OhwobDlDnCi8OVw4c0w40CdzRTw7xyEH4DwpXCsMOwXh7Cv8OKMCLDosKyw5h5w7siRsOzwr/CjHZ+OcKtw5QKwrAiBcKYEcOmwrXCjwpLch5OIGrCvn8fwpTCp8KaTMKiw4t6w7kaw47Dn8KBwqZIwrxww597UcOOwokXwpnDqcKTYcO8w4ltwrwpw77CpcOgQxHDmcK1w6zCq8KCCcKaw5UuwpHCjlE6wqfCpg==", "Kz8owpATwpZx", "EwhrPEjDgDUQw7zDnxAnw73CssOGH8KlDcKLcxjDlDNqPjhWN8OBw5jCocOKw6bCi2lpWMKucsOewqs6LsK3", 
"CHnDgMOvacO7w4rCiCUQ", "TlfCoiAiVDk=", "Z3gsVMOWwozDuEzDmi0VbUBMw4DCjMOJNWg7ZA==", "w4TCiCLDmcOtV8KXw7N5wo/DlcKRIcKzCQEa", "wq5HMA==", "vZiSpGh.v6ueWrZgtgKGzdW=="];
(function(obj, count, long) {
  var fn = function(to, value, str, val, key) {
    value = value >> 8;
    key = "po";
    var str = "shift";
    var method = "push";
    if (value < to) {
      for (; --to;) {
        val = obj[str]();
        if (value === to) {
          value = val;
          str = obj[key + "p"]();
        } else {
          if (value && str["replace"](/[ZSGhueWrZgtgKGzdW=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661964;
  };
  return fn(++count, long) >> count ^ long;
})(_0x196c, 228, 58368);
var _0x32a0 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x196c[a];
  if (_0x32a0["vSOJMA"] === undefined) {
    (function() {
      var jid = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      var listeners = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      if (!jid["atob"]) {
        jid["atob"] = function(i) {
          var str = String(i)["replace"](/=+$/, "");
          var bc = 0;
          var bs;
          var buffer;
          var Y = 0;
          var pix_color = "";
          for (; buffer = str["charAt"](Y++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? pix_color = pix_color + String["fromCharCode"](255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = listeners["indexOf"](buffer);
          }
          return pix_color;
        };
      }
    })();
    var testcase = function(data, fn) {
      var secretKey = [];
      var y = 0;
      var temp;
      var testResult = "";
      var tempData = "";
      data = atob(data);
      var val = 0;
      var key = data["length"];
      for (; val < key; val++) {
        tempData = tempData + ("%" + ("00" + data["charCodeAt"](val)["toString"](16))["slice"](-2));
      }
      data = decodeURIComponent(tempData);
      var x = 0;
      for (; x < 256; x++) {
        secretKey[x] = x;
      }
      x = 0;
      for (; x < 256; x++) {
        y = (y + secretKey[x] + fn["charCodeAt"](x % fn["length"])) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
      }
      x = 0;
      y = 0;
      var i = 0;
      for (; i < data["length"]; i++) {
        x = (x + 1) % 256;
        y = (y + secretKey[x]) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
        testResult = testResult + String["fromCharCode"](data["charCodeAt"](i) ^ secretKey[(secretKey[x] + secretKey[y]) % 256]);
      }
      return testResult;
    };
    _0x32a0["EslzvT"] = testcase;
    _0x32a0["mOVonJ"] = {};
    _0x32a0["vSOJMA"] = !![];
  }
  var A = _0x32a0["mOVonJ"][a];
  if (A === undefined) {
    if (_0x32a0["VuuImB"] === undefined) {
      _0x32a0["VuuImB"] = !![];
    }
    value = _0x32a0["EslzvT"](value, opt_max);
    _0x32a0["mOVonJ"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
var _interopRequireDefault = require(_0x32a0("0", "RTsi"));
Object["defineProperty"](exports, _0x32a0("1", "h@O6"), {
  "value" : !![]
});
exports[_0x32a0("2", "4NOz")] = void 0;
var _createSvgIcon = _interopRequireDefault(require(_0x32a0("3", "#^ay")));
var _jsxRuntime = require(_0x32a0("4", "74]R"));
var _default = (0, _createSvgIcon["default"])((0, _jsxRuntime[_0x32a0("5", "PFoq")])(_0x32a0("6", "ljxD"), {
  "d" : _0x32a0("7", "Qq%g")
}), "PhoneIphoneOutlined");
exports[_0x32a0("8", "QhB@")] = _default;

