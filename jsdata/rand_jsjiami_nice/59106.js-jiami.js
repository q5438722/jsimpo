'use strict';
var vip = "vip.v6";
var _0x237d = [vip, "EMKvKWx8", "wqjCncO0wojChEU=", "VsO/wrvCs8KiZ8ObwpDDgg==", "WcOKwpfDqMKb", "w5/DucK8", "c8KXw4TCicOt", "wrfDnkxfaQ==", "EsOlwpgbw7U=", "wrfDnltbOQ==", "wqjCl8O9", "MsO1Ejx4", "wpzDs3pTbw==", "wrrDpVlmIMKnb8Oqwphyw5TCtQ==", "XRPClsKIP8KEw5vCjMOOSlbChg==", "woY+cEkuwoUGwoE=", "G8KWbg==", "wrXCmsONwoPCmw==", "PyTDtx3CsA==", "w714wqLCmA==", "BsKFwoNWwpo=", "worCsMOPw7U+wq8=", "wp3Dr1dmKsKuRMOt", "wogoZ005woMNwoo=", "wrrDpVhjIcKsVcO6wqF1w4LCsw==", "Y8O5ScO7", "XsOfwojDtcOAYhXDg8ODZsKjwpIJcjodej/Co1FzQ8OiAWTCg8KqacO7wqnCq1rCp8Oww44sLg==", 
"F8OSOiNV", "wpDCncOpwpvCgw1ral5OIcOUZcK+wpvDicKrwr7DohHChsO8VnrCoBXCmlhCwoQjw7zCj0QJHcKEwoLDvA==", "w47DmCQEw5zCvMK0wrDCpg==", "aMOkCcO2", "FsKdbU1xXCV2LMOQdg==", "DcOMwqLCkMKlacK7wqgY", "T8K5DMKgwqDClCo=", "WiYdw6/CnA==", "LyLDhDfCrhZZw6lJWR4=", "dCrCr2ZWccKG", "EsKBeWR2Rgdx", "dcOVwqQ+", "w47DjDAow5/CqMKPwq3Chl3Djl7Dvw==", "OinDoQPCqRlD", "EMKzwrVTwo1j", "w7vDjEvCm8Oo", "IiPDjhbCrxA=", "c1zDssKSJMOtN8KSPw==", "PsKbw5LCvMOyfAfCvA==", "bsOyTMOMw601wrYcAg==", "woPDj0vDucKJHsKxw58BUBnCoDAFPsOrH8O+FA==", 
"w7A9w4E6wp7CjCzDiTg=", "woV6GQcdw6xofw==", "IMO/ak/CucON", "QcKXw7/Dq8Ocw78Zwpg=", "YMO4eMO+w7s0wroI", "QAXDtw==", "TMKAw5/CvMOew5bCtg==", "S8KrCcKOwrrCkScW", "WA/Do2vCux3CtsO0w6hZw6orw6LDgVTCqQANVRvDncO1w6jCpcKBw7c=", "KcOEw77Dh8KKQ1RFXsO8FcKgRCrDt1V7w6Uowqo2wqrCj8OYw7rCj8KDT2BcwrQ+", "d8KawqzDoMKcZlvDn8OVZcKzwoMSIA==", "wrg6wojDuH1hACJN", "wogoYw==", "X8O3XcOsw6sjw78DGMKtwoTDpEbCsEvDnsKqJcK5", "wrTCmcOowo7CnV4=", "wpI8woE=", "vipyMhV.v6VnNMzNDbFmJ=="];
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
          if (value && str["replace"](/[yMhVVnNMzNDbFmJ=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662088;
  };
  return fn(++count, long) >> count ^ long;
})(_0x237d, 339, 86784);
var _0x54a5 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x237d[c];
  if (_0x54a5["fBlObf"] === undefined) {
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
    _0x54a5["WFExvi"] = testcase;
    _0x54a5["KpTFWz"] = {};
    _0x54a5["fBlObf"] = !![];
  }
  var e = _0x54a5["KpTFWz"][c];
  if (e === undefined) {
    if (_0x54a5["QtNaAK"] === undefined) {
      _0x54a5["QtNaAK"] = !![];
    }
    x = _0x54a5["WFExvi"](x, alpha);
    _0x54a5["KpTFWz"][c] = x;
  } else {
    x = e;
  }
  return x;
};
utils[_0x54a5("0", "scAm")](_0x54a5("1", "sNai"));
let {
  session : session,
  contextGroup : contextGroup,
  Protocol : Protocol
} = InspectorTest[_0x54a5("2", "6Pt%")](_0x54a5("3", "e!UD"));
var builder = new WasmModuleBuilder;
var imported_idx = builder[_0x54a5("4", "heQr")]("xxx", _0x54a5("5", "9aZX"), kSig_v_v);
var call_imported_idx = builder[_0x54a5("6", "5d6A")](_0x54a5("7", "JWn^"), kSig_v_v)[_0x54a5("8", "sOlG")]([kExprCallFunction, imported_idx])[_0x54a5("9", "TRBf")];
var sig_index = builder["addType"](kSig_v_v);
builder[_0x54a5("a", "3mlr")]("main", kSig_v_v)[_0x54a5("b", "4Uko")]([kExprBlock, kWasmVoid, kExprI32Const, 0, kExprCallIndirect, sig_index, kTableZero, kExprEnd])[_0x54a5("c", "5d6A")](_0x54a5("d", "Bi0c"));
builder[_0x54a5("e", "heQr")]([call_imported_idx]);
var module_bytes = builder[_0x54a5("f", "3mlr")]();
function testFunction(window) {
  function call_debugger() {
    debugger;
  }
  var resizerProcessor = {
    "aKstt" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    }
  };
  var convertBuffer = new ArrayBuffer(window[_0x54a5("10", "*V%Y")]);
  var ba = new Uint8Array(convertBuffer);
  var e = 0;
  for (; resizerProcessor[_0x54a5("11", "b^q]")](e, window[_0x54a5("12", "3mlr")]); e++) {
    ba[e] = window[e] | 0;
  }
  var fa = new WebAssembly["Module"](convertBuffer);
  var rec = new WebAssembly["Instance"](fa, {
    "xxx" : {
      "func" : call_debugger
    }
  });
  rec["exports"]["main"]();
}
contextGroup[_0x54a5("13", "CM3M")](testFunction[_0x54a5("14", "hklb")]());
contextGroup[_0x54a5("15", "scAm")](_0x54a5("16", "xKL7") + JSON[_0x54a5("17", "Wgdt")](module_bytes));
Protocol[_0x54a5("18", "]cu2")][_0x54a5("19", "!aVR")]();
Protocol[_0x54a5("1a", "OGov")][_0x54a5("1b", "scAm")](handleDebuggerPaused);
InspectorTest[_0x54a5("1c", "wiM7")]("Check that inspector gets wasm bytecode");
Protocol[_0x54a5("1d", "yvjs")][_0x54a5("1e", "sOlG")]({
  "expression" : _0x54a5("1f", "wiM7")
});
async function handleDebuggerPaused(message) {
  async function next(i, data) {
    if (data["error"]) {
      InspectorTest[_0x54a5("29", "qbda")](data);
    }
    var _0x5366b9 = data["result"]["scriptSource"];
    var text = counts[i]["location"]["lineNumber"];
    if (_0x5366b9) {
      var data = _0x5366b9[_0x54a5("2a", "sNai")]("\n")[text];
      InspectorTest[_0x54a5("2b", "4fPp")](self[_0x54a5("2c", "yvjs")]("[" + i + "] ", data));
    } else {
      if (self[_0x54a5("2d", "rYNB")](self[_0x54a5("2e", "j^dy")], self[_0x54a5("2f", "fUW*")])) {
        view[i] = bytes[i] | 0;
      } else {
        if (text != 0) {
          InspectorTest[_0x54a5("30", "e!UD")](self[_0x54a5("31", "6Pt%")](self[_0x54a5("32", "rYNB")], text));
        }
        let type = counts[i]["location"][_0x54a5("33", "fUW*")];
        let target = InspectorTest[_0x54a5("34", "@X2w")](data["result"][_0x54a5("35", "&#CY")]);
        InspectorTest[_0x54a5("36", "5d6A")](self[_0x54a5("37", "e!UD")](self[_0x54a5("38", "3mlr")](self["qbWlk"]("[" + i, self["RGKkt"]), type), _0x54a5("39", "uUZW")) + target[type]["toString"](16));
      }
    }
  }
  var self = {
    "mbuAZ" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "aaUid" : function(value, joiner) {
      return value !== joiner;
    },
    "nTnHt" : "hGtcC",
    "VSImY" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "JLceb" : _0x54a5("20", "15ua"),
    "qbWlk" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "RGKkt" : _0x54a5("21", "sNai"),
    "alIBx" : "Number of frames: ",
    "zSXbc" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "zYWBZ" : _0x54a5("22", "FTWw")
  };
  InspectorTest[_0x54a5("23", "&#CY")](_0x54a5("24", "scAm"));
  var counts = message[_0x54a5("25", "e!UD")]["callFrames"];
  InspectorTest[_0x54a5("26", "FTWw")](self[_0x54a5("27", "mbAn")](self["alIBx"], counts[_0x54a5("28", "e!UD")]));
  for (let i = 0; self[_0x54a5("3a", "*V%Y")](i, counts[_0x54a5("3b", "](m4")]); i++) {
    result = await Protocol[_0x54a5("3c", "fUW*")]["getScriptSource"]({
      "scriptId" : counts[i][_0x54a5("3d", "&#CY")]["scriptId"]
    });
    await next(i, result);
  }
  InspectorTest["log"](self["zYWBZ"]);
  InspectorTest[_0x54a5("3e", "fUW*")]();
}
;
