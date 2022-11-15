'use strict';
var __decorate = "vip.v6";
var positions = [__decorate, "wrgWwp3DjcKrJ04vw6E=", "wo9mL8OsdnjDo8O7w5fCtA==", "Kn3DpcKAw7sXwq7DrMOhwrw6W8OCDDjDscO/", "w7t8woLCuyB8WsOiwohWw7RHbcKuP8O6", "w5kyw59NwrPDqMKyZMOQwofDgXVuBCtT", "wrEzwphGwrg=", "wowZKcKbw5ESFFJPw4jCucOBwpvDhTDCmsO3X2TCt8ODwr8=", "dcOpwoJ1FQ==", "Z8KCf2rDksK0", "bcKxwohrAg==", "VCHDiGsc", "Y8KOHsKhwofCpcKu", "JC/CpcORB8KXwpJbIlED", "wqTCiBrDtR/DscKXGMKxCHYfb00=", "ZsKGw7HDpErDnsKWw7/DlcOfLsOYBA==", "Sm8/w4rCr8KXwod7IcOpw4bCvsOUPMOjcE1Cwqonw7TCoAc=", "IArDvsO/wr9xw6vDkMKJwqLCh1/DkQ==", 
"wrQbXcKrIRTDusOpw47Cg3bCgMONVsOxcMK0wo/DgsK4HxY=", "woM3w5rDuMK6", "w7vChy4Xwo8=", "wo7CqMKXacKVw6li", "w4Ruwp0tPMOXw6jDrcKKcTnClA==", "w5Amw744wr8=", "w7ohw6Nvwos=", "OUNKwqYP", "V0TCmcKnBcKsw5XCjcOLw5sV", "wq0Ww6LDtcKuwqbDr8K1fcKZw5Q=", "wr0owpTDn8KX", "wo4ywrZ6woE=", "w5wow51VwrLDpMKsVcOQwpHDlg==", "wpoPX8KjPhLDjsO5w4fCgQ==", "fcOJwqFKOsORw6E=", "w5Icw5okwo5MdkTCn8OKw6U=", "w4xvwq4/HA==", "IUMqOsO/fsOjScOLwqle", "SgzCtDDCvQ==", "wqzCnyXCtyo=", "csK3P8K6wqM=", "wq91w5Yxw7TDqMK9", "w7jCmAoiwr8=", 
"BAfDhsO8wqg=", "OMKzcMOHw7Q=", "w4ZaZ8Kgw4M=", "OzbDjsOdwos=", "w5t+w4bClsOhw53Dnw==", "wqQawpxXwrzDvh0=", "dsKWw6nDvUvDrsKxw6rDo8OfI8OYFAXDqX7Csg==", "vipKwOTS.v6GnDDqQyNELq=="];
(function(data, count, size) {
  var fn = function(script, type, str, value, prefix) {
    type = type >> 8;
    prefix = "po";
    var str = "shift";
    var method = "push";
    if (type < script) {
      for (; --script;) {
        value = data[str]();
        if (type === script) {
          type = value;
          str = data[prefix + "p"]();
        } else {
          if (type && str["replace"](/[KwOTSGnDDqQyNELq=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662310;
  };
  return fn(++count, size) >> count ^ size;
})(positions, 380, 97280);
var m = function(i, value) {
  i = ~~"0x"["concat"](i);
  var x = positions[i];
  if (m["tvsEPt"] === undefined) {
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
    m["ULyRhy"] = testcase;
    m["YdRlTJ"] = {};
    m["tvsEPt"] = !![];
  }
  var y0 = m["YdRlTJ"][i];
  if (y0 === undefined) {
    if (m["DKZyaK"] === undefined) {
      m["DKZyaK"] = !![];
    }
    x = m["ULyRhy"](x, value);
    m["YdRlTJ"][i] = x;
  } else {
    x = y0;
  }
  return x;
};
import _0x5c43bb from "../button.js";
import _0x13bc3b from "../component.js";
import _0xdfa957 from "global/document";
class App extends _0x5c43bb {
  constructor(event, canvas) {
    var row = {
      "eEeha" : m("0", "9ZtZ"),
      "xLBFJ" : function(type, name) {
        return type === name;
      },
      "TOgOo" : "KiFrY"
    };
    super(event, canvas);
    this["on"](event, row[m("1", "CSQs")], (e) => {
      return this[m("2", "7Lo6")](e);
    });
    if (row[m("3", "[MON")](_0xdfa957[event[m("4", "RU&U")]["fullscreenEnabled"]], ![])) {
      if (row[m("5", "mbeD")](row[m("6", "xI6J")], row["TOgOo"])) {
        this[m("7", "Cv2e")]();
      } else {
        this[m("8", "1vGH")](m("9", "YfYY"));
      }
    }
  }
  [m("a", "KHn!")]() {
    return m("b", "[l03") + super[m("c", "X4*7")]();
  }
  [m("d", "eHT^")](event) {
    var row = {
      "uLffS" : "Fullscreen",
      "arugL" : "Non-Fullscreen",
      "aUJhC" : function(type, name) {
        return type === name;
      },
      "EfPNK" : m("e", "vXIi"),
      "ZDKTX" : function(state, undefinedAttr) {
        return state !== undefinedAttr;
      },
      "Atips" : "nLGeg",
      "KdyjL" : m("f", "]$4U")
    };
    if (this[m("10", "#0Zo")][m("11", "Snrp")]()) {
      if (row[m("12", "3X99")](row[m("13", "9ZtZ")], m("14", "gr2S"))) {
        this[m("15", "5!U!")](row["arugL"]);
      } else {
        this[m("16", "vXIi")](row[m("17", "!xh9")]);
      }
    } else {
      if (row[m("18", "CSQs")](row["Atips"], row["KdyjL"])) {
        this[m("19", "9ZtZ")](m("1a", "eHT^"));
      } else {
        if (this[m("1b", "[MON")]["isFullscreen"]()) {
          this[m("1c", "3X99")](row[m("1d", "Snrp")]);
        } else {
          this[m("1e", "FPyr")](row[m("1f", "6NxK")]);
        }
      }
    }
  }
  ["handleClick"](event) {
    var row = {
      "WAkBz" : function(state, undefinedAttr) {
        return state !== undefinedAttr;
      },
      "OZtXj" : m("20", "YfYY"),
      "PZbPI" : function(type, name) {
        return type === name;
      },
      "yIYNP" : m("21", "Cv2e")
    };
    if (!this[m("22", "K%9J")]["isFullscreen"]()) {
      if (row["WAkBz"](row[m("23", "]$4U")], m("24", "X4*7"))) {
        this["disable"]();
      } else {
        this[m("10", "#0Zo")]["requestFullscreen"]();
      }
    } else {
      if (row[m("25", "Xw%^")](m("26", "IU%H"), row[m("27", "X4*7")])) {
        this[m("28", "yM*X")]["exitFullscreen"]();
      } else {
        this[m("29", "CSQs")][m("2a", "KHn!")]();
      }
    }
  }
}
App[m("2b", "!xh9")]["controlText_"] = m("2c", "l%ku");
_0x13bc3b[m("2d", "rNQg")](m("2e", "$FFE"), App);
export default App;

