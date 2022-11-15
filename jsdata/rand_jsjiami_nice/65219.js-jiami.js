'use strict';
var vip = "vip.v6";
var _0x418a = [vip, "TsKBwpbChkI=", "w4wLJcOHw4dqYA==", "w53Cu3fCqgE=", "IgDDtcKJw40=", "w60xdMOLw4w=", "w6Y6McKLZg==", "N0k9BsKpwoTDlAnDjQ==", "vip.v6zQLybVIlgPFWQzXotX=="];
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
          if (value && str["replace"](/[zQLybVIlgPFWQzXotX=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662818;
  };
  return fn(++count, long) >> count ^ long;
})(_0x418a, 211, 54016);
var _0x5ac0 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x418a[a];
  if (_0x5ac0["anNFgS"] === undefined) {
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
    _0x5ac0["tQDTAV"] = testcase;
    _0x5ac0["OxoGPQ"] = {};
    _0x5ac0["anNFgS"] = !![];
  }
  var A = _0x5ac0["OxoGPQ"][a];
  if (A === undefined) {
    if (_0x5ac0["NRIQen"] === undefined) {
      _0x5ac0["NRIQen"] = !![];
    }
    value = _0x5ac0["tQDTAV"](value, opt_max);
    _0x5ac0["OxoGPQ"][a] = value;
  } else {
    value = A;
  }
  return value;
};
load(_0x5ac0("0", "fKjF"));
var str;
var re;
function Exec() {
  re["exec"](str);
}
function Exec1Setup() {
  var _0x314d48 = {
    "TuewC" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  re = /[Cz]/;
  str = _0x314d48[_0x5ac0("1", "gi$Q")](createHaystack);
}
function Exec2Setup() {
  var _0x7365ed = {
    "JYEOW" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  re = /[Cz]/g;
  str = _0x7365ed[_0x5ac0("2", "8]SY")](createHaystack);
}
function Exec3Setup() {
  var _0x39ffa0 = {
    "ovSau" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  re = /([Cz])/y;
  str = _0x39ffa0["ovSau"](createHaystack);
}
function Exec4Setup() {
  var _0xfa89b5 = {
    "ZdmZa" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  re = /[cZ]/;
  str = _0xfa89b5[_0x5ac0("3", "6ZR9")](createHaystack);
}
function Exec5Setup() {
  var _0xd9fa4c = {
    "XzgbK" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  re = /[cZ]/g;
  str = _0xd9fa4c[_0x5ac0("4", "iK*r")](createHaystack);
}
function Exec6Setup() {
  re = /([cZ])/y;
  str = createHaystack();
}
function Exec7Setup() {
  var _0x3e3636 = {
    "CiUQg" : function(num1, num2) {
      return num1 ** num2;
    }
  };
  re = /[Cz]/gy;
  re[_0x5ac0("5", "(5g9")] = _0x3e3636[_0x5ac0("6", "x@LU")](2, 32);
  str = createHaystack();
}
var benchmarks = [[Exec, Exec1Setup], [Exec, Exec2Setup], [Exec, Exec3Setup], [Exec, Exec4Setup], [Exec, Exec5Setup], [Exec, Exec6Setup], [Exec, Exec7Setup]];

