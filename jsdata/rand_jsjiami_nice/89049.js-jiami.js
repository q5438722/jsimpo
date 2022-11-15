'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "YcKBwpvCux5Nw5PCjcOHwrLDr8KMPMOhw6MeTX9geg==", "QMKZwrjCn2MvAWPDnHxTwpjDu3EIwpY8wrA=", "b8KYwqvCtsK1Bz7CmsKGwpRvw7hU", "w7vDicOsw4fChsKfcMKzw7MXw7QDeR8=", "w4jCkMKJY1vCi8OcNsOEDMKEZMKKwodWwqzDlA==", "wrDCokRwx7RGwo7DisK8wq5X", "e3x9GzoWF395FMKwP0/Dtg==", "JMO0wqhJWS51TcOEw5XDj8KiwrDHpsKJL8Oawq1QdsO7EMOSWsOGwrvCqsKdxr08wrgxXhRJw4fDkMOCecOVIUfDpsOUwqgJwpHDtQ4heMKrw6gYw4Z3CcK1wrQ=", "w6ZzcgUyyakb", "DMOaw7krXsOYy5Bj", "w7QpOsKzSsOfwoLDqA==", "wqbDq8O1wpPDtcOtSA==", "w5IMwqDDo8KpwrI=", 
"OsKEd2LCmcKuw4c=", "w77Dn8O8w4LCmsKeNcOew5EMw7IYaA==", "w4PCt2VCwqgtWMStwprCvXvDhS9TNGrDi8ewbsONw63Cuks=", "w7E5w7FUHMONw4jEpMKPw6XDvcOrfA==", "w7E5w7FUHMONw4jEpMKPw6XDvcOqZMOQM8O8LselZcOA", "KsOow5RDwpHHl8OEw79Gw5N1HULDmcOkAkzCqsKRw5ZZC20twoLDksOBF8OUdsKrw6DDu8OaEcOpLMOlxJjDjEPCsQMqEcKnM8KBwo1Pxa0BeAHCgkg4w5A=", "wpM9w5zCl8OtwqbCrxfDg0vDvcKmw57DisOFSDIzw5XCgsOM", "Ldvip.va6aUQQGWXjyThtuJ=="];
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
          if (type && str["replace"](/[LdaaUQQGWXjyThtuJ=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662345;
  };
  return fn(++count, size) >> count ^ size;
})(match, 353, 90368);
var log = function(key, message) {
  key = ~~"0x"["concat"](key);
  var value = match[key];
  if (log["AWdZWZ"] === undefined) {
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
    log["NnROTa"] = testcase;
    log["YvDMEw"] = {};
    log["AWdZWZ"] = !![];
  }
  var orgValue = log["YvDMEw"][key];
  if (orgValue === undefined) {
    if (log["QXhZYW"] === undefined) {
      log["QXhZYW"] = !![];
    }
    value = log["NnROTa"](value, message);
    log["YvDMEw"][key] = value;
  } else {
    value = orgValue;
  }
  return value;
};
export default{
  "task-list" : log("0", "!8BW"),
  "add-task" : "Adaug\u0103 sarcin\u0103",
  "about" : log("1", "n)it"),
  "preferences" : "Set\u0103ri...",
  "check-for-updates" : log("2", "ZtA7"),
  "check-updates-now" : log("3", "BJRa"),
  "checking-for-updates" : "Verific actualiz\u0103ri ...",
  "check-for-updates-title" : log("4", "BJRa"),
  "update-available-message" : log("5", "us9N"),
  "update-not-available-message" : log("6", "hD^W"),
  "update-downloaded-message" : log("7", "AjDY"),
  "update-error-message" : log("8", "Un1F"),
  "engine-damaged-message" : "Motorul este deteriorat, v\u0103 rug\u0103m s\u0103 reinstala\u021bi : (",
  "engine-missing-message" : "Motorul lipse\u015fte, v\u0103 rug\u0103m s\u0103 reinstala\u021bi : (",
  "system-error-title" : log("9", "chxb"),
  "system-error-message" : "Aplica\u0163ia nu a putut porni: {{message}}",
  "hide" : log("a", "n)it"),
  "hide-others" : log("b", ")8@P"),
  "unhide" : log("c", "Wo^O"),
  "show" : "Arat\u0103 Motrix",
  "quit" : log("d", "sW$p"),
  "under-development-message" : log("e", "4)b%"),
  "yes" : "Da",
  "no" : "Nu",
  "save" : log("f", "sW$p"),
  "reset" : log("10", "Weaj"),
  "cancel" : log("11", "&gJ*"),
  "submit" : log("12", "koZz"),
  "gt1d" : log("13", "XlGi"),
  "hour" : "h",
  "minute" : "m",
  "second" : "s"
};

