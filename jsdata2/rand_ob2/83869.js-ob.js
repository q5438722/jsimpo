'use strict';
const _0x2284 = [
    'executionContexts',
    'events',
    'onConsoleMessage',
    'emit',
    'onExecutionContextCreated',
    'onExecutionContextDestroyed',
    'bind',
    'register',
    'evaluate',
    'callFunction',
    'getObjectProperties',
    'disposeObject',
    '_onExecutionContextCreated',
    'runtimeExecutionContextCreated',
    'auxData',
    '_onExecutionContextDestroyed',
    'dispose',
    '_eventListeners',
    '25871cHezgZ',
    '13OPpmzt',
    '1bPhFVU',
    '963899IXFrMK',
    '352082YCqXcx',
    '1952362jXMkhB',
    '1umYdwC',
    '679419AqznFe',
    '1DdATda',
    '722622YlbZfu',
    '2612431lpOtoP',
    '1KeGfbe',
    'chrome://juggler/content/content/Runtime.js',
    'chrome://juggler/content/SimpleChannel.js',
    '_onMessage',
    'data',
    'addEventListener',
    'message',
    'removeEventListener',
    'findScripts',
    'length',
    'createExecutionContext',
    'onNewScript',
    'removeAllDebuggees',
    '_runtime',
    '_browserRuntime',
    'connect',
    'runtime'
];
const _0x19d567 = _0x1e1d;
(function (_0x2df769, _0x4df7f2) {
    const _0x5abb06 = _0x1e1d;
    while (!![]) {
        try {
            const _0x2c70dc = parseInt(_0x5abb06(0xd6)) * -parseInt(_0x5abb06(0xd7)) + parseInt(_0x5abb06(0xd8)) * parseInt(_0x5abb06(0xd9)) + -parseInt(_0x5abb06(0xda)) + parseInt(_0x5abb06(0xdb)) * -parseInt(_0x5abb06(0xdc)) + -parseInt(_0x5abb06(0xdd)) + parseInt(_0x5abb06(0xde)) * parseInt(_0x5abb06(0xdf)) + parseInt(_0x5abb06(0xe0)) * parseInt(_0x5abb06(0xe1));
            if (_0x2c70dc === _0x4df7f2)
                break;
            else
                _0x2df769['push'](_0x2df769['shift']());
        } catch (_0x162e8d) {
            _0x2df769['push'](_0x2df769['shift']());
        }
    }
}(_0x2284, 0xeef4e));
loadSubScript(_0x19d567(0xe2)), loadSubScript(_0x19d567(0xe3));
const channel = new SimpleChannel('worker::worker'), eventListener = _0x5336ff => channel[_0x19d567(0xe4)](JSON['parse'](_0x5336ff[_0x19d567(0xe5)]));
this[_0x19d567(0xe6)](_0x19d567(0xe7), eventListener), channel['setTransport']({
    'sendMessage': _0x3a7f83 => postMessage(JSON['stringify'](_0x3a7f83)),
    'dispose': () => this[_0x19d567(0xe8)](_0x19d567(0xe7), eventListener)
});
const runtime = new Runtime(!![]);
function _0x1e1d(_0x59d39d, _0x5a09d1) {
    return _0x1e1d = function (_0x228400, _0x1e1da4) {
        _0x228400 = _0x228400 - 0xd6;
        let _0x4c6b49 = _0x2284[_0x228400];
        return _0x4c6b49;
    }, _0x1e1d(_0x59d39d, _0x5a09d1);
}
(() => {
    const _0x167816 = _0x19d567, _0x5a0781 = new Debugger(global);
    _0x5a0781[_0x167816(0xe9)]({ 'global': global })[_0x167816(0xea)] ? runtime[_0x167816(0xeb)](null, global, {}) : _0x5a0781[_0x167816(0xec)] = function (_0x6eb860) {
        const _0x54465c = _0x167816;
        _0x5a0781['onNewScript'] = undefined, _0x5a0781[_0x54465c(0xed)](), runtime['createExecutionContext'](null, global, {});
    };
})();
class RuntimeAgent {
    constructor(_0x2ac679, _0x571eb4) {
        const _0xcc8df = _0x19d567;
        this[_0xcc8df(0xee)] = _0x2ac679, this[_0xcc8df(0xef)] = _0x571eb4[_0xcc8df(0xf0)](_0xcc8df(0xf1));
        for (const _0x4de331 of this[_0xcc8df(0xee)][_0xcc8df(0xf2)]())
            this['_onExecutionContextCreated'](_0x4de331);
        this['_eventListeners'] = [
            this['_runtime'][_0xcc8df(0xf3)][_0xcc8df(0xf4)](_0x3e01ff => this['_browserRuntime'][_0xcc8df(0xf5)]('runtimeConsole', _0x3e01ff)),
            this[_0xcc8df(0xee)][_0xcc8df(0xf3)][_0xcc8df(0xf6)](this['_onExecutionContextCreated']['bind'](this)),
            this[_0xcc8df(0xee)]['events'][_0xcc8df(0xf7)](this['_onExecutionContextDestroyed'][_0xcc8df(0xf8)](this)),
            _0x571eb4[_0xcc8df(0xf9)](_0xcc8df(0xf1), {
                'evaluate': this[_0xcc8df(0xee)][_0xcc8df(0xfa)][_0xcc8df(0xf8)](this[_0xcc8df(0xee)]),
                'callFunction': this[_0xcc8df(0xee)][_0xcc8df(0xfb)][_0xcc8df(0xf8)](this[_0xcc8df(0xee)]),
                'getObjectProperties': this['_runtime'][_0xcc8df(0xfc)]['bind'](this[_0xcc8df(0xee)]),
                'disposeObject': this[_0xcc8df(0xee)][_0xcc8df(0xfd)][_0xcc8df(0xf8)](this[_0xcc8df(0xee)])
            })
        ];
    }
    [_0x19d567(0xfe)](_0x4eeee2) {
        const _0x3ffe80 = _0x19d567;
        this[_0x3ffe80(0xef)][_0x3ffe80(0xf5)](_0x3ffe80(0xff), {
            'executionContextId': _0x4eeee2['id'](),
            'auxData': _0x4eeee2[_0x3ffe80(0x100)]()
        });
    }
    [_0x19d567(0x101)](_0x23b33f) {
        const _0x42ec85 = _0x19d567;
        this[_0x42ec85(0xef)][_0x42ec85(0xf5)]('runtimeExecutionContextDestroyed', { 'executionContextId': _0x23b33f['id']() });
    }
    [_0x19d567(0x102)]() {
        const _0x35f1e2 = _0x19d567;
        for (const _0x2b9bd4 of this['_eventListeners'])
            _0x2b9bd4();
        this[_0x35f1e2(0x103)] = [];
    }
}
new RuntimeAgent(runtime, channel);
