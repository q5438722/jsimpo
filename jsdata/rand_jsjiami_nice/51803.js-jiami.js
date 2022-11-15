'use strict';
var vip = "vip.v6";
var _0x236d = [vip, "YcOwDwFyLy8=", "woMkw7LDp8OnwoQ0w6LDsHnCkQbDqMOsw5g3YXhdaMOow5QEw43CrBlJckdKeGPCmExKe2MIwp9hZMKlCnEnPcKyw5M/AcK+G8KFw7crMsOpwrwiBWQlccOnRcOwHcKxwqx+w4M1TmdMwpFVw484w7JyNcO7wpNCMRQ5d8KTwqDCp0zCs2zDmcKRwpHCtMO1c8KwET3CtTc4Ll1WbsOtwrV2wodzJsK6HSjCiQTCo3zCr1DCicKLwo/DlBTDsA/CuMKGw7/CtMOwV8OxwrcwwocDFMOnw7zCksO2w5MzKBRJV8K+JATCj17Du2EYKh5eLMKbwrvDqUR+JnXCgcKCw7PDnDHCp8OiwqbDozM0TMOzwpXDgMKTQ8Oww5kyFU51w4sLw4AYCMOpcMKcGCzDgsKMQQbDmCHCj8Kuw77Cu8KtbsKqw4ADw73Dj3k=", "IcKac1PClhrDuCtsdsKvw6pxw7Buw4bCo0MBcHHCixYwbg==", 
"wrrCn08iwrTDm0A=", "wvGWmip.vtGctk6xKaeaPYy=="];
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
          if (value && str["replace"](/[wGWmtGctkxKaeaPYy=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662040;
  };
  return fn(++count, long) >> count ^ long;
})(_0x236d, 244, 62464);
var _0x1b3c = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x236d[a];
  if (_0x1b3c["SlttER"] === undefined) {
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
    _0x1b3c["LOmnOD"] = testcase;
    _0x1b3c["SuVMQK"] = {};
    _0x1b3c["SlttER"] = !![];
  }
  var A = _0x1b3c["SuVMQK"][a];
  if (A === undefined) {
    if (_0x1b3c["kEqtDF"] === undefined) {
      _0x1b3c["kEqtDF"] = !![];
    }
    value = _0x1b3c["LOmnOD"](value, opt_max);
    _0x1b3c["SuVMQK"][a] = value;
  } else {
    value = A;
  }
  return value;
};
module[_0x1b3c("0", "Zi6r")] = {
  "C" : {
    5 : 0.00405,
    17 : 0.00811,
    52 : 0.01621,
    58 : 0.00811,
    66 : 0.00811,
    68 : 0.02027,
    73 : 0.00405,
    78 : 0.04864,
    79 : 0.00405,
    84 : 0.00811,
    85 : 0.00405,
    86 : 0.01621,
    87 : 0.02432,
    88 : 1.48745,
    89 : 0.01621,
    "_" : _0x1b3c("1", "@wQv")
  },
  "D" : {
    23 : 0.00405,
    24 : 0.00811,
    38 : 0.02027,
    47 : 0.00405,
    49 : 0.10943,
    53 : 0.02837,
    58 : 0.00405,
    61 : 0.00405,
    63 : 0.00405,
    65 : 0.01216,
    67 : 0.01216,
    68 : 0.00811,
    70 : 0.00405,
    71 : 0.00405,
    72 : 0.01216,
    73 : 0.00811,
    74 : 0.00811,
    75 : 0.00811,
    76 : 0.01216,
    77 : 0.00811,
    78 : 0.01216,
    79 : 0.02837,
    80 : 0.02837,
    81 : 0.02432,
    83 : 0.04053,
    84 : 0.04864,
    85 : .04458,
    86 : .06485,
    87 : .22292,
    88 : .11348,
    89 : .7417,
    90 : 27.74684,
    91 : .82681,
    92 : .00811,
    "_" : "4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 25 26 27 28 29 30 31 32 33 34 35 36 37 39 40 41 42 43 44 45 46 48 50 51 52 54 55 56 57 59 60 62 64 66 69 93 94"
  },
  "F" : {
    73 : .4661,
    75 : 1.41855,
    76 : .58769,
    "_" : "9 11 12 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 60 62 63 64 65 66 67 68 69 70 71 72 74 9.5-9.6 10.5 10.6 11.1 11.5 11.6 12.1",
    "10.0-10.1" : 0
  },
  "G" : {
    8 : 0,
    "3.2" : 7.2E-4,
    "4.0-4.1" : 0,
    "4.2-4.3" : 0,
    "5.0-5.1" : .00288,
    "6.0-6.1" : .00432,
    "7.0-7.1" : .0036,
    "8.1-8.4" : .0036,
    "9.0-9.2" : 0,
    "9.3" : .05468,
    "10.0-10.2" : .00504,
    "10.3" : .03741,
    "11.0-11.2" : .01439,
    "11.3-11.4" : .03454,
    "12.0-12.1" : .02734,
    "12.2-12.4" : .13167,
    "13.0-13.1" : .02302,
    "13.2" : .01007,
    "13.3" : .0921,
    "13.4-13.7" : .31946,
    "14.0-14.4" : 4.9466,
    "14.5-14.6" : 1.0217
  },
  "E" : {
    4 : 0,
    11 : .00405,
    12 : .00405,
    13 : .04053,
    14 : .79034,
    "_" : "0 5 6 7 8 9 10 3.1 3.2 5.1 6.1 7.1 9.1",
    "10.1" : .00811,
    "11.1" : .02027,
    "12.1" : .04053,
    "13.1" : .23913,
    "14.1" : .40935
  },
  "B" : {
    17 : .00811,
    18 : .03242,
    80 : .00405,
    84 : .01216,
    85 : .00811,
    87 : .00405,
    88 : .00811,
    89 : .03648,
    90 : 1.8887,
    91 : .07295,
    "_" : "12 13 14 15 16 79 81 83 86"
  },
  "P" : {
    4 : .08275,
    "5.0-5.4" : .02104,
    "6.2-6.4" : .1561,
    "7.2-7.4" : .06207,
    "8.2" : .03018,
    "9.2" : .06207,
    "10.1" : .02069,
    "11.1-11.2" : .34136,
    "12.0" : .07241,
    "13.0" : .31033,
    "14.0" : 1.42752
  },
  "I" : {
    0 : 0,
    3 : 0,
    4 : 0,
    "2.1" : 0,
    "2.2" : 0,
    "2.3" : 0,
    "4.1" : .0014,
    "4.2-4.3" : .0021,
    "4.4" : 0,
    "4.4.3-4.4.4" : .02029
  },
  "K" : {
    "_" : _0x1b3c("2", "uIUd")
  },
  "A" : {
    8 : .00929,
    9 : .00464,
    10 : .00464,
    11 : .20434,
    "_" : _0x1b3c("3", "CbjU")
  },
  "J" : {
    7 : 0,
    10 : 0
  },
  "N" : {
    "_" : "10 11"
  },
  "S" : {
    "2.5" : 0
  },
  "R" : {
    "_" : "0"
  },
  "M" : {
    0 : .14275
  },
  "Q" : {
    "10.4" : 0
  },
  "O" : {
    0 : .03569
  },
  "H" : {
    0 : .14078
  },
  "L" : {
    0 : 51.80758
  }
};

