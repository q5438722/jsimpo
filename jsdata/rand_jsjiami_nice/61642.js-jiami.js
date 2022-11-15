'use strict';
var vip = "vip.v6";
var _0x24eb = [vip, "RVnCnMKTw7fCm0tMDMKhwr46SgFW", "eRfDpX1Uw4rDtVoRw7nDgHsLfT7CuRgjDsOCd8K0wprDmcK6", "EMOQwrLDrMK7wqZYwqjDqHtUw7bCpWPDm2DDoMKM", "w5c4w6Y/wq1iw7fCpgtpBTTDs8KbMsOdFMK9wpVjwrRDbsKVZcOQXcO8w5E=", "ezbDhcKPwr7CuwNYw5tJVQFKFcOYAMOTwpo=", "BsO7woF3w4nCnQA5XlAxw7PDlBnCuMO5", "w4ECw6M0wrJ/w6jCt0cvCynCqMOaMcKVF8KmwqZdw6AXIcKgHsKRYcOTwosae3TClMO+wofDkh7Dsmc=", "wrzDhlfDgMO8QcOyJMKWwpBbNcOUw6IBLAtpfQ==", "XMOvU2sgw6vCsWnCkQgdw6IRRxzCvMKAGWLCiMOAw5dOw47DtMKww5jCgcOhMsKnw6LCi1YWSHRrw6Q=", "a8OvwrPCjcKKwobCvw7Cr8K2FVpDwoXChS3DnsKow5s=", 
"lvHCOipQ.WNv6CIKyOjssbs=="];
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
          if (value && str["replace"](/[lHCOQWNCIKyOjssbs=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662796;
  };
  return fn(++count, long) >> count ^ long;
})(_0x24eb, 155, 39680);
var _0x5ca4 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x24eb[a];
  if (_0x5ca4["Vjtoan"] === undefined) {
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
    _0x5ca4["gtSVzJ"] = testcase;
    _0x5ca4["OWmjpQ"] = {};
    _0x5ca4["Vjtoan"] = !![];
  }
  var A = _0x5ca4["OWmjpQ"][a];
  if (A === undefined) {
    if (_0x5ca4["QHMZPT"] === undefined) {
      _0x5ca4["QHMZPT"] = !![];
    }
    value = _0x5ca4["gtSVzJ"](value, opt_max);
    _0x5ca4["OWmjpQ"][a] = value;
  } else {
    value = A;
  }
  return value;
};
assertThrows(_0x5ca4("0", "WR#V"), SyntaxError, "Invalid destructuring assignment target");
assertThrows("import(foo) =>", SyntaxError, _0x5ca4("1", "gxNH"));
assertThrows(_0x5ca4("2", "lvk*"), SyntaxError, _0x5ca4("3", "cy7k"));
assertThrows(_0x5ca4("4", "r26D"), SyntaxError, "Invalid destructuring assignment target");
assertThrows(_0x5ca4("5", "vs0)"), SyntaxError, "'super' keyword unexpected here");
assertThrows("(bar(foo)) =>", SyntaxError, "Invalid destructuring assignment target");
assertThrows(_0x5ca4("6", "V4Mo"), ReferenceError, _0x5ca4("7", "[3^g"));
assertThrows(_0x5ca4("8", "gxNH"), ReferenceError, _0x5ca4("9", "rqGK"));

