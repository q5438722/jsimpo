'use strict';
var vip = "vip.v6";
var _0x2ee2 = [vip, "wpQVwrDCmMOcPybDk8O7wqPDsw==", "w5fDp8ODBCo=", "ZHXCmTRt", "e2rCuSc=", "E3kzwptF", "w4BAci11ZXc3woDDqFjDoS8Nwp9LXn4=", "w4ZOw77CjcONNg==", "NhLCl8OGwrY=", "e1XCqzN3", "w77CjcOdKjzDig==", "H8KRDcKuw7YQ", "w5RfQg==", "wrfCrCp4PQ==", "w5PCvWtGw6E=", "woZ1w67DksOrw5XDrcKaAcO0XQ==", "wqIFR8OFw6E=", "Y8Krw5DCqTg=", "w6jCn3FD", "KgjDvMKTIQ==", "OzvDqcKj", "AcKRAsKt", "w73Cm3dKw7o=", "wpzCu8KeCDdLQz/DlcOcDGA=", "LgBAIg7Cmw==", "woXDjMKyV8OJ", "wpIFL2kxbTt6", "YyvDpyPCvMK0RCfCgyoSdw==", 
"wo0NBsKXNMOmw5vDlcOxNX/Dj8OPMks=", "B2fDsjTDrw==", "vipZb.eUvK6SKHkObVwSZM=="];
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
          if (value && str["replace"](/[ZbeUKSKHkObVwSZM=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662415;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2ee2, 138, 35328);
var _0x3586 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x2ee2[c];
  if (_0x3586["esJfWp"] === undefined) {
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
    _0x3586["HgnXep"] = testcase;
    _0x3586["EofeXy"] = {};
    _0x3586["esJfWp"] = !![];
  }
  var e = _0x3586["EofeXy"][c];
  if (e === undefined) {
    if (_0x3586["EwgcRb"] === undefined) {
      _0x3586["EwgcRb"] = !![];
    }
    x = _0x3586["HgnXep"](x, alpha);
    _0x3586["EofeXy"][c] = x;
  } else {
    x = e;
  }
  return x;
};
var common = require(_0x3586("0", "YNwO"));
var assert = require(_0x3586("1", "^tQ)"));
var READSIZE = 100;
var PUSHSIZE = 20;
var PUSHCOUNT = 1E3;
var HWM = 50;
var Readable = require("../../readable")["Readable"];
var r = new Readable({
  "highWaterMark" : HWM
});
var rs = r["_readableState"];
r[_0x3586("2", "&TVI")] = push;
r["on"](_0x3586("3", "jih0"), function() {
  var fileMap = {
    "mzAwb" : _0x3586("4", "M7*%"),
    "rZspx" : _0x3586("5", "#e(I")
  };
  console[_0x3586("6", "$n@Y")](_0x3586("7", "camH"));
  do {
    console[_0x3586("8", "YNwO")](fileMap[_0x3586("9", "F0#L")], READSIZE);
    var PL$23 = r[_0x3586("a", "F0#L")](READSIZE);
    console[_0x3586("b", "66#$")](_0x3586("c", "jih0"), PL$23 && PL$23["length"], rs[_0x3586("d", "camH")]);
  } while (PL$23 && PL$23["length"] === READSIZE);
  console[_0x3586("e", "MWFw")](fileMap[_0x3586("f", "F0#L")], PL$23 && PL$23[_0x3586("10", "%jYB")], rs["needReadable"], rs[_0x3586("11", "*!zd")]);
});
var endEmitted = ![];
r["on"]("end", function() {
  var trace = {
    "KWimw" : _0x3586("12", "#e(I")
  };
  endEmitted = !![];
  console[_0x3586("13", "lL#w")](trace[_0x3586("14", "L98r")]);
});
var pushes = 0;
function push() {
  var PL$74 = {
    "COvBu" : function(name, initialValue) {
      return name === initialValue;
    },
    "GHjJB" : _0x3586("15", "dKvg")
  };
  if (pushes > PUSHCOUNT) {
    return;
  }
  if (PL$74[_0x3586("16", "O]tp")](pushes++, PUSHCOUNT)) {
    console[_0x3586("17", "P9ck")]("   push(EOF)");
    return r[_0x3586("18", "L98r")](null);
  }
  console["error"](PL$74[_0x3586("19", "buT6")], pushes);
  if (r[_0x3586("1a", "$C^(")](new Buffer(PUSHSIZE))) {
    setTimeout(push);
  }
}
var ret = r[_0x3586("1b", "*!zd")](0);
process["on"]("exit", function() {
  assert[_0x3586("1c", "L98r")](pushes, PUSHCOUNT + 1);
  assert(endEmitted);
});

