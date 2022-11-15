const ModuleFilenameHelpers = require(_0x3ec0df(197)), NormalModule = require('./NormalModule'), createSchemaValidation = require('./util/create-schema-validation'), validate = createSchemaValidation(require(_0x3ec0df(198)), () => require(_0x3ec0df(199)), {
        'name': 'Loader Options Plugin',
        'baseDataPath': 'options'
    });
function _0x5b5a(_0x49d777, _0x26e7c4) {
    return _0x5b5a = function (_0x15c150, _0x5b5a66) {
        _0x15c150 = _0x15c150 - 186;
        let _0x7ba151 = _0x15c1[_0x15c150];
        return _0x7ba151;
    }, _0x5b5a(_0x49d777, _0x26e7c4);
}
class LoaderOptionsPlugin {
    constructor(_0x2f569e = {}) {
        const _0x46c358 = _0x3ec0df;
        validate(_0x2f569e);
        if (typeof _0x2f569e !== _0x46c358(200))
            _0x2f569e = {};
        !_0x2f569e[_0x46c358(201)] && (_0x2f569e['test'] = { 'test': () => !![] }), this['options'] = _0x2f569e;
    }
    ['apply'](_0x356f6f) {
        const _0x1c618d = _0x3ec0df, _0x5d3188 = this[_0x1c618d(202)];
        _0x356f6f[_0x1c618d(203)][_0x1c618d(204)][_0x1c618d(205)](_0x1c618d(206), _0x3805cf => {
            const _0x1951f4 = _0x1c618d;
            NormalModule[_0x1951f4(207)](_0x3805cf)[_0x1951f4(208)][_0x1951f4(205)]('LoaderOptionsPlugin', (_0x5a8163, _0x24bb2c) => {
                const _0x408529 = _0x1951f4, _0x25a465 = _0x24bb2c['resource'];
                if (!_0x25a465)
                    return;
                const _0x284be9 = _0x25a465['indexOf']('?');
                if (ModuleFilenameHelpers['matchObject'](_0x5d3188, _0x284be9 < 0 ? _0x25a465 : _0x25a465[_0x408529(209)](0, _0x284be9)))
                    for (const _0x440a9e of Object[_0x408529(210)](_0x5d3188)) {
                        if (_0x440a9e === 'include' || _0x440a9e === 'exclude' || _0x440a9e === _0x408529(201))
                            continue;
                        _0x5a8163[_0x440a9e] = _0x5d3188[_0x440a9e];
                    }
            });
        });
    }
}
module[_0x3ec0df(211)] = LoaderOptionsPlugin;