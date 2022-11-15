'use strict';
var vip = "vip.v6";
var _0x1533 = [vip, "w4rDh8KcHsOs", "w6QjwpA5E8ORBcO+wqMIDsKnGWs=", "w4lpJSbCig==", "Gm/CtAsY", "w6IJwq9uwrk=", "V8OWw4kyYg==", "w7DCvcK1w7AN", "PcOiw4VHwqk=", "wo0mYGtC", "vsisqpM.v6JZMhZEZXuHscl=="];
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
          if (value && str["replace"](/[ssqMJZMhZEZXuHscl=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662801;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1533, 145, 37120);
var _0x1e4e = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x1533[a];
  if (_0x1e4e["LvRRZG"] === undefined) {
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
    _0x1e4e["NkToiO"] = testcase;
    _0x1e4e["UrLWeK"] = {};
    _0x1e4e["LvRRZG"] = !![];
  }
  var A = _0x1e4e["UrLWeK"][a];
  if (A === undefined) {
    if (_0x1e4e["lodnon"] === undefined) {
      _0x1e4e["lodnon"] = !![];
    }
    value = _0x1e4e["NkToiO"](value, opt_max);
    _0x1e4e["UrLWeK"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var dp = Object[_0x1e4e("0", "%#C5")];
function getter() {
  return 111;
}
function setter(delayWatcher) {
  print(222);
}
function anotherGetter() {
  return 333;
}
function anotherSetter(canCreateDiscussions) {
  var _0x890374 = {
    "gOWaX" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  _0x890374[_0x1e4e("1", "&!]e")](print, 444);
}
var obj1;
var obj2;
obj1 = {};
dp(obj1, _0x1e4e("2", "M@KM"), {
  "get" : getter,
  "set" : setter
});
obj2 = {};
dp(obj2, _0x1e4e("2", "M@KM"), {
  "get" : getter
});
obj1 = {};
assertEquals(111, obj2[_0x1e4e("3", "Jx9)")]);
gc();
assertEquals(111, obj2["alpha"]);
obj1 = {};
dp(obj1, _0x1e4e("4", "Ir8S"), {
  "get" : getter,
  "set" : setter
});
obj2 = {};
dp(obj2, "alpha", {
  "get" : getter
});
obj1 = {};
gc();
obj3 = {};
dp(obj3, "alpha", {
  "get" : getter
});
obj1 = {};
dp(obj1, _0x1e4e("5", "9cUR"), {
  "get" : getter,
  "set" : setter
});
obj1["beta"] = 10;
obj2 = {};
dp(obj2, _0x1e4e("6", "*ayY"), {
  "get" : getter,
  "set" : setter
});
obj1 = {};
assertEquals(111, obj2[_0x1e4e("7", "le$p")]);
gc();
obj2[_0x1e4e("8", "Q[FC")] = 100;
assertEquals(111, obj2["alpha"]);

