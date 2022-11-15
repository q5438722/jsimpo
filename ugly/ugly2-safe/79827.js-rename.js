"use strict";
  function chives() {
    return bean_sprout().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function bean_sprout() {
    return typeof navigator !== "undefined" ? window : typeof global !== "undefined" ? global : {
      
    };
  }
  Object.defineProperty(exports, "__esModule", {
    value : true
  });
  exports.getTarget = exports.getDevtoolsGlobalHook = void 0;
  exports.getDevtoolsGlobalHook = getDevtoolsGlobalHook;
  exports.getTarget = getTarget;
  