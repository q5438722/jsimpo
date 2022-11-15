'use strict';
var vip = "vip.v6";
var _0x2e2e = [vip, "fsK+wofDl8O1JQUZQMO4IyXDj8OTScKWL3PDgMK4EMOOEMKNXjvCmcK0wqbDjg==", "Sgcgw5NIHB/DtsOLQQjClDLCgsOawpTCl3IRAcOOwq0l", "wpPCrC3Dn8OjWMOJHmgowq1GP2LDuMOKZVpNwp3ClcOodStl", "eMK+woXDl8O7JQMJWMOtNDA=", "MEAHH8K+OcK1", "w7fCr8KcwqDDpil4w7VxQG15HigJbh4XN8OTbx4Kw67CtRrCiMO+UgDCvBtKw5nDkUw/w619wpvCqmDDgFjDiGTCnllYw4FkYzFuH8OQRMORKcOJwr3CoC5Qw5PCsVc6w5ImwpXCl8KBVTE8w4XCljQqE8KlwozDicOEWMO6c2rCsAheP1XDhMKywpjCqmViLEBiYMKMBMKKFcOEOzszw4LCkcOww6gET8O/Blc3woDDnkvCuldoCnJGbsKnwoLDm3XDhT82w5bDkDBYw4nCncKHRXgZw4DCl8OKwpjDgTbCvBjDgMKufnDDo8Odw63CuGU5XsK+OhtpDT7DmcKhw5jDmmvCvXbChnPDv8KBwoMiwoHDpMO/w5zDpcKLRhLCp1szwrzCgMKmw6ggw6EEwp98U8Otwr3DjRsAwpDDicOBZgXDkMKZDiEzVEEdwqN8DBB+asODwoY5w5nDiHrDjMKAWgoZJhc=", 
"wqtyN3pbNm8hQcO0w6bCisKFwpfChMKtFSNQwpXChX48YTVATzsgMBRxdU1Jwr/DjcKNCsOnwqRcwroRMsKwC13CqsK9UydAaS3DoSbDqsKnGCfDtcKLTsKkw5sIQAzCrsOuGsOGSsO3S2pEwolNwrnDtBRVQlwpEMOZw5kIwprCjhTCmhtFTMOHHRJ7C8OMUDpZwrAxP8O3w5XDqB98YGnCmE7CjCxWBzpcwqDDncKRbSEZw6XDiMKbw53CmcOUTlbDgsKDKcOjfTtWw6PDhcOHIW/CnsO1aMOOw57CiyPCunsxGcOEwo80wrQ/NsKpwpstG8OjejXDtjXDqcKnfsOmXV3CrcOTw6zCpcOyUnnDsMOEFF3Do0dARjBMdCIsD8OyHFJQV8Op", "vigp.vks6qASozjDdqcZuTC=="];
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
          if (value && str["replace"](/[gksqASozjDdqcZuTC=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662043;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2e2e, 417, 106752);
var _0x224d = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x2e2e[a];
  if (_0x224d["ZESUAy"] === undefined) {
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
    _0x224d["NZvqOE"] = testcase;
    _0x224d["Nptgam"] = {};
    _0x224d["ZESUAy"] = !![];
  }
  var A = _0x224d["Nptgam"][a];
  if (A === undefined) {
    if (_0x224d["fOFpgp"] === undefined) {
      _0x224d["fOFpgp"] = !![];
    }
    value = _0x224d["NZvqOE"](value, opt_max);
    _0x224d["Nptgam"][a] = value;
  } else {
    value = A;
  }
  return value;
};
module[_0x224d("0", "CbMZ")] = {
  "C" : {
    52 : .14448,
    72 : .01926,
    78 : .04816,
    85 : .00482,
    86 : .02408,
    87 : .0289,
    88 : 2.72104,
    89 : .00963,
    "_" : _0x224d("1", "GBvI")
  },
  "D" : {
    49 : 1.01136,
    65 : .00963,
    67 : .13485,
    71 : .13485,
    72 : .04334,
    74 : .00482,
    75 : .06261,
    76 : .01926,
    77 : .03853,
    78 : .01926,
    79 : .06261,
    80 : .03853,
    81 : .03371,
    83 : .0289,
    84 : .01926,
    85 : .0289,
    86 : .04334,
    87 : .19264,
    88 : .2697,
    89 : .86688,
    90 : 20.21275,
    91 : .7224,
    "_" : "4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 66 68 69 70 73 92 93 94"
  },
  "F" : {
    46 : .00482,
    73 : .02408,
    74 : .00482,
    75 : .17338,
    76 : .28414,
    "_" : _0x224d("2", "Yb&3"),
    "10.0-10.1" : 0
  },
  "G" : {
    8 : 0,
    "3.2" : 0,
    "4.0-4.1" : 0,
    "4.2-4.3" : 0,
    "5.0-5.1" : .00303,
    "6.0-6.1" : .00303,
    "7.0-7.1" : .01211,
    "8.1-8.4" : .00908,
    "9.0-9.2" : 0,
    "9.3" : .88678,
    "10.0-10.2" : .00605,
    "10.3" : .69308,
    "11.0-11.2" : .16343,
    "11.3-11.4" : .03935,
    "12.0-12.1" : .06053,
    "12.2-12.4" : .36319,
    "13.0-13.1" : .01211,
    "13.2" : .01513,
    "13.3" : .23002,
    "13.4-13.7" : .81717,
    "14.0-14.4" : 22.10907,
    "14.5-14.6" : 2.08833
  },
  "E" : {
    4 : 0,
    11 : .0289,
    12 : .01445,
    13 : .13485,
    14 : 6.02482,
    "_" : _0x224d("3", "I)r2"),
    "6.1" : .01926,
    "9.1" : .00482,
    "10.1" : .05298,
    "11.1" : .18301,
    "12.1" : .1204,
    "13.1" : 1.34848,
    "14.1" : 3.59274
  },
  "B" : {
    14 : .06261,
    16 : .01445,
    17 : .01926,
    18 : .1204,
    80 : .00482,
    86 : .01926,
    87 : .01926,
    88 : .00963,
    89 : .2697,
    90 : 6.44381,
    91 : .25043,
    "_" : _0x224d("4", "Wh4(")
  },
  "P" : {
    4 : .01113,
    "5.0-5.4" : .01016,
    "6.2-6.4" : .01016,
    "7.2-7.4" : .16258,
    "8.2" : .03338,
    "9.2" : .02099,
    "10.1" : .10013,
    "11.1-11.2" : .19941,
    "12.0" : .05563,
    "13.0" : .18913,
    "14.0" : 3.11501
  },
  "I" : {
    0 : 0,
    3 : 0,
    4 : .02577,
    "2.1" : 0,
    "2.2" : 0,
    "2.3" : 0,
    "4.1" : 0,
    "4.2-4.3" : 7E-4,
    "4.4" : 0,
    "4.4.3-4.4.4" : .02019
  },
  "K" : {
    "_" : _0x224d("5", "t9Vc")
  },
  "A" : {
    9 : .03556,
    11 : .6146,
    "_" : _0x224d("6", "I)r2")
  },
  "J" : {
    7 : 0,
    10 : 0
  },
  "N" : {
    10 : .02735,
    11 : .02361
  },
  "S" : {
    "2.5" : 0
  },
  "R" : {
    "_" : "0"
  },
  "M" : {
    0 : .52877
  },
  "Q" : {
    "10.4" : 0
  },
  "O" : {
    0 : .0311
  },
  "H" : {
    0 : .27975
  },
  "L" : {
    0 : 20.4319
  }
};

