'use strict';
var vip = "vip.v6";
var _0x1297 = [vip, "C8KhOMO2", "H8OYw6QoTA==", "wojDiWjDrMKHw5g=", "wrjDssOxwpgCw4IBGA==", "w5vCr8KBw4PDicO5OnTCnV7DvA==", "w5rDmlAfLQ==", "wpYUw74bwos=", "wrhlRMO6w6E=", "w7LCoGfDp8KMwpXCgsOC", "NlA6FAM=", "CMOdWnbChA==", "MTAMw7jDtg==", "wrpHeMOYw6F7", "w7/DlMOYw6fCscOg", "T8OxwpU=", "DsO8FH1Tw7jDlg==", "wp3Ciw7DnQ==", "K8KBGcOW", "w6LDjlcAHsKm", "MHcwEzLDnSfDmQ==", "LsOpw6gbRcO7w4phw5DCkMOn", "w6fDv8OFwpwz", "Rxp5w4bDhA==", "w6rDm8Orw57Ckw==", "w6bDicOKw73CmcOyfyo=", "WcOrwoPCjxLCpMKEwoPDpcOJwoY=", 
"wo9MRMOtw50=", "wrNAbw==", "AG5aAW0jXMKPCA==", "wqR0wptiw67DmA==", "w77ChCzCgg==", "woHCncOZMcOgw60=", "MioEw6LDuAk=", "wpHDmGDCsw==", "woHCtsO9PcOn", "w6vDhV0=", "PsOgw7MtTg==", "wrzCik4M", "ZyRLw5zDng==", "w4DDuFk=", "w7bDmGvCpDo=", "w5QwHwjDpmJ4w5bDqsK4Bw==", "WMO6woDCkxTCo8K1", "HcO9AXpTw7jDkQ==", "rGqFvip.Mv6btZazZlGoTS=="];
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
          if (value && str["replace"](/[rGqFMbtZazZlGoTS=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662069;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1297, 424, 108544);
var _0x1a45 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x1297[c];
  if (_0x1a45["csnlFY"] === undefined) {
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
    _0x1a45["FNawkh"] = testcase;
    _0x1a45["oeLRST"] = {};
    _0x1a45["csnlFY"] = !![];
  }
  var e = _0x1a45["oeLRST"][c];
  if (e === undefined) {
    if (_0x1a45["rFvxQX"] === undefined) {
      _0x1a45["rFvxQX"] = !![];
    }
    x = _0x1a45["FNawkh"](x, alpha);
    _0x1a45["oeLRST"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const common = require(_0x1a45("0", "FYw^"));
const assert = require(_0x1a45("1", "xsIY"));
const http = require(_0x1a45("2", "clcL"));
const bufferSize = 5 * 1024 * 1024;
let measuredSize = 0;
const buffer = Buffer["allocUnsafe"](bufferSize);
for (let i = 0; i < buffer["length"]; i++) {
  buffer[i] = i % 256;
}
const server = http[_0x1a45("3", "AF16")](function(p, PL$16) {
  var c = {
    "BTxvg" : "POST",
    "PkDhH" : _0x1a45("4", "H#)n"),
    "vQkcS" : _0x1a45("5", "0duG"),
    "dSVnk" : function(name, initialValue) {
      return name === initialValue;
    },
    "ZkUDX" : _0x1a45("6", "AF16"),
    "miXju" : _0x1a45("7", "rXXo")
  };
  server[_0x1a45("8", "cffy")]();
  let bufidx = 0;
  p["on"](_0x1a45("9", "V7#E"), (sections) => {
    var info = {
      "laqOw" : c["PkDhH"],
      "TqixG" : c[_0x1a45("a", "[)iK")],
      "BGmKb" : "data",
      "nKOVe" : _0x1a45("b", "^bZ*")
    };
    measuredSize = measuredSize + sections["length"];
    for (let i = 0; i < sections["length"]; i++) {
      if (c["dSVnk"](_0x1a45("c", "^bZ*"), c["ZkUDX"])) {
        assert[_0x1a45("d", "Uvv@")](sections[i], buffer[bufidx]);
        bufidx++;
      } else {
        const deinterleaveChannel = http[_0x1a45("e", "e@eT")]({
          "port" : server[_0x1a45("f", "8#0w")]()[_0x1a45("10", "bZpn")],
          "method" : c[_0x1a45("11", "cffy")],
          "path" : "/",
          "headers" : {
            "content-length" : buffer[_0x1a45("12", "0duG")]
          }
        }, common[_0x1a45("13", "#tnj")]((p) => {
          var _0x288ca2 = {
            "kRysr" : info["laqOw"]
          };
          p[_0x1a45("14", "jM8G")](info[_0x1a45("15", "rXXo")]);
          let expected = "";
          p["on"](info[_0x1a45("16", "[8Z@")], (stdout) => {
            return expected = expected + stdout;
          });
          p["on"](info[_0x1a45("17", "ksPn")], common[_0x1a45("18", "[cNw")](() => {
            assert["strictEqual"](expected, _0x288ca2[_0x1a45("19", "n1U&")]);
          }));
        }));
        deinterleaveChannel[_0x1a45("7", "rXXo")](buffer);
      }
    }
  });
  p["on"](c[_0x1a45("1a", "(e[%")], common["mustCall"](() => {
    assert["strictEqual"](measuredSize, bufferSize);
    PL$16["writeHead"](200);
    PL$16[_0x1a45("1b", "H#)n")](c["PkDhH"]);
    PL$16["end"]();
  }));
});
server[_0x1a45("1c", "ksPn")](0, common["mustCall"](() => {
  var info = {
    "YbOAY" : _0x1a45("1d", "N$Ox"),
    "LCInt" : "utf8",
    "VoYyI" : "data",
    "agRWI" : _0x1a45("1e", "e@eT")
  };
  const deinterleaveChannel = http[_0x1a45("1f", "8#0w")]({
    "port" : server["address"]()[_0x1a45("20", "9LI4")],
    "method" : _0x1a45("21", "bZpn"),
    "path" : "/",
    "headers" : {
      "content-length" : buffer[_0x1a45("22", "rXXo")]
    }
  }, common[_0x1a45("23", "n1U&")]((p) => {
    p[_0x1a45("24", "cffy")](info[_0x1a45("25", "uMdI")]);
    let expected = "";
    p["on"](info[_0x1a45("26", "[)iK")], (stdout) => {
      return expected = expected + stdout;
    });
    p["on"](info[_0x1a45("27", "N$Ox")], common[_0x1a45("28", "N$Ox")](() => {
      assert[_0x1a45("29", "e@eT")](expected, info[_0x1a45("2a", "ksPn")]);
    }));
  }));
  deinterleaveChannel[_0x1a45("2b", "ksPn")](buffer);
}));

