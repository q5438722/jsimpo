'use strict';
const _0x6580 = [
    '37951XjCNeF',
    '1022773bPFoOW',
    '136678qktylu',
    '1QjqBDq',
    '1460798njJEdh',
    'yup',
    'strapi-utils',
    './common',
    'catch',
    'reject',
    'object',
    'string',
    'min',
    'test',
    'required',
    'name.required',
    'noUnknown',
    '19777ROuTvt',
    '3tCYhUP',
    '1373504KUTfPl',
    '4790lDxFZY',
    '97JUVgJs',
    '29MUosWD'
];
const _0x3692f2 = _0x3548;
(function (_0x30f946, _0x200bbf) {
    const _0x19b79f = _0x3548;
    while (!![]) {
        try {
            const _0x43e12d = parseInt(_0x19b79f(0xdc)) * -parseInt(_0x19b79f(0xdd)) + -parseInt(_0x19b79f(0xde)) + parseInt(_0x19b79f(0xdf)) * parseInt(_0x19b79f(0xe0)) + parseInt(_0x19b79f(0xe1)) * parseInt(_0x19b79f(0xe2)) + -parseInt(_0x19b79f(0xe3)) + -parseInt(_0x19b79f(0xe4)) * -parseInt(_0x19b79f(0xe5)) + parseInt(_0x19b79f(0xe6));
            if (_0x43e12d === _0x200bbf)
                break;
            else
                _0x30f946['push'](_0x30f946['shift']());
        } catch (_0x2cd080) {
            _0x30f946['push'](_0x30f946['shift']());
        }
    }
}(_0x6580, -0x329e8 + -0x44 * -0x1d2c + 0x6343d));
const yup = require(_0x3692f2(0xe7)), {formatYupErrors} = require(_0x3692f2(0xe8)), {isValidCategoryName} = require(_0x3692f2(0xe9));
module['exports'] = _0x56675f => {
    const _0x5e7f05 = _0x3692f2;
    return componentCategorySchema['validate'](_0x56675f, {
        'strict': !![],
        'abortEarly': ![]
    })[_0x5e7f05(0xea)](_0x78b883 => Promise[_0x5e7f05(0xeb)](formatYupErrors(_0x78b883)));
};
function _0x3548(_0xc42ba0, _0x50c7ad) {
    return _0x3548 = function (_0x452a1f, _0x3d4fd8) {
        _0x452a1f = _0x452a1f - (-0x1376 + -0x1 * 0x1c55 + 0x30a7);
        let _0x4ff844 = _0x6580[_0x452a1f];
        return _0x4ff844;
    }, _0x3548(_0xc42ba0, _0x50c7ad);
}
const componentCategorySchema = yup[_0x3692f2(0xec)]({ 'name': yup[_0x3692f2(0xed)]()[_0x3692f2(0xee)](0x1b59 * 0x1 + -0xb * 0x20f + -0x1 * 0x4b1)[_0x3692f2(0xef)](isValidCategoryName)[_0x3692f2(0xf0)](_0x3692f2(0xf1)) })[_0x3692f2(0xf2)]();
