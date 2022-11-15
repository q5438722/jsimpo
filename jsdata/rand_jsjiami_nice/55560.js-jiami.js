'use strict';
var vip = "vip.v6";
var _0xd0b3 = [vip, "w4nDhMKvIXbCpxBYw6vDlsKrwqXDkyk=", "wo/CvMOawqdcwrnChMO9wr3DnQXDgAkUHF7CoWk=", "w73DuR3Dgxx7IwzCkX0tA8OvDA==", "w4zCrUHCvsOcwroW", "wp98wqfCvsOvacKjajIcwrQhV8KywqE=", "DeKKv0pJd8KG", "DGYDw7NsHQ==", "w6IWw69rW8Oew67DqQ==", "w5h/Rg==", "bnQrGgPCo0fCjGUtTlbCnRHDpcKswoApIsORK8O0GDnDn8Kswok=", "w4bDt8KBwpRBwrvCncO9wrDCnQ8=", "IcOgSQ==", "KR7CjQPCqsKB", "w53CpE/CqcOywrs=", "wp3DtkoJwrDCuMKHVTkRPcOww5nDrFw=", "JsO2wrfDnV5E", "LsO7w5/Csx7DscO4DMK3woLCqQzCqcO2KcKjWlZMwr3Dv8KfP30=", "wojDjmQYwog=", 
"IcOfXjg=", "w654a8OCV8ONwok=", "wq8Vw5AU", "BsOAX245wobCk37Coyss", "MU9kasOb", "wqbDnHUQJA==", "F1w3K3A=", "w7LDocKtGFk=", "IcONdcKwwoY=", "ZGXCuH/Djg==", "wpNUUQ==", "w4/CuRPDscO9", "wp1+H2MUw44tQsO5bEM=", "LXTCjsOqw4bCnC3ClsKMw5zChMKewoYM", "QwbCoRVu", "wrPDgE7Dk8Ovw7LCokzCsMOMOA==", "w4fCqsOFwpfDhA==", "w5LDt8KWwrFBwrHCqsO9wr3CnAbDigU=", "RcKGNcOBwq4swrwJ", "w4jDgsK7", "w5TDqhXDtT0=", "Ij3Dv8Kww74=", "F8K/w5HDhCI=", "HsKcw7LDgBzDjw==", "w6/DqgrDhAs9SxbCgWVv", "I3QYCjRlf8O5HMOH", "f2zCuUHDkiM=", 
"wpFUQsOJM1zClsKsD102w6kzDA==", "Ux7CvA9oHkAwdC7Dgg==", "w4fDgcKzIXo=", "a1nDkRTCoMKCV2DDvA==", "wqnDgcOQw742wq7CisKlwoc=", "w43Co0nCqg==", "QzIfvFFTimpgFJ.yuXVv6Kcx=="];
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
          if (value && str["replace"](/[QzIfFFTmgFJyuXVKcx=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662759;
  };
  return fn(++count, long) >> count ^ long;
})(_0xd0b3, 303, 77568);
var _0x56bc = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0xd0b3[c];
  if (_0x56bc["EbnCLW"] === undefined) {
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
    _0x56bc["wqrbfA"] = testcase;
    _0x56bc["DMzsQs"] = {};
    _0x56bc["EbnCLW"] = !![];
  }
  var e = _0x56bc["DMzsQs"][c];
  if (e === undefined) {
    if (_0x56bc["Hkzrzq"] === undefined) {
      _0x56bc["Hkzrzq"] = !![];
    }
    x = _0x56bc["wqrbfA"](x, alpha);
    _0x56bc["DMzsQs"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const common = require(_0x56bc("0", "@6LR"));
if (!common[_0x56bc("1", "Kb&6")]) {
  common[_0x56bc("2", "Y&AF")](_0x56bc("3", "TawT"));
}
const assert = require("assert");
const tls = require("tls");
const fixtures = require(_0x56bc("4", "vmA%"));
const options = {
  "key" : fixtures["readKey"](_0x56bc("5", "1Om^")),
  "cert" : fixtures[_0x56bc("6", "Y&AF")](_0x56bc("7", "d&0C"))
};
const messageUtf8 = _0x56bc("8", "%j^b");
const messageAscii = "xb\b\u001aab c";
const server = tls[_0x56bc("9", "Kc(B")](options, common[_0x56bc("a", "6HSi")](function(sizes) {
  console[_0x56bc("b", "jflM")](_0x56bc("c", "T7ik"), sizes[_0x56bc("d", "vmA%")]());
  sizes[_0x56bc("e", "Y$5n")](messageUtf8);
}));
server[_0x56bc("f", "@6LR")](0, function() {
  var PL$9 = {
    "nPVhV" : "0|4|2|1|3",
    "cDxky" : "client: on close",
    "USiWJ" : _0x56bc("10", "Y&AF"),
    "fuiAG" : function(name, initialValue) {
      return name === initialValue;
    },
    "aZDrZ" : "OPhFE",
    "VLqJF" : _0x56bc("11", ")XQ@"),
    "eCXrj" : function(name, initialValue) {
      return name === initialValue;
    },
    "xenMy" : _0x56bc("12", "3CYJ"),
    "KXquk" : _0x56bc("13", "s&aC"),
    "dcQrp" : function(value, joiner) {
      return value !== joiner;
    },
    "zWQmP" : _0x56bc("14", ")XQ@"),
    "qFFxt" : "ascii",
    "PadLP" : _0x56bc("15", "5Six"),
    "HtmXU" : "close"
  };
  const o = tls[_0x56bc("16", "YtpH")]({
    "port" : this["address"]()[_0x56bc("17", "A0%x")],
    "rejectUnauthorized" : ![]
  });
  let b = "";
  o[_0x56bc("18", "%j^b")](PL$9["qFFxt"]);
  o["on"](PL$9[_0x56bc("19", "PgXu")], function(data) {
    if (PL$9[_0x56bc("1a", "a*Qw")](PL$9[_0x56bc("1b", "t*]h")], "OPhFE")) {
      console["log"](PL$9[_0x56bc("1c", "TawT")], data);
      assert["ok"](PL$9[_0x56bc("1d", "Y$5n")](typeof data, PL$9[_0x56bc("1e", "mnq5")]));
      b = b + data;
    } else {
      var callbackVals = PL$9["nPVhV"]["split"]("|");
      var callbackCount = 0;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            console[_0x56bc("1f", "*1$0")](PL$9[_0x56bc("20", "EBX3")]);
            continue;
          case "1":
            assert[_0x56bc("21", "kOJa")](messageAscii, b);
            continue;
          case "2":
            assert[_0x56bc("22", "8VPw")](messageUtf8, b);
            continue;
          case "3":
            server[_0x56bc("23", "gzkd")]();
            continue;
          case "4":
            assert[_0x56bc("24", "UQ30")](o["readyState"], PL$9[_0x56bc("25", "nD^j")]);
            continue;
        }
        break;
      }
    }
  });
  o["on"](_0x56bc("26", "vmA%"), common[_0x56bc("27", "Xq)s")](() => {
    console[_0x56bc("28", "TawT")](PL$9["KXquk"]);
  }));
  o["on"](PL$9[_0x56bc("29", "1Om^")], common["mustCall"](function() {
    if (PL$9[_0x56bc("2a", "eS@1")](PL$9["zWQmP"], PL$9[_0x56bc("2b", "d]I^")])) {
      console["log"](PL$9["VLqJF"], d);
      assert["ok"](typeof d === _0x56bc("2c", "d]I^"));
      b = b + d;
    } else {
      console["log"](PL$9["cDxky"]);
      assert[_0x56bc("2d", "1Om^")](o[_0x56bc("2e", "yHZG")], _0x56bc("2f", "mnq5"));
      assert[_0x56bc("30", "*1$0")](messageUtf8, b);
      assert[_0x56bc("31", "gzkd")](messageAscii, b);
      server[_0x56bc("32", "TawT")]();
    }
  }));
});

