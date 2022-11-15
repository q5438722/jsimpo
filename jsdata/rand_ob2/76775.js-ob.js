const _0x2388 = [
    '16681UbKZve',
    '32NzMJxP',
    '1015865jUmztt',
    'methods',
    'userId',
    'get',
    'Accounts_AllowAnonymousRead',
    'Error',
    'error-invalid-user',
    'Invalid\x20user',
    'loadHistory',
    'call',
    'preview-c-room',
    'findOneByRoomIdAndUserId',
    '381477OIowSi',
    '1tjfhTo',
    '1GPDZYs',
    '189062mxDLEK',
    '1222030OmUswB',
    '1RlpLfB',
    '435766zEapNE',
    '362769HxhreS'
];
const _0x9fb84b = _0x3945;
(function (_0x5e585f, _0x3315d8) {
    const _0x12a4c9 = _0x3945;
    while (!![]) {
        try {
            const _0x32c448 = -parseInt(_0x12a4c9(0x11a)) * -parseInt(_0x12a4c9(0x11b)) + parseInt(_0x12a4c9(0x11c)) * parseInt(_0x12a4c9(0x11d)) + -parseInt(_0x12a4c9(0x11e)) + -parseInt(_0x12a4c9(0x11f)) * -parseInt(_0x12a4c9(0x120)) + parseInt(_0x12a4c9(0x121)) + parseInt(_0x12a4c9(0x122)) * -parseInt(_0x12a4c9(0x123)) + parseInt(_0x12a4c9(0x124));
            if (_0x32c448 === _0x3315d8)
                break;
            else
                _0x5e585f['push'](_0x5e585f['shift']());
        } catch (_0x32839b) {
            _0x5e585f['push'](_0x5e585f['shift']());
        }
    }
}(_0x2388, 0x9997d));
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Subscriptions } from '../../app/models';
function _0x3945(_0x76287d, _0x3a1db8) {
    return _0x3945 = function (_0x2388cc, _0x3945d3) {
        _0x2388cc = _0x2388cc - 0x11a;
        let _0x5366a9 = _0x2388[_0x2388cc];
        return _0x5366a9;
    }, _0x3945(_0x76287d, _0x3a1db8);
}
import { hasPermission } from '../../app/authorization';
import { settings } from '../../app/settings';
import { loadMessageHistory } from '../../app/lib/server';
Meteor[_0x9fb84b(0x125)]({
    'loadHistory'(_0x17331d, _0x544f3e, _0xf42af5 = 0x14, _0x4063b0, _0x5eb273 = !![]) {
        const _0x10ab47 = _0x9fb84b;
        check(_0x17331d, String);
        if (!Meteor[_0x10ab47(0x126)]() && settings[_0x10ab47(0x127)](_0x10ab47(0x128)) === ![])
            throw new Meteor[(_0x10ab47(0x129))](_0x10ab47(0x12a), _0x10ab47(0x12b), { 'method': _0x10ab47(0x12c) });
        const _0x259878 = Meteor[_0x10ab47(0x126)](), _0x274fe6 = Meteor[_0x10ab47(0x12d)]('canAccessRoom', _0x17331d, _0x259878);
        if (!_0x274fe6)
            return ![];
        const _0x24028b = settings['get'](_0x10ab47(0x128)), _0x339b4d = hasPermission(_0x259878, _0x10ab47(0x12e));
        if (_0x274fe6['t'] === 'c' && !_0x24028b && !_0x339b4d && !Subscriptions[_0x10ab47(0x12f)](_0x17331d, _0x259878, { 'fields': { '_id': 0x1 } }))
            return ![];
        return loadMessageHistory({
            'userId': _0x259878,
            'rid': _0x17331d,
            'end': _0x544f3e,
            'limit': _0xf42af5,
            'ls': _0x4063b0,
            'showThreadMessages': _0x5eb273
        });
    }
});
