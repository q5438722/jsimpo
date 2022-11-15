'use strict';
var vip = "vip.v6";
var _0x21dc = [vip, "w6pMwoEUwqs=", "wq0lwr5RRMKUNsKMMcOKwoQHwowpL8OsE1tywrdSw7Q5wozDi2bDhFXDsMKrwonDqMKFwqNwesKSw7ZJw6QKKsK/w5V7w57CpcKJwrXDq8KAwpZ/w4o=", "D2LDnMKVw6vDlMO2Lmh/wq9Qw53DnsO7EMK7ZjHCjMOyw68Sw4LCqsOdD8KCwqI+", "SXHCpMK/W0Aq", "OcKOFAV7Jg==", "w6XCu8K3wp0CcUs=", "w4rChMO0w7xvwqrDp8K0", "YsO2YMKdOMKFwqIzw50/SsOiI8Orw4I=", "USnDj04=", "w64TwpXDhy80RXQRFg==", "w4bDmC5z", "H2jDhcKQw7fDuMOsIVl5wqhB", "viKp.ve6AOFhBSxWeYWECeDj=="];
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
          if (value && str["replace"](/[KeAOFhBSxWeYWECeDj=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662782;
  };
  return fn(++count, long) >> count ^ long;
})(_0x21dc, 156, 39936);
var _0x7c5d = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x21dc[a];
  if (_0x7c5d["TVJRMc"] === undefined) {
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
    _0x7c5d["lqgRRY"] = testcase;
    _0x7c5d["PIsvJP"] = {};
    _0x7c5d["TVJRMc"] = !![];
  }
  var A = _0x7c5d["PIsvJP"][a];
  if (A === undefined) {
    if (_0x7c5d["vnAqrR"] === undefined) {
      _0x7c5d["vnAqrR"] = !![];
    }
    value = _0x7c5d["lqgRRY"](value, opt_max);
    _0x7c5d["PIsvJP"][a] = value;
  } else {
    value = A;
  }
  return value;
};
let {
  session : session,
  contextGroup : contextGroup,
  Protocol : Protocol
} = InspectorTest[_0x7c5d("0", "haL)")](_0x7c5d("1", "vdRV"));
contextGroup[_0x7c5d("2", "BX6$")]();
Protocol[_0x7c5d("3", "ng0r")][_0x7c5d("4", "tx^D")]();
Protocol[_0x7c5d("5", "xleM")]["onConsoleAPICalled"](InspectorTest["logMessage"]);
Protocol["Runtime"][_0x7c5d("6", "2S@I")]({
  "expression" : _0x7c5d("7", "Gjsr")
})[_0x7c5d("8", "v85m")](InspectorTest[_0x7c5d("9", "HoO5")])[_0x7c5d("a", "]Y7b")](InspectorTest[_0x7c5d("b", "BX6$")]);

