const BuildGameObject = require("../BuildGameObject");

const GameObjectCreator = require("../GameObjectCreator");

const GetAdvancedValue = require("../../utils/object/GetAdvancedValue");

const Video = require("./Video");

GameObjectCreator.register("video", function (e, a) {
  if (e === undefined) {
    e = {};
  }const d = GetAdvancedValue(e, "key", null);
  const r = new Video(this.scene, 0, 0, d);
  if (a !== undefined) {
    e.add = a;
  }BuildGameObject(this.scene, r, e);if (!e.add) {
    this.updateList.add(r);
  }return r;
});
