const _0x2694 = [
    './no-spread-in-props',
    './reserve-class-properties',
    './class-naming',
    './props-reserve-keyword',
    './this-props-function',
    './duplicate-name-of-state-and-props',
    'this-props-function',
    'props-reserve-keyword',
    'MygTn',
    'exports',
    '1067101oHoqWq',
    '1LanMNd',
    '388542cmHGsj',
    '804IIMjZJ',
    '1757ofJvNf',
    '671544KCwCRe',
    '1ReXCXg',
    '219932eRFqDk',
    '1200850XdZJBh',
    '1069270bBkblG',
    '2sQOTge',
    'has',
    './manipulate-jsx-as-array'
];
const _0x574871 = _0x1236;
(function (_0x2d08da, _0x38efd6) {
    const _0x5edc09 = _0x1236;
    while (!![]) {
        try {
            const _0x2a0fff = parseInt(_0x5edc09(0x1ba)) * -parseInt(_0x5edc09(0x1bb)) + parseInt(_0x5edc09(0x1bc)) + -parseInt(_0x5edc09(0x1bd)) * parseInt(_0x5edc09(0x1be)) + -parseInt(_0x5edc09(0x1bf)) + -parseInt(_0x5edc09(0x1c0)) * -parseInt(_0x5edc09(0x1c1)) + parseInt(_0x5edc09(0x1c2)) + -parseInt(_0x5edc09(0x1c3)) * -parseInt(_0x5edc09(0x1c4));
            if (_0x2a0fff === _0x38efd6)
                break;
            else
                _0x2d08da['push'](_0x2d08da['shift']());
        } catch (_0x16c4ce) {
            _0x2d08da['push'](_0x2d08da['shift']());
        }
    }
}(_0x2694, -0xf041 * -0x1 + 0x8492d * -0x1 + -0x1 * -0x13809b));
const has = require(_0x574871(0x1c5)), allRules = {
        'manipulate-jsx-as-array': require(_0x574871(0x1c6)),
        'no-spread-in-props': require(_0x574871(0x1c7)),
        'reserve-class-properties': require(_0x574871(0x1c8)),
        'class-naming': require(_0x574871(0x1c9)),
        'props-reserve-keyword': require(_0x574871(0x1ca)),
        'this-props-function': require(_0x574871(0x1cb)),
        'render-props': require('./render-props'),
        'duplicate-name-of-state-and-props': require(_0x574871(0x1cc))
    }, transformerDisableRules = new Set([
        _0x574871(0x1cd),
        _0x574871(0x1ce)
    ]);
function configureAsError(_0x327268, _0x17951f) {
    const _0x21cd94 = _0x574871, _0x203173 = {
            'MygTn': function (_0x3a6cd1, _0xd8f3a5, _0x399de8) {
                return _0x3a6cd1(_0xd8f3a5, _0x399de8);
            }
        }, _0xf1b17f = {};
    for (const _0x4d0251 in _0x327268) {
        if (!_0x203173[_0x21cd94(0x1cf)](has, _0x327268, _0x4d0251))
            continue;
        if (_0x17951f && transformerDisableRules[_0x21cd94(0x1c5)](_0x4d0251))
            continue;
        _0xf1b17f['taro/' + _0x4d0251] = -0xdbf + -0x2b * 0x44 + 0x1 * 0x192d;
    }
    return _0xf1b17f;
}
const transformerRules = configureAsError(allRules, !![]), activeRules = configureAsError(allRules);
function _0x1236(_0x2d75f2, _0x2c6439) {
    return _0x1236 = function (_0xa183b7, _0xaa6c52) {
        _0xa183b7 = _0xa183b7 - (-0x1d70 + -0x1930 + 0x385a);
        let _0x1393fa = _0x2694[_0xa183b7];
        return _0x1393fa;
    }, _0x1236(_0x2d75f2, _0x2c6439);
}
module[_0x574871(0x1d0)] = {
    'activeRules': activeRules,
    'allRules': allRules,
    'transformerRules': transformerRules
};
