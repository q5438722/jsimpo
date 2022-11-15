const _0x56b9 = [
    '487659HDTheM',
    '29Takcaf',
    '36833lTbJNj',
    '690298JERXwi',
    'preventDefault',
    'stopPropagation',
    'getData',
    'currentTarget',
    'user',
    'findOne',
    'readOnly',
    '_id',
    'reactWhenReadOnly',
    'open',
    'call',
    'setReaction',
    'attr',
    'hide',
    '.people',
    'get',
    'startup',
    'reaction-message',
    'Add_Reaction',
    'message',
    'threads',
    'private',
    'isLivechatRoom',
    '1452996TjdVtD',
    '525188MzAgeB',
    '1GCiDoX',
    '882817AKDLjG',
    '2qMrlji',
    '407653jaYpgT'
];
const _0x259191 = _0x1a97;
(function (_0x4b9e9a, _0x754bad) {
    const _0x1027a6 = _0x1a97;
    while (!![]) {
        try {
            const _0x1f4994 = -parseInt(_0x1027a6(0x168)) + parseInt(_0x1027a6(0x169)) + parseInt(_0x1027a6(0x16a)) * parseInt(_0x1027a6(0x16b)) + parseInt(_0x1027a6(0x16c)) * parseInt(_0x1027a6(0x16d)) + parseInt(_0x1027a6(0x16e)) + parseInt(_0x1027a6(0x16f)) * -parseInt(_0x1027a6(0x170)) + parseInt(_0x1027a6(0x171));
            if (_0x1f4994 === _0x754bad)
                break;
            else
                _0x4b9e9a['push'](_0x4b9e9a['shift']());
        } catch (_0x1e58ce) {
            _0x4b9e9a['push'](_0x4b9e9a['shift']());
        }
    }
}(_0x56b9, 0xd6df3));
import { Meteor } from 'meteor/meteor';
import { Blaze } from 'meteor/blaze';
import { roomTypes } from '../../utils/client';
function _0x1a97(_0x4a78e5, _0x185541) {
    return _0x1a97 = function (_0x56b9f3, _0x1a975d) {
        _0x56b9f3 = _0x56b9f3 - 0x168;
        let _0x3f2ec6 = _0x56b9[_0x56b9f3];
        return _0x3f2ec6;
    }, _0x1a97(_0x4a78e5, _0x185541);
}
import {
    Rooms,
    Subscriptions
} from '../../models';
import { MessageAction } from '../../ui-utils';
import { messageArgs } from '../../ui-utils/client/lib/messageArgs';
import { EmojiPicker } from '../../emoji';
import { tooltip } from '../../ui/client/components/tooltip';
export const EmojiEvents = {
    'click\x20.add-reaction'(_0xa26244) {
        const _0x1db8b5 = _0x1a97;
        _0xa26244[_0x1db8b5(0x172)](), _0xa26244[_0x1db8b5(0x173)]();
        const _0x4ad382 = Blaze[_0x1db8b5(0x174)](_0xa26244[_0x1db8b5(0x175)]), {
                msg: {
                    rid: _0x84823a,
                    _id: _0x3b17c9,
                    private: _0x421146
                }
            } = messageArgs(_0x4ad382), _0x3bbfa1 = Meteor[_0x1db8b5(0x176)](), _0x1cd67d = Rooms['findOne']({ '_id': _0x84823a });
        if (!_0x1cd67d)
            return ![];
        if (!Subscriptions[_0x1db8b5(0x177)]({ 'rid': _0x84823a }))
            return ![];
        if (_0x421146)
            return ![];
        if (roomTypes[_0x1db8b5(0x178)](_0x1cd67d[_0x1db8b5(0x179)], _0x3bbfa1[_0x1db8b5(0x179)]) && !_0x1cd67d[_0x1db8b5(0x17a)])
            return ![];
        EmojiPicker[_0x1db8b5(0x17b)](_0xa26244[_0x1db8b5(0x175)], _0x3a1b51 => {
            const _0x451abd = _0x1db8b5;
            Meteor[_0x451abd(0x17c)]('setReaction', ':' + _0x3a1b51 + ':', _0x3b17c9);
        });
    },
    'click\x20.reactions\x20>\x20li:not(.add-reaction)'(_0x17cc35) {
        const _0x2bd70b = _0x1a97;
        _0x17cc35[_0x2bd70b(0x172)]();
        const _0x4893f0 = Blaze[_0x2bd70b(0x174)](_0x17cc35[_0x2bd70b(0x175)]), {
                msg: {_id: _0x15ba03}
            } = messageArgs(_0x4893f0);
        Meteor['call'](_0x2bd70b(0x17d), $(_0x17cc35[_0x2bd70b(0x175)])[_0x2bd70b(0x17e)]('data-emoji'), _0x15ba03, () => {
            const _0x1d0220 = _0x2bd70b;
            tooltip[_0x1d0220(0x17f)]();
        });
    },
    'mouseenter\x20.reactions\x20>\x20li:not(.add-reaction)'(_0x4ac5e0) {
        const _0x58abfd = _0x1a97;
        _0x4ac5e0[_0x58abfd(0x173)](), tooltip['showElement']($(_0x4ac5e0[_0x58abfd(0x175)])['find'](_0x58abfd(0x180))[_0x58abfd(0x181)](0x0), _0x4ac5e0[_0x58abfd(0x175)]);
    },
    'mouseleave\x20.reactions\x20>\x20li:not(.add-reaction)'(_0x536f8f) {
        const _0x53f7bd = _0x1a97;
        _0x536f8f[_0x53f7bd(0x173)](), tooltip[_0x53f7bd(0x17f)]();
    }
};
Meteor[_0x259191(0x182)](function () {
    const _0x9cb282 = _0x259191;
    MessageAction['addButton']({
        'id': _0x9cb282(0x183),
        'icon': 'add-reaction',
        'label': _0x9cb282(0x184),
        'context': [
            _0x9cb282(0x185),
            'message-mobile',
            _0x9cb282(0x186)
        ],
        'action'(_0x4fe512) {
            const _0x399e5a = _0x9cb282;
            _0x4fe512[_0x399e5a(0x173)]();
            const {msg: _0x18ca3a} = messageArgs(this);
            EmojiPicker[_0x399e5a(0x17b)](_0x4fe512['currentTarget'], _0xe86cb8 => Meteor['call']('setReaction', ':' + _0xe86cb8 + ':', _0x18ca3a['_id']));
        },
        'condition'({
            msg: _0x27f5af,
            u: _0x3cc7ca,
            room: _0x12e44b,
            subscription: _0x417e55
        }) {
            const _0x221907 = _0x9cb282;
            if (!_0x12e44b)
                return ![];
            if (!_0x417e55)
                return ![];
            if (_0x27f5af[_0x221907(0x187)])
                return ![];
            if (roomTypes[_0x221907(0x178)](_0x12e44b[_0x221907(0x179)], _0x3cc7ca[_0x221907(0x179)]) && !_0x12e44b[_0x221907(0x17a)])
                return ![];
            const _0x2646fe = roomTypes[_0x221907(0x188)](_0x12e44b['t']);
            if (_0x2646fe)
                return ![];
            return !![];
        },
        'order': -0x2,
        'group': [
            _0x9cb282(0x185),
            'menu'
        ]
    });
});
