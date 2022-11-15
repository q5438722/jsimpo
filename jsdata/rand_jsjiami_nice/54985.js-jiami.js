'use strict';
var vip = "vip.v6";
var _0x4acc = [vip, "w5jCiloaQcKkwrM=", "wpHClMKbw6zDgC/CnG8=", "wr0lwrRzKcKoPk4=", "GwUVw7p9acOsJcKUNsOS", "worCt8OvIcOawr3CrcKBw4IJNA==", "woYbwopjMg==", "w6rCpcKhwpV8XsOCWcO3CS8=", "wpzCrcO5", "dyg2Gj/Ck8Kcwpc=", "w4nCg0QcQQ==", "w6jDv8K0RsO2", "RUjCg1sgw6spw5zCpA==", "wo/DqUjDtg==", "wo7CmMKbw6/Dhi/CiCoWw4chXMK4Dg==", "Y0oCJcKmw7U=", "XMKJLAdE", "LhTDnlc9", "wqzDoCjCkcKYw5ZqwpLCqmzCjcOhw4sONDjCigPDq0DDksKtw4fDjkXDkg==", "wqDDgQdSTVZ7wrMqwrttTMKLL2c=", "EUnDm8O8BBhew6bDpsKHCsOD", "wpnDsFPDqTw=", 
"w5t5HsOBw7kawrXCncKGwrXCiQ==", "w7nDtsKoRcO8bcK5", "bMK4KcKmGg==", "wpXCqsOuPMOcwqc=", "woR/N8Kx", "woNxLcK+wqDCu3Y=", "J2zDrMOTw6fDicKww6jDhS8sSxJvwoDDpMOP", "UcK5w55b", "vip.v6gFUPldgUMnlkVmDZK=="];
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
          if (value && str["replace"](/[gFUPldgUMnlkVmDZK=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662063;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4acc, 446, 114176);
var _0x10e2 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x4acc[c];
  if (_0x10e2["rJHmOX"] === undefined) {
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
    _0x10e2["GUjbpT"] = testcase;
    _0x10e2["FykAji"] = {};
    _0x10e2["rJHmOX"] = !![];
  }
  var e = _0x10e2["FykAji"][c];
  if (e === undefined) {
    if (_0x10e2["gywzvd"] === undefined) {
      _0x10e2["gywzvd"] = !![];
    }
    x = _0x10e2["GUjbpT"](x, alpha);
    _0x10e2["FykAji"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const common = require(_0x10e2("0", "y7I4"));
if (!common["hasCrypto"]) {
  common[_0x10e2("1", "M&wf")](_0x10e2("2", "rx5z"));
}
const assert = require(_0x10e2("3", "0NgR"));
const http2 = require(_0x10e2("4", "C&hz"));
const errCheck = common["expectsError"]({
  "name" : _0x10e2("5", "y7I4"),
  "code" : _0x10e2("6", "Zp5j"),
  "message" : _0x10e2("7", "46KR")
}, 1);
const {
  HTTP2_HEADER_PATH : HTTP2_HEADER_PATH,
  HTTP2_HEADER_METHOD : HTTP2_HEADER_METHOD,
  HTTP2_HEADER_STATUS : HTTP2_HEADER_STATUS,
  HTTP2_METHOD_HEAD : HTTP2_METHOD_HEAD
} = http2["constants"];
const server = http2[_0x10e2("8", "$A8U")]();
server["on"]("stream", (PL$28, headers) => {
  var PL$24 = {
    "iHOYB" : _0x10e2("9", "M&wf")
  };
  assert[_0x10e2("a", "k(*Y")](headers[HTTP2_HEADER_METHOD], HTTP2_METHOD_HEAD);
  PL$28[_0x10e2("b", "x$kq")]({
    [HTTP2_HEADER_STATUS]:200
  });
  PL$28["on"](PL$24["iHOYB"], errCheck);
  PL$28[_0x10e2("c", "5rRs")]("data");
});
server[_0x10e2("d", "aPk!")](0, () => {
  var info = {
    "VKMdX" : _0x10e2("e", "p$fZ")
  };
  const _0x5b964b = http2[_0x10e2("f", "p$fZ")](_0x10e2("10", "H&@c") + server["address"]()[_0x10e2("11", "q&%!")]);
  const p = _0x5b964b[_0x10e2("12", "mown")]({
    [HTTP2_HEADER_METHOD]:HTTP2_METHOD_HEAD,
    [HTTP2_HEADER_PATH]:"/"
  });
  p["on"](_0x10e2("13", "rx5z"), common[_0x10e2("14", "r$VP")]((headers, a) => {
    assert[_0x10e2("15", "E[%w")](headers[HTTP2_HEADER_STATUS], 200);
    assert[_0x10e2("16", "aPk!")](a, 5);
  }));
  p["on"](info[_0x10e2("17", "r$VP")], common[_0x10e2("18", "$WsI")]());
  p["on"](_0x10e2("19", "aPk!"), common[_0x10e2("1a", "2cOJ")](() => {
    server[_0x10e2("1b", "mown")]();
    _0x5b964b[_0x10e2("1c", "x$kq")]();
  }));
});

