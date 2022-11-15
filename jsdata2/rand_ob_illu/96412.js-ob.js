const _0x20a6 = ['target is a directory', 'resolve', 'AQWJw', 'isDirectory', 'JirWo', '156747RiuFCg', '2WExcjV', '68009WrRSyf', '7331zSkyqw', '27glpRRv', '2QgOMgG', '39922vqhzok', '59341phgMQc', '3606VkDzjG', '3EhGmbf', '37223WNosHG', '3RgPZfs', '../', 'path', 'tap', 'test', '0755', 'root'];
const _0x207698 = _0x54be;

(function (_0x3013f7, _0x5a65e4) {
    const _0x8dfde5 = _0x54be;

    while (true) {
        try {
            const _0x378281 = parseInt(_0x8dfde5(0xa6)) * parseInt(_0x8dfde5(0xa7)) + parseInt(_0x8dfde5(0xa8)) + -parseInt(_0x8dfde5(0xa9)) * parseInt(_0x8dfde5(0xaa)) + parseInt(_0x8dfde5(0xab)) * parseInt(_0x8dfde5(0xac)) + parseInt(_0x8dfde5(0xad)) + -parseInt(_0x8dfde5(0xae)) * parseInt(_0x8dfde5(0xaf)) + -parseInt(_0x8dfde5(0xb0)) * parseInt(_0x8dfde5(0xb1));

            if (_0x378281 === _0x5a65e4) break;else _0x3013f7.push(_0x3013f7.shift());
        } catch (_0xdfd0bf) {
            _0x3013f7.push(_0x3013f7.shift());
        }
    }
})(_0x20a6, 200264);
function _0x54be(_0x2b24fa, _0x1e4d2a) {
    return _0x54be = function (_0x2a745e, _0x5ee275) {
        _0x2a745e = _0x2a745e - 166;
        const _0x33758c = _0x20a6[_0x2a745e];

        return _0x33758c;
    }, _0x54be(_0x2b24fa, _0x1e4d2a);
}

const mkdirp = require(_0x207698(0xb2));

const path = require(_0x207698(0xb3));

const fs = require('fs');

const test = require(_0x207698(0xb4))[_0x207698(0xb5)];

const _0755 = parseInt(_0x207698(0xb6), 8);

test(_0x207698(0xb7), function (_0x37630b) {
    const _0x2611e8 = _0x207698;
    const _0x742eff = {
        'JirWo': _0x2611e8(0xb8),
        'AQWJw': function (_0x55901e, _0x34b51f, _0x397bb1, _0x1fa008) {
            return _0x55901e(_0x34b51f, _0x397bb1, _0x1fa008);
        }
    };

    const _0x9f90d4 = path[_0x2611e8(0xb9)]('/');

    _0x742eff[_0x2611e8(0xba)](mkdirp, _0x9f90d4, _0755, function (_0x2209ca) {
        if (_0x2209ca) throw _0x2209ca;
        fs.stat(_0x9f90d4, function (_0x5161b6, _0x22f7ae) {
            const _0x656ab7 = _0x54be;

            if (_0x5161b6) throw _0x5161b6;
            _0x37630b.ok(_0x22f7ae[_0x656ab7(0xbb)](), _0x742eff[_0x656ab7(0xbc)]), _0x37630b.end();
        });
    });
});
