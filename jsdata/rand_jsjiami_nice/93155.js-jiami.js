'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "w7HDvigyfg==", "w6vCvsKfw5U6wp3CtGrDvMOZZ8K4Y8OV", "wqlkSnbCknzDtw==", "RCLCiR3CicOF", "wqTDm1Ymw5hA", "w4YzwqcTCMKv", "EDvDp1XDlsOoMA==", "UDDDnMOW", "RCLCiRjCicOVTXTCm8O9E3Q=", "w4vDtcO2GzDCmyo=", "w7XDgAcfYg==", "FkfCmQkfGw==", "w4TCmXMGFmI=", "wrPCtC7DmRLDiQ==", "w5fDn8KZw4vCkg==", "aB7DhsOOdA==", "wovCvAXDjig=", "L8O6wqA=", "wqhuTHjClmY=", "C8KOdsOKW1RmHA==", "LcO2wqXCusKzCwnDqsKFwpjCmMKod3A=", "T8KyWkQRw48=", "wrzDrsKffBFs", "w4XDu8O3CDDClDfDiQ==", "w5rCvXMJIQ==", 
"ZsOjWGHCiw==", "IMOodcO8wo0=", "BcKGa8O4f1x0HA==", "Hi3DlnPDg8Ol", "wrLChy3Ck2Q=", "w6vCvsKfw58zwog=", "wrhuUVTCm2s=", "w7PDomTCgsOUwrk=", "HinCsn0Rwo7DhTo=", "w4I+wrI2CsKzVcKxdXXCnWbDn1Y=", "LzfCiC8reA==", "KMONa8Kjw7JD", "SldtwrFsw5TCqcOH", "wrLCmSI=", "EEbCiQ==", "BMKKccOXX0E=", "wqVJCglgwoU=", "w6nDsgc1Sg==", "w4LDjcOlLAY=", "vaaGOeirp.v6CLNeEfDhRuRH=="];
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
          if (type && str["replace"](/[aaGOerCLNeEfDhRuRH=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662391;
  };
  return fn(++count, size) >> count ^ size;
})(match, 218, 55808);
var m = function(i, value) {
  i = ~~"0x"["concat"](i);
  var x = match[i];
  if (m["zBXYfn"] === undefined) {
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
    m["JwUSeV"] = testcase;
    m["yNtOPe"] = {};
    m["zBXYfn"] = !![];
  }
  var tmp3 = m["yNtOPe"][i];
  if (tmp3 === undefined) {
    if (m["VnZBSg"] === undefined) {
      m["VnZBSg"] = !![];
    }
    x = m["JwUSeV"](x, value);
    m["yNtOPe"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
import _0x540687 from "../../../data-structures/priority-queue/PriorityQueue";
export default function check(name, value) {
  var shortcuts = {
    "azkoZ" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "SQLKr" : function(value, joiner) {
      return value !== joiner;
    },
    "FPxGq" : m("0", "hNfj"),
    "HbxEe" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "pzTka" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "IzLqn" : function(name, initialValue) {
      return name === initialValue;
    },
    "HAvtY" : m("1", "BC)Z"),
    "yAtDR" : function(name, initialValue) {
      return name === initialValue;
    },
    "POwsQ" : m("2", "hNfj")
  };
  const distances = {};
  const p = {};
  const payloadKeyObject = {};
  const row = new _0x540687;
  name[m("3", "j*r5")]()[m("4", "mU!4")]((row) => {
    distances[row[m("5", "!a%n")]()] = Infinity;
    payloadKeyObject[row[m("6", "X(u]")]()] = null;
  });
  distances[value["getKey"]()] = 0;
  row["add"](value, distances[value[m("7", "HHIw")]()]);
  for (; !row[m("8", "D6v@")]();) {
    const embed = row[m("9", "nRsR")]();
    embed[m("a", "!a%n")]()[m("b", "BC)Z")]((value) => {
      if (shortcuts[m("c", "hNfj")]("FBztF", shortcuts["FPxGq"])) {
        if (!p[value[m("d", "g]V4")]()]) {
          const fileMap = name["findEdge"](embed, value);
          const selection = distances[value["getKey"]()];
          const s_instr = shortcuts["HbxEe"](distances[embed[m("e", "1JH!")]()], fileMap[m("f", "5gof")]);
          if (shortcuts["pzTka"](s_instr, selection)) {
            if (shortcuts[m("10", "RC4D")](shortcuts[m("11", "nRsR")], m("12", "5gof"))) {
              row[m("13", "P[2r")](value, distances[value["getKey"]()]);
            } else {
              distances[value[m("14", "mU!4")]()] = s_instr;
              if (row[m("15", "Gtg[")](value)) {
                row[m("16", "P[2r")](value, distances[value[m("17", "@eaf")]()]);
              }
              payloadKeyObject[value[m("18", "DM0*")]()] = embed;
            }
          }
          if (!row[m("19", "BC)Z")](value)) {
            if (shortcuts[m("1a", "1JH!")](m("1b", "$7dh"), shortcuts[m("1c", "OdTF")])) {
              const r = name[m("1d", "Gtg[")](embed, value);
              const HUE_OUTER_RADIUS = distances[value[m("1e", "D6v@")]()];
              const distance = shortcuts[m("1f", "eG@9")](distances[embed[m("20", "j*r5")]()], r[m("21", "mU!4")]);
              if (distance < HUE_OUTER_RADIUS) {
                distances[value[m("22", "a6YX")]()] = distance;
                if (row[m("23", "VPH6")](value)) {
                  row[m("24", "HHIw")](value, distances[value[m("25", "7!Ys")]()]);
                }
                payloadKeyObject[value[m("26", "M8tJ")]()] = embed;
              }
              if (!row[m("27", "b$#f")](value)) {
                row[m("28", "eG@9")](value, distances[value[m("d", "g]V4")]()]);
              }
            } else {
              row[m("29", "g]V4")](value, distances[value[m("2a", "Gtg[")]()]);
            }
          }
        }
      } else {
        distances[value[m("22", "a6YX")]()] = distanceToNeighborFromCurrent;
        if (row["hasValue"](value)) {
          row["changePriority"](value, distances[value[m("18", "DM0*")]()]);
        }
        payloadKeyObject[value["getKey"]()] = embed;
      }
    });
    p[embed[m("2b", "G2@c")]()] = embed;
  }
  return {
    "distances" : distances,
    "previousVertices" : payloadKeyObject
  };
}
;
