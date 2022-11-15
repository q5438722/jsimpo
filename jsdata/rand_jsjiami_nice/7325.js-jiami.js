'use strict';
var vip = "vip.v6";
var _0xcda6 = [vip, "DknDtQ==", "w53CnsOCNm3DswjCpMKYw7xcPsOOOcKgw5JtZcKjOR/DpsKmwrTCusK/NAlJ", "DMOHf8Obcw==", "w5bChgBawrJE", "ecKtw79eKcK1a8KpwrwVw4o=", "PMKQOCA0w6HDk8OSaAtPRXfDh1rDvHDDmG3CtMKiwqLCtMKlVhHDrzYJJg7CsC5Sw7pBw5Njw47CvR/Cu8KFFSzDrXDCsg3DmcKNwoUyw4QGWsOSw6DChw5OwqnDsMOBO8Kfw5cGT8Ovw6rCg8KKSVpuwo7DpwhWw4kjw5A5NcKUAsKQV2YHw6jCicOPwrI1w5YqSnZ5KsOAGQ==", "w7fCqMKlZ8ObQw==", "EWdUIADCjMKg", "AMOYwo0uaQ==", "UjtBwr5yw7bDjsKZWnLCjQXCpcOLwoDDj2HDqsKOwoh5", "w77ChsOGZcOywosi", "FsOpwodrfMOTdcOkJMKjw5oaw4fCgw==", 
"wp3CnVjCpsKPw5tLc1xzUMKTwq/CrsKjwoh7TX3CkMKRQMOnEsKrOcOqLTw=", "DsOHw6F0wrp3B8KFw4EwwqRAaRTCpMKy", "Zvip.NPvJ6gUESzwPVqVrCNF=="];
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
          if (value && str["replace"](/[ZNPJgUESzwPVqVrCNF=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662856;
  };
  return fn(++count, long) >> count ^ long;
})(_0xcda6, 373, 95488);
var _0x3441 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0xcda6[a];
  if (_0x3441["VTUBCk"] === undefined) {
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
    _0x3441["tvzJwc"] = testcase;
    _0x3441["iCKMQP"] = {};
    _0x3441["VTUBCk"] = !![];
  }
  var A = _0x3441["iCKMQP"][a];
  if (A === undefined) {
    if (_0x3441["HFxtLI"] === undefined) {
      _0x3441["HFxtLI"] = !![];
    }
    value = _0x3441["tvzJwc"](value, opt_max);
    _0x3441["iCKMQP"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const inquirer = require("inquirer");
const {
  execa : execa,
  warn : warn,
  hasProjectGit : hasProjectGit
} = require(_0x3441("0", "&pQ@"));
module[_0x3441("1", "p7([")] = async function check(d) {
  var map = {
    "TtgFS" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "tvZRu" : _0x3441("2", "@Twi")
  };
  if (process["env"][_0x3441("3", "GtZj")] || process["env"][_0x3441("4", "Y7)f")]) {
    return !![];
  }
  process[_0x3441("5", "k9CI")][_0x3441("6", "BW40")] = !![];
  if (!map[_0x3441("7", "m#mM")](hasProjectGit, d)) {
    return !![];
  }
  const {
    stdout : stdout
  } = await execa("git", [_0x3441("8", "(y!n"), _0x3441("9", "qUQC")], {
    "cwd" : d
  });
  if (!stdout) {
    return !![];
  }
  warn(_0x3441("a", "F1^z"));
  const {
    ok : result
  } = await inquirer[_0x3441("b", "(*bO")]([{
    "name" : "ok",
    "type" : _0x3441("c", "f[Yu"),
    "message" : map[_0x3441("d", "C68@")],
    "default" : ![]
  }]);
  return result;
};

