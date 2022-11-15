'use strict';
var vip = "vip.v6";
var _0x2128 = [vip, "KsOWw43ClcKcw4xsw6XCmwRe", "MzonWMO4TcOgwoo5", "SCjDnMKOdsOUw402w6sj", "QkYF", "cxVgTmsoH2hB", "TE4tw5xpdn4YwqDDlQ==", "FSXDoA==", "CMKMZzBxwpIEHsOfwp7CnX8=", "LgfDhx9Ewr7CgwxkwqDCnsOzJg3Cn8Oow5wRwqxsfEg=", "KwvDicKc", "FMKBUsOCIyQn", "vipsqPO.v6wOQYdMcoYGttmD=="];
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
          if (value && str["replace"](/[sqPOwOQYdMcoYGttmD=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661738;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2128, 210, 53760);
var _0x36bd = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x2128[a];
  if (_0x36bd["wytCfh"] === undefined) {
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
    _0x36bd["mGQhtE"] = testcase;
    _0x36bd["XxcbgN"] = {};
    _0x36bd["wytCfh"] = !![];
  }
  var A = _0x36bd["XxcbgN"][a];
  if (A === undefined) {
    if (_0x36bd["lMgNlk"] === undefined) {
      _0x36bd["lMgNlk"] = !![];
    }
    value = _0x36bd["mGQhtE"](value, opt_max);
    _0x36bd["XxcbgN"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const io = require(_0x36bd("0", "sUYF"))();
io["on"](_0x36bd("1", "3fcC"), (PL$5) => {
  console[_0x36bd("2", "m8qR")](_0x36bd("3", "zp#c") + PL$5["id"]);
  PL$5["on"](_0x36bd("4", "2lhp"), () => {
    console[_0x36bd("5", "Jbge")](_0x36bd("6", "rM8s") + PL$5["id"]);
  });
});
io["listen"](3E3, {
  "cors" : {
    "origin" : [_0x36bd("7", "dLAa")]
  }
});
setInterval(() => {
  io[_0x36bd("8", "[3da")](_0x36bd("9", "6cj#"), (new Date)[_0x36bd("a", "oPbN")]());
}, 1E3);

