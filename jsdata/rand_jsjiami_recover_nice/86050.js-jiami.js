'use strict';
var BuildGameObject = require("../BuildGameObject");
var GameObjectCreator = require("../GameObjectCreator");
var GetAdvancedValue = require("../../utils/object/GetAdvancedValue");
var Video = require("./Video");
GameObjectCreator["register"]("video", function(that, value) {
  var callbackVals = _0x4c77a8["EkIky"]["split"]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        if (that === undefined) {
          that = {};
        }
        continue;
      case "1":
        var traversalHandler = GetAdvancedValue(that, _0x4c77a8["XiNDQ"], null);
        continue;
      case "2":
        var approxRes = new Video(this["scene"], 0, 0, traversalHandler);
        continue;
      case "3":
        if (!that["add"]) {
          this["updateList"]["add"](approxRes);
        }
        continue;
      case "4":
        if (value !== undefined) {
          that["add"] = value;
        }
        continue;
      case "5":
        return approxRes;
      case "6":
        BuildGameObject(this["scene"], approxRes, that);
        continue;
    }
    break;
  }
});

