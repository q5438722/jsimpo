const _ = require(_0x3f2bf6(466));
function _0x50a7(_0x203eba, _0xb00196) {
    return _0x50a7 = function (_0x46046c, _0x2320fb) {
        _0x46046c = _0x46046c - (-1120 + 2539 * -3 + 9193);
        let _0x293044 = _0x6727[_0x46046c];
        return _0x293044;
    }, _0x50a7(_0x203eba, _0xb00196);
}
module[_0x3f2bf6(467)] = function (_0x3865e4) {
    const _0x12ce54 = _0x3f2bf6, _0x4ca661 = { 'TgJCi': _0x12ce54(468) }, _0x39bb3b = _0x3865e4['Model'];
    _0x3865e4[_0x12ce54(469)] = _0x3865e4[_0x12ce54(469)][_0x12ce54(470)]({
        'sync': function _0x42760e() {
            const _0x4bba33 = _0x12ce54, _0xf14350 = _0x39bb3b[_0x4bba33(471)]['sync']['apply'](this, arguments), _0x561a6d = _0xf14350['update'], _0x2b9022 = _0xf14350[_0x4bba33(472)], _0x258d9a = this;
            return _0xf14350['update'] = function _0x405684(_0x2e2c05) {
                const _0x2229fb = _0x4bba33;
                return _0x2e2c05 = _0x258d9a['formatOnWrite'](_[_0x2229fb(473)](_0x2e2c05)), _0x561a6d[_0x2229fb(474)](this, [_0x2e2c05]);
            }, _0xf14350[_0x4bba33(472)] = function _0x470bca(_0xb8fd2c) {
                const _0x42d39b = _0x4bba33;
                return _0xb8fd2c = _0x258d9a[_0x42d39b(475)](_[_0x42d39b(473)](_0xb8fd2c)), _0x2b9022['apply'](this, [_0xb8fd2c]);
            }, _0xf14350;
        },
        'formatOnWrite': function _0x1e8822(_0xa3769a) {
            return _0xa3769a;
        },
        'format': function _0x197173(_0x11dc91) {
            const _0x19b12f = _0x12ce54;
            return this[_0x19b12f(476)](_0x11dc91);
        },
        'parse': function _0x1978a1(_0x5afffd) {
            const _0x1b7031 = _0x12ce54;
            return this[_0x1b7031(477)](this['fixDatesWhenFetch'](_0x5afffd));
        },
        'toJSON': function _0x385d5f(_0x27de06) {
            const _0xc50a00 = _0x12ce54, _0x3e42c5 = _0x3865e4[_0xc50a00(469)][_0xc50a00(478)](_0x27de06, _0x4ca661[_0xc50a00(479)]);
            _0x3e42c5[_0xc50a00(480)] = !![], _[_0xc50a00(481)](this[_0xc50a00(482)], (_0x6c5a9f, _0x1f1773) => {
                const _0x3ab8b1 = _0xc50a00;
                _[_0x3ab8b1(483)](_0x6c5a9f) && delete this[_0x3ab8b1(482)][_0x1f1773];
            });
            if (_0x3e42c5[_0xc50a00(484)]) {
                const _0x3ee6cb = _[_0xc50a00(473)](this);
                return _0x3ee6cb[_0xc50a00(485)] = this['_previousAttributes'], this[_0xc50a00(486)] && this[_0xc50a00(486)][_0xc50a00(487)](_0x2a8bca => {
                    const _0x18ef80 = _0xc50a00;
                    this[_0x18ef80(488)] && Object[_0x18ef80(471)][_0x18ef80(489)][_0x18ef80(490)](this[_0x18ef80(488)], _0x2a8bca) && (_0x3ee6cb[_0x18ef80(491)](_0x2a8bca)[_0x18ef80(492)] = this[_0x18ef80(488)][_0x2a8bca][_0x18ef80(492)]);
                }), _0x39bb3b['prototype']['toJSON']['call'](_0x3ee6cb, _0x3e42c5);
            }
            return _0x39bb3b['prototype'][_0xc50a00(468)]['call'](this, _0x3e42c5);
        }
    });
};