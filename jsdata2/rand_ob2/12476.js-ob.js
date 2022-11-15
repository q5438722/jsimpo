const _0x5e68 = [
    '166393DIytEj',
    '4913ucCRXk',
    '3UFNhQx',
    '104173HcNBHh',
    '1BylgtL',
    '29743rujYrp',
    '23Mpxkji',
    '677ZQUhSa',
    '14710qwImkt',
    'USERS\x20PERMISSIONS\x20|\x20HOOKS\x20|\x20USEROLESLIST\x20|\x20reducer',
    'DEFAULT_ACTION',
    'should\x20return\x20the\x20initialState',
    'toEqual',
    'GET_DATA',
    'should\x20set\x20the\x20isLoading\x20key\x20to\x20true',
    'tests',
    'should\x20set\x20isLoading\x20to\x20false\x20is\x20an\x20error\x20occured',
    'GET_DATA_SUCCEEDED',
    'should\x20return\x20the\x20state\x20with\x20the\x20role\x20list',
    'This\x20is\x20the\x20super\x20admin\x20role',
    'Super\x20admin',
    '1AMgIAn',
    '5495bDMIaG',
    '1MupmMI'
];
function _0x4d85(_0x49c03e, _0x321427) {
    return _0x4d85 = function (_0x5e6867, _0x4d8589) {
        _0x5e6867 = _0x5e6867 - 0x137;
        let _0x290cb6 = _0x5e68[_0x5e6867];
        return _0x290cb6;
    }, _0x4d85(_0x49c03e, _0x321427);
}
const _0x235af6 = _0x4d85;
(function (_0x270a21, _0x25aa56) {
    const _0x21a630 = _0x4d85;
    while (!![]) {
        try {
            const _0x1daf36 = parseInt(_0x21a630(0x137)) * -parseInt(_0x21a630(0x138)) + parseInt(_0x21a630(0x139)) * parseInt(_0x21a630(0x13a)) + -parseInt(_0x21a630(0x13b)) * -parseInt(_0x21a630(0x13c)) + -parseInt(_0x21a630(0x13d)) * parseInt(_0x21a630(0x13e)) + parseInt(_0x21a630(0x13f)) + -parseInt(_0x21a630(0x140)) * -parseInt(_0x21a630(0x141)) + -parseInt(_0x21a630(0x142));
            if (_0x1daf36 === _0x25aa56)
                break;
            else
                _0x270a21['push'](_0x270a21['shift']());
        } catch (_0x280de6) {
            _0x270a21['push'](_0x270a21['shift']());
        }
    }
}(_0x5e68, 0x18eb4));
import _0x599783 from '../reducer';
describe(_0x235af6(0x143), () => {
    const _0x29d671 = _0x235af6;
    describe(_0x29d671(0x144), () => {
        const _0x55e978 = _0x29d671;
        it(_0x55e978(0x145), () => {
            const _0x33510e = _0x55e978, _0x4aadf0 = { 'test': !![] };
            expect(_0x599783(_0x4aadf0, {}))[_0x33510e(0x146)](_0x4aadf0);
        });
    }), describe(_0x29d671(0x147), () => {
        const _0x49ce17 = _0x29d671;
        it(_0x49ce17(0x148), () => {
            const _0x1b9bdd = _0x49ce17, _0x2a598c = {
                    'roles': [_0x1b9bdd(0x149)],
                    'isLoading': ![]
                }, _0x4b35ab = { 'type': _0x1b9bdd(0x147) }, _0x484230 = {
                    'roles': [],
                    'isLoading': !![]
                };
            expect(_0x599783(_0x2a598c, _0x4b35ab))['toEqual'](_0x484230);
        });
    }), describe('GET_DATA_ERROR', () => {
        const _0x1f3dd4 = _0x29d671;
        it(_0x1f3dd4(0x14a), () => {
            const _0x2d63bf = { 'type': 'GET_DATA_ERROR' }, _0x36832d = {
                    'roles': [],
                    'isLoading': !![]
                }, _0x3bc34c = {
                    'roles': [],
                    'isLoading': ![]
                };
            expect(_0x599783(_0x36832d, _0x2d63bf))['toEqual'](_0x3bc34c);
        });
    }), describe(_0x29d671(0x14b), () => {
        const _0x556aae = _0x29d671;
        it(_0x556aae(0x14c), () => {
            const _0x1f3bb6 = _0x556aae, _0x5f3ba7 = {
                    'type': _0x1f3bb6(0x14b),
                    'data': [{
                            'id': 0x1,
                            'name': 'Super\x20admin',
                            'description': _0x1f3bb6(0x14d)
                        }]
                }, _0x329b6b = {
                    'roles': [],
                    'isLoading': !![]
                }, _0x4ecdce = {
                    'roles': [{
                            'id': 0x1,
                            'name': _0x1f3bb6(0x14e),
                            'description': _0x1f3bb6(0x14d)
                        }],
                    'isLoading': ![]
                };
            expect(_0x599783(_0x329b6b, _0x5f3ba7))['toEqual'](_0x4ecdce);
        });
    });
});
