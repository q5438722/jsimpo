'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "FsK0NcOxcA==", "PsKBMsOMeg==", "wqTDh2XCn8Ks", "w5pjPsOpwqo=", "w4oLw5PCiB4=", "DMO2wr/Dg8Oq", "X37Ct8OtwoRv", "wrDDty4nw7Ev", "w6/Dn8KHw6HDkg==", "XXnChmp3", "BSFEwoxU", "mvYipc.vt6UPbLVGqRVfaS=="];
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
          if (type && str["replace"](/[mYctUPbLVGqRVfaS=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662217;
  };
  return fn(++count, size) >> count ^ size;
})(match, 313, 80128);
var fn = function(i, args) {
  i = ~~"0x"["concat"](i);
  var value = match[i];
  if (fn["nxmlDr"] === undefined) {
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
    fn["SXpSYA"] = testcase;
    fn["hIBFaj"] = {};
    fn["nxmlDr"] = !![];
  }
  var newVal = fn["hIBFaj"][i];
  if (newVal === undefined) {
    if (fn["uiJkSW"] === undefined) {
      fn["uiJkSW"] = !![];
    }
    value = fn["SXpSYA"](value, args);
    fn["hIBFaj"][i] = value;
  } else {
    value = newVal;
  }
  return value;
};
import{
  navigate as navigate
}from "gatsby";
import{
  put as put,
  takeEvery as takeEvery,
  call as call
}from "redux-saga/effects";
import{
  createFlashMessage as createFlashMessage
}from "../components/Flash/redux";
import{
  getShowCert as getShowCert
}from "../utils/ajax";
import{
  showCertComplete as showCertComplete,
  showCertError as showCertError
}from ".";
function* init({
  payload : {
    username : TOGGLE_LICENSE_MODAL,
    certSlug : TOGGLE_ABOUT_MODAL
  }
}) {
  var c = {
    "iuvHy" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "gmLUa" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "gvWzC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "macOP" : function(require, load, callback) {
      return require(load, callback);
    },
    "OCPGI" : fn("0", "9jGm"),
    "cjGuN" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  try {
    const bBody = yield c["gmLUa"](call, getShowCert, TOGGLE_LICENSE_MODAL, TOGGLE_ABOUT_MODAL);
    const {
      messages : result
    } = bBody;
    if (result && result[fn("1", "qocP")]) {
      for (let i = 0; i < result[fn("2", "U^DC")]; i++) {
        yield put(c[fn("3", "RzM8")](createFlashMessage, result[i]));
      }
      yield c[fn("4", "5AJX")](call, navigate, "/");
      return;
    }
    yield c[fn("5", "@SO0")](put, c["gvWzC"](showCertComplete, bBody));
  } catch (bBody) {
    if (c[fn("6", "7Nx9")] !== "SDuJV") {
      yield c[fn("7", "7Nx9")](put, c[fn("8", "MA*T")](showCertError, bBody));
    } else {
      yield c[fn("9", "!7$s")](put, c[fn("a", "nibP")](showCertError, bBody));
    }
  }
}
function extractPresetLocal(callback) {
  return [takeEvery(callback["showCert"], init)];
}
export{
  extractPresetLocal as createShowCertSaga
};

