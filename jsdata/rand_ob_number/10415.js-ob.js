import {
    useReducer,
    useEffect
} from 'react';
import { request } from 'strapi-helper-plugin';
import { getRequestUrl } from '../../../../admin/src/utils';
import _0x4078bf, { initialState } from './reducer';
const useAuthProviders = ({ssoEnabled: _0x4cef89}) => {
    const [_0x1a4950, _0x3795f3] = useReducer(_0x4078bf, initialState);
    useEffect(() => {
        _0x53aa3c();
    }, []);
    const _0x53aa3c = async () => {
        try {
            if (!_0x4cef89) {
                _0x3795f3({
                    'type': 'GET_DATA_SUCCEEDED',
                    'data': []
                });
                return;
            }
            const _0x1dcd8c = getRequestUrl('providers'), _0xf007c4 = await request(_0x1dcd8c, { 'method': 'GET' });
            _0x3795f3({
                'type': 'GET_DATA_SUCCEEDED',
                'data': _0xf007c4
            });
        } catch (_0x1f660a) {
            console['error'](_0x1f660a), _0x3795f3({ 'type': 'GET_DATA_ERROR' }), strapi['notification']['toggle']({
                'type': 'warning',
                'message': { 'id': 'notification.error' },
                'centered': !![]
            });
        }
    };
    return _0x1a4950;
};
export default useAuthProviders;
