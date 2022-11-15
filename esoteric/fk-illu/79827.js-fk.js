"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getTarget = exports.getDevtoolsGlobalHook = void 0;
function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
exports.getDevtoolsGlobalHook = getDevtoolsGlobalHook;
function getTarget() {
    // @ts-ignore
    return typeof navigator !== "undefined" ? [].filter.constructor("return this")() : typeof global !== "undefined" ? global : {};
}
exports.getTarget = getTarget;
