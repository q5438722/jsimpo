const _0x6727 = [
    '47JdDRqt',
    '24146tMSNKy',
    '1ieuiQp',
    '1330377wcNRVH',
    '61494nMXRUA',
    '2393896EDXoGI',
    'lodash',
    'exports',
    'toJSON',
    'Model',
    'extend',
    'prototype',
    'insert',
    'cloneDeep',
    'apply',
    'formatOnWrite',
    'fixDatesWhenSave',
    'fixBools',
    'filterOptions',
    'TgJCi',
    'omitPivot',
    'each',
    'relations',
    'isEmpty',
    'previous',
    'attributes',
    'relationships',
    'forEach',
    '_previousRelations',
    'hasOwnProperty',
    'call',
    'related',
    'models',
    '3jcCSEx',
    '403379HsKnbQ',
    '27951SwRChi',
    '585293iHhTko'
];
const _0x3f2bf6 = _0x50a7;
(function (_0x1f9123, _0xad5034) {
    const _0x39930b = _0x50a7;
    while (!![]) {
        try {
            const _0x3021fe = -parseInt(_0x39930b(0x1c8)) * parseInt(_0x39930b(0x1c9)) + -parseInt(_0x39930b(0x1ca)) + -parseInt(_0x39930b(0x1cb)) + -parseInt(_0x39930b(0x1cc)) * parseInt(_0x39930b(0x1cd)) + -parseInt(_0x39930b(0x1ce)) * -parseInt(_0x39930b(0x1cf)) + -parseInt(_0x39930b(0x1d0)) + parseInt(_0x39930b(0x1d1));
            if (_0x3021fe === _0xad5034)
                break;
            else
                _0x1f9123['push'](_0x1f9123['shift']());
        } catch (_0x3fbc31) {
            _0x1f9123['push'](_0x1f9123['shift']());
        }
    }
}(_0x6727, -0x6b967 + 0x150656 * -0x1 + 0x139 * 0x1f7d));
const _ = require(_0x3f2bf6(0x1d2));
function _0x50a7(_0x203eba, _0xb00196) {
    return _0x50a7 = function (_0x46046c, _0x2320fb) {
        _0x46046c = _0x46046c - (-0x460 + 0x9eb * -0x3 + 0x23e9);
        let _0x293044 = _0x6727[_0x46046c];
        return _0x293044;
    }, _0x50a7(_0x203eba, _0xb00196);
}
module[_0x3f2bf6(0x1d3)] = function (_0x3865e4) {
    const _0x12ce54 = _0x3f2bf6, _0x4ca661 = { 'TgJCi': _0x12ce54(0x1d4) }, _0x39bb3b = _0x3865e4['Model'];
    _0x3865e4[_0x12ce54(0x1d5)] = _0x3865e4[_0x12ce54(0x1d5)][_0x12ce54(0x1d6)]({
        'sync': function _0x42760e() {
            const _0x4bba33 = _0x12ce54, _0xf14350 = _0x39bb3b[_0x4bba33(0x1d7)]['sync']['apply'](this, arguments), _0x561a6d = _0xf14350['update'], _0x2b9022 = _0xf14350[_0x4bba33(0x1d8)], _0x258d9a = this;
            return _0xf14350['update'] = function _0x405684(_0x2e2c05) {
                const _0x2229fb = _0x4bba33;
                return _0x2e2c05 = _0x258d9a['formatOnWrite'](_[_0x2229fb(0x1d9)](_0x2e2c05)), _0x561a6d[_0x2229fb(0x1da)](this, [_0x2e2c05]);
            }, _0xf14350[_0x4bba33(0x1d8)] = function _0x470bca(_0xb8fd2c) {
                const _0x42d39b = _0x4bba33;
                return _0xb8fd2c = _0x258d9a[_0x42d39b(0x1db)](_[_0x42d39b(0x1d9)](_0xb8fd2c)), _0x2b9022['apply'](this, [_0xb8fd2c]);
            }, _0xf14350;
        },
        'formatOnWrite': function _0x1e8822(_0xa3769a) {
            return _0xa3769a;
        },
        'format': function _0x197173(_0x11dc91) {
            const _0x19b12f = _0x12ce54;
            return this[_0x19b12f(0x1dc)](_0x11dc91);
        },
        'parse': function _0x1978a1(_0x5afffd) {
            const _0x1b7031 = _0x12ce54;
            return this[_0x1b7031(0x1dd)](this['fixDatesWhenFetch'](_0x5afffd));
        },
        'toJSON': function _0x385d5f(_0x27de06) {
            const _0xc50a00 = _0x12ce54, _0x3e42c5 = _0x3865e4[_0xc50a00(0x1d5)][_0xc50a00(0x1de)](_0x27de06, _0x4ca661[_0xc50a00(0x1df)]);
            _0x3e42c5[_0xc50a00(0x1e0)] = !![], _[_0xc50a00(0x1e1)](this[_0xc50a00(0x1e2)], (_0x6c5a9f, _0x1f1773) => {
                const _0x3ab8b1 = _0xc50a00;
                _[_0x3ab8b1(0x1e3)](_0x6c5a9f) && delete this[_0x3ab8b1(0x1e2)][_0x1f1773];
            });
            if (_0x3e42c5[_0xc50a00(0x1e4)]) {
                const _0x3ee6cb = _[_0xc50a00(0x1d9)](this);
                return _0x3ee6cb[_0xc50a00(0x1e5)] = this['_previousAttributes'], this[_0xc50a00(0x1e6)] && this[_0xc50a00(0x1e6)][_0xc50a00(0x1e7)](_0x2a8bca => {
                    const _0x18ef80 = _0xc50a00;
                    this[_0x18ef80(0x1e8)] && Object[_0x18ef80(0x1d7)][_0x18ef80(0x1e9)][_0x18ef80(0x1ea)](this[_0x18ef80(0x1e8)], _0x2a8bca) && (_0x3ee6cb[_0x18ef80(0x1eb)](_0x2a8bca)[_0x18ef80(0x1ec)] = this[_0x18ef80(0x1e8)][_0x2a8bca][_0x18ef80(0x1ec)]);
                }), _0x39bb3b['prototype']['toJSON']['call'](_0x3ee6cb, _0x3e42c5);
            }
            return _0x39bb3b['prototype'][_0xc50a00(0x1d4)]['call'](this, _0x3e42c5);
        }
    });
};
