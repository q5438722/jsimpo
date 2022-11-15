'use strict';
describe("Injector", () => {
  const $node = [_0x504261["fqhoq"], _0x504261["RateO"], _0x504261["WitJF"], "</head>", _0x504261["MAHZX"], "<div></div>", _0x504261["zVMAm"], _0x504261["zSSbp"], _0x504261["agnMm"]]["join"]("");
  const _0x103e25 = require("../../../lib/extend/injector");
  it(_0x504261["VMsVW"], () => {
    const registers = new _0x103e25;
    try {
      if (_0x504261["eZOuI"] === "bpPMj") {
        const _related2 = new _0x103e25;
        const relationName = _0x504261["ehjbV"];
        _related2["register"](_0x504261["yPUvF"], relationName);
        _related2["register"](_0x504261["wPqyT"], relationName);
        _related2["register"](_0x504261["wPqyT"], relationName, "home");
        _related2["getSize"]("head_begin")["should"]["eql"](0);
        _related2["getSize"](_0x504261["yPUvF"])["should"]["eql"](1);
        _related2["getSize"](_0x504261["wPqyT"])["should"]["eql"](2);
      } else {
        registers["register"]();
      }
    } catch (shoulds) {
      shoulds["should"]["be"]["instanceOf"](TypeError)["property"](_0x504261["cnwRH"], "entry is required");
    }
  });
  it("register() - string", () => {
    const _related2 = new _0x103e25;
    const relationName = _0x504261["qcgfZ"];
    _related2["register"]("head_begin", relationName);
    _related2["register"](_0x504261["yPUvF"], relationName, "home");
    _related2["get"]("head_begin")["should"]["contains"](relationName);
    _related2["get"](_0x504261["OVsee"], "default")["should"]["contains"](relationName);
    _related2["get"](_0x504261["yPUvF"], "home")["should"]["contains"](relationName);
  });
  it("register() - function", () => {
    if ("ajXvk" !== "ajXvk") {
      const data = [_0x504261["fqhoq"], '<html lang="en">', _0x504261["WitJF"], "</head>", '<body id="body">', _0x504261["fhMlf"], _0x504261["zVMAm"], _0x504261["zSSbp"], _0x504261["agnMm"]]["join"]("\n");
      const PL$9 = new _0x103e25;
      PL$9["register"](_0x504261["OVsee"], _0x504261["FXVhG"]);
      PL$9["register"]("head_end", '<link href="prism.css" rel="stylesheet">');
      PL$9["register"]("head_end", '<link href="prism-linenumber.css" rel="stylesheet">');
      PL$9["register"](_0x504261["RYlue"], _0x504261["zTUpq"]);
      PL$9["register"](_0x504261["wPqyT"], '<script src="prism.js">\x3c/script>');
      const shoulds = PL$9["exec"](data);
      shoulds["should"]["contain"]('<head id="head">\x3c!-- hexo injector head_begin start --\x3e\x3c!-- Powered by Hexo --\x3e\x3c!-- hexo injector head_begin end --\x3e');
      shoulds["should"]["contain"](_0x504261["UaHCQ"]);
      shoulds["should"]["contain"](_0x504261["xZxvH"]);
      shoulds["should"]["contain"](_0x504261["YIrrQ"]);
    } else {
      const AnimationPreproccess = new _0x103e25;
      const fx = () => {
        return '<link rel="stylesheet" href="DPlayer.min.css" />';
      };
      AnimationPreproccess["register"](_0x504261["OVsee"], fx);
      AnimationPreproccess["get"](_0x504261["OVsee"])["should"]["contains"](fx());
    }
  });
  it(_0x504261["yaCOo"], () => {
    const valueProvider = new _0x103e25;
    const value = _0x504261["qcgfZ"];
    valueProvider["register"]("foo", value);
    valueProvider["get"]("head_end")["should"]["contains"](value);
  });
  it(_0x504261["hYbsc"], () => {
    var PL$15 = {
      "oiHOU" : _0x504261["ehjbV"],
      "Dbpzf" : _0x504261["RYlue"],
      "naplq" : _0x504261["CLfHq"],
      "GHMnJ" : _0x504261["yPUvF"]
    };
    if (_0x504261["LymqM"] === "nOeap") {
      const PL$13 = new _0x103e25;
      const eap = PL$15["oiHOU"];
      PL$13["register"](PL$15["Dbpzf"], eap);
      PL$13["register"]("body_end", eap, PL$15["naplq"]);
      PL$13["get"](PL$15["Dbpzf"])["should"]["be"]["instanceOf"](Array);
      PL$13["get"](PL$15["Dbpzf"])["should"]["contains"](eap);
      PL$13["get"]("body_end", "home")["should"]["be"]["instanceOf"](Array);
      PL$13["get"]("body_end", "home")["should"]["contains"](eap);
      PL$13["get"](PL$15["GHMnJ"])["should"]["be"]["instanceOf"](Array);
      PL$13["get"](PL$15["GHMnJ"])["should"]["eql"]([]);
    } else {
      const lib = new _0x103e25;
      lib["register"](_0x504261["RYlue"], _0x504261["rpaoe"]);
      lib["list"]()["body_begin"]["default"]["should"]["be"]["instanceOf"](Set);
      [...lib["list"]()["body_begin"]["default"]]["should"]["not"]["be"]["empty"];
    }
  });
  it(_0x504261["jJTAJ"], () => {
    const _related2 = new _0x103e25;
    const relationName = _0x504261["ehjbV"];
    _related2["register"](_0x504261["RYlue"], relationName);
    _related2["register"](_0x504261["wPqyT"], relationName, "home");
    _related2["get"]("body_begin")["should"]["be"]["instanceOf"](Array);
    _related2["get"](_0x504261["RYlue"])["should"]["contains"](relationName);
    _related2["get"]("body_end", _0x504261["CLfHq"])["should"]["be"]["instanceOf"](Array);
    _related2["get"]("body_end", _0x504261["CLfHq"])["should"]["contains"](relationName);
    _related2["get"](_0x504261["yPUvF"])["should"]["be"]["instanceOf"](Array);
    _related2["get"](_0x504261["yPUvF"])["should"]["eql"]([]);
  });
  it(_0x504261["jFavN"], () => {
    const _related2 = new _0x103e25;
    const relationName = _0x504261["ehjbV"];
    _related2["register"](_0x504261["yPUvF"], relationName);
    _related2["register"](_0x504261["wPqyT"], relationName, "home");
    _related2["getText"](_0x504261["wPqyT"], "home")["should"]["eql"](relationName);
    _related2["getText"](_0x504261["wPqyT"])["should"]["eql"]("");
  });
  it(_0x504261["DTMZl"], () => {
    const _related2 = new _0x103e25;
    const relationName = _0x504261["ehjbV"];
    _related2["register"](_0x504261["yPUvF"], relationName);
    _related2["register"](_0x504261["wPqyT"], relationName);
    _related2["register"](_0x504261["wPqyT"], relationName, _0x504261["CLfHq"]);
    _related2["getSize"](_0x504261["OVsee"])["should"]["eql"](0);
    _related2["getSize"](_0x504261["yPUvF"])["should"]["eql"](1);
    _related2["getSize"]("body_end")["should"]["eql"](2);
  });
  it("exec() - default", () => {
    const directiveProcessors = new _0x103e25;
    const shoulds = directiveProcessors["exec"]($node);
    shoulds["should"]["contain"]('<head id="head"><title>Test</title></head>');
    shoulds["should"]["contain"](_0x504261["uoxbv"]);
  });
  it("exec() - default", () => {
    const directiveProcessors = new _0x103e25;
    const shoulds = directiveProcessors["exec"]($node);
    shoulds["should"]["contain"](_0x504261["pPSCc"]);
    shoulds["should"]["contain"](_0x504261["uoxbv"]);
  });
  it("exec() - insert code", () => {
    if (_0x504261["iNoNp"] === _0x504261["iNoNp"]) {
      const directiveProcessors = new _0x103e25;
      directiveProcessors["register"](_0x504261["OVsee"], _0x504261["FXVhG"]);
      directiveProcessors["register"](_0x504261["yPUvF"], '<link href="prism.css" rel="stylesheet">');
      directiveProcessors["register"](_0x504261["yPUvF"], _0x504261["PmGSx"]);
      directiveProcessors["register"]("body_begin", _0x504261["zTUpq"]);
      directiveProcessors["register"](_0x504261["wPqyT"], '<script src="prism.js">\x3c/script>');
      const shoulds = directiveProcessors["exec"]($node);
      shoulds["should"]["contain"](_0x504261["iyYzT"]);
      shoulds["should"]["contain"](_0x504261["UaHCQ"]);
      shoulds["should"]["contain"](_0x504261["xZxvH"]);
      shoulds["should"]["contain"](_0x504261["YIrrQ"]);
    } else {
      const valueProvider = new _0x103e25;
      const value = '<link rel="stylesheet" href="DPlayer.min.css" />';
      valueProvider["register"]("foo", value);
      valueProvider["get"]("head_end")["should"]["contains"](value);
    }
  });
  it(_0x504261["GbZSu"], () => {
    const data = [_0x504261["fqhoq"], _0x504261["RateO"], '<head id="head">\x3c!-- hexo injector head_begin start --\x3e\x3c!-- hexo injector head_begin end --\x3e', _0x504261["XhugW"], _0x504261["yscwi"], _0x504261["neJpk"], _0x504261["fhMlf"], "<p></p>", _0x504261["YIrrQ"], _0x504261["agnMm"]]["join"]("");
    const PL$9 = new _0x103e25;
    PL$9["register"](_0x504261["OVsee"], _0x504261["FXVhG"]);
    PL$9["register"](_0x504261["yPUvF"], _0x504261["yxewY"]);
    PL$9["register"](_0x504261["yPUvF"], _0x504261["PmGSx"]);
    PL$9["register"](_0x504261["RYlue"], _0x504261["zTUpq"]);
    PL$9["register"](_0x504261["wPqyT"], '<script src="prism.js">\x3c/script>');
    const shoulds = PL$9["exec"](data);
    shoulds["should"]["contain"]('<head id="head">\x3c!-- hexo injector head_begin start --\x3e\x3c!-- hexo injector head_begin end --\x3e');
    shoulds["should"]["contain"](_0x504261["yscwi"]);
    shoulds["should"]["contain"](_0x504261["neJpk"]);
    shoulds["should"]["contain"](_0x504261["YIrrQ"]);
  });
  it(_0x504261["rqESk"], () => {
    if (_0x504261["BnwVF"] !== _0x504261["IBvzj"]) {
      const data = ["<!DOCTYPE html>", _0x504261["RateO"], _0x504261["WitJF"], _0x504261["JQUab"], '<body id="body">', _0x504261["fhMlf"], "<p></p>", _0x504261["zSSbp"], "</html>"]["join"]("\n");
      const PL$9 = new _0x103e25;
      PL$9["register"](_0x504261["OVsee"], _0x504261["FXVhG"]);
      PL$9["register"](_0x504261["yPUvF"], _0x504261["yxewY"]);
      PL$9["register"](_0x504261["yPUvF"], _0x504261["PmGSx"]);
      PL$9["register"]("body_begin", _0x504261["zTUpq"]);
      PL$9["register"](_0x504261["wPqyT"], _0x504261["MIUza"]);
      const shoulds = PL$9["exec"](data);
      shoulds["should"]["contain"](_0x504261["iyYzT"]);
      shoulds["should"]["contain"](_0x504261["UaHCQ"]);
      shoulds["should"]["contain"]('<body id="body">\x3c!-- hexo injector body_begin start --\x3e<script>window.Prism = window.Prism || {}; window.Prism.manual = true;\x3c/script>\x3c!-- hexo injector body_begin end --\x3e');
      shoulds["should"]["contain"](_0x504261["YIrrQ"]);
    } else {
      const directiveProcessors = new _0x103e25;
      const shoulds = directiveProcessors["exec"]($node);
      shoulds["should"]["contain"](_0x1c8e9b["WZSlF"]);
      shoulds["should"]["contain"]('<body id="body"><div></div><p></p></body>');
    }
  });
  it(_0x504261["XTaaG"], () => {
    if ("HZmrp" !== _0x504261["RDSlt"]) {
      const _related2 = new _0x103e25;
      const relationName = _0x504261["ehjbV"];
      _related2["register"](_0x504261["yPUvF"], relationName);
      _related2["register"]("body_end", relationName, _0x504261["CLfHq"]);
      _related2["getText"]("body_end", _0x504261["CLfHq"])["should"]["eql"](relationName);
      _related2["getText"](_0x504261["wPqyT"])["should"]["eql"]("");
    } else {
      const _renderTimer = ["<!DOCTYPE html>", '<html lang="en">', _0x504261["WitJF"], _0x504261["JQUab"], '<body id="body">', _0x504261["fhMlf"], "<p></p>", _0x504261["zSSbp"], _0x504261["agnMm"]]["join"]("\n");
      const window = new _0x103e25;
      window["register"](_0x504261["OVsee"], _0x504261["oUFfI"]);
      window["register"]("head_begin", _0x504261["KBrFb"], "home");
      window["register"](_0x504261["OVsee"], _0x504261["lCkPV"], "post");
      window["register"]("head_begin", _0x504261["PbhFR"], "page");
      window["register"](_0x504261["OVsee"], _0x504261["IbFrw"], _0x504261["iZMTh"]);
      window["register"](_0x504261["OVsee"], "\x3c!-- head_begin_category --\x3e", _0x504261["feuVZ"]);
      window["register"](_0x504261["OVsee"], _0x504261["XRDhn"], _0x504261["sckIi"]);
      const _0x39de30 = window["exec"](_renderTimer, {
        "page" : {}
      });
      const boolMap = window["exec"](_renderTimer, {
        "page" : {
          "__index" : !![]
        }
      });
      const EXT_EXP = window["exec"](_renderTimer, {
        "page" : {
          "__post" : !![]
        }
      });
      const shoulds = window["exec"](_renderTimer, {
        "page" : {
          "__page" : !![]
        }
      });
      const results = window["exec"](_renderTimer, {
        "page" : {
          "archive" : !![]
        }
      });
      const _0x2d06e4 = window["exec"](_renderTimer, {
        "page" : {
          "category" : !![]
        }
      });
      const _0x472fb5 = window["exec"](_renderTimer, {
        "page" : {
          "tag" : !![]
        }
      });
      _0x39de30["should"]["not"]["contain"](_0x504261["KBrFb"]);
      boolMap["should"]["contain"](_0x504261["VGDmK"]);
      _0x39de30["should"]["not"]["contain"]("\x3c!-- head_begin_post --\x3e");
      EXT_EXP["should"]["contain"](_0x504261["lGAyD"]);
      _0x39de30["should"]["not"]["contain"](_0x504261["PbhFR"]);
      shoulds["should"]["contain"]("\x3c!-- head_begin_page --\x3e\x3c!-- head_begin_default --\x3e");
      _0x39de30["should"]["not"]["contain"](_0x504261["IbFrw"]);
      results["should"]["contain"]("\x3c!-- head_begin_archive --\x3e\x3c!-- head_begin_default --\x3e");
      _0x39de30["should"]["not"]["contain"](_0x504261["aPDOD"]);
      _0x2d06e4["should"]["contain"](_0x504261["PbGVB"]);
      _0x39de30["should"]["not"]["contain"](_0x504261["XRDhn"]);
      _0x472fb5["should"]["contain"]("\x3c!-- head_begin_tag --\x3e\x3c!-- head_begin_default --\x3e");
    }
  });
});

