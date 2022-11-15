const _0x1a24 = [
    'logSourceLocation',
    'actualLocation',
    'completeTest',
    '108270PcLZbc',
    '959013MAWmgW',
    '20509CgvVmB',
    '29iHTQUC',
    '297717LBQKuE',
    '369063mbGdhi',
    '695352xEYHAH',
    '2063910ULfhkE',
    'start',
    'Breakpoint\x20can\x20be\x20set\x20at\x20line\x20return\x20this.x;',
    'addScript',
    '(function\x20outer()\x20{\x0a\x20\x20var\x20C\x20=\x20(function\x20C_()\x20{\x0a\x20\x20\x20\x20var\x20y\x20=\x201;\x0a\x20\x20\x20\x20function\x20CC()\x20{\x0a\x20\x20\x20\x20\x20\x20this.x\x20=\x200;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20CC.prototype.f\x20=\x20function\x20CCf()\x20{\x0a\x20\x20\x20\x20\x20\x20this.x\x20+=\x20y;\x0a\x20\x20\x20\x20\x20\x20return\x20this.x;\x0a\x20\x20\x20\x20};\x0a\x20\x20\x20\x20return\x20CC;\x0a\x20\x20})();\x0a\x0a\x20\x20var\x20c\x20=\x20new\x20C(0);\x0a})',
    'setupScriptMap',
    'Debugger',
    'enable',
    'onceScriptParsed'
];
function _0x1a34(_0x514c79, _0x406403) {
    return _0x1a34 = function (_0x1a24c5, _0x1a34c9) {
        _0x1a24c5 = _0x1a24c5 - 0x154;
        let _0x5135c9 = _0x1a24[_0x1a24c5];
        return _0x5135c9;
    }, _0x1a34(_0x514c79, _0x406403);
}
const _0x3c7745 = _0x1a34;
(function (_0x484eba, _0x273e13) {
    const _0x55804e = _0x1a34;
    while (!![]) {
        try {
            const _0x15623b = -parseInt(_0x55804e(0x154)) + parseInt(_0x55804e(0x155)) + parseInt(_0x55804e(0x156)) * parseInt(_0x55804e(0x157)) + parseInt(_0x55804e(0x158)) + parseInt(_0x55804e(0x159)) + parseInt(_0x55804e(0x15a)) + -parseInt(_0x55804e(0x15b));
            if (_0x15623b === _0x273e13)
                break;
            else
                _0x484eba['push'](_0x484eba['shift']());
        } catch (_0x386c2c) {
            _0x484eba['push'](_0x484eba['shift']());
        }
    }
}(_0x1a24, 0xb592e));
let {session, contextGroup, Protocol} = InspectorTest[_0x3c7745(0x15c)](_0x3c7745(0x15d));
contextGroup[_0x3c7745(0x15e)](_0x3c7745(0x15f)), async function test() {
    const _0x3b90b8 = _0x3c7745;
    session[_0x3b90b8(0x160)](), Protocol[_0x3b90b8(0x161)][_0x3b90b8(0x162)]();
    const {
        params: {scriptId: _0x260be0}
    } = await Protocol[_0x3b90b8(0x161)][_0x3b90b8(0x163)]();
    InspectorTest['log']('Set\x20breakpoint..');
    const {result: _0x46962b} = await Protocol['Debugger']['setBreakpoint']({
        'location': {
            'scriptId': _0x260be0,
            'lineNumber': 0x8,
            'columnNumber': 0x0
        }
    });
    session[_0x3b90b8(0x164)](_0x46962b[_0x3b90b8(0x165)]), InspectorTest[_0x3b90b8(0x166)]();
}();
