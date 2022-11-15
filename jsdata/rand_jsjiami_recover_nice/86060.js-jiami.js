'use strict';
var PolygonRender = require("./PolygonRender");
var Class = require("../../../utils/Class");
var Earcut = require("../../../geom/polygon/Earcut");
var GetAABB = require("../../../geom/polygon/GetAABB");
var GeomPolygon = require("../../../geom/polygon/Polygon");
var Shape = require("../Shape");
var Smooth = require("../../../geom/polygon/Smooth");
var Polygon = new Class({
  "Extends" : Shape,
  "Mixins" : [PolygonRender],
  "initialize" : function PL$2(PL$3, PL$4, PL$5, PL$25, PL$26, PL$27) {
    if (PL$4 === undefined) {
      PL$4 = 0;
    }
    if (PL$5 === undefined) {
      PL$5 = 0;
    }
    Shape["call"](this, PL$3, _0x1cfe4c["grRHT"], new GeomPolygon(PL$25));
    var elCss = GetAABB(this["geom"]);
    this["setPosition"](PL$4, PL$5);
    this["setSize"](elCss["width"], elCss["height"]);
    if (PL$26 !== undefined) {
      this["setFillStyle"](PL$26, PL$27);
    }
    this["updateDisplayOrigin"]();
    this["updateData"]();
  },
  "smooth" : function(value) {
    if (value === undefined) {
      value = 1;
    }
    var propValue = 0;
    for (; propValue < value; propValue++) {
      if (_0x4bbbeb["Sbqcb"] !== "ofSyE") {
        Smooth(this["geom"]);
      } else {
        var callbackVals = "6|4|5|0|2|3|1"["split"]("|");
        var callbackCount = 0;
        for (; !![];) {
          switch(callbackVals[callbackCount++]) {
            case "0":
              AP["push"](params[0]["x"], params[0]["y"]);
              continue;
            case "1":
              return this;
            case "2":
              this["pathIndexes"] = Earcut(AP);
              continue;
            case "3":
              this["pathData"] = AP;
              continue;
            case "4":
              var params = this["geom"]["points"];
              continue;
            case "5":
              var i = 0;
              for (; i < params["length"]; i++) {
                AP["push"](params[i]["x"], params[i]["y"]);
              }
              continue;
            case "6":
              var AP = [];
              continue;
          }
          break;
        }
      }
    }
    return this["updateData"]();
  },
  "updateData" : function() {
    var callbackVals = _0x2bddeb["FBCxW"]["split"]("|");
    var callbackCount = 0;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          var i = 0;
          for (; i < params["length"]; i++) {
            AP["push"](params[i]["x"], params[i]["y"]);
          }
          continue;
        case "1":
          return this;
        case "2":
          var params = this["geom"]["points"];
          continue;
        case "3":
          this["pathData"] = AP;
          continue;
        case "4":
          AP["push"](params[0]["x"], params[0]["y"]);
          continue;
        case "5":
          var AP = [];
          continue;
        case "6":
          this["pathIndexes"] = Earcut(AP);
          continue;
      }
      break;
    }
  }
});
module["exports"] = Polygon;

