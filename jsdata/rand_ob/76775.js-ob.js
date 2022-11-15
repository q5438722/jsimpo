const _0x8ad3 = [
    'error-invalid-user',
    'preview-c-room',
    'fDgjB',
    'userId',
    'get',
    'XBDXM',
    'Error',
    'HkYrx',
    'thWbT',
    'EJCLi',
    'call',
    'canAccessRoom',
    'qgBsO',
    '1262400BtyOpO',
    '1esfvKi',
    '1037653qOhCyz',
    '5653EYxIqi',
    '214jxRubM',
    '101607lfOOTA',
    '5uANogX',
    '652064LkEDMh',
    '837834YLPCIi',
    '447821dYAdWp',
    'methods',
    'Accounts_AllowAnonymousRead'
];
const _0x427987 = _0x1a25;
(function (_0x5534aa, _0x142c6b) {
    const _0x2bbee0 = _0x1a25;
    while (!![]) {
        try {
            const _0x18031a = parseInt(_0x2bbee0(0x1ab)) + parseInt(_0x2bbee0(0x1ac)) * parseInt(_0x2bbee0(0x1ad)) + -parseInt(_0x2bbee0(0x1ae)) * parseInt(_0x2bbee0(0x1af)) + -parseInt(_0x2bbee0(0x1b0)) * parseInt(_0x2bbee0(0x1b1)) + parseInt(_0x2bbee0(0x1b2)) + -parseInt(_0x2bbee0(0x1b3)) + parseInt(_0x2bbee0(0x1b4));
            if (_0x18031a === _0x142c6b)
                break;
            else
                _0x5534aa['push'](_0x5534aa['shift']());
        } catch (_0x2e84ce) {
            _0x5534aa['push'](_0x5534aa['shift']());
        }
    }
}(_0x8ad3, 0x1130f9 + -0x69246 * -0x1 + -0xae118));
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
function _0x1a25(_0x46635e, _0x52e37d) {
    return _0x1a25 = function (_0xb44faf, _0x4df051) {
        _0xb44faf = _0xb44faf - (-0x1582 + -0x2646 + 0x1 * 0x3d73);
        let _0xc3839d = _0x8ad3[_0xb44faf];
        return _0xc3839d;
    }, _0x1a25(_0x46635e, _0x52e37d);
}
import { Subscriptions } from '../../app/models';
import { hasPermission } from '../../app/authorization';
import { settings } from '../../app/settings';
import { loadMessageHistory } from '../../app/lib/server';
Meteor[_0x427987(0x1b5)]({
    'loadHistory'(_0x3718b4, _0x40ab4f, _0x1c3563 = -0x7a2 * -0x5 + -0x4d9 + 0x43 * -0x7f, _0xf5667c, _0x31c67f = !![]) {
        const _0x5a4790 = _0x427987, _0x3b4360 = {
                'fDgjB': function (_0x452269, _0x5752de, _0x47664f) {
                    return _0x452269(_0x5752de, _0x47664f);
                },
                'kvweO': function (_0x3b16b, _0x4d3477) {
                    return _0x3b16b === _0x4d3477;
                },
                'XBDXM': _0x5a4790(0x1b6),
                'HkYrx': _0x5a4790(0x1b7),
                'thWbT': 'Invalid\x20user',
                'EJCLi': 'loadHistory',
                'qgBsO': function (_0x20b347, _0x4d0935, _0x319b8a) {
                    return _0x20b347(_0x4d0935, _0x319b8a);
                },
                'jqwuu': _0x5a4790(0x1b8)
            };
        _0x3b4360[_0x5a4790(0x1b9)](check, _0x3718b4, String);
        if (!Meteor[_0x5a4790(0x1ba)]() && _0x3b4360['kvweO'](settings[_0x5a4790(0x1bb)](_0x3b4360[_0x5a4790(0x1bc)]), ![]))
            throw new Meteor[(_0x5a4790(0x1bd))](_0x3b4360[_0x5a4790(0x1be)], _0x3b4360[_0x5a4790(0x1bf)], { 'method': _0x3b4360[_0x5a4790(0x1c0)] });
        const _0x4f8b6c = Meteor['userId'](), _0x501aef = Meteor[_0x5a4790(0x1c1)](_0x5a4790(0x1c2), _0x3718b4, _0x4f8b6c);
        if (!_0x501aef)
            return ![];
        const _0x2e2baa = settings['get'](_0x3b4360[_0x5a4790(0x1bc)]), _0x257569 = _0x3b4360[_0x5a4790(0x1c3)](hasPermission, _0x4f8b6c, _0x3b4360['jqwuu']);
        if (_0x501aef['t'] === 'c' && !_0x2e2baa && !_0x257569 && !Subscriptions['findOneByRoomIdAndUserId'](_0x3718b4, _0x4f8b6c, { 'fields': { '_id': 0x1 } }))
            return ![];
        return loadMessageHistory({
            'userId': _0x4f8b6c,
            'rid': _0x3718b4,
            'end': _0x40ab4f,
            'limit': _0x1c3563,
            'ls': _0xf5667c,
            'showThreadMessages': _0x31c67f
        });
    }
});
