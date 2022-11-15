export function previewImage({
    urls: _0x407cb3,
    current: _0x19b1c9
}, _0x56091f) {
    const {invokeCallbackHandler: _0x5a4e9a} = UniServiceJSBridge;
    getApp()['$router']['push']({
        'type': 'navigateTo',
        'path': '/preview-image',
        'params': {
            'urls': _0x407cb3,
            'current': _0x19b1c9
        }
    }, function () {
        _0x5a4e9a(_0x56091f, { 'errMsg': 'previewImage:ok' });
    }, function () {
        _0x5a4e9a(_0x56091f, { 'errMsg': 'previewImage:fail' });
    });
}
