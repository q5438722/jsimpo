'use strict';

const _0x3b34 = ['4797yKTJiB', '158OQtltT', '../common.js', 'createBenchmark', 'alloc', 'length', 'JOocR', 'charCodeAt', 'compare', 'start', 'end', 'xhgHV', '179SXMtZJ', '1010wtBWEe', '81FOplaC', '1575NAtiWM', '41161grQmOF', '4TpPBma', '37CSZOLu', '5903PHYaDi', '210067GalNCJ', '1742wcaGLc', '4qlyEgs'];
const _0x4bc13e = _0x26c1;

(function (_0x5321a9, _0x194bb7) {
    const _0xb58576 = _0x26c1;

    while (true) {
        try {
            const _0x4cf433 = parseInt(_0xb58576(0xd2)) * parseInt(_0xb58576(0xd3)) + -parseInt(_0xb58576(0xd4)) * -parseInt(_0xb58576(0xd5)) + -parseInt(_0xb58576(0xd6)) * -parseInt(_0xb58576(0xd7)) + parseInt(_0xb58576(0xd8)) * parseInt(_0xb58576(0xd9)) + parseInt(_0xb58576(0xda)) + -parseInt(_0xb58576(0xdb)) * -parseInt(_0xb58576(0xdc)) + parseInt(_0xb58576(0xdd)) * -parseInt(_0xb58576(0xde));

            if (_0x4cf433 === _0x194bb7) break;else _0x5321a9.push(_0x5321a9.shift());
        } catch (_0x52c003) {
            _0x5321a9.push(_0x5321a9.shift());
        }
    }
})(_0x3b34, 150529);
function _0x26c1(_0x5a630f, _0x5a4431) {
    return _0x26c1 = function (_0x1d07f9, _0x3469d3) {
        _0x1d07f9 = _0x1d07f9 - 210;
        const _0x1f7ec1 = _0x3b34[_0x1d07f9];

        return _0x1f7ec1;
    }, _0x26c1(_0x5a630f, _0x5a4431);
}

const common = require(_0x4bc13e(0xdf));

const bench = common[_0x4bc13e(0xe0)](main, {
    'size': [16, 512, 4096, 16386],
    'args': [1, 2, 5],
    'n': [1000000]
});

function main({
    n: _0x18ba62,
    size: _0x38dd91,
    args: _0x349935
}) {
    const _0x2ef80b = _0x4bc13e;
    const _0x559b77 = {
        'JOocR': function (_0x5a53f8, _0x3977b5) {
            return _0x5a53f8 - _0x3977b5;
        },
        'xhgHV': function (_0x3e520b, _0x157e8d) {
            return _0x3e520b < _0x157e8d;
        },
        'qEuHB': function (_0x1256f7, _0x1058bc) {
            return _0x1256f7 < _0x1058bc;
        }
    };

    const _0x16a38e = Buffer[_0x2ef80b(0xe1)](_0x38dd91, 'a');

    const _0x1b6d4b = Buffer[_0x2ef80b(0xe1)](_0x38dd91, 'a');

    const _0x1a21ce = _0x16a38e[_0x2ef80b(0xe2)];

    const _0x56f5ff = _0x1b6d4b.length;

    _0x1b6d4b[_0x559b77[_0x2ef80b(0xe3)](_0x38dd91, 1)] = 'b'[_0x2ef80b(0xe4)](0);
    switch (_0x349935) {
        case 2:
            _0x16a38e[_0x2ef80b(0xe5)](_0x1b6d4b, 0), bench[_0x2ef80b(0xe6)]();
            for (let _0x4d7084 = 0; _0x4d7084 < _0x18ba62; _0x4d7084++) {
                _0x16a38e[_0x2ef80b(0xe5)](_0x1b6d4b, 0);
            }
            bench[_0x2ef80b(0xe7)](_0x18ba62);
            break;
        case 3:
            _0x16a38e[_0x2ef80b(0xe5)](_0x1b6d4b, 0, _0x56f5ff), bench[_0x2ef80b(0xe6)]();
            for (let _0x23a97 = 0; _0x559b77[_0x2ef80b(0xe8)](_0x23a97, _0x18ba62); _0x23a97++) {
                _0x16a38e[_0x2ef80b(0xe5)](_0x1b6d4b, 0, _0x56f5ff);
            }
            bench[_0x2ef80b(0xe7)](_0x18ba62);
            break;
        case 4:
            _0x16a38e[_0x2ef80b(0xe5)](_0x1b6d4b, 0, _0x56f5ff, 0), bench[_0x2ef80b(0xe6)]();
            for (let _0x53deed = 0; _0x559b77.xhgHV(_0x53deed, _0x18ba62); _0x53deed++) {
                _0x16a38e[_0x2ef80b(0xe5)](_0x1b6d4b, 0, _0x56f5ff, 0);
            }
            bench[_0x2ef80b(0xe7)](_0x18ba62);
            break;
        case 5:
            _0x16a38e[_0x2ef80b(0xe5)](_0x1b6d4b, 0, _0x56f5ff, 0, _0x1a21ce), bench[_0x2ef80b(0xe6)]();
            for (let _0x123c30 = 0; _0x559b77[_0x2ef80b(0xe8)](_0x123c30, _0x18ba62); _0x123c30++) {
                _0x16a38e.compare(_0x1b6d4b, 0, _0x56f5ff, 0, _0x1a21ce);
            }
            bench.end(_0x18ba62);
            break;
        default:
            _0x16a38e.compare(_0x1b6d4b), bench[_0x2ef80b(0xe6)]();
            for (let _0x275890 = 0; _0x559b77.qEuHB(_0x275890, _0x18ba62); _0x275890++) {
                _0x16a38e.compare(_0x1b6d4b);
            }
            bench[_0x2ef80b(0xe7)](_0x18ba62);
    }
}
