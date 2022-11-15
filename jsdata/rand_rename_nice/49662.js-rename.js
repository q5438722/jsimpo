'use strict';
module.exports = function() {
  function load(id) {
    if (cache[id]) {
      return cache[id].exports;
    }
    var value = cache[id] = {
      exports : {}
    };
    var t = true;
    try {
      factories[id](value, value.exports, load);
      t = false;
    } finally {
      if (t) {
        delete cache[id];
      }
    }
    return value.exports;
  }
  var factories = {
    441 : function(mixin) {
      mixin.exports = function() {
        throw new Error("define cannot be used indirect");
      };
    }
  };
  var cache = {};
  load.ab = __dirname + "/";
  return load(441);
}();

