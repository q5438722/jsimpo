'use strict';
var vip = "vip.v6";
var _0x1f48 = [vip, "QGAnSTrCncK9wr0=", "w4kbGgtP", "w7vDpmHCuh8mwpgd", "UsKkwqPDqg3CshzCrcO1JcKBwofCuVQHw65NB8ORw7cmZSd6YmrCuQ1Ow4Usw4M=", "wq0Lwrk=", "JsOLw5rCkT7CvcK4wrfCtQ5BC15nSk/Cml90wpNicsK8w7AzDcKQZsOKwp7Cq8KvwpbCv8KXdcOFUcOvCcONwoEbRSrDpjE=", "w6HCslnCh8OscDDDsMO7wrPCnynCsRExJsOfVMOHw4bCqntrDDDDs8O+eMK3wpfDjA==", "f2jCqDDDn3bDmVvDkMK4TMOUwoDCs8OGdyDCocKZ", "bXPCtCzDlHzCkEfDksOrSsOWw5bDpw==", "w5gaworChztyBA0F", "M8OZw4jCjDnDtMKiwrjDtBMPRho=", "aXbCpinDhnPCjUDDm8KsA8ORwpjDtsOU", "w70RAEF0wqzDlsKYDi/DlQ==", 
"OR0zd8ON", "w682W8KUbw==", "wr3CjTzCgSs1HQ/CoBrDgEI=", "w7o+wrU=", "w7cYfh5cVgMJLMOpJjrCpsOL", "w4x3M39C", "NTkNw6XDmBhSw4jCjsKDBMOi", "Qj5g", "wqdawrB7woM=", "FcKWwqjDgDLCh8OCw4DDhsKD", "fHLCqDHDnHHClkU=", "w4Bqw7DDkWEqAcKZ", "wonCljzCo2YRIA==", "w7dQMHRDLMKm", "w4w0WMKJdMOuf8OY", "X8OKa2jDgQ==", "w53DnFU=", "wrV3wqhTwpc=", "w75nwotowplPIw==", "vwiGBHp.kvG6YhzUoWUEKaHk=="];
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
          if (value && str["replace"](/[wGBHkGYhzUoWUEKaHk=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662783;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1f48, 100, 25600);
var _0x5634 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x1f48[c];
  if (_0x5634["xmmJra"] === undefined) {
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
    _0x5634["mtjFnx"] = testcase;
    _0x5634["GGbsvG"] = {};
    _0x5634["xmmJra"] = !![];
  }
  var e = _0x5634["GGbsvG"][c];
  if (e === undefined) {
    if (_0x5634["kLDHqh"] === undefined) {
      _0x5634["kLDHqh"] = !![];
    }
    x = _0x5634["mtjFnx"](x, alpha);
    _0x5634["GGbsvG"][c] = x;
  } else {
    x = e;
  }
  return x;
};
InspectorTest[_0x5634("0", "e8K^")](_0x5634("1", "3Yn)"));
(async function test() {
  var keyNames = {
    "qnnQy" : _0x5634("2", "kiGJ"),
    "XHmed" : _0x5634("3", "SjbR"),
    "gbkmM" : _0x5634("4", "SjbR"),
    "fghLh" : _0x5634("5", "wTgD"),
    "hVgHG" : _0x5634("6", "3Yn)"),
    "uOsEY" : _0x5634("7", "SjbR"),
    "BkhjZ" : _0x5634("8", "Sv9Z")
  };
  var callbackVals = keyNames[_0x5634("9", "(6R[")][_0x5634("a", "QyOj")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        InspectorTest["logMessage"](await _0x1eb1d8);
        continue;
      case "1":
        var _0x58523f = new (InspectorTest[_0x5634("b", "w0mR")]);
        continue;
      case "2":
        InspectorTest[_0x5634("c", "Bm&1")](_0x5634("d", "ke2)"));
        continue;
      case "3":
        InspectorTest["log"](keyNames[_0x5634("e", "lh5i")]);
        continue;
      case "4":
        InspectorTest[_0x5634("f", "yn1^")]();
        continue;
      case "5":
        InspectorTest[_0x5634("10", "WPOB")](keyNames[_0x5634("11", "PU12")]);
        continue;
      case "6":
        InspectorTest[_0x5634("12", "(rBB")](await _0x567a5e[_0x5634("13", "SjbR")]["Runtime"][_0x5634("14", "YmMR")]({
          "expression" : "a"
        }));
        continue;
      case "7":
        var _0x567a5e = _0x58523f[_0x5634("15", "Mg&v")]();
        continue;
      case "8":
        var params = _0x58523f[_0x5634("16", "lh5i")]();
        continue;
      case "9":
        await _0x567a5e[_0x5634("17", "QyOj")]["Runtime"]["evaluate"]({
          "expression" : keyNames["fghLh"]
        });
        continue;
      case "10":
        InspectorTest["log"](keyNames[_0x5634("18", "d[^Y")]);
        continue;
      case "11":
        InspectorTest[_0x5634("19", "jyO!")](keyNames[_0x5634("1a", "PU12")]);
        continue;
      case "12":
        await params["Protocol"][_0x5634("1b", "ygKI")][_0x5634("1c", "fBwl")]({
          "expression" : keyNames[_0x5634("1d", "Sv9Z")]
        });
        continue;
      case "13":
        var _0x1eb1d8 = params["Protocol"]["Runtime"][_0x5634("1e", "ukAH")]({
          "expression" : _0x5634("1f", "#g4P"),
          "awaitPromise" : !![]
        });
        continue;
    }
    break;
  }
})();

