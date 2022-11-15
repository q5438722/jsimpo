function _0x46fd(_0x361540, _0x5762f6) {
    return _0x46fd = function (_0x4600b4, _0x46fd55) {
        _0x4600b4 = _0x4600b4 - 478;
        let _0x4a385c = _0x4600[_0x4600b4];
        return _0x4a385c;
    }, _0x46fd(_0x361540, _0x5762f6);
}
const path = require('path'), child = require(_0xe66612(489));
it(_0xe66612(490), _0x495f89 => {
    const _0x25404b = _0xe66612, _0x43d365 = [
            require['resolve'](_0x25404b(491)),
            path[_0x25404b(492)](__dirname, '..'),
            _0x25404b(493),
            path['join'](__dirname, '.babelrc'),
            _0x25404b(494),
            _0x25404b(495)
        ], _0x59520b = child[_0x25404b(496)](process['execPath'], _0x43d365);
    let _0xd8ecae = '', _0x5d7219 = '';
    _0x59520b[_0x25404b(497)]['on'](_0x25404b(498), function (_0x15f35a) {
        _0xd8ecae += _0x15f35a;
    }), _0x59520b[_0x25404b(499)]['on'](_0x25404b(498), function (_0xa23f74) {
        _0x5d7219 += _0xa23f74;
    }), _0x59520b['on'](_0x25404b(500), function () {
        const _0x49a869 = _0x25404b;
        expect(_0xd8ecae)['toEqual'](''), expect(_0x5d7219)['not'][_0x49a869(501)](''), _0x495f89();
    });
}, 30000);