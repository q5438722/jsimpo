const _0x2f51 = [
    '30615CCgjQT',
    '17xkLigz',
    '1160180JnxXwR',
    '$router',
    'push',
    'navigateTo',
    'previewImage:ok',
    '628862gCsANH',
    '810683aaytUP',
    '433928zkJmtn',
    '55126RBLApY',
    '16gYApuf',
    '826389LdKRGw'
];
(function (_0x421740, _0x121b40) {
    const _0x595fc6 = _0x1806;
    while (!![]) {
        try {
            const _0x5b9346 = parseInt(_0x595fc6(0x6c)) + -parseInt(_0x595fc6(0x6d)) + -parseInt(_0x595fc6(0x6e)) + parseInt(_0x595fc6(0x6f)) * parseInt(_0x595fc6(0x70)) + parseInt(_0x595fc6(0x71)) + parseInt(_0x595fc6(0x72)) * parseInt(_0x595fc6(0x73)) + -parseInt(_0x595fc6(0x74));
            if (_0x5b9346 === _0x121b40)
                break;
            else
                _0x421740['push'](_0x421740['shift']());
        } catch (_0x138611) {
            _0x421740['push'](_0x421740['shift']());
        }
    }
}(_0x2f51, 0x6e943));
function _0x1806(_0x13fc22, _0x45acf4) {
    return _0x1806 = function (_0x2f5153, _0x1806d1) {
        _0x2f5153 = _0x2f5153 - 0x6c;
        let _0x58e556 = _0x2f51[_0x2f5153];
        return _0x58e556;
    }, _0x1806(_0x13fc22, _0x45acf4);
}
export function previewImage({
    urls: _0x33de77,
    current: _0x33b394
}, _0x4932fd) {
    const _0x7425c0 = _0x1806, {invokeCallbackHandler: _0x3bc4b8} = UniServiceJSBridge;
    getApp()[_0x7425c0(0x75)][_0x7425c0(0x76)]({
        'type': _0x7425c0(0x77),
        'path': '/preview-image',
        'params': {
            'urls': _0x33de77,
            'current': _0x33b394
        }
    }, function () {
        const _0x495011 = _0x7425c0;
        _0x3bc4b8(_0x4932fd, { 'errMsg': _0x495011(0x78) });
    }, function () {
        _0x3bc4b8(_0x4932fd, { 'errMsg': 'previewImage:fail' });
    });
}
