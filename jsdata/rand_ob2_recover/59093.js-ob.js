InspectorTest[_0x53c1a0(236)]('Tests that multiple sessions share the context.'), async function test() {
    var _0xa2aee4 = _0x53c1a0, _0x55d599 = new InspectorTest[(_0xa2aee4(237))](), _0x238a92 = _0x55d599[_0xa2aee4(238)](), _0xec6610 = _0x55d599[_0xa2aee4(238)]();
    InspectorTest[_0xa2aee4(236)](_0xa2aee4(239)), await _0x238a92['Protocol'][_0xa2aee4(240)][_0xa2aee4(241)]({ 'expression': _0xa2aee4(242) }), InspectorTest[_0xa2aee4(236)](_0xa2aee4(243)), InspectorTest['logMessage'](await _0xec6610[_0xa2aee4(244)][_0xa2aee4(240)][_0xa2aee4(241)]({ 'expression': 'a' })), InspectorTest['log'](_0xa2aee4(245));
    var _0x14cd4f = _0x238a92['Protocol'][_0xa2aee4(240)][_0xa2aee4(241)]({
        'expression': 'var cb; new Promise(f => cb = f)',
        'awaitPromise': !![]
    });
    InspectorTest[_0xa2aee4(236)](_0xa2aee4(246)), await _0xec6610['Protocol']['Runtime'][_0xa2aee4(241)]({ 'expression': _0xa2aee4(247) }), InspectorTest[_0xa2aee4(236)](_0xa2aee4(248)), InspectorTest[_0xa2aee4(249)](await _0x14cd4f), InspectorTest[_0xa2aee4(250)]();
}();