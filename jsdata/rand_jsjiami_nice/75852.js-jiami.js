'use strict';
var ControlTypeGroup = "vip.v6";
var fixtures = [ControlTypeGroup, "AXfDqsO8wrnDljM=", "fhjDsSo=", "TcKXwqw=", "YATDpcKrBg7DiVhVTlRAw4tjwpLCrMKuwpXDm8KdVsOewpc=", "w5E3OF/CucK5wpHCnhbDo1kqwqrCt8OqMMKxwqI=", "w4HCgsOawrvCp8OkWMOkw5dJB8Klw4pew4MEBG9mE8KGVnnDqGk=", "fcO6TsO7w6bCvkjCs8KCw7DDoX8vwqQhdhbCosOEw4vDn8OJT8KOwqU=", "VMOvw5w9w6liw4bCv2gncMKNawdMNsK4w7k/wqhqw7x8FnbCk0IFcMOiwo8JwqNSw6VmIX59", "VMOswo12dBMFZkXDhB8SBVvCohZ5fQTCnMO3CsKs", "RMK5wqYnPsOSw6w8wosmwoJIw6okaA==", "DSjDh8KjwqY=", "w6crM0vCqcKDwpDCkAjDvU8YwrLCncOr", "E8KmNMK/w4oYc8OHLiUuIMKRbcKt", 
"Q8OLw4Mww6s=", "w4LDh8KdK8Kcwp3ClHtWwrAdwoXDjgNE", "w4ArDBbDn8Kbw7HCmklDOcKYWk7CsA==", "f8OgGmwbw40rRgBew5TDkcKlA8KTCUJ0EcK4OTTDhWoHADPDtsKZGsKiw5ZDw5nCvQtnE0TDsQ==", "GcOsNsOKDQ==", "w5cTd8OjwrNyJlI1w5jDglzDk0LDiw==", "GG7DrcO4wqPDgAAbYsOHX8Oiw47Dhzo=", "w5ZoakJF", "vlKBipG.vT6FNXgbPnNgMfjt=="];
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
          if (type && str["replace"](/[lKBGTFNXgbPnNgMfjt=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662868;
  };
  return fn(++count, size) >> count ^ size;
})(fixtures, 277, 70912);
var update = function(key, context) {
  key = ~~"0x"["concat"](key);
  var data = fixtures[key];
  if (update["TIQnuA"] === undefined) {
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
    update["rygrRv"] = testcase;
    update["MyrnNW"] = {};
    update["TIQnuA"] = !![];
  }
  var type = update["MyrnNW"][key];
  if (type === undefined) {
    if (update["lHoLOU"] === undefined) {
      update["lHoLOU"] = !![];
    }
    data = update["rygrRv"](data, context);
    update["MyrnNW"][key] = data;
  } else {
    data = type;
  }
  return data;
};
import{
  Settings as Settings
}from "../../../models/server/raw";
import{
  callbacks as callbacks
}from "../../../callbacks";
function build({
  workspaceId : workspaceId,
  client_name : productId,
  client_id : edgeId,
  client_secret : secret,
  client_secret_expires_at : artistTrack,
  publicKey : subjectPublicKey,
  registration_client_uri : GET_AUTH_URL_TIMEOUT,
  licenseData : results
}) {
  var byDate = {
    "cWurY" : "Register_Server",
    "cteVG" : update("0", "y20S"),
    "xuRWA" : "Cloud_Workspace_Name",
    "THpxf" : update("1", "F1Lg"),
    "SJlJL" : "Cloud_Workspace_Client_Secret",
    "PfwQs" : update("2", "QJ&E"),
    "qdYzI" : update("3", "bMn)"),
    "zOleg" : update("4", "hwUn")
  };
  return Promise["all"]([Settings[update("5", "X(zk")](byDate[update("6", "x$JA")], !![]), Settings[update("7", "y20S")](byDate["cteVG"], workspaceId), Settings["updateValueById"](byDate["xuRWA"], productId), Settings[update("8", "jhRM")](byDate[update("9", "bMn)")], edgeId), Settings[update("a", "wT*n")](byDate["SJlJL"], secret), Settings[update("b", "JgFr")](update("c", "KlqE"), artistTrack), Settings["updateValueById"](byDate[update("d", "^yjf")], subjectPublicKey), Settings[update("e", "2tL3")](byDate["qdYzI"], 
  GET_AUTH_URL_TIMEOUT), Settings[update("f", "goyx")](byDate[update("10", "8&&N")], results[update("11", "goyx")] || "")])[update("12", "45$Z")]((..._Infinity) => {
    callbacks[update("13", "B95C")](update("14", "(vg*"), results["license"]);
    return _Infinity;
  });
}
export{
  build as saveRegistrationData
};

