'use strict';
var vip = "vip.v6";
var _0x3aeb = [vip, "XAHDmGvDl8OiNMKzwoTDqMOc", "w58OAcKxdWM=", "wojCoyp+TVLCuD0=", "w79caA==", "w43CkiFew4pXwrIEOg==", "w6nDngjDocOB", "wqLCicOww71u", "wqrDm8Kbeic=", "FFU0dsK5", "wozDj2QE", "YxAcHsKo", "w51OdXXDoA==", "H2YRdcK1InHDjmDDhHc=", "w5bCsnNdwoo=", "GMKJwrByFkgfwotD", "wo3Dj8O+dA==", "wqTCicOnw7NowonCqMOQw77ClcKEwrU=", "QvifendplqZ.vg6KeCrflb=="];
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
          if (value && str["replace"](/[QfendlqZgKeCrflb=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662059;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3aeb, 286, 73216);
var _0x24ea = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x3aeb[a];
  if (_0x24ea["NLAOOT"] === undefined) {
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
    _0x24ea["YnPoPJ"] = testcase;
    _0x24ea["BPQkbN"] = {};
    _0x24ea["NLAOOT"] = !![];
  }
  var A = _0x24ea["BPQkbN"][a];
  if (A === undefined) {
    if (_0x24ea["vsWbMm"] === undefined) {
      _0x24ea["vsWbMm"] = !![];
    }
    value = _0x24ea["YnPoPJ"](value, opt_max);
    _0x24ea["BPQkbN"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const common = require(_0x24ea("0", "FxL1"));
const http = require(_0x24ea("1", "1cX@"));
const server = http[_0x24ea("2", "%R^K")](common[_0x24ea("3", "sbeu")]());
server[_0x24ea("4", "Cae$")](0, common[_0x24ea("5", "DF[U")](() => {
  var data = {
    "TTVxi" : _0x24ea("6", "Q6k3"),
    "fFVwB" : _0x24ea("7", "KD@g"),
    "zlHIZ" : _0x24ea("8", "Lo#U"),
    "eWILA" : _0x24ea("9", "%R^K")
  };
  const x = http["request"]({
    "method" : data[_0x24ea("a", "U5)n")],
    "host" : data[_0x24ea("b", "gDM(")],
    "port" : server["address"]()[_0x24ea("c", "KD@g")]
  });
  x["on"](data["zlHIZ"], common["mustCall"](() => {
    server[_0x24ea("d", "Cqf9")]();
  }));
  x["on"](data[_0x24ea("e", "Q6k3")], common[_0x24ea("f", "gDM(")]());
  x[_0x24ea("10", "D5(2")]();
  x["end"]();
}));

