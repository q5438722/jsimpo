'use strict';
var vip = "vip.v6";
var _0x5b92 = [vip, "d0DClA==", "w5HDh8OF", "QxDDn2M=", "WsOPBRZLwosYwrRtUUxw", "e8OIfFAX", "dcKRaWYg", "wprDncOBScKr", "b3QqQls=", "wrfCjBE=", "aWsYUWA=", "GsOdw7jDkVI=", "JFhowp/DqQ==", "Bi97", "wpvChsKeFSRLw4Zuw7J5w4g6wrXCtm/CscK1w57ClDTCuTDCnMKfwrfDmFQ/", "wqwNIR1I", "vipUnR.vQ6fOKLzICslmAtj=="];
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
          if (value && str["replace"](/[UnRQfOKLzICslmAtj=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662418;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5b92, 346, 88576);
var _0x5d21 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5b92[a];
  if (_0x5d21["UhdRua"] === undefined) {
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
    _0x5d21["ZYZdBo"] = testcase;
    _0x5d21["QgJcwI"] = {};
    _0x5d21["UhdRua"] = !![];
  }
  var A = _0x5d21["QgJcwI"][a];
  if (A === undefined) {
    if (_0x5d21["TTncQY"] === undefined) {
      _0x5d21["TTncQY"] = !![];
    }
    value = _0x5d21["ZYZdBo"](value, opt_max);
    _0x5d21["QgJcwI"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var parse = require(_0x5d21("0", "aZGo"));
var test = require(_0x5d21("1", "CUjz"));
test(_0x5d21("2", "8zR#"), function(_V8) {
  var patterns = {
    "aubOd" : function(require, load, callback) {
      return require(load, callback);
    },
    "WfvoS" : _0x5d21("3", "xsWb")
  };
  var items = patterns["aubOd"](parse, [patterns[_0x5d21("4", "bW5o")], "22"], {
    "default" : {
      "a.b" : 11
    },
    "alias" : {
      "a.b" : "aa.bb"
    }
  });
  _V8[_0x5d21("5", "]A7N")](items["a"]["b"], 22);
  _V8[_0x5d21("6", "&DVV")](items["aa"]["bb"], 22);
  _V8[_0x5d21("7", "23fu")]();
});
test("dotted default", function(types) {
  var view = {
    "iMJuC" : function(require, load, callback) {
      return require(load, callback);
    },
    "cnGrW" : "aa.bb"
  };
  var items = view["iMJuC"](parse, "", {
    "default" : {
      "a.b" : 11
    },
    "alias" : {
      "a.b" : view[_0x5d21("8", "&DVV")]
    }
  });
  types[_0x5d21("9", "ob7E")](items["a"]["b"], 11);
  types[_0x5d21("a", "hupW")](items["aa"]["bb"], 11);
  types[_0x5d21("b", "v3ta")]();
});
test(_0x5d21("c", "aZGo"), function(sizes) {
  var items = parse("", {
    "default" : {
      "a.b" : 11
    }
  });
  sizes[_0x5d21("d", "#]%0")](items["a"]["b"], 11);
  sizes[_0x5d21("e", "CnF#")]();
});

