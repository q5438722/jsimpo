function _0x2195(_0x54d9d4, _0x3acd1e) {
    return _0x2195 = function (_0x550218, _0x59931c) {
        _0x550218 = _0x550218 - (-1 * 6221 + 1 * -5282 + 11972);
        let _0x53f9d7 = _0x5536[_0x550218];
        return _0x53f9d7;
    }, _0x2195(_0x54d9d4, _0x3acd1e);
}
loadSubScript(_0x3a6595(479)), loadSubScript(_0x3a6595(480));
const channel = new SimpleChannel(_0x3a6595(481)), eventListener = _0x1c2968 => channel['_onMessage'](JSON[_0x3a6595(482)](_0x1c2968[_0x3a6595(483)]));
this[_0x3a6595(484)](_0x3a6595(485), eventListener), channel[_0x3a6595(486)]({
    'sendMessage': _0x28e99f => postMessage(JSON[_0x3a6595(487)](_0x28e99f)),
    'dispose': () => this['removeEventListener']('message', eventListener)
});
const runtime = new Runtime(!![]);
(() => {
    const _0x3967e2 = _0x3a6595, _0x4b3eca = new Debugger(global);
    _0x4b3eca[_0x3967e2(488)]({ 'global': global })['length'] ? runtime[_0x3967e2(489)](null, global, {}) : _0x4b3eca[_0x3967e2(490)] = function (_0x2fdd4e) {
        const _0x5581a0 = _0x3967e2;
        _0x4b3eca[_0x5581a0(490)] = undefined, _0x4b3eca[_0x5581a0(491)](), runtime['createExecutionContext'](null, global, {});
    };
})();
class RuntimeAgent {
    constructor(_0x544ec3, _0x53acbf) {
        const _0x449e69 = _0x3a6595, _0x3d6b41 = { 'sFyrR': _0x449e69(492) };
        this[_0x449e69(493)] = _0x544ec3, this[_0x449e69(494)] = _0x53acbf[_0x449e69(495)](_0x3d6b41[_0x449e69(496)]);
        for (const _0x695e18 of this[_0x449e69(493)][_0x449e69(497)]())
            this['_onExecutionContextCreated'](_0x695e18);
        this['_eventListeners'] = [
            this[_0x449e69(493)]['events'][_0x449e69(498)](_0x55387d => this[_0x449e69(494)]['emit'](_0x449e69(499), _0x55387d)),
            this[_0x449e69(493)][_0x449e69(500)]['onExecutionContextCreated'](this[_0x449e69(501)][_0x449e69(502)](this)),
            this[_0x449e69(493)][_0x449e69(500)]['onExecutionContextDestroyed'](this[_0x449e69(503)]['bind'](this)),
            _0x53acbf[_0x449e69(504)](_0x3d6b41[_0x449e69(496)], {
                'evaluate': this[_0x449e69(493)][_0x449e69(505)][_0x449e69(502)](this[_0x449e69(493)]),
                'callFunction': this[_0x449e69(493)]['callFunction'][_0x449e69(502)](this[_0x449e69(493)]),
                'getObjectProperties': this[_0x449e69(493)][_0x449e69(506)][_0x449e69(502)](this['_runtime']),
                'disposeObject': this[_0x449e69(493)]['disposeObject']['bind'](this[_0x449e69(493)])
            })
        ];
    }
    [_0x3a6595(501)](_0x157e88) {
        const _0x530e76 = _0x3a6595, _0x32b198 = { 'UEGEQ': _0x530e76(507) };
        this['_browserRuntime'][_0x530e76(508)](_0x32b198[_0x530e76(509)], {
            'executionContextId': _0x157e88['id'](),
            'auxData': _0x157e88[_0x530e76(510)]()
        });
    }
    [_0x3a6595(503)](_0x25fcc0) {
        const _0x42f31c = _0x3a6595, _0x124da9 = { 'xtmuj': _0x42f31c(511) };
        this[_0x42f31c(494)][_0x42f31c(508)](_0x124da9[_0x42f31c(512)], { 'executionContextId': _0x25fcc0['id']() });
    }
    ['dispose']() {
        const _0x58b4cc = _0x3a6595, _0x5a0f48 = {
                'Smrob': function (_0x2c1346) {
                    return _0x2c1346();
                }
            };
        for (const _0x1e5054 of this[_0x58b4cc(513)])
            _0x5a0f48[_0x58b4cc(514)](_0x1e5054);
        this[_0x58b4cc(513)] = [];
    }
}
new RuntimeAgent(runtime, channel);