const _0xa070 = [
    'forEach',
    'toBe',
    'from',
    '1677405npHfsd',
    '1435002HxFBHP',
    '1myJlWK',
    '509099dxflwJ',
    '1YqgyIn',
    '767268pXIFHI',
    '1292105aTANtr',
    '533877HwNkTy',
    '927852FSOkJd',
    'extend',
    'set',
    'reset',
    'Format\x20month\x20with\x20locale\x20function',
    'add',
    'locale',
    'day',
    'DD\x20MMMM\x20YYYY\x20MMM',
    'MMMM',
    'MMM',
    'format',
    'toEqual',
    'second',
    'minute',
    'hour',
    'month',
    'year'
];
const _0x4fc831 = _0x1530;
(function (_0x1ad278, _0x4ac81f) {
    const _0x10ef72 = _0x1530;
    while (!![]) {
        try {
            const _0x1c1512 = -parseInt(_0x10ef72(0x8d)) + parseInt(_0x10ef72(0x8e)) * parseInt(_0x10ef72(0x8f)) + parseInt(_0x10ef72(0x90)) * -parseInt(_0x10ef72(0x91)) + parseInt(_0x10ef72(0x92)) + parseInt(_0x10ef72(0x93)) + parseInt(_0x10ef72(0x94)) + -parseInt(_0x10ef72(0x95));
            if (_0x1c1512 === _0x4ac81f)
                break;
            else
                _0x1ad278['push'](_0x1ad278['shift']());
        } catch (_0x5de3d2) {
            _0x1ad278['push'](_0x1ad278['shift']());
        }
    }
}(_0xa070, 0xdf1e8));
function _0x1530(_0x4793de, _0x5ddace) {
    return _0x1530 = function (_0xa070db, _0x1530e7) {
        _0xa070db = _0xa070db - 0x8d;
        let _0x36c2ca = _0xa070[_0xa070db];
        return _0x36c2ca;
    }, _0x1530(_0x4793de, _0x5ddace);
}
import _0x2e1814 from 'moment';
import _0x5d7347 from 'mockdate';
import _0x42fb93 from '../../src';
import _0x5248bb from '../../src/plugin/relativeTime';
import '../../src/locale/pl';
_0x42fb93[_0x4fc831(0x96)](_0x5248bb), beforeEach(() => {
    const _0x1d4751 = _0x4fc831;
    _0x5d7347[_0x1d4751(0x97)](new Date());
}), afterEach(() => {
    const _0x236160 = _0x4fc831;
    _0x5d7347[_0x236160(0x98)]();
}), it(_0x4fc831(0x99), () => {
    const _0x51efa7 = _0x4fc831;
    for (let _0x4afce9 = 0x0; _0x4afce9 <= 0x7; _0x4afce9 += 0x1) {
        const _0x4ae8a0 = _0x42fb93()['locale']('pl')[_0x51efa7(0x9a)](_0x4afce9, 'day'), _0x4fd084 = _0x2e1814()[_0x51efa7(0x9b)]('pl')[_0x51efa7(0x9a)](_0x4afce9, _0x51efa7(0x9c)), _0x301b1b = _0x51efa7(0x9d), _0x338926 = 'dddd,\x20MMMM\x20D\x20YYYY', _0xd7164b = _0x51efa7(0x9e), _0x59c6a5 = _0x51efa7(0x9f);
        expect(_0x4ae8a0[_0x51efa7(0xa0)](_0x301b1b))[_0x51efa7(0xa1)](_0x4fd084[_0x51efa7(0xa0)](_0x301b1b)), expect(_0x4ae8a0[_0x51efa7(0xa0)](_0x338926))[_0x51efa7(0xa1)](_0x4fd084['format'](_0x338926)), expect(_0x4ae8a0[_0x51efa7(0xa0)](_0xd7164b))['toEqual'](_0x4fd084[_0x51efa7(0xa0)](_0xd7164b)), expect(_0x4ae8a0[_0x51efa7(0xa0)](_0x59c6a5))[_0x51efa7(0xa1)](_0x4fd084[_0x51efa7(0xa0)](_0x59c6a5));
    }
}), it('RelativeTime:\x20Time\x20from\x20X', () => {
    const _0x45cd58 = _0x4fc831, _0x403bca = [
            [
                44.4,
                'second'
            ],
            [
                89.5,
                _0x45cd58(0xa2)
            ],
            [
                0x2,
                _0x45cd58(0xa3)
            ],
            [
                0x5,
                _0x45cd58(0xa3)
            ],
            [
                0x2b,
                _0x45cd58(0xa3)
            ],
            [
                0x2d,
                _0x45cd58(0xa3)
            ],
            [
                0x3,
                'hour'
            ],
            [
                0x15,
                _0x45cd58(0xa4)
            ],
            [
                0x1,
                _0x45cd58(0x9c)
            ],
            [
                0x3,
                _0x45cd58(0x9c)
            ],
            [
                0x19,
                _0x45cd58(0x9c)
            ],
            [
                0x1,
                'month'
            ],
            [
                0x2,
                _0x45cd58(0xa5)
            ],
            [
                0xa,
                _0x45cd58(0xa5)
            ],
            [
                0x1,
                _0x45cd58(0xa6)
            ],
            [
                0x2,
                _0x45cd58(0xa6)
            ],
            [
                0x5,
                'year'
            ],
            [
                0x12,
                _0x45cd58(0xa5)
            ]
        ];
    _0x403bca[_0x45cd58(0xa7)](_0xb8eee1 => {
        const _0x21f1e6 = _0x45cd58;
        _0x42fb93[_0x21f1e6(0x9b)]('pl'), _0x2e1814['locale']('pl'), expect(_0x42fb93()['from'](_0x42fb93()[_0x21f1e6(0x9a)](_0xb8eee1[0x0], _0xb8eee1[0x1])))[_0x21f1e6(0xa8)](_0x2e1814()[_0x21f1e6(0xa9)](_0x2e1814()['add'](_0xb8eee1[0x0], _0xb8eee1[0x1]))), expect(_0x42fb93()[_0x21f1e6(0xa9)](_0x42fb93()[_0x21f1e6(0x9a)](_0xb8eee1[0x0], _0xb8eee1[0x1]), !![]))[_0x21f1e6(0xa8)](_0x2e1814()[_0x21f1e6(0xa9)](_0x2e1814()[_0x21f1e6(0x9a)](_0xb8eee1[0x0], _0xb8eee1[0x1]), !![]));
    });
});
