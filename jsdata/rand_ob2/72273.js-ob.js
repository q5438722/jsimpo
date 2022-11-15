'use strict';
const _0x31fc = [
    '621969qRXwmm',
    '1PWeijZ',
    '93828rsFTfw',
    '6fSMCWX',
    '798912fHwtab',
    '1ckWSwT',
    '178781lSmziL',
    '814729AqhIok',
    '104883uJcFLA',
    '65bZGqPk',
    '10427bQbVsU',
    'path',
    './Chunk',
    './Module',
    './util/identifier',
    'string',
    'test',
    '\x22\x20+\x20(',
    '\x20+\x20\x22\x22).replace(/(^[.-]|[^a-zA-Z0-9_-])+/g,\x20\x22_\x22)\x20+\x20\x22',
    'replace',
    'slice',
    'immutable',
    'isArray',
    'function',
    'Path\x20variable\x20',
    '\x20not\x20implemented\x20in\x20this\x20context:\x20',
    'set',
    'chunkGraph',
    'filename',
    'length',
    'file',
    'fragment',
    'base',
    'ext',
    'filebase',
    '[filebase]\x20is\x20now\x20[base]',
    'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_FILENAME',
    'hash',
    'hashWithLength',
    'fullhash',
    '[hash]\x20is\x20now\x20[fullhash]\x20(also\x20consider\x20using\x20[chunkhash]\x20or\x20[contenthash],\x20see\x20documentation\x20for\x20details)',
    'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_HASH',
    'name',
    'renderedHash',
    'chunkhash',
    'contentHash',
    'contentHashWithLength',
    'contenthash',
    'module',
    'getRenderedModuleHash',
    'runtime',
    '[moduleid]\x20is\x20now\x20[id]',
    'url',
    'get',
    'startsWith',
    'endsWith',
    'TemplatedPathPlugin',
    'hooks',
    'compilation',
    'tap',
    'assetPath',
    'exports'
];
const _0x262054 = _0x1c16;
(function (_0x500ea2, _0xce75ef) {
    const _0x4ceea7 = _0x1c16;
    while (!![]) {
        try {
            const _0x10f64e = parseInt(_0x4ceea7(0x179)) * parseInt(_0x4ceea7(0x17a)) + -parseInt(_0x4ceea7(0x17b)) * parseInt(_0x4ceea7(0x17c)) + parseInt(_0x4ceea7(0x17d)) + -parseInt(_0x4ceea7(0x17e)) * parseInt(_0x4ceea7(0x17f)) + -parseInt(_0x4ceea7(0x180)) + -parseInt(_0x4ceea7(0x181)) + -parseInt(_0x4ceea7(0x182)) * -parseInt(_0x4ceea7(0x183));
            if (_0x10f64e === _0xce75ef)
                break;
            else
                _0x500ea2['push'](_0x500ea2['shift']());
        } catch (_0x556e3f) {
            _0x500ea2['push'](_0x500ea2['shift']());
        }
    }
}(_0x31fc, 0x6ac1b));
function _0x1c16(_0x37e014, _0xca6db6) {
    return _0x1c16 = function (_0x31fc21, _0x1c16f1) {
        _0x31fc21 = _0x31fc21 - 0x179;
        let _0x5e90a3 = _0x31fc[_0x31fc21];
        return _0x5e90a3;
    }, _0x1c16(_0x37e014, _0xca6db6);
}
const {basename, extname} = require(_0x262054(0x184)), util = require('util'), Chunk = require(_0x262054(0x185)), Module = require(_0x262054(0x186)), {parseResource} = require(_0x262054(0x187)), REGEXP = /\[\\*([\w:]+)\\*\]/gi, prepareId = _0x45f232 => {
        const _0x380212 = _0x262054;
        if (typeof _0x45f232 !== _0x380212(0x188))
            return _0x45f232;
        if (/^"\s\+*.*\+\s*"$/[_0x380212(0x189)](_0x45f232)) {
            const _0x2f2ae7 = /^"\s\+*\s*(.*)\s*\+\s*"$/['exec'](_0x45f232);
            return _0x380212(0x18a) + _0x2f2ae7[0x1] + _0x380212(0x18b);
        }
        return _0x45f232[_0x380212(0x18c)](/(^[.-]|[^a-zA-Z0-9_-])+/g, '_');
    }, hashLength = (_0x10d3d9, _0x298948, _0x493a60, _0x46f6a8) => {
        const _0x3ef41f = (_0x6d3d89, _0x3ae75d, _0x5df0f5) => {
            const _0xa4dd4d = _0x1c16;
            let _0x265c3f;
            const _0x51e11d = _0x3ae75d && parseInt(_0x3ae75d, 0xa);
            if (_0x51e11d && _0x298948)
                _0x265c3f = _0x298948(_0x51e11d);
            else {
                const _0x255ac0 = _0x10d3d9(_0x6d3d89, _0x3ae75d, _0x5df0f5);
                _0x265c3f = _0x51e11d ? _0x255ac0[_0xa4dd4d(0x18d)](0x0, _0x51e11d) : _0x255ac0;
            }
            if (_0x493a60) {
                _0x493a60[_0xa4dd4d(0x18e)] = !![];
                if (Array[_0xa4dd4d(0x18f)](_0x493a60[_0x46f6a8]))
                    _0x493a60[_0x46f6a8] = [
                        ..._0x493a60[_0x46f6a8],
                        _0x265c3f
                    ];
                else
                    _0x493a60[_0x46f6a8] ? _0x493a60[_0x46f6a8] = [
                        _0x493a60[_0x46f6a8],
                        _0x265c3f
                    ] : _0x493a60[_0x46f6a8] = _0x265c3f;
            }
            return _0x265c3f;
        };
        return _0x3ef41f;
    }, replacer = (_0x507a05, _0x2d0305) => {
        const _0x22a6e3 = (_0x21f1e8, _0x19af6a, _0x27455a) => {
            const _0x2dd38b = _0x1c16;
            typeof _0x507a05 === _0x2dd38b(0x190) && (_0x507a05 = _0x507a05());
            if (_0x507a05 === null || _0x507a05 === undefined) {
                if (!_0x2d0305)
                    throw new Error(_0x2dd38b(0x191) + _0x21f1e8 + _0x2dd38b(0x192) + _0x27455a);
                return '';
            } else
                return '' + _0x507a05;
        };
        return _0x22a6e3;
    }, deprecationCache = new Map(), deprecatedFunction = (() => () => {
    })(), deprecated = (_0x36ba6a, _0x2f1b67, _0x13254a) => {
        const _0x69c5aa = _0x262054;
        let _0x586626 = deprecationCache['get'](_0x2f1b67);
        return _0x586626 === undefined && (_0x586626 = util['deprecate'](deprecatedFunction, _0x2f1b67, _0x13254a), deprecationCache[_0x69c5aa(0x193)](_0x2f1b67, _0x586626)), (..._0xced2e1) => {
            return _0x586626(), _0x36ba6a(..._0xced2e1);
        };
    }, replacePathVariables = (_0x1157c1, _0x5d3783, _0x26437c) => {
        const _0x45c641 = _0x262054, _0x3d030a = _0x5d3783[_0x45c641(0x194)], _0x503ade = new Map();
        if (typeof _0x5d3783[_0x45c641(0x195)] === 'string') {
            const {
                    path: _0x24c05a,
                    query: _0x8fce76,
                    fragment: _0x270596
                } = parseResource(_0x5d3783['filename']), _0x5cfbb4 = extname(_0x24c05a), _0x5b85fd = basename(_0x24c05a), _0x163bb4 = _0x5b85fd[_0x45c641(0x18d)](0x0, _0x5b85fd[_0x45c641(0x196)] - _0x5cfbb4[_0x45c641(0x196)]), _0x43d4b9 = _0x24c05a[_0x45c641(0x18d)](0x0, _0x24c05a[_0x45c641(0x196)] - _0x5b85fd['length']);
            _0x503ade[_0x45c641(0x193)](_0x45c641(0x197), replacer(_0x24c05a)), _0x503ade[_0x45c641(0x193)]('query', replacer(_0x8fce76, !![])), _0x503ade[_0x45c641(0x193)](_0x45c641(0x198), replacer(_0x270596, !![])), _0x503ade['set'](_0x45c641(0x184), replacer(_0x43d4b9, !![])), _0x503ade[_0x45c641(0x193)](_0x45c641(0x199), replacer(_0x5b85fd)), _0x503ade[_0x45c641(0x193)]('name', replacer(_0x163bb4)), _0x503ade[_0x45c641(0x193)](_0x45c641(0x19a), replacer(_0x5cfbb4, !![])), _0x503ade[_0x45c641(0x193)](_0x45c641(0x19b), deprecated(replacer(_0x5b85fd), _0x45c641(0x19c), _0x45c641(0x19d)));
        }
        if (_0x5d3783[_0x45c641(0x19e)]) {
            const _0x41e1a1 = hashLength(replacer(_0x5d3783[_0x45c641(0x19e)]), _0x5d3783[_0x45c641(0x19f)], _0x26437c, _0x45c641(0x1a0));
            _0x503ade[_0x45c641(0x193)](_0x45c641(0x1a0), _0x41e1a1), _0x503ade[_0x45c641(0x193)](_0x45c641(0x19e), deprecated(_0x41e1a1, _0x45c641(0x1a1), _0x45c641(0x1a2)));
        }
        if (_0x5d3783['chunk']) {
            const _0x225331 = _0x5d3783['chunk'], _0x454597 = _0x5d3783['contentHashType'], _0x27d32a = replacer(_0x225331['id']), _0x239308 = replacer(_0x225331[_0x45c641(0x1a3)] || _0x225331['id']), _0x2487aa = hashLength(replacer(_0x225331 instanceof Chunk ? _0x225331[_0x45c641(0x1a4)] : _0x225331[_0x45c641(0x19e)]), _0x45c641(0x19f) in _0x225331 ? _0x225331[_0x45c641(0x19f)] : undefined, _0x26437c, _0x45c641(0x1a5)), _0x16e6b4 = hashLength(replacer(_0x5d3783[_0x45c641(0x1a6)] || _0x454597 && _0x225331[_0x45c641(0x1a6)] && _0x225331[_0x45c641(0x1a6)][_0x454597]), _0x5d3783[_0x45c641(0x1a7)] || (_0x45c641(0x1a7) in _0x225331 && _0x225331[_0x45c641(0x1a7)] ? _0x225331[_0x45c641(0x1a7)][_0x454597] : undefined), _0x26437c, _0x45c641(0x1a8));
            _0x503ade['set']('id', _0x27d32a), _0x503ade[_0x45c641(0x193)](_0x45c641(0x1a3), _0x239308), _0x503ade[_0x45c641(0x193)](_0x45c641(0x1a5), _0x2487aa), _0x503ade[_0x45c641(0x193)](_0x45c641(0x1a8), _0x16e6b4);
        }
        if (_0x5d3783[_0x45c641(0x1a9)]) {
            const _0xa35c32 = _0x5d3783[_0x45c641(0x1a9)], _0x43a492 = replacer(() => prepareId(_0xa35c32 instanceof Module ? _0x3d030a['getModuleId'](_0xa35c32) : _0xa35c32['id'])), _0x2df121 = hashLength(replacer(() => _0xa35c32 instanceof Module ? _0x3d030a[_0x45c641(0x1aa)](_0xa35c32, _0x5d3783[_0x45c641(0x1ab)]) : _0xa35c32['hash']), _0x45c641(0x19f) in _0xa35c32 ? _0xa35c32[_0x45c641(0x19f)] : undefined, _0x26437c, 'modulehash'), _0x390704 = hashLength(replacer(_0x5d3783[_0x45c641(0x1a6)]), undefined, _0x26437c, _0x45c641(0x1a8));
            _0x503ade[_0x45c641(0x193)]('id', _0x43a492), _0x503ade[_0x45c641(0x193)]('modulehash', _0x2df121), _0x503ade['set']('contenthash', _0x390704), _0x503ade['set'](_0x45c641(0x19e), _0x5d3783['contentHash'] ? _0x390704 : _0x2df121), _0x503ade[_0x45c641(0x193)]('moduleid', deprecated(_0x43a492, _0x45c641(0x1ac), 'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_MODULE_ID'));
        }
        return _0x5d3783[_0x45c641(0x1ad)] && _0x503ade['set'](_0x45c641(0x1ad), replacer(_0x5d3783['url'])), typeof _0x5d3783[_0x45c641(0x1ab)] === 'string' ? _0x503ade['set'](_0x45c641(0x1ab), replacer(() => prepareId(_0x5d3783[_0x45c641(0x1ab)]))) : _0x503ade[_0x45c641(0x193)]('runtime', replacer('_')), typeof _0x1157c1 === _0x45c641(0x190) && (_0x1157c1 = _0x1157c1(_0x5d3783, _0x26437c)), _0x1157c1 = _0x1157c1[_0x45c641(0x18c)](REGEXP, (_0x19250e, _0x1e3ab1) => {
            const _0x281abb = _0x45c641;
            if (_0x1e3ab1[_0x281abb(0x196)] + 0x2 === _0x19250e['length']) {
                const _0x528319 = /^(\w+)(?::(\w+))?$/['exec'](_0x1e3ab1);
                if (!_0x528319)
                    return _0x19250e;
                const [, _0x8c537a, _0x5e751d] = _0x528319, _0x1531c9 = _0x503ade[_0x281abb(0x1ae)](_0x8c537a);
                if (_0x1531c9 !== undefined)
                    return _0x1531c9(_0x19250e, _0x5e751d, _0x1157c1);
            } else {
                if (_0x19250e[_0x281abb(0x1af)]('[\x5c') && _0x19250e[_0x281abb(0x1b0)]('\x5c]'))
                    return '[' + _0x19250e[_0x281abb(0x18d)](0x2, -0x2) + ']';
            }
            return _0x19250e;
        }), _0x1157c1;
    }, plugin = _0x262054(0x1b1);
class TemplatedPathPlugin {
    ['apply'](_0x16c89d) {
        const _0x272fd7 = _0x262054;
        _0x16c89d[_0x272fd7(0x1b2)][_0x272fd7(0x1b3)][_0x272fd7(0x1b4)](plugin, _0x1be4dd => {
            const _0x20e72f = _0x272fd7;
            _0x1be4dd[_0x20e72f(0x1b2)][_0x20e72f(0x1b5)][_0x20e72f(0x1b4)](plugin, replacePathVariables);
        });
    }
}
module[_0x262054(0x1b6)] = TemplatedPathPlugin;
