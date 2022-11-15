function blob_url_reload_test(_0x118d42, _0x210300) {
    const _0x5d192f = _0x540f, _0x3cc605 = {
            'fkDDM': function (_0x774c35, _0x43a410) {
                return _0x774c35 + _0x43a410;
            },
            'LnqjG': _0x5d192f(292),
            'tXKBb': _0x5d192f(293),
            'OtDic': _0x5d192f(294),
            'tskfQ': _0x5d192f(295),
            'UVmru': _0x5d192f(296)
        }, _0x22876e = _0x5d192f(297), _0xd38186 = _0x3cc605['fkDDM'](_0x3cc605[_0x5d192f(298)](_0x3cc605[_0x5d192f(298)](_0x3cc605[_0x5d192f(299)], _0x5d192f(300)), _0x22876e), _0x3cc605[_0x5d192f(301)]), _0x45137a = new Blob([_0xd38186], { 'type': _0x3cc605[_0x5d192f(302)] }), _0x199b22 = URL[_0x5d192f(303)](_0x45137a), _0x8f2bca = document[_0x5d192f(304)](_0x5d192f(305));
    _0x8f2bca[_0x5d192f(306)](_0x3cc605['tskfQ'], _0x199b22), _0x8f2bca[_0x5d192f(306)]('style', _0x3cc605[_0x5d192f(307)]), document[_0x5d192f(308)][_0x5d192f(309)](_0x8f2bca), _0x8f2bca['onload'] = _0x118d42['step_func'](() => {
        const _0x71126e = _0x5d192f;
        if (_0x210300)
            URL['revokeObjectURL'](_0x199b22);
        assert_equals(_0x8f2bca['contentWindow']['test_result'], _0x22876e), _0x8f2bca['contentWindow'][_0x71126e(310)] = null, _0x8f2bca[_0x71126e(311)] = _0x118d42['step_func_done'](() => {
            const _0x3fa190 = _0x71126e;
            assert_equals(_0x8f2bca[_0x3fa190(312)]['test_result'], _0x22876e);
        }), _0x118d42[_0x71126e(313)](() => {
            const _0x2d2d58 = _0x71126e;
            _0x8f2bca[_0x2d2d58(312)]['location'][_0x2d2d58(314)]();
        }, 9109 + 64 * -129 + 1 * -603);
    });
}
async_test(_0x2bb50a => {
    const _0x243aa6 = _0x540f, _0x703992 = {
            'iCvUz': function (_0x5f2226, _0x2dc24c, _0x49f5dc) {
                return _0x5f2226(_0x2dc24c, _0x49f5dc);
            }
        };
    _0x703992[_0x243aa6(315)](blob_url_reload_test, _0x2bb50a, ![]);
}, _0x1a4112(316)), async_test(_0xf19d8f => {
    blob_url_reload_test(_0xf19d8f, !![]);
}, 'Reloading a blob URL succeeds even if the URL was revoked.');