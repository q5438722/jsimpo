'use strict';
var vip = "vip.v6";
var _0x5071 = [vip, "QMK2wq4/IcOmwr7ClcOvwpLCvMO/Mw==", "w7DDl8OoRcKrwrZ/wrHDi8OOwqc=", "w4zDpsOIwr0OB2g2", "wo3Cg8OgwonDo8KtIXU=", "wonDhcKdIw==", "dkVbw68=", "w6kaw75jQsOew4g=", "w4XDkWbCrg8LwpDDmBc=", "wpTDlnPDqg==", "wprCgMOcwo7DtA==", "CsKWworDgXtzPiTCoHbCpcKN", "woccW8Opw58=", "w58wwopSPMO3Kw==", "BMKBwpzDk25xCA==", "wosOfcObw47Dt8OPw6M=", "w7/Dl0c3wqINVsKDwpTDmMOf", "Q8Owwq3DrMO5E8KI", "fUvDnMK+ewt/d8OXw41Q", "MMKUdT3Ck0HCrj0=", "wrrCoQjDkAM=", "dU9Hw78=", "LsO6w74Xw7gH", "w6x7wqHDq8KAw4PDgMOlwpM=", 
"woYowp/DkwU=", "UsOhw6ogw5AJw6/DqQ==", "IcK5wqxowoA=", "JsKSSC0=", "w5TCjsOcJMOEH8O/w57CmQ==", "w6oQeMOdfcKWC3TDjHXDhsKww44BXMKHag==", "W8OzPj7DocOywpHDs8KUTsOkIg==", "NcK0Jjo=", "wqvDr8OlalrDr8Opw5ACwr3CtQ==", "I8O7w7QCw6kcOA==", "Lvip.cv6XyRLZnjgxKRQYxO=="];
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
          if (value && str["replace"](/[LcXyRLZnjgxKRQYxO=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662070;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5071, 258, 66048);
var _0x47c0 = function(name, test) {
  name = ~~"0x"["concat"](name);
  var result = _0x5071[name];
  if (_0x47c0["zqpAEj"] === undefined) {
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
    _0x47c0["QTPgXF"] = testcase;
    _0x47c0["HyDYwj"] = {};
    _0x47c0["zqpAEj"] = !![];
  }
  var functionEntry = _0x47c0["HyDYwj"][name];
  if (functionEntry === undefined) {
    if (_0x47c0["OSiwAt"] === undefined) {
      _0x47c0["OSiwAt"] = !![];
    }
    result = _0x47c0["QTPgXF"](result, test);
    _0x47c0["HyDYwj"][name] = result;
  } else {
    result = functionEntry;
  }
  return result;
};
"use strict";
const common = require(_0x47c0("0", "K^cM"));
const assert = require("assert");
const dgram = require("dgram");
const message_to_send = _0x47c0("1", "S09q");
const server = dgram[_0x47c0("2", "GtS%")](_0x47c0("3", "2Tmq"));
server["on"]("message", common["mustCall"]((options, textHash) => {
  assert[_0x47c0("4", "4]VT")](textHash[_0x47c0("5", "mDjE")], common[_0x47c0("6", "030P")]);
  assert[_0x47c0("7", "UiO3")](options[_0x47c0("8", "gerp")](), message_to_send[_0x47c0("9", "#ate")]());
  server[_0x47c0("a", "K^cM")](options, 0, options["length"], textHash[_0x47c0("b", "lF*R")], textHash[_0x47c0("c", "QBRm")]);
}));
server["on"](_0x47c0("d", "Jmvp"), common["mustCall"](() => {
  var info = {
    "agUFR" : _0x47c0("e", "mk1S"),
    "QVZws" : _0x47c0("f", "#ate")
  };
  const p = dgram[_0x47c0("10", "*qu[")](info[_0x47c0("11", "Tr[P")]);
  const rule = server[_0x47c0("12", "YMbe")]()["port"];
  p["on"](_0x47c0("13", "*qu["), common[_0x47c0("14", "Tr[P")]((intval, value) => {
    assert[_0x47c0("15", ")[)!")](value[_0x47c0("16", "h%Da")], common["localhostIPv4"]);
    assert[_0x47c0("17", "n]WY")](value["port"], rule);
    assert["strictEqual"](intval["toString"](), message_to_send[_0x47c0("18", "A78f")]());
    p[_0x47c0("19", "C4n&")]();
    server["close"]();
  }));
  p[_0x47c0("1a", "lF*R")](message_to_send, 0, message_to_send[_0x47c0("1b", "mDjE")], rule, _0x47c0("1c", "MSug"));
  p["on"](info[_0x47c0("1d", "G$j7")], common[_0x47c0("1e", "jlsl")]());
}));
server["on"](_0x47c0("1f", "^ueW"), common[_0x47c0("1e", "jlsl")]());
server[_0x47c0("20", "A78f")](0);

