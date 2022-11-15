const _0x186c = [
    '9574jmNEUW',
    '1197768gouIeJ',
    '12553MxoLmq',
    '21MKgOqo',
    '696971MyvnCt',
    './manipulate-jsx-as-array',
    './reserve-class-properties',
    './class-naming',
    './this-props-function',
    './render-props',
    'this-props-function',
    'props-reserve-keyword',
    'has',
    'taro/',
    'exports',
    '138904frILvV',
    '872074fUItPF',
    '191887dhuTHZ'
];
const _0x258da9 = _0x1e6e;
(function (_0x5a49ce, _0x521fab) {
    const _0x404abc = _0x1e6e;
    while (!![]) {
        try {
            const _0x24a30e = parseInt(_0x404abc(0x131)) + parseInt(_0x404abc(0x132)) + parseInt(_0x404abc(0x133)) + -parseInt(_0x404abc(0x134)) + -parseInt(_0x404abc(0x135)) + -parseInt(_0x404abc(0x136)) * -parseInt(_0x404abc(0x137)) + parseInt(_0x404abc(0x138));
            if (_0x24a30e === _0x521fab)
                break;
            else
                _0x5a49ce['push'](_0x5a49ce['shift']());
        } catch (_0x4616d) {
            _0x5a49ce['push'](_0x5a49ce['shift']());
        }
    }
}(_0x186c, 0xe96cb));
const has = require('has'), allRules = {
        'manipulate-jsx-as-array': require(_0x258da9(0x139)),
        'no-spread-in-props': require('./no-spread-in-props'),
        'reserve-class-properties': require(_0x258da9(0x13a)),
        'class-naming': require(_0x258da9(0x13b)),
        'props-reserve-keyword': require('./props-reserve-keyword'),
        'this-props-function': require(_0x258da9(0x13c)),
        'render-props': require(_0x258da9(0x13d)),
        'duplicate-name-of-state-and-props': require('./duplicate-name-of-state-and-props')
    }, transformerDisableRules = new Set([
        _0x258da9(0x13e),
        _0x258da9(0x13f)
    ]);
function _0x1e6e(_0x58d5be, _0x1bbe37) {
    return _0x1e6e = function (_0x186cdf, _0x1e6ef1) {
        _0x186cdf = _0x186cdf - 0x131;
        let _0x47cc8a = _0x186c[_0x186cdf];
        return _0x47cc8a;
    }, _0x1e6e(_0x58d5be, _0x1bbe37);
}
function configureAsError(_0x540387, _0x3ac6c0) {
    const _0x3de60c = _0x258da9, _0x84dc15 = {};
    for (const _0x293115 in _0x540387) {
        if (!has(_0x540387, _0x293115))
            continue;
        if (_0x3ac6c0 && transformerDisableRules[_0x3de60c(0x140)](_0x293115))
            continue;
        _0x84dc15[_0x3de60c(0x141) + _0x293115] = 0x2;
    }
    return _0x84dc15;
}
const transformerRules = configureAsError(allRules, !![]), activeRules = configureAsError(allRules);
module[_0x258da9(0x142)] = {
    'activeRules': activeRules,
    'allRules': allRules,
    'transformerRules': transformerRules
};
