'use strict';
var vip = "vip.v6";
var _0x62a1 = [vip, "KBLDnMKIwpY=", "w5DDgBhswqs=", "wqPCsXPDlQ==", "IypxHQTCoWYEw5M=", "wpTCncKAOXk=", "wonCi3XDs2o=", "w7HCuMKBw7rCrw==", "wqsFP2LDsA==", "w67DncOdw7wq", "wojDmFLChcON", "wqDCsVnDqsOX", "w4lbwo3DicKww4kEcsOCw7MmwpjCmEXCrl/ClMKTNhUOwpQ1wrQdCy8xRBjCi8ORXUlnw6ENHAhAw5TDq8OFQcO8OcKv", "UVp7XGxFYMKmPMKCwq5bwr9vecOEMgfCtcOaw4A=", "RcKIw4duZg==", "wocVOEbDkQ==", "wqUCBGPDqA==", "wobDgXXCqMOH", "HCbDpsKFwpU=", "MSviplq.nvjAk6XMgIDBYj=="];
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
          if (value && str["replace"](/[MSlqnjAkXMgIDBYj=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662776;
  };
  return fn(++count, long) >> count ^ long;
})(_0x62a1, 407, 104192);
var _0x9c6b = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x62a1[a];
  if (_0x9c6b["LidQRt"] === undefined) {
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
    _0x9c6b["NNqVpp"] = testcase;
    _0x9c6b["ZSkToL"] = {};
    _0x9c6b["LidQRt"] = !![];
  }
  var A = _0x9c6b["ZSkToL"][a];
  if (A === undefined) {
    if (_0x9c6b["PThZtC"] === undefined) {
      _0x9c6b["PThZtC"] = !![];
    }
    value = _0x9c6b["NNqVpp"](value, opt_max);
    _0x9c6b["ZSkToL"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
description(_0x9c6b("0", "t9)W"));
var thisValue;
var result;
var value = {
  "then" : function(data, fn) {
    var request = {
      "DukHN" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "AyWww" : _0x9c6b("1", "wWTc"),
      "zigJY" : function(require, load, callback) {
        return require(load, callback);
      },
      "fbWmw" : "thisValue",
      "pAQEM" : _0x9c6b("2", "ZMdw")
    };
    request[_0x9c6b("3", "f$oT")](testPassed, request["AyWww"]);
    thisValue = this;
    request["zigJY"](shouldBe, request[_0x9c6b("4", "f$oT")], _0x9c6b("5", "!Ary"));
    request[_0x9c6b("6", "[1WH")](fn, request[_0x9c6b("7", "[1WH")]);
  }
};
(new Promise(function(fqn) {
  var funcHandlers = {
    "AJuAI" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  funcHandlers[_0x9c6b("8", "ZJeg")](fqn, value);
}))[_0x9c6b("9", "P%kP")](function() {
  var data = {
    "bcDDC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "nQmwO" : _0x9c6b("a", "r2vR"),
    "XgvaF" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  data[_0x9c6b("b", "sUNt")](testFailed, data[_0x9c6b("c", "r2W*")]);
  data[_0x9c6b("d", "s2Dx")](finishJSTest);
}, function(textCode) {
  var fileMap = {
    "RZKDC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "xxKXo" : "rejected",
    "tuhZs" : function(require, load, callback) {
      return require(load, callback);
    },
    "btwBI" : "result",
    "whOQk" : _0x9c6b("e", "f$oT")
  };
  fileMap[_0x9c6b("f", "kFeT")](testPassed, fileMap[_0x9c6b("10", "!Ary")]);
  result = textCode;
  fileMap["tuhZs"](shouldBeEqualToString, fileMap["btwBI"], fileMap[_0x9c6b("11", "P%kP")]);
  finishJSTest();
});
debug("The promise is not rejected now.");

