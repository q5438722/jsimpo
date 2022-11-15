'use strict';
define(function(canCreateDiscussions, module, i) {
  module.initExtension = function() {
    return (new $.Deferred).resolve();
  };
});

