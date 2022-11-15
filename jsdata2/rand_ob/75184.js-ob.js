const _0x2632 = [
    'add-reaction',
    'message-mobile',
    'threads',
    'menu',
    'addButton',
    'qELjo',
    'Add_Reaction',
    'message',
    'olrJy',
    'MCjJM',
    'GAZtA',
    'open',
    'setReaction',
    'private',
    'isLivechatRoom',
    'NSkYE',
    'KqSlt',
    '470919JoMvQA',
    '280405ekmbbK',
    '415996acjDjC',
    '455232EGgrkO',
    '139090phqKKH',
    '381980hDXslz',
    '564975rwnVLR',
    'getData',
    'currentTarget',
    'lkLBa',
    'user',
    'findOne',
    'readOnly',
    '_id',
    'reactWhenReadOnly',
    'call',
    'data-emoji',
    'preventDefault',
    'LVOxE',
    'mgbmT',
    'quYyL',
    'attr',
    'zTMZV',
    'hide',
    '.people',
    'showElement',
    'brrFR',
    'find',
    'vTjZw',
    'stopPropagation',
    'startup'
];
const _0x5bce18 = _0x59a3;
function _0x59a3(_0x301cb9, _0x74b541) {
    return _0x59a3 = function (_0x1a2796, _0x47fe99) {
        _0x1a2796 = _0x1a2796 - (-0x25d9 + -0x1ff * -0x1 + -0xc71 * -0x3);
        let _0x5090d8 = _0x2632[_0x1a2796];
        return _0x5090d8;
    }, _0x59a3(_0x301cb9, _0x74b541);
}
(function (_0x50d5df, _0x10fda5) {
    const _0x29b423 = _0x59a3;
    while (!![]) {
        try {
            const _0x5548d5 = -parseInt(_0x29b423(0x179)) + parseInt(_0x29b423(0x17a)) + parseInt(_0x29b423(0x17b)) + parseInt(_0x29b423(0x17c)) + -parseInt(_0x29b423(0x17d)) + parseInt(_0x29b423(0x17e)) + -parseInt(_0x29b423(0x17f));
            if (_0x5548d5 === _0x10fda5)
                break;
            else
                _0x50d5df['push'](_0x50d5df['shift']());
        } catch (_0x408ff4) {
            _0x50d5df['push'](_0x50d5df['shift']());
        }
    }
}(_0x2632, -0x470b1 + 0x77398 + 0x275fe));
import { Meteor } from 'meteor/meteor';
import { Blaze } from 'meteor/blaze';
import { roomTypes } from '../../utils/client';
import {
    Rooms,
    Subscriptions
} from '../../models';
import { MessageAction } from '../../ui-utils';
import { messageArgs } from '../../ui-utils/client/lib/messageArgs';
import { EmojiPicker } from '../../emoji';
import { tooltip } from '../../ui/client/components/tooltip';
export const EmojiEvents = {
    'click\x20.add-reaction'(_0x544387) {
        const _0x18031f = _0x59a3, _0x895f7b = {
                'lkLBa': function (_0x571b8c, _0x2696d4) {
                    return _0x571b8c(_0x2696d4);
                }
            };
        _0x544387['preventDefault'](), _0x544387['stopPropagation']();
        const _0x498387 = Blaze[_0x18031f(0x180)](_0x544387[_0x18031f(0x181)]), {
                msg: {
                    rid: _0x159947,
                    _id: _0x24a6c7,
                    private: _0x495f01
                }
            } = _0x895f7b[_0x18031f(0x182)](messageArgs, _0x498387), _0x38352b = Meteor[_0x18031f(0x183)](), _0x383065 = Rooms['findOne']({ '_id': _0x159947 });
        if (!_0x383065)
            return ![];
        if (!Subscriptions[_0x18031f(0x184)]({ 'rid': _0x159947 }))
            return ![];
        if (_0x495f01)
            return ![];
        if (roomTypes[_0x18031f(0x185)](_0x383065[_0x18031f(0x186)], _0x38352b[_0x18031f(0x186)]) && !_0x383065[_0x18031f(0x187)])
            return ![];
        EmojiPicker['open'](_0x544387[_0x18031f(0x181)], _0x385a04 => {
            const _0x11ac29 = _0x18031f;
            Meteor[_0x11ac29(0x188)]('setReaction', ':' + _0x385a04 + ':', _0x24a6c7);
        });
    },
    'click\x20.reactions\x20>\x20li:not(.add-reaction)'(_0x574fff) {
        const _0x34acb8 = _0x59a3, _0x5e4d80 = {
                'LVOxE': function (_0x1b309c, _0x542fde) {
                    return _0x1b309c(_0x542fde);
                },
                'mgbmT': 'setReaction',
                'quYyL': function (_0x35dff1, _0x554ba) {
                    return _0x35dff1(_0x554ba);
                },
                'zTMZV': _0x34acb8(0x189)
            };
        _0x574fff[_0x34acb8(0x18a)]();
        const _0x8d5550 = Blaze[_0x34acb8(0x180)](_0x574fff[_0x34acb8(0x181)]), {
                msg: {_id: _0x5ba7b8}
            } = _0x5e4d80[_0x34acb8(0x18b)](messageArgs, _0x8d5550);
        Meteor['call'](_0x5e4d80[_0x34acb8(0x18c)], _0x5e4d80[_0x34acb8(0x18d)]($, _0x574fff[_0x34acb8(0x181)])[_0x34acb8(0x18e)](_0x5e4d80[_0x34acb8(0x18f)]), _0x5ba7b8, () => {
            const _0x9f3c52 = _0x34acb8;
            tooltip[_0x9f3c52(0x190)]();
        });
    },
    'mouseenter\x20.reactions\x20>\x20li:not(.add-reaction)'(_0x341b5c) {
        const _0x4018da = _0x59a3, _0x11123a = {
                'brrFR': function (_0x2b13f1, _0x34e47a) {
                    return _0x2b13f1(_0x34e47a);
                },
                'vTjZw': _0x4018da(0x191)
            };
        _0x341b5c['stopPropagation'](), tooltip[_0x4018da(0x192)](_0x11123a[_0x4018da(0x193)]($, _0x341b5c[_0x4018da(0x181)])[_0x4018da(0x194)](_0x11123a[_0x4018da(0x195)])['get'](-0x7f0 * 0x2 + 0x8 * 0x32b + -0x978), _0x341b5c['currentTarget']);
    },
    'mouseleave\x20.reactions\x20>\x20li:not(.add-reaction)'(_0x14e0a8) {
        const _0x3299d9 = _0x59a3;
        _0x14e0a8[_0x3299d9(0x196)](), tooltip[_0x3299d9(0x190)]();
    }
};
Meteor[_0x5bce18(0x197)](function () {
    const _0x3e94 = _0x5bce18, _0x5b6675 = {
            'GAZtA': function (_0xd8568b, _0x268c70) {
                return _0xd8568b(_0x268c70);
            },
            'qELjo': _0x3e94(0x198),
            'olrJy': _0x3e94(0x199),
            'MCjJM': _0x3e94(0x19a),
            'NSkYE': 'message',
            'KqSlt': _0x3e94(0x19b)
        };
    MessageAction[_0x3e94(0x19c)]({
        'id': 'reaction-message',
        'icon': _0x5b6675[_0x3e94(0x19d)],
        'label': _0x3e94(0x19e),
        'context': [
            _0x3e94(0x19f),
            _0x5b6675[_0x3e94(0x1a0)],
            _0x5b6675[_0x3e94(0x1a1)]
        ],
        'action'(_0x2bdca5) {
            const _0x117852 = _0x3e94;
            _0x2bdca5[_0x117852(0x196)]();
            const {msg: _0x59ff87} = _0x5b6675[_0x117852(0x1a2)](messageArgs, this);
            EmojiPicker[_0x117852(0x1a3)](_0x2bdca5[_0x117852(0x181)], _0x387688 => Meteor[_0x117852(0x188)](_0x117852(0x1a4), ':' + _0x387688 + ':', _0x59ff87[_0x117852(0x186)]));
        },
        'condition'({
            msg: _0x403045,
            u: _0x45a3b9,
            room: _0x507b75,
            subscription: _0x4915d4
        }) {
            const _0x3c965e = _0x3e94;
            if (!_0x507b75)
                return ![];
            if (!_0x4915d4)
                return ![];
            if (_0x403045[_0x3c965e(0x1a5)])
                return ![];
            if (roomTypes[_0x3c965e(0x185)](_0x507b75['_id'], _0x45a3b9['_id']) && !_0x507b75[_0x3c965e(0x187)])
                return ![];
            const _0x5bf9fb = roomTypes[_0x3c965e(0x1a6)](_0x507b75['t']);
            if (_0x5bf9fb)
                return ![];
            return !![];
        },
        'order': -(0xdee * -0x1 + 0x22c * -0x6 + -0x4 * -0x6be),
        'group': [
            _0x5b6675[_0x3e94(0x1a7)],
            _0x5b6675[_0x3e94(0x1a8)]
        ]
    });
});
