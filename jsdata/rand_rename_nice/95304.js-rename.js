'use strict';
define(function EditAgent(require, exports, module) {
  function open(e) {
    var type = e.level;
    if (type === "warning") {
      type = "warn";
    }
    var pre = "ConsoleAgent: " + e.text;
    if (e.url) {
      pre = pre + (" (url: " + e.url + ")");
    }
    if (e.stackTrace) {
      var stateB = e.stackTrace[0];
      pre = pre + (" in " + stateB.functionName + ":" + stateB.columnNumber);
    }
    console[type](pre);
  }
  function _onRemoteEdit(event, res) {
    dest2_msg = res.message;
    open(dest2_msg);
  }
  function _onCharacterDataModified(event, res) {
    if (dest2_msg) {
      open(dest2_msg);
    }
  }
  function reconnectingCallback(lmbda, n) {
  }
  function enable() {
    return Inspector.Console.enable();
  }
  function load() {
    Inspector.Console.on("messageAdded.ConsoleAgent", _onRemoteEdit).on("messageRepeatCountUpdated.ConsoleAgent", _onCharacterDataModified).on("messagesCleared.ConsoleAgent", reconnectingCallback);
  }
  function unload() {
    Inspector.Console.off(".ConsoleAgent");
  }
  var Inspector = require("LiveDevelopment/Inspector/Inspector");
  var dest2_msg;
  exports.enable = enable;
  exports.load = load;
  exports.unload = unload;
});

