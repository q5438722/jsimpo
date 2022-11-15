'use strict';
var vip = "vip.v6";
var _0x64f9 = [vip, "DyTCmlNSWw==", "wpJmEW/CkVwZ", "w4NSGcKrwqI=", "dhRZNcKIw49Uwop/wpRD", "J0XCoDI2w5U=", "UX1PMl16wp5VDk/CkQ==", "cCtUHzbDp1U=", "QcKnw5jDr8OUw78=", "w5Jww6fCtg==", "wr3DiUA=", "w652bSfDow==", "YMKdKcKB", "BMKgUsO3QhXCtlA0", "wqbDgCPCuidBwrgpNyLCjA==", "w67DscO9wospdXVVa8KnUsKQ", "e8O+w5bDmsKYfsKDwqXDj03Chg==", "w49ow4PDuw9+w7PCjsKqwqXDnw==", "woPDksKLJBk=", "dxF1VA==", "w7MYI8KvE8OxQw==", "UsOATnPDljAubw==", "WsOGaXnDlDMpcRPDsWo=", "WgJZD8KLw6JHwq1/wr5Pwp/DsjPDmw==", "F8O5wprCniTCvCZdw4zDvcOMwoFyw5rDuGzCncODLg==", 
"wpsiERLCuA==", "wofDo8Kb", "w6xlWho=", "wrVewpAWLQ==", "WMK9wojCl2I=", "I0nCpiw8w5LDsg==", "I8Knw6Mlcw==", "w6vDtcO6", "wpZAecOC", "wpBJe8OEFMO0EQ==", "wp/DtjLCuB8=", "VsOWaXPDizQUexvDoXbCrg==", "w5Bzw6XDshV5w6k=", "HcO9wrbCqjA=", "w797McKcwpg=", "w5pvw5/CosO6", "w5p3w4zDjAg=", "bT1dHRrDsQ==", "w6IVI8KlDQ==", "w5F4w6rCug==", "M8ONwoDChQA=", "FTnCrFV0Tw==", "w4FCC8Kn", "w6LDsMOtwosi", "QMOpw7bDs2tfw6I=", "woHCmEzCqQQ=", "GvipcFMYWPE.avb6UBNewC=="];
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
          if (value && str["replace"](/[GcFMYWPEabUBNewC=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662344;
  };
  return fn(++count, long) >> count ^ long;
})(_0x64f9, 170, 43520);
var _0xc15c = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x64f9[c];
  if (_0xc15c["yqeCGm"] === undefined) {
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
    _0xc15c["tIOhtF"] = testcase;
    _0xc15c["ACPcwO"] = {};
    _0xc15c["yqeCGm"] = !![];
  }
  var e = _0xc15c["ACPcwO"][c];
  if (e === undefined) {
    if (_0xc15c["eNdpQC"] === undefined) {
      _0xc15c["eNdpQC"] = !![];
    }
    x = _0xc15c["tIOhtF"](x, alpha);
    _0xc15c["ACPcwO"][c] = x;
  } else {
    x = e;
  }
  return x;
};
Facts = {};
var serverFactsCollection = "meteor_Facts_server";
if (Meteor[_0xc15c("0", "G9D]")]) {
  var userIdFilter = function(canCreateDiscussions) {
    return !!Package[_0xc15c("1", "G9D]")];
  };
  Facts[_0xc15c("2", "ZIQ3")] = function(canCreateDiscussions) {
    userIdFilter = canCreateDiscussions;
  };
  var factsByPackage = {};
  var activeSubscriptions = [];
  Facts["_factsByPackage"] = factsByPackage;
  Facts[_0xc15c("3", "Sq!s")] = function(key, k, sample) {
    var _0x1ecd47 = {
      "mnStA" : _0xc15c("4", "m(]k")
    };
    if (!_[_0xc15c("5", "hfag")](factsByPackage, key)) {
      factsByPackage[key] = {};
      factsByPackage[key][k] = sample;
      _[_0xc15c("6", "D2v0")](activeSubscriptions, function(gl) {
        if (_0x1ecd47[_0xc15c("7", "liEm")] !== _0x1ecd47[_0xc15c("8", "MPh0")]) {
          activeSubscriptions = _[_0xc15c("9", "A$VM")](activeSubscriptions, gl);
        } else {
          gl[_0xc15c("a", "c56(")](serverFactsCollection, key, factsByPackage[key]);
        }
      });
      return;
    }
    var list = factsByPackage[key];
    if (!_[_0xc15c("b", "Wa#H")](list, k)) {
      factsByPackage[key][k] = 0;
    }
    factsByPackage[key][k] += sample;
    var self = {};
    self[k] = factsByPackage[key][k];
    _[_0xc15c("c", "&r9m")](activeSubscriptions, function(map) {
      map[_0xc15c("d", "&r9m")](serverFactsCollection, key, self);
    });
  };
  Meteor["defer"](function() {
    var headersReceivedFilteringFns = {
      "NLISC" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "BKecr" : _0xc15c("e", "uPg#"),
      "nvVpX" : function(value, joiner) {
        return value !== joiner;
      },
      "cjOFq" : _0xc15c("f", "G9D]")
    };
    Meteor[_0xc15c("10", "LX@l")](headersReceivedFilteringFns[_0xc15c("11", "Sq!s")], function() {
      var service_obj = {
        "MZyiA" : function(details, isPrivate) {
          return headersReceivedFilteringFns[_0xc15c("12", "uzAY")](details, isPrivate);
        },
        "aBNDu" : headersReceivedFilteringFns["BKecr"]
      };
      if (headersReceivedFilteringFns[_0xc15c("13", "*2Pk")](_0xc15c("14", "LX@l"), "LeZqk")) {
        var value = this;
        if (!userIdFilter(this[_0xc15c("15", "Sg2j")])) {
          value[_0xc15c("16", "K@sR")]();
          return;
        }
        activeSubscriptions["push"](value);
        _[_0xc15c("17", "*2Pk")](factsByPackage, function(mmCoreSplitViewBlock, $target) {
          var _0x19094c = {
            "TCiTc" : function(status, message) {
              return service_obj[_0xc15c("18", "Sq!s")](status, message);
            }
          };
          if ("BnkaX" !== service_obj["aBNDu"]) {
            value["added"](serverFactsCollection, $target, mmCoreSplitViewBlock);
          } else {
            var backEl = this;
            if (!_0x19094c["TCiTc"](userIdFilter, this[_0xc15c("19", "5e%I")])) {
              backEl["ready"]();
              return;
            }
            activeSubscriptions[_0xc15c("1a", "uzAY")](backEl);
            _["each"](factsByPackage, function(leftFence, duration) {
              backEl[_0xc15c("1b", "Wa#H")](serverFactsCollection, duration, leftFence);
            });
            backEl["onStop"](function() {
              activeSubscriptions = _[_0xc15c("1c", "0eG!")](activeSubscriptions, backEl);
            });
            backEl[_0xc15c("1d", "BRYo")]();
          }
        });
        value[_0xc15c("1e", "5e%I")](function() {
          activeSubscriptions = _[_0xc15c("1f", "XbTB")](activeSubscriptions, value);
        });
        value[_0xc15c("20", "uzAY")]();
      } else {
        this[_0xc15c("21", "ZIQ3")]["stop"]();
        this["_stopHandle"] = null;
      }
    }, {
      "is_auto" : !![]
    });
  });
} else {
  Facts[_0xc15c("22", "A$VM")] = new Mongo["Collection"](serverFactsCollection);
  Template[_0xc15c("23", "xV2*")][_0xc15c("24", "Sg2j")]({
    "factsByPackage" : function() {
      return Facts[_0xc15c("25", "VSo2")][_0xc15c("26", "*2Pk")]();
    },
    "facts" : function() {
      var _lastDisplayPropertyValues = {
        "grTUR" : _0xc15c("27", "o988")
      };
      var PL$6 = [];
      _["each"](this, function(command_module_id, _propertyValue) {
        if (_propertyValue !== _lastDisplayPropertyValues[_0xc15c("28", "D2v0")]) {
          PL$6[_0xc15c("29", "fLcX")]({
            "name" : _propertyValue,
            "value" : command_module_id
          });
        }
      });
      return PL$6;
    }
  });
  Template["serverFacts"][_0xc15c("2a", "CHMX")](function() {
    this[_0xc15c("2b", "uPg#")] = Meteor["subscribe"](_0xc15c("2c", "Wa#H"));
  });
  Template[_0xc15c("2d", "t7QL")][_0xc15c("2e", "LX@l")](function() {
    var _0x24f1a9 = {
      "mdKgv" : _0xc15c("2f", "hfag")
    };
    if (this["_stopHandle"]) {
      if ("lPcBn" === _0x24f1a9["mdKgv"]) {
        this["_stopHandle"][_0xc15c("30", "^0kM")]();
        this["_stopHandle"] = null;
      } else {
        sub[_0xc15c("31", "K@sR")](serverFactsCollection, pkg, changedField);
      }
    }
  });
}
;
