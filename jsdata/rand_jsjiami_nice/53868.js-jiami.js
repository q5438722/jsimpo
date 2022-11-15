'use strict';
var vip = "vip.v6";
var _0x2126 = [vip, "w7RkKsKR", "wqHCpMKw", "dDLCgMKRwoTDhg==", "w7QYw5/CmxU=", "w4DDssOuwp5dfks=", "ZcKfwrrDiMOhw4LChg==", "w4zCiS1o", "w4vDhMOdw4DDlw==", "bxrCiA85", "w7nCiCV/Xw==", "SR/Crg4QasO2wrxkUUc=", "QMKNwr3Dt8OJ", "fMO0wrRaIA==", "csKSJMKow6BXwoPCkMO3w4LCpg==", "w4DCqkPCn0U=", "EMKZQcOhwrY=", "aGImWjU=", "P2TDncKHNQ==", "w6HCtE3CkVY=", "N3nCu1TChg==", "w4zDocO8wol5", "w5fCiRxkQw==", "EMOhOm/DqQ==", "JR1XUnjCuH8=", "w4XCvV13ag==", "w5Etc8KS", "w6vCnnxow77DgMOVwobCiMOqwrw=", "L8OZf8KOw6FZwoHCm8Ow", 
"ODfCs8Om", "MgxWT2nCo0PCrsO0w5pM", "w6oLwoRTP8Kx", "w6nDuxnCsMKjw4o=", "w6bCnWA=", "dMKFPA==", "w7FWw7XCr8Oc", "S00kWDg=", "w5zCmEJbw7E=", "CviePUEbpL.vryVxIW6ZRwcA=="];
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
          if (value && str["replace"](/[CePUEbLryVxIWZRwcA=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662752;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2126, 471, 120576);
var _0x4154 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x2126[c];
  if (_0x4154["ugIeiT"] === undefined) {
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
    _0x4154["TGtdri"] = testcase;
    _0x4154["VWwpVg"] = {};
    _0x4154["ugIeiT"] = !![];
  }
  var e = _0x4154["VWwpVg"][c];
  if (e === undefined) {
    if (_0x4154["BnoShQ"] === undefined) {
      _0x4154["BnoShQ"] = !![];
    }
    x = _0x4154["TGtdri"](x, alpha);
    _0x4154["VWwpVg"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
require(_0x4154("0", "%VCo"));
const assert = require("assert");
const http = require(_0x4154("1", "b&se"));
let serverSocket = null;
const server = http["createServer"](function(anActualRequest, anExpectedRequest) {
  if (serverSocket) {
    assert[_0x4154("2", "K^)W")](anActualRequest[_0x4154("3", "8UgB")], serverSocket);
  } else {
    serverSocket = anActualRequest[_0x4154("4", "AgpM")];
  }
  anExpectedRequest[_0x4154("5", "C[]5")](anActualRequest[_0x4154("6", "%VCo")]);
});
server["listen"](0, function() {
  var _0x47472f = {
    "CKxNC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  _0x47472f["CKxNC"](makeRequest, expectRequests);
});
const agent = http[_0x4154("7", "&UxE")]({
  "keepAlive" : !![]
});
let clientSocket = null;
const expectRequests = 10;
let actualRequests = 0;
function makeRequest(uri) {
  var info = {
    "UqThJ" : function(name, initialValue) {
      return name === initialValue;
    },
    "NBbjP" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "rWPMw" : function(require, load, callback) {
      return require(load, callback);
    },
    "DeFhX" : function(value, joiner) {
      return value !== joiner;
    },
    "GARcA" : _0x4154("8", "cJ^Y"),
    "DvcMM" : _0x4154("9", "PDv["),
    "LjuTs" : function(connectNumber, concurency) {
      return connectNumber - concurency;
    },
    "qraVg" : "utf8",
    "CYGCr" : _0x4154("a", "]@!@"),
    "hEipS" : _0x4154("b", "VwLn"),
    "chWmM" : function(name, initialValue) {
      return name === initialValue;
    },
    "wkfJs" : _0x4154("c", "w&*i")
  };
  if (info["chWmM"](uri, 0)) {
    server[_0x4154("d", "n]C3")]();
    agent[_0x4154("e", "(dMM")]();
    return;
  }
  const p = http["request"]({
    "port" : server[_0x4154("f", "aR*Z")]()[_0x4154("10", "WK7@")],
    "agent" : agent,
    "path" : "/" + uri
  });
  p["end"]();
  p["on"](info[_0x4154("11", "pD9%")], function(cltSocket) {
    if (clientSocket) {
      if (info[_0x4154("12", "z8o(")](_0x4154("13", "WK7@"), "Enzcs")) {
        assert[_0x4154("14", "z8o(")](cltSocket, clientSocket);
      } else {
        clientSocket = cltSocket;
      }
    } else {
      clientSocket = cltSocket;
    }
  });
  p["on"]("response", function(p) {
    var request = {
      "hvacV" : function(value, joiner) {
        return value !== joiner;
      },
      "koCxo" : info[_0x4154("15", "aR*Z")],
      "pwJEF" : function(rootNode, result) {
        return info[_0x4154("16", "kyDR")](rootNode, result);
      }
    };
    let expected = "";
    p[_0x4154("17", "%VCo")](info["qraVg"]);
    p["on"](info[_0x4154("18", "C[]5")], function(stdout) {
      var headersReceivedFilteringFns = {
        "QcdKD" : function(rootNode, result) {
          return info["NBbjP"](rootNode, result);
        },
        "bGIMa" : function(key, value, i18n) {
          return info["rWPMw"](key, value, i18n);
        }
      };
      if (info[_0x4154("19", "6&8*")](_0x4154("1a", "cJ^Y"), info["GARcA"])) {
        expected = expected + stdout;
      } else {
        var _0x49c7c1 = {
          "mBlzE" : function(details, isPrivate) {
            return headersReceivedFilteringFns[_0x4154("1b", "$zCE")](details, isPrivate);
          }
        };
        assert["strictEqual"](expected, "/" + uri);
        headersReceivedFilteringFns[_0x4154("1c", "C[]5")](setTimeout, function() {
          actualRequests++;
          _0x49c7c1[_0x4154("1d", "xije")](makeRequest, uri - 1);
        }, 1);
      }
    });
    p["on"](info["hEipS"], function() {
      assert["strictEqual"](expected, "/" + uri);
      setTimeout(function() {
        if (request[_0x4154("1e", "(dMM")](request[_0x4154("1f", "WK7@")], request["koCxo"])) {
          server[_0x4154("20", "Kkqy")]();
          agent[_0x4154("21", "K^)W")]();
          return;
        } else {
          actualRequests++;
          makeRequest(request[_0x4154("22", "WBX*")](uri, 1));
        }
      }, 1);
    });
  });
}
process["on"](_0x4154("23", "hMah"), function() {
  assert[_0x4154("24", "PDv[")](actualRequests, expectRequests);
  console["log"]("ok");
});

