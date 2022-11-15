'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "M8O+K8OZIw==", "woBoBcOZwp0=", "eV4iTxs=", "acKednXCtsObDMKrwqtPw5M=", "UcKow5XDgWw=", "wqrDiCjCpEI=", "S8KewpExwqfCu8Kgfh7DrcOCdEh8F8KdcC9RSMKtNWxcYcO5wrZoSjEQa8OGdw==", "W8KLw7TDvnA=", "TmXCgcO+wr4=", "cMKFwoEfew==", "wpoaw75wLcKgwqQEG1k2JcO5A2AGw7hjwpJsOjQDVz4QLEcT", "wqs7w7JzJw==", "wqnDoGbCsMKeOMKnw7fCnMOBw6M=", "wpBiHMOEwoA=", "KMOBSg89", "fgbCtsK8eg==", "wokAw51pwqE=", "wrrDrWDCq8KOOMKww7XChcOdw6rDg13Dlg0Q", "CClMwpvCilhbw4xIw4vDinpYw77DhsOqw6HCiQ==", "Ph7ChsKlwoU=", 
"w55vw75aRiDCshZCwppDO8KHw61/Gn4/w41hwpLDrMOXRnQVw5NJBA==", "VMOlc8KxNA==", "wosAw6p3wqg=", "GR/Cu8KEwrw=", "wqRwXX3CtWnCig==", "SMKGwpY3wr7CvMO+LEHDosOdf040CcKFKDxBVg==", "w5VgwqfDvQ==", "M8Odbg4GwqvCjVPDgyhCHcOOSCzCsMKyUcOfw7rCsMOVw7TCsVYQRsOLAXgwwpnDiB3DuQJtIw==", "JAMNIMO/PX4zwonDoMOkJ2TDi8KSBC57w73Dr8KtwrLCjMOiwrzDicOXwpM=", "SsK0w7HDgFfDhcKqw6/Co8KmIhQyMi7DtMOSw5FDw6RTw4AVw4/Cg3HDuBgLw7fDl8KHAcODwrgyVsKdwqHDmA==", "woxhw7DCnyo=", "acKvw5zDmW3DlcKheMKJw5XDiBvCi8KHwqvCplLCmRLDnFrDrUQxCxUCw7XCoA==", 
"wrp8UUDDsTRWw4wrwrbCsmRIw7JtL8KKw4jCvsK/wpU=", "GgPDhnYrSkfDoyvCq2YkwobDmcOp", "wp9jwrHCthkXbETDi8OCXRXCiMOuM8Onw7XCqw==", "dsKXwoA/wq/DtcKfLUbDvMOMaEU=", "wpg/w5hXwobDl8KzwrbDuEDDhQLCuMOYwpLDs2HDqSbCuQ==", "w6drwqzCpSIpwq3CjsOZXcKzwrsmw5dRYMOcw6/CvcOTw4XCgcK3w5B6w4xlXg1FfcOow4PDig==", "wrvDowsiQcKPwqxXZcKobsK8L8KpwrsEC1k=", "w4JxwrgCw51hwpk=", "wrZIw60pwp0=", "A8OFw5RPPg==", "KwxPw4bCq8O5aiMxYcO8w61vZ1HCvUYHw5YNdcORPMOKLMOkGMKp", "w5Ezw7jCt8OE", "Iyl6UBQ=", "Pj7CsMK2wrw=", "NsORw6xyEQ==", "cMK8wqIw", 
"w7vCgsKkw4bDhg==", "w4htw5p3dQ==", "viVpB.v6PnDtTxWCdmmwQRK=="];
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
          if (type && str["replace"](/[VBPnDtTxWCdmmwQRK=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661683;
  };
  return fn(++count, size) >> count ^ size;
})(match, 375, 96E3);
var get = function(c, alternate) {
  c = ~~"0x"["concat"](c);
  var x = match[c];
  if (get["TrzduL"] === undefined) {
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
    get["AMwpRL"] = testcase;
    get["hajsCt"] = {};
    get["TrzduL"] = !![];
  }
  var e = get["hajsCt"][c];
  if (e === undefined) {
    if (get["jXLgsn"] === undefined) {
      get["jXLgsn"] = !![];
    }
    x = get["AMwpRL"](x, alternate);
    get["hajsCt"][c] = x;
  } else {
    x = e;
  }
  return x;
};
import{
  hasPermissions as hasPermissions
}from "strapi-helper-plugin";
import _0x231265 from "../getPluginSectionLinks";
jest["mock"](get("0", "7yvY"));
describe("getPluginSectionLinks", () => {
  var data = {
    "iakoQ" : "plugins::content-manager.explorer.create",
    "NHCjO" : get("1", "4RYU"),
    "IdNxf" : get("2", "99x1"),
    "fnQJZ" : get("3", "qhYM"),
    "wDOdI" : get("4", "t)an"),
    "FZkHK" : get("5", "#Lp1"),
    "ipLQI" : get("6", "4%OM"),
    "kpQfR" : "content-type-builder.plugin.name",
    "VPrUV" : get("7", "N^op"),
    "aSpYN" : get("8", "n](0"),
    "mxgYT" : get("9", "#Lp1"),
    "nMPqr" : get("a", "7yvY"),
    "NXNJK" : get("b", "sTFV"),
    "AMydc" : "plugins::upload.assets.update",
    "vpqYc" : get("c", "@unN"),
    "cSGGG" : function(require, load, callback) {
      return require(load, callback);
    },
    "iYskr" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Sziwu" : "creates an array of boolean corresponding to the permission state"
  };
  data["iYskr"](beforeEach, () => {
    hasPermissions[get("d", "H*LO")](() => {
      return Promise[get("e", "#r9r")](!![]);
    });
  });
  afterEach(() => {
    jest["resetAllMocks"]();
  });
  data[get("f", "wNSL")](it, data[get("10", "es[j")], async() => {
    const extraOptions = [{
      "id" : 458,
      "action" : "plugins::i18n.locale.read",
      "subject" : null,
      "properties" : {},
      "conditions" : []
    }, {
      "id" : 459,
      "action" : data["iakoQ"],
      "subject" : get("11", "9845"),
      "properties" : {
        "fields" : [data["NHCjO"]],
        "locales" : ["en"]
      },
      "conditions" : []
    }, {
      "id" : 460,
      "action" : data[get("12", "D#Nx")],
      "subject" : data["fnQJZ"],
      "properties" : {
        "fields" : [data[get("13", "JlfP")]],
        "locales" : ["en"]
      },
      "conditions" : []
    }, {
      "id" : 461,
      "action" : data[get("14", "KE^T")],
      "subject" : data[get("15", "es[j")],
      "properties" : {
        "fields" : [get("16", "T4hB")],
        "locales" : ["fr-FR"]
      },
      "conditions" : []
    }, {
      "id" : 462,
      "action" : data[get("17", "OLm@")],
      "subject" : data[get("18", "z)b^")],
      "properties" : {
        "fields" : [data[get("19", "JMoJ")]],
        "locales" : [data[get("1a", "rXZM")]]
      },
      "conditions" : []
    }];
    const a3 = [{
      "destination" : data[get("1b", "%UM)")],
      "icon" : get("1c", "Atcn"),
      "label" : {
        "id" : data[get("1d", "t)an")],
        "defaultMessage" : data[get("1e", "QFYm")]
      },
      "permissions" : [{
        "action" : get("1f", "7yvY"),
        "subject" : null
      }],
      "isDisplayed" : ![]
    }, {
      "destination" : data[get("20", "t)an")],
      "icon" : "cloud-upload-alt",
      "label" : {
        "id" : data[get("21", "qS([")],
        "defaultMessage" : data["nMPqr"]
      },
      "permissions" : [{
        "action" : data[get("22", "T4hB")],
        "subject" : null
      }, {
        "action" : get("23", "noj8"),
        "subject" : null
      }, {
        "action" : data[get("24", "noj8")],
        "subject" : null
      }],
      "isDisplayed" : ![]
    }];
    const postDateGmt = [{
      "destination" : data["ipLQI"],
      "icon" : get("25", "BDUl"),
      "isDisplayed" : ![],
      "label" : {
        "defaultMessage" : data[get("26", "rXZM")],
        "id" : data[get("27", "99x1")]
      },
      "permissions" : [{
        "action" : data[get("28", "6&fo")],
        "subject" : null
      }]
    }, {
      "destination" : data[get("29", "sTFV")],
      "icon" : get("2a", "BDUl"),
      "isDisplayed" : ![],
      "label" : {
        "defaultMessage" : data["nMPqr"],
        "id" : get("2b", "DwJT")
      },
      "permissions" : [{
        "action" : data[get("2c", "N37o")],
        "subject" : null
      }, {
        "action" : get("2d", "z)b^"),
        "subject" : null
      }, {
        "action" : data[get("2e", "xouG")],
        "subject" : null
      }]
    }];
    const tokens = await data[get("2f", "sTFV")](_0x231265, extraOptions, a3);
    data[get("30", "N37o")](expect, tokens)[get("31", "vH5I")](postDateGmt);
  });
});

