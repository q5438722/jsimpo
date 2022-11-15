'use strict';
var vip = "vip.v6";
var _0x1e35 = [vip, "wpjDuy3Dk1Zqw4UXLsOtw6fDgcKqwpYE", "ARA6wrZwYSp8", "wprCpFPDgsOGwoFlw78kwrzDnsKyw6lYwoQvw4I=", "fXxpwrEZw5Yfw6k=", "wq3DgGYzFg==", "EsO4wp/CicKHwr7DvsKQcG7DnlfCvEhz", "bnpfw7k=", "PVnDjMKeK8O7HkM=", "J8OoEUDDjsOpTylZwqDDpHU=", "Dykjw5vDo8KoXQ==", "wo3DrmIUNXtse8O/", "FcOqwqLCjQ==", "fcOBw6MTUAHDrA==", "HSM8w64=", "wr9cK8KCXUFkcMOYw6omK8K4wq1yEsK2w4bCqMOpw7k6UsKoIHc=", "T8Kpw77DvQ81B8Kvw7lYw6nDnSJ/f8OlOMO7W3DDuiMGZcKewpbCu8KrwoTDqw==", "S8OIAl7Cp8K+V8K4", "w4nCuRY3w401UUXDizgS", 
"wrTDpknCrsK2wporFw==", "IQvDjcKPMMKLWTQ=", "IAvDgcOWIcKQWiE=", "wrjDiGo5OA==", "DG/DkcKhBQ==", "PsKPw4EXZQ==", "w6Fyw4EEKMKtQcOGwrQ=", "HG/CssOuw5Q=", "w6fDl8KSQmoJEcKe", "AcO/wqE9wpg=", "ByvDssOgNw==", "w5/CmHfCrcO6w7/CtFA=", "wrhUc08=", "w6DCrnHCmsOm", "w4jCsBEEw7w=", "wr/CjsOfw7jDncO/Kw==", "W8Klw77CgAooCcK6", "wrlBK8OOWkBWecKmw4gE", "MQ3Di8OJJ8KSXjFf", "C8O3KHHDvXcHw43DrcKO", "wpvCpzIrJQ==", "ODQPwq1r", "HsOZwqwdwoM=", "HcOuBwwAw7HDrcKfwoA=", "HMOuwrvCvsKNwrDDqA==", "wrXDpkXDt8KnwoEoAsOewrnCg3YXwp4=", 
"w5DDoMK1QnA=", "w41UW2RL", "MHrCjMKASsK6R2E=", "wq1Zw7Un", "w7AzWcKrUw==", "YhnCscOz", "w7xcc1U=", "wr/ClBoJDRbCuA==", "wqDDj8OnwpLCkTE/w7U=", "w5PCg3XCqcOKw67CjlxUM8Km", "w7BtUER5wp3DlsKwXg==", "wqjCgwEmBBDCoWtyDw==", "A8Kjw6MNeQ==", "w5BWNHDDv8KgZMKnAg==", "BjY0w7A=", "OR46wo57", "wo/DqEQMKA==", "wrTDj8OnwpTCmSAg", "w73CunHCh8OP", "w4hPUmBs", "XMODwo0wSA==", "w7ZIw6Nhw64=", "P1PCncOWw4vDk8OqAA==", "viFpO.Tva6BNWzqhtxUUFUW=="];
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
          if (value && str["replace"](/[FOTaBNWzqhtxUUFUW=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661709;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1e35, 481, 123136);
var _0x5a05 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x1e35[c];
  if (_0x5a05["RTSyCt"] === undefined) {
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
    _0x5a05["umWToS"] = testcase;
    _0x5a05["mZVbDE"] = {};
    _0x5a05["RTSyCt"] = !![];
  }
  var e = _0x5a05["mZVbDE"][c];
  if (e === undefined) {
    if (_0x5a05["sipCsm"] === undefined) {
      _0x5a05["sipCsm"] = !![];
    }
    x = _0x5a05["umWToS"](x, alpha);
    _0x5a05["mZVbDE"][c] = x;
  } else {
    x = e;
  }
  return x;
};
const path = require("path");
const fs = require(_0x5a05("0", "T@6W"));
const temp = require(_0x5a05("1", "QP^2"))["track"]();
const commands = ["git-diff:toggle-diff-list", _0x5a05("2", "Mf8]"), _0x5a05("3", "[4^2")];
describe(_0x5a05("4", "JClw"), () => {
  var c = {
    "AIKBc" : _0x5a05("5", "Pu2v"),
    "RYpRO" : "git.git",
    "uCAIv" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "UTnpL" : function(name, initialValue) {
      return name === initialValue;
    },
    "kSafN" : "rfbRJ",
    "qDjyo" : "git-diff-spec-",
    "kGyhA" : _0x5a05("6", "PXDT"),
    "vfuXX" : ".git",
    "TAGHM" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "irFtm" : _0x5a05("7", "]%WV"),
    "OMpOf" : function(require, load, callback) {
      return require(load, callback);
    },
    "GqCSt" : "removes all registered command hooks after deactivation.",
    "bsuBI" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  let xPathQuery;
  let xPathResults;
  c["bsuBI"](beforeEach, () => {
    var _0xeb8920 = {
      "TXWyI" : _0x5a05("8", "]%WV"),
      "JVyKA" : c[_0x5a05("9", "Mi7C")],
      "KiveB" : c[_0x5a05("a", "[Wl@")],
      "HocSj" : function(row, val) {
        return c[_0x5a05("b", "IBWl")](row, val);
      },
      "IEVpz" : function(row, val) {
        return c["UTnpL"](row, val);
      },
      "tatHZ" : c["kSafN"]
    };
    const B523 = temp[_0x5a05("c", "s!#Q")](c[_0x5a05("d", "1A2!")]);
    fs[_0x5a05("e", "G5qO")](path["join"](__dirname, c[_0x5a05("f", "S(4S")], c[_0x5a05("10", "]%WV")]), B523);
    fs[_0x5a05("11", "tHsx")](path[_0x5a05("12", "^Kc0")](B523, c[_0x5a05("13", "tHsx")]), path["join"](B523, c[_0x5a05("14", "Pu2v")]));
    atom[_0x5a05("15", "(iy7")][_0x5a05("16", "[4^2")]([B523]);
    jasmine[_0x5a05("17", "Mf8]")](atom[_0x5a05("18", "]%WV")][_0x5a05("19", "xR9$")]());
    c[_0x5a05("1a", "5W@c")](waitsForPromise, () => {
      return atom["workspace"]["open"]("sample.js");
    });
    runs(() => {
      if (_0xeb8920[_0x5a05("1b", "^3*A")](_0xeb8920[_0x5a05("1c", "S(4S")], _0xeb8920["tatHZ"])) {
        xPathQuery = atom[_0x5a05("1d", "KJGq")]["getActiveTextEditor"]();
        xPathResults = atom["views"][_0x5a05("1e", "$!Nf")](xPathQuery);
      } else {
        const statCb = temp["mkdirSync"](_0x5a05("1f", "PXDT"));
        fs["copySync"](path["join"](__dirname, _0xeb8920[_0x5a05("20", "G5qO")], _0xeb8920[_0x5a05("21", "N3zF")]), statCb);
        fs[_0x5a05("22", "*V&w")](path[_0x5a05("23", "m%eW")](statCb, _0xeb8920[_0x5a05("24", "@1NZ")]), path[_0x5a05("25", "lon6")](statCb, _0x5a05("26", "^Kc0")));
        atom[_0x5a05("27", "5W@c")][_0x5a05("28", "aW*U")]([statCb]);
        jasmine[_0x5a05("29", "tHsx")](atom[_0x5a05("2a", "N3zF")][_0x5a05("2b", "5W@c")]());
        _0xeb8920[_0x5a05("2c", "IBWl")](waitsForPromise, () => {
          return atom[_0x5a05("2d", "6X5!")][_0x5a05("2e", "QP^2")]("sample.js");
        });
        _0xeb8920[_0x5a05("2f", "^3*A")](runs, () => {
          xPathQuery = atom["workspace"]["getActiveTextEditor"]();
          xPathResults = atom[_0x5a05("30", "Mi7C")][_0x5a05("31", "aW*U")](xPathQuery);
        });
      }
    });
  });
  c[_0x5a05("32", "tHsx")](describe, "When the module is deactivated", () => {
    c[_0x5a05("33", "N3zF")](it, c[_0x5a05("34", "T@6W")], () => {
      var _0x7d9c6e = {
        "RRoMl" : c[_0x5a05("35", "#4Pl")]
      };
      waitsForPromise(() => {
        return atom[_0x5a05("36", "bkNb")][_0x5a05("37", "m^sU")]("git-diff");
      });
      c["TAGHM"](waitsForPromise, () => {
        return atom[_0x5a05("38", "^3*A")][_0x5a05("39", "xu8W")](_0x5a05("3a", "7ZNY"));
      });
      c[_0x5a05("3b", "Mi7C")](runs, () => {
        expect(atom["packages"][_0x5a05("3c", "$!Nf")](_0x7d9c6e["RRoMl"]))[_0x5a05("3d", "7ZNY")](![]);
        atom[_0x5a05("3e", "[Wl@")][_0x5a05("3f", "B4k1")]({
          "target" : xPathResults
        })["filter"](({
          name : instance
        }) => {
          return commands["includes"](instance);
        })[_0x5a05("40", "QP^2")]((canCreateDiscussions) => {
          return expect(commands)["not"][_0x5a05("41", "Mi7C")](canCreateDiscussions[_0x5a05("42", "$!Nf")]);
        });
      });
    });
  });
});

