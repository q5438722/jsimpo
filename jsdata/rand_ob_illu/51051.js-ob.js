'use strict';

const _0x14e1 = ['../common.js', 'alloc', 'length', 'pTksm', 'compare', 'start', 'Hlaxn', 'end', 'qFvDB', '114RFlAVu', '5581TRoFqL', '158288yVZErA', '24051UcCBKe', '1isekiT', '384131kPjufm', '496142NrjMVt', '94050NWEnEF', '1748777zBqDMY', '1LjvJzT'];
const _0x557f94 = _0x50c7;

(function (_0x486412, _0x37acbf) {
    const _0x3833a3 = _0x50c7;

    while (true) {
        try {
            const _0x2ab280 = parseInt(_0x3833a3(0x94)) * -parseInt(_0x3833a3(0x95)) + parseInt(_0x3833a3(0x96)) + -parseInt(_0x3833a3(0x97)) * -parseInt(_0x3833a3(0x98)) + -parseInt(_0x3833a3(0x99)) + -parseInt(_0x3833a3(0x9a)) + parseInt(_0x3833a3(0x9b)) + parseInt(_0x3833a3(0x9c)) * parseInt(_0x3833a3(0x9d));

            if (_0x2ab280 === _0x37acbf) break;else _0x486412.push(_0x486412.shift());
        } catch (_0x561906) {
            _0x486412.push(_0x486412.shift());
        }
    }
})(_0x14e1, 508659);
function _0x50c7(_0x1a8bab, _0x2987b2) {
    return _0x50c7 = function (_0x1ad782, _0x403d51) {
        _0x1ad782 = _0x1ad782 - 148;
        const _0x21648c = _0x14e1[_0x1ad782];

        return _0x21648c;
    }, _0x50c7(_0x1a8bab, _0x2987b2);
}

const common = require(_0x557f94(0x9e));

const bench = common.createBenchmark(main, {
    'size': [16, 512, 4096, 16386],
    'args': [1, 2, 5],
    'n': [1000000]
});

function main({
    n: _0x15e3eb,
    size: _0x1a1ce6,
    args: _0x6ec15e
}) {
    const _0x2d597b = _0x557f94;
    const _0x112e1c = {
        'pTksm': function (_0x2b69f3, _0x26be20) {
            return _0x2b69f3 - _0x26be20;
        },
        'Hlaxn': function (_0x465bed, _0x4652d9) {
            return _0x465bed < _0x4652d9;
        },
        'qFvDB': function (_0x3c66d1, _0x2c85b8) {
            return _0x3c66d1 < _0x2c85b8;
        }
    };

    const _0x52c400 = Buffer[_0x2d597b(0x9f)](_0x1a1ce6, 'a');

    const _0x1b7931 = Buffer[_0x2d597b(0x9f)](_0x1a1ce6, 'a');

    const _0x4a14c3 = _0x52c400[_0x2d597b(0xa0)];

    const _0x4af256 = _0x1b7931[_0x2d597b(0xa0)];

    _0x1b7931[_0x112e1c[_0x2d597b(0xa1)](_0x1a1ce6, 1)] = 98;
    switch (_0x6ec15e) {
        case 2:
            _0x52c400[_0x2d597b(0xa2)](_0x1b7931, 0), bench[_0x2d597b(0xa3)]();
            for (let _0x174461 = 0; _0x112e1c[_0x2d597b(0xa4)](_0x174461, _0x15e3eb); _0x174461++) {
                _0x52c400[_0x2d597b(0xa2)](_0x1b7931, 0);
            }
            bench[_0x2d597b(0xa5)](_0x15e3eb);
            break;
        case 3:
            _0x52c400.compare(_0x1b7931, 0, _0x4af256), bench[_0x2d597b(0xa3)]();
            for (let _0x517757 = 0; _0x517757 < _0x15e3eb; _0x517757++) {
                _0x52c400.compare(_0x1b7931, 0, _0x4af256);
            }
            bench[_0x2d597b(0xa5)](_0x15e3eb);
            break;
        case 4:
            _0x52c400[_0x2d597b(0xa2)](_0x1b7931, 0, _0x4af256, 0), bench[_0x2d597b(0xa3)]();
            for (let _0x1fb65a = 0; _0x112e1c[_0x2d597b(0xa6)](_0x1fb65a, _0x15e3eb); _0x1fb65a++) {
                _0x52c400[_0x2d597b(0xa2)](_0x1b7931, 0, _0x4af256, 0);
            }
            bench[_0x2d597b(0xa5)](_0x15e3eb);
            break;
        case 5:
            _0x52c400[_0x2d597b(0xa2)](_0x1b7931, 0, _0x4af256, 0, _0x4a14c3), bench[_0x2d597b(0xa3)]();
            for (let _0xd86a61 = 0; _0x112e1c.qFvDB(_0xd86a61, _0x15e3eb); _0xd86a61++) {
                _0x52c400.compare(_0x1b7931, 0, _0x4af256, 0, _0x4a14c3);
            }
            bench[_0x2d597b(0xa5)](_0x15e3eb);
            break;
        default:
            _0x52c400[_0x2d597b(0xa2)](_0x1b7931), bench[_0x2d597b(0xa3)]();
            for (let _0x1d093c = 0; _0x1d093c < _0x15e3eb; _0x1d093c++) {
                _0x52c400[_0x2d597b(0xa2)](_0x1b7931);
            }
            bench[_0x2d597b(0xa5)](_0x15e3eb);
    }
}
