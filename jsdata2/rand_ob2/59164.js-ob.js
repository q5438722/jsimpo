const _0x1233 = [
    'foo()//#\x20sourceURL=expr2.js',
    'cancelPauseOnNextStatement',
    'stringify',
    'foo()',
    '539623PdiTnx',
    '719829tuOrVi',
    '134005sedKZR',
    '113883xHzYhb',
    '379903eKvrtP',
    '1lSUSsS',
    '1211778hmEHkq',
    '284731PyndfK',
    '2XYAoNR',
    'start',
    'addScript',
    'setupScriptMap',
    'Debugger',
    'onPaused',
    'Stack:',
    'logCallFrames',
    'params',
    'callFrames',
    'log',
    'Other\x20data:',
    'logMessage',
    'enable',
    'runTestSuite',
    'Runtime',
    'callBreakProgram()',
    'then',
    'schedulePauseOnNextStatement',
    'reason',
    'evaluate'
];
const _0x2e74ed = _0xcfd9;
function _0xcfd9(_0x3bdedb, _0x5241cc) {
    return _0xcfd9 = function (_0x12332c, _0xcfd99c) {
        _0x12332c = _0x12332c - 0x1cd;
        let _0x587952 = _0x1233[_0x12332c];
        return _0x587952;
    }, _0xcfd9(_0x3bdedb, _0x5241cc);
}
(function (_0x128034, _0x2e316b) {
    const _0x229f16 = _0xcfd9;
    while (!![]) {
        try {
            const _0x452f87 = -parseInt(_0x229f16(0x1cd)) + -parseInt(_0x229f16(0x1ce)) + -parseInt(_0x229f16(0x1cf)) + parseInt(_0x229f16(0x1d0)) + parseInt(_0x229f16(0x1d1)) * parseInt(_0x229f16(0x1d2)) + parseInt(_0x229f16(0x1d3)) + -parseInt(_0x229f16(0x1d4)) * -parseInt(_0x229f16(0x1d5));
            if (_0x452f87 === _0x2e316b)
                break;
            else
                _0x128034['push'](_0x128034['shift']());
        } catch (_0x385e6b) {
            _0x128034['push'](_0x128034['shift']());
        }
    }
}(_0x1233, 0xd73a1));
let {session, contextGroup, Protocol} = InspectorTest[_0x2e74ed(0x1d6)]('Checks\x20breakProgram,(schedule|cancel)PauseOnNextStatement\x20test\x20API');
contextGroup[_0x2e74ed(0x1d7)]('\x0afunction\x20callBreakProgram()\x20{\x0a\x20\x20inspector.breakProgram(\x27reason\x27,\x20JSON.stringify({a:\x2042}));\x0a}\x0a\x0afunction\x20foo()\x20{\x0a\x20\x20return\x2042;\x0a}', 0x7, 0x1a), session[_0x2e74ed(0x1d8)](), Protocol[_0x2e74ed(0x1d9)][_0x2e74ed(0x1da)](_0x542843 => {
    const _0x51f409 = _0x2e74ed;
    InspectorTest['log'](_0x51f409(0x1db)), session[_0x51f409(0x1dc)](_0x542843[_0x51f409(0x1dd)]['callFrames']), delete _0x542843[_0x51f409(0x1dd)][_0x51f409(0x1de)], InspectorTest[_0x51f409(0x1df)](_0x51f409(0x1e0)), InspectorTest[_0x51f409(0x1e1)](_0x542843), InspectorTest[_0x51f409(0x1df)](''), Protocol['Debugger']['resume']();
}), Protocol['Debugger'][_0x2e74ed(0x1e2)](), InspectorTest[_0x2e74ed(0x1e3)]([
    function testBreakProgram(_0x56cbb5) {
        const _0x5072c1 = _0x2e74ed;
        Protocol[_0x5072c1(0x1e4)]['evaluate']({ 'expression': _0x5072c1(0x1e5) })[_0x5072c1(0x1e6)](_0x56cbb5);
    },
    function testSchedulePauseOnNextStatement(_0x427ea6) {
        const _0x9673eb = _0x2e74ed;
        contextGroup[_0x9673eb(0x1e7)](_0x9673eb(0x1e8), JSON['stringify']({ 'a': 0x2a })), Protocol[_0x9673eb(0x1e4)][_0x9673eb(0x1e9)]({ 'expression': 'foo()//#\x20sourceURL=expr1.js' })[_0x9673eb(0x1e6)](() => Protocol[_0x9673eb(0x1e4)][_0x9673eb(0x1e9)]({ 'expression': _0x9673eb(0x1ea) }))[_0x9673eb(0x1e6)](() => contextGroup[_0x9673eb(0x1eb)]())[_0x9673eb(0x1e6)](_0x427ea6);
    },
    function testCancelPauseOnNextStatement(_0x5d3576) {
        const _0x3a7d1c = _0x2e74ed;
        contextGroup[_0x3a7d1c(0x1e7)]('reason', JSON[_0x3a7d1c(0x1ec)]({ 'a': 0x2a })), contextGroup[_0x3a7d1c(0x1eb)](), Protocol['Runtime'][_0x3a7d1c(0x1e9)]({ 'expression': _0x3a7d1c(0x1ed) })[_0x3a7d1c(0x1e6)](_0x5d3576);
    }
]);
