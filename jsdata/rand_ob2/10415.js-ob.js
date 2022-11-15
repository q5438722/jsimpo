const _0xbf64 = [
    'GET',
    'error',
    'GET_DATA_ERROR',
    'notification',
    'toggle',
    'notification.error',
    '897633FEQShq',
    '89sqiGXA',
    '13507vviHSJ',
    '241uEzjUz',
    '587AJubtn',
    '875967nWsYtS',
    '1173427nZlfKi',
    '34kKKPEM',
    '15878waXuvW',
    '2129852AtgZlQ'
];
(function (_0x4bcb0f, _0x5e4a2e) {
    const _0x47f40e = _0x38c2;
    while (!![]) {
        try {
            const _0x8bdcbd = -parseInt(_0x47f40e(0x1a3)) + parseInt(_0x47f40e(0x1a4)) * parseInt(_0x47f40e(0x1a5)) + -parseInt(_0x47f40e(0x1a6)) * parseInt(_0x47f40e(0x1a7)) + -parseInt(_0x47f40e(0x1a8)) + -parseInt(_0x47f40e(0x1a9)) + parseInt(_0x47f40e(0x1aa)) * parseInt(_0x47f40e(0x1ab)) + parseInt(_0x47f40e(0x1ac));
            if (_0x8bdcbd === _0x5e4a2e)
                break;
            else
                _0x4bcb0f['push'](_0x4bcb0f['shift']());
        } catch (_0x358955) {
            _0x4bcb0f['push'](_0x4bcb0f['shift']());
        }
    }
}(_0xbf64, 0xbf3e5));
import {
    useReducer,
    useEffect
} from 'react';
function _0x38c2(_0x1bbcb9, _0x1094a8) {
    return _0x38c2 = function (_0xbf64b7, _0x38c236) {
        _0xbf64b7 = _0xbf64b7 - 0x1a3;
        let _0x1834a9 = _0xbf64[_0xbf64b7];
        return _0x1834a9;
    }, _0x38c2(_0x1bbcb9, _0x1094a8);
}
import { request } from 'strapi-helper-plugin';
import { getRequestUrl } from '../../../../admin/src/utils';
import _0x4e4dde, { initialState } from './reducer';
const useAuthProviders = ({ssoEnabled: _0x3ded14}) => {
    const [_0x397c75, _0x23e62b] = useReducer(_0x4e4dde, initialState);
    useEffect(() => {
        _0x1f3c8f();
    }, []);
    const _0x1f3c8f = async () => {
        const _0x4fc3db = _0x38c2;
        try {
            if (!_0x3ded14) {
                _0x23e62b({
                    'type': 'GET_DATA_SUCCEEDED',
                    'data': []
                });
                return;
            }
            const _0x460556 = getRequestUrl('providers'), _0x36a2cc = await request(_0x460556, { 'method': _0x4fc3db(0x1ad) });
            _0x23e62b({
                'type': 'GET_DATA_SUCCEEDED',
                'data': _0x36a2cc
            });
        } catch (_0x23c99f) {
            console[_0x4fc3db(0x1ae)](_0x23c99f), _0x23e62b({ 'type': _0x4fc3db(0x1af) }), strapi[_0x4fc3db(0x1b0)][_0x4fc3db(0x1b1)]({
                'type': 'warning',
                'message': { 'id': _0x4fc3db(0x1b2) },
                'centered': !![]
            });
        }
    };
    return _0x397c75;
};
export default useAuthProviders;
