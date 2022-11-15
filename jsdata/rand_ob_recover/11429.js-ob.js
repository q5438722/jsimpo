const yup = require(_0x3692f2(231)), {formatYupErrors} = require(_0x3692f2(232)), {isValidCategoryName} = require(_0x3692f2(233));
module['exports'] = _0x56675f => {
    const _0x5e7f05 = _0x3692f2;
    return componentCategorySchema['validate'](_0x56675f, {
        'strict': !![],
        'abortEarly': ![]
    })[_0x5e7f05(234)](_0x78b883 => Promise[_0x5e7f05(235)](formatYupErrors(_0x78b883)));
};
function _0x3548(_0xc42ba0, _0x50c7ad) {
    return _0x3548 = function (_0x452a1f, _0x3d4fd8) {
        _0x452a1f = _0x452a1f - (-4982 + -1 * 7253 + 12455);
        let _0x4ff844 = _0x6580[_0x452a1f];
        return _0x4ff844;
    }, _0x3548(_0xc42ba0, _0x50c7ad);
}
const componentCategorySchema = yup[_0x3692f2(236)]({ 'name': yup[_0x3692f2(237)]()[_0x3692f2(238)](7001 * 1 + -11 * 527 + -1 * 1201)[_0x3692f2(239)](isValidCategoryName)[_0x3692f2(240)](_0x3692f2(241)) })[_0x3692f2(242)]();