'use strict';
const _0x3263 = [
    '940562VpLcNN',
    '1IooHzG',
    '617449GkzaQT',
    '49oXVetG',
    '7855apNBlG',
    '3042709JOMuaH',
    'yup',
    'strapi-utils',
    './common',
    'validate',
    'catch',
    'object',
    'string',
    'min',
    'required',
    'name.required',
    'noUnknown',
    '2eTeZZB',
    '28547gvlngb',
    '3CjQaGQ',
    '186507fkLhgZ',
    '1000282fdwsVQ',
    '1iVvdkb'
];
const _0x1d5404 = _0x4c53;
(function (_0x3c5938, _0x61922a) {
    const _0x405aca = _0x4c53;
    while (!![]) {
        try {
            const _0x2d0cd5 = parseInt(_0x405aca(0x1ec)) * parseInt(_0x405aca(0x1ed)) + parseInt(_0x405aca(0x1ee)) * parseInt(_0x405aca(0x1ef)) + -parseInt(_0x405aca(0x1f0)) * -parseInt(_0x405aca(0x1f1)) + parseInt(_0x405aca(0x1f2)) + -parseInt(_0x405aca(0x1f3)) * -parseInt(_0x405aca(0x1f4)) + parseInt(_0x405aca(0x1f5)) * parseInt(_0x405aca(0x1f6)) + -parseInt(_0x405aca(0x1f7));
            if (_0x2d0cd5 === _0x61922a)
                break;
            else
                _0x3c5938['push'](_0x3c5938['shift']());
        } catch (_0x110820) {
            _0x3c5938['push'](_0x3c5938['shift']());
        }
    }
}(_0x3263, 0x7e3e6));
function _0x4c53(_0x113e11, _0x3046f1) {
    return _0x4c53 = function (_0x32631c, _0x4c5395) {
        _0x32631c = _0x32631c - 0x1ec;
        let _0x183b3d = _0x3263[_0x32631c];
        return _0x183b3d;
    }, _0x4c53(_0x113e11, _0x3046f1);
}
const yup = require(_0x1d5404(0x1f8)), {formatYupErrors} = require(_0x1d5404(0x1f9)), {isValidCategoryName} = require(_0x1d5404(0x1fa));
module['exports'] = _0x1bae1c => {
    const _0x3df26e = _0x1d5404;
    return componentCategorySchema[_0x3df26e(0x1fb)](_0x1bae1c, {
        'strict': !![],
        'abortEarly': ![]
    })[_0x3df26e(0x1fc)](_0x3c7b2c => Promise['reject'](formatYupErrors(_0x3c7b2c)));
};
const componentCategorySchema = yup[_0x1d5404(0x1fd)]({ 'name': yup[_0x1d5404(0x1fe)]()[_0x1d5404(0x1ff)](0x3)['test'](isValidCategoryName)[_0x1d5404(0x200)](_0x1d5404(0x201)) })[_0x1d5404(0x202)]();
