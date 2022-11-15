'use strict';
const _0xbb87 = [
    'contentHashType',
    'hexsN',
    'JgkmU',
    'renderedHash',
    'GZGRE',
    'fJZjU',
    'contentHash',
    'yapOL',
    'nHhdz',
    'module',
    'getRenderedModuleHash',
    'runtime',
    'CgkwW',
    'FWqbH',
    'NvQnD',
    'sHIUI',
    'oBnEv',
    'JpJVZ',
    'url',
    'EdYoz',
    'rqpHX',
    'lQtnw',
    'eLhcx',
    'DbzMW',
    'smuAt',
    'exec',
    'get',
    'CCYXf',
    'startsWith',
    'endsWith',
    'TemplatedPathPlugin',
    'hooks',
    'tap',
    '152750FkqIXy',
    '38665glZwsW',
    '737277AtydpL',
    '546234cBxCAj',
    '1otbhDU',
    '523360mRExLp',
    '480947PNHaKr',
    '276099Umfsor',
    '5JgHhzv',
    'util',
    './Chunk',
    './util/identifier',
    'string',
    'sppVf',
    'uQbJS',
    'test',
    '\x20+\x20\x22\x22).replace(/(^[.-]|[^a-zA-Z0-9_-])+/g,\x20\x22_\x22)\x20+\x20\x22',
    'replace',
    'slice',
    'immutable',
    'isArray',
    'aUcMu',
    'VetqD',
    'lfSSy',
    'Path\x20variable\x20',
    '\x20not\x20implemented\x20in\x20this\x20context:\x20',
    'zGHrG',
    'set',
    'uQQrq',
    'fragment',
    'base',
    'name',
    'filebase',
    'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_FILENAME',
    'fullhash',
    'hashWithLength',
    'chunkhash',
    'contentHashWithLength',
    'contenthash',
    'modulehash',
    '[moduleid]\x20is\x20now\x20[id]',
    'function',
    'filename',
    'ygvCu',
    'length',
    'file',
    'vvZDF',
    'zdcWy',
    'GTwJJ',
    'TGLuR',
    'ancPk',
    'hNDUz',
    'ext',
    'vptDD',
    'lxlrE',
    'APudC',
    'ehFkF',
    'hash',
    'WboQf',
    'aLedp',
    'pYfVx',
    'mxhfa',
    'chunk'
];
const _0x11ffdc = _0x3935;
(function (_0x46bbae, _0x225664) {
    const _0x403355 = _0x3935;
    while (!![]) {
        try {
            const _0x339b48 = -parseInt(_0x403355(0x14a)) + -parseInt(_0x403355(0x14b)) + parseInt(_0x403355(0x14c)) + parseInt(_0x403355(0x14d)) * -parseInt(_0x403355(0x14e)) + -parseInt(_0x403355(0x14f)) + -parseInt(_0x403355(0x150)) + parseInt(_0x403355(0x151)) * parseInt(_0x403355(0x152));
            if (_0x339b48 === _0x225664)
                break;
            else
                _0x46bbae['push'](_0x46bbae['shift']());
        } catch (_0x46857a) {
            _0x46bbae['push'](_0x46bbae['shift']());
        }
    }
}(_0xbb87, -0x7acc4 + 0x947d3 + 0x420f9));
function _0x3935(_0x47a185, _0x27cf18) {
    return _0x3935 = function (_0x1c26eb, _0x1394ba) {
        _0x1c26eb = _0x1c26eb - (-0x405 + -0x63 * -0x2 + 0x489);
        let _0x5d6afa = _0xbb87[_0x1c26eb];
        return _0x5d6afa;
    }, _0x3935(_0x47a185, _0x27cf18);
}
const {basename, extname} = require('path'), util = require(_0x11ffdc(0x153)), Chunk = require(_0x11ffdc(0x154)), Module = require('./Module'), {parseResource} = require(_0x11ffdc(0x155)), REGEXP = /\[\\*([\w:]+)\\*\]/gi, prepareId = _0x23bb85 => {
        const _0x1b58af = _0x11ffdc, _0xea79f4 = {
                'sppVf': function (_0x8e70d3, _0x14ea84) {
                    return _0x8e70d3 !== _0x14ea84;
                },
                'uQbJS': _0x1b58af(0x156)
            };
        if (_0xea79f4[_0x1b58af(0x157)](typeof _0x23bb85, _0xea79f4[_0x1b58af(0x158)]))
            return _0x23bb85;
        if (/^"\s\+*.*\+\s*"$/[_0x1b58af(0x159)](_0x23bb85)) {
            const _0x2f5535 = /^"\s\+*\s*(.*)\s*\+\s*"$/['exec'](_0x23bb85);
            return '\x22\x20+\x20(' + _0x2f5535[0x14a5 + -0x376 * -0x8 + 0x182a * -0x2] + _0x1b58af(0x15a);
        }
        return _0x23bb85[_0x1b58af(0x15b)](/(^[.-]|[^a-zA-Z0-9_-])+/g, '_');
    }, hashLength = (_0x58c8e1, _0x552b3f, _0x49b333, _0x16d1d0) => {
        const _0x257558 = {
                'eRsJZ': function (_0x3869a1, _0x107b06) {
                    return _0x3869a1 && _0x107b06;
                }
            }, _0x6b72c = (_0x560df6, _0x3225b9, _0x491a3c) => {
                const _0xf99d45 = _0x3935;
                let _0x23a9e1;
                const _0x13faba = _0x3225b9 && parseInt(_0x3225b9, -0x833 + 0x2a * -0xee + 0x3 * 0xfc3);
                if (_0x257558['eRsJZ'](_0x13faba, _0x552b3f))
                    _0x23a9e1 = _0x552b3f(_0x13faba);
                else {
                    const _0x3a6fa2 = _0x58c8e1(_0x560df6, _0x3225b9, _0x491a3c);
                    _0x23a9e1 = _0x13faba ? _0x3a6fa2[_0xf99d45(0x15c)](0x1070 + -0x10c9 + -0x1 * -0x59, _0x13faba) : _0x3a6fa2;
                }
                if (_0x49b333) {
                    _0x49b333[_0xf99d45(0x15d)] = !![];
                    if (Array[_0xf99d45(0x15e)](_0x49b333[_0x16d1d0]))
                        _0x49b333[_0x16d1d0] = [
                            ..._0x49b333[_0x16d1d0],
                            _0x23a9e1
                        ];
                    else
                        _0x49b333[_0x16d1d0] ? _0x49b333[_0x16d1d0] = [
                            _0x49b333[_0x16d1d0],
                            _0x23a9e1
                        ] : _0x49b333[_0x16d1d0] = _0x23a9e1;
                }
                return _0x23a9e1;
            };
        return _0x6b72c;
    }, replacer = (_0x5d9c07, _0x2861f6) => {
        const _0x42f405 = {
                'aUcMu': 'function',
                'VetqD': function (_0x255307) {
                    return _0x255307();
                },
                'OUyVO': function (_0xd3a64, _0x11efe2) {
                    return _0xd3a64 === _0x11efe2;
                },
                'lfSSy': function (_0xcbe130, _0x19af16) {
                    return _0xcbe130 === _0x19af16;
                }
            }, _0x4f0384 = (_0xbbc44a, _0xd3565c, _0x28d7e7) => {
                const _0x54f5d1 = _0x3935;
                typeof _0x5d9c07 === _0x42f405[_0x54f5d1(0x15f)] && (_0x5d9c07 = _0x42f405[_0x54f5d1(0x160)](_0x5d9c07));
                if (_0x42f405['OUyVO'](_0x5d9c07, null) || _0x42f405[_0x54f5d1(0x161)](_0x5d9c07, undefined)) {
                    if (!_0x2861f6)
                        throw new Error(_0x54f5d1(0x162) + _0xbbc44a + _0x54f5d1(0x163) + _0x28d7e7);
                    return '';
                } else
                    return '' + _0x5d9c07;
            };
        return _0x4f0384;
    }, deprecationCache = new Map(), deprecatedFunction = (() => () => {
    })(), deprecated = (_0x5b9ba9, _0x20ac88, _0x20d27c) => {
        const _0x51fbeb = _0x11ffdc, _0x521d6f = {
                'uQQrq': function (_0x4581a4) {
                    return _0x4581a4();
                },
                'MBXnN': function (_0x483c93, ..._0xcdd6f0) {
                    return _0x483c93(..._0xcdd6f0);
                },
                'zGHrG': function (_0x53c07b, _0x187200) {
                    return _0x53c07b === _0x187200;
                }
            };
        let _0x297bed = deprecationCache['get'](_0x20ac88);
        return _0x521d6f[_0x51fbeb(0x164)](_0x297bed, undefined) && (_0x297bed = util['deprecate'](deprecatedFunction, _0x20ac88, _0x20d27c), deprecationCache[_0x51fbeb(0x165)](_0x20ac88, _0x297bed)), (..._0x99bb01) => {
            const _0x193dc7 = _0x51fbeb;
            return _0x521d6f[_0x193dc7(0x166)](_0x297bed), _0x521d6f['MBXnN'](_0x5b9ba9, ..._0x99bb01);
        };
    }, replacePathVariables = (_0x524555, _0x58fd55, _0x5ed5fd) => {
        const _0x41cf35 = _0x11ffdc, _0x1ae250 = {
                'lQtnw': function (_0x1b92bf, _0x26f57f) {
                    return _0x1b92bf === _0x26f57f;
                },
                'CCYXf': function (_0x53da3d, _0x1566de) {
                    return _0x53da3d !== _0x1566de;
                },
                'APudC': function (_0x650f4a, _0x1422bb, _0x3997de, _0x3dbb3b) {
                    return _0x650f4a(_0x1422bb, _0x3997de, _0x3dbb3b);
                },
                'oBZHQ': function (_0x3027c8, _0x134b1b) {
                    return _0x3027c8(_0x134b1b);
                },
                'ygvCu': function (_0x3a52fc, _0x248e7b) {
                    return _0x3a52fc(_0x248e7b);
                },
                'vvZDF': 'query',
                'zdcWy': _0x41cf35(0x167),
                'GTwJJ': 'path',
                'TGLuR': _0x41cf35(0x168),
                'ancPk': function (_0x3d9478, _0x1f1f70) {
                    return _0x3d9478(_0x1f1f70);
                },
                'hNDUz': _0x41cf35(0x169),
                'vptDD': function (_0x1b2790, _0x22b579, _0x40ba3e) {
                    return _0x1b2790(_0x22b579, _0x40ba3e);
                },
                'lxlrE': _0x41cf35(0x16a),
                'ehFkF': _0x41cf35(0x16b),
                'WboQf': function (_0x3fd593, _0x9145d7, _0x2feaad, _0x3b8932, _0x3b99a5) {
                    return _0x3fd593(_0x9145d7, _0x2feaad, _0x3b8932, _0x3b99a5);
                },
                'aLedp': _0x41cf35(0x16c),
                'pYfVx': 'hash',
                'mxhfa': '[hash]\x20is\x20now\x20[fullhash]\x20(also\x20consider\x20using\x20[chunkhash]\x20or\x20[contenthash],\x20see\x20documentation\x20for\x20details)',
                'oFDjF': 'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_HASH',
                'hexsN': function (_0x223cea, _0x2475b1, _0x34ddd6, _0x14422a, _0x364d9c) {
                    return _0x223cea(_0x2475b1, _0x34ddd6, _0x14422a, _0x364d9c);
                },
                'XJBuK': function (_0x48ce19, _0x5017ac) {
                    return _0x48ce19(_0x5017ac);
                },
                'JgkmU': function (_0x4348ec, _0x706d0b) {
                    return _0x4348ec instanceof _0x706d0b;
                },
                'GZGRE': _0x41cf35(0x16d),
                'fJZjU': _0x41cf35(0x16e),
                'CgkwW': function (_0x17f300, _0x3d05d6, _0x2f23e3, _0x729c96, _0xc79ebe) {
                    return _0x17f300(_0x3d05d6, _0x2f23e3, _0x729c96, _0xc79ebe);
                },
                'yapOL': function (_0x4eb92f, _0xbb86f9) {
                    return _0x4eb92f in _0xbb86f9;
                },
                'igUrH': _0x41cf35(0x16f),
                'nHhdz': _0x41cf35(0x170),
                'axQNP': function (_0x530278, _0x2a250c) {
                    return _0x530278(_0x2a250c);
                },
                'FWqbH': function (_0x557030, _0x11fa7d) {
                    return _0x557030(_0x11fa7d);
                },
                'NvQnD': _0x41cf35(0x171),
                'AIyGf': 'moduleid',
                'sHIUI': function (_0x2decc2, _0x37a4ec, _0x350cb1, _0x26d041) {
                    return _0x2decc2(_0x37a4ec, _0x350cb1, _0x26d041);
                },
                'oBnEv': _0x41cf35(0x172),
                'JpJVZ': 'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_MODULE_ID',
                'EdYoz': 'url',
                'rqpHX': function (_0x50d773, _0x4ca60d) {
                    return _0x50d773(_0x4ca60d);
                },
                'eLhcx': _0x41cf35(0x156),
                'BjQSr': 'runtime',
                'DbzMW': _0x41cf35(0x173),
                'smuAt': function (_0x284990, _0x186978, _0x2c91ac) {
                    return _0x284990(_0x186978, _0x2c91ac);
                }
            }, _0x27fb8b = _0x58fd55['chunkGraph'], _0x110a7e = new Map();
        if (typeof _0x58fd55['filename'] === 'string') {
            const {
                    path: _0x4708bc,
                    query: _0x25557c,
                    fragment: _0x573788
                } = _0x1ae250['oBZHQ'](parseResource, _0x58fd55[_0x41cf35(0x174)]), _0x477eb2 = _0x1ae250['ygvCu'](extname, _0x4708bc), _0x1acb54 = _0x1ae250[_0x41cf35(0x175)](basename, _0x4708bc), _0x11a3cd = _0x1acb54[_0x41cf35(0x15c)](0xdb0 + 0xfc0 + -0x6 * 0x4e8, _0x1acb54[_0x41cf35(0x176)] - _0x477eb2['length']), _0x2d2039 = _0x4708bc[_0x41cf35(0x15c)](-0x1fd1 + -0x12f4 * -0x1 + -0x25 * -0x59, _0x4708bc['length'] - _0x1acb54[_0x41cf35(0x176)]);
            _0x110a7e[_0x41cf35(0x165)](_0x41cf35(0x177), _0x1ae250[_0x41cf35(0x175)](replacer, _0x4708bc)), _0x110a7e['set'](_0x1ae250[_0x41cf35(0x178)], replacer(_0x25557c, !![])), _0x110a7e[_0x41cf35(0x165)](_0x1ae250[_0x41cf35(0x179)], replacer(_0x573788, !![])), _0x110a7e[_0x41cf35(0x165)](_0x1ae250[_0x41cf35(0x17a)], replacer(_0x2d2039, !![])), _0x110a7e[_0x41cf35(0x165)](_0x1ae250[_0x41cf35(0x17b)], _0x1ae250[_0x41cf35(0x17c)](replacer, _0x1acb54)), _0x110a7e[_0x41cf35(0x165)](_0x1ae250[_0x41cf35(0x17d)], _0x1ae250[_0x41cf35(0x17c)](replacer, _0x11a3cd)), _0x110a7e['set'](_0x41cf35(0x17e), _0x1ae250[_0x41cf35(0x17f)](replacer, _0x477eb2, !![])), _0x110a7e[_0x41cf35(0x165)](_0x1ae250[_0x41cf35(0x180)], _0x1ae250[_0x41cf35(0x181)](deprecated, replacer(_0x1acb54), '[filebase]\x20is\x20now\x20[base]', _0x1ae250[_0x41cf35(0x182)]));
        }
        if (_0x58fd55[_0x41cf35(0x183)]) {
            const _0x144aa2 = _0x1ae250[_0x41cf35(0x184)](hashLength, replacer(_0x58fd55[_0x41cf35(0x183)]), _0x58fd55[_0x41cf35(0x16d)], _0x5ed5fd, _0x1ae250[_0x41cf35(0x185)]);
            _0x110a7e['set']('fullhash', _0x144aa2), _0x110a7e[_0x41cf35(0x165)](_0x1ae250[_0x41cf35(0x186)], _0x1ae250[_0x41cf35(0x181)](deprecated, _0x144aa2, _0x1ae250[_0x41cf35(0x187)], _0x1ae250['oFDjF']));
        }
        if (_0x58fd55[_0x41cf35(0x188)]) {
            const _0x1dc5da = _0x58fd55[_0x41cf35(0x188)], _0x25a815 = _0x58fd55[_0x41cf35(0x189)], _0x27c35f = _0x1ae250[_0x41cf35(0x17c)](replacer, _0x1dc5da['id']), _0x47976a = _0x1ae250['ancPk'](replacer, _0x1dc5da[_0x41cf35(0x169)] || _0x1dc5da['id']), _0x62bf81 = _0x1ae250[_0x41cf35(0x18a)](hashLength, _0x1ae250['XJBuK'](replacer, _0x1ae250[_0x41cf35(0x18b)](_0x1dc5da, Chunk) ? _0x1dc5da[_0x41cf35(0x18c)] : _0x1dc5da[_0x41cf35(0x183)]), _0x1ae250[_0x41cf35(0x18d)] in _0x1dc5da ? _0x1dc5da[_0x41cf35(0x16d)] : undefined, _0x5ed5fd, _0x1ae250[_0x41cf35(0x18e)]), _0x5eaf9e = _0x1ae250['CgkwW'](hashLength, replacer(_0x58fd55[_0x41cf35(0x18f)] || _0x25a815 && _0x1dc5da[_0x41cf35(0x18f)] && _0x1dc5da[_0x41cf35(0x18f)][_0x25a815]), _0x58fd55[_0x41cf35(0x16f)] || (_0x1ae250[_0x41cf35(0x190)](_0x1ae250['igUrH'], _0x1dc5da) && _0x1dc5da[_0x41cf35(0x16f)] ? _0x1dc5da[_0x41cf35(0x16f)][_0x25a815] : undefined), _0x5ed5fd, _0x1ae250[_0x41cf35(0x191)]);
            _0x110a7e[_0x41cf35(0x165)]('id', _0x27c35f), _0x110a7e[_0x41cf35(0x165)](_0x1ae250[_0x41cf35(0x17d)], _0x47976a), _0x110a7e[_0x41cf35(0x165)](_0x41cf35(0x16e), _0x62bf81), _0x110a7e['set'](_0x41cf35(0x170), _0x5eaf9e);
        }
        if (_0x58fd55[_0x41cf35(0x192)]) {
            const _0x40150c = _0x58fd55[_0x41cf35(0x192)], _0x9d72b = _0x1ae250['axQNP'](replacer, () => prepareId(_0x40150c instanceof Module ? _0x27fb8b['getModuleId'](_0x40150c) : _0x40150c['id'])), _0x535136 = _0x1ae250['CgkwW'](hashLength, _0x1ae250['FWqbH'](replacer, () => _0x40150c instanceof Module ? _0x27fb8b[_0x41cf35(0x193)](_0x40150c, _0x58fd55[_0x41cf35(0x194)]) : _0x40150c['hash']), _0x1ae250['yapOL'](_0x1ae250[_0x41cf35(0x18d)], _0x40150c) ? _0x40150c['hashWithLength'] : undefined, _0x5ed5fd, _0x41cf35(0x171)), _0x51927e = _0x1ae250[_0x41cf35(0x195)](hashLength, _0x1ae250[_0x41cf35(0x196)](replacer, _0x58fd55['contentHash']), undefined, _0x5ed5fd, _0x1ae250[_0x41cf35(0x191)]);
            _0x110a7e[_0x41cf35(0x165)]('id', _0x9d72b), _0x110a7e[_0x41cf35(0x165)](_0x1ae250[_0x41cf35(0x197)], _0x535136), _0x110a7e[_0x41cf35(0x165)](_0x1ae250['nHhdz'], _0x51927e), _0x110a7e[_0x41cf35(0x165)]('hash', _0x58fd55[_0x41cf35(0x18f)] ? _0x51927e : _0x535136), _0x110a7e['set'](_0x1ae250['AIyGf'], _0x1ae250[_0x41cf35(0x198)](deprecated, _0x9d72b, _0x1ae250[_0x41cf35(0x199)], _0x1ae250[_0x41cf35(0x19a)]));
        }
        return _0x58fd55[_0x41cf35(0x19b)] && _0x110a7e[_0x41cf35(0x165)](_0x1ae250[_0x41cf35(0x19c)], _0x1ae250[_0x41cf35(0x19d)](replacer, _0x58fd55[_0x41cf35(0x19b)])), _0x1ae250[_0x41cf35(0x19e)](typeof _0x58fd55[_0x41cf35(0x194)], _0x1ae250[_0x41cf35(0x19f)]) ? _0x110a7e[_0x41cf35(0x165)](_0x1ae250['BjQSr'], replacer(() => prepareId(_0x58fd55['runtime']))) : _0x110a7e['set'](_0x1ae250['BjQSr'], replacer('_')), _0x1ae250['lQtnw'](typeof _0x524555, _0x1ae250[_0x41cf35(0x1a0)]) && (_0x524555 = _0x1ae250[_0x41cf35(0x1a1)](_0x524555, _0x58fd55, _0x5ed5fd)), _0x524555 = _0x524555[_0x41cf35(0x15b)](REGEXP, (_0x1d9f25, _0x1aa628) => {
            const _0x370a00 = _0x41cf35;
            if (_0x1ae250['lQtnw'](_0x1aa628[_0x370a00(0x176)] + (-0x219e + 0x1732 + 0xa6e), _0x1d9f25[_0x370a00(0x176)])) {
                const _0x41bf46 = /^(\w+)(?::(\w+))?$/[_0x370a00(0x1a2)](_0x1aa628);
                if (!_0x41bf46)
                    return _0x1d9f25;
                const [, _0x14ccfb, _0x270fca] = _0x41bf46, _0xa3014f = _0x110a7e[_0x370a00(0x1a3)](_0x14ccfb);
                if (_0x1ae250[_0x370a00(0x1a4)](_0xa3014f, undefined))
                    return _0x1ae250[_0x370a00(0x181)](_0xa3014f, _0x1d9f25, _0x270fca, _0x524555);
            } else {
                if (_0x1d9f25[_0x370a00(0x1a5)]('[\x5c') && _0x1d9f25[_0x370a00(0x1a6)]('\x5c]'))
                    return '[' + _0x1d9f25[_0x370a00(0x15c)](-0x1097 * 0x2 + 0xc71 + 0x14bf, -(-0x258c + -0x1 * -0x1db + 0x23b3)) + ']';
            }
            return _0x1d9f25;
        }), _0x524555;
    }, plugin = _0x11ffdc(0x1a7);
class TemplatedPathPlugin {
    ['apply'](_0x1bc222) {
        const _0x7860cc = _0x11ffdc;
        _0x1bc222[_0x7860cc(0x1a8)]['compilation']['tap'](plugin, _0x1ee477 => {
            const _0x5eaa67 = _0x7860cc;
            _0x1ee477['hooks']['assetPath'][_0x5eaa67(0x1a9)](plugin, replacePathVariables);
        });
    }
}
module['exports'] = TemplatedPathPlugin;
