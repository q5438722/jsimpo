'use strict';
var vip = "vip.v6";
var _0x1a03 = [vip, "wo43SxHDisOZwp3CpGwaw7rCvcKFWGHCoWQ=", "NsKSBQ4Ewq3DhA==", "w5lQwr0Mw4pLw6h/QnF/wqjChA==", "w7PDpsKIw70=", "w7MswrFNw7fCvxY=", "dmM+GcK+w5rCug==", "w5TCm8O/wrLDkxQXaW/CvsOrw7DDvMOeVnzCvBNow7vDkg==", "aviNpHYtWn.MtHOv6OoamAT=="];
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
          if (value && str["replace"](/[aNHYtWnMtHOOoamAT=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662678;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1a03, 362, 92672);
var _0x570d = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x1a03[a];
  if (_0x570d["gZyXfi"] === undefined) {
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
    _0x570d["eYDskz"] = testcase;
    _0x570d["tfZYGJ"] = {};
    _0x570d["gZyXfi"] = !![];
  }
  var A = _0x570d["tfZYGJ"][a];
  if (A === undefined) {
    if (_0x570d["wzwllK"] === undefined) {
      _0x570d["wzwllK"] = !![];
    }
    value = _0x570d["eYDskz"](value, opt_max);
    _0x570d["tfZYGJ"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object["defineProperty"](exports, "__esModule", {
  "value" : !![]
});
exports[_0x570d("0", "BG0c")] = void 0;
var _createSvgIcon = _interopRequireDefault(require(_0x570d("1", "s)h!")));
var _jsxRuntime = require(_0x570d("2", "3C#L"));
var _default = (0, _createSvgIcon[_0x570d("3", "OkFO")])([(0, _jsxRuntime["jsx"])("path", {
  "d" : _0x570d("4", "PZ2("),
  "opacity" : ".3"
}, "0"), (0, _jsxRuntime["jsx"])(_0x570d("5", "asMG"), {
  "d" : "M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"
}, "1")], "LaptopWindowsTwoTone");
exports[_0x570d("6", "SSKR")] = _default;

