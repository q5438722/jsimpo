const has = require('has'), allRules = {
        'manipulate-jsx-as-array': require(_0x258da9(313)),
        'no-spread-in-props': require('./no-spread-in-props'),
        'reserve-class-properties': require(_0x258da9(314)),
        'class-naming': require(_0x258da9(315)),
        'props-reserve-keyword': require('./props-reserve-keyword'),
        'this-props-function': require(_0x258da9(316)),
        'render-props': require(_0x258da9(317)),
        'duplicate-name-of-state-and-props': require('./duplicate-name-of-state-and-props')
    }, transformerDisableRules = new Set([
        _0x258da9(318),
        _0x258da9(319)
    ]);
function _0x1e6e(_0x58d5be, _0x1bbe37) {
    return _0x1e6e = function (_0x186cdf, _0x1e6ef1) {
        _0x186cdf = _0x186cdf - 305;
        let _0x47cc8a = _0x186c[_0x186cdf];
        return _0x47cc8a;
    }, _0x1e6e(_0x58d5be, _0x1bbe37);
}
function configureAsError(_0x540387, _0x3ac6c0) {
    const _0x3de60c = _0x258da9, _0x84dc15 = {};
    for (const _0x293115 in _0x540387) {
        if (!has(_0x540387, _0x293115))
            continue;
        if (_0x3ac6c0 && transformerDisableRules[_0x3de60c(320)](_0x293115))
            continue;
        _0x84dc15[_0x3de60c(321) + _0x293115] = 2;
    }
    return _0x84dc15;
}
const transformerRules = configureAsError(allRules, !![]), activeRules = configureAsError(allRules);
module[_0x258da9(322)] = {
    'activeRules': activeRules,
    'allRules': allRules,
    'transformerRules': transformerRules
};