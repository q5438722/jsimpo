const _0x3ad6 = [
    'POST',
    'Error\x20sending\x20lead\x20to\x20RD\x20Station\x20->',
    'get',
    'qtqLk',
    'getLivechatRoomGuestInfo',
    'visitor',
    'email',
    'address',
    'data',
    'nome',
    'name',
    'username',
    'telefone',
    'tags',
    'keys',
    'customFields',
    'forEach',
    'call',
    'mOIDY',
    'https://www.rdstation.com.br/api/1.3/conversions',
    'error',
    'VlIbp',
    'livechat.closeRoom',
    'MEDIUM',
    'livechat-rd-station-close-room',
    'add',
    'priority',
    'livechat-rd-station-save-info',
    '4LaenxA',
    '236908vXBdTT',
    '605111RtrrFx',
    '2063SrGZny',
    '427tiraej',
    '150314uGkQvZ',
    '1iwKlFt',
    '593107JeLxae',
    '602278dFfBno',
    '681813BTDnlj',
    '2CrrRVq',
    'Livechat_RDStation_Token',
    'rocketchat-livechat'
];
const _0x27a6d7 = _0x411f;
(function (_0x108f1b, _0x15127d) {
    const _0x53cac0 = _0x411f;
    while (!![]) {
        try {
            const _0x128675 = parseInt(_0x53cac0(0x128)) * -parseInt(_0x53cac0(0x129)) + parseInt(_0x53cac0(0x12a)) + parseInt(_0x53cac0(0x12b)) * parseInt(_0x53cac0(0x12c)) + -parseInt(_0x53cac0(0x12d)) * -parseInt(_0x53cac0(0x12e)) + parseInt(_0x53cac0(0x12f)) + parseInt(_0x53cac0(0x130)) + parseInt(_0x53cac0(0x131)) * -parseInt(_0x53cac0(0x132));
            if (_0x128675 === _0x15127d)
                break;
            else
                _0x108f1b['push'](_0x108f1b['shift']());
        } catch (_0x226e9a) {
            _0x108f1b['push'](_0x108f1b['shift']());
        }
    }
}(_0x3ad6, -0x8bc8b + 0xa9647 * 0x1 + 0x61749));
import { HTTP } from 'meteor/http';
import { settings } from '../../../settings';
import { callbacks } from '../../../callbacks';
function _0x411f(_0x3f2470, _0x271bdf) {
    return _0x411f = function (_0x523314, _0x1c206a) {
        _0x523314 = _0x523314 - (0xb * 0x10f + 0x1 * -0x651 + -0x42c);
        let _0x1e32cc = _0x3ad6[_0x523314];
        return _0x1e32cc;
    }, _0x411f(_0x3f2470, _0x271bdf);
}
import { Livechat } from '../lib/Livechat';
function sendToRDStation(_0x359872) {
    const _0x2ab8ec = _0x411f, _0x5808d9 = {
            'qtqLk': _0x2ab8ec(0x133),
            'AfObB': _0x2ab8ec(0x134),
            'mOIDY': _0x2ab8ec(0x135),
            'VlIbp': _0x2ab8ec(0x136)
        };
    if (!settings[_0x2ab8ec(0x137)](_0x5808d9[_0x2ab8ec(0x138)]))
        return _0x359872;
    const _0x3f8b88 = Livechat[_0x2ab8ec(0x139)](_0x359872);
    if (!_0x3f8b88[_0x2ab8ec(0x13a)][_0x2ab8ec(0x13b)])
        return _0x359872;
    const _0x534bf0 = Array['isArray'](_0x3f8b88[_0x2ab8ec(0x13a)][_0x2ab8ec(0x13b)]) ? _0x3f8b88[_0x2ab8ec(0x13a)][_0x2ab8ec(0x13b)][0x4c0 + -0x1839 * -0x1 + -0x1 * 0x1cf9][_0x2ab8ec(0x13c)] : _0x3f8b88[_0x2ab8ec(0x13a)][_0x2ab8ec(0x13b)], _0x1d95b9 = {
            'headers': { 'Content-Type': 'application/json' },
            'data': {
                'token_rdstation': settings[_0x2ab8ec(0x137)](_0x5808d9['qtqLk']),
                'identificador': _0x5808d9['AfObB'],
                'client_id': _0x3f8b88['visitor']['_id'],
                'email': _0x534bf0
            }
        };
    _0x1d95b9[_0x2ab8ec(0x13d)][_0x2ab8ec(0x13e)] = _0x3f8b88[_0x2ab8ec(0x13a)][_0x2ab8ec(0x13f)] || _0x3f8b88[_0x2ab8ec(0x13a)][_0x2ab8ec(0x140)];
    _0x3f8b88[_0x2ab8ec(0x13a)]['phone'] && (_0x1d95b9[_0x2ab8ec(0x13d)][_0x2ab8ec(0x141)] = _0x3f8b88[_0x2ab8ec(0x13a)]['phone']);
    _0x3f8b88[_0x2ab8ec(0x142)] && (_0x1d95b9['data'][_0x2ab8ec(0x142)] = _0x3f8b88['tags']);
    Object[_0x2ab8ec(0x143)](_0x3f8b88['customFields'] || {})['forEach'](_0x3114ab => {
        const _0x1f81e2 = _0x2ab8ec;
        _0x1d95b9[_0x1f81e2(0x13d)][_0x3114ab] = _0x3f8b88[_0x1f81e2(0x144)][_0x3114ab];
    }), Object[_0x2ab8ec(0x143)](_0x3f8b88[_0x2ab8ec(0x13a)][_0x2ab8ec(0x144)] || {})[_0x2ab8ec(0x145)](_0x114100 => {
        const _0x2c13a8 = _0x2ab8ec;
        _0x1d95b9[_0x2c13a8(0x13d)][_0x114100] = _0x3f8b88[_0x2c13a8(0x13a)][_0x2c13a8(0x144)][_0x114100];
    });
    try {
        HTTP[_0x2ab8ec(0x146)](_0x5808d9[_0x2ab8ec(0x147)], _0x2ab8ec(0x148), _0x1d95b9);
    } catch (_0x59aa11) {
        console[_0x2ab8ec(0x149)](_0x5808d9[_0x2ab8ec(0x14a)], _0x59aa11);
    }
    return _0x359872;
}
callbacks['add'](_0x27a6d7(0x14b), sendToRDStation, callbacks['priority'][_0x27a6d7(0x14c)], _0x27a6d7(0x14d)), callbacks[_0x27a6d7(0x14e)]('livechat.saveInfo', sendToRDStation, callbacks[_0x27a6d7(0x14f)][_0x27a6d7(0x14c)], _0x27a6d7(0x150));
