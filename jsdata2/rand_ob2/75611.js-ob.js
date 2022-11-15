const _0x3bc0 = [
    'phone',
    'data',
    'telefone',
    'tags',
    'keys',
    'customFields',
    'forEach',
    'POST',
    'https://www.rdstation.com.br/api/1.3/conversions',
    'error',
    'Error\x20sending\x20lead\x20to\x20RD\x20Station\x20->',
    'priority',
    'MEDIUM',
    'livechat-rd-station-close-room',
    'add',
    'livechat.saveInfo',
    '1744332jAVioE',
    '393509wxDHQB',
    '488132iPbCkq',
    '1837834tOlBUg',
    '149826RIXrXo',
    '1247460xCyIjR',
    '32fpAXHm',
    '10616nRIJxa',
    'get',
    'Livechat_RDStation_Token',
    'getLivechatRoomGuestInfo',
    'visitor',
    'email',
    'address',
    'application/json',
    'rocketchat-livechat',
    '_id',
    'nome'
];
const _0x430de7 = _0x2eb9;
(function (_0x1f46e7, _0x5db03d) {
    const _0x107100 = _0x2eb9;
    while (!![]) {
        try {
            const _0x258aaf = -parseInt(_0x107100(0x17a)) + -parseInt(_0x107100(0x17b)) + -parseInt(_0x107100(0x17c)) + parseInt(_0x107100(0x17d)) + parseInt(_0x107100(0x17e)) + parseInt(_0x107100(0x17f)) + parseInt(_0x107100(0x180)) * parseInt(_0x107100(0x181));
            if (_0x258aaf === _0x5db03d)
                break;
            else
                _0x1f46e7['push'](_0x1f46e7['shift']());
        } catch (_0x51bae2) {
            _0x1f46e7['push'](_0x1f46e7['shift']());
        }
    }
}(_0x3bc0, 0xe7a7b));
function _0x2eb9(_0x7f8a45, _0x51ea03) {
    return _0x2eb9 = function (_0x3bc042, _0x2eb94d) {
        _0x3bc042 = _0x3bc042 - 0x17a;
        let _0x361952 = _0x3bc0[_0x3bc042];
        return _0x361952;
    }, _0x2eb9(_0x7f8a45, _0x51ea03);
}
import { HTTP } from 'meteor/http';
import { settings } from '../../../settings';
import { callbacks } from '../../../callbacks';
import { Livechat } from '../lib/Livechat';
function sendToRDStation(_0x34a347) {
    const _0x1dda67 = _0x2eb9;
    if (!settings[_0x1dda67(0x182)](_0x1dda67(0x183)))
        return _0x34a347;
    const _0x5bc05b = Livechat[_0x1dda67(0x184)](_0x34a347);
    if (!_0x5bc05b[_0x1dda67(0x185)][_0x1dda67(0x186)])
        return _0x34a347;
    const _0x3419a0 = Array['isArray'](_0x5bc05b[_0x1dda67(0x185)][_0x1dda67(0x186)]) ? _0x5bc05b[_0x1dda67(0x185)]['email'][0x0][_0x1dda67(0x187)] : _0x5bc05b[_0x1dda67(0x185)][_0x1dda67(0x186)], _0x1966a6 = {
            'headers': { 'Content-Type': _0x1dda67(0x188) },
            'data': {
                'token_rdstation': settings[_0x1dda67(0x182)](_0x1dda67(0x183)),
                'identificador': _0x1dda67(0x189),
                'client_id': _0x5bc05b[_0x1dda67(0x185)][_0x1dda67(0x18a)],
                'email': _0x3419a0
            }
        };
    _0x1966a6['data'][_0x1dda67(0x18b)] = _0x5bc05b[_0x1dda67(0x185)]['name'] || _0x5bc05b['visitor']['username'];
    _0x5bc05b[_0x1dda67(0x185)][_0x1dda67(0x18c)] && (_0x1966a6[_0x1dda67(0x18d)][_0x1dda67(0x18e)] = _0x5bc05b[_0x1dda67(0x185)]['phone']);
    _0x5bc05b[_0x1dda67(0x18f)] && (_0x1966a6[_0x1dda67(0x18d)]['tags'] = _0x5bc05b[_0x1dda67(0x18f)]);
    Object[_0x1dda67(0x190)](_0x5bc05b[_0x1dda67(0x191)] || {})[_0x1dda67(0x192)](_0xe72476 => {
        const _0x2d5e1f = _0x1dda67;
        _0x1966a6[_0x2d5e1f(0x18d)][_0xe72476] = _0x5bc05b[_0x2d5e1f(0x191)][_0xe72476];
    }), Object['keys'](_0x5bc05b[_0x1dda67(0x185)]['customFields'] || {})[_0x1dda67(0x192)](_0x3a8dcd => {
        const _0x52b408 = _0x1dda67;
        _0x1966a6[_0x52b408(0x18d)][_0x3a8dcd] = _0x5bc05b[_0x52b408(0x185)]['customFields'][_0x3a8dcd];
    });
    try {
        HTTP['call'](_0x1dda67(0x193), _0x1dda67(0x194), _0x1966a6);
    } catch (_0x103b98) {
        console[_0x1dda67(0x195)](_0x1dda67(0x196), _0x103b98);
    }
    return _0x34a347;
}
callbacks['add']('livechat.closeRoom', sendToRDStation, callbacks[_0x430de7(0x197)][_0x430de7(0x198)], _0x430de7(0x199)), callbacks[_0x430de7(0x19a)](_0x430de7(0x19b), sendToRDStation, callbacks['priority'][_0x430de7(0x198)], 'livechat-rd-station-save-info');
