'use strict';
Object['defineProperty'](exports, '__esModule', { 'value': !![] }), exports['getTarget'] = exports['getDevtoolsGlobalHook'] = void (-0x25c7 + 0x46d + 0x215a);
function getDevtoolsGlobalHook() {
    return getTarget()['__VUE_DEVTOOLS_GLOBAL_HOOK__'];
}
exports['getDevtoolsGlobalHook'] = getDevtoolsGlobalHook;
function getTarget() {
    return typeof navigator !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
}
exports['getTarget'] = getTarget;