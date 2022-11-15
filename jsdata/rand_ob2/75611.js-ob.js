const _0x4120 = [
    'phone',
    'telefone',
    'tags',
    'keys',
    'customFields',
    'forEach',
    'POST',
    'https://www.rdstation.com.br/api/1.3/conversions',
    'error',
    'Error\x20sending\x20lead\x20to\x20RD\x20Station\x20->',
    'add',
    'livechat.closeRoom',
    'priority',
    'MEDIUM',
    'livechat-rd-station-close-room',
    'livechat.saveInfo',
    'livechat-rd-station-save-info',
    '466027uASjpZ',
    '3FAgGhP',
    '1OlRHDE',
    '248001ikYMDx',
    '483175qJAmih',
    '1168600xgszZa',
    '1088370nZkhwc',
    '24347eUDuBF',
    '3WQffNi',
    '2261523lWeYxA',
    'Livechat_RDStation_Token',
    'getLivechatRoomGuestInfo',
    'visitor',
    'email',
    'isArray',
    'address',
    'application/json',
    'get',
    'data',
    'nome',
    'name'
];
const _0x49137a = _0x11b3;
(function (_0x582620, _0xff4278) {
    const _0x10f946 = _0x11b3;
    while (!![]) {
        try {
            const _0x1cd200 = parseInt(_0x10f946(0xa0)) * -parseInt(_0x10f946(0xa1)) + -parseInt(_0x10f946(0xa2)) * -parseInt(_0x10f946(0xa3)) + -parseInt(_0x10f946(0xa4)) + parseInt(_0x10f946(0xa5)) + -parseInt(_0x10f946(0xa6)) + parseInt(_0x10f946(0xa7)) * parseInt(_0x10f946(0xa8)) + parseInt(_0x10f946(0xa9));
            if (_0x1cd200 === _0xff4278)
                break;
            else
                _0x582620['push'](_0x582620['shift']());
        } catch (_0x1078a3) {
            _0x582620['push'](_0x582620['shift']());
        }
    }
}(_0x4120, 0xbece3));
import { HTTP } from 'meteor/http';
import { settings } from '../../../settings';
import { callbacks } from '../../../callbacks';
import { Livechat } from '../lib/Livechat';
function sendToRDStation(_0x520a88) {
    const _0x1c12be = _0x11b3;
    if (!settings['get'](_0x1c12be(0xaa)))
        return _0x520a88;
    const _0x5b7625 = Livechat[_0x1c12be(0xab)](_0x520a88);
    if (!_0x5b7625[_0x1c12be(0xac)][_0x1c12be(0xad)])
        return _0x520a88;
    const _0xec2797 = Array[_0x1c12be(0xae)](_0x5b7625[_0x1c12be(0xac)][_0x1c12be(0xad)]) ? _0x5b7625['visitor']['email'][0x0][_0x1c12be(0xaf)] : _0x5b7625['visitor'][_0x1c12be(0xad)], _0x30edf4 = {
            'headers': { 'Content-Type': _0x1c12be(0xb0) },
            'data': {
                'token_rdstation': settings[_0x1c12be(0xb1)](_0x1c12be(0xaa)),
                'identificador': 'rocketchat-livechat',
                'client_id': _0x5b7625[_0x1c12be(0xac)]['_id'],
                'email': _0xec2797
            }
        };
    _0x30edf4[_0x1c12be(0xb2)][_0x1c12be(0xb3)] = _0x5b7625[_0x1c12be(0xac)][_0x1c12be(0xb4)] || _0x5b7625[_0x1c12be(0xac)]['username'];
    _0x5b7625[_0x1c12be(0xac)][_0x1c12be(0xb5)] && (_0x30edf4[_0x1c12be(0xb2)][_0x1c12be(0xb6)] = _0x5b7625['visitor'][_0x1c12be(0xb5)]);
    _0x5b7625[_0x1c12be(0xb7)] && (_0x30edf4['data'][_0x1c12be(0xb7)] = _0x5b7625['tags']);
    Object[_0x1c12be(0xb8)](_0x5b7625[_0x1c12be(0xb9)] || {})[_0x1c12be(0xba)](_0x15e6c8 => {
        const _0x534028 = _0x1c12be;
        _0x30edf4[_0x534028(0xb2)][_0x15e6c8] = _0x5b7625[_0x534028(0xb9)][_0x15e6c8];
    }), Object['keys'](_0x5b7625[_0x1c12be(0xac)]['customFields'] || {})[_0x1c12be(0xba)](_0x396cdc => {
        const _0x131115 = _0x1c12be;
        _0x30edf4[_0x131115(0xb2)][_0x396cdc] = _0x5b7625['visitor'][_0x131115(0xb9)][_0x396cdc];
    });
    try {
        HTTP['call'](_0x1c12be(0xbb), _0x1c12be(0xbc), _0x30edf4);
    } catch (_0x6fd2ae) {
        console[_0x1c12be(0xbd)](_0x1c12be(0xbe), _0x6fd2ae);
    }
    return _0x520a88;
}
function _0x11b3(_0x4d61d6, _0x21d246) {
    return _0x11b3 = function (_0x4120fc, _0x11b33b) {
        _0x4120fc = _0x4120fc - 0xa0;
        let _0x1b54e6 = _0x4120[_0x4120fc];
        return _0x1b54e6;
    }, _0x11b3(_0x4d61d6, _0x21d246);
}
callbacks[_0x49137a(0xbf)](_0x49137a(0xc0), sendToRDStation, callbacks[_0x49137a(0xc1)][_0x49137a(0xc2)], _0x49137a(0xc3)), callbacks[_0x49137a(0xbf)](_0x49137a(0xc4), sendToRDStation, callbacks[_0x49137a(0xc1)][_0x49137a(0xc2)], _0x49137a(0xc5));
