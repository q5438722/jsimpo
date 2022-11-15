const _0x62da = ['tags', 'keys', 'customFields', 'VgFAW', 'https://www.rdstation.com.br/api/1.3/conversions', 'error', 'LxoSL', 'add', 'livechat.closeRoom', 'priority', 'MEDIUM', 'livechat-rd-station-save-info', '237sOIbFk', '1756xoURiI', '1007998WMYTwr', '1215782DisUtl', '1287032fNaYRn', '311194MVcbGr', '1ipRLUy', '725255xttEIZ', '4804775uVWvdA', 'rocketchat-livechat', 'Error sending lead to RD Station ->', 'mUmYq', 'getLivechatRoomGuestInfo', 'email', 'visitor', 'address', 'application/json', 'get', 'lmyEU', 'data', 'name', 'username', 'telefone', 'phone'];
const _0x2ba4a6 = _0x16be;

(function (_0x3b410a, _0x4c759e) {
    const _0x56efcc = _0x16be;

    while (true) {
        try {
            const _0x5e8282 = parseInt(_0x56efcc(0xe2)) * parseInt(_0x56efcc(0xe3)) + -parseInt(_0x56efcc(0xe4)) + -parseInt(_0x56efcc(0xe5)) + -parseInt(_0x56efcc(0xe6)) + parseInt(_0x56efcc(0xe7)) * -parseInt(_0x56efcc(0xe8)) + -parseInt(_0x56efcc(0xe9)) + parseInt(_0x56efcc(0xea));

            if (_0x5e8282 === _0x4c759e) break;else _0x3b410a.push(_0x3b410a.shift());
        } catch (_0x558ec2) {
            _0x3b410a.push(_0x3b410a.shift());
        }
    }
})(_0x62da, 673686);
import { HTTP } from 'meteor/http';
import { settings } from '../../../settings';
import { callbacks } from '../../../callbacks';
function _0x16be(_0x2ed75a, _0x163488) {
    return _0x16be = function (_0x146f34, _0x20ff07) {
        _0x146f34 = _0x146f34 - 226;
        const _0x12fbad = _0x62da[_0x146f34];

        return _0x12fbad;
    }, _0x16be(_0x2ed75a, _0x163488);
}
import { Livechat } from '../lib/Livechat';
function sendToRDStation(_0x15c8f6) {
    const _0x37bc43 = _0x16be;
    const _0x3eb39b = {
        'mUmYq': 'Livechat_RDStation_Token',
        'lmyEU': _0x37bc43(0xeb),
        'VgFAW': 'POST',
        'LxoSL': _0x37bc43(0xec)
    };

    if (!settings.get(_0x3eb39b[_0x37bc43(0xed)])) return _0x15c8f6;

    const _0x51a422 = Livechat[_0x37bc43(0xee)](_0x15c8f6);

    if (!_0x51a422.visitor[_0x37bc43(0xef)]) return _0x15c8f6;

    const _0x220712 = Array.isArray(_0x51a422[_0x37bc43(0xf0)][_0x37bc43(0xef)]) ? _0x51a422[_0x37bc43(0xf0)][_0x37bc43(0xef)][0][_0x37bc43(0xf1)] : _0x51a422[_0x37bc43(0xf0)].email;

    const _0x23201d = {
        'headers': { 'Content-Type': _0x37bc43(0xf2) },
        'data': {
            'token_rdstation': settings[_0x37bc43(0xf3)](_0x3eb39b[_0x37bc43(0xed)]),
            'identificador': _0x3eb39b[_0x37bc43(0xf4)],
            'client_id': _0x51a422[_0x37bc43(0xf0)]._id,
            'email': _0x220712
        }
    };

    _0x23201d[_0x37bc43(0xf5)]['nome'] = _0x51a422[_0x37bc43(0xf0)][_0x37bc43(0xf6)] || _0x51a422.visitor[_0x37bc43(0xf7)];
    _0x51a422[_0x37bc43(0xf0)].phone && (_0x23201d.data[_0x37bc43(0xf8)] = _0x51a422[_0x37bc43(0xf0)][_0x37bc43(0xf9)]);
    _0x51a422.tags && (_0x23201d.data[_0x37bc43(0xfa)] = _0x51a422[_0x37bc43(0xfa)]);
    Object[_0x37bc43(0xfb)](_0x51a422.customFields || {}).forEach(_0x244d6a => {
        const _0x4820c1 = _0x37bc43;

        _0x23201d[_0x4820c1(0xf5)][_0x244d6a] = _0x51a422.customFields[_0x244d6a];
    }), Object[_0x37bc43(0xfb)](_0x51a422[_0x37bc43(0xf0)][_0x37bc43(0xfc)] || {}).forEach(_0x593f07 => {
        const _0x519247 = _0x37bc43;

        _0x23201d[_0x519247(0xf5)][_0x593f07] = _0x51a422[_0x519247(0xf0)][_0x519247(0xfc)][_0x593f07];
    });
    try {
        HTTP.call(_0x3eb39b[_0x37bc43(0xfd)], _0x37bc43(0xfe), _0x23201d);
    } catch (_0x158567) {
        console[_0x37bc43(0xff)](_0x3eb39b[_0x37bc43(0x100)], _0x158567);
    }
    return _0x15c8f6;
}
callbacks[_0x2ba4a6(0x101)](_0x2ba4a6(0x102), sendToRDStation, callbacks[_0x2ba4a6(0x103)].MEDIUM, 'livechat-rd-station-close-room'), callbacks[_0x2ba4a6(0x101)]('livechat.saveInfo', sendToRDStation, callbacks.priority[_0x2ba4a6(0x104)], _0x2ba4a6(0x105));
