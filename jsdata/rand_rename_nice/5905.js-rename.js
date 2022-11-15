'use strict';
(function(saveNotifs) {
  saveNotifs(function() {
    function left(inp) {
      return inp;
    }
    function collectInverses(transforms) {
      var inverse;
      var inverses;
      inverses = [];
      var i = 0;
      var l = transforms.length;
      for (; i < l; i++) {
        inverse = transforms[i].inverse;
        if (typeof inverse == "function") {
          inverses.push(inverse);
        }
      }
      if (inverses.length > 0 && inverses.length !== transforms.length) {
        throw new Error("Either all or none of the supplied transforms must provide an inverse");
      }
      return inverses;
    }
    var concat;
    var slice;
    var _this;
    concat = Array.prototype.concat;
    slice = Array.prototype.slice;
    left.inverse = left;
    left.inverse.inverse = left;
    return function(n) {
      var composed;
      var txList;
      var inverses;
      if (arguments.length == 0) {
        return left;
      }
      txList = concat.apply([], slice.call(arguments));
      composed = function() {
        var args = slice.call(arguments);
        var i = 0;
        var len = txList.length;
        for (; i < len; i++) {
          args[0] = txList[i].apply(_this, args);
        }
        return args[0];
      };
      inverses = collectInverses(txList);
      if (inverses.length) {
        composed.inverse = function() {
          var args = slice.call(arguments);
          var i = inverses.length - 1;
          for (; i >= 0; --i) {
            args[0] = inverses[i].apply(_this, args);
          }
          return args[0];
        };
        composed.inverse.inverse = composed;
      }
      return composed;
    };
  });
})(typeof define == "function" ? define : function(factory) {
  module.exports = factory();
});

