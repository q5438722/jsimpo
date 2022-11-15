const _ = require(_0xbacaa(357));
function _0x3294(_0x51cbed, _0x7e050c) {
    return _0x3294 = function (_0x11acbe, _0x106de5) {
        _0x11acbe = _0x11acbe - (2 * 4935 + 6 * -886 + -4208);
        let _0xdfd1f0 = _0x5df0[_0x11acbe];
        return _0xdfd1f0;
    }, _0x3294(_0x51cbed, _0x7e050c);
}
module[_0xbacaa(358)] = function (_0x1d61ec) {
    const _0x3a88f9 = _0xbacaa, _0x593f36 = { 'dYtKU': _0x3a88f9(359) }, _0x3e7fc8 = _0x1d61ec[_0x3a88f9(360)];
    _0x1d61ec[_0x3a88f9(360)] = _0x1d61ec[_0x3a88f9(360)]['extend']({
        'sync': function _0x500985() {
            const _0x4e2bce = _0x3a88f9, _0x9d7ccc = _0x3e7fc8['prototype'][_0x4e2bce(361)]['apply'](this, arguments), _0x1aa12d = _0x9d7ccc['update'], _0x58d8d9 = _0x9d7ccc[_0x4e2bce(362)], _0x55d32c = this;
            return _0x9d7ccc[_0x4e2bce(363)] = function _0x3bc433(_0x36a47d) {
                const _0x5e12c3 = _0x4e2bce;
                return _0x36a47d = _0x55d32c[_0x5e12c3(364)](_[_0x5e12c3(365)](_0x36a47d)), _0x1aa12d['apply'](this, [_0x36a47d]);
            }, _0x9d7ccc[_0x4e2bce(362)] = function _0x163da3(_0x2e8cf7) {
                const _0x1849c4 = _0x4e2bce;
                return _0x2e8cf7 = _0x55d32c[_0x1849c4(364)](_[_0x1849c4(365)](_0x2e8cf7)), _0x58d8d9['apply'](this, [_0x2e8cf7]);
            }, _0x9d7ccc;
        },
        'formatOnWrite': function _0xa2e9bc(_0x49995b) {
            return _0x49995b;
        },
        'format': function _0x380b25(_0x21ae7e) {
            return this['fixDatesWhenSave'](_0x21ae7e);
        },
        'parse': function _0xb89a4c(_0xd0d759) {
            const _0x26d1ce = _0x3a88f9;
            return this['fixBools'](this[_0x26d1ce(366)](_0xd0d759));
        },
        'toJSON': function _0x3c6646(_0x2cc3be) {
            const _0x4c81e3 = _0x3a88f9, _0x33308c = _0x1d61ec[_0x4c81e3(360)]['filterOptions'](_0x2cc3be, _0x593f36[_0x4c81e3(367)]);
            _0x33308c['omitPivot'] = !![], _[_0x4c81e3(368)](this[_0x4c81e3(369)], (_0x5326a3, _0x33cf4e) => {
                const _0x3f4d85 = _0x4c81e3;
                _[_0x3f4d85(370)](_0x5326a3) && delete this['relations'][_0x33cf4e];
            });
            if (_0x33308c['previous']) {
                const _0x3ac035 = _['cloneDeep'](this);
                return _0x3ac035[_0x4c81e3(371)] = this['_previousAttributes'], this[_0x4c81e3(372)] && this[_0x4c81e3(372)][_0x4c81e3(373)](_0x2dd037 => {
                    const _0x51adf9 = _0x4c81e3;
                    this[_0x51adf9(374)] && Object['prototype'][_0x51adf9(375)][_0x51adf9(376)](this[_0x51adf9(374)], _0x2dd037) && (_0x3ac035[_0x51adf9(377)](_0x2dd037)['models'] = this[_0x51adf9(374)][_0x2dd037][_0x51adf9(378)]);
                }), _0x3e7fc8[_0x4c81e3(379)][_0x4c81e3(359)]['call'](_0x3ac035, _0x33308c);
            }
            return _0x3e7fc8[_0x4c81e3(379)]['toJSON'][_0x4c81e3(376)](this, _0x33308c);
        }
    });
};