'use strict';
var vip = "vip.v6";
var _0x2dce = [vip, "w6DCq8OJcFfDkEA=", "wplhwrrDqsORw7zDuCDDl3QFBMKBdcKWL0/Cmwo7E8Ohwq9zRSVDXwopwrHDrMK4wp7DlwVaYifCl8KWw57CtTdEwo7Dv11GWSTCmcOzPcOZwrQoVT3CrHV6XsKJZRvDrEzClMOSw61DP2vChiUFV8OXZsK5wq9WJ2RBw7NWw4DCnMK5ScKMwpnCgSrDg8Kvw5EjYMOqGcKywq3CkxBsw6zCuMKowq7Dv8OnHW/CuDbCiAvCr8KBw4Nmez7DqibDrBoOwrHDj38XO2zCjcO9DTVwwp/CrDnCqsK7w7rDiMOrOcKsecOoKsKObsOiwqpFwrLDtBApf8OQw5fDhMO3w6Qewr7Cggx+JR3CuMOjw4DChWrDmQ7DpcKUQ1/DocK/UU/DgiBOAMKKw7HDngQ+wrZnGDPCsUsBS8Ocw7I2P8OMw6Q9P8OfLcKSwqI=", "wrLDvxXDi8K6w6LDkMKYw5xBHUQ0woFGw5nCtcK4w5MlJS/DkUnDtjDDoMOaZTjCv8O7ZMKoSS3CkwXCr0cQKMK3LcO1wooaw7XCg2bCh8O9w7kTYcOAw77Cly5YwqXCpCU9wrTCusK/w7kVw6Rjw5s6OBBsRcK6w7LCgMOFTXBAVMKpw4/Cnx/DqMOtwrUoGMKyw6cJTsOSUh/DlMO6FGjDoMKow5/Cj8OfD8OOWcK3w7vDosOIwrEX", 
"wpRlwprCmm/DtXbCs8Orw6Jrw6TDi8KZHsO2FxbCnGdLw5jDqcOGw4EDOAZ3QMKLVsOBf8K5", "UDTDocOJYMOEUVMQScOHB8KDwqvCn8K6wpprwpnClVNSw5zDlcKe", "E2vCkmzDlcOnfcK6woUiYcOc", "FsOVw4FlZQ==", "yvipe.avsE6coKDwLnGLfbM=="];
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
          if (value && str["replace"](/[yeasEcoKDwLnGLfbM=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662042;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2dce, 448, 114688);
var _0x193f = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x2dce[a];
  if (_0x193f["RQJoSI"] === undefined) {
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
    _0x193f["ZCdxOU"] = testcase;
    _0x193f["GejLYn"] = {};
    _0x193f["RQJoSI"] = !![];
  }
  var A = _0x193f["GejLYn"][a];
  if (A === undefined) {
    if (_0x193f["iwFrIt"] === undefined) {
      _0x193f["iwFrIt"] = !![];
    }
    value = _0x193f["ZCdxOU"](value, opt_max);
    _0x193f["GejLYn"][a] = value;
  } else {
    value = A;
  }
  return value;
};
module[_0x193f("0", "^($@")] = {
  "C" : {
    35 : 0.00489,
    41 : 0.04397,
    46 : 0.00977,
    47 : 0.00977,
    52 : 0.07328,
    60 : 0.01466,
    64 : 0.00489,
    66 : 0.00489,
    68 : 0.02443,
    72 : 0.00977,
    78 : 0.16121,
    85 : 0.00489,
    86 : 0.00977,
    87 : 0.02443,
    88 : 1.88073,
    89 : 0.02931,
    "_" : _0x193f("1", "coEk")
  },
  "D" : {
    11 : .00489,
    25 : .00489,
    26 : .01954,
    28 : .00977,
    33 : .00977,
    38 : .00977,
    40 : .0342,
    41 : .00489,
    42 : .02443,
    43 : .12213,
    46 : .02931,
    47 : .00977,
    48 : .02443,
    49 : .08305,
    50 : .00977,
    53 : .00489,
    55 : .01466,
    56 : .00977,
    58 : .00977,
    59 : .00489,
    62 : .00977,
    63 : .15144,
    65 : .01466,
    66 : .00489,
    67 : .01954,
    69 : .26868,
    70 : .00977,
    71 : .0342,
    72 : .00977,
    73 : .00977,
    74 : .00977,
    75 : .05862,
    76 : .00977,
    77 : .01954,
    78 : .01466,
    79 : .17098,
    80 : .03908,
    81 : .0342,
    83 : .04885,
    84 : .0342,
    85 : .04397,
    86 : .22471,
    87 : 1.00631,
    88 : .15144,
    89 : 3.79076,
    90 : 20.53654,
    91 : 1.04539,
    92 : .01466,
    "_" : _0x193f("2", "J8H)")
  },
  "F" : {
    42 : .00489,
    72 : .00489,
    73 : .04397,
    74 : .00977,
    75 : .61551,
    76 : 1.50947,
    "_" : "9 11 12 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 60 62 63 64 65 66 67 68 69 70 71 9.5-9.6 10.5 10.6 11.1 11.5 11.6 12.1",
    "10.0-10.1" : 0
  },
  "G" : {
    8 : .00249,
    "3.2" : 0,
    "4.0-4.1" : 0,
    "4.2-4.3" : 0,
    "5.0-5.1" : .0083,
    "6.0-6.1" : .00913,
    "7.0-7.1" : .44883,
    "8.1-8.4" : .03319,
    "9.0-9.2" : .00996,
    "9.3" : .96818,
    "10.0-10.2" : .03153,
    "10.3" : .30862,
    "11.0-11.2" : .08296,
    "11.3-11.4" : .10453,
    "12.0-12.1" : .05061,
    "12.2-12.4" : .53014,
    "13.0-13.1" : .03236,
    "13.2" : .00747,
    "13.3" : .2323,
    "13.4-13.7" : .24474,
    "14.0-14.4" : 3.27374,
    "14.5-14.6" : .79728
  },
  "E" : {
    4 : 0,
    8 : .0342,
    11 : .00489,
    13 : .00977,
    14 : .42011,
    "_" : _0x193f("3", "QG4P"),
    "5.1" : .03908,
    "10.1" : .01466,
    "11.1" : .10259,
    "12.1" : .05374,
    "13.1" : .27356,
    "14.1" : .19052
  },
  "B" : {
    12 : .07328,
    13 : .0342,
    14 : .0342,
    15 : .03908,
    16 : .01954,
    17 : .11724,
    18 : .3908,
    81 : .01954,
    83 : .00977,
    84 : .02443,
    85 : .02443,
    86 : .00977,
    87 : .01466,
    88 : .01466,
    89 : .1319,
    90 : 3.39019,
    91 : .22471,
    "_" : "79 80"
  },
  "P" : {
    4 : 1.22078,
    "5.0-5.4" : .10259,
    "6.2-6.4" : .02052,
    "7.2-7.4" : .19491,
    "8.2" : .03078,
    "9.2" : .08207,
    "10.1" : .21543,
    "11.1-11.2" : .11285,
    "12.0" : .21543,
    "13.0" : .50267,
    "14.0" : .96431
  },
  "I" : {
    0 : 0,
    3 : 0,
    4 : .0045,
    "2.1" : 0,
    "2.2" : 0,
    "2.3" : 0,
    "4.1" : .07912,
    "4.2-4.3" : .08901,
    "4.4" : 0,
    "4.4.3-4.4.4" : .2468
  },
  "K" : {
    "_" : _0x193f("4", "%)@3")
  },
  "A" : {
    9 : .00797,
    11 : .96415,
    "_" : _0x193f("5", "EkRp")
  },
  "J" : {
    7 : 0,
    10 : .00512
  },
  "N" : {
    "_" : _0x193f("6", "Hews")
  },
  "S" : {
    "2.5" : .07673
  },
  "R" : {
    "_" : "0"
  },
  "M" : {
    0 : .15857
  },
  "Q" : {
    "10.4" : .10742
  },
  "O" : {
    0 : .53196
  },
  "H" : {
    0 : 2.52297
  },
  "L" : {
    0 : 44.60152
  }
};

