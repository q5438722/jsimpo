'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "w7QFCyDCoRJfI8KE", "w5VxGMKDXjQ6wqfCllY=", "eMKqesO1wpg9S8KA", "ZR1qw5JM", "wrE1wr/Cvg==", "wo0DwozCvFY=", "QcOLHMO1bmI=", "woTCn8KHPMKPPcOYw4zCow==", "ejXDo8OHakDDiyzCiMOOMDLDtzXDlVo=", "w5p7G8KUSy4=", "cRsviQp.ncqqvdC6MooEtTr=="];
(function(data, count, size) {
  var fn = function(script, type, str, value, prefix) {
    type = type >> 8;
    prefix = "po";
    var str = "shift";
    var method = "push";
    if (type < script) {
      for (; --script;) {
        value = data[str]();
        if (type === script) {
          type = value;
          str = data[prefix + "p"]();
        } else {
          if (type && str["replace"](/[cRsQncqqdCMooEtTr=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662954;
  };
  return fn(++count, size) >> count ^ size;
})(match, 474, 121344);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (fn["zBsKlv"] === undefined) {
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
    fn["IjcrnI"] = testcase;
    fn["YSxMLp"] = {};
    fn["zBsKlv"] = !![];
  }
  var tmp3 = fn["YSxMLp"][i];
  if (tmp3 === undefined) {
    if (fn["QbguDk"] === undefined) {
      fn["QbguDk"] = !![];
    }
    x = fn["IjcrnI"](x, n);
    fn["YSxMLp"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0xa07175 from "../Sort";
export default class BubbleSort extends _0xa07175 {
  [fn("0", "Dmv@")](canCreateDiscussions) {
    var self = {
      "OYAvS" : function(progressOld, progressNew) {
        return progressOld < progressNew;
      },
      "qiotL" : function(progressOld, progressNew) {
        return progressOld < progressNew;
      },
      "CELvv" : function(formatters, customFormatters) {
        return formatters + customFormatters;
      }
    };
    let _0x227fdc = ![];
    const array = [...canCreateDiscussions];
    for (let current = 1; self[fn("1", "Dmv@")](current, array[fn("2", "AgHq")]); current = current + 1) {
      _0x227fdc = ![];
      this[fn("3", "hh4#")][fn("4", "x@Wv")](array[current]);
      for (let i = 0; self["qiotL"](i, array[fn("5", "mV#3")] - current); i = i + 1) {
        this[fn("6", "8DG!")]["visitingCallback"](array[i]);
        if (this[fn("7", "mV#3")][fn("8", "Ns*c")](array[i + 1], array[i])) {
          [array[i], array[i + 1]] = [array[self[fn("9", "jK0H")](i, 1)], array[i]];
          _0x227fdc = !![];
        }
      }
      if (!_0x227fdc) {
        return array;
      }
    }
    return array;
  }
}
;
