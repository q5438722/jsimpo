'use strict';
var vip = "vip.v6";
var _0x292f = [vip, "wrLCi8O7w6PCnj5GLQ==", "w7/CtcOYJ8Kdw5QFFEpL", "V1zCqsOueQ==", "DcKkw4M=", "IgzDqGUc", "w442Yw==", "NBnDg8KleA==", "aVrCt2bCoD0B", "AS8SacOwwql1LA==", "wq9Nw4HDjMOYwqXDnQ==", "dRM+wpIH", "GG5uZA==", "F1sX", "GsKnXcO0w6I=", "wpvDg0LDu8OJBgBvR8OLC8OJNmXDmsKOw63CmMKmEgvDksKLEE/DosKyOE1qwpbChD5ywrHDoMOYwoxXB8KlU8OXwoTCkRPCqcOEwrBaFSHCvcOQTcKpfw/CtW5Lwq1JVFcmw48uwpHCrsKZwo/CrB8+NcO7wpvDlsKtwr1NwqLDnhHDrjzCscOswq8Xw7DDj8KeZcKiTsKywp/Cp8OgVgDCkRTCtF7Dsj5Hw4A9w7nCpiHDicK2wrcOK8ODw6h1w5w=", 
"w67CnULDmg==", "HsKCfcKywqfDi3tOw5vDmg==", "vbSMixp.MUgvcqB6IHFdJPqB=="];
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
          if (value && str["replace"](/[bSMxMUgcqBIHFdJPqB=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662763;
  };
  return fn(++count, long) >> count ^ long;
})(_0x292f, 286, 73216);
var _0xdc48 = function(c, data) {
  c = ~~"0x"["concat"](c);
  var f = _0x292f[c];
  if (_0xdc48["UzjiiL"] === undefined) {
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
    _0xdc48["LvubnI"] = testcase;
    _0xdc48["dlbvRK"] = {};
    _0xdc48["UzjiiL"] = !![];
  }
  var o = _0xdc48["dlbvRK"][c];
  if (o === undefined) {
    if (_0xdc48["UjTXti"] === undefined) {
      _0xdc48["UjTXti"] = !![];
    }
    f = _0xdc48["LvubnI"](f, data);
    _0xdc48["dlbvRK"][c] = f;
  } else {
    f = o;
  }
  return f;
};
"use strict";
const common = require("../common");
const {
  Worker : Worker
} = require("worker_threads");
const w = new Worker(_0xdc48("0", "dnTg"), {
  "eval" : !![]
});
process[_0xdc48("1", "TXRO")](_0xdc48("2", "#Rrt"), common[_0xdc48("3", "pq&K")](() => {
  var trace = {
    "XCoZh" : _0xdc48("4", "v7CP"),
    "SysDs" : _0xdc48("5", "(Ryl")
  };
  console[_0xdc48("6", "cJ3M")](trace[_0xdc48("7", "T##X")]);
  w[_0xdc48("8", "1S9i")]();
  w["postMessage"]({
    "hello" : trace[_0xdc48("9", "(s$4")]
  });
}));
w["once"](_0xdc48("a", "aSf^"), common[_0xdc48("b", "ykg@")]((body) => {
  var byDate = {
    "vLiMh" : _0xdc48("c", "$z5T")
  };
  console["log"](byDate[_0xdc48("d", "R9M#")], body);
}));
w["on"](_0xdc48("e", "K#qI"), common["mustCall"](() => {
  var trace = {
    "UxzQM" : "exit"
  };
  console[_0xdc48("f", "f6hL")](trace["UxzQM"]);
}));
w[_0xdc48("10", "ldmC")]();

