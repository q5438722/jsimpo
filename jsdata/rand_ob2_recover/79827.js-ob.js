Object['defineProperty'](exports, _0x5d70d7(153), { 'value': !![] }), exports[_0x5d70d7(154)] = exports[_0x5d70d7(155)] = void 0;
function getDevtoolsGlobalHook() {
    return getTarget()['__VUE_DEVTOOLS_GLOBAL_HOOK__'];
}
exports['getDevtoolsGlobalHook'] = getDevtoolsGlobalHook;
function getTarget() {
    var _0x38619e = _0x5d70d7;
    return typeof navigator !== _0x38619e(156) ? window : typeof global !== _0x38619e(156) ? global : {};
}
exports[_0x5d70d7(154)] = getTarget;