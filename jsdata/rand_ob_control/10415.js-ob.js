import {
    useReducer,
    useEffect
} from 'react';
import { request } from 'strapi-helper-plugin';
import { getRequestUrl } from '../../../../admin/src/utils';
import _0x32ab6e, { initialState } from './reducer';
const useAuthProviders = ({ssoEnabled: _0x38aa35}) => {
    const _0x411278 = {
            'rZkOA': function (_0x4544e0) {
                return _0x4544e0();
            },
            'Mgmgd': function (_0x464c4f, _0x4a882d) {
                return _0x464c4f(_0x4a882d);
            },
            'XOkFa': 'GET_DATA_SUCCEEDED',
            'eSzej': function (_0x5a1040, _0x297d24) {
                return _0x5a1040(_0x297d24);
            },
            'FdwWi': 'providers',
            'hkdGH': function (_0x580b18, _0x9a381c, _0x7ec994) {
                return _0x580b18(_0x9a381c, _0x7ec994);
            },
            'ZLWQL': 'GET',
            'OsrCx': 'GET_DATA_ERROR',
            'zLerI': 'warning',
            'Fspix': 'notification.error'
        }, [_0x159bac, _0x20fa29] = _0x411278['hkdGH'](useReducer, _0x32ab6e, initialState);
    _0x411278['hkdGH'](useEffect, () => {
        _0x411278['rZkOA'](_0x5de1dd);
    }, []);
    const _0x5de1dd = async () => {
        try {
            if (!_0x38aa35) {
                _0x411278['Mgmgd'](_0x20fa29, {
                    'type': _0x411278['XOkFa'],
                    'data': []
                });
                return;
            }
            const _0x43a139 = _0x411278['eSzej'](getRequestUrl, _0x411278['FdwWi']), _0x4b4c22 = await _0x411278['hkdGH'](request, _0x43a139, { 'method': _0x411278['ZLWQL'] });
            _0x411278['eSzej'](_0x20fa29, {
                'type': _0x411278['XOkFa'],
                'data': _0x4b4c22
            });
        } catch (_0x1f3c6e) {
            console['error'](_0x1f3c6e), _0x411278['eSzej'](_0x20fa29, { 'type': _0x411278['OsrCx'] }), strapi['notification']['toggle']({
                'type': _0x411278['zLerI'],
                'message': { 'id': _0x411278['Fspix'] },
                'centered': !![]
            });
        }
    };
    return _0x159bac;
};
export default useAuthProviders;
