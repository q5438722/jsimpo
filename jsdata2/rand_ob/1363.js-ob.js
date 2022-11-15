'use strict';
const _0x58da = [
    'exports',
    'atom-build',
    'getContainerClient',
    'listBlobsFlat',
    'log',
    'Deleting\x20blob\x20',
    'name',
    'deleteBlob',
    'resolve',
    'reject',
    'message',
    'then',
    'Uploading\x20',
    'getBlockBlobClient',
    'basename',
    'uploadFile',
    'PIpwc',
    '870135DKqzFM',
    '1LStORp',
    '17994DhaSBD',
    '2083wNnNGU',
    '839gZpdgq',
    '8042NcsMjx',
    '10KzFgdD',
    '309926xEoqDj',
    '1342tCwxGr',
    '12wzPUdN',
    '1425357UigCCy',
    'path',
    '@azure/storage-blob'
];
function _0x3789(_0xfc0ad8, _0x2e6977) {
    return _0x3789 = function (_0xfa73fc, _0x29ec6b) {
        _0xfa73fc = _0xfa73fc - (0x12dc + 0x19e * -0x11 + 0x9c4);
        let _0x5a3d30 = _0x58da[_0xfa73fc];
        return _0x5a3d30;
    }, _0x3789(_0xfc0ad8, _0x2e6977);
}
const _0x21800e = _0x3789;
(function (_0x1e6d85, _0x181f22) {
    const _0x447346 = _0x3789;
    while (!![]) {
        try {
            const _0x3142bb = -parseInt(_0x447346(0x122)) * -parseInt(_0x447346(0x123)) + parseInt(_0x447346(0x124)) + -parseInt(_0x447346(0x125)) * -parseInt(_0x447346(0x126)) + parseInt(_0x447346(0x127)) * parseInt(_0x447346(0x128)) + -parseInt(_0x447346(0x129)) + parseInt(_0x447346(0x12a)) * parseInt(_0x447346(0x12b)) + -parseInt(_0x447346(0x12c));
            if (_0x3142bb === _0x181f22)
                break;
            else
                _0x1e6d85['push'](_0x1e6d85['shift']());
        } catch (_0x41154f) {
            _0x1e6d85['push'](_0x1e6d85['shift']());
        }
    }
}(_0x58da, -0x16f262 * -0x1 + -0x647db + 0x8 * -0x2e7f));
const path = require(_0x21800e(0x12d)), {BlobServiceClient} = require(_0x21800e(0x12e));
module[_0x21800e(0x12f)] = function upload(_0x3d3bb6, _0x5e29a8, _0x46d498) {
    const _0xc0253b = _0x21800e, _0x121bec = {
            'PIpwc': function (_0x4d2826, _0x3223da) {
                return _0x4d2826(_0x3223da);
            },
            'dEFlf': _0xc0253b(0x130),
            'afwQW': function (_0x5a25c7) {
                return _0x5a25c7();
            }
        }, _0x31cb0 = BlobServiceClient['fromConnectionString'](_0x3d3bb6), _0x25c046 = _0x121bec['dEFlf'], _0xf346c5 = _0x31cb0[_0xc0253b(0x131)](_0x25c046);
    async function _0x5733a7() {
        const _0x40c8c0 = _0xc0253b;
        return _0xf346c5[_0x40c8c0(0x132)]({ 'prefix': _0x5e29a8 });
    }
    async function _0x8ab597(_0x358929 = []) {
        const _0x463690 = _0xc0253b;
        try {
            for await (const _0x24db99 of _0x358929) {
                console[_0x463690(0x133)](_0x463690(0x134) + _0x24db99[_0x463690(0x135)]), _0xf346c5[_0x463690(0x136)](_0x24db99[_0x463690(0x135)]);
            }
            return Promise[_0x463690(0x137)](!![]);
        } catch (_0x370b15) {
            return Promise[_0x463690(0x138)](_0x370b15[_0x463690(0x139)]);
        }
    }
    function _0x10c790(_0x3b9cbf) {
        const _0xd0d85 = _0xc0253b;
        return _0x3b9cbf['reduce'](function (_0x5df05a, _0x49f4df) {
            const _0x27becd = _0x3789;
            return _0x5df05a[_0x27becd(0x13a)](() => _0x50a343(_0x49f4df));
        }, Promise[_0xd0d85(0x137)]());
    }
    function _0x50a343(_0x163cff) {
        return new Promise(async (_0x1ae4bc, _0x5edd4d) => {
            const _0x5db7aa = _0x3789;
            try {
                console['info'](_0x5db7aa(0x13b) + _0x163cff);
                const _0x5f272d = _0xf346c5[_0x5db7aa(0x13c)](path['join'](_0x5e29a8, path[_0x5db7aa(0x13d)](_0x163cff))), _0x3f5e98 = await _0x5f272d[_0x5db7aa(0x13e)](_0x163cff);
                _0x121bec['PIpwc'](_0x1ae4bc, _0x3f5e98);
            } catch (_0x53fa6b) {
                _0x121bec[_0x5db7aa(0x13f)](_0x5edd4d, _0x53fa6b['message']);
            }
        });
    }
    return _0x121bec['afwQW'](_0x5733a7)[_0xc0253b(0x13a)](_0x8ab597)[_0xc0253b(0x13a)](() => _0x10c790(_0x46d498));
};
