'use strict';
var vip = "vip.v6";
var _0x550c = [vip, "wrDDiXlMKAU1", "w5rCqcORwq9N", "BMOnEA==", "FMOZw7smwqDDhD4DwrEdw5zDgg==", "H8O1BcKeYMKrdcOcw4tQwqbDhMKnw7AD", "w7LDgMOYwoXDrEE=", "W0paG0vDnw==", "MikDMyZWA0HDpWs=", "w5DDuMOVwo7DrsKpw7A=", "w4VnXsK3Ag==", "w5zDg8OAwpvDtg==", "wq/CkXvDtsOtw7TDjA==", "eB3DjA==", "ccO8wqZ7PzTDhw==", "D8OzAcKNYA==", "w5rDpylww6I=", "wqHCnxPCusK6HA0=", "LsOBwqc=", "w5TDggduw4k=", "Ay81w4s6RTM=", "D15m", "asKPIsOwMUHCkA==", "w63Cl8K6", "viUjJp.Xxv6JzlPXlMTnqlXA=="];
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
          if (value && str["replace"](/[UjJXxJzlPXlMTnqlXA=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662038;
  };
  return fn(++count, long) >> count ^ long;
})(_0x550c, 486, 124416);
var _0x56ae = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x550c[c];
  if (_0x56ae["mJfdaC"] === undefined) {
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
    _0x56ae["aIROZo"] = testcase;
    _0x56ae["EjdAzE"] = {};
    _0x56ae["mJfdaC"] = !![];
  }
  var e = _0x56ae["EjdAzE"][c];
  if (e === undefined) {
    if (_0x56ae["OTFrlY"] === undefined) {
      _0x56ae["OTFrlY"] = !![];
    }
    x = _0x56ae["aIROZo"](x, alpha);
    _0x56ae["EjdAzE"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const common = require(_0x56ae("0", "mzMK"));
const bench = common[_0x56ae("1", "j5!#")](main, {
  "size" : [16, 512, 4096, 16386],
  "args" : [1, 2, 5],
  "n" : [1E6]
});
function main({
  n : id,
  size : size,
  args : args
}) {
  var shortcuts = {
    "Bfvyn" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "FlGuX" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "HIiks" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "vyymG" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    }
  };
  const data = Buffer["alloc"](size, "a");
  const value = Buffer["alloc"](size, "a");
  const i = data[_0x56ae("2", "dQZr")];
  const objects__431 = value[_0x56ae("3", "!jV1")];
  value[size - 1] = "b"[_0x56ae("4", "bhU!")](0);
  switch(args) {
    case 2:
      data[_0x56ae("5", "8EDX")](value, 0);
      bench[_0x56ae("6", "akYQ")]();
      for (let s_instr = 0; shortcuts[_0x56ae("7", "dQZr")](s_instr, id); s_instr++) {
        data[_0x56ae("8", "cW)W")](value, 0);
      }
      bench[_0x56ae("9", "vCT3")](id);
      break;
    case 3:
      data[_0x56ae("a", "4A*2")](value, 0, objects__431);
      bench[_0x56ae("b", "j5!#")]();
      for (let s_instr = 0; shortcuts[_0x56ae("c", "sRx$")](s_instr, id); s_instr++) {
        data[_0x56ae("d", "Iw0W")](value, 0, objects__431);
      }
      bench[_0x56ae("e", "zonb")](id);
      break;
    case 4:
      data["compare"](value, 0, objects__431, 0);
      bench["start"]();
      for (let s_instr = 0; shortcuts[_0x56ae("f", "sRx$")](s_instr, id); s_instr++) {
        data[_0x56ae("10", "6Iq#")](value, 0, objects__431, 0);
      }
      bench[_0x56ae("11", "[iAv")](id);
      break;
    case 5:
      data[_0x56ae("12", "&uxa")](value, 0, objects__431, 0, i);
      bench["start"]();
      for (let i = 0; i < id; i++) {
        data[_0x56ae("10", "6Iq#")](value, 0, objects__431, 0, i);
      }
      bench[_0x56ae("13", "hG[%")](id);
      break;
    default:
      data[_0x56ae("14", "02v)")](value);
      bench["start"]();
      for (let s_instr = 0; shortcuts[_0x56ae("15", "XWxk")](s_instr, id); s_instr++) {
        data["compare"](value);
      }
      bench[_0x56ae("16", "vtnD")](id);
  }
}
;
