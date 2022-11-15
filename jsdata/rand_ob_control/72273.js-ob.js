'use strict';
const {basename, extname} = require('path'), util = require('util'), Chunk = require('./Chunk'), Module = require('./Module'), {parseResource} = require('./util/identifier'), REGEXP = /\[\\*([\w:]+)\\*\]/gi, prepareId = _0x1063ad => {
        const _0x7e20d0 = {
            'KFDCb': function (_0x1eef1f, _0x27bf6c) {
                return _0x1eef1f !== _0x27bf6c;
            },
            'ZXkFE': 'string'
        };
        if (_0x7e20d0['KFDCb'](typeof _0x1063ad, _0x7e20d0['ZXkFE']))
            return _0x1063ad;
        if (/^"\s\+*.*\+\s*"$/['test'](_0x1063ad)) {
            const _0x381775 = /^"\s\+*\s*(.*)\s*\+\s*"$/['exec'](_0x1063ad);
            return '\x22\x20+\x20(' + _0x381775[0x1] + '\x20+\x20\x22\x22).replace(/(^[.-]|[^a-zA-Z0-9_-])+/g,\x20\x22_\x22)\x20+\x20\x22';
        }
        return _0x1063ad['replace'](/(^[.-]|[^a-zA-Z0-9_-])+/g, '_');
    }, hashLength = (_0x32db03, _0x3b098a, _0x948e2a, _0x499079) => {
        const _0x2a21dd = {
                'zDpvf': function (_0x144946, _0x3837ea, _0x3261be) {
                    return _0x144946(_0x3837ea, _0x3261be);
                },
                'esrko': function (_0xbd14df, _0x38fb1c) {
                    return _0xbd14df && _0x38fb1c;
                },
                'AjSJM': function (_0xd7e5d0, _0x397a99) {
                    return _0xd7e5d0(_0x397a99);
                },
                'cOQFn': function (_0x3bc5cd, _0x40bcc1, _0x3ab9dd, _0x35398c) {
                    return _0x3bc5cd(_0x40bcc1, _0x3ab9dd, _0x35398c);
                }
            }, _0x4df323 = (_0x2e3ba7, _0x587480, _0x12b52d) => {
                let _0x3eb0bc;
                const _0x900204 = _0x587480 && _0x2a21dd['zDpvf'](parseInt, _0x587480, 0xa);
                if (_0x2a21dd['esrko'](_0x900204, _0x3b098a))
                    _0x3eb0bc = _0x2a21dd['AjSJM'](_0x3b098a, _0x900204);
                else {
                    const _0x35c8b4 = _0x2a21dd['cOQFn'](_0x32db03, _0x2e3ba7, _0x587480, _0x12b52d);
                    _0x3eb0bc = _0x900204 ? _0x35c8b4['slice'](0x0, _0x900204) : _0x35c8b4;
                }
                if (_0x948e2a) {
                    _0x948e2a['immutable'] = !![];
                    if (Array['isArray'](_0x948e2a[_0x499079]))
                        _0x948e2a[_0x499079] = [
                            ..._0x948e2a[_0x499079],
                            _0x3eb0bc
                        ];
                    else
                        _0x948e2a[_0x499079] ? _0x948e2a[_0x499079] = [
                            _0x948e2a[_0x499079],
                            _0x3eb0bc
                        ] : _0x948e2a[_0x499079] = _0x3eb0bc;
                }
                return _0x3eb0bc;
            };
        return _0x4df323;
    }, replacer = (_0x2481da, _0x156010) => {
        const _0x2e51d2 = {
                'WPmmJ': function (_0xe06ee4, _0x3e2f70) {
                    return _0xe06ee4 === _0x3e2f70;
                },
                'jCeiS': 'function',
                'snATG': function (_0x5951cb) {
                    return _0x5951cb();
                },
                'ZFrpk': function (_0x3c6b68, _0x1dd19a) {
                    return _0x3c6b68 === _0x1dd19a;
                }
            }, _0xec4444 = (_0x2f22de, _0x37cb78, _0x1a6bff) => {
                _0x2e51d2['WPmmJ'](typeof _0x2481da, _0x2e51d2['jCeiS']) && (_0x2481da = _0x2e51d2['snATG'](_0x2481da));
                if (_0x2e51d2['ZFrpk'](_0x2481da, null) || _0x2e51d2['ZFrpk'](_0x2481da, undefined)) {
                    if (!_0x156010)
                        throw new Error('Path\x20variable\x20' + _0x2f22de + '\x20not\x20implemented\x20in\x20this\x20context:\x20' + _0x1a6bff);
                    return '';
                } else
                    return '' + _0x2481da;
            };
        return _0xec4444;
    }, deprecationCache = new Map(), deprecatedFunction = (() => () => {
    })(), deprecated = (_0x3e9a5c, _0x50add7, _0x561bc7) => {
        const _0x55aa45 = {
            'OOGVy': function (_0x4ca4ab) {
                return _0x4ca4ab();
            },
            'yYIbk': function (_0x37002c, ..._0xf65607) {
                return _0x37002c(..._0xf65607);
            },
            'JJFAm': function (_0x124114, _0x520dde) {
                return _0x124114 === _0x520dde;
            }
        };
        let _0x55338a = deprecationCache['get'](_0x50add7);
        return _0x55aa45['JJFAm'](_0x55338a, undefined) && (_0x55338a = util['deprecate'](deprecatedFunction, _0x50add7, _0x561bc7), deprecationCache['set'](_0x50add7, _0x55338a)), (..._0x3b50fd) => {
            return _0x55aa45['OOGVy'](_0x55338a), _0x55aa45['yYIbk'](_0x3e9a5c, ..._0x3b50fd);
        };
    }, replacePathVariables = (_0x55fdba, _0x28ab1b, _0x486c55) => {
        const _0x74eea0 = {
                'mPfEN': function (_0x458598, _0x3ce9f5) {
                    return _0x458598 === _0x3ce9f5;
                },
                'eHpSC': function (_0x4e24ac, _0x500f3a) {
                    return _0x4e24ac + _0x500f3a;
                },
                'zlzEm': function (_0x6a032a, _0x226e4e) {
                    return _0x6a032a !== _0x226e4e;
                },
                'FtUoN': function (_0x15ed6d, _0x7553e8, _0x5dd0de, _0x58c523) {
                    return _0x15ed6d(_0x7553e8, _0x5dd0de, _0x58c523);
                },
                'mThbB': 'string',
                'njRUE': function (_0x2b8c08, _0xa79f69) {
                    return _0x2b8c08(_0xa79f69);
                },
                'YXmvk': function (_0x2bb9f6, _0x5ec7d6) {
                    return _0x2bb9f6 - _0x5ec7d6;
                },
                'Vozcp': function (_0x1a73ef, _0x273ea2) {
                    return _0x1a73ef - _0x273ea2;
                },
                'MoRXH': 'file',
                'pxsGP': 'query',
                'JwZZF': function (_0x2bd274, _0x4fce35, _0x31df13) {
                    return _0x2bd274(_0x4fce35, _0x31df13);
                },
                'MEogx': 'fragment',
                'Gpybl': 'path',
                'WaAeX': 'base',
                'GDNqD': 'name',
                'hTeKF': function (_0x2f0584, _0x4179f1) {
                    return _0x2f0584(_0x4179f1);
                },
                'fKTYs': 'ext',
                'saBSw': function (_0xcf4028, _0x37df97, _0x20261c) {
                    return _0xcf4028(_0x37df97, _0x20261c);
                },
                'ZtLSK': 'filebase',
                'WcVaa': function (_0x2f5eb6, _0x37c2a3, _0x402551, _0x58f3f2) {
                    return _0x2f5eb6(_0x37c2a3, _0x402551, _0x58f3f2);
                },
                'CmtQc': function (_0x5ee9fe, _0x4d0a18) {
                    return _0x5ee9fe(_0x4d0a18);
                },
                'bRPzZ': '[filebase]\x20is\x20now\x20[base]',
                'hwiJg': 'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_FILENAME',
                'pTbuu': function (_0xcd5c96, _0x5d09c8, _0x596de2, _0x6800d9, _0x2d9077) {
                    return _0xcd5c96(_0x5d09c8, _0x596de2, _0x6800d9, _0x2d9077);
                },
                'mgCPG': 'fullhash',
                'geFzq': 'hash',
                'YDrEq': function (_0xa6c9c3, _0x1787ea, _0x42cdc8, _0x5585e2) {
                    return _0xa6c9c3(_0x1787ea, _0x42cdc8, _0x5585e2);
                },
                'ueMyn': '[hash]\x20is\x20now\x20[fullhash]\x20(also\x20consider\x20using\x20[chunkhash]\x20or\x20[contenthash],\x20see\x20documentation\x20for\x20details)',
                'PALWE': 'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_HASH',
                'pULWi': function (_0x4049af, _0x4b46d0, _0x484fcf, _0x42730a, _0x4e0d85) {
                    return _0x4049af(_0x4b46d0, _0x484fcf, _0x42730a, _0x4e0d85);
                },
                'Splba': function (_0x55ab00, _0x50af8d) {
                    return _0x55ab00(_0x50af8d);
                },
                'IqLgO': function (_0x2aea11, _0x1ac264) {
                    return _0x2aea11 instanceof _0x1ac264;
                },
                'ttTXH': function (_0x5aab55, _0x3676b7) {
                    return _0x5aab55 in _0x3676b7;
                },
                'NBEDI': 'hashWithLength',
                'NWgdm': 'chunkhash',
                'aAdcI': function (_0x371569, _0x1d4310) {
                    return _0x371569(_0x1d4310);
                },
                'JxZYO': 'contentHashWithLength',
                'eXMFl': 'contenthash',
                'EbqYG': function (_0x251dc7, _0x308cf2) {
                    return _0x251dc7(_0x308cf2);
                },
                'TZEYL': function (_0x5c7266, _0x36bf27, _0x1e720d, _0xb36ff5, _0x52c835) {
                    return _0x5c7266(_0x36bf27, _0x1e720d, _0xb36ff5, _0x52c835);
                },
                'DqLuB': function (_0x4ca5ef, _0x11a73b) {
                    return _0x4ca5ef(_0x11a73b);
                },
                'VSdCO': 'modulehash',
                'ZfbWc': function (_0x331f9b, _0x67a26b, _0x4c2764, _0x598a1f, _0x95af48) {
                    return _0x331f9b(_0x67a26b, _0x4c2764, _0x598a1f, _0x95af48);
                },
                'mKHYF': 'moduleid',
                'bISfN': function (_0x4337eb, _0x18e270, _0x282453, _0x58171a) {
                    return _0x4337eb(_0x18e270, _0x282453, _0x58171a);
                },
                'yjyBZ': '[moduleid]\x20is\x20now\x20[id]',
                'zxZfr': 'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_MODULE_ID',
                'gSQCZ': 'url',
                'YSGIK': function (_0x578722, _0x18200d) {
                    return _0x578722(_0x18200d);
                },
                'QdfZS': 'runtime',
                'ArxGT': function (_0x10c4ed, _0x2bd199) {
                    return _0x10c4ed(_0x2bd199);
                },
                'Zqfaa': function (_0x1cf5b3, _0x22d9c3) {
                    return _0x1cf5b3(_0x22d9c3);
                },
                'fbNIx': 'function'
            }, _0x44f688 = _0x28ab1b['chunkGraph'], _0x271f83 = new Map();
        if (_0x74eea0['mPfEN'](typeof _0x28ab1b['filename'], _0x74eea0['mThbB'])) {
            const {
                    path: _0x27825f,
                    query: _0x22ec9b,
                    fragment: _0x29fa80
                } = _0x74eea0['njRUE'](parseResource, _0x28ab1b['filename']), _0x5197e2 = _0x74eea0['njRUE'](extname, _0x27825f), _0x16cd5d = _0x74eea0['njRUE'](basename, _0x27825f), _0x2e7fb9 = _0x16cd5d['slice'](0x0, _0x74eea0['YXmvk'](_0x16cd5d['length'], _0x5197e2['length'])), _0x52b051 = _0x27825f['slice'](0x0, _0x74eea0['Vozcp'](_0x27825f['length'], _0x16cd5d['length']));
            _0x271f83['set'](_0x74eea0['MoRXH'], _0x74eea0['njRUE'](replacer, _0x27825f)), _0x271f83['set'](_0x74eea0['pxsGP'], _0x74eea0['JwZZF'](replacer, _0x22ec9b, !![])), _0x271f83['set'](_0x74eea0['MEogx'], _0x74eea0['JwZZF'](replacer, _0x29fa80, !![])), _0x271f83['set'](_0x74eea0['Gpybl'], _0x74eea0['JwZZF'](replacer, _0x52b051, !![])), _0x271f83['set'](_0x74eea0['WaAeX'], _0x74eea0['njRUE'](replacer, _0x16cd5d)), _0x271f83['set'](_0x74eea0['GDNqD'], _0x74eea0['hTeKF'](replacer, _0x2e7fb9)), _0x271f83['set'](_0x74eea0['fKTYs'], _0x74eea0['saBSw'](replacer, _0x5197e2, !![])), _0x271f83['set'](_0x74eea0['ZtLSK'], _0x74eea0['WcVaa'](deprecated, _0x74eea0['CmtQc'](replacer, _0x16cd5d), _0x74eea0['bRPzZ'], _0x74eea0['hwiJg']));
        }
        if (_0x28ab1b['hash']) {
            const _0x338371 = _0x74eea0['pTbuu'](hashLength, _0x74eea0['CmtQc'](replacer, _0x28ab1b['hash']), _0x28ab1b['hashWithLength'], _0x486c55, _0x74eea0['mgCPG']);
            _0x271f83['set'](_0x74eea0['mgCPG'], _0x338371), _0x271f83['set'](_0x74eea0['geFzq'], _0x74eea0['YDrEq'](deprecated, _0x338371, _0x74eea0['ueMyn'], _0x74eea0['PALWE']));
        }
        if (_0x28ab1b['chunk']) {
            const _0x2a5187 = _0x28ab1b['chunk'], _0x29b48d = _0x28ab1b['contentHashType'], _0x54224b = _0x74eea0['CmtQc'](replacer, _0x2a5187['id']), _0x941399 = _0x74eea0['CmtQc'](replacer, _0x2a5187['name'] || _0x2a5187['id']), _0x1e4263 = _0x74eea0['pULWi'](hashLength, _0x74eea0['Splba'](replacer, _0x74eea0['IqLgO'](_0x2a5187, Chunk) ? _0x2a5187['renderedHash'] : _0x2a5187['hash']), _0x74eea0['ttTXH'](_0x74eea0['NBEDI'], _0x2a5187) ? _0x2a5187['hashWithLength'] : undefined, _0x486c55, _0x74eea0['NWgdm']), _0x57252e = _0x74eea0['pULWi'](hashLength, _0x74eea0['aAdcI'](replacer, _0x28ab1b['contentHash'] || _0x29b48d && _0x2a5187['contentHash'] && _0x2a5187['contentHash'][_0x29b48d]), _0x28ab1b['contentHashWithLength'] || (_0x74eea0['ttTXH'](_0x74eea0['JxZYO'], _0x2a5187) && _0x2a5187['contentHashWithLength'] ? _0x2a5187['contentHashWithLength'][_0x29b48d] : undefined), _0x486c55, _0x74eea0['eXMFl']);
            _0x271f83['set']('id', _0x54224b), _0x271f83['set'](_0x74eea0['GDNqD'], _0x941399), _0x271f83['set'](_0x74eea0['NWgdm'], _0x1e4263), _0x271f83['set'](_0x74eea0['eXMFl'], _0x57252e);
        }
        if (_0x28ab1b['module']) {
            const _0x1bd53e = _0x28ab1b['module'], _0x4ca1b0 = _0x74eea0['EbqYG'](replacer, () => prepareId(_0x1bd53e instanceof Module ? _0x44f688['getModuleId'](_0x1bd53e) : _0x1bd53e['id'])), _0x54c5cd = _0x74eea0['TZEYL'](hashLength, _0x74eea0['DqLuB'](replacer, () => _0x1bd53e instanceof Module ? _0x44f688['getRenderedModuleHash'](_0x1bd53e, _0x28ab1b['runtime']) : _0x1bd53e['hash']), _0x74eea0['ttTXH'](_0x74eea0['NBEDI'], _0x1bd53e) ? _0x1bd53e['hashWithLength'] : undefined, _0x486c55, _0x74eea0['VSdCO']), _0xe3ea94 = _0x74eea0['ZfbWc'](hashLength, _0x74eea0['DqLuB'](replacer, _0x28ab1b['contentHash']), undefined, _0x486c55, _0x74eea0['eXMFl']);
            _0x271f83['set']('id', _0x4ca1b0), _0x271f83['set'](_0x74eea0['VSdCO'], _0x54c5cd), _0x271f83['set'](_0x74eea0['eXMFl'], _0xe3ea94), _0x271f83['set'](_0x74eea0['geFzq'], _0x28ab1b['contentHash'] ? _0xe3ea94 : _0x54c5cd), _0x271f83['set'](_0x74eea0['mKHYF'], _0x74eea0['bISfN'](deprecated, _0x4ca1b0, _0x74eea0['yjyBZ'], _0x74eea0['zxZfr']));
        }
        return _0x28ab1b['url'] && _0x271f83['set'](_0x74eea0['gSQCZ'], _0x74eea0['YSGIK'](replacer, _0x28ab1b['url'])), _0x74eea0['mPfEN'](typeof _0x28ab1b['runtime'], _0x74eea0['mThbB']) ? _0x271f83['set'](_0x74eea0['QdfZS'], _0x74eea0['ArxGT'](replacer, () => prepareId(_0x28ab1b['runtime']))) : _0x271f83['set'](_0x74eea0['QdfZS'], _0x74eea0['Zqfaa'](replacer, '_')), _0x74eea0['mPfEN'](typeof _0x55fdba, _0x74eea0['fbNIx']) && (_0x55fdba = _0x74eea0['saBSw'](_0x55fdba, _0x28ab1b, _0x486c55)), _0x55fdba = _0x55fdba['replace'](REGEXP, (_0x50cacd, _0x288efa) => {
            if (_0x74eea0['mPfEN'](_0x74eea0['eHpSC'](_0x288efa['length'], 0x2), _0x50cacd['length'])) {
                const _0x3a91f5 = /^(\w+)(?::(\w+))?$/['exec'](_0x288efa);
                if (!_0x3a91f5)
                    return _0x50cacd;
                const [, _0x4371e4, _0x3881f3] = _0x3a91f5, _0x6a61c6 = _0x271f83['get'](_0x4371e4);
                if (_0x74eea0['zlzEm'](_0x6a61c6, undefined))
                    return _0x74eea0['FtUoN'](_0x6a61c6, _0x50cacd, _0x3881f3, _0x55fdba);
            } else {
                if (_0x50cacd['startsWith']('[\x5c') && _0x50cacd['endsWith']('\x5c]'))
                    return '[' + _0x50cacd['slice'](0x2, -0x2) + ']';
            }
            return _0x50cacd;
        }), _0x55fdba;
    }, plugin = 'TemplatedPathPlugin';
class TemplatedPathPlugin {
    ['apply'](_0x52a6b0) {
        _0x52a6b0['hooks']['compilation']['tap'](plugin, _0x21d632 => {
            _0x21d632['hooks']['assetPath']['tap'](plugin, replacePathVariables);
        });
    }
}
module['exports'] = TemplatedPathPlugin;
