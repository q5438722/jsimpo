const _0x26a3 = [
    '330174QhWmoT',
    '4GatPrv',
    '110562xrGrDV',
    '72651rnzeeL',
    '5DjrIHi',
    '1156827oGODHp',
    'createPages',
    '\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20allMongodbCloudDocuments(limit:\x201000)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20edges\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20node\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20',
    'resolve',
    '/item/',
    '701273qHyOuT',
    '946723iHhZcg',
    '1VxBlHm',
    '44fZCiFo',
    '18103apNEHN'
];
const _0xa6eeb6 = _0x523e;
function _0x523e(_0x2251a0, _0x44e1de) {
    return _0x523e = function (_0x26a3d1, _0x523e13) {
        _0x26a3d1 = _0x26a3d1 - 0x1c8;
        let _0x142994 = _0x26a3[_0x26a3d1];
        return _0x142994;
    }, _0x523e(_0x2251a0, _0x44e1de);
}
(function (_0x546450, _0x579e72) {
    const _0x20848d = _0x523e;
    while (!![]) {
        try {
            const _0x2eecc7 = parseInt(_0x20848d(0x1c8)) + -parseInt(_0x20848d(0x1c9)) * parseInt(_0x20848d(0x1ca)) + parseInt(_0x20848d(0x1cb)) * parseInt(_0x20848d(0x1cc)) + -parseInt(_0x20848d(0x1cd)) + -parseInt(_0x20848d(0x1ce)) * parseInt(_0x20848d(0x1cf)) + parseInt(_0x20848d(0x1d0)) * -parseInt(_0x20848d(0x1d1)) + parseInt(_0x20848d(0x1d2));
            if (_0x2eecc7 === _0x579e72)
                break;
            else
                _0x546450['push'](_0x546450['shift']());
        } catch (_0x8a27eb) {
            _0x546450['push'](_0x546450['shift']());
        }
    }
}(_0x26a3, 0x8bb48));
const path = require('path');
exports[_0xa6eeb6(0x1d3)] = async ({
    graphql: _0x3c0a67,
    actions: _0x4179c0
}) => {
    const _0x5a5d54 = _0xa6eeb6, {createPage: _0xac577d} = _0x4179c0, {data: _0x297db4} = await _0x3c0a67(_0x5a5d54(0x1d4)), _0x9e3d8b = path[_0x5a5d54(0x1d5)]('./src/templates/item.js');
    for (const {node: _0x4e45fd} of _0x297db4['allMongodbCloudDocuments']['edges']) {
        _0xac577d({
            'path': _0x5a5d54(0x1d6) + _0x4e45fd['id'] + '/',
            'component': _0x9e3d8b,
            'context': { 'id': _0x4e45fd['id'] }
        });
    }
};
