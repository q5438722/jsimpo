const _0x1860 = [
    'OtDic',
    'createObjectURL',
    'createElement',
    'iframe',
    'setAttribute',
    'UVmru',
    'body',
    'appendChild',
    'test_result',
    'onload',
    'contentWindow',
    'step_timeout',
    'reload',
    'iCvUz',
    'Reloading\x20a\x20blob\x20URL\x20succeeds.',
    '1206891nbPGvJ',
    '121953UXJnwl',
    '1yTOqiU',
    '531237HdBfEK',
    '1233727YzhqcQ',
    '1197931UptEJz',
    '554784QVxRfg',
    '1111488MqFRAi',
    '<!doctype\x20html>\x0a<meta\x20charset=\x22utf-8\x22>\x0a',
    '\x22;</script>',
    'text/html',
    'src',
    'display:none;',
    'test_frame_OK',
    'fkDDM',
    'LnqjG',
    '<script>window.test_result\x20=\x20\x22',
    'tXKBb'
];
function _0x540f(_0x3206f6, _0x269fd1) {
    return _0x540f = function (_0x2992c0, _0x437f11) {
        _0x2992c0 = _0x2992c0 - (-0x451 + -0x1201 * -0x1 + -0xc94);
        let _0x250a42 = _0x1860[_0x2992c0];
        return _0x250a42;
    }, _0x540f(_0x3206f6, _0x269fd1);
}
const _0x1a4112 = _0x540f;
(function (_0x1734dc, _0x4da772) {
    const _0x220e07 = _0x540f;
    while (!![]) {
        try {
            const _0x39021e = parseInt(_0x220e07(0x11c)) + -parseInt(_0x220e07(0x11d)) + -parseInt(_0x220e07(0x11e)) * -parseInt(_0x220e07(0x11f)) + -parseInt(_0x220e07(0x120)) + -parseInt(_0x220e07(0x121)) + parseInt(_0x220e07(0x122)) + parseInt(_0x220e07(0x123));
            if (_0x39021e === _0x4da772)
                break;
            else
                _0x1734dc['push'](_0x1734dc['shift']());
        } catch (_0x3cc3bb) {
            _0x1734dc['push'](_0x1734dc['shift']());
        }
    }
}(_0x1860, 0x1de8e * -0x2 + 0x986f3 + 0x7318e));
function blob_url_reload_test(_0x118d42, _0x210300) {
    const _0x5d192f = _0x540f, _0x3cc605 = {
            'fkDDM': function (_0x774c35, _0x43a410) {
                return _0x774c35 + _0x43a410;
            },
            'LnqjG': _0x5d192f(0x124),
            'tXKBb': _0x5d192f(0x125),
            'OtDic': _0x5d192f(0x126),
            'tskfQ': _0x5d192f(0x127),
            'UVmru': _0x5d192f(0x128)
        }, _0x22876e = _0x5d192f(0x129), _0xd38186 = _0x3cc605['fkDDM'](_0x3cc605[_0x5d192f(0x12a)](_0x3cc605[_0x5d192f(0x12a)](_0x3cc605[_0x5d192f(0x12b)], _0x5d192f(0x12c)), _0x22876e), _0x3cc605[_0x5d192f(0x12d)]), _0x45137a = new Blob([_0xd38186], { 'type': _0x3cc605[_0x5d192f(0x12e)] }), _0x199b22 = URL[_0x5d192f(0x12f)](_0x45137a), _0x8f2bca = document[_0x5d192f(0x130)](_0x5d192f(0x131));
    _0x8f2bca[_0x5d192f(0x132)](_0x3cc605['tskfQ'], _0x199b22), _0x8f2bca[_0x5d192f(0x132)]('style', _0x3cc605[_0x5d192f(0x133)]), document[_0x5d192f(0x134)][_0x5d192f(0x135)](_0x8f2bca), _0x8f2bca['onload'] = _0x118d42['step_func'](() => {
        const _0x71126e = _0x5d192f;
        if (_0x210300)
            URL['revokeObjectURL'](_0x199b22);
        assert_equals(_0x8f2bca['contentWindow']['test_result'], _0x22876e), _0x8f2bca['contentWindow'][_0x71126e(0x136)] = null, _0x8f2bca[_0x71126e(0x137)] = _0x118d42['step_func_done'](() => {
            const _0x3fa190 = _0x71126e;
            assert_equals(_0x8f2bca[_0x3fa190(0x138)]['test_result'], _0x22876e);
        }), _0x118d42[_0x71126e(0x139)](() => {
            const _0x2d2d58 = _0x71126e;
            _0x8f2bca[_0x2d2d58(0x138)]['location'][_0x2d2d58(0x13a)]();
        }, 0x2395 + 0x40 * -0x81 + 0x1 * -0x25b);
    });
}
async_test(_0x2bb50a => {
    const _0x243aa6 = _0x540f, _0x703992 = {
            'iCvUz': function (_0x5f2226, _0x2dc24c, _0x49f5dc) {
                return _0x5f2226(_0x2dc24c, _0x49f5dc);
            }
        };
    _0x703992[_0x243aa6(0x13b)](blob_url_reload_test, _0x2bb50a, ![]);
}, _0x1a4112(0x13c)), async_test(_0xf19d8f => {
    blob_url_reload_test(_0xf19d8f, !![]);
}, 'Reloading\x20a\x20blob\x20URL\x20succeeds\x20even\x20if\x20the\x20URL\x20was\x20revoked.');
