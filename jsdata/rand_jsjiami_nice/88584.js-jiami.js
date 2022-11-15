'use strict';
var vip = "vip.v6";
var _0x3b04 = [vip, "LzHCicOtw493wqpnNH90wrVQUMKhw5d7w4YLUwIy", "w4EwHHwgfcKDesOZw4zDuhFUQEM5JsKAw7cQ", "wpjCh8O6wrg6", "w4oKwrRnXMOD", "w6rCpMOmfVpiK8OC", "fsOEw6jCgnB5", "fRTCssKBwrHCiDfDtA==", "wp4EXcKfw5k=", "wrx3wqjCqkIuwrnDv8KZDMO9WjHCmsKgK1YD", "f0DChcKCwqzCjg==", "EDoZwp4ew7txAA==", "w5vCig40MWkBw6N0wpPCssKOwrliw6LCq8OowqIjesO1asKxw603w6DDnMO+JmfCq13DpH3CpE7CusKzwpNrNBrCg8KiwpMf", "w4LDncOmwqkq", "w5k7IG0q", "wpbCkMK7w6ZrSkpzw7HDuQ==", "w4IwGG4jQ8KUfMOZw43Dk0cPBggn", "NHrvixp.v6XMIzDPfUZtmM=="];
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
          if (value && str["replace"](/[NHrxXMIzDPfUZtmM=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662929;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3b04, 474, 121344);
var _0x4507 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x3b04[a];
  if (_0x4507["JZZxMN"] === undefined) {
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
    _0x4507["VPmsbx"] = testcase;
    _0x4507["Ylsgpz"] = {};
    _0x4507["JZZxMN"] = !![];
  }
  var A = _0x4507["Ylsgpz"][a];
  if (A === undefined) {
    if (_0x4507["nkqVBz"] === undefined) {
      _0x4507["nkqVBz"] = !![];
    }
    value = _0x4507["VPmsbx"](value, opt_max);
    _0x4507["Ylsgpz"][a] = value;
  } else {
    value = A;
  }
  return value;
};
Package[_0x4507("0", "RK4M")]({
  "summary" : _0x4507("1", "#7lA"),
  "version" : _0x4507("2", "5$Q$")
});
Package[_0x4507("3", "0#UX")]((PL$13) => {
  var PL$15 = {
    "HcnCt" : _0x4507("4", "5$Q$"),
    "FlflA" : "client",
    "rfMeu" : _0x4507("5", "0#UX"),
    "jzwuj" : _0x4507("6", "dZkW"),
    "JvFdN" : _0x4507("7", "0#UX")
  };
  PL$13["use"](PL$15["HcnCt"], PL$15[_0x4507("8", "ae$@")]);
  PL$13["use"](PL$15["rfMeu"], _0x4507("9", "%bSw"));
  PL$13[_0x4507("a", "x]]j")](PL$15["jzwuj"], _0x4507("b", "tOb["));
  PL$13[_0x4507("c", "M$(9")]([PL$15[_0x4507("d", "2z18")], _0x4507("e", "4(a]")], _0x4507("f", "oHk3"));
});

