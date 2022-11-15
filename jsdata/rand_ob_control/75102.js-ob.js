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
    const _0xf33184 = {
            'zqIjT': function (_0x2d15c3, _0x55a51a, _0x42c800) {
                return _0x2d15c3(_0x55a51a, _0x42c800);
            },
            'dnfPX': function (_0x177391, _0x5cd0c6) {
                return _0x177391(_0x5cd0c6);
            }
        }, _0x3c1cfc = {};
    Rooms['findAllTokenChannels']()['forEach'](_0x1d8864 => {
        _0x3c1cfc[_0x1d8864['_id']] = _0x1d8864['tokenpass'];
    });
    const _0x3fbd = {};
    Subscriptions['findByRoomIds'](Object['keys'](_0x3c1cfc))['forEach'](_0x2e4a30 => {
        !_0x3fbd[_0x2e4a30['u']['_id']] && (_0x3fbd[_0x2e4a30['u']['_id']] = []), _0x3fbd[_0x2e4a30['u']['_id']]['push'](_0x2e4a30['rid']);
    }), Object['keys'](_0x3fbd)['forEach'](_0x447726 => {
        const _0x308ce8 = Users['findOneById'](_0x447726);
        if (_0x308ce8 && _0x308ce8['services'] && _0x308ce8['services']['tokenpass']) {
            const _0x4ca450 = _0xf33184['dnfPX'](updateUserTokenpassBalances, _0x308ce8);
            _0x3fbd[_0x447726]['forEach'](_0x2367fc => {
                const _0x40ec83 = Tokenpass['validateAccess'](_0x3c1cfc[_0x2367fc], _0x4ca450);
                !_0x40ec83 && _0xf33184['zqIjT'](removeUserFromRoom, _0x2367fc, _0x308ce8);
            });
        }
    });
}
Meteor['startup'](function () {
    const _0x572b1c = {
        'RXlTq': function (_0x522bb6) {
            return _0x522bb6();
        },
        'QfCUk': 'Remove\x20users\x20from\x20Token\x20Channels'
    };
    Meteor['defer'](function () {
        _0x572b1c['RXlTq'](removeUsersFromTokenChannels), SyncedCron['add']({
            'name': _0x572b1c['QfCUk'],
            'schedule': _0x290c23 => _0x290c23['cron']('0\x20*\x20*\x20*\x20*'),
            'job': removeUsersFromTokenChannels
        });
    });
});
