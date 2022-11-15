loadSubScript(_0x19d567(226)), loadSubScript(_0x19d567(227));
const channel = new SimpleChannel('worker::worker'), eventListener = _0x5336ff => channel[_0x19d567(228)](JSON['parse'](_0x5336ff[_0x19d567(229)]));
this[_0x19d567(230)](_0x19d567(231), eventListener), channel['setTransport']({
    'sendMessage': _0x3a7f83 => postMessage(JSON['stringify'](_0x3a7f83)),
    'dispose': () => this[_0x19d567(232)](_0x19d567(231), eventListener)
});
const runtime = new Runtime(!![]);
function _0x1e1d(_0x59d39d, _0x5a09d1) {
    return _0x1e1d = function (_0x228400, _0x1e1da4) {
        _0x228400 = _0x228400 - 214;
        let _0x4c6b49 = _0x2284[_0x228400];
        return _0x4c6b49;
    }, _0x1e1d(_0x59d39d, _0x5a09d1);
}
(() => {
    const _0x167816 = _0x19d567, _0x5a0781 = new Debugger(global);
    _0x5a0781[_0x167816(233)]({ 'global': global })[_0x167816(234)] ? runtime[_0x167816(235)](null, global, {}) : _0x5a0781[_0x167816(236)] = function (_0x6eb860) {
        const _0x54465c = _0x167816;
        _0x5a0781['onNewScript'] = undefined, _0x5a0781[_0x54465c(237)](), runtime['createExecutionContext'](null, global, {});
    };
})();
class RuntimeAgent {
    constructor(_0x2ac679, _0x571eb4) {
        const _0xcc8df = _0x19d567;
        this[_0xcc8df(238)] = _0x2ac679, this[_0xcc8df(239)] = _0x571eb4[_0xcc8df(240)](_0xcc8df(241));
        for (const _0x4de331 of this[_0xcc8df(238)][_0xcc8df(242)]())
            this['_onExecutionContextCreated'](_0x4de331);
        this['_eventListeners'] = [
            this['_runtime'][_0xcc8df(243)][_0xcc8df(244)](_0x3e01ff => this['_browserRuntime'][_0xcc8df(245)]('runtimeConsole', _0x3e01ff)),
            this[_0xcc8df(238)][_0xcc8df(243)][_0xcc8df(246)](this['_onExecutionContextCreated']['bind'](this)),
            this[_0xcc8df(238)]['events'][_0xcc8df(247)](this['_onExecutionContextDestroyed'][_0xcc8df(248)](this)),
            _0x571eb4[_0xcc8df(249)](_0xcc8df(241), {
                'evaluate': this[_0xcc8df(238)][_0xcc8df(250)][_0xcc8df(248)](this[_0xcc8df(238)]),
                'callFunction': this[_0xcc8df(238)][_0xcc8df(251)][_0xcc8df(248)](this[_0xcc8df(238)]),
                'getObjectProperties': this['_runtime'][_0xcc8df(252)]['bind'](this[_0xcc8df(238)]),
                'disposeObject': this[_0xcc8df(238)][_0xcc8df(253)][_0xcc8df(248)](this[_0xcc8df(238)])
            })
        ];
    }
    [_0x19d567(254)](_0x4eeee2) {
        const _0x3ffe80 = _0x19d567;
        this[_0x3ffe80(239)][_0x3ffe80(245)](_0x3ffe80(255), {
            'executionContextId': _0x4eeee2['id'](),
            'auxData': _0x4eeee2[_0x3ffe80(256)]()
        });
    }
    [_0x19d567(257)](_0x23b33f) {
        const _0x42ec85 = _0x19d567;
        this[_0x42ec85(239)][_0x42ec85(245)]('runtimeExecutionContextDestroyed', { 'executionContextId': _0x23b33f['id']() });
    }
    [_0x19d567(258)]() {
        const _0x35f1e2 = _0x19d567;
        for (const _0x2b9bd4 of this['_eventListeners'])
            _0x2b9bd4();
        this[_0x35f1e2(259)] = [];
    }
}
new RuntimeAgent(runtime, channel);