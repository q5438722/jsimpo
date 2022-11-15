'use strict';
var BuildGameObject = require("../BuildGameObject");
var GameObjectCreator = require("../GameObjectCreator");
var GetAdvancedValue = require("../../utils/object/GetAdvancedValue");
var Video = require("./Video");
GameObjectCreator.register("video", function(e, a) {
  if (e === undefined) {
    e = {};
  }
  var id = GetAdvancedValue(e, "key", null);
  var tmpPlayer = new Video(this.scene, 0, 0, id);
  if (a !== undefined) {
    e.add = a;
  }
  BuildGameObject(this.scene, tmpPlayer, e);
  if (!e.add) {
    this.updateList.add(tmpPlayer);
  }
  return tmpPlayer;
});

