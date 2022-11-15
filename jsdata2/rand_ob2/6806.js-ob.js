const _0xe26e = [
    '261937slWiET',
    '2ijhjPv',
    '91305iYXGPH',
    '960168RuOIpI',
    '71sDMmuA',
    '545kSPlUm',
    'path',
    'readdirSync',
    'join',
    '../../../app/containers',
    'concat',
    'exports',
    '175694doREhs',
    '2207BFzOQc',
    '978085HbhWYf'
];
const _0x29f8b1 = _0xe58b;
(function (_0x1b7e1e, _0x50651a) {
    const _0x657a26 = _0xe58b;
    while (!![]) {
        try {
            const _0x4eb2af = -parseInt(_0x657a26(0x147)) + -parseInt(_0x657a26(0x148)) + parseInt(_0x657a26(0x149)) + parseInt(_0x657a26(0x14a)) * parseInt(_0x657a26(0x14b)) + parseInt(_0x657a26(0x14c)) + -parseInt(_0x657a26(0x14d)) + -parseInt(_0x657a26(0x14e)) * -parseInt(_0x657a26(0x14f));
            if (_0x4eb2af === _0x50651a)
                break;
            else
                _0x1b7e1e['push'](_0x1b7e1e['shift']());
        } catch (_0x1767a5) {
            _0x1b7e1e['push'](_0x1b7e1e['shift']());
        }
    }
}(_0xe26e, 0x78942));
function _0xe58b(_0x37bb5b, _0x5b8b2a) {
    return _0xe58b = function (_0xe26ed3, _0xe58b9f) {
        _0xe26ed3 = _0xe26ed3 - 0x147;
        let _0x9e3af9 = _0xe26e[_0xe26ed3];
        return _0x9e3af9;
    }, _0xe58b(_0x37bb5b, _0x5b8b2a);
}
const fs = require('fs'), path = require(_0x29f8b1(0x150)), pageComponents = fs[_0x29f8b1(0x151)](path['join'](__dirname, '../../../app/components')), pageContainers = fs[_0x29f8b1(0x151)](path[_0x29f8b1(0x152)](__dirname, _0x29f8b1(0x153))), components = pageComponents[_0x29f8b1(0x154)](pageContainers);
function componentExists(_0x489634) {
    return components['indexOf'](_0x489634) >= 0x0;
}
module[_0x29f8b1(0x155)] = componentExists;
