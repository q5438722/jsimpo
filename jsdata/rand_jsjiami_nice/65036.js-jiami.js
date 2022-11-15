'use strict';
var vip = "vip.v6";
var _0x550c = [vip, "woAdE8KuMA==", "wpcrQS9n", "OcO0wr5vwqIWCsKlw40bw4k=", "wpDCjT7Ci3vCnmzDhsKmEsOQIsOa", "OcO0wr5hwrkAH8Krw7MRw5LDjVU=", "wothETrDm8KxFywQIsKUT8OMdMO5", "wptoABnDm8KWBCIhJsKtTsOR", "cEoNasKFZsK7w6JKw5zDqcKRd8KywoE=", "wr03ZT1tw4rDhcOJwo/CuhVxJg==", "vKiFbOAGcEp.vK6mZWnFJBS=="];
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
          if (value && str["replace"](/[KFbOAGcEKmZWnFJBS=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662133;
  };
  return fn(++count, long) >> count ^ long;
})(_0x550c, 486, 124416);
var _0x56ae = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x550c[a];
  if (_0x56ae["blNTqV"] === undefined) {
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
    _0x56ae["HEqRBG"] = testcase;
    _0x56ae["TqowPU"] = {};
    _0x56ae["blNTqV"] = !![];
  }
  var A = _0x56ae["TqowPU"][a];
  if (A === undefined) {
    if (_0x56ae["JXxJzl"] === undefined) {
      _0x56ae["JXxJzl"] = !![];
    }
    value = _0x56ae["HEqRBG"](value, opt_max);
    _0x56ae["TqowPU"][a] = value;
  } else {
    value = A;
  }
  return value;
};
Debug = debug[_0x56ae("0", "Hhh&")];
var break_point_hit_count;
function listener(e, fullPath, type, metadata) {
  var resizerProcessor = {
    "YyPPx" : function(text, contextClosing) {
      return text == contextClosing;
    }
  };
  if (resizerProcessor[_0x56ae("1", "#7EQ")](e, Debug["DebugEvent"]["Break"])) {
    break_point_hit_count++;
  }
}
Debug[_0x56ae("2", "vJiY")](listener);
function f() {
  a = 1;
  b = 2;
}
function g() {
  f();
}
function h() {
}
break_point_hit_count = 0;
bp1 = Debug[_0x56ae("3", "9Bak")](f);
f();
assertEquals(1, break_point_hit_count);
assertThrows(() => {
  return Debug[_0x56ae("4", "vJiY")](f);
});
f();
assertEquals(2, break_point_hit_count);
Debug[_0x56ae("5", "IJsU")](bp1);
f();
assertEquals(2, break_point_hit_count);
break_point_hit_count = 0;
bp1 = Debug[_0x56ae("6", "IJsU")](g);
g();
assertEquals(1, break_point_hit_count);
assertThrows(() => {
  return Debug["setBreakPoint"](g);
});
g();
assertEquals(2, break_point_hit_count);
Debug[_0x56ae("7", "X8bh")](bp1);
g();
assertEquals(2, break_point_hit_count);
test_count = 10;
break_point_hit_count = 0;
var i = 0;
for (; i < test_count; i++) {
  if (i == 0) {
    Debug["setBreakPoint"](h);
  } else {
    assertThrows(() => {
      return Debug[_0x56ae("8", "#7EQ")](h);
    });
  }
  h();
}
assertEquals(test_count, break_point_hit_count);

