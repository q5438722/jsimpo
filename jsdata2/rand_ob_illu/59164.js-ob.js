const _0x2c67 = ['foo()//# sourceURL=expr2.js', 'cancelPauseOnNextStatement', 'orNxC', '75856AfqVqY', '11ZgyJMa', '379934tJVyrm', '2wHuoKc', '458349SewpoG', '1333649tbQXjX', '27446YGYSYa', '708679zPmCIB', '3219692rjBFpq', 'start', 'Checks breakProgram,(schedule|cancel)PauseOnNextStatement test API', 'addScript', '\nfunction callBreakProgram() {\n  inspector.breakProgram(\'reason\', JSON.stringify({a: 42}));\n}\n\nfunction foo() {\n  return 42;\n}', 'setupScriptMap', 'onPaused', 'Stack:', 'BXFON', 'logCallFrames', 'params', 'callFrames', 'log', 'kubDd', 'logMessage', 'resume', 'Debugger', 'enable', 'callBreakProgram()', 'Runtime', 'then', 'reason', 'foo()//# sourceURL=expr1.js', 'schedulePauseOnNextStatement', 'stringify', 'evaluate', 'nXzVv'];
const _0x19b37f = _0x5284;

(function (_0x100eb3, _0x4bfc5f) {
    const _0x262cb1 = _0x5284;

    while (true) {
        try {
            const _0x4b992e = parseInt(_0x262cb1(0xfa)) * parseInt(_0x262cb1(0xfb)) + -parseInt(_0x262cb1(0xfc)) * parseInt(_0x262cb1(0xfd)) + -parseInt(_0x262cb1(0xfe)) + -parseInt(_0x262cb1(0xff)) + parseInt(_0x262cb1(0x100)) + -parseInt(_0x262cb1(0x101)) + parseInt(_0x262cb1(0x102));

            if (_0x4b992e === _0x4bfc5f) break;else _0x100eb3.push(_0x100eb3.shift());
        } catch (_0x17d032) {
            _0x100eb3.push(_0x100eb3.shift());
        }
    }
})(_0x2c67, 821009);
function _0x5284(_0x306190, _0x3c3a7e) {
    return _0x5284 = function (_0x11f0da, _0x1ae202) {
        _0x11f0da = _0x11f0da - 250;
        const _0x53d83a = _0x2c67[_0x11f0da];

        return _0x53d83a;
    }, _0x5284(_0x306190, _0x3c3a7e);
}

var { session, contextGroup, Protocol } = InspectorTest[_0x19b37f(0x103)](_0x19b37f(0x104));

contextGroup[_0x19b37f(0x105)](_0x19b37f(0x106), 7, 26), session[_0x19b37f(0x107)](), Protocol.Debugger[_0x19b37f(0x108)](_0x468853 => {
    const _0x2d1bfd = _0x19b37f;
    const _0x33c8f9 = {
        'BXFON': _0x2d1bfd(0x109),
        'kubDd': 'Other data:'
    };

    InspectorTest.log(_0x33c8f9[_0x2d1bfd(0x10a)]), session[_0x2d1bfd(0x10b)](_0x468853[_0x2d1bfd(0x10c)].callFrames), delete _0x468853[_0x2d1bfd(0x10c)][_0x2d1bfd(0x10d)], InspectorTest[_0x2d1bfd(0x10e)](_0x33c8f9[_0x2d1bfd(0x10f)]), InspectorTest[_0x2d1bfd(0x110)](_0x468853), InspectorTest[_0x2d1bfd(0x10e)](''), Protocol.Debugger[_0x2d1bfd(0x111)]();
}), Protocol[_0x19b37f(0x112)][_0x19b37f(0x113)](), InspectorTest.runTestSuite([function testBreakProgram(_0x3116fd) {
    const _0x9ce1c8 = _0x19b37f;
    const _0x36c8f2 = { 'LESOC': _0x9ce1c8(0x114) };

    Protocol[_0x9ce1c8(0x115)].evaluate({ 'expression': _0x36c8f2.LESOC })[_0x9ce1c8(0x116)](_0x3116fd);
}, function testSchedulePauseOnNextStatement(_0x3252e5) {
    const _0x2f8a22 = _0x19b37f;
    const _0x19a08c = {
        'iiWKv': _0x2f8a22(0x117),
        'nXzVv': _0x2f8a22(0x118)
    };

    contextGroup[_0x2f8a22(0x119)](_0x19a08c.iiWKv, JSON[_0x2f8a22(0x11a)]({ 'a': 0x2a })), Protocol[_0x2f8a22(0x115)][_0x2f8a22(0x11b)]({ 'expression': _0x19a08c[_0x2f8a22(0x11c)] }).then(() => Protocol[_0x2f8a22(0x115)][_0x2f8a22(0x11b)]({ 'expression': _0x2f8a22(0x11d) })).then(() => contextGroup[_0x2f8a22(0x11e)]())[_0x2f8a22(0x116)](_0x3252e5);
}, function testCancelPauseOnNextStatement(_0x1fc8cb) {
    const _0x5e0831 = _0x19b37f;
    const _0x1a1d71 = { 'orNxC': _0x5e0831(0x117) };

    contextGroup[_0x5e0831(0x119)](_0x1a1d71[_0x5e0831(0x11f)], JSON[_0x5e0831(0x11a)]({ 'a': 0x2a })), contextGroup[_0x5e0831(0x11e)](), Protocol[_0x5e0831(0x115)][_0x5e0831(0x11b)]({ 'expression': 'foo()' })[_0x5e0831(0x116)](_0x1fc8cb);
}]);
