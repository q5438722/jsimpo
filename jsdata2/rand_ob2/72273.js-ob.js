'use strict';
const _0x3764 = [
    'query',
    'base',
    'name',
    'filebase',
    '[filebase]\x20is\x20now\x20[base]',
    'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_FILENAME',
    'fullhash',
    'hash',
    '[hash]\x20is\x20now\x20[fullhash]\x20(also\x20consider\x20using\x20[chunkhash]\x20or\x20[contenthash],\x20see\x20documentation\x20for\x20details)',
    'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_HASH',
    'chunk',
    'contentHashType',
    'renderedHash',
    'hashWithLength',
    'chunkhash',
    'contentHash',
    'contentHashWithLength',
    'contenthash',
    'module',
    'getModuleId',
    'runtime',
    'modulehash',
    'moduleid',
    'url',
    'get',
    'startsWith',
    'endsWith',
    'apply',
    'hooks',
    'compilation',
    'tap',
    'exports',
    '397218lzNGEu',
    '1TtMGPx',
    '169874pcBEgs',
    '460380VkaDif',
    '280951VVOOsB',
    '177870nUfEnj',
    '559644BTASAO',
    '880328LdrPTA',
    'path',
    'util',
    './Chunk',
    './Module',
    './util/identifier',
    'string',
    'exec',
    '\x22\x20+\x20(',
    '\x20+\x20\x22\x22).replace(/(^[.-]|[^a-zA-Z0-9_-])+/g,\x20\x22_\x22)\x20+\x20\x22',
    'slice',
    'isArray',
    'function',
    'Path\x20variable\x20',
    '\x20not\x20implemented\x20in\x20this\x20context:\x20',
    'filename',
    'length',
    'set',
    'file'
];
function _0x3cbe(_0x2b19b3, _0x167d9d) {
    return _0x3cbe = function (_0x376434, _0x3cbe43) {
        _0x376434 = _0x376434 - 0x15d;
        let _0x2dca2e = _0x3764[_0x376434];
        return _0x2dca2e;
    }, _0x3cbe(_0x2b19b3, _0x167d9d);
}
const _0x363b8f = _0x3cbe;
(function (_0x428bc8, _0x43541e) {
    const _0x580395 = _0x3cbe;
    while (!![]) {
        try {
            const _0x123248 = -parseInt(_0x580395(0x15d)) * parseInt(_0x580395(0x15e)) + parseInt(_0x580395(0x15f)) + -parseInt(_0x580395(0x160)) + -parseInt(_0x580395(0x161)) + -parseInt(_0x580395(0x162)) + parseInt(_0x580395(0x163)) + parseInt(_0x580395(0x164));
            if (_0x123248 === _0x43541e)
                break;
            else
                _0x428bc8['push'](_0x428bc8['shift']());
        } catch (_0x2563ea) {
            _0x428bc8['push'](_0x428bc8['shift']());
        }
    }
}(_0x3764, 0x47a33));
const {basename, extname} = require(_0x363b8f(0x165)), util = require(_0x363b8f(0x166)), Chunk = require(_0x363b8f(0x167)), Module = require(_0x363b8f(0x168)), {parseResource} = require(_0x363b8f(0x169)), REGEXP = /\[\\*([\w:]+)\\*\]/gi, prepareId = _0x1dfd36 => {
        const _0x248902 = _0x363b8f;
        if (typeof _0x1dfd36 !== _0x248902(0x16a))
            return _0x1dfd36;
        if (/^"\s\+*.*\+\s*"$/['test'](_0x1dfd36)) {
            const _0x5c92c0 = /^"\s\+*\s*(.*)\s*\+\s*"$/[_0x248902(0x16b)](_0x1dfd36);
            return _0x248902(0x16c) + _0x5c92c0[0x1] + _0x248902(0x16d);
        }
        return _0x1dfd36['replace'](/(^[.-]|[^a-zA-Z0-9_-])+/g, '_');
    }, hashLength = (_0x18c681, _0x58d19f, _0x508151, _0x2feb5f) => {
        const _0x1038e8 = (_0x19d32a, _0x271bdf, _0x36e40f) => {
            const _0x5b6a80 = _0x3cbe;
            let _0x5551c8;
            const _0x8ad811 = _0x271bdf && parseInt(_0x271bdf, 0xa);
            if (_0x8ad811 && _0x58d19f)
                _0x5551c8 = _0x58d19f(_0x8ad811);
            else {
                const _0x533d5c = _0x18c681(_0x19d32a, _0x271bdf, _0x36e40f);
                _0x5551c8 = _0x8ad811 ? _0x533d5c[_0x5b6a80(0x16e)](0x0, _0x8ad811) : _0x533d5c;
            }
            if (_0x508151) {
                _0x508151['immutable'] = !![];
                if (Array[_0x5b6a80(0x16f)](_0x508151[_0x2feb5f]))
                    _0x508151[_0x2feb5f] = [
                        ..._0x508151[_0x2feb5f],
                        _0x5551c8
                    ];
                else
                    _0x508151[_0x2feb5f] ? _0x508151[_0x2feb5f] = [
                        _0x508151[_0x2feb5f],
                        _0x5551c8
                    ] : _0x508151[_0x2feb5f] = _0x5551c8;
            }
            return _0x5551c8;
        };
        return _0x1038e8;
    }, replacer = (_0x356360, _0x21a4de) => {
        const _0x2da0d0 = (_0x236a90, _0x47b055, _0x1ed1f7) => {
            const _0x1acdf2 = _0x3cbe;
            typeof _0x356360 === _0x1acdf2(0x170) && (_0x356360 = _0x356360());
            if (_0x356360 === null || _0x356360 === undefined) {
                if (!_0x21a4de)
                    throw new Error(_0x1acdf2(0x171) + _0x236a90 + _0x1acdf2(0x172) + _0x1ed1f7);
                return '';
            } else
                return '' + _0x356360;
        };
        return _0x2da0d0;
    }, deprecationCache = new Map(), deprecatedFunction = (() => () => {
    })(), deprecated = (_0x4fb80e, _0x556010, _0x53cb2e) => {
        let _0x331ccd = deprecationCache['get'](_0x556010);
        return _0x331ccd === undefined && (_0x331ccd = util['deprecate'](deprecatedFunction, _0x556010, _0x53cb2e), deprecationCache['set'](_0x556010, _0x331ccd)), (..._0x2ffb03) => {
            return _0x331ccd(), _0x4fb80e(..._0x2ffb03);
        };
    }, replacePathVariables = (_0x4e9281, _0x539112, _0x539abf) => {
        const _0x1a0d85 = _0x363b8f, _0x1caa20 = _0x539112['chunkGraph'], _0x31c5d0 = new Map();
        if (typeof _0x539112[_0x1a0d85(0x173)] === 'string') {
            const {
                    path: _0xf8687c,
                    query: _0xfda20b,
                    fragment: _0x4e31d0
                } = parseResource(_0x539112[_0x1a0d85(0x173)]), _0x14438d = extname(_0xf8687c), _0x3a8525 = basename(_0xf8687c), _0x2916bc = _0x3a8525[_0x1a0d85(0x16e)](0x0, _0x3a8525['length'] - _0x14438d[_0x1a0d85(0x174)]), _0x170c3d = _0xf8687c[_0x1a0d85(0x16e)](0x0, _0xf8687c[_0x1a0d85(0x174)] - _0x3a8525[_0x1a0d85(0x174)]);
            _0x31c5d0[_0x1a0d85(0x175)](_0x1a0d85(0x176), replacer(_0xf8687c)), _0x31c5d0[_0x1a0d85(0x175)](_0x1a0d85(0x177), replacer(_0xfda20b, !![])), _0x31c5d0[_0x1a0d85(0x175)]('fragment', replacer(_0x4e31d0, !![])), _0x31c5d0[_0x1a0d85(0x175)](_0x1a0d85(0x165), replacer(_0x170c3d, !![])), _0x31c5d0['set'](_0x1a0d85(0x178), replacer(_0x3a8525)), _0x31c5d0[_0x1a0d85(0x175)](_0x1a0d85(0x179), replacer(_0x2916bc)), _0x31c5d0['set']('ext', replacer(_0x14438d, !![])), _0x31c5d0[_0x1a0d85(0x175)](_0x1a0d85(0x17a), deprecated(replacer(_0x3a8525), _0x1a0d85(0x17b), _0x1a0d85(0x17c)));
        }
        if (_0x539112['hash']) {
            const _0x1ff030 = hashLength(replacer(_0x539112['hash']), _0x539112['hashWithLength'], _0x539abf, _0x1a0d85(0x17d));
            _0x31c5d0[_0x1a0d85(0x175)]('fullhash', _0x1ff030), _0x31c5d0[_0x1a0d85(0x175)](_0x1a0d85(0x17e), deprecated(_0x1ff030, _0x1a0d85(0x17f), _0x1a0d85(0x180)));
        }
        if (_0x539112[_0x1a0d85(0x181)]) {
            const _0x5454ba = _0x539112[_0x1a0d85(0x181)], _0x58e2bf = _0x539112[_0x1a0d85(0x182)], _0x4bad6c = replacer(_0x5454ba['id']), _0x351c7e = replacer(_0x5454ba[_0x1a0d85(0x179)] || _0x5454ba['id']), _0x332af1 = hashLength(replacer(_0x5454ba instanceof Chunk ? _0x5454ba[_0x1a0d85(0x183)] : _0x5454ba[_0x1a0d85(0x17e)]), 'hashWithLength' in _0x5454ba ? _0x5454ba[_0x1a0d85(0x184)] : undefined, _0x539abf, _0x1a0d85(0x185)), _0xbd07b4 = hashLength(replacer(_0x539112[_0x1a0d85(0x186)] || _0x58e2bf && _0x5454ba['contentHash'] && _0x5454ba[_0x1a0d85(0x186)][_0x58e2bf]), _0x539112[_0x1a0d85(0x187)] || (_0x1a0d85(0x187) in _0x5454ba && _0x5454ba[_0x1a0d85(0x187)] ? _0x5454ba[_0x1a0d85(0x187)][_0x58e2bf] : undefined), _0x539abf, _0x1a0d85(0x188));
            _0x31c5d0[_0x1a0d85(0x175)]('id', _0x4bad6c), _0x31c5d0[_0x1a0d85(0x175)](_0x1a0d85(0x179), _0x351c7e), _0x31c5d0[_0x1a0d85(0x175)](_0x1a0d85(0x185), _0x332af1), _0x31c5d0[_0x1a0d85(0x175)]('contenthash', _0xbd07b4);
        }
        if (_0x539112[_0x1a0d85(0x189)]) {
            const _0x5dddea = _0x539112[_0x1a0d85(0x189)], _0x318833 = replacer(() => prepareId(_0x5dddea instanceof Module ? _0x1caa20[_0x1a0d85(0x18a)](_0x5dddea) : _0x5dddea['id'])), _0x28f77e = hashLength(replacer(() => _0x5dddea instanceof Module ? _0x1caa20['getRenderedModuleHash'](_0x5dddea, _0x539112[_0x1a0d85(0x18b)]) : _0x5dddea[_0x1a0d85(0x17e)]), _0x1a0d85(0x184) in _0x5dddea ? _0x5dddea[_0x1a0d85(0x184)] : undefined, _0x539abf, _0x1a0d85(0x18c)), _0x2ba5ba = hashLength(replacer(_0x539112[_0x1a0d85(0x186)]), undefined, _0x539abf, _0x1a0d85(0x188));
            _0x31c5d0[_0x1a0d85(0x175)]('id', _0x318833), _0x31c5d0['set'](_0x1a0d85(0x18c), _0x28f77e), _0x31c5d0['set'](_0x1a0d85(0x188), _0x2ba5ba), _0x31c5d0[_0x1a0d85(0x175)](_0x1a0d85(0x17e), _0x539112[_0x1a0d85(0x186)] ? _0x2ba5ba : _0x28f77e), _0x31c5d0['set'](_0x1a0d85(0x18d), deprecated(_0x318833, '[moduleid]\x20is\x20now\x20[id]', 'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_MODULE_ID'));
        }
        return _0x539112[_0x1a0d85(0x18e)] && _0x31c5d0['set'](_0x1a0d85(0x18e), replacer(_0x539112[_0x1a0d85(0x18e)])), typeof _0x539112[_0x1a0d85(0x18b)] === 'string' ? _0x31c5d0[_0x1a0d85(0x175)](_0x1a0d85(0x18b), replacer(() => prepareId(_0x539112[_0x1a0d85(0x18b)]))) : _0x31c5d0[_0x1a0d85(0x175)](_0x1a0d85(0x18b), replacer('_')), typeof _0x4e9281 === 'function' && (_0x4e9281 = _0x4e9281(_0x539112, _0x539abf)), _0x4e9281 = _0x4e9281['replace'](REGEXP, (_0x4ec7e3, _0x1dbe5b) => {
            const _0x544f0e = _0x1a0d85;
            if (_0x1dbe5b[_0x544f0e(0x174)] + 0x2 === _0x4ec7e3[_0x544f0e(0x174)]) {
                const _0x29966d = /^(\w+)(?::(\w+))?$/[_0x544f0e(0x16b)](_0x1dbe5b);
                if (!_0x29966d)
                    return _0x4ec7e3;
                const [, _0x13117f, _0x5c0add] = _0x29966d, _0x297f17 = _0x31c5d0[_0x544f0e(0x18f)](_0x13117f);
                if (_0x297f17 !== undefined)
                    return _0x297f17(_0x4ec7e3, _0x5c0add, _0x4e9281);
            } else {
                if (_0x4ec7e3[_0x544f0e(0x190)]('[\x5c') && _0x4ec7e3[_0x544f0e(0x191)]('\x5c]'))
                    return '[' + _0x4ec7e3[_0x544f0e(0x16e)](0x2, -0x2) + ']';
            }
            return _0x4ec7e3;
        }), _0x4e9281;
    }, plugin = 'TemplatedPathPlugin';
class TemplatedPathPlugin {
    [_0x363b8f(0x192)](_0x24f5c6) {
        const _0x4af494 = _0x363b8f;
        _0x24f5c6[_0x4af494(0x193)][_0x4af494(0x194)][_0x4af494(0x195)](plugin, _0x33175e => {
            const _0x5af3fa = _0x4af494;
            _0x33175e[_0x5af3fa(0x193)]['assetPath']['tap'](plugin, replacePathVariables);
        });
    }
}
module[_0x363b8f(0x196)] = TemplatedPathPlugin;
