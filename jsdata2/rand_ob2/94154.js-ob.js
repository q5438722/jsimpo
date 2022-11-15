const _0x2d1f = [
    '1tdwvCo',
    '220829GdAzIr',
    '59981fLaJSK',
    '14cVqCZa',
    'exports',
    'plugin\x20file\x20%s',
    'isArray',
    'browsers',
    'Expected\x20list\x20of\x20browsers\x20in\x20the\x20config',
    'Expected\x20at\x20least\x201\x20browser\x20in\x20the\x20config',
    'find',
    'electron',
    'List\x20of\x20browsers\x20passed\x20into\x20plugins\x20does\x20not\x20include\x20Electron\x20browser',
    'returning\x20only\x20Electron\x20browser\x20from\x20plugins\x20%o',
    '252972FEwkCY',
    '347CGnLBK',
    '269sFSUJY',
    '187398SaZYaI',
    '431841qoPjsp',
    '503731DOjVMT'
];
function _0x5233(_0x514a7f, _0x20463a) {
    return _0x5233 = function (_0x2d1f5e, _0x5233c4) {
        _0x2d1f5e = _0x2d1f5e - 0xcc;
        let _0x542e93 = _0x2d1f[_0x2d1f5e];
        return _0x542e93;
    }, _0x5233(_0x514a7f, _0x20463a);
}
const _0x57a9c4 = _0x5233;
(function (_0x5633d0, _0x3f8f01) {
    const _0x1758a2 = _0x5233;
    while (!![]) {
        try {
            const _0x53e54a = parseInt(_0x1758a2(0xcc)) + -parseInt(_0x1758a2(0xcd)) * -parseInt(_0x1758a2(0xce)) + -parseInt(_0x1758a2(0xcf)) + parseInt(_0x1758a2(0xd0)) + -parseInt(_0x1758a2(0xd1)) * -parseInt(_0x1758a2(0xd2)) + parseInt(_0x1758a2(0xd3)) + -parseInt(_0x1758a2(0xd4)) * parseInt(_0x1758a2(0xd5));
            if (_0x53e54a === _0x3f8f01)
                break;
            else
                _0x5633d0['push'](_0x5633d0['shift']());
        } catch (_0x234108) {
            _0x5633d0['push'](_0x5633d0['shift']());
        }
    }
}(_0x2d1f, 0x741c0));
const debug = require('debug')('cypress:e2e');
module[_0x57a9c4(0xd6)] = function (_0xecaf7b, _0x58c832) {
    const _0x20aba4 = _0x57a9c4;
    debug(_0x20aba4(0xd7), __filename), debug('received\x20config\x20with\x20browsers\x20%o', _0x58c832['browsers']);
    if (!Array[_0x20aba4(0xd8)](_0x58c832[_0x20aba4(0xd9)]))
        throw new Error(_0x20aba4(0xda));
    if (_0x58c832[_0x20aba4(0xd9)]['length'] === 0x0)
        throw new Error(_0x20aba4(0xdb));
    const _0x5a775b = _0x58c832[_0x20aba4(0xd9)][_0x20aba4(0xdc)](_0x14222f => {
        const _0x24a744 = _0x20aba4;
        return _0x14222f['name'] === _0x24a744(0xdd);
    });
    if (!_0x5a775b)
        throw new Error(_0x20aba4(0xde));
    const _0xffb0f2 = { 'browsers': [_0x5a775b] };
    return debug(_0x20aba4(0xdf), _0xffb0f2), _0xffb0f2;
};
