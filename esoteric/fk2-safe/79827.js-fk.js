"use strict";
  function chives() {
    return bean_sprout().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function bean_sprout() {
    return typeof navigator !== 'undefined' ? []["filter"]["constructor"]("return this")() : typeof global !== 'undefined' ? global : {
      
    };
  }
  Object.defineProperty(exports, "__esModule", {
    value : ! ! []
  });
  exports.getTarget = exports.getDevtoolsGlobalHook = void + [];
  exports.getDevtoolsGlobalHook = getDevtoolsGlobalHook;
  exports.getTarget = getTarget;
  