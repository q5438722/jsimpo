function _0x35d4(_0x513215, _0x47e8f3) {
    return _0x35d4 = function (_0x25f6b9, _0x375246) {
        _0x25f6b9 = _0x25f6b9 - (1 * -6967 + 80 * -46 + 11143);
        let _0x42b37f = _0x4eb5[_0x25f6b9];
        return _0x42b37f;
    }, _0x35d4(_0x513215, _0x47e8f3);
}
const path = require('path');
exports[_0x4ee30a(506)] = async ({
    graphql: _0x3d3db8,
    actions: _0x4f78fb
}) => {
    const _0x1a643d = _0x4ee30a, _0x360618 = {
            'ueOUa': function (_0x226b9b, _0x531b22) {
                return _0x226b9b(_0x531b22);
            }
        }, {createPage: _0xb201e0} = _0x4f78fb, {data: _0x3b51ac} = await _0x360618[_0x1a643d(507)](_0x3d3db8, _0x1a643d(508)), _0x44be39 = path[_0x1a643d(509)](_0x1a643d(510));
    for (const {node: _0x4aaeef} of _0x3b51ac['allMongodbCloudDocuments'][_0x1a643d(511)]) {
        _0x360618[_0x1a643d(507)](_0xb201e0, {
            'path': '/item/' + _0x4aaeef['id'] + '/',
            'component': _0x44be39,
            'context': { 'id': _0x4aaeef['id'] }
        });
    }
};