'use strict';
var vip = "vip.v6";
var _0x3113 = [vip, "ZcOrc8KNw65tWyZLeQ==", "IsOmwogDasOa", "wpPDtsO/TsKdwrTDvsOIDw==", "XRxQwq4JwpfCh8KRFSE=", "w7DCvmnDgAwqwoDDuR1EY1QKwqA=", "w4HDgnMew7NSwrBNDQ==", "w7XComnChSI2wprDuyVJ", "w5R5CXZbw5fDhhDCnw==", "w6Ihw47CskbDtQ==", "TcKpwqp+Unp6wptuw7ZecXBrb1fDrBt0OTdCByM=", "WsK+wrEqZl16woZp", "w6XCribDk3XDucKWWHY=", "w6rCmFsLEyNdcsOvw4lWccKGcA==", "wrXCryh1w74XwoxhLA==", "w7XComnChSE1wpLDrzRV", "ZcOrc8KNw65hSSVibifCk8Khw5Y=", "d8OSwoHClMODw690wosW", "wpA5w7HCj8KePsKjQgoC", "w6RzwqzDh8OXw4AJTcO/OMKIwpzCtA==", 
"K0XChsO7wqrChjPCncKs", "w5duEiJrw7zDjxLClU3CucOMIQ==", "AidaVcO2wqvDlMOUCw==", "w68uIk9PcMKzM8On", "K0NE", "w5A7wpEM", "MMOhwoERYMOcXRbDnQ==", "SMK1wqo7RUxtwpF4w7E=", "w6rCmFsLAjNTcg==", "w73Cj0BfHi5QZ8OF", "w7B/wqLCgg==", "GMKmAsO9VcKswoxY", "BGjCmcO9wqrChiXCssKW", "C2pFBw==", "w4BZXMKhdRfCncKUw64=", "VvWipP.Cv6SujTRnJNNqlhBT=="];
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
          if (value && str["replace"](/[VWPCSujTRnJNNqlhBT=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662122;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3113, 499, 127744);
var _0x43bc = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x3113[c];
  if (_0x43bc["hCefWS"] === undefined) {
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
    _0x43bc["HTBGMI"] = testcase;
    _0x43bc["lQSQGc"] = {};
    _0x43bc["hCefWS"] = !![];
  }
  var e = _0x43bc["lQSQGc"][c];
  if (e === undefined) {
    if (_0x43bc["qjJeZj"] === undefined) {
      _0x43bc["qjJeZj"] = !![];
    }
    x = _0x43bc["HTBGMI"](x, alpha);
    _0x43bc["lQSQGc"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
function assertGetterName(pkg, target, prop) {
  var nodeScopeActions = {
    "GkTef" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  var res = Object["getOwnPropertyDescriptor"](target, prop);
  nodeScopeActions["GkTef"](assertSame, pkg, res[_0x43bc("0", "3!g^")][_0x43bc("1", "Hk8y")]);
}
function assertSetterName(instance, obj, options) {
  var json = Object["getOwnPropertyDescriptor"](obj, options);
  assertSame(instance, json["set"]["name"]);
}
assertGetterName("get byteLength", ArrayBuffer[_0x43bc("2", "yQC^")], _0x43bc("3", "3*iI"));
assertGetterName(_0x43bc("4", "#*Tc"), Set[_0x43bc("5", "#*Tc")], _0x43bc("6", "K^4)"));
assertGetterName(_0x43bc("7", "t5N9"), Map[_0x43bc("8", "g4)g")], _0x43bc("9", "g6z]"));
let TypedArray = Uint8Array[_0x43bc("a", "#%I*")];
assertGetterName(_0x43bc("b", "c*yC"), TypedArray["prototype"], _0x43bc("c", "yQC^"));
assertGetterName("get byteOffset", TypedArray[_0x43bc("d", ")HUe")], _0x43bc("e", "Mi5C"));
assertGetterName(_0x43bc("f", "S]Dt"), TypedArray[_0x43bc("10", "SVKr")], _0x43bc("11", "S]Dt"));
assertGetterName("get length", TypedArray[_0x43bc("12", "H32Y")], _0x43bc("13", "rrVC"));
assertGetterName(_0x43bc("14", "3*iI"), TypedArray[_0x43bc("15", "3*iI")], Symbol["toStringTag"]);
assertGetterName("get buffer", DataView[_0x43bc("16", "BlB4")], "buffer");
assertGetterName(_0x43bc("17", "#*Tc"), DataView[_0x43bc("18", "989v")], _0x43bc("19", "S]Dt"));
assertGetterName(_0x43bc("1a", "c*yC"), DataView[_0x43bc("1b", "wPo0")], _0x43bc("1c", "OhX]"));
assertGetterName(_0x43bc("1d", "K^4)"), Object["prototype"], _0x43bc("1e", "g4)g"));
assertSetterName(_0x43bc("1f", "H32Y"), Object[_0x43bc("20", "$nSs")], _0x43bc("21", "syJ0"));

