var _0x18d0 = [
    '63gvzrVj',
    '109185yUsURY',
    '12244LNOZfs',
    '1XcaTvg',
    'addGroup',
    'Bots',
    'add',
    'BotHelpers_userFields',
    '_id,\x20name,\x20username,\x20emails,\x20language,\x20utcOffset',
    'Helpers',
    '211150tHIzhT',
    '1uYMbuS',
    '10878pmNTao',
    '198047yHrKaa',
    '1qeLLhf',
    '40071cKCwfv',
    '1iKVBGt',
    '785fzugdr'
];
(function (_0x455e87, _0xbbcfd3) {
    var _0x525b1e = _0x30ab;
    while (!![]) {
        try {
            var _0x39bef6 = parseInt(_0x525b1e(0x16d)) + -parseInt(_0x525b1e(0x16e)) * parseInt(_0x525b1e(0x16f)) + parseInt(_0x525b1e(0x170)) * -parseInt(_0x525b1e(0x171)) + -parseInt(_0x525b1e(0x172)) * parseInt(_0x525b1e(0x173)) + -parseInt(_0x525b1e(0x174)) * -parseInt(_0x525b1e(0x175)) + parseInt(_0x525b1e(0x176)) + parseInt(_0x525b1e(0x177)) * parseInt(_0x525b1e(0x178));
            if (_0x39bef6 === _0xbbcfd3)
                break;
            else
                _0x455e87['push'](_0x455e87['shift']());
        } catch (_0x53f648) {
            _0x455e87['push'](_0x455e87['shift']());
        }
    }
}(_0x18d0, 0x207ae));
import { Meteor } from 'meteor/meteor';
function _0x30ab(_0x32fc6b, _0x45e4b4) {
    return _0x30ab = function (_0x18d07e, _0x30abcf) {
        _0x18d07e = _0x18d07e - 0x16d;
        var _0x5a9bec = _0x18d0[_0x18d07e];
        return _0x5a9bec;
    }, _0x30ab(_0x32fc6b, _0x45e4b4);
}
import { settings } from '../../settings';
Meteor['startup'](function () {
    var _0x49495a = _0x30ab;
    settings[_0x49495a(0x179)](_0x49495a(0x17a), function () {
        var _0x288d7b = _0x49495a;
        this[_0x288d7b(0x17b)](_0x288d7b(0x17c), _0x288d7b(0x17d), {
            'type': 'string',
            'section': _0x288d7b(0x17e),
            'i18nLabel': _0x288d7b(0x17c),
            'i18nDescription': 'BotHelpers_userFields_Description'
        });
    });
});
