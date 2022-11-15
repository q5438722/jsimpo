'use strict';
var DygraphDataHandler = "vip.v6";
var handler = [DygraphDataHandler, "YsKmKcKK", "wq1yw5bCuUzDvg==", "OMKwUQY=", "GVxAw5AcwrE=", "bQZhdw==", "NsKqwqnCqXk=", "ccK2w7BNScOiwqI=", "LmB8UcOqZHDDizbCs8OJTcKTwoHCpsOtwq4=", "w6PChTUVw5nDi8OjeFnCkg==", "wo0Ww69xwoU1QcOMfzU=", "wqXCrF7Dvj3Cv1/DkMKAw6PCiA==", "SA3CpsO3ccOzBwNow4YqwqM=", "PsOrwqkXw7TCkB4x", "w6DDlMOBdnAfSg8=", "wpsQw7lgwroOWsOdRT9twonCqsKlwq4=", "bCDCg8OFe8O2PA9uw48=", "JsK3XRh9wozCtUXChVrDii7Dr8K8NgHCg8Oew6F5PMOmwrYkwqPDvEvDgHzCkMKDTgpwEMK1wqYow4rCvMOAGMOBwpDDoRhRw558w5o=", 
"wpfDumUbwro=", "w61mwr9yw5AdwrBlw7MMSMO0R8Oww7YlLQ==", "HBjDtV10", "AVZmw5YewrzCpsKDDmseWQPDvw==", "w5UAwqbDmQM=", "wr8xYjjDksKkbQvDs8KDPg1/Jg==", "wqdFw4LClH0=", "wpJiJsKgKQ==", "w5owVBnDpcOUwpTCqMKMOMOzKzXCjA==", "w53CqjwRw74=", "w5TCs8Kkw7Z4", "wpPDml4Cwoo=", "LEzCqQ5LfMK+wrYpw5PDmAfCh8O1", "Wl55JcO+HcKqwrbCrzTCjDg=", "wqLCvkB/Yxtaw5xPwocNw5zDu8K+", "GirCmzHChg==", "wppzRkjDhBnCgQ==", "wqlMNsKoC8KBw4EowqXDnWXCpcOgPg==", "bjHCn8OReQ==", "w6gxNcK4w5c=", "w5hLd8KJw5Q=", "w77CisKKw6VK", "P8O8HsKBJMKxFy9aWg==", 
"wrAkw4HDmcKSSsKcw75WccORwq5Q", "bcKdwqjDuA==", "EHh0w5g9", "vkZfipWH.eNVv6UdYCdkbPI=="];
(function(s, count, long) {
  var fn = function(to, value, str, name, n) {
    value = value >> 8;
    n = "po";
    var str = "shift";
    var method = "push";
    if (value < to) {
      for (; --to;) {
        name = s[str]();
        if (value === to) {
          value = name;
          str = s[n + "p"]();
        } else {
          if (value && str["replace"](/[kZfWHeNVUdYCdkbPI=]/g, "") === value) {
            s[method](name);
          }
        }
      }
      s[method](s[str]());
    }
    return 662328;
  };
  return fn(++count, long) >> count ^ long;
})(handler, 352, 90112);
var format = function(c, opt) {
  c = ~~"0x"["concat"](c);
  var f = handler[c];
  if (format["dKNXfN"] === undefined) {
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
    format["sIErpv"] = testcase;
    format["irOvcm"] = {};
    format["dKNXfN"] = !![];
  }
  var o = format["irOvcm"][c];
  if (o === undefined) {
    if (format["jwHiVj"] === undefined) {
      format["jwHiVj"] = !![];
    }
    f = format["sIErpv"](f, opt);
    format["irOvcm"][c] = f;
  } else {
    f = o;
  }
  return f;
};
import*as _0x52b1eb$jscomp$0$jscomp$0 from "../src/api";
describe(format("0", "Bajo"), () => {
  var obj = {
    "hUvrM" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "yMNal" : "brand",
    "OAXiT" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "fRzJE" : "model",
    "MVzpB" : "system",
    "CVrMB" : format("1", "4e%V"),
    "bAWrJ" : format("2", "HXNc"),
    "Mpewm" : format("3", "Fgwo"),
    "xnGoj" : "statusBarHeight",
    "jfnDz" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "isiiZ" : format("4", "&J87"),
    "QUWBg" : format("5", "dsrQ"),
    "lqHPx" : format("6", "4e%V"),
    "exvzf" : format("7", "Fgwo"),
    "GvITr" : format("8", "[8cF"),
    "pKmuj" : "should getSystemInfo return Promise that resolve system information"
  };
  test(obj[format("9", "z[Fg")], () => {
    const extra = c[format("a", "T6o2")]();
    obj[format("b", "xTvB")](expect, extra)[format("c", "u03J")](obj["yMNal"]);
    obj[format("d", "pT]E")](expect, extra)[format("e", "V*o$")](obj[format("f", "FVNq")]);
    obj[format("10", "FLhD")](expect, extra)[format("11", "FvA[")](obj[format("12", "Bajo")]);
    obj[format("13", "HkG[")](expect, extra)["toHaveProperty"](obj[format("14", "z[Fg")]);
    expect(extra)["toHaveProperty"]("screenWidth");
    expect(extra)[format("15", "hvN!")](format("16", "5wE%"));
    expect(extra)[format("17", ")WOL")](obj["bAWrJ"]);
    obj[format("18", "I%Ku")](expect, extra)["toHaveProperty"](obj["Mpewm"]);
    expect(extra)["toHaveProperty"](format("19", "b5BZ"));
    expect(extra)["toHaveProperty"](obj["xnGoj"]);
    obj["jfnDz"](expect, extra)[format("1a", "FLhD")](obj["isiiZ"]);
    expect(extra)["toHaveProperty"](obj[format("1b", "Fgwo")]);
    expect(extra)[format("11", "FvA[")](obj[format("1c", "Hmex")]);
    obj[format("1d", "ucEs")](expect, extra)["toHaveProperty"](obj[format("1e", "HkG[")]);
  });
  test(obj["pKmuj"], () => {
    var zlib = {
      "eAZoU" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      }
    };
    const result = jest["fn"]();
    const bytesEncodedCount = jest["fn"]();
    expect[format("1f", "t#VF")](3);
    return c[format("20", "P!hU")]({
      "success" : result,
      "complete" : bytesEncodedCount
    })[format("21", "LOw1")]((done) => {
      zlib[format("22", "u03J")](expect, result[format("23", "gBMA")]["calls"][format("24", "FVNq")])["toBe"](1);
      expect(bytesEncodedCount[format("25", "[8cF")]["calls"][format("26", "u03J")])[format("27", "j&Zl")](1);
      zlib[format("28", "X474")](expect, done)[format("29", "4JJe")](c[format("2a", "BzAh")]());
    });
  });
});

