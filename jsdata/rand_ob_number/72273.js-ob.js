'use strict';
const {basename, extname} = require('path'), util = require('util'), Chunk = require('./Chunk'), Module = require('./Module'), {parseResource} = require('./util/identifier'), REGEXP = /\[\\*([\w:]+)\\*\]/gi, prepareId = _0x119b40 => {
        if (typeof _0x119b40 !== 'string')
            return _0x119b40;
        if (/^"\s\+*.*\+\s*"$/['test'](_0x119b40)) {
            const _0x25ac0a = /^"\s\+*\s*(.*)\s*\+\s*"$/['exec'](_0x119b40);
            return '\x22\x20+\x20(' + _0x25ac0a[0x3c3 + 0xde6 + 0x235 * -0x8] + '\x20+\x20\x22\x22).replace(/(^[.-]|[^a-zA-Z0-9_-])+/g,\x20\x22_\x22)\x20+\x20\x22';
        }
        return _0x119b40['replace'](/(^[.-]|[^a-zA-Z0-9_-])+/g, '_');
    }, hashLength = (_0x2a8db4, _0x397716, _0x5a5439, _0x4c6c88) => {
        const _0x291af0 = (_0xc9a10b, _0x2d2da5, _0x3dba0c) => {
            let _0x74ac6;
            const _0x263109 = _0x2d2da5 && parseInt(_0x2d2da5, 0x6a0 + 0x22f6 + -0x4 * 0xa63);
            if (_0x263109 && _0x397716)
                _0x74ac6 = _0x397716(_0x263109);
            else {
                const _0x4b1049 = _0x2a8db4(_0xc9a10b, _0x2d2da5, _0x3dba0c);
                _0x74ac6 = _0x263109 ? _0x4b1049['slice'](-0x1b8 * -0xb + 0x2 * 0x585 + -0x1df2 * 0x1, _0x263109) : _0x4b1049;
            }
            if (_0x5a5439) {
                _0x5a5439['immutable'] = !![];
                if (Array['isArray'](_0x5a5439[_0x4c6c88]))
                    _0x5a5439[_0x4c6c88] = [
                        ..._0x5a5439[_0x4c6c88],
                        _0x74ac6
                    ];
                else
                    _0x5a5439[_0x4c6c88] ? _0x5a5439[_0x4c6c88] = [
                        _0x5a5439[_0x4c6c88],
                        _0x74ac6
                    ] : _0x5a5439[_0x4c6c88] = _0x74ac6;
            }
            return _0x74ac6;
        };
        return _0x291af0;
    }, replacer = (_0x5c211e, _0x183354) => {
        const _0x4c8b69 = (_0x372a8b, _0xc07d08, _0x454dca) => {
            typeof _0x5c211e === 'function' && (_0x5c211e = _0x5c211e());
            if (_0x5c211e === null || _0x5c211e === undefined) {
                if (!_0x183354)
                    throw new Error('Path\x20variable\x20' + _0x372a8b + '\x20not\x20implemented\x20in\x20this\x20context:\x20' + _0x454dca);
                return '';
            } else
                return '' + _0x5c211e;
        };
        return _0x4c8b69;
    }, deprecationCache = new Map(), deprecatedFunction = (() => () => {
    })(), deprecated = (_0x35d2a5, _0x4d6655, _0x574231) => {
        let _0x420d8e = deprecationCache['get'](_0x4d6655);
        return _0x420d8e === undefined && (_0x420d8e = util['deprecate'](deprecatedFunction, _0x4d6655, _0x574231), deprecationCache['set'](_0x4d6655, _0x420d8e)), (..._0x4218a3) => {
            return _0x420d8e(), _0x35d2a5(..._0x4218a3);
        };
    }, replacePathVariables = (_0x17f261, _0x5b8a94, _0x11b135) => {
        const _0x494f60 = _0x5b8a94['chunkGraph'], _0x4dc9df = new Map();
        if (typeof _0x5b8a94['filename'] === 'string') {
            const {
                    path: _0xc6f9fb,
                    query: _0x3fdaa3,
                    fragment: _0x4bd26c
                } = parseResource(_0x5b8a94['filename']), _0x280798 = extname(_0xc6f9fb), _0x1fda91 = basename(_0xc6f9fb), _0x5b58a5 = _0x1fda91['slice'](-0x191e + -0x4f7 * 0x1 + 0x1e15, _0x1fda91['length'] - _0x280798['length']), _0x1d5e32 = _0xc6f9fb['slice'](0x25ea + -0x3 * 0x3a1 + -0x1b07, _0xc6f9fb['length'] - _0x1fda91['length']);
            _0x4dc9df['set']('file', replacer(_0xc6f9fb)), _0x4dc9df['set']('query', replacer(_0x3fdaa3, !![])), _0x4dc9df['set']('fragment', replacer(_0x4bd26c, !![])), _0x4dc9df['set']('path', replacer(_0x1d5e32, !![])), _0x4dc9df['set']('base', replacer(_0x1fda91)), _0x4dc9df['set']('name', replacer(_0x5b58a5)), _0x4dc9df['set']('ext', replacer(_0x280798, !![])), _0x4dc9df['set']('filebase', deprecated(replacer(_0x1fda91), '[filebase]\x20is\x20now\x20[base]', 'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_FILENAME'));
        }
        if (_0x5b8a94['hash']) {
            const _0x50c3c7 = hashLength(replacer(_0x5b8a94['hash']), _0x5b8a94['hashWithLength'], _0x11b135, 'fullhash');
            _0x4dc9df['set']('fullhash', _0x50c3c7), _0x4dc9df['set']('hash', deprecated(_0x50c3c7, '[hash]\x20is\x20now\x20[fullhash]\x20(also\x20consider\x20using\x20[chunkhash]\x20or\x20[contenthash],\x20see\x20documentation\x20for\x20details)', 'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_HASH'));
        }
        if (_0x5b8a94['chunk']) {
            const _0x23b803 = _0x5b8a94['chunk'], _0xb0e9b0 = _0x5b8a94['contentHashType'], _0x17b71d = replacer(_0x23b803['id']), _0x55631d = replacer(_0x23b803['name'] || _0x23b803['id']), _0x421e23 = hashLength(replacer(_0x23b803 instanceof Chunk ? _0x23b803['renderedHash'] : _0x23b803['hash']), 'hashWithLength' in _0x23b803 ? _0x23b803['hashWithLength'] : undefined, _0x11b135, 'chunkhash'), _0x3789ad = hashLength(replacer(_0x5b8a94['contentHash'] || _0xb0e9b0 && _0x23b803['contentHash'] && _0x23b803['contentHash'][_0xb0e9b0]), _0x5b8a94['contentHashWithLength'] || ('contentHashWithLength' in _0x23b803 && _0x23b803['contentHashWithLength'] ? _0x23b803['contentHashWithLength'][_0xb0e9b0] : undefined), _0x11b135, 'contenthash');
            _0x4dc9df['set']('id', _0x17b71d), _0x4dc9df['set']('name', _0x55631d), _0x4dc9df['set']('chunkhash', _0x421e23), _0x4dc9df['set']('contenthash', _0x3789ad);
        }
        if (_0x5b8a94['module']) {
            const _0x5019ae = _0x5b8a94['module'], _0x33ba65 = replacer(() => prepareId(_0x5019ae instanceof Module ? _0x494f60['getModuleId'](_0x5019ae) : _0x5019ae['id'])), _0x302bbd = hashLength(replacer(() => _0x5019ae instanceof Module ? _0x494f60['getRenderedModuleHash'](_0x5019ae, _0x5b8a94['runtime']) : _0x5019ae['hash']), 'hashWithLength' in _0x5019ae ? _0x5019ae['hashWithLength'] : undefined, _0x11b135, 'modulehash'), _0x567f32 = hashLength(replacer(_0x5b8a94['contentHash']), undefined, _0x11b135, 'contenthash');
            _0x4dc9df['set']('id', _0x33ba65), _0x4dc9df['set']('modulehash', _0x302bbd), _0x4dc9df['set']('contenthash', _0x567f32), _0x4dc9df['set']('hash', _0x5b8a94['contentHash'] ? _0x567f32 : _0x302bbd), _0x4dc9df['set']('moduleid', deprecated(_0x33ba65, '[moduleid]\x20is\x20now\x20[id]', 'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_MODULE_ID'));
        }
        return _0x5b8a94['url'] && _0x4dc9df['set']('url', replacer(_0x5b8a94['url'])), typeof _0x5b8a94['runtime'] === 'string' ? _0x4dc9df['set']('runtime', replacer(() => prepareId(_0x5b8a94['runtime']))) : _0x4dc9df['set']('runtime', replacer('_')), typeof _0x17f261 === 'function' && (_0x17f261 = _0x17f261(_0x5b8a94, _0x11b135)), _0x17f261 = _0x17f261['replace'](REGEXP, (_0x27eb64, _0x541712) => {
            if (_0x541712['length'] + (-0x225 + -0x1 * 0x4e5 + 0x70c * 0x1) === _0x27eb64['length']) {
                const _0x143550 = /^(\w+)(?::(\w+))?$/['exec'](_0x541712);
                if (!_0x143550)
                    return _0x27eb64;
                const [, _0x3c9118, _0x533bfd] = _0x143550, _0x4c9855 = _0x4dc9df['get'](_0x3c9118);
                if (_0x4c9855 !== undefined)
                    return _0x4c9855(_0x27eb64, _0x533bfd, _0x17f261);
            } else {
                if (_0x27eb64['startsWith']('[\x5c') && _0x27eb64['endsWith']('\x5c]'))
                    return '[' + _0x27eb64['slice'](0x54 * -0x9 + 0x23d9 + -0x20e3, -(-0x3 * 0xa79 + 0x316 + -0x1 * -0x1c57)) + ']';
            }
            return _0x27eb64;
        }), _0x17f261;
    }, plugin = 'TemplatedPathPlugin';
class TemplatedPathPlugin {
    ['apply'](_0x2c35de) {
        _0x2c35de['hooks']['compilation']['tap'](plugin, _0x2ccaff => {
            _0x2ccaff['hooks']['assetPath']['tap'](plugin, replacePathVariables);
        });
    }
}
module['exports'] = TemplatedPathPlugin;
