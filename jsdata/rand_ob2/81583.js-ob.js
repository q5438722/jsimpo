const _0x3aec = [
    '588920KcTUcX',
    '1103MHPZcZ',
    '491blRqHc',
    '534431kqjHhD',
    '933021nwyALw',
    '12ktCtot',
    '2878DVJSTS',
    '36289DKLLVl',
    '2zYlQLH',
    'exports',
    'Model',
    'extend',
    'prototype',
    'apply',
    'update',
    'insert',
    'formatOnWrite',
    'cloneDeep',
    'fixDatesWhenSave',
    'fixBools',
    'fixDatesWhenFetch',
    'filterOptions',
    'toJSON',
    'omitPivot',
    'relations',
    'previous',
    'attributes',
    'relationships',
    '_previousRelations',
    'hasOwnProperty',
    'call',
    'models',
    '392151SSzacR'
];
function _0x5442(_0x227eb7, _0x118e6d) {
    return _0x5442 = function (_0x3aece5, _0x5442d0) {
        _0x3aece5 = _0x3aece5 - 0x124;
        let _0x4bbd92 = _0x3aec[_0x3aece5];
        return _0x4bbd92;
    }, _0x5442(_0x227eb7, _0x118e6d);
}
const _0x1aa78a = _0x5442;
(function (_0x3118ea, _0x510190) {
    const _0x125b3f = _0x5442;
    while (!![]) {
        try {
            const _0x5c1c8d = parseInt(_0x125b3f(0x124)) + -parseInt(_0x125b3f(0x125)) + parseInt(_0x125b3f(0x126)) * parseInt(_0x125b3f(0x127)) + -parseInt(_0x125b3f(0x128)) + parseInt(_0x125b3f(0x129)) + -parseInt(_0x125b3f(0x12a)) * parseInt(_0x125b3f(0x12b)) + -parseInt(_0x125b3f(0x12c)) * parseInt(_0x125b3f(0x12d));
            if (_0x5c1c8d === _0x510190)
                break;
            else
                _0x3118ea['push'](_0x3118ea['shift']());
        } catch (_0x27c515) {
            _0x3118ea['push'](_0x3118ea['shift']());
        }
    }
}(_0x3aec, 0x9b578));
const _ = require('lodash');
module[_0x1aa78a(0x12e)] = function (_0x817f0a) {
    const _0x59706a = _0x1aa78a, _0x5d0c99 = _0x817f0a[_0x59706a(0x12f)];
    _0x817f0a[_0x59706a(0x12f)] = _0x817f0a[_0x59706a(0x12f)][_0x59706a(0x130)]({
        'sync': function _0x15e3fa() {
            const _0x38424c = _0x59706a, _0x2fbc23 = _0x5d0c99[_0x38424c(0x131)]['sync'][_0x38424c(0x132)](this, arguments), _0x3e8331 = _0x2fbc23[_0x38424c(0x133)], _0x55cb74 = _0x2fbc23[_0x38424c(0x134)], _0x1204f5 = this;
            return _0x2fbc23['update'] = function _0x51bd32(_0xe0e364) {
                const _0x51930d = _0x38424c;
                return _0xe0e364 = _0x1204f5[_0x51930d(0x135)](_[_0x51930d(0x136)](_0xe0e364)), _0x3e8331[_0x51930d(0x132)](this, [_0xe0e364]);
            }, _0x2fbc23[_0x38424c(0x134)] = function _0x41b304(_0x20ea79) {
                const _0x37ce0b = _0x38424c;
                return _0x20ea79 = _0x1204f5[_0x37ce0b(0x135)](_['cloneDeep'](_0x20ea79)), _0x55cb74[_0x37ce0b(0x132)](this, [_0x20ea79]);
            }, _0x2fbc23;
        },
        'formatOnWrite': function _0x399900(_0x4bcee7) {
            return _0x4bcee7;
        },
        'format': function _0x427c9a(_0x28fc98) {
            const _0x54a832 = _0x59706a;
            return this[_0x54a832(0x137)](_0x28fc98);
        },
        'parse': function _0x272e49(_0x322c96) {
            const _0x40ef3f = _0x59706a;
            return this[_0x40ef3f(0x138)](this[_0x40ef3f(0x139)](_0x322c96));
        },
        'toJSON': function _0x588f90(_0x3f46de) {
            const _0xbd09a4 = _0x59706a, _0x5125f1 = _0x817f0a['Model'][_0xbd09a4(0x13a)](_0x3f46de, _0xbd09a4(0x13b));
            _0x5125f1[_0xbd09a4(0x13c)] = !![], _['each'](this[_0xbd09a4(0x13d)], (_0x4bbd91, _0x44231c) => {
                const _0x1e0149 = _0xbd09a4;
                _['isEmpty'](_0x4bbd91) && delete this[_0x1e0149(0x13d)][_0x44231c];
            });
            if (_0x5125f1[_0xbd09a4(0x13e)]) {
                const _0x17e181 = _['cloneDeep'](this);
                return _0x17e181[_0xbd09a4(0x13f)] = this['_previousAttributes'], this[_0xbd09a4(0x140)] && this[_0xbd09a4(0x140)]['forEach'](_0x44e8f9 => {
                    const _0x1bef8b = _0xbd09a4;
                    this[_0x1bef8b(0x141)] && Object[_0x1bef8b(0x131)][_0x1bef8b(0x142)][_0x1bef8b(0x143)](this[_0x1bef8b(0x141)], _0x44e8f9) && (_0x17e181['related'](_0x44e8f9)['models'] = this[_0x1bef8b(0x141)][_0x44e8f9][_0x1bef8b(0x144)]);
                }), _0x5d0c99[_0xbd09a4(0x131)][_0xbd09a4(0x13b)][_0xbd09a4(0x143)](_0x17e181, _0x5125f1);
            }
            return _0x5d0c99[_0xbd09a4(0x131)][_0xbd09a4(0x13b)][_0xbd09a4(0x143)](this, _0x5125f1);
        }
    });
};
