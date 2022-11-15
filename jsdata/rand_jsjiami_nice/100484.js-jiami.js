'use strict';
var __decorate = "vip.v6";
var uriParams = [__decorate, "wqnDrsKgw6cp", "w7UVO8KvUHc=", "CcOGw6nClxYyek8Ww63CrA==", "L8KXA8KQWA==", "wrvDjMK1TxBb", "w6LDp8OlNlzDoTggwpfDoD08", "dcKFw5vDv8OswrY=", "fMOdw7/DkhUtw53Dn8Omw6IUwoM=", "bsKyTMOnUHDCmsKcwqQ=", "WMKhETlbw4HDnX3Cpw==", "woEUwqzDosKOwrjDlA==", "Pvips.ovWsF6QBhwmIEkNer=="];
(function(obj, count, size) {
  var fn = function(url, type, href, elem, key) {
    type = type >> 8;
    key = "po";
    var str = "shift";
    var method = "push";
    if (type < url) {
      for (; --url;) {
        elem = obj[str]();
        if (type === url) {
          type = elem;
          href = obj[key + "p"]();
        } else {
          if (type && href["replace"](/[PsoWsFQBhwmIEkNer=]/g, "") === type) {
            obj[method](elem);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661652;
  };
  return fn(++count, size) >> count ^ size;
})(uriParams, 208, 53248);
var p = function(i, array) {
  i = ~~"0x"["concat"](i);
  var key = uriParams[i];
  if (p["QeUVUd"] === undefined) {
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
    p["uSowYL"] = testcase;
    p["mCzgbg"] = {};
    p["QeUVUd"] = !![];
  }
  var currentDataObj = p["mCzgbg"][i];
  if (currentDataObj === undefined) {
    if (p["uGUtkY"] === undefined) {
      p["uGUtkY"] = !![];
    }
    key = p["uSowYL"](key, array);
    p["mCzgbg"][i] = key;
  } else {
    key = currentDataObj;
  }
  return key;
};
import "../external/webL10n/l10n.js";
import{
  fixupLangCode as fixupLangCode,
  getL10nFallback as getL10nFallback
}from "./l10n_utils.js";
const _WHEN_DEFAULT = document[p("0", "4V62")];
class QuickBase {
  constructor(callback) {
    var msg = {
      "tiZWC" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "lpaZe" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      }
    };
    this[p("1", "mPaJ")] = callback;
    this[p("2", "LO%@")] = new Promise((echo, canCreateDiscussions) => {
      _WHEN_DEFAULT[p("3", "Xf4r")](msg[p("4", "[bXR")](fixupLangCode, callback), () => {
        msg["tiZWC"](echo, _WHEN_DEFAULT);
      });
    });
  }
  async["getLanguage"]() {
    const l10n = await this[p("5", "ql!u")];
    return l10n["getLanguage"]();
  }
  async[p("6", "Em6D")]() {
    const msg = await this[p("7", "4R08")];
    return msg[p("8", "*7DT")]();
  }
  async["get"](env__3090, name__2999 = null, module_name__3016 = getL10nFallback(env__3090, name__2999)) {
    const B2992 = await this["_ready"];
    return B2992["get"](env__3090, name__2999, module_name__3016);
  }
  async[p("9", "[N)k")](aBody) {
    const c = await this["_ready"];
    return c[p("a", "I914")](aBody);
  }
}
export{
  QuickBase as GenericL10n
};

