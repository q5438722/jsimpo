const _0x4eb5 = [
    'edges',
    '149519aCqdea',
    '3TaRzoW',
    '195798GIQRSi',
    '234417ZSToos',
    '211151NJNyBR',
    '2fDJqsb',
    '540602QmetSB',
    '1VhNnad',
    '29622iWJvDN',
    '854590MKFrFf',
    'createPages',
    'ueOUa',
    '\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20allMongodbCloudDocuments(limit:\x201000)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20edges\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20node\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20',
    'resolve',
    './src/templates/item.js'
];
const _0x4ee30a = _0x35d4;
(function (_0x21ab68, _0x5a7ed2) {
    const _0x5a3926 = _0x35d4;
    while (!![]) {
        try {
            const _0x46d32f = parseInt(_0x5a3926(0x1f0)) * -parseInt(_0x5a3926(0x1f1)) + -parseInt(_0x5a3926(0x1f2)) + parseInt(_0x5a3926(0x1f3)) + parseInt(_0x5a3926(0x1f4)) * parseInt(_0x5a3926(0x1f5)) + -parseInt(_0x5a3926(0x1f6)) * parseInt(_0x5a3926(0x1f7)) + -parseInt(_0x5a3926(0x1f8)) + parseInt(_0x5a3926(0x1f9));
            if (_0x46d32f === _0x5a7ed2)
                break;
            else
                _0x21ab68['push'](_0x21ab68['shift']());
        } catch (_0x44b534) {
            _0x21ab68['push'](_0x21ab68['shift']());
        }
    }
}(_0x4eb5, 0x90dc6 + 0x5664 * -0x2 + -0x3d9e4));
function _0x35d4(_0x513215, _0x47e8f3) {
    return _0x35d4 = function (_0x25f6b9, _0x375246) {
        _0x25f6b9 = _0x25f6b9 - (0x1 * -0x1b37 + 0x50 * -0x2e + 0x2b87);
        let _0x42b37f = _0x4eb5[_0x25f6b9];
        return _0x42b37f;
    }, _0x35d4(_0x513215, _0x47e8f3);
}
const path = require('path');
exports[_0x4ee30a(0x1fa)] = async ({
    graphql: _0x3d3db8,
    actions: _0x4f78fb
}) => {
    const _0x1a643d = _0x4ee30a, _0x360618 = {
            'ueOUa': function (_0x226b9b, _0x531b22) {
                return _0x226b9b(_0x531b22);
            }
        }, {createPage: _0xb201e0} = _0x4f78fb, {data: _0x3b51ac} = await _0x360618[_0x1a643d(0x1fb)](_0x3d3db8, _0x1a643d(0x1fc)), _0x44be39 = path[_0x1a643d(0x1fd)](_0x1a643d(0x1fe));
    for (const {node: _0x4aaeef} of _0x3b51ac['allMongodbCloudDocuments'][_0x1a643d(0x1ff)]) {
        _0x360618[_0x1a643d(0x1fb)](_0xb201e0, {
            'path': '/item/' + _0x4aaeef['id'] + '/',
            'component': _0x44be39,
            'context': { 'id': _0x4aaeef['id'] }
        });
    }
};
