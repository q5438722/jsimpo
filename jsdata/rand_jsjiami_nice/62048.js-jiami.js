'use strict';
var vip = "vip.v6";
var _0x587e = [vip, "w7PCl8O9w68I", "wqYrdlvCvQ==", "w7JnwqjDrsOGw4VsQUo=", "E8K4L8KTe8OILlPCnA==", "viupnaZ.veX6hWUamZBnPjw=="];
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
          if (value && str["replace"](/[unaZeXhWUamZBnPjw=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662799;
  };
  return fn(++count, long) >> count ^ long;
})(_0x587e, 332, 84992);
var _0x3e1c = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x587e[a];
  if (_0x3e1c["mzoHiE"] === undefined) {
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
    _0x3e1c["IisPOA"] = testcase;
    _0x3e1c["UCigbl"] = {};
    _0x3e1c["mzoHiE"] = !![];
  }
  var A = _0x3e1c["UCigbl"][a];
  if (A === undefined) {
    if (_0x3e1c["QWAXqS"] === undefined) {
      _0x3e1c["QWAXqS"] = !![];
    }
    value = _0x3e1c["IisPOA"](value, opt_max);
    _0x3e1c["UCigbl"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var msg = '{"result":{"profile":{"head":{"functionName":"(root)","url":"","lineNumber":0,"totalTime":495.7243772462511,"selfTime":0,"numberOfCalls":0,"visible":true,"callUID":2771605942,"children":[{"functionName":"(program)","url":"","lineNumber":0,"totalTime":495.7243772462511,"selfTime":495.7243772462511,"numberOfCalls":0,"visible":true,"callUID":1902715303,"children":[]}]},"bottomUpHead":{"functionName":"(root)","url":"","lineNumber":0,"totalTime":495.7243772462511,"selfTime":0,"numberOfCalls":0,"visible":true,"callUID":2771605942,"children":[{"functionName":"(program)","url":"","lineNumber":0,"totalTime":495.7243772462511,"selfTime":495.7243772462511,"numberOfCalls":0,"visible":true,"callUID":1902715303,"children":[]}]}}},"id":41}';
var obj = JSON[_0x3e1c("0", "DdMz")](msg);
var obj2 = JSON[_0x3e1c("1", "viH(")](msg);
assertEquals(JSON["stringify"](obj), JSON[_0x3e1c("2", "q9*p")](obj2));
assertEquals(JSON["stringify"](obj, null, 0), JSON[_0x3e1c("3", "lWs6")](obj2));

