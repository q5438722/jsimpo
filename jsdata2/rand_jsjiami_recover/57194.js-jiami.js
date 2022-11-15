function blob_url_reload_test(_0x475a6a, _0x537ce1) {
    const _0x5b270c = 'test_frame_OK';
    const _0x83b136 = _0x1cdd05['XGrTC']('<!doctype html>\n<meta charset="utf-8">\n' + '<script>window.test_result = "', _0x5b270c) + '";</script>';
    const _0x4b439e = new Blob([_0x83b136], { 'type': 'text/html' });
    const _0xa4350c = URL['createObjectURL'](_0x4b439e);
    const _0x1af6c7 = document['createElement']('iframe');
    _0x1af6c7['setAttribute']('src', _0xa4350c);
    _0x1af6c7['setAttribute']('style', 'display:none;');
    document['body']['appendChild'](_0x1af6c7);
    _0x1af6c7['onload'] = _0x475a6a['step_func'](() => {
        if ('zLvIe' !== 'zLvIe') {
            assert_equals(_0x1af6c7['contentWindow']['test_result'], _0x5b270c);
        } else {
            var _0x54f2e9 = '2|4|1|3|0'['split']('|'), _0x446721 = 0;
            while (!![]) {
                switch (_0x54f2e9[_0x446721++]) {
                case '0':
                    _0x475a6a['step_timeout'](() => {
                        _0x1af6c7['contentWindow']['location']['reload']();
                    }, 250);
                    continue;
                case '1':
                    _0x1af6c7['contentWindow']['test_result'] = null;
                    continue;
                case '2':
                    if (_0x537ce1)
                        URL['revokeObjectURL'](_0xa4350c);
                    continue;
                case '3':
                    _0x1af6c7['onload'] = _0x475a6a['step_func_done'](() => {
                        assert_equals(_0x1af6c7['contentWindow']['test_result'], _0x5b270c);
                    });
                    continue;
                case '4':
                    assert_equals(_0x1af6c7['contentWindow']['test_result'], _0x5b270c);
                    continue;
                }
                break;
            }
        }
    });
}
async_test(_0x36f9e3 => {
    blob_url_reload_test(_0x36f9e3, ![]);
}, 'Reloading a blob URL succeeds.');
async_test(_0x38a803 => {
    blob_url_reload_test(_0x38a803, !![]);
}, 'Reloading a blob URL succeeds even if the URL was revoked.');