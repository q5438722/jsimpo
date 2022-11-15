'use strict';
var vip = "vip.v6";
var _0xfb44 = [vip, "Xh5rw7fCujjCpQ==", "VlFS", "wrbCu1HDrMO/U8K/E8Kd", "RCTDmsOZLDc=", "NDFg", "wqTDr8OUw7s=", "wpZMw75T", "BDNkS8Kx", "QVpXw7vCjUTCl8O2wo5uHCw=", "GsKdA8KEw7w=", "wqU7w53Dn8Kxw4nCncKl", "JsKlGHFpM3bCoAjCpcO+wqQ2w5g=", "WWDDosO3wqXDvMKL", "V3rDv8OtwoPDvsKTcw==", "w5NJwrdjRl7Cgw==", "w5VUwqtiUQ==", "DsKJw7EPw73CjhHDlw==", "DiQMQ8KGwrjCncKHd8OzSg==", "w7FLfcKUw4UdZw==", "wqrCqMKMw5zCqQ==", "OcOqRz/CsWgZamBgSwDClGgAS0hxwphhEH8=", "elcDfw==", "w4XCscKDw5HDpw==", "esKvw5Q8dsK/XMOyGsOhGWYG", 
"OcKPDMKpw69wMBjCt8KDERUaKsKOwoPDr8O1w5w=", "w5/DpMOSMzM8wrQ=", "UAR2w63CnDrCvcOk", "K8KdAsKGw7Bww6UsYQ==", "hvip.v6hLhxZttdUSwfPdBB=="];
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
          if (value && str["replace"](/[hhLhxZttdUSwfPdBB=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662074;
  };
  return fn(++count, long) >> count ^ long;
})(_0xfb44, 478, 122368);
var _0x35f8 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0xfb44[c];
  if (_0x35f8["VCMeqV"] === undefined) {
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
    _0x35f8["iTWQTn"] = testcase;
    _0x35f8["ZUoWjB"] = {};
    _0x35f8["VCMeqV"] = !![];
  }
  var e = _0x35f8["ZUoWjB"][c];
  if (e === undefined) {
    if (_0x35f8["BRXfpQ"] === undefined) {
      _0x35f8["BRXfpQ"] = !![];
    }
    x = _0x35f8["iTWQTn"](x, alpha);
    _0x35f8["ZUoWjB"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const common = require(_0x35f8("0", "GPud"));
if (!common["hasCrypto"]) {
  common["skip"]("missing crypto");
}
const assert = require(_0x35f8("1", "j]CH"));
const fs = require("fs");
const fixtures = require("../common/fixtures");
const tls = require(_0x35f8("2", "]rXi"));
function filenamePEM(n) {
  var _0x426055 = {
    "onEwY" : _0x35f8("3", "Bhbv")
  };
  return fixtures[_0x35f8("4", "daLJ")](_0x426055[_0x35f8("5", "ATc3")], n + ".pem");
}
function loadPEM(n) {
  var comparator = {
    "PdeAM" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  return fs[_0x35f8("6", "9Qx0")](comparator[_0x35f8("7", "CivV")](filenamePEM, n));
}
const caCert = loadPEM(_0x35f8("8", "KMss"));
const opts = {
  "host" : _0x35f8("9", "ru#5"),
  "port" : 443,
  "rejectUnauthorized" : !![]
};
tls[_0x35f8("a", "4Q(K")](opts, common[_0x35f8("b", "4Q(K")](end));
opts["ca"] = caCert;
tls[_0x35f8("c", "Bnsp")](opts, fail)["on"](_0x35f8("d", "Bnsp"), common[_0x35f8("e", "kZHb")]((canCreateDiscussions) => {
  var _0x254af2 = {
    "BhaId" : "unable to get local issuer certificate"
  };
  assert[_0x35f8("f", "Bcck")](canCreateDiscussions[_0x35f8("10", "6oGX")], _0x254af2[_0x35f8("11", "k9G5")]);
}));
function fail() {
  var _0x1be27e = {
    "ArFui" : _0x35f8("12", "urAy")
  };
  assert[_0x35f8("13", "#&QS")](_0x1be27e[_0x35f8("14", "pkr0")]);
}
opts[_0x35f8("15", ")tpp")] = tls[_0x35f8("16", "apAZ")]();
tls[_0x35f8("17", "e[T7")](opts, common[_0x35f8("18", "TROD")](end));
opts["secureContext"]["context"][_0x35f8("19", "CivV")](caCert);
tls[_0x35f8("1a", "TROD")](opts, common["mustCall"](end));
function end() {
  this[_0x35f8("1b", "9Qx0")]();
}
;
