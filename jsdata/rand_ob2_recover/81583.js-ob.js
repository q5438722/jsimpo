const _ = require('lodash');
module[_0x1aa78a(302)] = function (_0x817f0a) {
    const _0x59706a = _0x1aa78a, _0x5d0c99 = _0x817f0a[_0x59706a(303)];
    _0x817f0a[_0x59706a(303)] = _0x817f0a[_0x59706a(303)][_0x59706a(304)]({
        'sync': function _0x15e3fa() {
            const _0x38424c = _0x59706a, _0x2fbc23 = _0x5d0c99[_0x38424c(305)]['sync'][_0x38424c(306)](this, arguments), _0x3e8331 = _0x2fbc23[_0x38424c(307)], _0x55cb74 = _0x2fbc23[_0x38424c(308)], _0x1204f5 = this;
            return _0x2fbc23['update'] = function _0x51bd32(_0xe0e364) {
                const _0x51930d = _0x38424c;
                return _0xe0e364 = _0x1204f5[_0x51930d(309)](_[_0x51930d(310)](_0xe0e364)), _0x3e8331[_0x51930d(306)](this, [_0xe0e364]);
            }, _0x2fbc23[_0x38424c(308)] = function _0x41b304(_0x20ea79) {
                const _0x37ce0b = _0x38424c;
                return _0x20ea79 = _0x1204f5[_0x37ce0b(309)](_['cloneDeep'](_0x20ea79)), _0x55cb74[_0x37ce0b(306)](this, [_0x20ea79]);
            }, _0x2fbc23;
        },
        'formatOnWrite': function _0x399900(_0x4bcee7) {
            return _0x4bcee7;
        },
        'format': function _0x427c9a(_0x28fc98) {
            const _0x54a832 = _0x59706a;
            return this[_0x54a832(311)](_0x28fc98);
        },
        'parse': function _0x272e49(_0x322c96) {
            const _0x40ef3f = _0x59706a;
            return this[_0x40ef3f(312)](this[_0x40ef3f(313)](_0x322c96));
        },
        'toJSON': function _0x588f90(_0x3f46de) {
            const _0xbd09a4 = _0x59706a, _0x5125f1 = _0x817f0a['Model'][_0xbd09a4(314)](_0x3f46de, _0xbd09a4(315));
            _0x5125f1[_0xbd09a4(316)] = !![], _['each'](this[_0xbd09a4(317)], (_0x4bbd91, _0x44231c) => {
                const _0x1e0149 = _0xbd09a4;
                _['isEmpty'](_0x4bbd91) && delete this[_0x1e0149(317)][_0x44231c];
            });
            if (_0x5125f1[_0xbd09a4(318)]) {
                const _0x17e181 = _['cloneDeep'](this);
                return _0x17e181[_0xbd09a4(319)] = this['_previousAttributes'], this[_0xbd09a4(320)] && this[_0xbd09a4(320)]['forEach'](_0x44e8f9 => {
                    const _0x1bef8b = _0xbd09a4;
                    this[_0x1bef8b(321)] && Object[_0x1bef8b(305)][_0x1bef8b(322)][_0x1bef8b(323)](this[_0x1bef8b(321)], _0x44e8f9) && (_0x17e181['related'](_0x44e8f9)['models'] = this[_0x1bef8b(321)][_0x44e8f9][_0x1bef8b(324)]);
                }), _0x5d0c99[_0xbd09a4(305)][_0xbd09a4(315)][_0xbd09a4(323)](_0x17e181, _0x5125f1);
            }
            return _0x5d0c99[_0xbd09a4(305)][_0xbd09a4(315)][_0xbd09a4(323)](this, _0x5125f1);
        }
    });
};