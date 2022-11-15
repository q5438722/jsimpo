'use strict';
var vip = "vip.v6";
var _0x5972 = [vip, "wojChMKqw7vDlA==", "wpDCjnM=", "F8KfQRo=", "FzAZwpx+w6TCoQI=", "MWYAw4PCo8Kzwq93woHCqGJrw44=", "EicRwoxPw4fCsBgyw6nDrsKRMQ==", "csO5U8O5fSvDpwF9w7ltw7s=", "TRXCnsOY", "EDPDnV7CkDLDpcKgEBfCjifCscOUMCLCrWQhcA==", "wprDmcOc", "YMOjwqExwqzDrVHCvw==", "D0cKwp7CiBw=", "HGkdwp5LWcOFw78=", "NHEaw5LCsg==", "w47Dr8O4worCtGlFR8Kaw47DnMK1e0Imw6LCiitxwo0=", "wpF2wpoS", "wofDvUc=", "w6haacKKwrE7JgfDo1w=", "Dj7Cjw==", "C1/DhcKHw44=", "wpzCjsOveQU=", "ejvwip.vMD6MKhDoUnTfVxfH=="];
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
          if (value && str["replace"](/[ejwMDMKhDoUnTfVxfH=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661725;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5972, 494, 126464);
var _0x50e9 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x5972[a];
  if (_0x50e9["aEfTGW"] === undefined) {
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
    _0x50e9["xUqJFE"] = testcase;
    _0x50e9["AYTiwC"] = {};
    _0x50e9["aEfTGW"] = !![];
  }
  var A = _0x50e9["AYTiwC"][a];
  if (A === undefined) {
    if (_0x50e9["jzNcRs"] === undefined) {
      _0x50e9["jzNcRs"] = !![];
    }
    value = _0x50e9["xUqJFE"](value, opt_max);
    _0x50e9["AYTiwC"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const crypto = require(_0x50e9("0", "q02Y"));
const {
  clipboard : clipboard
} = require(_0x50e9("1", "hNC4"));
module["exports"] = class Clipboard {
  constructor() {
    this["reset"]();
  }
  [_0x50e9("2", "*J1U")]() {
    this["metadata"] = null;
    this[_0x50e9("3", "VGP)")] = null;
  }
  ["md5"](data) {
    var _0x228495 = {
      "YAgsC" : _0x50e9("4", "rPAf"),
      "UIGsA" : _0x50e9("5", "*[fc")
    };
    return crypto[_0x50e9("6", "soMP")](_0x50e9("7", "[6aK"))["update"](data, _0x228495[_0x50e9("8", "pzUM")])["digest"](_0x228495[_0x50e9("9", "RzPs")]);
  }
  [_0x50e9("a", "yGZN")](mmCoreSplitViewBlock, metadata) {
    this["signatureForMetadata"] = this[_0x50e9("b", "!DZ!")](mmCoreSplitViewBlock);
    this["metadata"] = metadata;
    clipboard["writeText"](mmCoreSplitViewBlock);
  }
  [_0x50e9("c", "VCmk")]() {
    return clipboard[_0x50e9("d", "lkk5")]();
  }
  [_0x50e9("e", "*J1U")](mmCoreSplitViewBlock) {
    clipboard[_0x50e9("f", "lkk5")](mmCoreSplitViewBlock);
  }
  ["readFindText"]() {
    return clipboard[_0x50e9("10", "yVnh")]();
  }
  ["readWithMetadata"]() {
    var _updateDeep2 = {
      "FcVXd" : function(name, initialValue) {
        return name === initialValue;
      }
    };
    const newValue = this[_0x50e9("11", "5PyD")]();
    if (_updateDeep2["FcVXd"](this[_0x50e9("12", "[6aK")], this[_0x50e9("13", "y5pE")](newValue))) {
      return {
        "text" : newValue,
        "metadata" : this[_0x50e9("14", "zWJy")]
      };
    } else {
      return {
        "text" : newValue
      };
    }
  }
};

