'use strict';
var vip = "vip.v6";
var _0x2e63 = [vip, "fkLDjnrDpcKgecK4wpo0w7Znw5oV", "cljDjmzDvsK6", "ecOsw5E=", "JF9CR8OZFMKJLhZJwpIx", "w67DpD/DuMKdLU84wqwGfg7DkMOD", "GBXClG0dw40=", "w4NdwoTDjsK6ZVvDgg==", "wpvDisKyaDzCkUZRw7PCh8OeHQ==", "EG7DmUU=", "GDYHw64STA==", "VsKywqbDjxvCuCoy", "wqtgw7HCosOdPQ==", "w6DDg8KRw6V8bSXCgA==", "w4fCjsK7woJFTg==", "LsKDVz8rwqYoQkDDonbCmQ==", "wq3Dt8O/w6fDgkHCqsKvwpgVwrpXw4zDhhPCgcOV", "aMKmZwTCt8KEwrk6wqPDrhLCn3RyacKjwpTCmWTDtQ==", "w5PDucKEWnhzHQbCuQ==", "wrASw6rDr8O7w5A+fxDCgsOjwp7CvBhNwpTDl0gsw4fDr8KOHD/CpA/CicO8REjCsEXCiyPDqsKYdXXCsmDCkXM=", 
"ASDCtMKMw4PChsKfwpg=", "dsKFBMOyXw==", "bm/CsDnCtcKvwr47w7k=", "NEZOVg==", "Gvtip.xlv6HyutNHamgfPmj=="];
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
          if (value && str["replace"](/[GtxlHyutNHamgfPmj=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662766;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2e63, 366, 93696);
var _0x571c = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x2e63[c];
  if (_0x571c["oMURaw"] === undefined) {
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
    _0x571c["OaGGLb"] = testcase;
    _0x571c["rOvPCO"] = {};
    _0x571c["oMURaw"] = !![];
  }
  var e = _0x571c["rOvPCO"][c];
  if (e === undefined) {
    if (_0x571c["fweahs"] === undefined) {
      _0x571c["fweahs"] = !![];
    }
    x = _0x571c["OaGGLb"](x, alpha);
    _0x571c["rOvPCO"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const common = require(_0x571c("0", "4P6("));
if (!common["hasCrypto"]) {
  common[_0x571c("1", "gQ8w")](_0x571c("2", "Cz3u"));
}
const assert = require(_0x571c("3", "Cz3u"));
const tls = require(_0x571c("4", "Fcd1"));
tls[_0x571c("5", "gQ8w")]({
  "ciphers" : _0x571c("6", "Y)*k")
})[_0x571c("7", "LV&2")](0, common[_0x571c("8", "S(Qc")](close));
tls[_0x571c("9", "ZJ9@")](assert[_0x571c("a", "oYt2")])[_0x571c("b", "RTDK")](0, common[_0x571c("c", "^Dx7")](close));
tls["createServer"]({})[_0x571c("d", "I0^$")](0, common[_0x571c("e", "5zh2")](close));
assert[_0x571c("f", "h9PR")](() => {
  return tls[_0x571c("10", "zFWl")](_0x571c("11", "VxnK"));
}, {
  "code" : _0x571c("12", "L((v"),
  "name" : _0x571c("13", "g43U"),
  "message" : 'The "options" argument must be of type object. ' + _0x571c("14", "OQ9%")
});
tls["createServer"]()["listen"](0, common[_0x571c("15", "v9ML")](close));
function close() {
  this[_0x571c("16", "ein!")]();
}
;
