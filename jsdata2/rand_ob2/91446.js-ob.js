const _0x4600 = [
    'stdout',
    'close',
    'toEqual',
    '1bBjypj',
    '544806BAbRmb',
    '1642951jnmTAm',
    '1NialHj',
    '374960ORSjKI',
    '1280768MPrqhX',
    '1733949MVQBJu',
    '36524MEfvUG',
    '31FSyzRC',
    '99sPYSsp',
    '54151BuYGBo',
    'child_process',
    'Builds\x20cache-dir\x20with\x20minimal\x20config',
    '@babel/cli/bin/babel.js',
    'join',
    '--config-file',
    '--ignore',
    '**/__tests__',
    'spawn',
    'stderr',
    'data'
];
const _0xe66612 = _0x46fd;
(function (_0x2a1f35, _0x1cd570) {
    const _0x11b9ea = _0x46fd;
    while (!![]) {
        try {
            const _0xc1c3d4 = parseInt(_0x11b9ea(0x1de)) * -parseInt(_0x11b9ea(0x1df)) + parseInt(_0x11b9ea(0x1e0)) * -parseInt(_0x11b9ea(0x1e1)) + -parseInt(_0x11b9ea(0x1e2)) + -parseInt(_0x11b9ea(0x1e3)) + -parseInt(_0x11b9ea(0x1e4)) + parseInt(_0x11b9ea(0x1e5)) * parseInt(_0x11b9ea(0x1e6)) + -parseInt(_0x11b9ea(0x1e7)) * -parseInt(_0x11b9ea(0x1e8));
            if (_0xc1c3d4 === _0x1cd570)
                break;
            else
                _0x2a1f35['push'](_0x2a1f35['shift']());
        } catch (_0x14bea5) {
            _0x2a1f35['push'](_0x2a1f35['shift']());
        }
    }
}(_0x4600, 0xdf92f));
function _0x46fd(_0x361540, _0x5762f6) {
    return _0x46fd = function (_0x4600b4, _0x46fd55) {
        _0x4600b4 = _0x4600b4 - 0x1de;
        let _0x4a385c = _0x4600[_0x4600b4];
        return _0x4a385c;
    }, _0x46fd(_0x361540, _0x5762f6);
}
const path = require('path'), child = require(_0xe66612(0x1e9));
it(_0xe66612(0x1ea), _0x495f89 => {
    const _0x25404b = _0xe66612, _0x43d365 = [
            require['resolve'](_0x25404b(0x1eb)),
            path[_0x25404b(0x1ec)](__dirname, '..'),
            _0x25404b(0x1ed),
            path['join'](__dirname, '.babelrc'),
            _0x25404b(0x1ee),
            _0x25404b(0x1ef)
        ], _0x59520b = child[_0x25404b(0x1f0)](process['execPath'], _0x43d365);
    let _0xd8ecae = '', _0x5d7219 = '';
    _0x59520b[_0x25404b(0x1f1)]['on'](_0x25404b(0x1f2), function (_0x15f35a) {
        _0xd8ecae += _0x15f35a;
    }), _0x59520b[_0x25404b(0x1f3)]['on'](_0x25404b(0x1f2), function (_0xa23f74) {
        _0x5d7219 += _0xa23f74;
    }), _0x59520b['on'](_0x25404b(0x1f4), function () {
        const _0x49a869 = _0x25404b;
        expect(_0xd8ecae)['toEqual'](''), expect(_0x5d7219)['not'][_0x49a869(0x1f5)](''), _0x495f89();
    });
}, 0x7530);
