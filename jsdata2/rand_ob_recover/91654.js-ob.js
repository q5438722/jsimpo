const fs = require(_0x598cbf(436)), path = require(_0x598cbf(437)), fileType = require(_0x598cbf(438)), {createFileNode} = require(_0x598cbf(439)), {createFilePath} = require(_0x598cbf(440)), {createContentDigest} = require('gatsby-core-utils'), cacheId = _0x205900 => _0x598cbf(441) + _0x205900, writeBuffer = (_0x7ad0c, _0xa7bb08) => new Promise((_0x4e05eb, _0x43ed97) => {
        fs['writeFile'](_0x7ad0c, _0xa7bb08, _0x470e98 => _0x470e98 ? _0x43ed97(_0x470e98) : _0x4e05eb());
    });
async function processBufferNode({
    buffer: _0x4a5f36,
    hash: _0x409995,
    cache: _0x3509ec,
    createNode: _0x188875,
    parentNodeId: _0x4117ab,
    createNodeId: _0x11bb86,
    ext: _0x2d9e3b,
    name: _0x47fed2
}) {
    const _0x543071 = _0x598cbf, _0xf3106e = {
            'SFVNk': function (_0x4335ce, _0x4e2604) {
                return _0x4335ce(_0x4e2604);
            },
            'OjDgw': function (_0x299db3, _0x1c18d1) {
                return _0x299db3 === _0x1c18d1;
            },
            'fUfAS': function (_0x42723e, _0x350ce5, _0x5d0bb6, _0x9c8915) {
                return _0x42723e(_0x350ce5, _0x5d0bb6, _0x9c8915);
            },
            'BDWlD': function (_0x557d5a, _0x252d98, _0x407514) {
                return _0x557d5a(_0x252d98, _0x407514);
            }
        }, _0x9473f7 = _0x3509ec[_0x543071(442)];
    let _0x520963 = await _0x3509ec[_0x543071(443)](_0xf3106e[_0x543071(444)](cacheId, _0x409995));
    if (!_0x520963) {
        if (_0xf3106e[_0x543071(445)](typeof _0x2d9e3b, _0x543071(446))) {
            const _0x162e84 = await fileType['fromBuffer'](_0x4a5f36);
            _0x2d9e3b = _0x162e84 ? '.' + _0x162e84[_0x543071(447)] : _0x543071(448);
        }
        _0x520963 = _0xf3106e[_0x543071(449)](createFilePath, path[_0x543071(450)](_0x9473f7, _0x409995), _0x47fed2, _0x2d9e3b), await fs[_0x543071(451)](path['dirname'](_0x520963)), await _0xf3106e['BDWlD'](writeBuffer, _0x520963, _0x4a5f36), await _0x3509ec['set'](_0xf3106e[_0x543071(444)](cacheId, _0x409995), _0x520963);
    }
    const _0x5d0169 = await _0xf3106e[_0x543071(449)](createFileNode, _0x520963, _0x11bb86, {});
    return _0x5d0169[_0x543071(452)][_0x543071(453)] = 'File "Buffer<' + _0x409995 + '>"', _0x5d0169[_0x543071(454)] = _0x409995, _0x5d0169[_0x543071(455)] = _0x4117ab, await _0xf3106e[_0x543071(456)](_0x188875, _0x5d0169, { 'name': _0x543071(457) }), _0x5d0169;
}
const processingCache = {};
module[_0x598cbf(458)] = ({
    buffer: _0x6cc8ed,
    hash: _0x3c2503,
    cache: _0x5f1010,
    createNode: _0x52d656,
    getCache: _0x373134,
    parentNodeId: parentNodeId = null,
    createNodeId: _0x430bce,
    ext: _0x76407e,
    name: name = _0x3c2503
}) => {
    const _0x57a000 = _0x598cbf, _0x544cc0 = {
            'OgHed': function (_0xb8612, _0x5158a6) {
                return _0xb8612 !== _0x5158a6;
            },
            'dTrRM': function (_0x407cf6, _0x2c3139) {
                return _0x407cf6 !== _0x2c3139;
            },
            'mIbtm': function (_0x1d304b, _0x471b9a) {
                return _0x1d304b(_0x471b9a);
            },
            'fPiSz': function (_0x44b8ad, _0x3f37d2) {
                return _0x44b8ad(_0x3f37d2);
            },
            'vmBDF': function (_0x37452b, _0x345a9a) {
                return _0x37452b(_0x345a9a);
            }
        };
    if (_0x544cc0[_0x57a000(459)](typeof _0x430bce, _0x57a000(460)))
        throw new Error(_0x57a000(461) + typeof _0x430bce);
    if (_0x544cc0[_0x57a000(462)](typeof _0x52d656, _0x57a000(460)))
        throw new Error(_0x57a000(463) + typeof _0x52d656);
    typeof _0x373134 === _0x57a000(460) && (_0x5f1010 = _0x544cc0[_0x57a000(464)](_0x373134, _0x57a000(457)));
    if (typeof _0x5f1010 !== _0x57a000(465))
        throw new Error(_0x57a000(466) + typeof _0x5f1010);
    if (!_0x6cc8ed)
        return Promise[_0x57a000(467)](_0x57a000(468) + _0x6cc8ed);
    !_0x3c2503 && (_0x3c2503 = _0x544cc0['fPiSz'](createContentDigest, _0x6cc8ed));
    if (processingCache[_0x3c2503])
        return processingCache[_0x3c2503];
    const _0x59502a = _0x544cc0[_0x57a000(469)](processBufferNode, {
        'buffer': _0x6cc8ed,
        'hash': _0x3c2503,
        'cache': _0x5f1010,
        'createNode': _0x52d656,
        'parentNodeId': parentNodeId,
        'createNodeId': _0x430bce,
        'ext': _0x76407e,
        'name': name
    });
    return processingCache[_0x3c2503] = _0x59502a, processingCache[_0x3c2503];
};