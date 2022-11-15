'use strict';
var vip = "vip.v6";
var _0xf912 = [vip, "wpMoacO9PmRMRl3CjDc7w79Z", "w6nCnSHDniLClsKew6LCmsKDw7dUGR3CpcO6BXQYFi0gw6h+bS7Cr1AGwqgbL8K5wqjDsz7CjsOhw5rDg2IBBXglXH3CgMKNMH7ClMOBdcOSw6DDmHrCq8KIwpzDhUzDrTbCqWV6wonDiMKoEMKjw4nDhcKPwrnCssKqw4BQKTZyw4dKw5jDtMObAMOjQMOKc8OzDi7CrwDDnMKyF8KHGB5dw45tPsOBwqjCm8OuHGQae17DtMK/wpvDqWHDmGRgw7bDmEM+wog4w50aW3E0J8OWQcKOw6x8XgnDvcK2H08ewrorOsK/cHvDisKUKMO/VV7DkMOKIxLDscOxY8OywpjCuXvCsVnClsKqwodwNcOlw6cOC0vDqSIqw5gfw4lUw6cWG8OtwogQVcOWbsOHw61+QsOQwqzDvRvDt8KtwojDvsOgwqMHT1MmOMOpw5rDr0oYYzvCp0HCkQ==", 
"woTCmV8Jw5EhdX3DqTLCjHViFlLDuBHCtMKlw53CucOowpfCo8O3H8OjT8KjwqXClU/Dt8Oiwp7CvQ9bQGvDjMO0w6QIworCm8OQwosWwojDjkYQJcOQNMKEF8Kawo8SJCfCu8OtOGzDmAhqw5/Dmi8uw4kTw4rDhcOwB257G31eXQfDggfDgGRuwpjDp8OYwqtQwpjDq1fCmzFKYcORw50wB8Khw7XDs8OrOibCt8OFFzTCuEvDksKYw7jCsjIzw5XDsBEybzMiDcOiw4o/w74Qw5M0VMKEw4vClsOrN8KIN2fCslHDs8KUwqHDt8OyAQrCvcKAw73DpcOWwo7Dt8OpGMO5EMOJRBPDvsOvGx/CiDsqMMKaRRUWYsONJ0fCo3YNLsO6A8KCX0PDtWYRfcKHworChWtuVShbVw3ChQ==", "a08ww557MBHDvMOLwozCs2bCisKOVlDCocKPAmXDlsOVw6kpwooST1PCjsKdUA3DqyNDesKbYw==", 
"CviDp.wva6XXNGQQzlkIV=="];
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
          if (value && str["replace"](/[CDwaXXNGQQzlkIV=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662041;
  };
  return fn(++count, long) >> count ^ long;
})(_0xf912, 277, 70912);
var _0x372c = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0xf912[a];
  if (_0x372c["dDCtFI"] === undefined) {
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
    _0x372c["uuymPA"] = testcase;
    _0x372c["MhmhWD"] = {};
    _0x372c["dDCtFI"] = !![];
  }
  var A = _0x372c["MhmhWD"][a];
  if (A === undefined) {
    if (_0x372c["rEZVjD"] === undefined) {
      _0x372c["rEZVjD"] = !![];
    }
    value = _0x372c["uuymPA"](value, opt_max);
    _0x372c["MhmhWD"][a] = value;
  } else {
    value = A;
  }
  return value;
};
module["exports"] = {
  "C" : {
    41 : 0.01556,
    60 : 0.22818,
    68 : 0.08298,
    70 : 0.01037,
    78 : 0.76234,
    81 : 0.09335,
    83 : 0.01556,
    84 : 0.06223,
    85 : .10372,
    86 : .08298,
    87 : .10372,
    88 : 7.7064,
    89 : .01556,
    "_" : _0x372c("0", "FS0t")
  },
  "D" : {
    43 : .04149,
    49 : .12446,
    50 : .00519,
    56 : .01556,
    63 : .02074,
    65 : .01037,
    70 : .02074,
    73 : .02074,
    74 : .01037,
    77 : .01037,
    81 : .03112,
    83 : .01037,
    85 : .01556,
    86 : .01556,
    87 : .03112,
    88 : .12446,
    89 : .92311,
    90 : 26.27746,
    91 : 1.01646,
    "_" : "4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 44 45 46 47 48 51 52 53 54 55 57 58 59 60 61 62 64 66 67 68 69 71 72 75 76 78 79 80 84 92 93 94"
  },
  "F" : {
    72 : .08298,
    73 : .02074,
    75 : .1867,
    76 : .24893,
    "_" : _0x372c("1", "zsuy"),
    "10.0-10.1" : 0
  },
  "G" : {
    8 : .02997,
    "3.2" : 0,
    "4.0-4.1" : 0,
    "4.2-4.3" : 0,
    "5.0-5.1" : 0,
    "6.0-6.1" : 0,
    "7.0-7.1" : .09846,
    "8.1-8.4" : 0,
    "9.0-9.2" : 0,
    "9.3" : .05244,
    "10.0-10.2" : .06529,
    "10.3" : .17766,
    "11.0-11.2" : .17445,
    "11.3-11.4" : .01926,
    "12.0-12.1" : .01284,
    "12.2-12.4" : .21726,
    "13.0-13.1" : .01284,
    "13.2" : .00963,
    "13.3" : .16803,
    "13.4-13.7" : .43667,
    "14.0-14.4" : 6.29419,
    "14.5-14.6" : 1.76272
  },
  "E" : {
    4 : 0,
    10 : .03112,
    12 : .06742,
    13 : .1867,
    14 : 1.70619,
    "_" : _0x372c("2", "^Y]3"),
    "10.1" : .05186,
    "11.1" : .05186,
    "12.1" : .23856,
    "13.1" : .27486,
    "14.1" : 1.1098
  },
  "B" : {
    15 : .04149,
    17 : .07779,
    18 : .04149,
    84 : .0363,
    85 : .01556,
    86 : .12965,
    87 : .01037,
    88 : .02593,
    89 : .18151,
    90 : 4.60517,
    91 : .4823,
    "_" : "12 13 14 16 79 80 81 83"
  },
  "P" : {
    4 : .02065,
    "5.0-5.4" : .04006,
    "6.2-6.4" : .08011,
    "7.2-7.4" : .55753,
    "8.2" : .02003,
    "9.2" : .0413,
    "10.1" : .02065,
    "11.1-11.2" : .0826,
    "12.0" : .06195,
    "13.0" : .29941,
    "14.0" : 2.91154
  },
  "I" : {
    0 : 0,
    3 : 0,
    4 : 0,
    "2.1" : 0,
    "2.2" : 0,
    "2.3" : 0,
    "4.1" : 0,
    "4.2-4.3" : .00294,
    "4.4" : 0,
    "4.4.3-4.4.4" : .0452
  },
  "K" : {
    "_" : "0 10 11 12 11.1 11.5 12.1"
  },
  "A" : {
    11 : .14521,
    "_" : _0x372c("3", "AcX2")
  },
  "J" : {
    7 : 0,
    10 : 0
  },
  "N" : {
    10 : .02735,
    11 : .01885
  },
  "S" : {
    "2.5" : 0
  },
  "R" : {
    "_" : "0"
  },
  "M" : {
    0 : .22626
  },
  "Q" : {
    "10.4" : 0
  },
  "O" : {
    0 : .02407
  },
  "H" : {
    0 : 2.68897
  },
  "L" : {
    0 : 34.51851
  }
};

