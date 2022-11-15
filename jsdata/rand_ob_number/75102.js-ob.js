import { Meteor } from 'meteor/meteor';
import { SyncedCron } from 'meteor/littledata:synced-cron';
import { updateUserTokenpassBalances } from './functions/updateUserTokenpassBalances';
import { Tokenpass } from './Tokenpass';
import {
    Rooms,
    Subscriptions,
    Users
} from '../../models';
import { removeUserFromRoom } from '../../lib/server/functions/removeUserFromRoom';
function removeUsersFromTokenChannels() {
    const _0x4ed605 = {};
    Rooms['findAllTokenChannels']()['forEach'](_0x58c2f0 => {
        _0x4ed605[_0x58c2f0['_id']] = _0x58c2f0['tokenpass'];
    });
    const _0xa7da79 = {};
    Subscriptions['findByRoomIds'](Object['keys'](_0x4ed605))['forEach'](_0x53656e => {
        !_0xa7da79[_0x53656e['u']['_id']] && (_0xa7da79[_0x53656e['u']['_id']] = []), _0xa7da79[_0x53656e['u']['_id']]['push'](_0x53656e['rid']);
    }), Object['keys'](_0xa7da79)['forEach'](_0x232649 => {
        const _0x3ccdc9 = Users['findOneById'](_0x232649);
        if (_0x3ccdc9 && _0x3ccdc9['services'] && _0x3ccdc9['services']['tokenpass']) {
            const _0x4569c1 = updateUserTokenpassBalances(_0x3ccdc9);
            _0xa7da79[_0x232649]['forEach'](_0x43109f => {
                const _0x8bec84 = Tokenpass['validateAccess'](_0x4ed605[_0x43109f], _0x4569c1);
                !_0x8bec84 && removeUserFromRoom(_0x43109f, _0x3ccdc9);
            });
        }
    });
}
Meteor['startup'](function () {
    Meteor['defer'](function () {
        removeUsersFromTokenChannels(), SyncedCron['add']({
            'name': 'Remove\x20users\x20from\x20Token\x20Channels',
            'schedule': _0x3c09c0 => _0x3c09c0['cron']('0\x20*\x20*\x20*\x20*'),
            'job': removeUsersFromTokenChannels
        });
    });
});
