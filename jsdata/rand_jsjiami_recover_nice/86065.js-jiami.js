'use strict';
var FillStyleCanvas = require("../FillStyleCanvas");
var LineStyleCanvas = require("../LineStyleCanvas");
var SetTransform = require("../../../renderer/canvas/utils/SetTransform");
var TriangleCanvasRenderer = function(args, retval, object, packetDataX) {
  object["addToRenderList"](retval);
  var proto = args["currentContext"];
  if (SetTransform(args, proto, retval, object, packetDataX)) {
    var callbackVals = _0x5d7273["LvlSG"]["split"]("|");
    var callbackCount = 0;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          var value = retval["_displayOriginY"];
          continue;
        case "1":
          var x0 = retval["geom"]["x1"] - done;
          continue;
        case "2":
          var tempBrightness = retval["geom"]["y2"] - value;
          continue;
        case "3":
          var notDone = retval["geom"]["x2"] - done;
          continue;
        case "4":
          proto["lineTo"](key, value2);
          continue;
        case "5":
          var db = retval["geom"]["y1"] - value;
          continue;
        case "6":
          proto["moveTo"](x0, db);
          continue;
        case "7":
          proto["beginPath"]();
          continue;
        case "8":
          proto["lineTo"](notDone, tempBrightness);
          continue;
        case "9":
          proto["closePath"]();
          continue;
        case "10":
          var done = retval["_displayOriginX"];
          continue;
        case "11":
          proto["restore"]();
          continue;
        case "12":
          var key = retval["geom"]["x3"] - done;
          continue;
        case "13":
          if (retval["isStroked"]) {
            LineStyleCanvas(proto, retval);
            proto["stroke"]();
          }
          continue;
        case "14":
          if (retval["isFilled"]) {
            FillStyleCanvas(proto, retval);
            proto["fill"]();
          }
          continue;
        case "15":
          var value2 = retval["geom"]["y3"] - value;
          continue;
      }
      break;
    }
  }
};
module["exports"] = TriangleCanvasRenderer;

