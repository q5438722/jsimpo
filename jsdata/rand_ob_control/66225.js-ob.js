'use strict';
const semver = require('semver'), url = require('url'), path = require('path'), log = require('npmlog'), headersTarballRange = '>=\x203.0.0\x20||\x20~0.12.10\x20||\x20~0.10.42', bitsre = /\/win-(x86|x64|arm64)\//, bitsreV3 = /\/win-(x86|ia32|x64)\//;
function processRelease(_0x1dfc18, _0x43555a, _0x51ea7d, _0x168417) {
    var _0x1dd53e = {
            'bPjzQ': '16|6|14|5|19|2|7|23|0|1|3|17|4|11|18|21|13|10|15|20|22|9|8|12',
            'YsbYz': '1|0|2|4|3',
            'vNvmk': function (_0x2472b6, _0x448a18, _0xded3e8, _0x5eb583, _0x5d617a) {
                return _0x2472b6(_0x448a18, _0xded3e8, _0x5eb583, _0x5d617a);
            },
            'cVPuk': 'x86',
            'fJodl': 'x64',
            'CakqC': function (_0x5720eb, _0x42c256, _0x2cca5b, _0x406793, _0x247aa5) {
                return _0x5720eb(_0x42c256, _0x2cca5b, _0x406793, _0x247aa5);
            },
            'uRZIc': 'arm64',
            'LjeoE': '3|5|0|4|1|2',
            'oUNTK': function (_0x3d7c5e, _0xd40ee3, _0xc26d75, _0xb7aaf, _0x3854b1) {
                return _0x3d7c5e(_0xd40ee3, _0xc26d75, _0xb7aaf, _0x3854b1);
            },
            'oyTOK': function (_0x3b2cbe, _0x38813a) {
                return _0x3b2cbe + _0x38813a;
            },
            'GWDzS': function (_0x17564a, _0x11da05) {
                return _0x17564a + _0x11da05;
            },
            'NzXlv': function (_0x1c5ad4, _0x22062c) {
                return _0x1c5ad4 + _0x22062c;
            },
            'NjmzR': '-headers',
            'dWFSn': '.tar.gz',
            'UoypB': function (_0x9a3bdc, _0x4c2310, _0x12b99b, _0x21f562, _0x1a3c95) {
                return _0x9a3bdc(_0x4c2310, _0x12b99b, _0x21f562, _0x1a3c95);
            },
            'qmQBS': function (_0x3025a5, _0x15e3c7) {
                return _0x3025a5 + _0x15e3c7;
            },
            'PQFqO': 'iojs',
            'SDfQj': function (_0x217472, _0x393f11) {
                return _0x217472 >= _0x393f11;
            },
            'narYx': function (_0x9381e9, _0x11e65b) {
                return _0x9381e9 < _0x11e65b;
            },
            'zxKwx': 'node',
            'JndjL': 'SHASUMS256.txt',
            'atpgZ': function (_0x416784, _0x29caf6) {
                return _0x416784 !== _0x29caf6;
            },
            'FNRjp': function (_0x481849, _0x273f8a) {
                return _0x481849(_0x273f8a);
            },
            'zpWey': function (_0x196687, _0x4f511f) {
                return _0x196687(_0x4f511f);
            },
            'jVVxU': 'dist-url',
            'rewRK': 'download',
            'DLtMu': 'using\x20dist-url',
            'fXLbx': function (_0x177bcc, _0x38db25) {
                return _0x177bcc === _0x38db25;
            },
            'rOgYt': 'https://nodejs.org/dist'
        }, _0x5e4757 = _0x1dd53e['bPjzQ']['split']('|'), _0x4177d8 = 0x0;
    while (!![]) {
        switch (_0x5e4757[_0x4177d8++]) {
        case '0':
            var _0x1cce84;
            continue;
        case '1':
            var _0x587d6e;
            continue;
        case '2':
            var _0x4d6e2c;
            continue;
        case '3':
            var _0x8fd4eb;
            continue;
        case '4':
            var _0x59786b;
            continue;
        case '5':
            var _0x1591be;
            continue;
        case '6':
            var _0x4ff3e0 = semver['parse'](_0x1581ef);
            continue;
        case '7':
            var _0x5f3255;
            continue;
        case '8':
            if (_0x168417 && _0x168417['headersUrl'] && !_0x2f8982) {
                var _0x506f2e = _0x1dd53e['YsbYz']['split']('|'), _0x16b269 = 0x0;
                while (!![]) {
                    switch (_0x506f2e[_0x16b269++]) {
                    case '0':
                        _0x1cce84 = _0x1dd53e['vNvmk'](resolveLibUrl, _0x4d6e2c, _0x168417['libUrl'] || _0x89dc56 || _0x5f3255, _0x1dd53e['cVPuk'], _0x4ff3e0['major']);
                        continue;
                    case '1':
                        _0x89dc56 = url['resolve'](_0x168417['headersUrl'], './');
                        continue;
                    case '2':
                        _0x587d6e = _0x1dd53e['vNvmk'](resolveLibUrl, _0x4d6e2c, _0x168417['libUrl'] || _0x89dc56 || _0x5f3255, _0x1dd53e['fJodl'], _0x4ff3e0['major']);
                        continue;
                    case '3':
                        _0x9018f8 = _0x168417['headersUrl'];
                        continue;
                    case '4':
                        _0x8fd4eb = _0x1dd53e['CakqC'](resolveLibUrl, _0x4d6e2c, _0x168417['libUrl'] || _0x89dc56 || _0x5f3255, _0x1dd53e['uRZIc'], _0x4ff3e0['major']);
                        continue;
                    }
                    break;
                }
            } else {
                var _0x471d79 = _0x1dd53e['LjeoE']['split']('|'), _0x2ba131 = 0x0;
                while (!![]) {
                    switch (_0x471d79[_0x2ba131++]) {
                    case '0':
                        _0x587d6e = _0x1dd53e['oUNTK'](resolveLibUrl, _0x4d6e2c, _0x89dc56, _0x1dd53e['fJodl'], _0x4ff3e0['major']);
                        continue;
                    case '1':
                        _0x59786b = semver['satisfies'](_0x4ff3e0, headersTarballRange);
                        continue;
                    case '2':
                        _0x9018f8 = url['resolve'](_0x89dc56, _0x1dd53e['oyTOK'](_0x1dd53e['GWDzS'](_0x1dd53e['GWDzS'](_0x1dd53e['NzXlv'](_0x4d6e2c, '-v'), _0x1581ef), _0x59786b ? _0x1dd53e['NjmzR'] : ''), _0x1dd53e['dWFSn']));
                        continue;
                    case '3':
                        _0x89dc56 = _0x5f3255;
                        continue;
                    case '4':
                        _0x8fd4eb = _0x1dd53e['oUNTK'](resolveLibUrl, _0x4d6e2c, _0x89dc56, _0x1dd53e['uRZIc'], _0x4ff3e0['major']);
                        continue;
                    case '5':
                        _0x1cce84 = _0x1dd53e['UoypB'](resolveLibUrl, _0x4d6e2c, _0x89dc56, _0x1dd53e['cVPuk'], _0x4ff3e0['major']);
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '9':
            _0x5f3255 += _0x1dd53e['NzXlv'](_0x1dd53e['qmQBS']('/v', _0x1581ef), '/');
            continue;
        case '10':
            _0x168417 ? _0x4d6e2c = _0x168417['name']['replace'](/io\.js/, _0x1dd53e['PQFqO']) : (_0x4e5c12 = _0x1dd53e['SDfQj'](_0x4ff3e0['major'], 0x1) && _0x1dd53e['narYx'](_0x4ff3e0['major'], 0x4), _0x4d6e2c = _0x4e5c12 ? _0x1dd53e['PQFqO'] : _0x1dd53e['zxKwx']);
            continue;
        case '11':
            if (!_0x4ff3e0)
                return { 'version': _0x1581ef };
            continue;
        case '12':
            return {
                'version': _0x1581ef,
                'semver': _0x4ff3e0,
                'name': _0x4d6e2c,
                'baseUrl': _0x89dc56,
                'tarballUrl': _0x9018f8,
                'shasumsUrl': url['resolve'](_0x89dc56, _0x1dd53e['JndjL']),
                'versionDir': _0x1dd53e['qmQBS'](_0x1dd53e['atpgZ'](_0x4d6e2c, _0x1dd53e['zxKwx']) ? _0x1dd53e['qmQBS'](_0x4d6e2c, '-') : '', _0x1581ef),
                'ia32': {
                    'libUrl': _0x1cce84,
                    'libPath': _0x1dd53e['FNRjp'](normalizePath, path['relative'](url['parse'](_0x89dc56)['path'], url['parse'](_0x1cce84)['path']))
                },
                'x64': {
                    'libUrl': _0x587d6e,
                    'libPath': _0x1dd53e['FNRjp'](normalizePath, path['relative'](url['parse'](_0x89dc56)['path'], url['parse'](_0x587d6e)['path']))
                },
                'arm64': {
                    'libUrl': _0x8fd4eb,
                    'libPath': _0x1dd53e['zpWey'](normalizePath, path['relative'](url['parse'](_0x89dc56)['path'], url['parse'](_0x8fd4eb)['path']))
                }
            };
        case '13':
            !_0x1591be && (_0x168417 = null);
            continue;
        case '14':
            var _0x2f8982 = _0x43555a['opts'][_0x1dd53e['jVVxU']] || _0x43555a['opts']['disturl'];
            continue;
        case '15':
            !_0x2f8982 && process['env']['NODEJS_ORG_MIRROR'] && (_0x2f8982 = process['env']['NODEJS_ORG_MIRROR']);
            continue;
        case '16':
            var _0x1581ef = semver['valid'](_0x1dfc18[0x0]) && _0x1dfc18[0x0] || _0x43555a['opts']['target'] || _0x51ea7d;
            continue;
        case '17':
            var _0x9018f8;
            continue;
        case '18':
            _0x1581ef = _0x4ff3e0['version'];
            continue;
        case '19':
            var _0x4e5c12;
            continue;
        case '20':
            _0x2f8982 && log['verbose'](_0x1dd53e['rewRK'], _0x1dd53e['DLtMu'], _0x2f8982);
            continue;
        case '21':
            _0x1591be = _0x1dd53e['fXLbx'](_0x1581ef, semver['parse'](_0x51ea7d)['version']);
            continue;
        case '22':
            _0x2f8982 ? _0x5f3255 = _0x2f8982['replace'](/\/+$/, '') : _0x5f3255 = _0x1dd53e['rOgYt'];
            continue;
        case '23':
            var _0x89dc56;
            continue;
        }
        break;
    }
}
function normalizePath(_0x172f1c) {
    return path['normalize'](_0x172f1c)['replace'](/\\/g, '/');
}
function resolveLibUrl(_0x25a661, _0x5af2b6, _0x365272, _0x301ec9) {
    var _0x2055b7 = {
            'VWbtl': function (_0xa1e59c, _0x53a4c5) {
                return _0xa1e59c === _0x53a4c5;
            },
            'pWoYN': function (_0x110eeb, _0x1a6c32) {
                return _0x110eeb >= _0x1a6c32;
            },
            'WkRGg': function (_0x23ca58, _0x19ebc6) {
                return _0x23ca58 + _0x19ebc6;
            },
            'LJUZv': function (_0x1ca1bd, _0x799627) {
                return _0x1ca1bd + _0x799627;
            },
            'qTtCd': function (_0x35ea79, _0x5c2bb3) {
                return _0x35ea79 + _0x5c2bb3;
            },
            'ibYKV': function (_0x360e2c, _0x26ef0c) {
                return _0x360e2c + _0x26ef0c;
            },
            'iTrKW': 'win-',
            'mgKPk': '.lib',
            'IKxqV': function (_0x1526b9, _0x7643e6) {
                return _0x1526b9 + _0x7643e6;
            },
            'BJVda': function (_0x3d584c, _0x201cbd) {
                return _0x3d584c + _0x201cbd;
            },
            'KRivA': 'x86',
            'UIzkr': function (_0x151912, _0x365ed6) {
                return _0x151912 + _0x365ed6;
            },
            'gTmLf': '/win-'
        }, _0x51f6ed = url['resolve'](_0x5af2b6, './'), _0x9c13b9 = bitsre['test'](_0x5af2b6) || _0x2055b7['VWbtl'](_0x301ec9, 0x3) && bitsreV3['test'](_0x5af2b6);
    if (!_0x9c13b9) {
        if (_0x2055b7['pWoYN'](_0x301ec9, 0x1))
            return url['resolve'](_0x51f6ed, _0x2055b7['WkRGg'](_0x2055b7['LJUZv'](_0x2055b7['qTtCd'](_0x2055b7['ibYKV'](_0x2055b7['iTrKW'], _0x365272), '/'), _0x25a661), _0x2055b7['mgKPk']));
        return url['resolve'](_0x51f6ed, _0x2055b7['IKxqV'](_0x2055b7['BJVda'](_0x2055b7['VWbtl'](_0x365272, _0x2055b7['KRivA']) ? '' : _0x2055b7['BJVda'](_0x365272, '/'), _0x25a661), _0x2055b7['mgKPk']));
    }
    return _0x5af2b6['replace'](_0x2055b7['VWbtl'](_0x301ec9, 0x3) ? bitsreV3 : bitsre, _0x2055b7['UIzkr'](_0x2055b7['UIzkr'](_0x2055b7['gTmLf'], _0x365272), '/'));
}
module['exports'] = processRelease;
