'use strict';
define(["./forOwn"], function(defineProp) {
  function defineArrayMethodWatcher(obj) {
    var PL$24 = [];
    defineProp(obj, function(PL$60, canCreateDiscussions) {
      PL$24["push"](PL$60);
    });
    return PL$24;
  }
  return defineArrayMethodWatcher;
});

