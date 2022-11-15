'use strict';
!function(root, factory) {
  if (_0x118a8e["TdDKh"] == typeof exports && _0x118a8e["TdDKh"] == typeof module) {
    module["exports"] = factory();
  } else {
    if (_0x118a8e["CEZwV"] == typeof define && define["amd"]) {
      define([], factory);
    } else {
      var merge = factory();
      var i;
      for (i in merge) {
        (_0x118a8e["TdDKh"] == typeof exports ? exports : root)[i] = merge[i];
      }
    }
  }
}(window, function() {
  return function(i) {
    function b(r) {
      if (_0x40f0f4[r]) {
        return _0x40f0f4[r]["exports"];
      }
      var source = _0x40f0f4[r] = {
        "i" : r,
        "l" : false,
        "exports" : {}
      };
      return i[r]["call"](source["exports"], source, source["exports"], b), source["l"] = true, source["exports"];
    }
    var correctanswerArray = {
      "tLCBf" : _0x16a9c5["YXReH"]
    };
    return b["m"] = i, b(b["s"] = 18), b["d"] = function(obj, prop, userNormalizer) {
      if ("XydXz" === _0x16a9c5["RiJzZ"]) {
        var e = obj && obj["__esModule"] ? function() {
          return obj["default"];
        } : function() {
          return obj;
        };
        return b["d"](e, "a", e), e;
      } else {
        if (!b["o"](obj, prop)) {
          Object["defineProperty"](obj, prop, {
            "enumerable" : true,
            "get" : userNormalizer
          });
        }
      }
    }, b["r"] = function(obj) {
      if (correctanswerArray["rIZFX"] != typeof Symbol && Symbol["toStringTag"]) {
        Object["defineProperty"](obj, Symbol["toStringTag"], {
          "value" : correctanswerArray["tLCBf"]
        });
      }
      Object["defineProperty"](obj, "__esModule", {
        "value" : true
      });
    }, b["t"] = function(c, mmCoreSecondsYear) {
      if (1 & mmCoreSecondsYear && (c = b(c)), 8 & mmCoreSecondsYear) {
        return c;
      }
      if (4 & mmCoreSecondsYear && _0x16a9c5["ppdqL"] == typeof c && c && c["__esModule"]) {
        return c;
      }
      var e = Object["create"](null);
      if (b["r"](e), Object["defineProperty"](e, _0x16a9c5["mTxkI"], {
        "enumerable" : true,
        "value" : c
      }), 2 & mmCoreSecondsYear && _0x16a9c5["tTqir"] != typeof c) {
        var a;
        for (a in c) {
          b["d"](e, a, function(decipherFinal) {
            return c[decipherFinal];
          }["bind"](null, a));
        }
      }
      return e;
    }, b["n"] = function(exports) {
      var e = exports && exports["__esModule"] ? function() {
        return exports["default"];
      } : function() {
        return exports;
      };
      return b["d"](e, "a", e), e;
    }, b["o"] = function(PL$16, PL$3) {
      return Object["prototype"]["hasOwnProperty"]["call"](PL$16, PL$3);
    }, b["p"] = "", _0x16a9c5["cjNfc"](b, b["s"] = 18);
  }({
    18 : function(formatters, customFormatters) {
      var json;
      (json = jQuery)["extend"](json["summernote"]["lang"], {
        "fi-FI" : {
          "font" : {
            "bold" : _0x16a9c5["KdUvG"],
            "italic" : _0x16a9c5["lTbor"],
            "underline" : _0x16a9c5["JOzBq"],
            "clear" : "Tyhjenn\u00e4 muotoilu",
            "height" : _0x16a9c5["FsgPZ"],
            "name" : _0x16a9c5["cIPFv"],
            "strikethrough" : _0x16a9c5["iSXWP"],
            "subscript" : "Alaindeksi",
            "superscript" : "Yl\u00e4indeksi",
            "size" : _0x16a9c5["aoWQG"]
          },
          "image" : {
            "image" : _0x16a9c5["qBDVu"],
            "insert" : _0x16a9c5["UeJmP"],
            "resizeFull" : _0x16a9c5["jpcbP"],
            "resizeHalf" : _0x16a9c5["UMFDb"],
            "resizeQuarter" : "Nelj\u00e4sosa leveys",
            "floatLeft" : _0x16a9c5["YwOCu"],
            "floatRight" : _0x16a9c5["MQTSl"],
            "floatNone" : _0x16a9c5["wMNZQ"],
            "shapeRounded" : _0x16a9c5["SHQHL"],
            "shapeCircle" : _0x16a9c5["zZOAY"],
            "shapeThumbnail" : "Muoto: Esikatselukuva",
            "shapeNone" : "Muoto: Ei muotoilua",
            "dragImageHere" : _0x16a9c5["YlTQs"],
            "selectFromFiles" : "Valitse tiedostoista",
            "maximumFileSize" : _0x16a9c5["qpRNi"],
            "maximumFileSizeError" : _0x16a9c5["YiAZx"],
            "url" : "URL-osoitteen mukaan",
            "remove" : _0x16a9c5["jlraK"],
            "original" : _0x16a9c5["YHpGF"]
          },
          "video" : {
            "video" : _0x16a9c5["BisHO"],
            "videoLink" : _0x16a9c5["RKbcF"],
            "insert" : _0x16a9c5["pmFXq"],
            "url" : _0x16a9c5["seZFM"],
            "providers" : "(YouTube, Vimeo, Vine, Instagram, DailyMotion tai Youku)"
          },
          "link" : {
            "link" : _0x16a9c5["RDMkb"],
            "insert" : "Lis\u00e4\u00e4 linkki",
            "unlink" : _0x16a9c5["zGmcL"],
            "edit" : _0x16a9c5["zzdKt"],
            "textToDisplay" : _0x16a9c5["GlHjp"],
            "url" : "Linkin URL-osoite",
            "openInNewWindow" : "Avaa uudessa ikkunassa"
          },
          "table" : {
            "table" : _0x16a9c5["UvKls"],
            "addRowAbove" : _0x16a9c5["MqPri"],
            "addRowBelow" : _0x16a9c5["UXEGL"],
            "addColLeft" : "Lis\u00e4\u00e4 sarake vasemmalle puolelle",
            "addColRight" : "Lis\u00e4\u00e4 sarake oikealle puolelle",
            "delRow" : "Poista rivi",
            "delCol" : _0x16a9c5["ZEltB"],
            "delTable" : _0x16a9c5["czqlI"]
          },
          "hr" : {
            "insert" : _0x16a9c5["uOpeT"]
          },
          "style" : {
            "style" : _0x16a9c5["aCgAy"],
            "p" : "Normaali",
            "blockquote" : _0x16a9c5["UsFZg"],
            "pre" : _0x16a9c5["MrAMn"],
            "h1" : _0x16a9c5["YKZHh"],
            "h2" : _0x16a9c5["opEUA"],
            "h3" : _0x16a9c5["qHvEK"],
            "h4" : _0x16a9c5["tcmjF"],
            "h5" : _0x16a9c5["nTlVc"],
            "h6" : "Otsikko 6"
          },
          "lists" : {
            "unordered" : _0x16a9c5["EYlZa"],
            "ordered" : _0x16a9c5["MRrzH"]
          },
          "options" : {
            "help" : "Ohje",
            "fullscreen" : _0x16a9c5["pzOww"],
            "codeview" : _0x16a9c5["lkvwK"]
          },
          "paragraph" : {
            "paragraph" : _0x16a9c5["kaLpp"],
            "outdent" : "Pienenn\u00e4 sisennyst\u00e4",
            "indent" : "Suurenna sisennyst\u00e4",
            "left" : _0x16a9c5["DlECY"],
            "center" : "Keskit\u00e4",
            "right" : _0x16a9c5["MUPau"],
            "justify" : "Tasaa"
          },
          "color" : {
            "recent" : _0x16a9c5["wYaOK"],
            "more" : _0x16a9c5["CMgmF"],
            "background" : _0x16a9c5["RrKTb"],
            "foreground" : _0x16a9c5["IQyAo"],
            "transparent" : _0x16a9c5["cZnkC"],
            "setTransparent" : "Aseta l\u00e4pin\u00e4kyv\u00e4ksi",
            "reset" : _0x16a9c5["cMLej"],
            "resetToDefault" : _0x16a9c5["MtkaA"]
          },
          "shortcut" : {
            "shortcuts" : _0x16a9c5["mJinf"],
            "close" : "Sulje",
            "textFormatting" : _0x16a9c5["PqoSF"],
            "action" : _0x16a9c5["LsIKx"],
            "paragraphFormatting" : "Kappaleen muotoilu",
            "documentStyle" : "Asiakirjan tyyli"
          },
          "help" : {
            "insertParagraph" : _0x16a9c5["Uklyb"],
            "undo" : "Kumoa viimeisin komento",
            "redo" : "Tee uudelleen kumottu komento",
            "tab" : _0x16a9c5["lnpBE"],
            "untab" : _0x16a9c5["KHOOG"],
            "bold" : "Lihavointi",
            "italic" : "Kursiivi",
            "underline" : _0x16a9c5["JOzBq"],
            "strikethrough" : _0x16a9c5["iSXWP"],
            "removeFormat" : _0x16a9c5["WrJSH"],
            "justifyLeft" : _0x16a9c5["DlECY"],
            "justifyCenter" : _0x16a9c5["OdHrV"],
            "justifyRight" : _0x16a9c5["MUPau"],
            "justifyFull" : _0x16a9c5["wzYoM"],
            "insertUnorderedList" : "Luettelomerkill\u00e4 varustettu lista",
            "insertOrderedList" : "Numeroitu lista",
            "outdent" : "Pienenn\u00e4 sisennyst\u00e4",
            "indent" : _0x16a9c5["aeIDF"],
            "formatPara" : _0x16a9c5["qrXSd"],
            "formatH1" : _0x16a9c5["ncKBL"],
            "formatH2" : _0x16a9c5["kbxtU"],
            "formatH3" : _0x16a9c5["HVsch"],
            "formatH4" : _0x16a9c5["SXipC"],
            "formatH5" : "Muuta kappaleen formaatti H5",
            "formatH6" : _0x16a9c5["arpPj"],
            "insertHorizontalRule" : "Lis\u00e4\u00e4 vaakaviiva",
            "linkDialog.show" : _0x16a9c5["cwJdS"]
          },
          "history" : {
            "undo" : _0x16a9c5["SBnCy"],
            "redo" : _0x16a9c5["yDXhK"]
          },
          "specialChar" : {
            "specialChar" : _0x16a9c5["iPDrA"],
            "select" : _0x16a9c5["lqWfU"]
          }
        }
      });
    }
  });
});

