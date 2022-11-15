'use strict';
Object["defineProperty"](exports, "__esModule", {
  "value" : !![]
});
exports["getTarget"] = exports["getDevtoolsGlobalHook"] = void 0;
function getDevtoolsGlobalHook() {
  return getTarget()["__VUE_DEVTOOLS_GLOBAL_HOOK__"];
}
exports["getDevtoolsGlobalHook"] = getDevtoolsGlobalHook;
function getTarget() {
  return typeof navigator !== _0x29ecff["SyXPk"] ? window : typeof global !== _0x29ecff["SyXPk"] ? global : {};
}
exports["getTarget"] = getTarget;

