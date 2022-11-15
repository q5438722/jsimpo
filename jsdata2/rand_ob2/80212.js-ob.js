const _0x128a = [
    '1110865Ufzvma',
    '17676BUoMKH',
    '100kpzyOO',
    '$router',
    'navigateTo',
    'previewImage:fail',
    '1707PCmksv',
    '93PEtQSH',
    '516385BnaRwt',
    '273wBzjQe',
    '379VlKRqz',
    '636739NUJwRM',
    '2orMAmv',
    '13141nGosai',
    '31adhGgI',
    '1HuLpMn'
];
function _0x2dc5(_0x3952e0, _0x5a5a42) {
    return _0x2dc5 = function (_0x128afc, _0x2dc53d) {
        _0x128afc = _0x128afc - 0xb1;
        let _0x9a8c70 = _0x128a[_0x128afc];
        return _0x9a8c70;
    }, _0x2dc5(_0x3952e0, _0x5a5a42);
}
(function (_0x180b5c, _0x13000d) {
    const _0x9a3ef1 = _0x2dc5;
    while (!![]) {
        try {
            const _0x2c2798 = -parseInt(_0x9a3ef1(0xb1)) * -parseInt(_0x9a3ef1(0xb2)) + -parseInt(_0x9a3ef1(0xb3)) + -parseInt(_0x9a3ef1(0xb4)) * -parseInt(_0x9a3ef1(0xb5)) + parseInt(_0x9a3ef1(0xb6)) * parseInt(_0x9a3ef1(0xb7)) + -parseInt(_0x9a3ef1(0xb8)) * -parseInt(_0x9a3ef1(0xb9)) + parseInt(_0x9a3ef1(0xba)) * parseInt(_0x9a3ef1(0xbb)) + -parseInt(_0x9a3ef1(0xbc)) * parseInt(_0x9a3ef1(0xbd));
            if (_0x2c2798 === _0x13000d)
                break;
            else
                _0x180b5c['push'](_0x180b5c['shift']());
        } catch (_0x1d8236) {
            _0x180b5c['push'](_0x180b5c['shift']());
        }
    }
}(_0x128a, 0xbbf9b));
export function previewImage({
    urls: _0x4fb26a,
    current: _0x2dd172
}, _0x565e2f) {
    const _0x1a4ea9 = _0x2dc5, {invokeCallbackHandler: _0x199a85} = UniServiceJSBridge;
    getApp()[_0x1a4ea9(0xbe)]['push']({
        'type': _0x1a4ea9(0xbf),
        'path': '/preview-image',
        'params': {
            'urls': _0x4fb26a,
            'current': _0x2dd172
        }
    }, function () {
        _0x199a85(_0x565e2f, { 'errMsg': 'previewImage:ok' });
    }, function () {
        const _0x11ceb9 = _0x1a4ea9;
        _0x199a85(_0x565e2f, { 'errMsg': _0x11ceb9(0xc0) });
    });
}
