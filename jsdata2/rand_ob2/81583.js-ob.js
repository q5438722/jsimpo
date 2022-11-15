const _0x420c = [
    'previous',
    'attributes',
    '_previousAttributes',
    'forEach',
    '_previousRelations',
    'call',
    '7JFloHM',
    '145037WMREGS',
    '2POBljY',
    '456481vaSHpu',
    '1793BbYJSl',
    '269cfnPIE',
    '795550QkVVau',
    '646205HdHUXj',
    '6192YDJtQh',
    '93TZAARg',
    '1555491iJYagL',
    'lodash',
    'exports',
    'Model',
    'extend',
    'prototype',
    'apply',
    'update',
    'formatOnWrite',
    'cloneDeep',
    'insert',
    'fixDatesWhenSave',
    'toJSON',
    'omitPivot',
    'each',
    'relations'
];
const _0x377944 = _0x5b2e;
(function (_0x441fae, _0x4edadc) {
    const _0x3598f2 = _0x5b2e;
    while (!![]) {
        try {
            const _0xbf14e5 = parseInt(_0x3598f2(0x6f)) * -parseInt(_0x3598f2(0x70)) + -parseInt(_0x3598f2(0x71)) * -parseInt(_0x3598f2(0x72)) + parseInt(_0x3598f2(0x73)) * -parseInt(_0x3598f2(0x74)) + parseInt(_0x3598f2(0x75)) + -parseInt(_0x3598f2(0x76)) + -parseInt(_0x3598f2(0x77)) * parseInt(_0x3598f2(0x78)) + parseInt(_0x3598f2(0x79));
            if (_0xbf14e5 === _0x4edadc)
                break;
            else
                _0x441fae['push'](_0x441fae['shift']());
        } catch (_0x167c90) {
            _0x441fae['push'](_0x441fae['shift']());
        }
    }
}(_0x420c, 0x84e6e));
function _0x5b2e(_0x35b400, _0x40a143) {
    return _0x5b2e = function (_0x420c3b, _0x5b2e4d) {
        _0x420c3b = _0x420c3b - 0x6f;
        let _0xedff11 = _0x420c[_0x420c3b];
        return _0xedff11;
    }, _0x5b2e(_0x35b400, _0x40a143);
}
const _ = require(_0x377944(0x7a));
module[_0x377944(0x7b)] = function (_0x1b0197) {
    const _0x7a5bce = _0x377944, _0x483a62 = _0x1b0197[_0x7a5bce(0x7c)];
    _0x1b0197[_0x7a5bce(0x7c)] = _0x1b0197[_0x7a5bce(0x7c)][_0x7a5bce(0x7d)]({
        'sync': function _0x2fa2bf() {
            const _0x59025c = _0x7a5bce, _0x4c5034 = _0x483a62[_0x59025c(0x7e)]['sync'][_0x59025c(0x7f)](this, arguments), _0x274d24 = _0x4c5034['update'], _0x3c6263 = _0x4c5034['insert'], _0x162d8b = this;
            return _0x4c5034[_0x59025c(0x80)] = function _0x1f5449(_0x46883b) {
                const _0x4a5146 = _0x59025c;
                return _0x46883b = _0x162d8b[_0x4a5146(0x81)](_[_0x4a5146(0x82)](_0x46883b)), _0x274d24['apply'](this, [_0x46883b]);
            }, _0x4c5034[_0x59025c(0x83)] = function _0x239352(_0x28137e) {
                const _0xd27f08 = _0x59025c;
                return _0x28137e = _0x162d8b[_0xd27f08(0x81)](_['cloneDeep'](_0x28137e)), _0x3c6263[_0xd27f08(0x7f)](this, [_0x28137e]);
            }, _0x4c5034;
        },
        'formatOnWrite': function _0xff20e8(_0x2e1cb1) {
            return _0x2e1cb1;
        },
        'format': function _0x904988(_0x39bb6b) {
            const _0x1ce425 = _0x7a5bce;
            return this[_0x1ce425(0x84)](_0x39bb6b);
        },
        'parse': function _0x54c0c5(_0x2b7daf) {
            return this['fixBools'](this['fixDatesWhenFetch'](_0x2b7daf));
        },
        'toJSON': function _0x56e4bb(_0x422220) {
            const _0x565d0d = _0x7a5bce, _0x565718 = _0x1b0197[_0x565d0d(0x7c)]['filterOptions'](_0x422220, _0x565d0d(0x85));
            _0x565718[_0x565d0d(0x86)] = !![], _[_0x565d0d(0x87)](this['relations'], (_0x4d8ccd, _0x411df8) => {
                const _0x1bb782 = _0x565d0d;
                _['isEmpty'](_0x4d8ccd) && delete this[_0x1bb782(0x88)][_0x411df8];
            });
            if (_0x565718[_0x565d0d(0x89)]) {
                const _0x762eea = _['cloneDeep'](this);
                return _0x762eea[_0x565d0d(0x8a)] = this[_0x565d0d(0x8b)], this['relationships'] && this['relationships'][_0x565d0d(0x8c)](_0x195da5 => {
                    const _0x36a0ce = _0x565d0d;
                    this[_0x36a0ce(0x8d)] && Object['prototype']['hasOwnProperty'][_0x36a0ce(0x8e)](this[_0x36a0ce(0x8d)], _0x195da5) && (_0x762eea['related'](_0x195da5)['models'] = this[_0x36a0ce(0x8d)][_0x195da5]['models']);
                }), _0x483a62['prototype']['toJSON']['call'](_0x762eea, _0x565718);
            }
            return _0x483a62[_0x565d0d(0x7e)][_0x565d0d(0x85)][_0x565d0d(0x8e)](this, _0x565718);
        }
    });
};
