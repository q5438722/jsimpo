'use strict';
var vip = "vip.v6";
var _0x5b17 = [vip, "Z8Kfw5nDoA==", "J8OlAGYpw6NPw4BKVhxcw7Up", "w71tw6/DksKBMw==", "P8O3w7DChMOONg5DwrABNcOJGiFKdGnCmldJwo1PB8OLBsOIw4E=", "w5EWw5RY", "e1dX", "QsKaGj8=", "wrHDu8KBwo4Y", "w6PDq8K4wq7Dow==", "w5jDpHbDosOh", "M8OCXW1RDMO2", "w5nDj8KxwoHDvQ==", "fsKewqoYOw==", "w7bDoXTDgA==", "VlBYwrJ5OibCj2fCnBzCu8OzRyBUwqY=", "wr7CmGTDrsOmaQ==", "RcKTCzhiMwJUFA==", "wpVLwq/CtA==", "bsOxwpcvwpQtVhnCrg==", "w4HDlHHDpcOq", "wqbCmGXDvg==", "GMOMw7Y=", "w49jwpt1", "LVDDtDoTWMOF", "LMKefCRBcg==", "O8OIV1w=", 
"fsKcw5NyMGQ=", "RcO9WQEkcMKNw53DtMOhZcK6DEY=", "JMKWfTU=", "wrPDkwsfwq81AWnCqw==", "W8K+woI=", "wrV3wq7CmcKVD8O0wqvCgMKGWcKIARg=", "w5HDt8KVwpw=", "ZcKCw4Q=", "M0gzfg==", "w5UWw4FBfg==", "DMOSdQ==", "O0Re", "w75jw6U=", "woHCjsKTOSYw", "U8KFHsKZPkvCqzQLw64owrU=", "w6DDtn7Dn8O9w67CkS5ow54yw4U4w6ZNwpY=", "wrVMwozCuxM=", "FMO8DF8M", "wqdswp/DlwNnKg==", "wrDDigJG", "w73DoMKSwo3CuQ==", "wpFywprCo8KF", "Mw1tQcKZ", "cMKPwpzDkQ==", "dcKcw4k=", "wprCvl8Hw59TwqM=", "AMOsEQ==", "OcKewpLClUIXw5Q=", "wqR7woTDpg==", 
"w5dyw6jDkMKR", "Z0YbCiUBw7LDlQ==", "Vi96aMK/DVgIYSl5w5J2", "OMOCw4PDmMO0w5k6w6HDpg==", "ZvmMdbSmAQiqxZccp.vq6ql=="];
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
          if (value && str["replace"](/[ZmMdbSmAQqxZccqql=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662365;
  };
  return fn(++count, long) >> count ^ long;
})(_0x5b17, 237, 60672);
var _0x5031 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x5b17[c];
  if (_0x5031["dknGbo"] === undefined) {
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
    _0x5031["WSCPiM"] = testcase;
    _0x5031["cwpWLp"] = {};
    _0x5031["dknGbo"] = !![];
  }
  var e = _0x5031["cwpWLp"][c];
  if (e === undefined) {
    if (_0x5031["hwbDDX"] === undefined) {
      _0x5031["hwbDDX"] = !![];
    }
    x = _0x5031["WSCPiM"](x, alpha);
    _0x5031["cwpWLp"][c] = x;
  } else {
    x = e;
  }
  return x;
};
const {
  writeFileSync : writeFileSync
} = require("fs");
const yargs = require("yargs");
const {
  getPackages : getPackages
} = require(_0x5031("0", "#iOK"));
const PackageGraph = require("@lerna/package-graph");
const semver = require(_0x5031("1", "XcG&"));
let warned = ![];
const argv = yargs["option"]("fix", {
  "default" : ![],
  "describe" : _0x5031("2", "6cix")
})["option"]("allow-next", {
  "default" : ![],
  "describe" : 'Allow using "next" versions. Use this only for alpha/beta releases'
})[_0x5031("3", "Q@AM")];
getPackages(process[_0x5031("4", "]bG5")]())[_0x5031("5", "VkJs")]((packages) => {
  var c = {
    "iRCTk" : function(value, joiner) {
      return value !== joiner;
    },
    "NfNjN" : "WucuR",
    "suiKK" : _0x5031("6", "dKxF"),
    "QwHUU" : function(name, initialValue) {
      return name === initialValue;
    },
    "MVepH" : _0x5031("7", "ELoB"),
    "QGjHS" : _0x5031("8", "cP3A"),
    "Yzjtu" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  const self = new PackageGraph(packages, "allDependencies", !![]);
  self[_0x5031("9", "w4it")]((map, canCreateDiscussions) => {
    var _0x351fd5 = {
      "Bvjtu" : function(row, val) {
        return c[_0x5031("a", "ELoB")](row, val);
      },
      "JRvJM" : c[_0x5031("b", "uvUw")]
    };
    let exports = Array[_0x5031("c", "cP3A")](map[_0x5031("d", "V3jH")][_0x5031("e", "[PL@")]())["filter"]((val) => {
      return !semver[_0x5031("f", "VkJs")](self["get"](val[_0x5031("10", "4v5R")])["version"], val[_0x5031("11", "0pvS")]);
    });
    if (argv["allow-next"]) {
      if (c["iRCTk"]("HwmOX", c[_0x5031("12", "cP3A")])) {
        if (pkg[depKey] && pkg[depKey][p["name"]]) {
          next[depKey][p[_0x5031("13", "[PL@")]] = "^" + self[_0x5031("14", "I%*c")](p[_0x5031("15", "M6bR")])[_0x5031("16", "ga#z")];
        }
      } else {
        exports = exports[_0x5031("17", "zZm0")]((canCreateDiscussions) => {
          return canCreateDiscussions["fetchSpec"] !== _0x5031("18", "w4it");
        });
      }
    }
    if (!exports[_0x5031("19", "lB0I")]) {
      return;
    }
    const msg = exports["map"]((val) => {
      return _0x5031("1a", "ZVS&") + val[_0x5031("1b", "zZm0")] + "@" + val[_0x5031("1c", "laS%")] + _0x5031("1d", "6cix") + (_0x5031("1e", "pdxN") + val[_0x5031("1f", "PYL^")] + "@" + self[_0x5031("20", "sYz6")](val[_0x5031("21", "*(cv")])["version"] + '". \n');
    })["join"]("\n");
    console[_0x5031("22", "Q@AM")](map["name"] + _0x5031("23", "VkJs") + msg);
    warned = !![];
    if (argv[_0x5031("24", "*R&C")]) {
      const colors = map[_0x5031("25", "XcG&")];
      const data = colors[_0x5031("26", "Rb1@")]();
      const _0x3add36 = [_0x5031("27", "9]R)"), "devDependencies", _0x5031("28", "cP3A")];
      exports["forEach"]((params) => {
        if (c["iRCTk"](c[_0x5031("29", "4v5R")], c[_0x5031("2a", "#iOK")])) {
          _0x3add36[_0x5031("2b", "$MWm")]((i) => {
            if (colors[i] && colors[i][params[_0x5031("2c", "O0(I")]]) {
              if (_0x351fd5[_0x5031("2d", "PYL^")](_0x351fd5[_0x5031("2e", "y@e(")], _0x351fd5[_0x5031("2f", "eSYR")])) {
                data[i][params[_0x5031("30", "ekpu")]] = "^" + self[_0x5031("31", "lB0I")](params["name"])[_0x5031("32", "GdKC")];
              } else {
                data[i][params["name"]] = "^" + self[_0x5031("33", "#iOK")](params["name"])[_0x5031("34", "GLHY")];
              }
            }
          });
        } else {
          process[_0x5031("35", "$MWm")](1);
        }
      });
      c[_0x5031("36", "XcG&")](writeFileSync, colors[_0x5031("37", "aLPN")] + _0x5031("38", "eSYR"), JSON[_0x5031("39", "(q!R")](data, null, 2));
    }
  });
  if (warned) {
    process[_0x5031("3a", "sYz6")](1);
  }
});

