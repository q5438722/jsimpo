const _0x5cea = [
    'File\x20\x22Buffer<',
    'hash',
    'parent',
    'gatsby-source-filesystem',
    'function',
    'createNodeId\x20must\x20be\x20a\x20function,\x20was\x20',
    'createNode\x20must\x20be\x20a\x20function,\x20was\x20',
    'object',
    'Neither\x20\x22cache\x22\x20or\x20\x22getCache\x22\x20was\x20passed.\x20getCache\x20must\x20be\x20function\x20that\x20return\x20Gatsby\x20cache,\x20\x22cache\x22\x20must\x20be\x20the\x20Gatsby\x20cache,\x20was\x20',
    'bad\x20buffer:\x20',
    '1PZYCYQ',
    '237635NFEDVE',
    '14879qvtqOS',
    '7AMqcHA',
    '316939dhjzas',
    '5082TEIEkG',
    '88jvwCIE',
    '323391zqoatY',
    '197903XXZhyj',
    '1aNejJu',
    '140403sQbytW',
    'path',
    './utils',
    'gatsby-core-utils',
    'writeFile',
    'get',
    'undefined',
    '.bin',
    'join',
    'ensureDir',
    'dirname',
    'internal',
    'description'
];
const _0x3c5d18 = _0x514f;
(function (_0x9fc353, _0x5e1672) {
    const _0x280709 = _0x514f;
    while (!![]) {
        try {
            const _0x321d53 = -parseInt(_0x280709(0x1f3)) * -parseInt(_0x280709(0x1f4)) + -parseInt(_0x280709(0x1f5)) * parseInt(_0x280709(0x1f6)) + -parseInt(_0x280709(0x1f7)) + -parseInt(_0x280709(0x1f8)) * -parseInt(_0x280709(0x1f9)) + -parseInt(_0x280709(0x1fa)) + -parseInt(_0x280709(0x1fb)) * -parseInt(_0x280709(0x1fc)) + parseInt(_0x280709(0x1fd));
            if (_0x321d53 === _0x5e1672)
                break;
            else
                _0x9fc353['push'](_0x9fc353['shift']());
        } catch (_0x4f841a) {
            _0x9fc353['push'](_0x9fc353['shift']());
        }
    }
}(_0x5cea, 0x44092));
const fs = require('fs-extra'), path = require(_0x3c5d18(0x1fe)), fileType = require('file-type'), {createFileNode} = require('./create-file-node'), {createFilePath} = require(_0x3c5d18(0x1ff)), {createContentDigest} = require(_0x3c5d18(0x200)), cacheId = _0x4253c0 => 'create-file-node-from-buffer-' + _0x4253c0, writeBuffer = (_0x52f68d, _0x1b10d9) => new Promise((_0x18f00f, _0x56df00) => {
        const _0x49a064 = _0x3c5d18;
        fs[_0x49a064(0x201)](_0x52f68d, _0x1b10d9, _0x42b7ac => _0x42b7ac ? _0x56df00(_0x42b7ac) : _0x18f00f());
    });
async function processBufferNode({
    buffer: _0x2ba6d1,
    hash: _0x46453d,
    cache: _0x51b3f2,
    createNode: _0xd511fa,
    parentNodeId: _0x6917f4,
    createNodeId: _0x5c8550,
    ext: _0x524974,
    name: _0x3b2af1
}) {
    const _0x4b8972 = _0x3c5d18, _0x54ee1d = _0x51b3f2['directory'];
    let _0x5a9a3c = await _0x51b3f2[_0x4b8972(0x202)](cacheId(_0x46453d));
    if (!_0x5a9a3c) {
        if (typeof _0x524974 === _0x4b8972(0x203)) {
            const _0x53ff82 = await fileType['fromBuffer'](_0x2ba6d1);
            _0x524974 = _0x53ff82 ? '.' + _0x53ff82['ext'] : _0x4b8972(0x204);
        }
        _0x5a9a3c = createFilePath(path[_0x4b8972(0x205)](_0x54ee1d, _0x46453d), _0x3b2af1, _0x524974), await fs[_0x4b8972(0x206)](path[_0x4b8972(0x207)](_0x5a9a3c)), await writeBuffer(_0x5a9a3c, _0x2ba6d1), await _0x51b3f2['set'](cacheId(_0x46453d), _0x5a9a3c);
    }
    const _0x37effb = await createFileNode(_0x5a9a3c, _0x5c8550, {});
    return _0x37effb[_0x4b8972(0x208)][_0x4b8972(0x209)] = _0x4b8972(0x20a) + _0x46453d + '>\x22', _0x37effb[_0x4b8972(0x20b)] = _0x46453d, _0x37effb[_0x4b8972(0x20c)] = _0x6917f4, await _0xd511fa(_0x37effb, { 'name': _0x4b8972(0x20d) }), _0x37effb;
}
const processingCache = {};
function _0x514f(_0x3ff0bb, _0x4dfb84) {
    return _0x514f = function (_0x5cea8e, _0x514fd5) {
        _0x5cea8e = _0x5cea8e - 0x1f3;
        let _0x107912 = _0x5cea[_0x5cea8e];
        return _0x107912;
    }, _0x514f(_0x3ff0bb, _0x4dfb84);
}
module['exports'] = ({
    buffer: _0x235614,
    hash: _0x46079c,
    cache: _0x1d8d70,
    createNode: _0x125207,
    getCache: _0x102805,
    parentNodeId: parentNodeId = null,
    createNodeId: _0xcefdbe,
    ext: _0x5d1f9f,
    name: name = _0x46079c
}) => {
    const _0x28eadb = _0x3c5d18;
    if (typeof _0xcefdbe !== _0x28eadb(0x20e))
        throw new Error(_0x28eadb(0x20f) + typeof _0xcefdbe);
    if (typeof _0x125207 !== 'function')
        throw new Error(_0x28eadb(0x210) + typeof _0x125207);
    typeof _0x102805 === _0x28eadb(0x20e) && (_0x1d8d70 = _0x102805(_0x28eadb(0x20d)));
    if (typeof _0x1d8d70 !== _0x28eadb(0x211))
        throw new Error(_0x28eadb(0x212) + typeof _0x1d8d70);
    if (!_0x235614)
        return Promise['reject'](_0x28eadb(0x213) + _0x235614);
    !_0x46079c && (_0x46079c = createContentDigest(_0x235614));
    if (processingCache[_0x46079c])
        return processingCache[_0x46079c];
    const _0x23af1e = processBufferNode({
        'buffer': _0x235614,
        'hash': _0x46079c,
        'cache': _0x1d8d70,
        'createNode': _0x125207,
        'parentNodeId': parentNodeId,
        'createNodeId': _0xcefdbe,
        'ext': _0x5d1f9f,
        'name': name
    });
    return processingCache[_0x46079c] = _0x23af1e, processingCache[_0x46079c];
};
