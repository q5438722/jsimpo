'use strict';
var Detector = {};
module["exports"] = Detector;
var SAT = require("./SAT");
var Pair = require("./Pair");
var Bounds = require("../geometry/Bounds");
(function() {
  Detector["collisions"] = function(PL$20, val) {
    var value = [];
    var query = val["pairs"]["table"];
    var gravitar = val["metrics"];
    var PL$21 = 0;
    for (; PL$21 < PL$20["length"]; PL$21++) {
      if (_0xb44f47["ZwxFo"] === "rkigx") {
        value["push"](data);
        gravitar["narrowDetections"] += 1;
      } else {
        var object = PL$20[PL$21][0];
        var data = PL$20[PL$21][1];
        if ((object["isStatic"] || object["isSleeping"]) && (data["isStatic"] || data["isSleeping"])) {
          continue;
        }
        if (!Detector["canCollide"](object["collisionFilter"], data["collisionFilter"])) {
          continue;
        }
        gravitar["midphaseTests"] += 1;
        if (Bounds["overlaps"](object["bounds"], data["bounds"])) {
          var j = object["parts"]["length"] > 1 ? 1 : 0;
          for (; j < object["parts"]["length"]; j++) {
            var res = object["parts"][j];
            var i = data["parts"]["length"] > 1 ? 1 : 0;
            for (; i < data["parts"]["length"]; i++) {
              var result = data["parts"][i];
              if (res === object && result === data || Bounds["overlaps"](res["bounds"], result["bounds"])) {
                var callbackVals = _0xb44f47["MoZIZ"]["split"]("|");
                var callbackCount = 0;
                for (; !![];) {
                  switch(callbackVals[callbackCount++]) {
                    case "0":
                      if (response && response["isActive"]) {
                        id = response["collision"];
                      } else {
                        id = null;
                      }
                      continue;
                    case "1":
                      var data = SAT["collides"](res, result, id);
                      continue;
                    case "2":
                      if (data["reused"]) {
                        gravitar["narrowReuseCount"] += 1;
                      }
                      continue;
                    case "3":
                      if (data["collided"]) {
                        value["push"](data);
                        gravitar["narrowDetections"] += 1;
                      }
                      continue;
                    case "4":
                      gravitar["narrowphaseTests"] += 1;
                      continue;
                    case "5":
                      var url = Pair["id"](res, result);
                      var response = query[url];
                      var id;
                      continue;
                  }
                  break;
                }
              }
            }
          }
        }
      }
    }
    return value;
  };
  Detector["canCollide"] = function(a, b) {
    if ("doSjx" === _0xb44f47["hKiiN"]) {
      previousCollision = null;
    } else {
      if (a["group"] === b["group"] && a["group"] !== 0) {
        return a["group"] > 0;
      }
      return (a["mask"] & b["category"]) !== 0 && (b["mask"] & a["category"]) !== 0;
    }
  };
})();

