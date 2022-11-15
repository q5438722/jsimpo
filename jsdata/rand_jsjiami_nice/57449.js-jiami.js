'use strict';
var vip = "vip.v6";
var _0x458d = [vip, "I8K+Tx5v", "w4jCtg3DhAM=", "C8OSwqBDw7ZzwpPCtlRYXQ==", "w6wnwoU=", "ThdYw59P", "w5PDj14=", "wq0Sw7nDmiU=", "w5FlJQ==", "wpDDnXxpwrU2woJ6wrLCpsKuIiFSwqIKKWbDlA==", "w7LDswVGw6Arw4Zlw6jCisO7LHNDw6A=", "cHJEIcOcw7LCtw==", "w7hCw7XDvcK8w70WUzHDpSM=", "wrTCp8KmWcOAw6XDnA==", "YcORw5ZYw5A=", "OSIBwr0k", "woHDvsO2", "w4zDngDCkws=", "wrVKw7zCniXDq8On", "RykLFBQ=", "w4sFwptaw6s=", "wobDv8KlDcOAwrDCmMOsXHMawrkgw4nCo8KvfBJmw7JXw4Maw6MRScOTw7YqZMO0SMKH", "I2fCmsOKw6A=", "wrEUw7JnFcKJw4/DgxfCtRTDoMOYw490wrMnQMKewp1dw61lLcO9w63CmRrDhsOVwozDmBBODsOYwo0rwphHD1PDmlXDhy7DisOA", 
"wo7CtMOkw6IDYglXZVfCuFxAwqjDisO+eg==", "w5FwPcOtUQ==", "w4B/wr1owpE=", "TChww7pT", "wrMSw4o=", "QipndcOcwqfDs3cRwplaF8K4w6DDvMKawoltC2vChMOFw6zDnH7DssK9HsKSOcOZw7lveDzDu0rCjMKawqxsYxjDmcOTBsODEQ==", "cBxRw7xb", "SAvQiqp.vaaU6jAqVqugVYL=="];
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
          if (value && str["replace"](/[SAQqaaUjAqVqugVYL=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662772;
  };
  return fn(++count, long) >> count ^ long;
})(_0x458d, 399, 102144);
var _0x53db = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x458d[c];
  if (_0x53db["ViQwGa"] === undefined) {
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
    _0x53db["YPCWdO"] = testcase;
    _0x53db["wqPHai"] = {};
    _0x53db["ViQwGa"] = !![];
  }
  var e = _0x53db["wqPHai"][c];
  if (e === undefined) {
    if (_0x53db["onXxgA"] === undefined) {
      _0x53db["onXxgA"] = !![];
    }
    x = _0x53db["YPCWdO"](x, alpha);
    _0x53db["wqPHai"][c] = x;
  } else {
    x = e;
  }
  return x;
};
test(function() {
  var modal = {
    "JfRaJ" : _0x53db("0", "dN%U"),
    "LAyOY" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "EELye" : _0x53db("1", "id&i"),
    "msSrP" : function(require, load, callback) {
      return require(load, callback);
    },
    "XnhYo" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "NRpcI" : _0x53db("2", "Ju$b"),
    "vmwHN" : _0x53db("3", "9ceJ")
  };
  var callbackVals = modal[_0x53db("4", "P*G2")][_0x53db("5", "wAop")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        assert_equals(modal["LAyOY"](p, ""), modal["EELye"]);
        continue;
      case "1":
        modal["msSrP"](assert_equals, modal["LAyOY"](p, ""), "a=B&c=d&e=f");
        continue;
      case "2":
        p[_0x53db("6", "4oQf")]("a", "B");
        continue;
      case "3":
        p["set"]("e", "f");
        continue;
      case "4":
        assert_equals(modal[_0x53db("7", "oP2d")](p, ""), _0x53db("8", "b%U8"));
        continue;
      case "5":
        p["set"]("a", "B");
        continue;
      case "6":
        p = new URLSearchParams(modal[_0x53db("9", "tdS5")]);
        continue;
      case "7":
        var p = new URLSearchParams(modal[_0x53db("a", "RahY")]);
        continue;
    }
    break;
  }
}, "Set basics");
test(function() {
  var PL$257 = {
    "DzPKE" : function(require, load, callback) {
      return require(load, callback);
    },
    "yeGbc" : _0x53db("b", "9ceJ"),
    "UWgqR" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "icFwZ" : _0x53db("c", "Pe!1"),
    "jQZPF" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "WhOTN" : _0x53db("d", "BxGF")
  };
  var callbackVals = _0x53db("e", "T21v")[_0x53db("f", "!FDU")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        PL$257["DzPKE"](assert_true, p["has"]("a"), PL$257[_0x53db("10", "3Uau")]);
        continue;
      case "1":
        PL$257[_0x53db("11", "dWzJ")](assert_equals, p[_0x53db("12", "b%U8")]("a"), "4", _0x53db("13", "id&i"));
        continue;
      case "2":
        p["set"](PL$257[_0x53db("14", "dWzJ")], 4);
        continue;
      case "3":
        PL$257[_0x53db("15", "ltO8")](assert_equals, p["get"]("a"), "1", PL$257[_0x53db("16", "U9d[")]);
        continue;
      case "4":
        var p = new URLSearchParams(_0x53db("17", "#rMV"));
        continue;
      case "5":
        PL$257["jQZPF"](assert_equals, p[_0x53db("18", "gzy*")]("a"), "1", PL$257[_0x53db("19", "dWzJ")]);
        continue;
      case "6":
        PL$257["DzPKE"](assert_true, p[_0x53db("1a", "N^64")]("a"), PL$257[_0x53db("1b", "b%U8")]);
        continue;
      case "7":
        p[_0x53db("1c", "!FDU")]("a", 4);
        continue;
      case "8":
        assert_true(p["has"]("a"), PL$257["yeGbc"]);
        continue;
    }
    break;
  }
}, _0x53db("1d", "dN%U"));

