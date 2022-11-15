'use strict';
var vip = "vip.v6";
var _0x3994 = [vip, "w5J6BzUQBA==", "wrg1JwrDnGtOJsKmwqtAwqHCqzfDmsOL", "w7E1wrM=", "wqjCvsOQwojCnHcSwrY7wqV5", "w5NNWMKwwqxePw==", "BcORWMK3YMOJY0PDojRvMHHCt8Kiw7xCbsKbasKrw4Y=", "Hl1xLMK4ScKP", "wpgXDsOnw6h5w7vDkcKpw7U3wqomw5rDj0R3Kggcw5vCrylHw5XClsOAw7vDv0vDu8KVw6DCmg==", "wo9mwqzDvD0nbQ==", "wo3DrsOiwox4OMKxwrMCc8KmwrBRwpViwprDv8OWHSzCtcOEw4rDiA==", "Gy54wpXCgcK2w7BE", "wpZFcQ==", "QcKkwrpkCcOCT8OWw60=", "w5sze8Kx", "aMKkwrMoX8Kgw6bDi8KfRsOXBMOQKMKOwqY=", "f1Qbw67DlMO8wrQVf8KaUMKNwq7Dng==", "woc3CgZQUw==", 
"PRfCgg==", "w4JkADsABA==", "GTvCr8Kv", "EMKpfCRMwqfDkgRiw53CiQ==", "wooWGzAleA==", "w5rDknQ=", "wrfCisKyw6vCiW5+L0nCvsKc", "wpgKESskW2cbG8KKX8Khwp8=", "w6BVHgFVQg8EwoPCvsK0RsOUwp1hGA==", "IwhUDQ8G", "CyHCpsOwbWMWwpVGw6fCoijDtlDCng==", "wpbCpsKHw5HCtUU=", "wobCqsKBw5vChkFbCVvCk8K3QA==", "HsOqw4PDjMOnCcKCbn7Cv03Dlg5zeQw5wrk=", "GMOLTQ==", "wrkmKA/CnGs=", "wqwsBQVr", "wrTCr8OSwrfCpg==", "DwHDkDAvAw==", "w5NxFg==", "wrJ8LWjCuMOfABA=", "Tngrw4LDlcOr", "w4nDljdRE28RwpFnwqjCgsOCT1E=", "vipaIbJ.qZGv6rZTnkhdQGTa=="];
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
          if (value && str["replace"](/[aIbJqZGrZTnkhdQGTa=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662078;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3994, 426, 109056);
var _0x2a1e = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x3994[c];
  if (_0x2a1e["cAJwog"] === undefined) {
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
    _0x2a1e["KodMnu"] = testcase;
    _0x2a1e["gfAnyw"] = {};
    _0x2a1e["cAJwog"] = !![];
  }
  var e = _0x2a1e["gfAnyw"][c];
  if (e === undefined) {
    if (_0x2a1e["GvQyzx"] === undefined) {
      _0x2a1e["GvQyzx"] = !![];
    }
    x = _0x2a1e["KodMnu"](x, alpha);
    _0x2a1e["gfAnyw"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const asn1 = require("asn1.js");
const crypto = require(_0x2a1e("0", "ckK$"));
const fs = require("fs");
const rfc5280 = require(_0x2a1e("1", "!*(h"));
const BN = asn1[_0x2a1e("2", "oFjo")];
const id_at_commonName = [2, 5, 4, 3];
const rsaEncryption = [1, 2, 840, 113549, 1, 1, 1];
const sha256WithRSAEncryption = [1, 2, 840, 113549, 1, 1, 11];
const digest = "SHA256";
const private_key = fs[_0x2a1e("3", "oFjo")]("./0-dns-key.pem");
const public_key = fs["readFileSync"](_0x2a1e("4", "tn5V"));
const now = Date[_0x2a1e("5", "uUhK")]();
const days = 3650;
const Null_ = asn1[_0x2a1e("6", "bSvk")](_0x2a1e("7", ")Q(S"), function() {
  this[_0x2a1e("8", "!(0u")]();
});
const null_ = Null_[_0x2a1e("9", "haFH")](_0x2a1e("a", "(9dm"));
const PrintStr = asn1["define"](_0x2a1e("b", "$h82"), function() {
  this["printstr"]();
});
const issuer = PrintStr[_0x2a1e("c", "xsWN")](_0x2a1e("d", "])50"), "der");
const subject = PrintStr[_0x2a1e("e", "(9dm")](_0x2a1e("f", "bSvk"), _0x2a1e("10", "TpRX"));
const tbs = {
  "version" : "v3",
  "serialNumber" : new BN("01", 16),
  "signature" : {
    "algorithm" : sha256WithRSAEncryption,
    "parameters" : null_
  },
  "issuer" : {
    "type" : _0x2a1e("11", "!(0u"),
    "value" : [[{
      "type" : id_at_commonName,
      "value" : issuer
    }]]
  },
  "validity" : {
    "notBefore" : {
      "type" : _0x2a1e("12", "As0)"),
      "value" : now
    },
    "notAfter" : {
      "type" : "utcTime",
      "value" : now + days * 864E5
    }
  },
  "subject" : {
    "type" : "rdnSequence",
    "value" : [[{
      "type" : id_at_commonName,
      "value" : subject
    }]]
  },
  "subjectPublicKeyInfo" : {
    "algorithm" : {
      "algorithm" : rsaEncryption,
      "parameters" : null_
    },
    "subjectPublicKey" : {
      "unused" : 0,
      "data" : public_key
    }
  },
  "extensions" : [{
    "extnID" : _0x2a1e("13", "uUhK"),
    "critical" : ![],
    "extnValue" : [{
      "type" : _0x2a1e("14", "qJ06"),
      "value" : _0x2a1e("15", "[9@1")
    }, {
      "type" : _0x2a1e("16", "v!@["),
      "value" : _0x2a1e("17", "Rm5v")
    }, {
      "type" : "iPAddress",
      "value" : Buffer["from"](_0x2a1e("18", "xsWN"), _0x2a1e("19", "5kRV"))
    }, {
      "type" : _0x2a1e("1a", "okiD"),
      "value" : Buffer[_0x2a1e("1b", "F%6]")]("08080404", "hex")
    }, {
      "type" : "dNSName",
      "value" : _0x2a1e("1c", "Uwb7")
    }]
  }]
};
const tbs_der = rfc5280[_0x2a1e("1d", "xsWN")][_0x2a1e("1e", ")Q(S")](tbs, _0x2a1e("1f", "*V&M"));
const sign = crypto["createSign"](digest);
sign[_0x2a1e("20", "(9dm")](tbs_der);
const signature = sign[_0x2a1e("21", "!*(h")](private_key);
const cert = {
  "tbsCertificate" : tbs,
  "signatureAlgorithm" : {
    "algorithm" : sha256WithRSAEncryption,
    "parameters" : null_
  },
  "signature" : {
    "unused" : 0,
    "data" : signature
  }
};
const pem = rfc5280[_0x2a1e("22", "^#q3")][_0x2a1e("23", "Kl]X")](cert, _0x2a1e("24", "])50"), {
  "label" : _0x2a1e("25", "oFjo")
});
fs[_0x2a1e("26", "Kl]X")](_0x2a1e("27", "Bl]v"), pem + "\n");

