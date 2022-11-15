/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
const _0x3f2f = ['uAfyS', 'font', '_font', 'textBaseline', 'alphabetic', '#000', 'fillText', 'getImageData', '3|2|0|1|4', 'fontSize', 'ascent', 'descent', 'wClgU', 'data', 'length', 'WGIHF', 'NVRYp', 'hzzpZ', 'bRHKV', 'exports', '163ibtQZR', '1946vXcGiD', '25612UVWlpj', '20znVRVs', '481541xWCxln', '553043NwDKGQ', '583371IbFUBP', '621913WGOrla', '1zipXdf', '648185BYyRNR', '../../display/canvas/CanvasPool', '#f00', 'create', 'getContext', 'syncFont', 'measureText', 'testString', 'arkpn', 'actualBoundingBoxDescent', 'remove', 'ceil', 'width', 'sQGOB', 'baselineY', 'height', 'fillStyle'];
const _0x1e4d20 = _0x20d5;

(function (_0x6c9294, _0x4b1340) {
    const _0x29cffa = _0x20d5;

    while (true) {
        try {
            const _0x218ede = parseInt(_0x29cffa(0xeb)) * parseInt(_0x29cffa(0xec)) + -parseInt(_0x29cffa(0xed)) * parseInt(_0x29cffa(0xee)) + parseInt(_0x29cffa(0xef)) + -parseInt(_0x29cffa(0xf0)) + parseInt(_0x29cffa(0xf1)) + -parseInt(_0x29cffa(0xf2)) * parseInt(_0x29cffa(0xf3)) + parseInt(_0x29cffa(0xf4));

            if (_0x218ede === _0x4b1340) break;else _0x6c9294.push(_0x6c9294.shift());
        } catch (_0x5c0455) {
            _0x6c9294.push(_0x6c9294.shift());
        }
    }
})(_0x3f2f, 343099);
function _0x20d5(_0x16d520, _0x36ee58) {
    return _0x20d5 = function (_0x3d0c72, _0x23810b) {
        _0x3d0c72 = _0x3d0c72 - 235;
        const _0x5ed28f = _0x3f2f[_0x3d0c72];

        return _0x5ed28f;
    }, _0x20d5(_0x16d520, _0x36ee58);
}

const CanvasPool = require(_0x1e4d20(0xf5));

const MeasureText = function (_0x352fc5) {
    const _0x1711f3 = _0x1e4d20;
    const _0xa796d3 = {
        'arkpn': 'actualBoundingBoxAscent',
        'sQGOB': function (_0x8d6269, _0x15be19) {
            return _0x8d6269 * _0x15be19;
        },
        'uAfyS': _0x1711f3(0xf6),
        'wClgU': function (_0xcf244e, _0x299a90) {
            return _0xcf244e + _0x299a90;
        },
        'WGIHF': function (_0x3a1e36, _0x3d323e) {
            return _0x3a1e36 * _0x3d323e;
        },
        'NVRYp': function (_0x48074e, _0x56fce2) {
            return _0x48074e !== _0x56fce2;
        },
        'hzzpZ': function (_0x250c2c, _0xdd502e) {
            return _0x250c2c > _0xdd502e;
        },
        'bRHKV': function (_0x22a3eb, _0x5dae97) {
            return _0x22a3eb - _0x5dae97;
        }
    };

    const _0x21dabe = CanvasPool[_0x1711f3(0xf7)](this);

    const _0x205712 = _0x21dabe[_0x1711f3(0xf8)]('2d');

    _0x352fc5[_0x1711f3(0xf9)](_0x21dabe, _0x205712);

    const _0x4885c8 = _0x205712[_0x1711f3(0xfa)](_0x352fc5[_0x1711f3(0xfb)]);

    if (_0xa796d3[_0x1711f3(0xfc)] in _0x4885c8) {
        const _0x53f6a7 = _0x4885c8.actualBoundingBoxAscent;

        const _0x8ca558 = _0x4885c8[_0x1711f3(0xfd)];

        return CanvasPool[_0x1711f3(0xfe)](_0x21dabe), {
            'ascent': _0x53f6a7,
            'descent': _0x8ca558,
            'fontSize': _0x53f6a7 + _0x8ca558
        };
    }

    const _0x585381 = Math[_0x1711f3(0xff)](_0x4885c8[_0x1711f3(0x100)] * _0x352fc5.baselineX);

    var _0x5aef96 = _0x585381;

    const _0x2e3ede = 2 * _0x5aef96;

    _0x5aef96 = _0xa796d3[_0x1711f3(0x101)](_0x5aef96, _0x352fc5[_0x1711f3(0x102)]) | 0, _0x21dabe[_0x1711f3(0x100)] = _0x585381, _0x21dabe[_0x1711f3(0x103)] = _0x2e3ede, _0x205712[_0x1711f3(0x104)] = _0xa796d3[_0x1711f3(0x105)], _0x205712.fillRect(0, 0, _0x585381, _0x2e3ede), _0x205712[_0x1711f3(0x106)] = _0x352fc5[_0x1711f3(0x107)], _0x205712[_0x1711f3(0x108)] = _0x1711f3(0x109), _0x205712[_0x1711f3(0x104)] = _0x1711f3(0x10a), _0x205712[_0x1711f3(0x10b)](_0x352fc5[_0x1711f3(0xfb)], 0, _0x5aef96);
    const _0x15c2f7 = {
        'ascent': 0x0,
        'descent': 0x0,
        'fontSize': 0x0
    };

    const _0x42b93d = _0x205712[_0x1711f3(0x10c)](0, 0, _0x585381, _0x2e3ede);

    if (!_0x42b93d) {
        const _0x1172bb = _0x1711f3(0x10d).split('|');

        var _0x8beac8 = 0;

        while (true) {
            switch (_0x1172bb[_0x8beac8++]) {
                case '0':
                    _0x15c2f7[_0x1711f3(0x10e)] = _0xa796d3.wClgU(_0x15c2f7[_0x1711f3(0x10f)], _0x15c2f7[_0x1711f3(0x110)]);
                    continue;
                case '1':
                    CanvasPool.remove(_0x21dabe);
                    continue;
                case '2':
                    _0x15c2f7[_0x1711f3(0x110)] = _0xa796d3[_0x1711f3(0x111)](_0x5aef96, 6);
                    continue;
                case '3':
                    _0x15c2f7[_0x1711f3(0x10f)] = _0x5aef96;
                    continue;
                case '4':
                    return _0x15c2f7;
            }
            break;
        }
    }

    const _0x75dc7d = _0x42b93d[_0x1711f3(0x112)];

    const _0x3dbf1b = _0x75dc7d[_0x1711f3(0x113)];

    const _0x2b2d24 = _0xa796d3[_0x1711f3(0x114)](_0x585381, 4);

    var _0x3660bf;

    var _0xa0b02c;

    var _0x4908fc = 0;
    var _0x580816 = false;

    for (_0x3660bf = 0; _0x3660bf < _0x5aef96; _0x3660bf++) {
        for (_0xa0b02c = 0; _0xa0b02c < _0x2b2d24; _0xa0b02c += 4) {
            if (_0xa796d3[_0x1711f3(0x115)](_0x75dc7d[_0xa796d3[_0x1711f3(0x111)](_0x4908fc, _0xa0b02c)], 255)) {
                _0x580816 = true;
                break;
            }
        }
        if (!_0x580816) _0x4908fc += _0x2b2d24;else break;
    }
    _0x15c2f7[_0x1711f3(0x10f)] = _0x5aef96 - _0x3660bf, _0x4908fc = _0x3dbf1b - _0x2b2d24, _0x580816 = false;
    for (_0x3660bf = _0x2e3ede; _0xa796d3[_0x1711f3(0x116)](_0x3660bf, _0x5aef96); _0x3660bf--) {
        for (_0xa0b02c = 0; _0xa0b02c < _0x2b2d24; _0xa0b02c += 4) {
            if (_0x75dc7d[_0x4908fc + _0xa0b02c] !== 255) {
                _0x580816 = true;
                break;
            }
        }
        if (!_0x580816) _0x4908fc -= _0x2b2d24;else break;
    }
    return _0x15c2f7[_0x1711f3(0x110)] = _0xa796d3[_0x1711f3(0x117)](_0x3660bf, _0x5aef96), _0x15c2f7[_0x1711f3(0x10e)] = _0xa796d3[_0x1711f3(0x111)](_0x15c2f7[_0x1711f3(0x10f)], _0x15c2f7[_0x1711f3(0x110)]), CanvasPool[_0x1711f3(0xfe)](_0x21dabe), _0x15c2f7;
};

module[_0x1e4d20(0x118)] = MeasureText;
