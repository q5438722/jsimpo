'use strict';
const _0x15c1 = [
    '2oQqZQu',
    '144411XceTRZ',
    '1070291HAfOBS',
    './ModuleFilenameHelpers',
    '../schemas/plugins/LoaderOptionsPlugin.check.js',
    '../schemas/plugins/LoaderOptionsPlugin.json',
    'object',
    'test',
    'options',
    'hooks',
    'compilation',
    'tap',
    'LoaderOptionsPlugin',
    'getCompilationHooks',
    'loader',
    'substr',
    'keys',
    'exports',
    '1ffPVly',
    '461921ItoQGM',
    '4AytHoi',
    '62056YGKuzX',
    '178762hIfXjN',
    '1yVbWtN',
    '282051RWctVH',
    '262853roVXmR'
];
const _0x3ec0df = _0x5b5a;
(function (_0xafa4e9, _0x490698) {
    const _0x51fc79 = _0x5b5a;
    while (!![]) {
        try {
            const _0x5ec28e = -parseInt(_0x51fc79(0xba)) * parseInt(_0x51fc79(0xbb)) + parseInt(_0x51fc79(0xbc)) * -parseInt(_0x51fc79(0xbd)) + parseInt(_0x51fc79(0xbe)) * parseInt(_0x51fc79(0xbf)) + parseInt(_0x51fc79(0xc0)) + -parseInt(_0x51fc79(0xc1)) + parseInt(_0x51fc79(0xc2)) * -parseInt(_0x51fc79(0xc3)) + parseInt(_0x51fc79(0xc4));
            if (_0x5ec28e === _0x490698)
                break;
            else
                _0xafa4e9['push'](_0xafa4e9['shift']());
        } catch (_0x411fd3) {
            _0xafa4e9['push'](_0xafa4e9['shift']());
        }
    }
}(_0x15c1, 0x41be4));
const ModuleFilenameHelpers = require(_0x3ec0df(0xc5)), NormalModule = require('./NormalModule'), createSchemaValidation = require('./util/create-schema-validation'), validate = createSchemaValidation(require(_0x3ec0df(0xc6)), () => require(_0x3ec0df(0xc7)), {
        'name': 'Loader\x20Options\x20Plugin',
        'baseDataPath': 'options'
    });
function _0x5b5a(_0x49d777, _0x26e7c4) {
    return _0x5b5a = function (_0x15c150, _0x5b5a66) {
        _0x15c150 = _0x15c150 - 0xba;
        let _0x7ba151 = _0x15c1[_0x15c150];
        return _0x7ba151;
    }, _0x5b5a(_0x49d777, _0x26e7c4);
}
class LoaderOptionsPlugin {
    constructor(_0x2f569e = {}) {
        const _0x46c358 = _0x3ec0df;
        validate(_0x2f569e);
        if (typeof _0x2f569e !== _0x46c358(0xc8))
            _0x2f569e = {};
        !_0x2f569e[_0x46c358(0xc9)] && (_0x2f569e['test'] = { 'test': () => !![] }), this['options'] = _0x2f569e;
    }
    ['apply'](_0x356f6f) {
        const _0x1c618d = _0x3ec0df, _0x5d3188 = this[_0x1c618d(0xca)];
        _0x356f6f[_0x1c618d(0xcb)][_0x1c618d(0xcc)][_0x1c618d(0xcd)](_0x1c618d(0xce), _0x3805cf => {
            const _0x1951f4 = _0x1c618d;
            NormalModule[_0x1951f4(0xcf)](_0x3805cf)[_0x1951f4(0xd0)][_0x1951f4(0xcd)]('LoaderOptionsPlugin', (_0x5a8163, _0x24bb2c) => {
                const _0x408529 = _0x1951f4, _0x25a465 = _0x24bb2c['resource'];
                if (!_0x25a465)
                    return;
                const _0x284be9 = _0x25a465['indexOf']('?');
                if (ModuleFilenameHelpers['matchObject'](_0x5d3188, _0x284be9 < 0x0 ? _0x25a465 : _0x25a465[_0x408529(0xd1)](0x0, _0x284be9)))
                    for (const _0x440a9e of Object[_0x408529(0xd2)](_0x5d3188)) {
                        if (_0x440a9e === 'include' || _0x440a9e === 'exclude' || _0x440a9e === _0x408529(0xc9))
                            continue;
                        _0x5a8163[_0x440a9e] = _0x5d3188[_0x440a9e];
                    }
            });
        });
    }
}
module[_0x3ec0df(0xd3)] = LoaderOptionsPlugin;
