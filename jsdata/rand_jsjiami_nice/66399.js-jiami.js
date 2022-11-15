'use strict';
var vip = "vip.v6";
var _0x29e4 = [vip, "w6INMmnChw==", "Y8KIARQd", "wqklw4FFGg==", "woFywp0UD8Olwqk=", "J8Kwd8KyPw==", "WDF9w67Dpw==", "woNiwp4Q", "w5ZhesKr", "EFo4w5/DtQ==", "ACxow7Vy", "wq7DgwpRY2Q=", "E8OGw53CpcOj", "esKew7/Djg3DiQ==", "w70CwqDDoE0=", "RcK4FDIQVMOZUGcR", "DMOja8OLw5sb", "RkjCgzLDmxLDrFdzw53CuMK1wrnDg0HDpsKGR0VRA8OJVHFteMKbGX/DsXg=", "NsOQw77Cv8KDXxDCuSXCkcOiZcKlw4oYe8O2w5rCoEMsw4JXcQ1bS2zDiMK3w6PDuMKFwr4Tw7g=", "wobDgU4Nw4k=", "w7USwqPDoMOk", "aXrDosO/w68=", "G1cmw4zDrQ==", "w5Vge8KqIXc=", "GsONV8OYw6c=", 
"wrvCh8KHwopdwq3Dpg==", "dnPCnwzDpg==", "wr5NwrgNw4rDkl4=", "woR1woIUCg==", "w4UeFFTCocOIw7vCjThsIkvDtsKKw7jCrWwnekPDhG3Dg01hw4PCtWbCscOEJCnDr0onwq/DhwMGw5V7D8Klw5QXamECw7UiwofDj8K5w4bCoFXDlsK3wpE=", "w6nDjHXCqno=", "wrHCm8KowptOwrg=", "PcOmw7rCmcOa", "JGLCisKkwrw=", "w6IewoLDiUE=", "wqPDgzNeVA==", "wrzCu1PChy0=", "S1HDtcOHw60=", "wo86woZjVA==", "cgLDsMOQDgjCmg==", "w5UzwobDug==", "w58nwpTDs8OC", "wrAnwrRaZA==", "w7wrwr1d", "NMOiwrk=", "QmFvEiNzpqDo.THv6hFPdXOx=="];
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
          if (value && str["replace"](/[QmFENzqDoTHhFPdXOx=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662146;
  };
  return fn(++count, long) >> count ^ long;
})(_0x29e4, 310, 79360);
var _0x1916 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x29e4[c];
  if (_0x1916["vkWylz"] === undefined) {
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
    _0x1916["rmIHDb"] = testcase;
    _0x1916["iqIFFJ"] = {};
    _0x1916["vkWylz"] = !![];
  }
  var e = _0x1916["iqIFFJ"][c];
  if (e === undefined) {
    if (_0x1916["oPupec"] === undefined) {
      _0x1916["oPupec"] = !![];
    }
    x = _0x1916["rmIHDb"](x, alpha);
    _0x1916["iqIFFJ"][c] = x;
  } else {
    x = e;
  }
  return x;
};
var bytesToUuid = require("./bytesToUuid");
function uuidToBytes(uuid) {
  var _0x1aa1fa = {
    "zZxLK" : _0x1916("0", "M$*t")
  };
  var bytes = [];
  uuid[_0x1916("1", "BuxU")](/[a-fA-F0-9]{2}/g, function(quantityNeeded) {
    if (_0x1aa1fa[_0x1916("2", "]p)L")] !== _0x1916("3", "jFne")) {
      bytes[_0x1916("4", "BuxU")](parseInt(quantityNeeded, 16));
    } else {
      bytes[_0x1916("5", "^xnp")](parseInt(quantityNeeded, 16));
    }
  });
  return bytes;
}
function stringToBytes(data) {
  var b = {
    "qEOvQ" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "gUdpD" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "gQbmq" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "VmgxD" : _0x1916("6", "FArG")
  };
  data = b["qEOvQ"](unescape, b[_0x1916("7", "jEH7")](encodeURIComponent, data));
  var out = new Array(data[_0x1916("8", "4Az6")]);
  var key = 0;
  for (; b[_0x1916("9", "jDy^")](key, data[_0x1916("a", "LjUy")]); key++) {
    if (b[_0x1916("b", "AF64")] === b["VmgxD"]) {
      out[key] = data[_0x1916("c", "s[!B")](key);
    } else {
      out[key] = data["charCodeAt"](key);
    }
  }
  return out;
}
module["exports"] = function(modelMaskFeature, context, args) {
  var self = {
    "ZmSgG" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "PTVrd" : function(name, initialValue) {
      return name === initialValue;
    },
    "xLAHp" : "gnzus",
    "ywnuV" : function(geom0, geom1) {
      return geom0 && geom1;
    },
    "TFNQk" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "DZXvM" : _0x1916("d", "2KT&"),
    "uGrvV" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "eZNzR" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "UPRPY" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "FZpKX" : _0x1916("e", "83CF"),
    "atTOI" : function(value, joiner) {
      return value !== joiner;
    },
    "wbold" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "AmixU" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "IqEQH" : function(leftDiags, columns) {
      return leftDiags | columns;
    },
    "aeWhC" : function(dest_operand, source_operand) {
      return dest_operand & source_operand;
    },
    "xIrUv" : function(value, joiner) {
      return value !== joiner;
    },
    "ZgVpr" : "NxrPa",
    "IrKXU" : _0x1916("f", "M2HW"),
    "EXtTN" : "6ba7b811-9dad-11d1-80b4-00c04fd430c8"
  };
  var params = function(name, params, data, callback) {
    var inBtn = {
      "zaaaB" : function(progressOld, progressNew) {
        return progressOld < progressNew;
      },
      "ezdIB" : function(data, updates) {
        return self[_0x1916("10", "vheT")](data, updates);
      }
    };
    if (self[_0x1916("11", "k*2I")](self["xLAHp"], self[_0x1916("12", "kFXZ")])) {
      var type = self[_0x1916("13", "FArG")](data, callback) || 0;
      if (self["TFNQk"](typeof name, self["DZXvM"])) {
        name = stringToBytes(name);
      }
      if (self["uGrvV"](typeof params, _0x1916("14", "^xnp"))) {
        params = self[_0x1916("15", "2KT&")](uuidToBytes, params);
      }
      if (!Array[_0x1916("16", "8wxN")](name)) {
        throw self["UPRPY"](TypeError, self[_0x1916("17", "83CF")]);
      }
      if (!Array[_0x1916("18", ")NE]")](params) || self["atTOI"](params["length"], 16)) {
        throw self[_0x1916("19", "BuxU")](TypeError, _0x1916("1a", "A#Tj"));
      }
      var options = self[_0x1916("1b", "%Qht")](args, params[_0x1916("1c", "8wxN")](name));
      options[6] = self[_0x1916("1d", "jDy^")](self[_0x1916("1e", "7WFG")](options[6], 15), context);
      options[8] = self[_0x1916("1f", "AF64")](self[_0x1916("20", "4Az6")](options[8], 63), 128);
      if (data) {
        var i = 0;
        for (; i < 16; ++i) {
          if (self[_0x1916("21", ")u1v")](self[_0x1916("22", "kFXZ")], self[_0x1916("23", ")ll#")])) {
            var B2505 = {
              "gxtBg" : function(require, load, callback) {
                return require(load, callback);
              }
            };
            var B2503 = [];
            uuid[_0x1916("24", "F)QN")](/[a-fA-F0-9]{2}/g, function(env__2757) {
              B2503[_0x1916("25", "k*2I")](B2505["gxtBg"](parseInt, env__2757, 16));
            });
            return B2503;
          } else {
            data[type + i] = options[i];
          }
        }
      }
      return data || self["AmixU"](bytesToUuid, options);
    } else {
      var d = 0;
      for (; inBtn[_0x1916("26", "k*2I")](d, 16); ++d) {
        data[inBtn[_0x1916("27", ")ll#")](type, d)] = options[d];
      }
    }
  };
  try {
    params[_0x1916("28", "n*J!")] = modelMaskFeature;
  } catch (_0x132adf) {
  }
  params[_0x1916("29", "nvv@")] = self[_0x1916("2a", "A#Tj")];
  params["URL"] = self[_0x1916("2b", "s[!B")];
  return params;
};

