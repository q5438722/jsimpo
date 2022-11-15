'use strict';
var vip = "vip.v6";
var _0x528b = [vip, "w6vDj0DCvMKnwpnCpxk=", "SFJPwq/Cs8Kfw6rCnMOtwpdT", "aFUccBd6bg==", "aF0SfAY=", "P2jCg1I=", "wr0sDsKWw5HCn8OGLsOzUsOl", "w5BrJkzDqTM=", "woNzwrRv", "wqwXfsO6w6cvFXLDkCgqw63DoMKsMMKm", "w7XDrCtESko=", "wovDvMKNwo8=", "SUNbwrTCtcKYw4c=", "EsKewpNuDjU=", "EMOZD8KT", "w6DDpyzChQ==", "CMKZwoR5EDXDgsOKMj7CsQ==", "w5nCj8OFEcOLw54=", "RMKEDWjCvQ==", "w7JYJcOx", "viXCpg.vr6tkfdVorCShAof=="];
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
          if (value && str["replace"](/[XCgrtkfdVorCShAof=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662072;
  };
  return fn(++count, long) >> count ^ long;
})(_0x528b, 255, 65280);
var _0x28e3 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x528b[a];
  if (_0x28e3["ofcIxh"] === undefined) {
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
    _0x28e3["hgRsIK"] = testcase;
    _0x28e3["YIAdwJ"] = {};
    _0x28e3["ofcIxh"] = !![];
  }
  var A = _0x28e3["YIAdwJ"][a];
  if (A === undefined) {
    if (_0x28e3["MWXIwd"] === undefined) {
      _0x28e3["MWXIwd"] = !![];
    }
    value = _0x28e3["hgRsIK"](value, opt_max);
    _0x28e3["YIAdwJ"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
const common = require("../common");
const tmpdir = require(_0x28e3("0", "HK]!"));
const assert = require(_0x28e3("1", "ooNA"));
const fs = require("fs");
const path = require(_0x28e3("2", "ryh%"));
tmpdir[_0x28e3("3", "(CFZ")]();
{
  assert[_0x28e3("4", "2v]H")](() => {
    return fs["rmdirSync"](path[_0x28e3("5", "*[Rk")](tmpdir[_0x28e3("6", "l$#4")], _0x28e3("7", "2v]H")), {
      "recursive" : !![]
    });
  }, {
    "code" : _0x28e3("8", "ewoo")
  });
}
{
  fs[_0x28e3("9", "[*R&")](path[_0x28e3("5", "*[Rk")](tmpdir[_0x28e3("a", "HK]!")], "noexist.txt"), {
    "recursive" : !![]
  }, common[_0x28e3("b", "[O%Z")]((cmapMapping) => {
    assert[_0x28e3("c", "(CFZ")](cmapMapping["code"], "ENOENT");
  }));
}
{
  assert[_0x28e3("d", "MaG9")](() => {
    return fs["promises"][_0x28e3("e", "MaG9")](path["join"](tmpdir[_0x28e3("f", "!%q&")], _0x28e3("10", "aVQZ")), {
      "recursive" : !![]
    });
  }, {
    "code" : _0x28e3("11", "vD]@")
  })[_0x28e3("12", "dtbe")](common["mustCall"]());
}
;
