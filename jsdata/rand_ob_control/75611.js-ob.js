import { HTTP } from 'meteor/http';
import { settings } from '../../../settings';
import { callbacks } from '../../../callbacks';
import { Livechat } from '../lib/Livechat';
function sendToRDStation(_0x199462) {
    const _0x32100e = {
        'uXCZe': 'Livechat_RDStation_Token',
        'foNVC': 'application/json',
        'uTrdw': 'rocketchat-livechat',
        'BpkLg': 'POST',
        'nZWBo': 'https://www.rdstation.com.br/api/1.3/conversions',
        'PdjWg': 'Error\x20sending\x20lead\x20to\x20RD\x20Station\x20->'
    };
    if (!settings['get'](_0x32100e['uXCZe']))
        return _0x199462;
    const _0x5b38c0 = Livechat['getLivechatRoomGuestInfo'](_0x199462);
    if (!_0x5b38c0['visitor']['email'])
        return _0x199462;
    const _0x2c5e25 = Array['isArray'](_0x5b38c0['visitor']['email']) ? _0x5b38c0['visitor']['email'][0x0]['address'] : _0x5b38c0['visitor']['email'], _0x3e7cd6 = {
            'headers': { 'Content-Type': _0x32100e['foNVC'] },
            'data': {
                'token_rdstation': settings['get'](_0x32100e['uXCZe']),
                'identificador': _0x32100e['uTrdw'],
                'client_id': _0x5b38c0['visitor']['_id'],
                'email': _0x2c5e25
            }
        };
    _0x3e7cd6['data']['nome'] = _0x5b38c0['visitor']['name'] || _0x5b38c0['visitor']['username'];
    _0x5b38c0['visitor']['phone'] && (_0x3e7cd6['data']['telefone'] = _0x5b38c0['visitor']['phone']);
    _0x5b38c0['tags'] && (_0x3e7cd6['data']['tags'] = _0x5b38c0['tags']);
    Object['keys'](_0x5b38c0['customFields'] || {})['forEach'](_0x5b5325 => {
        _0x3e7cd6['data'][_0x5b5325] = _0x5b38c0['customFields'][_0x5b5325];
    }), Object['keys'](_0x5b38c0['visitor']['customFields'] || {})['forEach'](_0x519813 => {
        _0x3e7cd6['data'][_0x519813] = _0x5b38c0['visitor']['customFields'][_0x519813];
    });
    try {
        HTTP['call'](_0x32100e['BpkLg'], _0x32100e['nZWBo'], _0x3e7cd6);
    } catch (_0x4297bb) {
        console['error'](_0x32100e['PdjWg'], _0x4297bb);
    }
    return _0x199462;
}
callbacks['add']('livechat.closeRoom', sendToRDStation, callbacks['priority']['MEDIUM'], 'livechat-rd-station-close-room'), callbacks['add']('livechat.saveInfo', sendToRDStation, callbacks['priority']['MEDIUM'], 'livechat-rd-station-save-info');
