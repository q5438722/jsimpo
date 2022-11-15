import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Subscriptions } from '../../app/models';
import { hasPermission } from '../../app/authorization';
import { settings } from '../../app/settings';
import { loadMessageHistory } from '../../app/lib/server';
Meteor['methods']({
    'loadHistory'(_0x17d1ab, _0x479fda, _0x5ccb66 = 0x14, _0x1374bd, _0x26dbff = !![]) {
        const _0x5e74a8 = {
            'qxdhM': function (_0x5b7c6d, _0x2a3d50, _0x17c842) {
                return _0x5b7c6d(_0x2a3d50, _0x17c842);
            },
            'oSwXK': function (_0x1ec016, _0x19fb54) {
                return _0x1ec016 === _0x19fb54;
            },
            'Vfitz': 'Accounts_AllowAnonymousRead',
            'qgyRX': 'error-invalid-user',
            'nnLBE': 'Invalid\x20user',
            'ycSze': 'loadHistory',
            'pYNXu': 'canAccessRoom',
            'mmmdl': function (_0x2762d6, _0x11b9cc, _0x43bab2) {
                return _0x2762d6(_0x11b9cc, _0x43bab2);
            },
            'laWDf': 'preview-c-room',
            'kpLkq': function (_0x11ff2a, _0x37c10c) {
                return _0x11ff2a === _0x37c10c;
            },
            'fdXle': function (_0x5bd37c, _0x2f2d55) {
                return _0x5bd37c(_0x2f2d55);
            }
        };
        _0x5e74a8['qxdhM'](check, _0x17d1ab, String);
        if (!Meteor['userId']() && _0x5e74a8['oSwXK'](settings['get'](_0x5e74a8['Vfitz']), ![]))
            throw new Meteor['Error'](_0x5e74a8['qgyRX'], _0x5e74a8['nnLBE'], { 'method': _0x5e74a8['ycSze'] });
        const _0x5036b2 = Meteor['userId'](), _0x5a27dd = Meteor['call'](_0x5e74a8['pYNXu'], _0x17d1ab, _0x5036b2);
        if (!_0x5a27dd)
            return ![];
        const _0x5e5295 = settings['get'](_0x5e74a8['Vfitz']), _0x26fec3 = _0x5e74a8['mmmdl'](hasPermission, _0x5036b2, _0x5e74a8['laWDf']);
        if (_0x5e74a8['kpLkq'](_0x5a27dd['t'], 'c') && !_0x5e5295 && !_0x26fec3 && !Subscriptions['findOneByRoomIdAndUserId'](_0x17d1ab, _0x5036b2, { 'fields': { '_id': 0x1 } }))
            return ![];
        return _0x5e74a8['fdXle'](loadMessageHistory, {
            'userId': _0x5036b2,
            'rid': _0x17d1ab,
            'end': _0x479fda,
            'limit': _0x5ccb66,
            'ls': _0x1374bd,
            'showThreadMessages': _0x26dbff
        });
    }
});
