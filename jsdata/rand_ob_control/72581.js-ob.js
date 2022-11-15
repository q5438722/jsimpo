'use strict';
const ModuleFilenameHelpers = require('./ModuleFilenameHelpers'), NormalModule = require('./NormalModule'), createSchemaValidation = require('./util/create-schema-validation'), validate = createSchemaValidation(require('../schemas/plugins/LoaderOptionsPlugin.check.js'), () => require('../schemas/plugins/LoaderOptionsPlugin.json'), {
        'name': 'Loader\x20Options\x20Plugin',
        'baseDataPath': 'options'
    });
class LoaderOptionsPlugin {
    constructor(_0x34ef04 = {}) {
        const _0x352c0a = {
            'jwdbO': function (_0x4c132a, _0x478e55) {
                return _0x4c132a(_0x478e55);
            },
            'LaeOR': function (_0x139b80, _0x12cc88) {
                return _0x139b80 !== _0x12cc88;
            },
            'NapLR': 'object'
        };
        _0x352c0a['jwdbO'](validate, _0x34ef04);
        if (_0x352c0a['LaeOR'](typeof _0x34ef04, _0x352c0a['NapLR']))
            _0x34ef04 = {};
        !_0x34ef04['test'] && (_0x34ef04['test'] = { 'test': () => !![] }), this['options'] = _0x34ef04;
    }
    ['apply'](_0x1cdf3a) {
        const _0x3bc0ac = {
                'pLPHF': function (_0x1e8be0, _0x4beac4) {
                    return _0x1e8be0 < _0x4beac4;
                },
                'ggaCg': function (_0x70ddfe, _0x35cd10) {
                    return _0x70ddfe === _0x35cd10;
                },
                'YtbDN': 'include',
                'zwfkv': function (_0x1a8ee1, _0x559f7a) {
                    return _0x1a8ee1 === _0x559f7a;
                },
                'vfnwJ': 'exclude',
                'keiNy': 'test',
                'OPJXy': 'LoaderOptionsPlugin'
            }, _0x1cc379 = this['options'];
        _0x1cdf3a['hooks']['compilation']['tap'](_0x3bc0ac['OPJXy'], _0x27bfac => {
            NormalModule['getCompilationHooks'](_0x27bfac)['loader']['tap'](_0x3bc0ac['OPJXy'], (_0x353c29, _0x130539) => {
                const _0x5d540e = _0x130539['resource'];
                if (!_0x5d540e)
                    return;
                const _0x34431b = _0x5d540e['indexOf']('?');
                if (ModuleFilenameHelpers['matchObject'](_0x1cc379, _0x3bc0ac['pLPHF'](_0x34431b, 0x0) ? _0x5d540e : _0x5d540e['substr'](0x0, _0x34431b)))
                    for (const _0x53dc43 of Object['keys'](_0x1cc379)) {
                        if (_0x3bc0ac['ggaCg'](_0x53dc43, _0x3bc0ac['YtbDN']) || _0x3bc0ac['zwfkv'](_0x53dc43, _0x3bc0ac['vfnwJ']) || _0x3bc0ac['zwfkv'](_0x53dc43, _0x3bc0ac['keiNy']))
                            continue;
                        _0x353c29[_0x53dc43] = _0x1cc379[_0x53dc43];
                    }
            });
        });
    }
}
module['exports'] = LoaderOptionsPlugin;
