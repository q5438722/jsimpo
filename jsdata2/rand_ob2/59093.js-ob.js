var _0x3cba = [
    'Resolving\x20in\x202',
    'cb(\x22foo\x22)',
    'Should\x20resolve\x20in\x201',
    '11Nltfms',
    '22445AfkTeC',
    '9950aRZSzk',
    '5rYZXcI',
    '8925HQZrgM',
    '116sRfjil',
    '22702UUkoUj',
    '5vnolna',
    '471418IFuhjx',
    '2PNRpmW',
    '61768kkLzMh',
    '970324pNJHET',
    'log',
    'connect',
    'Assigning\x20in\x201',
    'Protocol',
    'Runtime',
    'var\x20a\x20=\x2042;',
    'evaluate',
    'Awaiting\x20in\x201',
    'var\x20cb;\x20new\x20Promise(f\x20=>\x20cb\x20=\x20f)'
];
function _0x19b8(_0x542049, _0x5114b0) {
    return _0x19b8 = function (_0x3cba58, _0x19b84d) {
        _0x3cba58 = _0x3cba58 - 0xa4;
        var _0x305e91 = _0x3cba[_0x3cba58];
        return _0x305e91;
    }, _0x19b8(_0x542049, _0x5114b0);
}
var _0x489243 = _0x19b8;
(function (_0x2467fb, _0xecc58b) {
    var _0x480ccf = _0x19b8;
    while (!![]) {
        try {
            var _0x132f72 = parseInt(_0x480ccf(0xa4)) * -parseInt(_0x480ccf(0xa5)) + parseInt(_0x480ccf(0xa6)) * parseInt(_0x480ccf(0xa7)) + parseInt(_0x480ccf(0xa8)) * parseInt(_0x480ccf(0xa9)) + -parseInt(_0x480ccf(0xaa)) * parseInt(_0x480ccf(0xab)) + -parseInt(_0x480ccf(0xac)) * parseInt(_0x480ccf(0xad)) + -parseInt(_0x480ccf(0xae)) + parseInt(_0x480ccf(0xaf));
            if (_0x132f72 === _0xecc58b)
                break;
            else
                _0x2467fb['push'](_0x2467fb['shift']());
        } catch (_0x9d6af4) {
            _0x2467fb['push'](_0x2467fb['shift']());
        }
    }
}(_0x3cba, 0xa88bd), InspectorTest[_0x489243(0xb0)]('Tests\x20that\x20multiple\x20sessions\x20share\x20the\x20context.'), async function test() {
    var _0xab9334 = _0x489243, _0x270969 = new InspectorTest['ContextGroup'](), _0xc848af = _0x270969[_0xab9334(0xb1)](), _0x3a0e15 = _0x270969['connect']();
    InspectorTest['log'](_0xab9334(0xb2)), await _0xc848af[_0xab9334(0xb3)][_0xab9334(0xb4)]['evaluate']({ 'expression': _0xab9334(0xb5) }), InspectorTest[_0xab9334(0xb0)]('Evaluating\x20in\x202'), InspectorTest['logMessage'](await _0x3a0e15[_0xab9334(0xb3)][_0xab9334(0xb4)][_0xab9334(0xb6)]({ 'expression': 'a' })), InspectorTest['log'](_0xab9334(0xb7));
    var _0x125897 = _0xc848af[_0xab9334(0xb3)][_0xab9334(0xb4)]['evaluate']({
        'expression': _0xab9334(0xb8),
        'awaitPromise': !![]
    });
    InspectorTest[_0xab9334(0xb0)](_0xab9334(0xb9)), await _0x3a0e15[_0xab9334(0xb3)][_0xab9334(0xb4)]['evaluate']({ 'expression': _0xab9334(0xba) }), InspectorTest[_0xab9334(0xb0)](_0xab9334(0xbb)), InspectorTest['logMessage'](await _0x125897), InspectorTest['completeTest']();
}());
