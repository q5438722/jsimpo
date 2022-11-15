'use strict';
var helpers = "vip.v6";
var positions = [helpers, "fsOBRD3Csg==", "wqLDpcK4TcOPfcKv", "w7nDpcOzw5sDcG4=", "ez3Cv8Ogw7Y=", "wq1HXwbDmFB3", "w4ZPw7/CqWI=", "WsOrRiHCmC1ow7p4dhNsw6xBw79zwrkywrc=", "wrZMSw/DgXx0", "vcgicp.fvEr6XuCOHzGQUT=="];
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
          if (type && str["replace"](/[cgcfErXuCOHzGQUT=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661694;
  };
  return fn(++count, size) >> count ^ size;
})(positions, 454, 116224);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = positions[i];
  if (fn["TmwrEO"] === undefined) {
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
    fn["JbGpnF"] = testcase;
    fn["SRzGOj"] = {};
    fn["TmwrEO"] = !![];
  }
  var size = fn["SRzGOj"][i];
  if (size === undefined) {
    if (fn["XIQaMJ"] === undefined) {
      fn["XIQaMJ"] = !![];
    }
    x = fn["JbGpnF"](x, n);
    fn["SRzGOj"][i] = x;
  } else {
    x = size;
  }
  return x;
};
const PusherMiddleware = (result) => {
  var coord = {
    "ICoyu" : "mime_contains=file",
    "MJsVe" : fn("0", "K9L]"),
    "Fobtx" : "mime_contains=image&mime_contains=video"
  };
  const _0x16f2bc = result[fn("1", "GMlb")](coord[fn("2", "K9L]")]);
  const _0x14e34c = result[fn("3", "H4a@")](coord["MJsVe"]);
  let coordtransform = result;
  if (_0x16f2bc !== -1) {
    coordtransform = coordtransform[fn("4", "j(lT")](coord[fn("5", "EsdI")], "mime_ncontains=image&mime_ncontains=video");
  }
  if (_0x14e34c !== -1) {
    coordtransform = coordtransform[fn("6", "GMlb")](coord["MJsVe"], coord[fn("7", "Q6m3")]);
  }
  return coordtransform;
};
export default PusherMiddleware;

