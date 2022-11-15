'use strict';
var vip = "vip.v6";
var _0xb576 = [vip, "w53CoMKXGMOjZWcrwq98wpTCug==", "w7fDuhTCjcOGw6g8", "w5bCk8OHwrvChTQ9fMOoTsOlah3Ck8KtQ8K2FcOWwqbCvh93w7vCp8OACUTCqMKaw7HDgcKBw61aCGkiQjIawq4lG8OOwog1w7NzKsK9XsKTwo/CukPDssOzLVUQbmjCjDMVbcOfw6HClcKawrbDiEAow5PCt8KJwp19w7fCpsKEwqEIwqHDiFPDjcKGwrzDrcKUwpDChMOzYkTClcOiNMOjfB5nCsOtZcONLMO9w5/CicOlw5RyJQzChXBEw5HCkmUGYMOhw57DgynCoj9uasOCwrnCucOXwrTDkMKnN8K6Q8Kewppyw6UEwojDvAnDuxhEw6jDncO4w6IFd8OEf8KoH8O2wqg=", "wojCocO9FcOHPmTChMKhCMKBwr5Ww6/CosObwrLCmMKGPcOSacOkwpXDjmTDocK2wo9YwqNHw4sMMVBww7YRwqpTbk8hEsKLRw/ChyB+TcO1w4LDg8KKYj3DpMO9CQDCtsKcwpQzCcO3cMOaTMOIw5gdDcOcwqJCZ8ORw4jDg1zDusO7PsOWWy3Crz/CoDTCvcKxLQfDoMKreELDisKdw6nCt8KpwrHCghVvasOyw5LCs8KywofDvCLDl8KXw6d/wqPDvgfDhVbCicO9w43DocKUQ8KWKG3ChsK5VMKhwo7CikszMgwTw6nDmsK7wpxvwrYKw6zCvMOzYE4vw7vDtijCmMO6KyPDg8OkwoIbC8KXw6PClsOQwqrCnA0ew5k1Y0rCtMKKHcKmw7zCqsOcNsOrFRbCqwRjalcBbMKkw7bCoMKnw7xSScKZ", 
"K8KqwprCkcK/w7Jcw5pwJW7Dm8KZUMOWwrtOECUrwrjCnsKtVzzCtQrDmwFxbx/CpMK8RsK3w6DDsA==", "dcOYwqM/w7DCjwbDjzPDjDDCgGHDint5wrldEMKIw5bDv2ZQw5Y=", "Hvip.v6gUzNuAoHQtEzRVFyc=="];
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
          if (value && str["replace"](/[HgUzNuAoHQtEzRVFyc=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662744;
  };
  return fn(++count, long) >> count ^ long;
})(_0xb576, 193, 49408);
var _0x5398 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0xb576[a];
  if (_0x5398["RwpNuS"] === undefined) {
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
    _0x5398["CMftPq"] = testcase;
    _0x5398["JcNYNA"] = {};
    _0x5398["RwpNuS"] = !![];
  }
  var A = _0x5398["JcNYNA"][a];
  if (A === undefined) {
    if (_0x5398["nWmsoR"] === undefined) {
      _0x5398["nWmsoR"] = !![];
    }
    value = _0x5398["CMftPq"](value, opt_max);
    _0x5398["JcNYNA"][a] = value;
  } else {
    value = A;
  }
  return value;
};
module[_0x5398("0", "J^Q3")] = {
  "C" : {
    48 : 0.00523,
    52 : 0.03658,
    59 : 0.01045,
    68 : 0.01045,
    78 : 0.13063,
    84 : 0.1254,
    85 : 0.01568,
    86 : 0.03658,
    87 : .0627,
    88 : 2.30423,
    89 : .03135,
    "_" : "2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 49 50 51 53 54 55 56 57 58 60 61 62 63 64 65 66 67 69 70 71 72 73 74 75 76 77 79 80 81 82 83 90 91 3.5 3.6"
  },
  "D" : {
    38 : .01568,
    49 : .07315,
    53 : .0209,
    61 : .01045,
    63 : .00523,
    65 : .0209,
    66 : .04703,
    67 : .0418,
    68 : .01568,
    69 : .24558,
    70 : .00523,
    71 : .01045,
    72 : .01045,
    73 : .01568,
    74 : .01045,
    75 : .04703,
    76 : .06793,
    77 : .02613,
    78 : .01568,
    79 : .0418,
    80 : .03135,
    81 : .03135,
    83 : .03658,
    84 : .0418,
    85 : .05225,
    86 : .1045,
    87 : .26125,
    88 : .8987,
    89 : 2.55503,
    90 : 27.81268,
    91 : .64268,
    92 : .00523,
    "_" : _0x5398("1", "^O)a")
  },
  "F" : {
    36 : .00523,
    64 : .01045,
    73 : .09405,
    75 : .33963,
    76 : .28215,
    "_" : _0x5398("2", "gt&0"),
    "10.0-10.1" : 0
  },
  "G" : {
    8 : 0,
    "3.2" : 0,
    "4.0-4.1" : 0,
    "4.2-4.3" : 0,
    "5.0-5.1" : 0,
    "6.0-6.1" : .00257,
    "7.0-7.1" : .018,
    "8.1-8.4" : .02057,
    "9.0-9.2" : .01028,
    "9.3" : .13882,
    "10.0-10.2" : .02314,
    "10.3" : .23137,
    "11.0-11.2" : .05399,
    "11.3-11.4" : .12082,
    "12.0-12.1" : .09769,
    "12.2-12.4" : .35733,
    "13.0-13.1" : .06427,
    "13.2" : .03342,
    "13.3" : .24165,
    "13.4-13.7" : .70695,
    "14.0-14.4" : 19.92573,
    "14.5-14.6" : 2.56816
  },
  "E" : {
    4 : 0,
    11 : .00523,
    12 : .01568,
    13 : .19855,
    14 : 5.08393,
    "_" : _0x5398("3", "2z0n"),
    "10.1" : .03658,
    "11.1" : .10973,
    "12.1" : .17243,
    "13.1" : .82555,
    "14.1" : 1.37418
  },
  "B" : {
    14 : .00523,
    15 : .00523,
    16 : .01045,
    17 : .0209,
    18 : .09405,
    84 : .01045,
    85 : .0209,
    86 : .0209,
    87 : .01568,
    88 : .0627,
    89 : .3135,
    90 : 5.0787,
    91 : .1881,
    "_" : "12 13 79 80 81 83"
  },
  "P" : {
    4 : .03199,
    "5.0-5.4" : .01012,
    "6.2-6.4" : .01012,
    "7.2-7.4" : .51623,
    "8.2" : .02024,
    "9.2" : .01066,
    "10.1" : .02133,
    "11.1-11.2" : .06398,
    "12.0" : .07465,
    "13.0" : .33058,
    "14.0" : 3.89231
  },
  "I" : {
    0 : 0,
    3 : 0,
    4 : 0,
    "2.1" : 0,
    "2.2" : 0,
    "2.3" : 0,
    "4.1" : .00344,
    "4.2-4.3" : .00689,
    "4.4" : 0,
    "4.4.3-4.4.4" : .04218
  },
  "K" : {
    "_" : _0x5398("4", "URT[")
  },
  "A" : {
    9 : .01077,
    11 : .51173,
    "_" : _0x5398("5", "E53h")
  },
  "J" : {
    7 : 0,
    10 : 0
  },
  "N" : {
    10 : .01297,
    11 : .01825
  },
  "S" : {
    "2.5" : 0
  },
  "R" : {
    "_" : "0"
  },
  "M" : {
    0 : .36282
  },
  "Q" : {
    "10.4" : 0
  },
  "O" : {
    0 : .03342
  },
  "H" : {
    0 : .14011
  },
  "L" : {
    0 : 18.84669
  }
};

