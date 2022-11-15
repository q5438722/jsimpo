'use strict';
var ArcadeImage = require("./ArcadeImage");
var ArcadeSprite = require("./ArcadeSprite");
var Class = require("../../utils/Class");
var CONST = require("./const");
var PhysicsGroup = require("./PhysicsGroup");
var StaticPhysicsGroup = require("./StaticPhysicsGroup");
var Factory = new Class({
  "initialize" : function World(params) {
    this["world"] = params;
    this["scene"] = params["scene"];
    this["sys"] = params["scene"]["sys"];
  },
  "collider" : function(body, velocity, color, min, max) {
    return this["world"]["addCollider"](body, velocity, color, min, max);
  },
  "overlap" : function(nr1, nr2, box1, box2, returnOverlap) {
    return this["world"]["addOverlap"](nr1, nr2, box1, box2, returnOverlap);
  },
  "existing" : function(exists, isFollower) {
    var isFollowerSince = isFollower ? CONST["STATIC_BODY"] : CONST["DYNAMIC_BODY"];
    this["world"]["enableBody"](exists, isFollowerSince);
    return exists;
  },
  "staticImage" : function(context, eventName, bindOnce, modstatus) {
    var internalCompute = new ArcadeImage(this["scene"], context, eventName, bindOnce, modstatus);
    this["sys"]["displayList"]["add"](internalCompute);
    this["world"]["enableBody"](internalCompute, CONST["STATIC_BODY"]);
    return internalCompute;
  },
  "image" : function(callback, options, key, obj) {
    var event = new ArcadeImage(this["scene"], callback, options, key, obj);
    this["sys"]["displayList"]["add"](event);
    this["world"]["enableBody"](event, CONST["DYNAMIC_BODY"]);
    return event;
  },
  "staticSprite" : function(entity, method, matchAny, actual) {
    var approxRes = new ArcadeSprite(this["scene"], entity, method, matchAny, actual);
    this["sys"]["displayList"]["add"](approxRes);
    this["sys"]["updateList"]["add"](approxRes);
    this["world"]["enableBody"](approxRes, CONST["STATIC_BODY"]);
    return approxRes;
  },
  "sprite" : function(id, options, flipV, flipR) {
    var PL$16 = {};
    var callbackVals = PL$16["ypbUH"]["split"]("|");
    var callbackCount = 0;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          this["sys"]["updateList"]["add"](o);
          continue;
        case "1":
          this["world"]["enableBody"](o, CONST["DYNAMIC_BODY"]);
          continue;
        case "2":
          this["sys"]["displayList"]["add"](o);
          continue;
        case "3":
          return o;
        case "4":
          var o = new ArcadeSprite(this["scene"], id, options, flipV, flipR);
          continue;
      }
      break;
    }
  },
  "staticGroup" : function(formatters, customFormatters) {
    return this["sys"]["updateList"]["add"](new StaticPhysicsGroup(this["world"], this["world"]["scene"], formatters, customFormatters));
  },
  "group" : function(timeEnd, Enemys) {
    return this["sys"]["updateList"]["add"](new PhysicsGroup(this["world"], this["world"]["scene"], timeEnd, Enemys));
  },
  "destroy" : function() {
    this["world"] = null;
    this["scene"] = null;
    this["sys"] = null;
  }
});
module["exports"] = Factory;

