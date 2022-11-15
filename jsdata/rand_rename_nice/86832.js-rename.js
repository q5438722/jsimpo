'use strict';
var ArcadeImage = require("./ArcadeImage");
var ArcadeSprite = require("./ArcadeSprite");
var Class = require("../../utils/Class");
var CONST = require("./const");
var PhysicsGroup = require("./PhysicsGroup");
var StaticPhysicsGroup = require("./StaticPhysicsGroup");
var Factory = new Class({
  initialize : function init(parameters) {
    this.world = parameters;
    this.scene = parameters.scene;
    this.sys = parameters.scene.sys;
  },
  collider : function(body, color, velocity, max, min) {
    return this.world.addCollider(body, color, velocity, max, min);
  },
  overlap : function(b, x, y, callback, event) {
    return this.world.addOverlap(b, x, y, callback, event);
  },
  existing : function(object, elem) {
    var x = elem ? CONST.STATIC_BODY : CONST.DYNAMIC_BODY;
    this.world.enableBody(object, x);
    return object;
  },
  staticImage : function(pid, post, cb, filename) {
    var req = new ArcadeImage(this.scene, pid, post, cb, filename);
    this.sys.displayList.add(req);
    this.world.enableBody(req, CONST.STATIC_BODY);
    return req;
  },
  image : function(options, name, type, opt_attrObj) {
    var out = new ArcadeImage(this.scene, options, name, type, opt_attrObj);
    this.sys.displayList.add(out);
    this.world.enableBody(out, CONST.DYNAMIC_BODY);
    return out;
  },
  staticSprite : function(pid, post, cb, filename) {
    var req = new ArcadeSprite(this.scene, pid, post, cb, filename);
    this.sys.displayList.add(req);
    this.sys.updateList.add(req);
    this.world.enableBody(req, CONST.STATIC_BODY);
    return req;
  },
  sprite : function(animation, options, key, frame) {
    var sprite = new ArcadeSprite(this.scene, animation, options, key, frame);
    this.sys.displayList.add(sprite);
    this.sys.updateList.add(sprite);
    this.world.enableBody(sprite, CONST.DYNAMIC_BODY);
    return sprite;
  },
  staticGroup : function(handler, text) {
    return this.sys.updateList.add(new StaticPhysicsGroup(this.world, this.world.scene, handler, text));
  },
  group : function(type, text) {
    return this.sys.updateList.add(new PhysicsGroup(this.world, this.world.scene, type, text));
  },
  destroy : function() {
    this.world = null;
    this.scene = null;
    this.sys = null;
  }
});
module.exports = Factory;

