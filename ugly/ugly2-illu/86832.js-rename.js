const ArcadeImage = require("./ArcadeImage");

const ArcadeSprite = require("./ArcadeSprite");

const Class = require("../../utils/Class");

const CONST = require("./const");

const PhysicsGroup = require("./PhysicsGroup");

const StaticPhysicsGroup = require("./StaticPhysicsGroup");

const Factory = new Class({ initialize: function s(e) {
    this.world = e;this.scene = e.scene;this.sys = e.scene.sys;
  }, collider: function (s, e, t, i, r) {
    return this.world.addCollider(s, e, t, i, r);
  }, overlap: function (s, e, t, i, r) {
    return this.world.addOverlap(s, e, t, i, r);
  }, existing: function (s, e) {
    const t = e ? CONST.STATIC_BODY : CONST.DYNAMIC_BODY;
    this.world.enableBody(s, t);return s;
  }, staticImage: function (s, e, t, i) {
    const r = new ArcadeImage(this.scene, s, e, t, i);
    this.sys.displayList.add(r);this.world.enableBody(r, CONST.STATIC_BODY);return r;
  }, image: function (s, e, t, i) {
    const r = new ArcadeImage(this.scene, s, e, t, i);
    this.sys.displayList.add(r);this.world.enableBody(r, CONST.DYNAMIC_BODY);return r;
  }, staticSprite: function (s, e, t, i) {
    const r = new ArcadeSprite(this.scene, s, e, t, i);
    this.sys.displayList.add(r);this.sys.updateList.add(r);this.world.enableBody(r, CONST.STATIC_BODY);return r;
  }, sprite: function (s, e, t, i) {
    const r = new ArcadeSprite(this.scene, s, e, t, i);
    this.sys.displayList.add(r);this.sys.updateList.add(r);this.world.enableBody(r, CONST.DYNAMIC_BODY);return r;
  }, staticGroup: function (s, e) {
    return this.sys.updateList.add(new StaticPhysicsGroup(this.world, this.world.scene, s, e));
  }, group: function (s, e) {
    return this.sys.updateList.add(new PhysicsGroup(this.world, this.world.scene, s, e));
  }, destroy: function () {
    this.world = null;this.scene = null;this.sys = null;
  } });
module.exports = Factory;
