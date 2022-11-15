function _0x4c53(_0x113e11, _0x3046f1) {
    return _0x4c53 = function (_0x32631c, _0x4c5395) {
        _0x32631c = _0x32631c - 492;
        let _0x183b3d = _0x3263[_0x32631c];
        return _0x183b3d;
    }, _0x4c53(_0x113e11, _0x3046f1);
}
const yup = require(_0x1d5404(504)), {formatYupErrors} = require(_0x1d5404(505)), {isValidCategoryName} = require(_0x1d5404(506));
module['exports'] = _0x1bae1c => {
    const _0x3df26e = _0x1d5404;
    return componentCategorySchema[_0x3df26e(507)](_0x1bae1c, {
        'strict': !![],
        'abortEarly': ![]
    })[_0x3df26e(508)](_0x3c7b2c => Promise['reject'](formatYupErrors(_0x3c7b2c)));
};
const componentCategorySchema = yup[_0x1d5404(509)]({ 'name': yup[_0x1d5404(510)]()[_0x1d5404(511)](3)['test'](isValidCategoryName)[_0x1d5404(512)](_0x1d5404(513)) })[_0x1d5404(514)]();