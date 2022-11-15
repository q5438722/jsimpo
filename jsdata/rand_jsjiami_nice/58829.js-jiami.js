'use strict';
var vip = "vip.v6";
var _0x2695 = [vip, "w53CkcOeH8Od", "dcOnw6E7wpw=", "w71iXMKQwp/DssKTw6jDjcOH", "vGijp.v6VhnVZufHQeZySWc=="];
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
          if (value && str["replace"](/[GjVhnVZufHQeZySWc=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662780;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2695, 266, 68096);
var _0x3437 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x2695[a];
  if (_0x3437["roOszE"] === undefined) {
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
    _0x3437["DUqRWE"] = testcase;
    _0x3437["YFHtMg"] = {};
    _0x3437["roOszE"] = !![];
  }
  var A = _0x3437["YFHtMg"][a];
  if (A === undefined) {
    if (_0x3437["ZjrkaW"] === undefined) {
      _0x3437["ZjrkaW"] = !![];
    }
    value = _0x3437["DUqRWE"](value, opt_max);
    _0x3437["YFHtMg"][a] = value;
  } else {
    value = A;
  }
  return value;
};
let getCount = 0;
new (Intl[_0x3437("0", "4tZq")])([_0x3437("1", "9aVG")], {
  get "localeMatcher"() {
    assertEquals(0, getCount++);
  },
  get "type"() {
    var _0x2065bc = {
      "tfIEO" : function(require, load, callback) {
        return require(load, callback);
      }
    };
    _0x2065bc[_0x3437("2", "bnJE")](assertEquals, 1, getCount++);
  },
  get "style"() {
    assertEquals(2, getCount++);
  }
});
assertEquals(3, getCount);

