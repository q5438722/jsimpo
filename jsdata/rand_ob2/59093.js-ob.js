var _0x5135 = [
    'evaluate',
    'var\x20a\x20=\x2042;',
    'Evaluating\x20in\x202',
    'Protocol',
    'Awaiting\x20in\x201',
    'Resolving\x20in\x202',
    'cb(\x22foo\x22)',
    'Should\x20resolve\x20in\x201',
    'logMessage',
    'completeTest',
    '9EtCBCD',
    '98421AMbkIN',
    '796407XaMZeB',
    '425496BZXLwm',
    '1kYjsuq',
    '1QVhwPp',
    '760329fBeFtf',
    '1mGHvKr',
    '694239ZvzQij',
    '1fkigLO',
    '713731InliNC',
    '1930908TcVxPS',
    'log',
    'ContextGroup',
    'connect',
    'Assigning\x20in\x201',
    'Runtime'
];
var _0x53c1a0 = _0x1995;
function _0x1995(_0x2db492, _0x4604e9) {
    return _0x1995 = function (_0x5135c8, _0x199528) {
        _0x5135c8 = _0x5135c8 - 0xe0;
        var _0x3c7a47 = _0x5135[_0x5135c8];
        return _0x3c7a47;
    }, _0x1995(_0x2db492, _0x4604e9);
}
(function (_0x3d252c, _0x488182) {
    var _0x51aff4 = _0x1995;
    while (!![]) {
        try {
            var _0x4c297f = parseInt(_0x51aff4(0xe0)) * -parseInt(_0x51aff4(0xe1)) + -parseInt(_0x51aff4(0xe2)) + -parseInt(_0x51aff4(0xe3)) * parseInt(_0x51aff4(0xe4)) + parseInt(_0x51aff4(0xe5)) * -parseInt(_0x51aff4(0xe6)) + -parseInt(_0x51aff4(0xe7)) * -parseInt(_0x51aff4(0xe8)) + parseInt(_0x51aff4(0xe9)) * parseInt(_0x51aff4(0xea)) + parseInt(_0x51aff4(0xeb));
            if (_0x4c297f === _0x488182)
                break;
            else
                _0x3d252c['push'](_0x3d252c['shift']());
        } catch (_0x3d1d97) {
            _0x3d252c['push'](_0x3d252c['shift']());
        }
    }
}(_0x5135, 0x72f49), InspectorTest[_0x53c1a0(0xec)]('Tests\x20that\x20multiple\x20sessions\x20share\x20the\x20context.'), async function test() {
    var _0xa2aee4 = _0x53c1a0, _0x55d599 = new InspectorTest[(_0xa2aee4(0xed))](), _0x238a92 = _0x55d599[_0xa2aee4(0xee)](), _0xec6610 = _0x55d599[_0xa2aee4(0xee)]();
    InspectorTest[_0xa2aee4(0xec)](_0xa2aee4(0xef)), await _0x238a92['Protocol'][_0xa2aee4(0xf0)][_0xa2aee4(0xf1)]({ 'expression': _0xa2aee4(0xf2) }), InspectorTest[_0xa2aee4(0xec)](_0xa2aee4(0xf3)), InspectorTest['logMessage'](await _0xec6610[_0xa2aee4(0xf4)][_0xa2aee4(0xf0)][_0xa2aee4(0xf1)]({ 'expression': 'a' })), InspectorTest['log'](_0xa2aee4(0xf5));
    var _0x14cd4f = _0x238a92['Protocol'][_0xa2aee4(0xf0)][_0xa2aee4(0xf1)]({
        'expression': 'var\x20cb;\x20new\x20Promise(f\x20=>\x20cb\x20=\x20f)',
        'awaitPromise': !![]
    });
    InspectorTest[_0xa2aee4(0xec)](_0xa2aee4(0xf6)), await _0xec6610['Protocol']['Runtime'][_0xa2aee4(0xf1)]({ 'expression': _0xa2aee4(0xf7) }), InspectorTest[_0xa2aee4(0xec)](_0xa2aee4(0xf8)), InspectorTest[_0xa2aee4(0xf9)](await _0x14cd4f), InspectorTest[_0xa2aee4(0xfa)]();
}());
