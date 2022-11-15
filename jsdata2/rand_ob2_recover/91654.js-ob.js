const fs = require('fs-extra'), path = require(_0x3c5d18(510)), fileType = require('file-type'), {createFileNode} = require('./create-file-node'), {createFilePath} = require(_0x3c5d18(511)), {createContentDigest} = require(_0x3c5d18(512)), cacheId = _0x4253c0 => 'create-file-node-from-buffer-' + _0x4253c0, writeBuffer = (_0x52f68d, _0x1b10d9) => new Promise((_0x18f00f, _0x56df00) => {
        const _0x49a064 = _0x3c5d18;
        fs[_0x49a064(513)](_0x52f68d, _0x1b10d9, _0x42b7ac => _0x42b7ac ? _0x56df00(_0x42b7ac) : _0x18f00f());
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
    let _0x5a9a3c = await _0x51b3f2[_0x4b8972(514)](cacheId(_0x46453d));
    if (!_0x5a9a3c) {
        if (typeof _0x524974 === _0x4b8972(515)) {
            const _0x53ff82 = await fileType['fromBuffer'](_0x2ba6d1);
            _0x524974 = _0x53ff82 ? '.' + _0x53ff82['ext'] : _0x4b8972(516);
        }
        _0x5a9a3c = createFilePath(path[_0x4b8972(517)](_0x54ee1d, _0x46453d), _0x3b2af1, _0x524974), await fs[_0x4b8972(518)](path[_0x4b8972(519)](_0x5a9a3c)), await writeBuffer(_0x5a9a3c, _0x2ba6d1), await _0x51b3f2['set'](cacheId(_0x46453d), _0x5a9a3c);
    }
    const _0x37effb = await createFileNode(_0x5a9a3c, _0x5c8550, {});
    return _0x37effb[_0x4b8972(520)][_0x4b8972(521)] = _0x4b8972(522) + _0x46453d + '>"', _0x37effb[_0x4b8972(523)] = _0x46453d, _0x37effb[_0x4b8972(524)] = _0x6917f4, await _0xd511fa(_0x37effb, { 'name': _0x4b8972(525) }), _0x37effb;
}
const processingCache = {};
function _0x514f(_0x3ff0bb, _0x4dfb84) {
    return _0x514f = function (_0x5cea8e, _0x514fd5) {
        _0x5cea8e = _0x5cea8e - 499;
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
    if (typeof _0xcefdbe !== _0x28eadb(526))
        throw new Error(_0x28eadb(527) + typeof _0xcefdbe);
    if (typeof _0x125207 !== 'function')
        throw new Error(_0x28eadb(528) + typeof _0x125207);
    typeof _0x102805 === _0x28eadb(526) && (_0x1d8d70 = _0x102805(_0x28eadb(525)));
    if (typeof _0x1d8d70 !== _0x28eadb(529))
        throw new Error(_0x28eadb(530) + typeof _0x1d8d70);
    if (!_0x235614)
        return Promise['reject'](_0x28eadb(531) + _0x235614);
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