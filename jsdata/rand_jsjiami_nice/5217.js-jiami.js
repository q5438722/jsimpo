'use strict';
var vip = "vip.v6";
var _0x435a = [vip, "DcOHw5nCr2cLAw==", "QMOcw4U=", "w4w+aMOL", "w7lIWQ==", "wogPwqUubcKEwpcOwp7DhsK9GcKdwpvDlkc=", "EC0f", "RsOew47CjgU=", "w78PSsO7AA==", "OMOmZsOjc3TDlBTDoy/Dkg==", "w4bDqMOAa8Ow", "w5EBw73DkH8=", "fMKmFMKVw6M=", "VDAl", "w7zDsXYQw64=", "ErvDipJ.Jv6uOGuUnzXLFX=="];
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
          if (value && str["replace"](/[ErDJJuOGuUnzXLFX=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662045;
  };
  return fn(++count, long) >> count ^ long;
})(_0x435a, 240, 61440);
var _0x31f9 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x435a[a];
  if (_0x31f9["GJBQQM"] === undefined) {
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
    _0x31f9["oSDJrw"] = testcase;
    _0x31f9["tMNNUN"] = {};
    _0x31f9["GJBQQM"] = !![];
  }
  var A = _0x31f9["tMNNUN"][a];
  if (A === undefined) {
    if (_0x31f9["pTKWqL"] === undefined) {
      _0x31f9["pTKWqL"] = !![];
    }
    value = _0x31f9["oSDJrw"](value, opt_max);
    _0x31f9["tMNNUN"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var test = require(_0x31f9("0", "rbpf"));
var through = require(_0x31f9("1", "eibT"));
test(_0x31f9("2", "%$X*"), function(b) {
  var incoming = {
    "GPRUA" : function(saveNotifs) {
      return saveNotifs();
    },
    "vbigL" : _0x31f9("3", "MM&t"),
    "sniNi" : _0x31f9("4", "aon$")
  };
  var response = incoming[_0x31f9("5", "rbpf")](through);
  response[_0x31f9("6", "ie!s")] = ![];
  var selectstart = ![];
  var head = ![];
  response["on"](incoming[_0x31f9("7", "coL)")], function() {
    b["ok"](!head);
    selectstart = !![];
  });
  response["on"](incoming["sniNi"], function() {
    b["ok"](selectstart);
    head = !![];
  });
  response[_0x31f9("8", "B(4F")](1);
  response["write"](2);
  response[_0x31f9("9", "IazR")](3);
  response[_0x31f9("a", "JOGK")]();
  b["ok"](selectstart);
  b[_0x31f9("b", "(PH(")](head);
  response[_0x31f9("c", "J&T4")]();
  b["ok"](head);
  b[_0x31f9("d", "aon$")]();
});

