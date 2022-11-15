const _0x4d1e = ['701367ebgUEp', '746AjDuQm', '717VJLCRa', '976054gkhaMH', '742829NemSUP', '299580fyZcfp', 'fs-extra', 'path', 'file-type', './create-file-node', './utils', 'create-file-node-from-buffer-', 'directory', 'get', 'SFVNk', 'OjDgw', 'undefined', 'ext', '.bin', 'fUfAS', 'join', 'ensureDir', 'internal', 'description', 'hash', 'parent', 'BDWlD', 'gatsby-source-filesystem', 'exports', 'OgHed', 'function', 'createNodeId must be a function, was ', 'dTrRM', 'createNode must be a function, was ', 'mIbtm', 'object', 'Neither "cache" or "getCache" was passed. getCache must be function that return Gatsby cache, "cache" must be the Gatsby cache, was ', 'reject', 'bad buffer: ', 'vmBDF', '1180160KfxbdR', '94UwhQyS', '7503qqzSKt', '1GygkhL'];
const _0x598cbf = _0x3c2a;

function _0x3c2a(_0x40f88d, _0x1eade8) {
    return _0x3c2a = function (_0x51380a, _0x5824cc) {
        _0x51380a = _0x51380a - 426;
        const _0x5b64dd = _0x4d1e[_0x51380a];

        return _0x5b64dd;
    }, _0x3c2a(_0x40f88d, _0x1eade8);
}
(function (_0x4dd96c, _0x53f2c7) {
    const _0x5b1783 = _0x3c2a;

    while (true) {
        try {
            const _0x3ac348 = -parseInt(_0x5b1783(0x1aa)) + parseInt(_0x5b1783(0x1ab)) * parseInt(_0x5b1783(0x1ac)) + parseInt(_0x5b1783(0x1ad)) * parseInt(_0x5b1783(0x1ae)) + -parseInt(_0x5b1783(0x1af)) * -parseInt(_0x5b1783(0x1b0)) + parseInt(_0x5b1783(0x1b1)) + -parseInt(_0x5b1783(0x1b2)) + -parseInt(_0x5b1783(0x1b3));

            if (_0x3ac348 === _0x53f2c7) break;else _0x4dd96c.push(_0x4dd96c.shift());
        } catch (_0x3ae60f) {
            _0x4dd96c.push(_0x4dd96c.shift());
        }
    }
})(_0x4d1e, 695016);

const fs = require(_0x598cbf(0x1b4));

const path = require(_0x598cbf(0x1b5));

const fileType = require(_0x598cbf(0x1b6));

var { createFileNode } = require(_0x598cbf(0x1b7));

var { createFilePath } = require(_0x598cbf(0x1b8));

var { createContentDigest } = require('gatsby-core-utils');

const cacheId = _0x205900 => _0x598cbf(0x1b9) + _0x205900;

const writeBuffer = (_0x7ad0c, _0xa7bb08) => new Promise((_0x4e05eb, _0x43ed97) => {
    fs.writeFile(_0x7ad0c, _0xa7bb08, _0x470e98 => _0x470e98 ? _0x43ed97(_0x470e98) : _0x4e05eb());
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
    const _0x543071 = _0x598cbf;
    const _0xf3106e = {
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
    };

    const _0x9473f7 = _0x3509ec[_0x543071(0x1ba)];

    var _0x520963 = await _0x3509ec[_0x543071(0x1bb)](_0xf3106e[_0x543071(0x1bc)](cacheId, _0x409995));

    if (!_0x520963) {
        if (_0xf3106e[_0x543071(0x1bd)](typeof _0x2d9e3b, _0x543071(0x1be))) {
            const _0x162e84 = await fileType.fromBuffer(_0x4a5f36);

            _0x2d9e3b = _0x162e84 ? '.' + _0x162e84[_0x543071(0x1bf)] : _0x543071(0x1c0);
        }
        _0x520963 = _0xf3106e[_0x543071(0x1c1)](createFilePath, path[_0x543071(0x1c2)](_0x9473f7, _0x409995), _0x47fed2, _0x2d9e3b), await fs[_0x543071(0x1c3)](path.dirname(_0x520963)), await _0xf3106e.BDWlD(writeBuffer, _0x520963, _0x4a5f36), await _0x3509ec.set(_0xf3106e[_0x543071(0x1bc)](cacheId, _0x409995), _0x520963);
    }

    const _0x5d0169 = await _0xf3106e[_0x543071(0x1c1)](createFileNode, _0x520963, _0x11bb86, {});

    return _0x5d0169[_0x543071(0x1c4)][_0x543071(0x1c5)] = 'File "Buffer<' + _0x409995 + '>"', _0x5d0169[_0x543071(0x1c6)] = _0x409995, _0x5d0169[_0x543071(0x1c7)] = _0x4117ab, await _0xf3106e[_0x543071(0x1c8)](_0x188875, _0x5d0169, { 'name': _0x543071(0x1c9) }), _0x5d0169;
}
const processingCache = {};

module[_0x598cbf(0x1ca)] = ({
    buffer: _0x6cc8ed,
    hash: _0x3c2503,
    cache: _0x5f1010,
    createNode: _0x52d656,
    getCache: _0x373134,
    parentNodeId = null,
    createNodeId: _0x430bce,
    ext: _0x76407e,
    name = _0x3c2503
}) => {
    const _0x57a000 = _0x598cbf;
    const _0x544cc0 = {
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

    if (_0x544cc0[_0x57a000(0x1cb)](typeof _0x430bce, _0x57a000(0x1cc))) throw new Error(_0x57a000(0x1cd) + typeof _0x430bce);
    if (_0x544cc0[_0x57a000(0x1ce)](typeof _0x52d656, _0x57a000(0x1cc))) throw new Error(_0x57a000(0x1cf) + typeof _0x52d656);
    typeof _0x373134 === _0x57a000(0x1cc) && (_0x5f1010 = _0x544cc0[_0x57a000(0x1d0)](_0x373134, _0x57a000(0x1c9)));
    if (typeof _0x5f1010 !== _0x57a000(0x1d1)) throw new Error(_0x57a000(0x1d2) + typeof _0x5f1010);
    if (!_0x6cc8ed) return Promise[_0x57a000(0x1d3)](_0x57a000(0x1d4) + _0x6cc8ed);
    !_0x3c2503 && (_0x3c2503 = _0x544cc0.fPiSz(createContentDigest, _0x6cc8ed));
    if (processingCache[_0x3c2503]) return processingCache[_0x3c2503];

    const _0x59502a = _0x544cc0[_0x57a000(0x1d5)](processBufferNode, {
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
