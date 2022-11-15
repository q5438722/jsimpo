'use strict';
var Class = require("../utils/Class");
var NOOP = require("../utils/NOOP");
var RequestAnimationFrame = new Class({
  "initialize" : function run() {
    this["isRunning"] = ![];
    this["callback"] = NOOP;
    this["tick"] = 0;
    this["isSetTimeOut"] = ![];
    this["timeOutID"] = null;
    this["lastTime"] = 0;
    this["target"] = 0;
    var options = this;
    this["step"] = function callback() {
      var callbackVals = _0x4f4b8b["wTmtS"]["split"]("|");
      var callbackCount = 0;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            options["lastTime"] = options["tick"];
            continue;
          case "1":
            options["callback"](aData);
            continue;
          case "2":
            options["tick"] = aData;
            continue;
          case "3":
            options["timeOutID"] = window["requestAnimationFrame"](callback);
            continue;
          case "4":
            var aData = window["performance"]["now"]();
            continue;
        }
        break;
      }
    };
    this["stepTimeout"] = function show() {
      var callbackVals = _0x4f4b8b["RFqvw"]["split"]("|");
      var callbackCount = 0;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            options["callback"](aData);
            continue;
          case "1":
            options["lastTime"] = options["tick"];
            continue;
          case "2":
            options["tick"] = aData;
            continue;
          case "3":
            var aData = Date["now"]();
            continue;
          case "4":
            options["timeOutID"] = window["setTimeout"](show, selectorText);
            continue;
          case "5":
            var selectorText = Math["min"](Math["max"](_0x4f4b8b["xNKGa"](_0x4f4b8b["LVvYe"](options["target"] * 2, options["tick"]), options["target"] * 2 + options["tick"]), options["target"] * 2 + options["tick"] - (options["target"] * 2 + options["tick"])), options["target"]);
            continue;
        }
        break;
      }
    };
  },
  "start" : function(kernelVert, updateFrag, sphereVert) {
    var callbackVals = _0x52fece["XDkah"]["split"]("|");
    var callbackCount = 0;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          this["timeOutID"] = updateFrag ? window["setTimeout"](this["stepTimeout"], 0) : window["requestAnimationFrame"](this["step"]);
          continue;
        case "1":
          this["isRunning"] = !![];
          continue;
        case "2":
          this["isSetTimeOut"] = updateFrag;
          continue;
        case "3":
          this["callback"] = kernelVert;
          continue;
        case "4":
          if (this["isRunning"]) {
            return;
          }
          continue;
        case "5":
          this["target"] = sphereVert;
          continue;
      }
      break;
    }
  },
  "stop" : function() {
    this["isRunning"] = ![];
    if (this["isSetTimeOut"]) {
      clearTimeout(this["timeOutID"]);
    } else {
      window["cancelAnimationFrame"](this["timeOutID"]);
    }
  },
  "destroy" : function() {
    this["stop"]();
    this["callback"] = NOOP;
  }
});
module["exports"] = RequestAnimationFrame;

