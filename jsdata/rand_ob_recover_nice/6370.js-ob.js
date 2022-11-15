'use strict';
define(["./forOwn"], function(callback) {
  function reduceNestedObjects(accumulator) {
    var value = [];
    return callback(accumulator, function(data, canCreateDiscussions) {
      var isArray = _0x481d;
      value[isArray(478)](data);
    }), value;
  }
  return reduceNestedObjects;
});

