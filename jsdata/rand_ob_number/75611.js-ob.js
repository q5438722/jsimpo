import { HTTP } from 'meteor/http';
import { settings } from '../../../settings';
import { callbacks } from '../../../callbacks';
import { Livechat } from '../lib/Livechat';
function sendToRDStation(_0x5858dd) {
    if (!settings['get']('Livechat_RDStation_Token'))
        return _0x5858dd;
    const _0x392959 = Livechat['getLivechatRoomGuestInfo'](_0x5858dd);
    if (!_0x392959['visitor']['email'])
        return _0x5858dd;
    const _0x3d0d6e = Array['isArray'](_0x392959['visitor']['email']) ? _0x392959['visitor']['email'][0x1 * -0x295 + 0x2290 + -0x1ffb * 0x1]['address'] : _0x392959['visitor']['email'], _0x21524a = {
            'headers': { 'Content-Type': 'application/json' },
            'data': {
                'token_rdstation': settings['get']('Livechat_RDStation_Token'),
                'identificador': 'rocketchat-livechat',
                'client_id': _0x392959['visitor']['_id'],
                'email': _0x3d0d6e
            }
        };
    _0x21524a['data']['nome'] = _0x392959['visitor']['name'] || _0x392959['visitor']['username'];
    _0x392959['visitor']['phone'] && (_0x21524a['data']['telefone'] = _0x392959['visitor']['phone']);
    _0x392959['tags'] && (_0x21524a['data']['tags'] = _0x392959['tags']);
    Object['keys'](_0x392959['customFields'] || {})['forEach'](_0x59e29b => {
        _0x21524a['data'][_0x59e29b] = _0x392959['customFields'][_0x59e29b];
    }), Object['keys'](_0x392959['visitor']['customFields'] || {})['forEach'](_0x181e9a => {
        _0x21524a['data'][_0x181e9a] = _0x392959['visitor']['customFields'][_0x181e9a];
    });
    try {
        HTTP['call']('POST', 'https://www.rdstation.com.br/api/1.3/conversions', _0x21524a);
    } catch (_0x5ddca7) {
        console['error']('Error\x20sending\x20lead\x20to\x20RD\x20Station\x20->', _0x5ddca7);
    }
    return _0x5858dd;
}
callbacks['add']('livechat.closeRoom', sendToRDStation, callbacks['priority']['MEDIUM'], 'livechat-rd-station-close-room'), callbacks['add']('livechat.saveInfo', sendToRDStation, callbacks['priority']['MEDIUM'], 'livechat-rd-station-save-info');
