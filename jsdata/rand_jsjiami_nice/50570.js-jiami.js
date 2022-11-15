'use strict';
var vip = "vip.v6";
var _0x298e = [vip, "eiQPd8KX", "dUd3wohsMQfCnMOAwrLDpnpwT8Kq", "IHLCgnjDrMKyw4E=", "wqjCsSrDog==", "B8Ovwpok", "IHEFHA==", "w6vDtcKsw7DCqz4=", "wrXDhcK7wr5W", "V21TaVs=", "w5t3w7LDhHY=", "FMKGw7BR", "rsvZipwQ.Uv6lCXYRLZLLYZb=="];
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
          if (value && str["replace"](/[rsZwQUlCXYRLZLLYZb=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662031;
  };
  return fn(++count, long) >> count ^ long;
})(_0x298e, 135, 34560);
var _0x53ab = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x298e[a];
  if (_0x53ab["gOIizk"] === undefined) {
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
    _0x53ab["XTexrB"] = testcase;
    _0x53ab["saEnGk"] = {};
    _0x53ab["gOIizk"] = !![];
  }
  var A = _0x53ab["saEnGk"][a];
  if (A === undefined) {
    if (_0x53ab["YZzvDe"] === undefined) {
      _0x53ab["YZzvDe"] = !![];
    }
    value = _0x53ab["XTexrB"](value, opt_max);
    _0x53ab["saEnGk"][a] = value;
  } else {
    value = A;
  }
  return value;
};
FullCalendar["globalLocales"]["push"](function() {
  var pages = {
    "OjDOn" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "cwfti" : _0x53ab("0", "q6QD"),
    "eyIBJ" : _0x53ab("1", "XA%O"),
    "irXPD" : _0x53ab("2", "FjTU"),
    "vCJep" : "Settimana",
    "LQGaw" : "Giorno",
    "vSNdf" : _0x53ab("3", "$x2a")
  };
  "use strict";
  var ret = {
    "code" : "it",
    "week" : {
      "dow" : 1,
      "doy" : 4
    },
    "buttonText" : {
      "prev" : pages[_0x53ab("4", "YYMi")],
      "next" : pages[_0x53ab("5", "zlkW")],
      "today" : pages[_0x53ab("6", "zQop")],
      "month" : _0x53ab("7", "ZhpL"),
      "week" : pages[_0x53ab("8", "gHTP")],
      "day" : pages["LQGaw"],
      "list" : pages["vSNdf"]
    },
    "weekText" : "Sm",
    "allDayText" : _0x53ab("9", "^*8E"),
    "moreLinkText" : function(mmCoreSplitViewBlock) {
      return pages["OjDOn"](_0x53ab("a", "Vg[3"), mmCoreSplitViewBlock);
    },
    "noEventsText" : "Non ci sono eventi da visualizzare"
  };
  return ret;
}());

