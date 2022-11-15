import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Subscriptions } from '../../app/models';
import { hasPermission } from '../../app/authorization';
import { settings } from '../../app/settings';
import { loadMessageHistory } from '../../app/lib/server';
Meteor['methods']({
    'loadHistory'(_0x3932d6, _0x123fee, _0x38662f = 0x1 * -0xffb + -0xd0e * 0x2 + 0x2a2b, _0x1ab78e, _0x11abd8 = !![]) {
        check(_0x3932d6, String);
        if (!Meteor['userId']() && settings['get']('Accounts_AllowAnonymousRead') === ![])
            throw new Meteor['Error']('error-invalid-user', 'Invalid\x20user', { 'method': 'loadHistory' });
        const _0x1e82cd = Meteor['userId'](), _0x2cebdd = Meteor['call']('canAccessRoom', _0x3932d6, _0x1e82cd);
        if (!_0x2cebdd)
            return ![];
        const _0xc2fddc = settings['get']('Accounts_AllowAnonymousRead'), _0x4cd4c8 = hasPermission(_0x1e82cd, 'preview-c-room');
        if (_0x2cebdd['t'] === 'c' && !_0xc2fddc && !_0x4cd4c8 && !Subscriptions['findOneByRoomIdAndUserId'](_0x3932d6, _0x1e82cd, { 'fields': { '_id': 0x1 } }))
            return ![];
        return loadMessageHistory({
            'userId': _0x1e82cd,
            'rid': _0x3932d6,
            'end': _0x123fee,
            'limit': _0x38662f,
            'ls': _0x1ab78e,
            'showThreadMessages': _0x11abd8
        });
    }
});
