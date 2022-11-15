const _0x384f = [
    'IOeAJ',
    'GOsKl',
    'error',
    'Hriyx',
    'GET_DATA_ERROR',
    'notification',
    '194237SqjfcP',
    '528427pXCeec',
    '10ANAPdG',
    '15794REpsAB',
    '52203ifLxXr',
    '1THiHAy',
    '566557QhGNtj',
    '1soAiBo',
    '1EDWSTp',
    '721516RxXWKp',
    '460hqNDVA',
    '2716cXtGWr',
    'GET_DATA_SUCCEEDED',
    'providers',
    'GET',
    'notification.error',
    'PpHXp'
];
(function (_0x512b40, _0x5dc455) {
    const _0x2c59c6 = _0x333c;
    while (!![]) {
        try {
            const _0x4d26a6 = -parseInt(_0x2c59c6(0x121)) + -parseInt(_0x2c59c6(0x122)) + parseInt(_0x2c59c6(0x123)) * -parseInt(_0x2c59c6(0x124)) + parseInt(_0x2c59c6(0x125)) * -parseInt(_0x2c59c6(0x126)) + parseInt(_0x2c59c6(0x127)) * -parseInt(_0x2c59c6(0x128)) + -parseInt(_0x2c59c6(0x129)) * -parseInt(_0x2c59c6(0x12a)) + -parseInt(_0x2c59c6(0x12b)) * -parseInt(_0x2c59c6(0x12c));
            if (_0x4d26a6 === _0x5dc455)
                break;
            else
                _0x512b40['push'](_0x512b40['shift']());
        } catch (_0x281234) {
            _0x512b40['push'](_0x512b40['shift']());
        }
    }
}(_0x384f, 0x2 * 0x49a6d + 0xd3f32 + 0x58c7 * -0x2c));
import {
    useReducer,
    useEffect
} from 'react';
import { request } from 'strapi-helper-plugin';
import { getRequestUrl } from '../../../../admin/src/utils';
import _0x35da16, { initialState } from './reducer';
const useAuthProviders = ({ssoEnabled: _0x2557c7}) => {
    const _0xd1bec2 = _0x333c, _0x3e626f = {
            'IOeAJ': function (_0x396b80) {
                return _0x396b80();
            },
            'hBCLi': _0xd1bec2(0x12d),
            'GOsKl': _0xd1bec2(0x12e),
            'PpHXp': function (_0x63e7ee, _0x1d7846, _0x2a1286) {
                return _0x63e7ee(_0x1d7846, _0x2a1286);
            },
            'dEPjI': _0xd1bec2(0x12f),
            'IoPcx': function (_0x20b864, _0x4f068f) {
                return _0x20b864(_0x4f068f);
            },
            'Hriyx': function (_0x5b3c96, _0x232065) {
                return _0x5b3c96(_0x232065);
            },
            'LlJHA': 'warning',
            'pmAyz': _0xd1bec2(0x130),
            'gxCJf': function (_0x38ab99, _0x5f2357, _0x18f633) {
                return _0x38ab99(_0x5f2357, _0x18f633);
            }
        }, [_0x106146, _0x5af079] = _0x3e626f[_0xd1bec2(0x131)](useReducer, _0x35da16, initialState);
    _0x3e626f['gxCJf'](useEffect, () => {
        const _0x487ed6 = _0xd1bec2;
        _0x3e626f[_0x487ed6(0x132)](_0x7b4f8);
    }, []);
    const _0x7b4f8 = async () => {
        const _0xca207f = _0xd1bec2;
        try {
            if (!_0x2557c7) {
                _0x5af079({
                    'type': _0x3e626f['hBCLi'],
                    'data': []
                });
                return;
            }
            const _0x1850fd = getRequestUrl(_0x3e626f[_0xca207f(0x133)]), _0x483b82 = await _0x3e626f[_0xca207f(0x131)](request, _0x1850fd, { 'method': _0x3e626f['dEPjI'] });
            _0x3e626f['IoPcx'](_0x5af079, {
                'type': _0xca207f(0x12d),
                'data': _0x483b82
            });
        } catch (_0x1ef58d) {
            console[_0xca207f(0x134)](_0x1ef58d), _0x3e626f[_0xca207f(0x135)](_0x5af079, { 'type': _0xca207f(0x136) }), strapi[_0xca207f(0x137)]['toggle']({
                'type': _0x3e626f['LlJHA'],
                'message': { 'id': _0x3e626f['pmAyz'] },
                'centered': !![]
            });
        }
    };
    return _0x106146;
};
function _0x333c(_0x31ef09, _0x4a292e) {
    return _0x333c = function (_0x3665a9, _0x4a7ab9) {
        _0x3665a9 = _0x3665a9 - (0x1 * 0x1223 + -0x5ba + 0x98 * -0x13);
        let _0x28d938 = _0x384f[_0x3665a9];
        return _0x28d938;
    }, _0x333c(_0x31ef09, _0x4a292e);
}
export default useAuthProviders;
