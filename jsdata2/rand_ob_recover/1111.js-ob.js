const has = require(_0x574871(453)), allRules = {
        'manipulate-jsx-as-array': require(_0x574871(454)),
        'no-spread-in-props': require(_0x574871(455)),
        'reserve-class-properties': require(_0x574871(456)),
        'class-naming': require(_0x574871(457)),
        'props-reserve-keyword': require(_0x574871(458)),
        'this-props-function': require(_0x574871(459)),
        'render-props': require('./render-props'),
        'duplicate-name-of-state-and-props': require(_0x574871(460))
    }, transformerDisableRules = new Set([
        _0x574871(461),
        _0x574871(462)
    ]);
function configureAsError(_0x327268, _0x17951f) {
    const _0x21cd94 = _0x574871, _0x203173 = {
            'MygTn': function (_0x3a6cd1, _0xd8f3a5, _0x399de8) {
                return _0x3a6cd1(_0xd8f3a5, _0x399de8);
            }
        }, _0xf1b17f = {};
    for (const _0x4d0251 in _0x327268) {
        if (!_0x203173[_0x21cd94(463)](has, _0x327268, _0x4d0251))
            continue;
        if (_0x17951f && transformerDisableRules[_0x21cd94(453)](_0x4d0251))
            continue;
        _0xf1b17f['taro/' + _0x4d0251] = -3519 + -43 * 68 + 1 * 6445;
    }
    return _0xf1b17f;
}
const transformerRules = configureAsError(allRules, !![]), activeRules = configureAsError(allRules);
function _0x1236(_0x2d75f2, _0x2c6439) {
    return _0x1236 = function (_0xa183b7, _0xaa6c52) {
        _0xa183b7 = _0xa183b7 - (-7536 + -6448 + 14426);
        let _0x1393fa = _0x2694[_0xa183b7];
        return _0x1393fa;
    }, _0x1236(_0x2d75f2, _0x2c6439);
}
module[_0x574871(464)] = {
    'activeRules': activeRules,
    'allRules': allRules,
    'transformerRules': transformerRules
};