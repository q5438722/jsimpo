'use strict';
const ModuleFilenameHelpers = require('./ModuleFilenameHelpers'), NormalModule = require('./NormalModule'), createSchemaValidation = require('./util/create-schema-validation'), validate = createSchemaValidation(require('../schemas/plugins/LoaderOptionsPlugin.check.js'), () => require('../schemas/plugins/LoaderOptionsPlugin.json'), {
        'name': 'Loader\x20Options\x20Plugin',
        'baseDataPath': 'options'
    });
class LoaderOptionsPlugin {
    constructor(_0x5b65cc = {}) {
        validate(_0x5b65cc);
        if (typeof _0x5b65cc !== 'object')
            _0x5b65cc = {};
        !_0x5b65cc['test'] && (_0x5b65cc['test'] = { 'test': () => !![] }), this['options'] = _0x5b65cc;
    }
    ['apply'](_0x22802d) {
        const _0x503dfc = this['options'];
        _0x22802d['hooks']['compilation']['tap']('LoaderOptionsPlugin', _0x779c1b => {
            NormalModule['getCompilationHooks'](_0x779c1b)['loader']['tap']('LoaderOptionsPlugin', (_0x4965e3, _0x3e1b50) => {
                const _0x219768 = _0x3e1b50['resource'];
                if (!_0x219768)
                    return;
                const _0x39cf05 = _0x219768['indexOf']('?');
                if (ModuleFilenameHelpers['matchObject'](_0x503dfc, _0x39cf05 < 0x8c6 + -0x1 * 0x12c1 + -0x9fb * -0x1 ? _0x219768 : _0x219768['substr'](-0x1f8a + -0x1883 + 0x12af * 0x3, _0x39cf05)))
                    for (const _0x4ce453 of Object['keys'](_0x503dfc)) {
                        if (_0x4ce453 === 'include' || _0x4ce453 === 'exclude' || _0x4ce453 === 'test')
                            continue;
                        _0x4965e3[_0x4ce453] = _0x503dfc[_0x4ce453];
                    }
            });
        });
    }
}
module['exports'] = LoaderOptionsPlugin;
