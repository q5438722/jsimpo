const _0x35d4 = [
    'Provider\x202',
    'icon2',
    '137628vSIJsJ',
    '132881geszsA',
    '2MLKOFu',
    '14834yAlRyM',
    '2XdCkGF',
    '18773zGIfdE',
    '2tIyTXB',
    '115963QbKifu',
    '7393xPFpfN',
    '37roRdKR',
    '1nXfWAg',
    '291869FSBxdi',
    'ADMIN\x20|\x20HOOKS\x20|\x20USEFETCHROLE\x20|\x20reducer',
    'DEFAULT_ACTION',
    'GET_DATA_ERROR',
    'should\x20set\x20isLoading\x20to\x20false\x20is\x20an\x20error\x20occured',
    'toEqual',
    'should\x20return\x20the\x20state\x20with\x20the\x20data',
    'icon1',
    'provider2'
];
const _0x4120ba = _0x2c75;
function _0x2c75(_0x451c8e, _0x3f4bed) {
    return _0x2c75 = function (_0x35d4c7, _0x2c758e) {
        _0x35d4c7 = _0x35d4c7 - 0xbd;
        let _0x1d2c0d = _0x35d4[_0x35d4c7];
        return _0x1d2c0d;
    }, _0x2c75(_0x451c8e, _0x3f4bed);
}
(function (_0x554416, _0x5c0045) {
    const _0xbb51ae = _0x2c75;
    while (!![]) {
        try {
            const _0x3350bb = parseInt(_0xbb51ae(0xbd)) + parseInt(_0xbb51ae(0xbe)) * parseInt(_0xbb51ae(0xbf)) + parseInt(_0xbb51ae(0xc0)) * -parseInt(_0xbb51ae(0xc1)) + parseInt(_0xbb51ae(0xc2)) * -parseInt(_0xbb51ae(0xc3)) + -parseInt(_0xbb51ae(0xc4)) + parseInt(_0xbb51ae(0xc5)) * parseInt(_0xbb51ae(0xc6)) + parseInt(_0xbb51ae(0xc7)) * -parseInt(_0xbb51ae(0xc8));
            if (_0x3350bb === _0x5c0045)
                break;
            else
                _0x554416['push'](_0x554416['shift']());
        } catch (_0x579425) {
            _0x554416['push'](_0x554416['shift']());
        }
    }
}(_0x35d4, 0x3149d));
import _0x5f50b6 from '../reducer';
describe(_0x4120ba(0xc9), () => {
    const _0x3e5e51 = _0x4120ba;
    describe(_0x3e5e51(0xca), () => {
        it('should\x20return\x20the\x20initialState', () => {
            const _0x58cd7b = { 'test': !![] };
            expect(_0x5f50b6(_0x58cd7b, {}))['toEqual'](_0x58cd7b);
        });
    }), describe(_0x3e5e51(0xcb), () => {
        const _0x4691fe = _0x3e5e51;
        it(_0x4691fe(0xcc), () => {
            const _0x5e260e = _0x4691fe, _0x56f9c2 = { 'type': 'GET_DATA_ERROR' }, _0x24e950 = {
                    'data': [],
                    'isLoading': !![]
                }, _0x3b5204 = {
                    'data': [],
                    'isLoading': ![]
                };
            expect(_0x5f50b6(_0x24e950, _0x56f9c2))[_0x5e260e(0xcd)](_0x3b5204);
        });
    }), describe('GET_DATA_SUCCEEDED', () => {
        const _0x599bad = _0x3e5e51;
        it(_0x599bad(0xce), () => {
            const _0x1926fb = _0x599bad, _0x3cadb5 = {
                    'type': 'GET_DATA_SUCCEEDED',
                    'data': [
                        {
                            'uid': 'provider1',
                            'displayName': 'Provider\x201',
                            'icon': _0x1926fb(0xcf)
                        },
                        {
                            'uid': _0x1926fb(0xd0),
                            'displayName': _0x1926fb(0xd1),
                            'icon': 'icon2'
                        }
                    ]
                }, _0x465109 = {
                    'data': [],
                    'isLoading': !![]
                }, _0x2fa206 = {
                    'data': [
                        {
                            'uid': 'provider1',
                            'displayName': 'Provider\x201',
                            'icon': _0x1926fb(0xcf)
                        },
                        {
                            'uid': 'provider2',
                            'displayName': 'Provider\x202',
                            'icon': _0x1926fb(0xd2)
                        }
                    ],
                    'isLoading': ![]
                };
            expect(_0x5f50b6(_0x465109, _0x3cadb5))[_0x1926fb(0xcd)](_0x2fa206);
        });
    });
});
