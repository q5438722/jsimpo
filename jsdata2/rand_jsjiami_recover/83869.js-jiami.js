'use strict';
loadSubScript('chrome://juggler/content/content/Runtime.js');
loadSubScript('chrome://juggler/content/SimpleChannel.js');
const channel = new SimpleChannel('worker::worker');
const eventListener = _0x59c3aa => channel['_onMessage'](JSON['parse'](_0x59c3aa['data']));
this['addEventListener']('message', eventListener);
channel['setTransport']({
    'sendMessage': _0x55cf74 => postMessage(JSON['stringify'](_0x55cf74)),
    'dispose': () => this['removeEventListener']('message', eventListener)
});
const runtime = new Runtime(!![]);
(() => {
    const _0x4a8cff = new Debugger(global);
    if (_0x4a8cff['findScripts']({ 'global': global })['length']) {
        if ('EXhoC' === 'EXhoC') {
            runtime['createExecutionContext'](null, global, {});
        } else {
            _0x4a8cff['onNewScript'] = undefined;
            _0x4a8cff['removeAllDebuggees']();
            runtime['createExecutionContext'](null, global, {});
        }
    } else {
        _0x4a8cff['onNewScript'] = function (_0x5f4599) {
            _0x4a8cff['onNewScript'] = undefined;
            _0x4a8cff['removeAllDebuggees']();
            runtime['createExecutionContext'](null, global, {});
        };
    }
})();
class RuntimeAgent {
    constructor(_0x3569f3, _0x26b8ac) {
        this['_runtime'] = _0x3569f3;
        this['_browserRuntime'] = _0x26b8ac['connect']('runtime');
        for (const _0x334474 of this['_runtime']['executionContexts']())
            this['_onExecutionContextCreated'](_0x334474);
        this['_eventListeners'] = [
            this['_runtime']['events']['onConsoleMessage'](_0x33441c => this['_browserRuntime']['emit']('runtimeConsole', _0x33441c)),
            this['_runtime']['events']['onExecutionContextCreated'](this['_onExecutionContextCreated']['bind'](this)),
            this['_runtime']['events']['onExecutionContextDestroyed'](this['_onExecutionContextDestroyed']['bind'](this)),
            _0x26b8ac['register']('runtime', {
                'evaluate': this['_runtime']['evaluate']['bind'](this['_runtime']),
                'callFunction': this['_runtime']['callFunction']['bind'](this['_runtime']),
                'getObjectProperties': this['_runtime']['getObjectProperties']['bind'](this['_runtime']),
                'disposeObject': this['_runtime']['disposeObject']['bind'](this['_runtime'])
            })
        ];
    }
    ['_onExecutionContextCreated'](_0x29e225) {
        this['_browserRuntime']['emit']('runtimeExecutionContextCreated', {
            'executionContextId': _0x29e225['id'](),
            'auxData': _0x29e225['auxData']()
        });
    }
    ['_onExecutionContextDestroyed'](_0x9db425) {
        this['_browserRuntime']['emit']('runtimeExecutionContextDestroyed', { 'executionContextId': _0x9db425['id']() });
    }
    ['dispose']() {
        for (const _0xc0cd87 of this['_eventListeners'])
            _0xc0cd87();
        this['_eventListeners'] = [];
    }
}
new RuntimeAgent(runtime, channel);