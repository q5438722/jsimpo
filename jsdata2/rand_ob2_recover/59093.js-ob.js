InspectorTest[_0x489243(176)]('Tests that multiple sessions share the context.'), async function test() {
    var _0xab9334 = _0x489243, _0x270969 = new InspectorTest['ContextGroup'](), _0xc848af = _0x270969[_0xab9334(177)](), _0x3a0e15 = _0x270969['connect']();
    InspectorTest['log'](_0xab9334(178)), await _0xc848af[_0xab9334(179)][_0xab9334(180)]['evaluate']({ 'expression': _0xab9334(181) }), InspectorTest[_0xab9334(176)]('Evaluating in 2'), InspectorTest['logMessage'](await _0x3a0e15[_0xab9334(179)][_0xab9334(180)][_0xab9334(182)]({ 'expression': 'a' })), InspectorTest['log'](_0xab9334(183));
    var _0x125897 = _0xc848af[_0xab9334(179)][_0xab9334(180)]['evaluate']({
        'expression': _0xab9334(184),
        'awaitPromise': !![]
    });
    InspectorTest[_0xab9334(176)](_0xab9334(185)), await _0x3a0e15[_0xab9334(179)][_0xab9334(180)]['evaluate']({ 'expression': _0xab9334(186) }), InspectorTest[_0xab9334(176)](_0xab9334(187)), InspectorTest['logMessage'](await _0x125897), InspectorTest['completeTest']();
}();