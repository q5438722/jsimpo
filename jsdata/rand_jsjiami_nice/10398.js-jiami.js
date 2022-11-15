'use strict';
var vip = "vip.v6";
var _0x5900 = [vip, "w7rDq8OL", "wrXCisOaw6zCrz3CncKxJsKK", "w6wdX27Ct8K9wr/Cl2pUwqPDhsOXwoVNw6jCjcKmUsODw7kZworCknEKcQ==", "wrTCksOew4oZFMO6RsOQXsKFZMKUfQXDnsOffcKtasOLw6bDisKnVMKTw5BW", "wqPCrMK/WA==", "HBcTVUMTclrCvcOOw4XDmwnCtSNowprDh0bCsMKTbHlpwp/CrcODIA==", "w6h6CQ==", "eldMBMOSwrsvw7bCnDLCj8Ouw6QiK1HDnmI=", "wqrDn8K2EnBUI8OEKMKcCBTDqlTDn8KRw4c7w7XDogHChsK+DhIueFvCrcKtwrHCo8K4wq0/wo7DowI=", "woAAVsKzw5VIwofDq8KBwoLCuMOzPW4fwpDDhcKMw5Z5wq4PS0M/w43Cug==", "w7R7ccO4w4DCg8KNw4FIUzjCni3DlS/Cq8KIURIdGn40B0TDmg==", 
"wpLCh8KBZUjCiwFJGsKewpk/wqTCnkzCrMOrNsO7w5gtViMKe2wk", "w74Xwq3DnGJEesKBBcKiCh0Pw5bCgXTCqy80ECk=", "Y2ciw7JDY1Mbw4YXM8OvZMKiR8OUOMONwqJbNMOww4bDhl4qwojCsw==", "vMloIRiIwp.vW6wjxcEMfWK=="];
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
          if (value && str["replace"](/[MloIRIwWwjxcEMfWK=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661676;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5900, 364, 93184);
var _0x3945 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5900[a];
  if (_0x3945["ihmKRk"] === undefined) {
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
    _0x3945["RGYUJd"] = testcase;
    _0x3945["LhbBGZ"] = {};
    _0x3945["ihmKRk"] = !![];
  }
  var A = _0x3945["LhbBGZ"][a];
  if (A === undefined) {
    if (_0x3945["zwbKWg"] === undefined) {
      _0x3945["zwbKWg"] = !![];
    }
    value = _0x3945["RGYUJd"](value, opt_max);
    _0x3945["LhbBGZ"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
module["exports"] = {
  "sso" : [{
    "method" : _0x3945("0", "rcpN"),
    "path" : _0x3945("1", "xCaD"),
    "handler" : _0x3945("2", "h7f&")
  }, {
    "method" : "GET",
    "path" : "/connect/:provider",
    "handler" : _0x3945("3", "Bo[E")
  }, {
    "method" : _0x3945("4", "V3iy"),
    "path" : "/connect/:provider",
    "handler" : _0x3945("5", "A%XW")
  }, {
    "method" : _0x3945("6", "V3aH"),
    "path" : _0x3945("7", "IIXm"),
    "handler" : _0x3945("8", "y1xb"),
    "config" : {
      "policies" : [_0x3945("9", "RbG!"), ["admin::hasPermissions", [_0x3945("a", "&uv[")]]]
    }
  }, {
    "method" : "PUT",
    "path" : "/providers/options",
    "handler" : "authentication.updateProviderLoginOptions",
    "config" : {
      "policies" : [_0x3945("b", "V3iy"), [_0x3945("c", "bZbR"), [_0x3945("d", "E&q@")]]]
    }
  }]
};

