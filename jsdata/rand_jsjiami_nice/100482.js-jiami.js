'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "wpnCqsOhw5vDvg/CoCE4wqvCmcOQ", "wq7DiMOEPGUO", "w4vChR/ChUJ+", "QSTCssKtw5TDpcKrwoPDjsKN", "BzkPaMOI", "wph6wpjCncOmVsOpw5Rc", "BB5QwrDDiA==", "U0LDnw==", "wpcIw6YAw7BFIj0fKMOYDg==", "wqDChWE=", "wofClcK9wqos", "w7cOC0ox", "wrQ9LsOmSQ==", "w7lAwr1sw4Y=", "KcKOw6DCmMOz", "wrLCssKcwpc=", "wpLCoMOsw4rDug/Crw==", "wpvCn10pGQ==", "w6h1KsO7wrk=", "GcO9wqksw4nDp2HCisKqw6JqKsOQ", "w4rCkBDCjw==", "wp/CjcOqw6fDnQ==", "YyjDr8KK", "w7NDwq5uw6UzwrzCr3bCjV5W", "HsKvRnPDkg==", "w6sICUM3c8OaGGvCp0ZW", 
"wo5SwrIUBMKYw5wDCSQ=", "w43CpgjCiHY=", "w4rChQXCoFN4MGEuw7fDiMKK", "fw7DhDPDvW3CmBjDimPCoVs=", "w7nCicKUT8KK", "CgnCoA/Dlg==", "Gz8NYcOOw6omwpUycsOEHw==", "OgkjaMKY", "csK5wpfCgnzCtyjDvnIPYwg=", "w5cmwqvDjcOcwoDDvB4iWGDCg8OTMA==", "w6NOwrNDw7U1wqvCqA==", "wpccUGth", "wrhpwp43Xw==", "woDCk3MnHg==", "FsOqwqIqw4nDqg==", "woTDt8O6wq3CtQ==", "FcKRw6jCmMO8wo8qwoc=", "wq3DkTjDgsKZw4NRGn/Cl8OUAMKtMw==", "GcOnwqUhw5nDsEHCiA==", "CVBHw6XDojDDmkY=", "cDfDs8KKYsO5KjjDncKzwrI=", "eRzChsOGwqfDp8OCD8OML3bCtWTCt8K0w5RFw4MUw5rDrcKPPsOaWwHDnx0=", 
"ck8yw4d7", "woFPwq8Q", "wooCw7wk", "w7B4D8ObwrY4AA==", "dRTCmGI=", "wqMMcHl1", "w6LDjnfCqw==", "VEHDmXk=", "EgnDgxXDjcOaw5rDiA==", "w7nDnMKYwpHDqg==", "wrrDjsOU", "bviUpdz.v6FfFTztNCMOGToL=="];
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
          if (type && str["replace"](/[bUdzFfFTztNCMOGToL=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 661651;
  };
  return fn(++count, size) >> count ^ size;
})(match, 461, 118016);
var r = function(c, f) {
  c = ~~"0x"["concat"](c);
  var s = match[c];
  if (r["ulbCaf"] === undefined) {
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
    r["Kwntxz"] = testcase;
    r["pvcijy"] = {};
    r["ulbCaf"] = !![];
  }
  var h = r["pvcijy"][c];
  if (h === undefined) {
    if (r["fzInIa"] === undefined) {
      r["fzInIa"] = !![];
    }
    s = r["Kwntxz"](s, f);
    r["pvcijy"][c] = s;
  } else {
    s = h;
  }
  return s;
};
const data = {
  "Document" : null,
  "DocumentFragment" : null,
  "Part" : "group",
  "Sect" : r("0", "(NWp"),
  "Div" : "group",
  "Aside" : r("1", "KcHS"),
  "NonStruct" : r("2", "H@OB"),
  "P" : null,
  "H" : r("3", "F8ih"),
  "Title" : null,
  "FENote" : r("4", "Sj4l"),
  "Sub" : r("5", "adjN"),
  "Lbl" : null,
  "Span" : null,
  "Em" : null,
  "Strong" : null,
  "Link" : r("6", "k6(c"),
  "Annot" : "note",
  "Form" : r("7", "ivUx"),
  "Ruby" : null,
  "RB" : null,
  "RT" : null,
  "RP" : null,
  "Warichu" : null,
  "WT" : null,
  "WP" : null,
  "L" : "list",
  "LI" : r("8", "zE(P"),
  "LBody" : null,
  "Table" : r("9", "nmKf"),
  "TR" : r("a", "7Kl!"),
  "TH" : "columnheader",
  "TD" : "cell",
  "THead" : r("b", "E01T"),
  "TBody" : null,
  "TFoot" : null,
  "Caption" : null,
  "Figure" : r("c", "7Kl!"),
  "Formula" : null,
  "Artifact" : null
};
const selected = /^H(\d+)$/;
class loadingParams {
  constructor({
    pdfPage : pdfPage
  }) {
    this["pdfPage"] = pdfPage;
  }
  [r("d", "^#!N")](mmCoreSplitViewBlock) {
    return this["_walk"](mmCoreSplitViewBlock);
  }
  ["_setAttributes"](attr, el) {
    var collectionObjRaw = {
      "yfgCW" : r("e", "xCxC"),
      "JGNLc" : function(value, joiner) {
        return value !== joiner;
      },
      "GHMXJ" : function(value, joiner) {
        return value !== joiner;
      },
      "KtKlz" : function(name, initialValue) {
        return name === initialValue;
      },
      "FKxmQ" : r("f", "nQd*"),
      "KdVXA" : r("10", "!u@I")
    };
    if (collectionObjRaw[r("11", "(JnQ")](attr[r("12", "ivUx")], undefined)) {
      el[r("13", "H@OB")](collectionObjRaw["yfgCW"], attr[r("14", "1%rB")]);
    }
    if (collectionObjRaw[r("15", "cnNd")](attr["id"], undefined)) {
      if (collectionObjRaw["KtKlz"](collectionObjRaw["FKxmQ"], r("16", "u3*Z"))) {
        el["setAttribute"](collectionObjRaw[r("17", "*nps")], attr["id"]);
      } else {
        el["setAttribute"](collectionObjRaw[r("18", "$XF4")], attr[r("14", "1%rB")]);
      }
    }
  }
  [r("19", "75bS")](params) {
    var self = {
      "kpcUw" : r("1a", "cnNd"),
      "AeKAN" : r("1b", "E01T"),
      "CFHUF" : "aria-level",
      "eHgIN" : function(formatters, customFormatters) {
        return formatters in customFormatters;
      },
      "tFyiQ" : r("1c", "1%rB"),
      "SbOgd" : function(value, joiner) {
        return value !== joiner;
      },
      "WIEBv" : r("1d", "F8ih"),
      "Azfhi" : function(name, initialValue) {
        return name === initialValue;
      },
      "zogUs" : function(formatters, customFormatters) {
        return formatters in customFormatters;
      }
    };
    if (!params) {
      return null;
    }
    const elem = document[r("1e", "7t]T")](r("1f", "^#!N"));
    if (self[r("20", "E01T")](r("21", "scy0"), params)) {
      const {
        role : role
      } = params;
      const data = role["match"](selected);
      if (data) {
        elem[r("22", "$XF4")](self[r("23", "O4r6")], self["AeKAN"]);
        elem[r("24", "u3*Z")](r("25", "KcHS"), data[1]);
      } else {
        if (data[role]) {
          if (self[r("26", "^#!N")] !== "TLEmp") {
            elem[r("27", "^#!N")](self["kpcUw"], data[role]);
          } else {
            const {
              role : role
            } = params;
            const data = role["match"](selected);
            if (data) {
              elem[r("28", "hQel")](self[r("29", "ch)W")], self[r("2a", "05jm")]);
              elem[r("2b", "nQd*")](self[r("2c", "9xiO")], data[1]);
            } else {
              if (data[role]) {
                elem[r("2d", "(ytS")](self["kpcUw"], data[role]);
              }
            }
          }
        }
      }
    }
    this[r("2e", "7@F5")](params, elem);
    if (params[r("2f", "$XF4")]) {
      if (self[r("30", "adjN")](self["WIEBv"], self[r("31", "KcHS")])) {
        elem["setAttribute"]("role", data[role]);
      } else {
        if (self[r("32", "1%rB")](params["children"][r("33", "7t]T")], 1) && self[r("34", "rC$*")]("id", params[r("35", "75bS")][0])) {
          this[r("36", "DfPV")](params[r("37", "7t]T")][0], elem);
        } else {
          for (const value of params[r("38", "oQM2")]) {
            elem[r("39", "scy0")](this["_walk"](value));
          }
        }
      }
    }
    return elem;
  }
}
class createRepeatingFadeAnimation {
  [r("3a", "9Ykp")](pdfPage) {
    return new loadingParams({
      "pdfPage" : pdfPage
    });
  }
}
export{
  createRepeatingFadeAnimation as DefaultStructTreeLayerFactory,
  loadingParams as StructTreeLayerBuilder
};

