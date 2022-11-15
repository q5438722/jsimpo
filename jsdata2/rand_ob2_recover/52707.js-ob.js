var util = require(_0x4b68d1(456)), Action = require(_0x4b68d1(457)), c = require('../const'), ActionAppend = module[_0x4b68d1(458)] = function ActionAppend(_0x1dd78d) {
        var _0x380868 = _0x4b68d1;
        _0x1dd78d = _0x1dd78d || {};
        if (this[_0x380868(459)] <= 0)
            throw new Error('nargs for append actions must be > 0; if arg ' + 'strings are not supplying the value to append, ' + _0x380868(460));
        if (!!this[_0x380868(461)] && this[_0x380868(459)] !== c[_0x380868(462)])
            throw new Error(_0x380868(463));
        Action[_0x380868(464)](this, _0x1dd78d);
    };
function _0x2120(_0x4fc25f, _0x275767) {
    return _0x2120 = function (_0x522e77, _0x212016) {
        _0x522e77 = _0x522e77 - 448;
        var _0x278b6c = _0x522e[_0x522e77];
        return _0x278b6c;
    }, _0x2120(_0x4fc25f, _0x275767);
}
util[_0x4b68d1(465)](ActionAppend, Action), ActionAppend['prototype'][_0x4b68d1(464)] = function (_0x4d5b5b, _0x26d729, _0x1dea71) {
    var _0x3462ad = _0x4b68d1, _0x6d0122 = (_0x26d729[this['dest']] || [])[_0x3462ad(466)]();
    _0x6d0122[_0x3462ad(467)](_0x1dea71), _0x26d729['set'](this[_0x3462ad(468)], _0x6d0122);
};