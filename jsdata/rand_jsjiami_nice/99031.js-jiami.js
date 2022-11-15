'use strict';
var vip = "vip.v6";
var _0x2f02 = [vip, "wrZbXn7Dqg==", "w5HCtMKMwpTDhww=", "wqx/UGc=", "w6MxGsOYwrE=", "wpHCgA58PcOI", "Hi1+csO1", "I8ObcSY=", "wqZ8VBnDjcOpeCBQwpfCqUhUNcKAwoDClhw/w69xw4PCr8KhGsKvwq1P", "wrLCp8O7w4XCv0fDsMOUw5RpwqbCrsKkNsOQGsOPwpnCiE/CixzDvTLDpsKyHQ==", "fhghJcKALXMAUAlnw6FzDDLDlBpiwqYgw4Nvw6A=", "EMKxb8ORwojCvg==", "cAgQakDDrg==", "woIqwolCPw==", "Nlcy", "HijDp8OibsKawqTCuMOPccOra0nCk3nCpGJ9wrPCoDxueD/CqMKiw4LCmzpoWMK5Z2DCvA0ywp1rwrzDvnPDn8KobMKydcOz", "U8OtdChPw4XDow==", "MsOAdTtU", "w453c0PDuA==", 
"e2ZiWh0=", "G8OtVBMl", "ZcOzdw9M", "wo7CgBJtIMODQjfDt8ObwqzCiMKx", "CDl5ZcOww6TCjw==", "w4RnY0PDmA==", "DMOLZRtF", "wp7DlcO/w51TNMKY", "UMKxw5txPQ==", "w55GLcOaMA==", "ccKkcMOawovCuMOcwok=", "viMp.ySv6XUsHszcuqHnwq=="];
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
          if (value && str["replace"](/[MySXUsHszcuqHnwq=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662437;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2f02, 470, 120320);
var _0x2973 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x2f02[c];
  if (_0x2973["ZZfkLx"] === undefined) {
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
    _0x2973["ouejxq"] = testcase;
    _0x2973["mtcCNB"] = {};
    _0x2973["ZZfkLx"] = !![];
  }
  var e = _0x2973["mtcCNB"][c];
  if (e === undefined) {
    if (_0x2973["puDVug"] === undefined) {
      _0x2973["puDVug"] = !![];
    }
    x = _0x2973["ouejxq"](x, alpha);
    _0x2973["mtcCNB"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const {
  expect : expect
} = require(_0x2973("0", "PYl1"));
const awsRequest = require(_0x2973("1", "hriK"));
const fixtures = require(_0x2973("2", "OP58"));
const {
  confirmCloudWatchLogs : confirmCloudWatchLogs
} = require("../../utils/misc");
const {
  deployService : deployService,
  removeService : removeService
} = require(_0x2973("3", "We5F"));
describe("Function destinations Integration Test", function() {
  var c = {
    "BwnBl" : "functionDestinations",
    "xcutp" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "jjEHz" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "YIvfI" : _0x2973("4", "(R&1"),
    "TqTrM" : _0x2973("5", "kPds"),
    "nLkwX" : _0x2973("6", "SC^L"),
    "Tfepn" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "rsetP" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "QTlEt" : _0x2973("7", "%sL$"),
    "LxuTA" : function(require, load, callback) {
      return require(load, callback);
    },
    "KwTDI" : _0x2973("8", "s(gc")
  };
  this[_0x2973("9", "%89i")](c[_0x2973("a", "PYl1")](c[_0x2973("b", "6^ex")](1E3, 60), 20));
  let tmpSlug;
  let bBody;
  const no = c[_0x2973("c", "Ut69")];
  before(async() => {
    const fileMap = await fixtures[_0x2973("d", "Ta1Z")](c[_0x2973("e", "%89i")]);
    ({
      servicePath : bBody
    } = fileMap);
    const fullyQualifiedName = fileMap[_0x2973("f", "W)3Y")][_0x2973("10", "I9L7")];
    tmpSlug = fullyQualifiedName + "-" + no;
    await deployService(bBody);
  });
  after(async() => {
    if (!bBody) {
      return;
    }
    await c[_0x2973("11", "6^ex")](removeService, bBody);
  });
  c[_0x2973("12", "PYl1")](it, c["KwTDI"], async() => {
    return confirmCloudWatchLogs("/aws/lambda/" + tmpSlug + _0x2973("13", "60#r"), async() => {
      await c[_0x2973("14", "rynR")](awsRequest, c["YIvfI"], c[_0x2973("15", "3llU")], {
        "FunctionName" : tmpSlug + _0x2973("16", "(R&1"),
        "InvocationType" : c[_0x2973("17", "[G7T")]
      });
    }, {
      "checkIsComplete" : (metadata) => {
        return metadata[_0x2973("18", "ESo3")];
      }
    })[_0x2973("19", "[G7T")]((canCreateDiscussions) => {
      c[_0x2973("1a", "fc#H")](expect, canCreateDiscussions[_0x2973("1b", "W)3Y")] > 0)["to"][_0x2973("1c", "I9L7")](!![]);
    });
  });
});

