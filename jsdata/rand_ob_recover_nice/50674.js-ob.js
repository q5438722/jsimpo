'use strict';
(function(mmCoreSplitViewBlock) {
  var access = _0x3dce;
  var deps = {
    "mLUsR" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "nwsWs" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "LJYLY" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "LdiSl" : access(211),
    "KubDw" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "UxbpQ" : function(name, initialValue) {
      return name === initialValue;
    },
    "mbDtp" : "jquery",
    "PAZig" : "datatables.net-bs4",
    "mlPnu" : access(212),
    "kbVaD" : function(require, load, callback, id) {
      return require(load, callback, id);
    }
  };
  if (deps[access(213)](typeof define, "function") && define["amd"]) {
    define([deps["mbDtp"], deps["PAZig"], deps[access(214)]], function(exports) {
      var moduleName = access;
      return deps[moduleName(215)](mmCoreSplitViewBlock, exports, window, document);
    });
  } else {
    if (typeof exports === deps[access(216)]) {
      module[access(217)] = function(elem, exports) {
        var moduleName = access;
        return !elem && (elem = window), (!exports || !exports["fn"][moduleName(218)]) && (exports = deps[moduleName(219)](require, moduleName(220))(elem, exports)["$"]), !exports["fn"][moduleName(218)][moduleName(221)] && deps[moduleName(222)](require, deps["LdiSl"])(elem, exports), deps["KubDw"](mmCoreSplitViewBlock, exports, elem, elem[moduleName(223)]);
      };
    } else {
      deps[access(224)](mmCoreSplitViewBlock, jQuery, window, document);
    }
  }
})(function(target, canCreateDiscussions, isSlidingUp, dontForceConstraints) {
  var classId = _0x3dce;
  return target["fn"][classId(218)];
});

