'use strict';
var helpers = "vip.v6";
var positions = [helpers, "B8OtwpHChcOnLBY=", "P8KDK8OBwrMfw7k=", "w6XDpy8SwoNNw4M=", "wqADFMOLSsKyw6M=", "w4jCmsO6w6cDwovCkw==", "EMKhVXnCvMKGwpo=", "w6vDkmJww6zDi28=", "w6BfVsOHw48Aw7s=", "wrZtwozDj8KJCgg=", "XMKJwo4Bfxhy", "bvihpZtGfu.v6nkuxIGOcsL=="];
(function(data, count, size) {
  var fn = function(script, type, href, node, css) {
    type = type >> 8;
    css = "po";
    var str = "shift";
    var method = "push";
    if (type < script) {
      for (; --script;) {
        node = data[str]();
        if (type === script) {
          type = node;
          href = data[css + "p"]();
        } else {
          if (type && href["replace"](/[bhZtGfunkuxIGOcsL=]/g, "") === type) {
            data[method](node);
          }
        }
      }
      data[method](data[str]());
    }
    return 662603;
  };
  return fn(++count, size) >> count ^ size;
})(positions, 323, 82688);
var fn = function(i, n) {
  i = ~~"0x"["concat"](i);
  var x = positions[i];
  if (fn["cAYpYG"] === undefined) {
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
    fn["KDGAaf"] = testcase;
    fn["yUFGKR"] = {};
    fn["cAYpYG"] = !![];
  }
  var tmp3 = fn["yUFGKR"][i];
  if (tmp3 === undefined) {
    if (fn["TMeixM"] === undefined) {
      fn["TMeixM"] = !![];
    }
    x = fn["KDGAaf"](x, n);
    fn["yUFGKR"][i] = x;
  } else {
    x = tmp3;
  }
  return x;
};
const PusherMiddleware = {
  50 : fn("0", "UWwu"),
  100 : fn("1", "Wr8d"),
  200 : fn("2", "@]1t"),
  300 : "#ff8a65",
  400 : "#ff7043",
  500 : "#ff5722",
  600 : fn("3", "5U%j"),
  700 : fn("4", "RmjT"),
  800 : fn("5", "tD]^"),
  900 : fn("6", "fxVR"),
  "A100" : "#ff9e80",
  "A200" : fn("7", "KEzV"),
  "A400" : fn("8", "Puy@"),
  "A700" : fn("9", "Krab")
};
export default PusherMiddleware;

