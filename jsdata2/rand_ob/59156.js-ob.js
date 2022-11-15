const _0x89c8 = [
    '14KhkShv',
    'start',
    'Breakpoint\x20can\x20be\x20set\x20at\x20line\x20return\x20this.x;',
    'addScript',
    'setupScriptMap',
    'enable',
    'onceScriptParsed',
    'log',
    'dVAST',
    'Debugger',
    'setBreakpoint',
    'logSourceLocation',
    'actualLocation',
    'completeTest',
    '470037RdHRxS',
    '7mwHNep',
    '221101ybebWc',
    '187115zIRZZL',
    '319913LlBuUy',
    '1045vcxnFl',
    '15YBQLmj',
    '267224ouvUVa',
    '192689qXEMFK'
];
const _0x24951f = _0x6a5c;
(function (_0x31ca07, _0x366380) {
    const _0x29e69a = _0x6a5c;
    while (!![]) {
        try {
            const _0x3c0b74 = parseInt(_0x29e69a(0x16c)) + -parseInt(_0x29e69a(0x16d)) * parseInt(_0x29e69a(0x16e)) + -parseInt(_0x29e69a(0x16f)) + -parseInt(_0x29e69a(0x170)) + parseInt(_0x29e69a(0x171)) * -parseInt(_0x29e69a(0x172)) + -parseInt(_0x29e69a(0x173)) + parseInt(_0x29e69a(0x174)) * parseInt(_0x29e69a(0x175));
            if (_0x3c0b74 === _0x366380)
                break;
            else
                _0x31ca07['push'](_0x31ca07['shift']());
        } catch (_0x652702) {
            _0x31ca07['push'](_0x31ca07['shift']());
        }
    }
}(_0x89c8, 0x743b * -0x11 + 0xda916 + -0x8b * -0xc62));
function _0x6a5c(_0x4803b3, _0x4a6972) {
    return _0x6a5c = function (_0x565565, _0x14bded) {
        _0x565565 = _0x565565 - (-0xef0 + -0x6c9 + 0x1725);
        let _0x7b3ff0 = _0x89c8[_0x565565];
        return _0x7b3ff0;
    }, _0x6a5c(_0x4803b3, _0x4a6972);
}
let {session, contextGroup, Protocol} = InspectorTest[_0x24951f(0x176)](_0x24951f(0x177));
contextGroup[_0x24951f(0x178)]('(function\x20outer()\x20{\x0a\x20\x20var\x20C\x20=\x20(function\x20C_()\x20{\x0a\x20\x20\x20\x20var\x20y\x20=\x201;\x0a\x20\x20\x20\x20function\x20CC()\x20{\x0a\x20\x20\x20\x20\x20\x20this.x\x20=\x200;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20CC.prototype.f\x20=\x20function\x20CCf()\x20{\x0a\x20\x20\x20\x20\x20\x20this.x\x20+=\x20y;\x0a\x20\x20\x20\x20\x20\x20return\x20this.x;\x0a\x20\x20\x20\x20};\x0a\x20\x20\x20\x20return\x20CC;\x0a\x20\x20})();\x0a\x0a\x20\x20var\x20c\x20=\x20new\x20C(0);\x0a})'), async function test() {
    const _0x3ba957 = _0x24951f, _0x5a2162 = { 'dVAST': 'Set\x20breakpoint..' };
    session[_0x3ba957(0x179)](), Protocol['Debugger'][_0x3ba957(0x17a)]();
    const {
        params: {scriptId: _0x3894be}
    } = await Protocol['Debugger'][_0x3ba957(0x17b)]();
    InspectorTest[_0x3ba957(0x17c)](_0x5a2162[_0x3ba957(0x17d)]);
    const {result: _0x3855ef} = await Protocol[_0x3ba957(0x17e)][_0x3ba957(0x17f)]({
        'location': {
            'scriptId': _0x3894be,
            'lineNumber': 0x8,
            'columnNumber': 0x0
        }
    });
    session[_0x3ba957(0x180)](_0x3855ef[_0x3ba957(0x181)]), InspectorTest[_0x3ba957(0x182)]();
}();
