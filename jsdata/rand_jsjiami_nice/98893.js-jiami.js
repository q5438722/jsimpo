'use strict';
var vip = "vip.v6";
var _0x51bd = [vip, "N3jCiRcOw67Dhiske19Ce8KFw6fDmmnCrsKEJsK5HA==", "wp/DtDM=", "MULDhQURwoM7Aw==", "wrUEw4HDkMKPwpDCs8Ouw6h6K8KGw6Y=", "wp3CpcK6VwI7w5IFUg==", "wqM2w7DCmcOawqPCucO5w6hgHsKfw6DDkA==", "YCXCsFrDqWHDtARHw73DoQ==", "ClV9wojCpsOGTcO3b8Kuw6vCuWLCmA7CosKQwqpV", "GMK2wowlw61jH8OMJsOJw4UC", "bsKCwoZZ", "w6wQOE9ew67DqcKkK8KUDcOww5PDu8OLT8Obw5LDtMOGRsO8IMKbw63DlMOtGcKQHRTDjcKKXg==", "BcOZUA==", "HhMCScKzw7vDvW7CqHJGfSE0woLDjMO3w5vCiSXCgyMnw6nCsUHDowAuE3PDnMKgw7Mza2XCjyk0U8OAw7FKRcO/MTdUXsOLMgg=", 
"w7wwRDgO", "PMKPwrbCjMOx", "RMK6wpAlw6tjGw==", "f8KCwocVw4JHwr/Dsg==", "Gh4PT8Kww7zCtmjCrmRmeS1YwozDhcK+w5HChj3CryA=", "w4bCnl90w47CignDkQ==", "w7kcw4JcGTp0wp9pwoLDqMK1V2JrQcOLwpDDuhRmGsO3wrUh", "cXTCvA8s", "OcK0wp7CnsOn", "w6huf3M7", "UEtaw6TCsQ==", "w5vCp1RFw5XChsONYjLCvw==", "w5LDm8KXwq3DgsOtNQ==", "VcKUO0XCqw3Di8O4woLDozZ5w7LCnMK5wqvDo2vDhzrDoGdCEgAKw4nDtcOzDA==", "w7XDpCRNwpzCsUE5ZQ==", "wqYMK29G", "w79ifUc=", "TsKnwrtZwpFiwqrDqRvCrsOzw6jDukHDrSswXBJtw4oew6EPwrrDhcKPw7nDsMO0", "w4k7wpzDhDk=", 
"VsKtwoxp", "wrRJwo4IBw==", "wp3DrTZPwovCp0NmZsOAwofCi1pOwqbCmsODKC7CjQXDm8ObwqFMwojDmMOUw5vDu8KgHsKAw6M=", "w68xw4xEKA==", "wqMTw40=", "wovCgRXCpBU=", "OMOTaMKVw4bCo0NmflZ9wpvDucKkwrFtd0ctwr5pwr5cwpHDjsKUR8OXwpPDsQ==", "w5DDrRJYwpo=", "wo/CuTDCixY=", "I2VKwqzClQ==", "O3Rtwo/Cpg==", "wpN7wpRfc2rCksKow6XCj8K8", "w5XCrsKcw7hv", "DGLCj8Kodw==", "bMKYwokK", "w6k4RhAXw4o=", "wpHCtztMcsKow6drw4RNJ8KtYMOmKMOfcDjCksOsD8OXwog0w4rCpMKIU8O+UV9fw5vCvDzDlyjDnsKHBVHCr8OpwrhfXcO8w6DDvUrDq8Knwr1Q", "hIrUzvxDipZ.v6uFSekSBPn=="];
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
          if (value && str["replace"](/[hIrUzxDZuFSekSBPn=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662434;
  };
  return fn(++count, long) >> count ^ long;
})(_0x51bd, 242, 61952);
var _0x1a4b = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x51bd[c];
  if (_0x1a4b["JWpEZm"] === undefined) {
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
    _0x1a4b["IaZqBL"] = testcase;
    _0x1a4b["iNKlZE"] = {};
    _0x1a4b["JWpEZm"] = !![];
  }
  var e = _0x1a4b["iNKlZE"][c];
  if (e === undefined) {
    if (_0x1a4b["EkJfBW"] === undefined) {
      _0x1a4b["EkJfBW"] = !![];
    }
    x = _0x1a4b["IaZqBL"](x, alpha);
    _0x1a4b["iNKlZE"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const expect = require(_0x1a4b("0", "&XnY"))[_0x1a4b("1", "D^cR")];
const AwsCompileWebsocketsEvents = require("../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index");
const Serverless = require("../../../../../../../../../../lib/Serverless");
const AwsProvider = require(_0x1a4b("2", "NLZ]"));
describe(_0x1a4b("3", "J[zE"), () => {
  var routes = {
    "CRZab" : _0x1a4b("4", "EPWe"),
    "sigDL" : _0x1a4b("5", "tbja"),
    "sbQgh" : "$disconnect",
    "pprMz" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "wlEzs" : _0x1a4b("6", "i(J$"),
    "sApnp" : _0x1a4b("7", "YhzF"),
    "wHbtt" : _0x1a4b("8", "i(J$"),
    "feImN" : _0x1a4b("9", "BcT*"),
    "qHzOT" : _0x1a4b("a", "^EeX"),
    "wyUAs" : _0x1a4b("b", "h*#5"),
    "oYEWG" : _0x1a4b("c", "&XnY"),
    "OakVa" : ":apigateway:",
    "awoPF" : _0x1a4b("d", "X8KO"),
    "DsSGd" : _0x1a4b("e", "V#Vi"),
    "eoZuR" : _0x1a4b("f", "DD6V")
  };
  let rt;
  routes[_0x1a4b("10", "D^cR")](beforeEach, () => {
    const serverless = new Serverless;
    serverless["setProvider"](routes[_0x1a4b("11", "jRmq")], new AwsProvider(serverless));
    serverless[_0x1a4b("12", "h*#5")][_0x1a4b("13", "&XnY")]["compiledCloudFormationTemplate"] = {
      "Resources" : {}
    };
    rt = new AwsCompileWebsocketsEvents(serverless);
    rt[_0x1a4b("14", "DD6V")] = rt[_0x1a4b("15", "crek")]["naming"][_0x1a4b("16", "g1^[")]();
  });
  it(routes[_0x1a4b("17", "J[zE")], () => {
    rt["validated"] = {
      "events" : [{
        "functionName" : _0x1a4b("18", "jRmq"),
        "route" : routes[_0x1a4b("19", "4k8n")]
      }, {
        "functionName" : "Second",
        "route" : routes[_0x1a4b("1a", "CR7O")]
      }]
    };
    rt["compileIntegrations"]();
    const redir = rt[_0x1a4b("1b", "Xuap")][_0x1a4b("1c", "^OuM")]["provider"][_0x1a4b("1d", "hVpB")][_0x1a4b("1e", "DG]I")];
    routes[_0x1a4b("1f", "X8KO")](expect, redir)["to"][_0x1a4b("20", "4k8n")]["equal"]({
      "FirstWebsocketsIntegration" : {
        "Type" : _0x1a4b("21", "&XnY"),
        "Properties" : {
          "ApiId" : {
            "Ref" : routes["wlEzs"]
          },
          "IntegrationType" : routes[_0x1a4b("22", "dq#E")],
          "IntegrationUri" : {
            "Fn::Join" : ["", [_0x1a4b("23", "h*#5"), {
              "Ref" : routes["wHbtt"]
            }, ":apigateway:", {
              "Ref" : routes[_0x1a4b("24", "3RMo")]
            }, _0x1a4b("25", "DG]I"), {
              "Fn::GetAtt" : [routes[_0x1a4b("26", "g1^[")], _0x1a4b("27", "i(J$")]
            }, routes[_0x1a4b("28", "$(xV")]]]
          }
        }
      },
      "SecondWebsocketsIntegration" : {
        "Type" : _0x1a4b("29", "$cW3"),
        "Properties" : {
          "ApiId" : {
            "Ref" : routes[_0x1a4b("2a", "DG]I")]
          },
          "IntegrationType" : routes[_0x1a4b("2b", "$(xV")],
          "IntegrationUri" : {
            "Fn::Join" : ["", [routes[_0x1a4b("2c", "^EeX")], {
              "Ref" : routes[_0x1a4b("2d", "^EeX")]
            }, routes["OakVa"], {
              "Ref" : _0x1a4b("2e", "3RMo")
            }, routes[_0x1a4b("2f", "bg&@")], {
              "Fn::GetAtt" : ["SecondLambdaFunction", routes["DsSGd"]]
            }, routes[_0x1a4b("30", "UDf8")]]]
          }
        }
      }
    });
  });
});

