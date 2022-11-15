const _0x5df0 = [
    'related',
    'models',
    'prototype',
    '16CAcTBG',
    '80863MuvypZ',
    '1529518sfsnQy',
    '1164044dGGQVm',
    '250109cfTzVK',
    '2DkIZhu',
    '433200OfpJqC',
    '436183poRsfT',
    '4OQEVoc',
    '37883eQVfwM',
    '19ZJcHMm',
    'lodash',
    'exports',
    'toJSON',
    'Model',
    'sync',
    'insert',
    'update',
    'formatOnWrite',
    'cloneDeep',
    'fixDatesWhenFetch',
    'dYtKU',
    'each',
    'relations',
    'isEmpty',
    'attributes',
    'relationships',
    'forEach',
    '_previousRelations',
    'hasOwnProperty',
    'call'
];
const _0xbacaa = _0x3294;
(function (_0x1dd1db, _0x4b1fec) {
    const _0x21d092 = _0x3294;
    while (!![]) {
        try {
            const _0xed07db = parseInt(_0x21d092(0x15a)) * parseInt(_0x21d092(0x15b)) + -parseInt(_0x21d092(0x15c)) + -parseInt(_0x21d092(0x15d)) + -parseInt(_0x21d092(0x15e)) * parseInt(_0x21d092(0x15f)) + parseInt(_0x21d092(0x160)) + parseInt(_0x21d092(0x161)) * parseInt(_0x21d092(0x162)) + parseInt(_0x21d092(0x163)) * parseInt(_0x21d092(0x164));
            if (_0xed07db === _0x4b1fec)
                break;
            else
                _0x1dd1db['push'](_0x1dd1db['shift']());
        } catch (_0x3c1132) {
            _0x1dd1db['push'](_0x1dd1db['shift']());
        }
    }
}(_0x5df0, -0x632b8 + 0xef1bc + -0x67a65 * -0x1));
const _ = require(_0xbacaa(0x165));
function _0x3294(_0x51cbed, _0x7e050c) {
    return _0x3294 = function (_0x11acbe, _0x106de5) {
        _0x11acbe = _0x11acbe - (0x2 * 0x1347 + 0x6 * -0x376 + -0x1070);
        let _0xdfd1f0 = _0x5df0[_0x11acbe];
        return _0xdfd1f0;
    }, _0x3294(_0x51cbed, _0x7e050c);
}
module[_0xbacaa(0x166)] = function (_0x1d61ec) {
    const _0x3a88f9 = _0xbacaa, _0x593f36 = { 'dYtKU': _0x3a88f9(0x167) }, _0x3e7fc8 = _0x1d61ec[_0x3a88f9(0x168)];
    _0x1d61ec[_0x3a88f9(0x168)] = _0x1d61ec[_0x3a88f9(0x168)]['extend']({
        'sync': function _0x500985() {
            const _0x4e2bce = _0x3a88f9, _0x9d7ccc = _0x3e7fc8['prototype'][_0x4e2bce(0x169)]['apply'](this, arguments), _0x1aa12d = _0x9d7ccc['update'], _0x58d8d9 = _0x9d7ccc[_0x4e2bce(0x16a)], _0x55d32c = this;
            return _0x9d7ccc[_0x4e2bce(0x16b)] = function _0x3bc433(_0x36a47d) {
                const _0x5e12c3 = _0x4e2bce;
                return _0x36a47d = _0x55d32c[_0x5e12c3(0x16c)](_[_0x5e12c3(0x16d)](_0x36a47d)), _0x1aa12d['apply'](this, [_0x36a47d]);
            }, _0x9d7ccc[_0x4e2bce(0x16a)] = function _0x163da3(_0x2e8cf7) {
                const _0x1849c4 = _0x4e2bce;
                return _0x2e8cf7 = _0x55d32c[_0x1849c4(0x16c)](_[_0x1849c4(0x16d)](_0x2e8cf7)), _0x58d8d9['apply'](this, [_0x2e8cf7]);
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
            return this['fixBools'](this[_0x26d1ce(0x16e)](_0xd0d759));
        },
        'toJSON': function _0x3c6646(_0x2cc3be) {
            const _0x4c81e3 = _0x3a88f9, _0x33308c = _0x1d61ec[_0x4c81e3(0x168)]['filterOptions'](_0x2cc3be, _0x593f36[_0x4c81e3(0x16f)]);
            _0x33308c['omitPivot'] = !![], _[_0x4c81e3(0x170)](this[_0x4c81e3(0x171)], (_0x5326a3, _0x33cf4e) => {
                const _0x3f4d85 = _0x4c81e3;
                _[_0x3f4d85(0x172)](_0x5326a3) && delete this['relations'][_0x33cf4e];
            });
            if (_0x33308c['previous']) {
                const _0x3ac035 = _['cloneDeep'](this);
                return _0x3ac035[_0x4c81e3(0x173)] = this['_previousAttributes'], this[_0x4c81e3(0x174)] && this[_0x4c81e3(0x174)][_0x4c81e3(0x175)](_0x2dd037 => {
                    const _0x51adf9 = _0x4c81e3;
                    this[_0x51adf9(0x176)] && Object['prototype'][_0x51adf9(0x177)][_0x51adf9(0x178)](this[_0x51adf9(0x176)], _0x2dd037) && (_0x3ac035[_0x51adf9(0x179)](_0x2dd037)['models'] = this[_0x51adf9(0x176)][_0x2dd037][_0x51adf9(0x17a)]);
                }), _0x3e7fc8[_0x4c81e3(0x17b)][_0x4c81e3(0x167)]['call'](_0x3ac035, _0x33308c);
            }
            return _0x3e7fc8[_0x4c81e3(0x17b)]['toJSON'][_0x4c81e3(0x178)](this, _0x33308c);
        }
    });
};
