'use strict';
const ModuleFilenameHelpers = require('./ModuleFilenameHelpers');
const NormalModule = require('./NormalModule');
const createSchemaValidation = require('./util/create-schema-validation');
const validate = createSchemaValidation(require('../schemas/plugins/LoaderOptionsPlugin.check.js'), () => require('../schemas/plugins/LoaderOptionsPlugin.json'), {
    'name': 'Loader Options Plugin',
    'baseDataPath': 'options'
});
class LoaderOptionsPlugin {
    constructor(_0x4fddf9 = {}) {
        validate(_0x4fddf9);
        if (typeof _0x4fddf9 !== 'object')
            _0x4fddf9 = {};
        if (!_0x4fddf9['test']) {
            _0x4fddf9['test'] = { 'test': () => !![] };
        }
        this['options'] = _0x4fddf9;
    }
    ['apply'](_0x40394e) {
        const _0x3b06ef = this['options'];
        _0x40394e['hooks']['compilation']['tap']('LoaderOptionsPlugin', _0x283740 => {
            NormalModule['getCompilationHooks'](_0x283740)['loader']['tap']('LoaderOptionsPlugin', (_0x26e0e6, _0x32165f) => {
                const _0x558f67 = _0x32165f['resource'];
                if (!_0x558f67)
                    return;
                const _0x27082a = _0x558f67['indexOf']('?');
                if (ModuleFilenameHelpers['matchObject'](_0x3b06ef, _0x27082a < 0 ? _0x558f67 : _0x558f67['substr'](0, _0x27082a))) {
                    for (const _0x10081b of Object['keys'](_0x3b06ef)) {
                        if (_0x10081b === 'include' || _0x10081b === 'exclude' || _0x10081b === 'test') {
                            continue;
                        }
                        _0x26e0e6[_0x10081b] = _0x3b06ef[_0x10081b];
                    }
                }
            });
        });
    }
}
module['exports'] = LoaderOptionsPlugin;