'use strict';
const {isCI} = require('ci-info'), runPrettier = require('../runPrettier.js');
describe('format\x20correctly\x20if\x20stdin\x20content\x20compatible\x20with\x20stdin-filepath', () => {
    const _0x27d442 = {
        'Kyuhf': function (_0x10ca47, _0x5493ee, _0x5bd118, _0x156578) {
            return _0x10ca47(_0x5493ee, _0x5bd118, _0x156578);
        },
        'pTUNw': 'cli',
        'NLzqn': '--stdin-filepath',
        'iieuV': 'abc.css',
        'UBOHU': '.name\x20{\x20display:\x20none;\x20}'
    };
    _0x27d442['Kyuhf'](runPrettier, _0x27d442['pTUNw'], [
        _0x27d442['NLzqn'],
        _0x27d442['iieuV']
    ], { 'input': _0x27d442['UBOHU'] })['test']({ 'status': 0x0 });
}), describe('throw\x20error\x20if\x20stdin\x20content\x20incompatible\x20with\x20stdin-filepath', () => {
    const _0x57ab81 = {
        'VWZiX': function (_0x56cc08, _0x577c61, _0x56de33, _0x5dc38b) {
            return _0x56cc08(_0x577c61, _0x56de33, _0x5dc38b);
        },
        'VJOeX': 'cli',
        'LGFnQ': '--stdin-filepath',
        'EaKTV': 'abc.js',
        'FNSmP': '.name\x20{\x20display:\x20none;\x20}',
        'qQbgo': 'non-zero'
    };
    _0x57ab81['VWZiX'](runPrettier, _0x57ab81['VJOeX'], [
        _0x57ab81['LGFnQ'],
        _0x57ab81['EaKTV']
    ], { 'input': _0x57ab81['FNSmP'] })['test']({ 'status': _0x57ab81['qQbgo'] });
}), describe('gracefully\x20handle\x20stdin-filepath\x20with\x20nonexistent\x20directory', () => {
    const _0x3e05ea = {
        'dCRbI': function (_0x11176b, _0x2d6112, _0x457ff2, _0x14d270) {
            return _0x11176b(_0x2d6112, _0x457ff2, _0x14d270);
        },
        'NZlVN': 'cli',
        'BZfkj': '--stdin-filepath',
        'uSxXL': 'definitely/nonexistent/path.css',
        'IGadD': '.name\x20{\x20display:\x20none;\x20}'
    };
    _0x3e05ea['dCRbI'](runPrettier, _0x3e05ea['NZlVN'], [
        _0x3e05ea['BZfkj'],
        _0x3e05ea['uSxXL']
    ], { 'input': _0x3e05ea['IGadD'] })['test']({ 'status': 0x0 });
}), describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20nonexistent\x20file', () => {
    const _0x3a1506 = {
        'ulUlj': function (_0x280972, _0x1bb042, _0xcf43ba, _0x4e4095) {
            return _0x280972(_0x1bb042, _0xcf43ba, _0x4e4095);
        },
        'DrsjD': 'cli',
        'GuLjx': '--stdin-filepath',
        'YWotH': 'config/editorconfig/nonexistent.js'
    };
    _0x3a1506['ulUlj'](runPrettier, _0x3a1506['DrsjD'], [
        _0x3a1506['GuLjx'],
        _0x3a1506['YWotH']
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'['trim']() })['test']({ 'status': 0x0 });
}), describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20nonexistent\x20directory', () => {
    const _0x47d26a = {
        'tQpXK': function (_0x5960a4, _0xa6821f, _0x29d54e, _0x5b1fe2) {
            return _0x5960a4(_0xa6821f, _0x29d54e, _0x5b1fe2);
        },
        'NAnYl': 'cli',
        'MeACW': '--stdin-filepath',
        'hkxDM': 'config/editorconfig/nonexistent/one/two/three.js'
    };
    _0x47d26a['tQpXK'](runPrettier, _0x47d26a['NAnYl'], [
        _0x47d26a['MeACW'],
        _0x47d26a['hkxDM']
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'['trim']() })['test']({ 'status': 0x0 });
}), describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20a\x20deep\x20path', () => {
    const _0x789032 = {
        'AGsgK': function (_0x20de1a, _0x49753d, _0x2aa8a6, _0x1456ac) {
            return _0x20de1a(_0x49753d, _0x2aa8a6, _0x1456ac);
        },
        'zjGKd': 'cli',
        'opcxm': '--stdin-filepath',
        'DMGSM': function (_0x1c1bbc, _0x135806) {
            return _0x1c1bbc + _0x135806;
        },
        'zFvdC': function (_0x217734, _0x3696b8) {
            return _0x217734 + _0x3696b8;
        },
        'vqoyX': 'config/editorconfig/',
        'LHgln': 'three.js'
    };
    _0x789032['AGsgK'](runPrettier, _0x789032['zjGKd'], [
        _0x789032['opcxm'],
        _0x789032['DMGSM'](_0x789032['zFvdC'](_0x789032['vqoyX'], 'a/'['repeat'](0x1e)), _0x789032['LHgln'])
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'['trim']() })['test']({ 'status': 0x0 });
});
isCI && describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20in\x20root', () => {
    const _0x2c9008 = {
            'AWBJy': function (_0x9eb622, _0x2ceaae, _0x431dc8, _0x30ce1d) {
                return _0x9eb622(_0x2ceaae, _0x431dc8, _0x30ce1d);
            },
            'jxBJM': 'cli',
            'NVmuo': '--stdin-filepath',
            'oyEkB': '/foo.js',
            'MFWVq': function (_0x74a51f, _0x5b6371) {
                return _0x74a51f + _0x5b6371;
            }
        }, _0xa54df0 = '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'['trim']();
    _0x2c9008['AWBJy'](runPrettier, _0x2c9008['jxBJM'], [
        _0x2c9008['NVmuo'],
        _0x2c9008['oyEkB']
    ], { 'input': _0xa54df0 })['test']({
        'status': 0x0,
        'stdout': _0x2c9008['MFWVq'](_0xa54df0, '\x0a'),
        'stderr': '',
        'write': []
    });
});
describe('apply\x20editorconfig\x20for\x20stdin-filepath\x20with\x20a\x20deep\x20path', () => {
    const _0x228847 = {
        'DvYcn': function (_0x397a52, _0x393d7b, _0x4c6556, _0x596ec0) {
            return _0x397a52(_0x393d7b, _0x4c6556, _0x596ec0);
        },
        'kvdhU': 'cli',
        'hDboc': '--stdin-filepath',
        'zApHB': function (_0x47fa92, _0x125320) {
            return _0x47fa92 + _0x125320;
        },
        'EDqEA': function (_0x1e8cd8, _0x48caf3) {
            return _0x1e8cd8 + _0x48caf3;
        },
        'eAvXa': 'config/editorconfig/',
        'nkShp': 'three.js'
    };
    _0x228847['DvYcn'](runPrettier, _0x228847['kvdhU'], [
        _0x228847['hDboc'],
        _0x228847['zApHB'](_0x228847['EDqEA'](_0x228847['eAvXa'], 'a/'['repeat'](0x1e)), _0x228847['nkShp'])
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x20a\x20tab\x22);\x0a}\x0a'['trim']() })['test']({ 'status': 0x0 });
}), describe('don’t\x20apply\x20editorconfig\x20outside\x20project\x20for\x20stdin-filepath\x20with\x20nonexistent\x20directory', () => {
    const _0x20afc7 = {
        'OnvtA': function (_0xba1325, _0x549492, _0x5e63a6, _0x3a273c) {
            return _0xba1325(_0x549492, _0x5e63a6, _0x3a273c);
        },
        'fcYCK': 'cli',
        'dGmeM': '--stdin-filepath',
        'oIiqJ': 'config/editorconfig/repo-root/nonexistent/one/two/three.js'
    };
    _0x20afc7['OnvtA'](runPrettier, _0x20afc7['fcYCK'], [
        _0x20afc7['dGmeM'],
        _0x20afc7['oIiqJ']
    ], { 'input': '\x0afunction\x20f()\x20{\x0a\x20\x20console.log(\x22should\x20be\x20indented\x20with\x202\x20spaces\x22);\x0a}\x0a'['trim']() })['test']({ 'status': 0x0 });
}), describe('output\x20file\x20as-is\x20if\x20stdin-filepath\x20matched\x20patterns\x20in\x20ignore-path', () => {
    const _0x92d69c = {
        'OXDOW': function (_0x5a2923, _0x2ea399, _0x59e4b3, _0x3d2b16) {
            return _0x5a2923(_0x2ea399, _0x59e4b3, _0x3d2b16);
        },
        'mxsWs': 'cli/stdin-ignore',
        'HbfjE': '--stdin-filepath',
        'acStd': 'ignore/example.js',
        'OhKTB': 'hello_world(\x20);'
    };
    _0x92d69c['OXDOW'](runPrettier, _0x92d69c['mxsWs'], [
        _0x92d69c['HbfjE'],
        _0x92d69c['acStd']
    ], { 'input': _0x92d69c['OhKTB'] })['test']({
        'stdout': _0x92d69c['OhKTB'],
        'status': 0x0
    });
});
