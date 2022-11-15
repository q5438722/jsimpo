'use strict';
const _0x5536 = [
    '17UtLSQj',
    '1611138dNcCmm',
    '2420aXElpT',
    '53ROXiZR',
    '1633219deSfxm',
    '1036792kSxIzj',
    '2FSwKoj',
    '411288gNuobt',
    '478414HdMJdM',
    'chrome://juggler/content/content/Runtime.js',
    'chrome://juggler/content/SimpleChannel.js',
    'worker::worker',
    'parse',
    'data',
    'addEventListener',
    'message',
    'setTransport',
    'stringify',
    'findScripts',
    'createExecutionContext',
    'onNewScript',
    'removeAllDebuggees',
    'runtime',
    '_runtime',
    '_browserRuntime',
    'connect',
    'sFyrR',
    'executionContexts',
    'onConsoleMessage',
    'runtimeConsole',
    'events',
    '_onExecutionContextCreated',
    'bind',
    '_onExecutionContextDestroyed',
    'register',
    'evaluate',
    'getObjectProperties',
    'runtimeExecutionContextCreated',
    'emit',
    'UEGEQ',
    'auxData',
    'runtimeExecutionContextDestroyed',
    'xtmuj',
    '_eventListeners',
    'Smrob',
    '24019XgRYRy'
];
const _0x3a6595 = _0x2195;
(function (_0x57ecf2, _0x492e55) {
    const _0x3538b3 = _0x2195;
    while (!![]) {
        try {
            const _0x25a999 = -parseInt(_0x3538b3(0x1d5)) * -parseInt(_0x3538b3(0x1d6)) + parseInt(_0x3538b3(0x1d7)) + -parseInt(_0x3538b3(0x1d8)) * parseInt(_0x3538b3(0x1d9)) + -parseInt(_0x3538b3(0x1da)) + parseInt(_0x3538b3(0x1db)) + parseInt(_0x3538b3(0x1dc)) * -parseInt(_0x3538b3(0x1dd)) + parseInt(_0x3538b3(0x1de));
            if (_0x25a999 === _0x492e55)
                break;
            else
                _0x57ecf2['push'](_0x57ecf2['shift']());
        } catch (_0x1618a8) {
            _0x57ecf2['push'](_0x57ecf2['shift']());
        }
    }
}(_0x5536, -0x3df * 0x36c + 0x1062 * -0x1d + -0x1 * -0x1d9b82));
function _0x2195(_0x54d9d4, _0x3acd1e) {
    return _0x2195 = function (_0x550218, _0x59931c) {
        _0x550218 = _0x550218 - (-0x1 * 0x184d + 0x1 * -0x14a2 + 0x2ec4);
        let _0x53f9d7 = _0x5536[_0x550218];
        return _0x53f9d7;
    }, _0x2195(_0x54d9d4, _0x3acd1e);
}
loadSubScript(_0x3a6595(0x1df)), loadSubScript(_0x3a6595(0x1e0));
const channel = new SimpleChannel(_0x3a6595(0x1e1)), eventListener = _0x1c2968 => channel['_onMessage'](JSON[_0x3a6595(0x1e2)](_0x1c2968[_0x3a6595(0x1e3)]));
this[_0x3a6595(0x1e4)](_0x3a6595(0x1e5), eventListener), channel[_0x3a6595(0x1e6)]({
    'sendMessage': _0x28e99f => postMessage(JSON[_0x3a6595(0x1e7)](_0x28e99f)),
    'dispose': () => this['removeEventListener']('message', eventListener)
});
const runtime = new Runtime(!![]);
(() => {
    const _0x3967e2 = _0x3a6595, _0x4b3eca = new Debugger(global);
    _0x4b3eca[_0x3967e2(0x1e8)]({ 'global': global })['length'] ? runtime[_0x3967e2(0x1e9)](null, global, {}) : _0x4b3eca[_0x3967e2(0x1ea)] = function (_0x2fdd4e) {
        const _0x5581a0 = _0x3967e2;
        _0x4b3eca[_0x5581a0(0x1ea)] = undefined, _0x4b3eca[_0x5581a0(0x1eb)](), runtime['createExecutionContext'](null, global, {});
    };
})();
class RuntimeAgent {
    constructor(_0x544ec3, _0x53acbf) {
        const _0x449e69 = _0x3a6595, _0x3d6b41 = { 'sFyrR': _0x449e69(0x1ec) };
        this[_0x449e69(0x1ed)] = _0x544ec3, this[_0x449e69(0x1ee)] = _0x53acbf[_0x449e69(0x1ef)](_0x3d6b41[_0x449e69(0x1f0)]);
        for (const _0x695e18 of this[_0x449e69(0x1ed)][_0x449e69(0x1f1)]())
            this['_onExecutionContextCreated'](_0x695e18);
        this['_eventListeners'] = [
            this[_0x449e69(0x1ed)]['events'][_0x449e69(0x1f2)](_0x55387d => this[_0x449e69(0x1ee)]['emit'](_0x449e69(0x1f3), _0x55387d)),
            this[_0x449e69(0x1ed)][_0x449e69(0x1f4)]['onExecutionContextCreated'](this[_0x449e69(0x1f5)][_0x449e69(0x1f6)](this)),
            this[_0x449e69(0x1ed)][_0x449e69(0x1f4)]['onExecutionContextDestroyed'](this[_0x449e69(0x1f7)]['bind'](this)),
            _0x53acbf[_0x449e69(0x1f8)](_0x3d6b41[_0x449e69(0x1f0)], {
                'evaluate': this[_0x449e69(0x1ed)][_0x449e69(0x1f9)][_0x449e69(0x1f6)](this[_0x449e69(0x1ed)]),
                'callFunction': this[_0x449e69(0x1ed)]['callFunction'][_0x449e69(0x1f6)](this[_0x449e69(0x1ed)]),
                'getObjectProperties': this[_0x449e69(0x1ed)][_0x449e69(0x1fa)][_0x449e69(0x1f6)](this['_runtime']),
                'disposeObject': this[_0x449e69(0x1ed)]['disposeObject']['bind'](this[_0x449e69(0x1ed)])
            })
        ];
    }
    [_0x3a6595(0x1f5)](_0x157e88) {
        const _0x530e76 = _0x3a6595, _0x32b198 = { 'UEGEQ': _0x530e76(0x1fb) };
        this['_browserRuntime'][_0x530e76(0x1fc)](_0x32b198[_0x530e76(0x1fd)], {
            'executionContextId': _0x157e88['id'](),
            'auxData': _0x157e88[_0x530e76(0x1fe)]()
        });
    }
    [_0x3a6595(0x1f7)](_0x25fcc0) {
        const _0x42f31c = _0x3a6595, _0x124da9 = { 'xtmuj': _0x42f31c(0x1ff) };
        this[_0x42f31c(0x1ee)][_0x42f31c(0x1fc)](_0x124da9[_0x42f31c(0x200)], { 'executionContextId': _0x25fcc0['id']() });
    }
    ['dispose']() {
        const _0x58b4cc = _0x3a6595, _0x5a0f48 = {
                'Smrob': function (_0x2c1346) {
                    return _0x2c1346();
                }
            };
        for (const _0x1e5054 of this[_0x58b4cc(0x201)])
            _0x5a0f48[_0x58b4cc(0x202)](_0x1e5054);
        this[_0x58b4cc(0x201)] = [];
    }
}
new RuntimeAgent(runtime, channel);
