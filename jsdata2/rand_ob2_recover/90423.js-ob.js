const path = require('path');
exports[_0xa6eeb6(467)] = async ({
    graphql: _0x3c0a67,
    actions: _0x4179c0
}) => {
    const _0x5a5d54 = _0xa6eeb6, {createPage: _0xac577d} = _0x4179c0, {data: _0x297db4} = await _0x3c0a67(_0x5a5d54(468)), _0x9e3d8b = path[_0x5a5d54(469)]('./src/templates/item.js');
    for (const {node: _0x4e45fd} of _0x297db4['allMongodbCloudDocuments']['edges']) {
        _0xac577d({
            'path': _0x5a5d54(470) + _0x4e45fd['id'] + '/',
            'component': _0x9e3d8b,
            'context': { 'id': _0x4e45fd['id'] }
        });
    }
};