'use strict';
const _0x232c = [
    'uploadFile',
    'then',
    '11WGGpxk',
    '13582uoesfX',
    '38tgTSoe',
    '355GyxYlj',
    '17881nKPWaF',
    '42oxfnPI',
    '333380GCEtfP',
    '1rKFtPW',
    '453866uGwcMT',
    '225363uymqeW',
    '755269URupfM',
    '1ILsSUN',
    '@azure/storage-blob',
    'exports',
    'log',
    'Deleting\x20blob\x20',
    'name',
    'deleteBlob',
    'reject',
    'message',
    'reduce',
    'resolve',
    'Uploading\x20',
    'getBlockBlobClient',
    'join'
];
const _0xcfcfe7 = _0x54e7;
(function (_0x316d6a, _0x52b655) {
    const _0x5c9014 = _0x54e7;
    while (!![]) {
        try {
            const _0x254226 = -parseInt(_0x5c9014(0xd3)) * -parseInt(_0x5c9014(0xd4)) + -parseInt(_0x5c9014(0xd5)) * -parseInt(_0x5c9014(0xd6)) + -parseInt(_0x5c9014(0xd7)) * -parseInt(_0x5c9014(0xd8)) + -parseInt(_0x5c9014(0xd9)) + parseInt(_0x5c9014(0xda)) * parseInt(_0x5c9014(0xdb)) + parseInt(_0x5c9014(0xdc)) + parseInt(_0x5c9014(0xdd)) * -parseInt(_0x5c9014(0xde));
            if (_0x254226 === _0x52b655)
                break;
            else
                _0x316d6a['push'](_0x316d6a['shift']());
        } catch (_0x1c710e) {
            _0x316d6a['push'](_0x316d6a['shift']());
        }
    }
}(_0x232c, 0x7b29a));
const path = require('path'), {BlobServiceClient} = require(_0xcfcfe7(0xdf));
function _0x54e7(_0x1e74f7, _0x286430) {
    return _0x54e7 = function (_0x232c51, _0x54e781) {
        _0x232c51 = _0x232c51 - 0xd3;
        let _0x4537ba = _0x232c[_0x232c51];
        return _0x4537ba;
    }, _0x54e7(_0x1e74f7, _0x286430);
}
module[_0xcfcfe7(0xe0)] = function upload(_0x563642, _0x5f5a63, _0xdaa018) {
    const _0x46ca9e = _0xcfcfe7, _0x5373c8 = BlobServiceClient['fromConnectionString'](_0x563642), _0xdb9473 = 'atom-build', _0x3a5e3c = _0x5373c8['getContainerClient'](_0xdb9473);
    async function _0x321c81() {
        return _0x3a5e3c['listBlobsFlat']({ 'prefix': _0x5f5a63 });
    }
    async function _0xa268b7(_0x16cb1a = []) {
        const _0x4546e6 = _0x54e7;
        try {
            for await (const _0x1eb847 of _0x16cb1a) {
                console[_0x4546e6(0xe1)](_0x4546e6(0xe2) + _0x1eb847[_0x4546e6(0xe3)]), _0x3a5e3c[_0x4546e6(0xe4)](_0x1eb847[_0x4546e6(0xe3)]);
            }
            return Promise['resolve'](!![]);
        } catch (_0x5f2dea) {
            return Promise[_0x4546e6(0xe5)](_0x5f2dea[_0x4546e6(0xe6)]);
        }
    }
    function _0x358745(_0x28d3a8) {
        const _0x5af379 = _0x54e7;
        return _0x28d3a8[_0x5af379(0xe7)](function (_0x1ab88d, _0x8a0bfe) {
            return _0x1ab88d['then'](() => _0x101499(_0x8a0bfe));
        }, Promise[_0x5af379(0xe8)]());
    }
    function _0x101499(_0x2e16e0) {
        return new Promise(async (_0x68f792, _0x58926b) => {
            const _0x349c06 = _0x54e7;
            try {
                console['info'](_0x349c06(0xe9) + _0x2e16e0);
                const _0x4637fb = _0x3a5e3c[_0x349c06(0xea)](path[_0x349c06(0xeb)](_0x5f5a63, path['basename'](_0x2e16e0))), _0x35de9a = await _0x4637fb[_0x349c06(0xec)](_0x2e16e0);
                _0x68f792(_0x35de9a);
            } catch (_0x5ec0f2) {
                _0x58926b(_0x5ec0f2[_0x349c06(0xe6)]);
            }
        });
    }
    return _0x321c81()[_0x46ca9e(0xed)](_0xa268b7)['then'](() => _0x358745(_0xdaa018));
};
