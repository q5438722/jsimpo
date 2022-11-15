InspectorTest['log']('Tests\x20that\x20multiple\x20sessions\x20share\x20the\x20context.'), async function test() {
    var _0x26d0d3 = new InspectorTest['ContextGroup'](), _0x333f81 = _0x26d0d3['connect'](), _0x4d16d7 = _0x26d0d3['connect']();
    InspectorTest['log']('Assigning\x20in\x201'), await _0x333f81['Protocol']['Runtime']['evaluate']({ 'expression': 'var\x20a\x20=\x2042;' }), InspectorTest['log']('Evaluating\x20in\x202'), InspectorTest['logMessage'](await _0x4d16d7['Protocol']['Runtime']['evaluate']({ 'expression': 'a' })), InspectorTest['log']('Awaiting\x20in\x201');
    var _0x59760d = _0x333f81['Protocol']['Runtime']['evaluate']({
        'expression': 'var\x20cb;\x20new\x20Promise(f\x20=>\x20cb\x20=\x20f)',
        'awaitPromise': !![]
    });
    InspectorTest['log']('Resolving\x20in\x202'), await _0x4d16d7['Protocol']['Runtime']['evaluate']({ 'expression': 'cb(\x22foo\x22)' }), InspectorTest['log']('Should\x20resolve\x20in\x201'), InspectorTest['logMessage'](await _0x59760d), InspectorTest['completeTest']();
}();
