const _0x2370 = [
    'iframe',
    'setAttribute',
    'src',
    'display:none;',
    'body',
    'appendChild',
    'onload',
    'contentWindow',
    'test_result',
    'step_func_done',
    'step_timeout',
    'location',
    'Reloading\x20a\x20blob\x20URL\x20succeeds.',
    'Reloading\x20a\x20blob\x20URL\x20succeeds\x20even\x20if\x20the\x20URL\x20was\x20revoked.',
    '551859aXVyei',
    '859oBOMfO',
    '638TdGDFh',
    '1351157HdnQuh',
    '499388qabnJH',
    '28817ZIjvnE',
    '11xXFmXn',
    '90449EVALFa',
    '79645bCMEfN',
    'test_frame_OK',
    '<!doctype\x20html>\x0a<meta\x20charset=\x22utf-8\x22>\x0a',
    '\x22;</script>',
    'text/html',
    'createObjectURL',
    'createElement'
];
const _0x33c45e = _0x3bd2;
(function (_0x321332, _0x20f417) {
    const _0x4fc7df = _0x3bd2;
    while (!![]) {
        try {
            const _0x427c37 = parseInt(_0x4fc7df(0xa5)) + parseInt(_0x4fc7df(0xa6)) * -parseInt(_0x4fc7df(0xa7)) + parseInt(_0x4fc7df(0xa8)) + parseInt(_0x4fc7df(0xa9)) + -parseInt(_0x4fc7df(0xaa)) + -parseInt(_0x4fc7df(0xab)) * parseInt(_0x4fc7df(0xac)) + -parseInt(_0x4fc7df(0xad));
            if (_0x427c37 === _0x20f417)
                break;
            else
                _0x321332['push'](_0x321332['shift']());
        } catch (_0x4351ad) {
            _0x321332['push'](_0x321332['shift']());
        }
    }
}(_0x2370, 0xb7571));
function _0x3bd2(_0x151ed0, _0x1b3e83) {
    return _0x3bd2 = function (_0x2370f8, _0x3bd264) {
        _0x2370f8 = _0x2370f8 - 0xa5;
        let _0xebb956 = _0x2370[_0x2370f8];
        return _0xebb956;
    }, _0x3bd2(_0x151ed0, _0x1b3e83);
}
function blob_url_reload_test(_0x2e4151, _0x347429) {
    const _0x4fa6ff = _0x3bd2, _0x36da18 = _0x4fa6ff(0xae), _0x34d185 = _0x4fa6ff(0xaf) + '<script>window.test_result\x20=\x20\x22' + _0x36da18 + _0x4fa6ff(0xb0), _0x103709 = new Blob([_0x34d185], { 'type': _0x4fa6ff(0xb1) }), _0x3a497c = URL[_0x4fa6ff(0xb2)](_0x103709), _0x33c373 = document[_0x4fa6ff(0xb3)](_0x4fa6ff(0xb4));
    _0x33c373[_0x4fa6ff(0xb5)](_0x4fa6ff(0xb6), _0x3a497c), _0x33c373[_0x4fa6ff(0xb5)]('style', _0x4fa6ff(0xb7)), document[_0x4fa6ff(0xb8)][_0x4fa6ff(0xb9)](_0x33c373), _0x33c373[_0x4fa6ff(0xba)] = _0x2e4151['step_func'](() => {
        const _0x27f7b3 = _0x4fa6ff;
        if (_0x347429)
            URL['revokeObjectURL'](_0x3a497c);
        assert_equals(_0x33c373[_0x27f7b3(0xbb)][_0x27f7b3(0xbc)], _0x36da18), _0x33c373[_0x27f7b3(0xbb)][_0x27f7b3(0xbc)] = null, _0x33c373[_0x27f7b3(0xba)] = _0x2e4151[_0x27f7b3(0xbd)](() => {
            const _0x4d5b50 = _0x27f7b3;
            assert_equals(_0x33c373[_0x4d5b50(0xbb)][_0x4d5b50(0xbc)], _0x36da18);
        }), _0x2e4151[_0x27f7b3(0xbe)](() => {
            const _0x2fcbcd = _0x27f7b3;
            _0x33c373[_0x2fcbcd(0xbb)][_0x2fcbcd(0xbf)]['reload']();
        }, 0xfa);
    });
}
async_test(_0x20f1c5 => {
    blob_url_reload_test(_0x20f1c5, ![]);
}, _0x33c45e(0xc0)), async_test(_0x239db9 => {
    blob_url_reload_test(_0x239db9, !![]);
}, _0x33c45e(0xc1));
