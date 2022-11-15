'use strict';
var vip = "vip.v6";
var _0x3a0f = [vip, "w6YhHXvDvw==", "wr0zwo7Cum1DO8K+VRohw77DnMOkERbDnsKKw7jCiMOoD8Kz", "F8KpeQFjJVU=", "w5U+BQ==", "MxQw", "FcOTwqHDpcO3w6nCkg==", "w7s3wpTCqA==", "wr1KQcKqEQ==", "wrHCi8KDw4NnOsOd", "VcKYw7pQQGPClHkz", "wrFKYsOuw7TDiBAwJzQKwqIxw6DCjWnCvnozwqvCgsOeag==", "w4LDiGE+NsKHwofCkCwDw7lhR8KHJcOPQwZ+NcKFw55/wotswrjDqMOsdcKvcy7CnkzDuhksHyPDsyBWKMOhS8Ks", "w64zRMKhw67Dhhx3cCkewqIow7rClw3Cknpjw6TCn8KUPhgtwr3CpHzDs8KWUQ0hw5RKwpo=", "R8OswqplwqjDvzU=", "wq3Cv25Kw4g=", "CEoIKFtZPFYHUcORMmnDjcOUcGXDginCjSnCh3o=", 
"w7FqwobCt20=", "K8OwX8KEwq1i", "wrvCtcKjw4vDh8O3JlIEwqE=", "xHXviIpK.Mskv6CITTBrHedI=="];
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
          if (value && str["replace"](/[xHXIKMskCITTBrHedI=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662199;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3a0f, 192, 49152);
var _0x196f = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x3a0f[a];
  if (_0x196f["VFwSoT"] === undefined) {
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
    _0x196f["CPzsgP"] = testcase;
    _0x196f["PxELfZ"] = {};
    _0x196f["VFwSoT"] = !![];
  }
  var A = _0x196f["PxELfZ"][a];
  if (A === undefined) {
    if (_0x196f["pUMgWn"] === undefined) {
      _0x196f["pUMgWn"] = !![];
    }
    value = _0x196f["CPzsgP"](value, opt_max);
    _0x196f["PxELfZ"][a] = value;
  } else {
    value = A;
  }
  return value;
};
module[_0x196f("0", "O3W@")] = function initialize(data, range, elements, _0x2a92c8 = _0x196f("1", "aSw]")) {
  var keyNames = {
    "yAxOf" : function(value, joiner) {
      return value !== joiner;
    },
    "RohTw" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "mHJuW" : function(name, initialValue) {
      return name === initialValue;
    },
    "FSKbn" : _0x196f("2", "k3@j")
  };
  const net = Array[_0x196f("3", "7IEm")](data) ? data[0] : data;
  const artistTrack = net["output"][_0x196f("4", "4nzW")];
  if (keyNames[_0x196f("5", "$L$Q")](artistTrack, range[_0x196f("6", "uqHp")](elements[_0x196f("7", "lj$5")]))) {
    throw new Error(keyNames["RohTw"](keyNames["RohTw"](_0x196f("8", "LpOK"), _0x196f("9", "M$rx")), _0x196f("a", "LpOK")));
  }
  if (keyNames["mHJuW"](artistTrack, range[_0x196f("b", "X^38")]["context"])) {
    throw new Error(keyNames[_0x196f("c", "fFHM")](_0x196f("d", "(Qem"), "Do not set output directory to project root.\n"));
  }
  if (_0x2a92c8 === keyNames[_0x196f("e", "Nf3x")] && keyNames["yAxOf"](net[_0x196f("f", "tznW")][_0x196f("10", "%WYB")], elements["publicPath"])) {
    throw new Error(keyNames[_0x196f("11", "aSw]")](_0x196f("12", "Nf3x"), "Avoid modifying webpack output.publicPath directly. ") + 'Use the "publicPath" option instead.\n');
  }
};

