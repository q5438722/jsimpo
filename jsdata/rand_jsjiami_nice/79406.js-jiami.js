'use strict';
var vip = "vip.v6";
var _0x8526 = [vip, "wp46JA==", "ZFtEwrIlfcOeXzp1YXTCicOnw4Mlw54TwpwLVsOm", "RFtEwrIoXcOeXzp1YXQ=", "UXTCpSw=", "asKPE2TCqQ1Aw77DlVgTwpjCnX0tWEoqw7Bhw6U=", "w6jDn8OUwoMiGcODRRDCoA==", "YcORw7DCsxXDjg==", "w6kGBMKawqA0bWU=", "OQcOwopL", "fcOKw7LCtAjDg8KXYCs=", "HB3DhFrCjT8Y", "eV7DoBrDvi0JIsK/wrvCsQ==", "U8Oxwql6asOSw7PCjBIbWcKiVsOC", "XWtPwrVFc8ONTyV/", "viOpWyN.v6XSRgzSyXdDWHBF=="];
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
          if (value && str["replace"](/[OWyNXSRgzSyXdDWHBF=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662257;
  };
  return fn(++count, long) >> count ^ long;
})(_0x8526, 362, 92672);
var _0x3764 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x8526[a];
  if (_0x3764["pbRbHE"] === undefined) {
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
    _0x3764["iykNzQ"] = testcase;
    _0x3764["JRupCc"] = {};
    _0x3764["pbRbHE"] = !![];
  }
  var A = _0x3764["JRupCc"][a];
  if (A === undefined) {
    if (_0x3764["BtAfAb"] === undefined) {
      _0x3764["BtAfAb"] = !![];
    }
    value = _0x3764["iykNzQ"](value, opt_max);
    _0x3764["JRupCc"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
Object[_0x3764("0", "1KcT")](exports, _0x3764("1", "O^uV"), {
  "value" : !![]
});
var prefix = _0x3764("2", "AHOs");
var iconName = _0x3764("3", "O^uV");
var width = 3992;
var height = 512;
var ligatures = [_0x3764("4", "O^uV")];
var unicode = _0x3764("5", "8$^s");
var svgPathData = "M1209.7 156.5c-57.8 0-102 43.9-102 99.1 0 56 44.6 99.1 102 99.1 57.4 0 102-43.1 102-99.1C1311.7 200.4 1267.5 156.5 1209.7 156.5Zm0 152.7c-35.1 0-51.8-27.4-51.8-53.2 0-25.8 16.7-53.2 51.8-53.2 35.1 0 51.8 27.8 51.8 53.2C1261.1 281.8 1244.8 309.2 1209.7 309.2Zm962.1-136.1c-4.4-10.9-12.3-16.5-23.5-16.5s-19.1 5.6-23.5 16.5l-59.4 145.8c-7.2 17.7 2.8 27.4 4.4 29a24.6 24.6 0 0 0 17.5 6.8c10.8 0 18.7-6 23.1-18.1l4-10.1h67.7l4 10.1c4.8 12.1 12.3 18.1 23.1 18.1a24.6 24.6 0 0 0 17.5-6.8c10-10.1 6.8-22.6 4.4-29Zm-43 113.6 19.1-56 19.1 56Zm-574.5-130.1c-14.3 0-24.7 10.9-24.7 25.4v76.5l-68.5-85.8c-4.4-5.6-11.6-16.1-25.5-16.1-19.1 0-24.3 17.7-24.3 25.4V329.7c0 14.1 10.4 25.4 24.7 25.4 14.3 0 24.7-10.9 24.7-25.4V252.8l68.9 86.2c4.8 5.6 11.6 16.1 25.5 16.1 19.1 0 23.9-17.3 23.9-25.4V181.9C1579 167.4 1568.6 156.5 1554.3 156.5Zm-554.1 1.6H916.5c-19.9 0-25.1 17.3-25.1 25.4V328.1c0 19.7 16.7 25.4 24.7 25.4 8 0 24.7-5.2 24.7-25.4V285h44.6c12.8 0 22.7-9.3 22.7-22.6 0-17.7-15.5-22.1-22.7-22.1H940.8V203.6h59.4c12.8 0 22.7-9.3 22.7-22.6C1022.9 163 1007.3 158.1 1000.2 158.1Zm815.1 0H1691.7c-7.2 0-22.7 4.4-22.7 22.2 0 13.3 10 22.6 22.7 22.6h37V327.7c0 14.1 10.4 25.4 24.7 25.4 14.3 0 24.7-10.9 24.7-25.4V202.8h37c12.7 0 22.7-9.3 22.7-22.6C1837.9 163 1822.4 158.1 1815.2 158.1Zm1789.5-1.6c-9.6 0-17.5 6-25.1 18.1l-46.6 76.1L3486.4 174.6q-10.8-18.1-25.1-18.1c-19.5 0-24.7 18.1-24.7 25.8V329.7c0 14.1 10.4 25.4 24.7 25.4s24.7-10.9 24.7-25.4V262.8L3510.7 302.7c6.4 10.1 13.9 15.3 22.3 15.3 8.8 0 15.9-5.2 22.3-15.3l24.7-39.9v66.9c0 14.1 10.3 25.4 24.7 25.4 14.3 0 24.7-10.9 24.7-25.4V182.3C3629.4 174.2 3624.6 156.5 3604.7 156.5Zm248.6 149.8h-65.7V272.9h39.4c11.9 0 21.1-8.9 21.1-20.9 0-12.1-9.2-20.9-21.1-20.9h-39.4V204.8h62.1c12.8 0 22.7-9.3 22.7-22.6 0-17.7-15.6-22.2-22.7-22.2h-86.4c-19.9 0-25.1 17.3-25.1 25.4V326.5c0 8.1 5.2 25.4 25.1 25.4h90c12.8 0 22.7-9.3 22.7-22.6C3876 311.2 3860.5 306.3 3853.3 306.3ZM3235 156.5c-57.8 0-102 43.9-102 99.1 0 56 44.6 99.1 102 99.1 57.4 0 102-43.1 102-99.1C3337 200.4 3292.8 156.5 3235 156.5Zm0 152.7c-35.1 0-51.8-27.4-51.8-53.2 0-25.8 16.7-53.2 51.8-53.2 35.1 0 51.8 27.8 51.8 53.2C3286.8 281.8 3270.1 309.2 3235 309.2ZM2550.2 156.5c-11.2 0-19.1 5.6-23.1 16.5l-34.3 94.7-31.5-92.2c-4.4-12.5-12.3-18.9-24.3-18.9-11.9 0-19.9 6.4-24.3 18.9l-31.5 92.2-34.3-95.5q-5.4-15.7-22.7-15.7c-6.8 0-12.3 2.4-17.5 7.3-5.2 5.2-10.8 14.5-4.8 28.6l55.8 145.8c4 11.3 11.6 16.9 23.1 16.9q16.7 0 22.7-16.9l33.5-91.8 33.5 91.8q6 16.9 22.7 16.9c11.2 0 19.1-5.6 23.1-16.9l55.8-145.8c3.6-9.3 4.4-19.3-4.8-28.6A23 23 0 0 0 2550.2 156.5Zm444.2 81-21.9-9.3c-11.9-4.8-16.3-8.5-16.3-15.7q0-12.1 16.7-12.1c12.7 0 19.5 7.7 24.3 10.9 7.2 5.2 18.3 6.8 27.9-2 10.8-10.5 6.8-23.8 1.2-30.6-12.3-14.9-30.3-22.2-53.8-22.2-19.1 0-35.1 5.2-47.4 15.7-12.3 10.5-18.7 24.2-18.7 41.1 0 24.2 15.9 43.5 47.8 57.6l19.5 8.9c15.9 6.8 19.1 9.7 19.1 17.7 0 9.3-6.4 14.1-19.5 14.1-19.1 0-34.7-14.9-36.3-16.1-10.8-7.3-21.5-2-26.3 2.8-6.8 6.4-12.7 20.9 3.2 36.2 6.8 6.4 15.5 11.7 26.7 15.3a94.6 94.6 0 0 0 32.7 5.6c19.9 0 36.7-5.2 49.8-16.1 13.1-10.9 19.5-25.4 19.5-43.5q0-20.5-12-33.8C3022.7 253.2 3010.7 244.3 2994.4 237.5Zm-206.4 68.9h-65.7V272.9h39.4c12 0 21.1-8.9 21.1-20.9 0-12.1-9.2-20.9-21.1-20.9h-39.4V204.8h62.1c12.8 0 22.7-9.3 22.7-22.6 0-17.7-15.5-22.2-22.7-22.2h-86.4c-19.9 0-25.1 17.3-25.1 25.4V326.5c0 8.1 5.2 25.4 25.1 25.4h90c12.7 0 22.7-9.3 22.7-22.6C2810.8 311.2 2795.2 306.3 2788 306.3ZM178.3 49.1c-50.5 0-74.4 20.7-114.6 28.7V65A31.8 31.8 0 1 0 0 65V447a31.8 31.8 0 0 0 63.7 0V141.4c40.2-8 64.1-28.7 114.6-28.7 62.5 0 86 31.8 148.4 31.8 20.3 0 35.4-2.8 55.3-9.2v191c-19.9 6.4-35 9.2-55.3 9.2-62.5 0-86.4-31.8-148.4-31.8-20.3 0-36.2 3.6-50.9 8V375.4a159.1 159.1 0 0 1 50.9-8c62.5 0 86 31.8 148.4 31.8 37 0 56.1-9.6 119-31.8V49.1C382.8 71.4 363.7 80.9 326.7 80.9 264.2 80.9 240.4 49.1 178.3 49.1Z";
exports["definition"] = {
  "prefix" : prefix,
  "iconName" : iconName,
  "icon" : [width, height, ligatures, unicode, svgPathData]
};
exports[_0x3764("6", "0&To")] = exports[_0x3764("7", "fqIy")];
exports[_0x3764("8", "NM1r")] = prefix;
exports[_0x3764("9", "vWBn")] = iconName;
exports[_0x3764("a", "uf0h")] = width;
exports["height"] = height;
exports[_0x3764("b", "NM1r")] = ligatures;
exports[_0x3764("c", "ziMM")] = unicode;
exports[_0x3764("d", "vwAp")] = svgPathData;

