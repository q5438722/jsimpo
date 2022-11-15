function _0x5284(_0x306190, _0x3c3a7e) {
    return _0x5284 = function (_0x11f0da, _0x1ae202) {
        _0x11f0da = _0x11f0da - (4026 + -4117 * -1 + -7893);
        let _0x53d83a = _0x2c67[_0x11f0da];
        return _0x53d83a;
    }, _0x5284(_0x306190, _0x3c3a7e);
}
let {session, contextGroup, Protocol} = InspectorTest[_0x19b37f(259)](_0x19b37f(260));
contextGroup[_0x19b37f(261)](_0x19b37f(262), -9578 + -3 * -153 + 9126, 6472 * -1 + 9305 * 1 + -2807), session[_0x19b37f(263)](), Protocol['Debugger'][_0x19b37f(264)](_0x468853 => {
    const _0x2d1bfd = _0x19b37f, _0x33c8f9 = {
            'BXFON': _0x2d1bfd(265),
            'kubDd': 'Other data:'
        };
    InspectorTest['log'](_0x33c8f9[_0x2d1bfd(266)]), session[_0x2d1bfd(267)](_0x468853[_0x2d1bfd(268)]['callFrames']), delete _0x468853[_0x2d1bfd(268)][_0x2d1bfd(269)], InspectorTest[_0x2d1bfd(270)](_0x33c8f9[_0x2d1bfd(271)]), InspectorTest[_0x2d1bfd(272)](_0x468853), InspectorTest[_0x2d1bfd(270)](''), Protocol['Debugger'][_0x2d1bfd(273)]();
}), Protocol[_0x19b37f(274)][_0x19b37f(275)](), InspectorTest['runTestSuite']([
    function testBreakProgram(_0x3116fd) {
        const _0x9ce1c8 = _0x19b37f, _0x36c8f2 = { 'LESOC': _0x9ce1c8(276) };
        Protocol[_0x9ce1c8(277)]['evaluate']({ 'expression': _0x36c8f2['LESOC'] })[_0x9ce1c8(278)](_0x3116fd);
    },
    function testSchedulePauseOnNextStatement(_0x3252e5) {
        const _0x2f8a22 = _0x19b37f, _0x19a08c = {
                'iiWKv': _0x2f8a22(279),
                'nXzVv': _0x2f8a22(280)
            };
        contextGroup[_0x2f8a22(281)](_0x19a08c['iiWKv'], JSON[_0x2f8a22(282)]({ 'a': 42 })), Protocol[_0x2f8a22(277)][_0x2f8a22(283)]({ 'expression': _0x19a08c[_0x2f8a22(284)] })['then'](() => Protocol[_0x2f8a22(277)][_0x2f8a22(283)]({ 'expression': _0x2f8a22(285) }))['then'](() => contextGroup[_0x2f8a22(286)]())[_0x2f8a22(278)](_0x3252e5);
    },
    function testCancelPauseOnNextStatement(_0x1fc8cb) {
        const _0x5e0831 = _0x19b37f, _0x1a1d71 = { 'orNxC': _0x5e0831(279) };
        contextGroup[_0x5e0831(281)](_0x1a1d71[_0x5e0831(287)], JSON[_0x5e0831(282)]({ 'a': 42 })), contextGroup[_0x5e0831(286)](), Protocol[_0x5e0831(277)][_0x5e0831(283)]({ 'expression': 'foo()' })[_0x5e0831(278)](_0x1fc8cb);
    }
]);