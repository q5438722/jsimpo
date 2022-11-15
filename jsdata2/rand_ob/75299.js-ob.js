const _0x2f39 = [
    '563806FsWTbW',
    '992715kowqTa',
    '553274WdxJeF',
    '1107378hdHnUm',
    '546693EiiRvd',
    '691504MYWymq',
    '2WaxHxC',
    '1919185bWhgWW',
    'get',
    'Language',
    'Xhava',
    'replace',
    '(\x5c[',
    '\x5c]|__',
    '__)',
    'Site_Url',
    'Site_Name',
    'UBfgB',
    'name',
    'strRightBack',
    'entries',
    'reduce',
    'includes',
    'email_plain_text_only',
    '{{body}}',
    'ovXpH',
    'oAbME',
    'Lvvls',
    'FSWlB',
    'Email_Header',
    'email_style',
    'debounce',
    'qTzso',
    'Email_Footer',
    'rbclJ',
    'MxjJQ',
    'ziTgB',
    'gTzxo',
    'bZkYU',
    '\x20{{body}}\x20',
    'OqkTn',
    'bOQnA',
    'RHKIH',
    'test',
    'cITrb',
    'result',
    'defer',
    'send',
    'Error',
    'LrQYO',
    'hPcRZ'
];
const _0x8a0298 = _0x316a;
function _0x316a(_0x3467b3, _0x337f99) {
    return _0x316a = function (_0x28bfd9, _0x438993) {
        _0x28bfd9 = _0x28bfd9 - (0x1570 + -0x2 * -0x1161 + -0x1 * 0x37c1);
        let _0x2d698d = _0x2f39[_0x28bfd9];
        return _0x2d698d;
    }, _0x316a(_0x3467b3, _0x337f99);
}
(function (_0x5df7b1, _0x216e6e) {
    const _0x22cb4e = _0x316a;
    while (!![]) {
        try {
            const _0x365e57 = -parseInt(_0x22cb4e(0x71)) + -parseInt(_0x22cb4e(0x72)) + -parseInt(_0x22cb4e(0x73)) + -parseInt(_0x22cb4e(0x74)) + -parseInt(_0x22cb4e(0x75)) + parseInt(_0x22cb4e(0x76)) + parseInt(_0x22cb4e(0x77)) * parseInt(_0x22cb4e(0x78));
            if (_0x365e57 === _0x216e6e)
                break;
            else
                _0x5df7b1['push'](_0x5df7b1['shift']());
        } catch (_0x3c2ae3) {
            _0x5df7b1['push'](_0x5df7b1['shift']());
        }
    }
}(_0x2f39, -0x18f * 0x797 + -0x5f61 + 0x17e3f2));
import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { TAPi18n } from 'meteor/rocketchat:tap-i18n';
import _0x5ebc98 from 'underscore';
import _0x1527e5 from 'underscore.string';
import _0x39ba55 from 'juice';
import _0x4ea642 from 'string-strip-html';
import { escapeHTML } from '@rocket.chat/string-helpers';
import { settings } from '../../settings/server';
import { replaceVariables } from './utils.js';
let contentHeader, contentFooter, body, Settings = {
        'get': () => {
        }
    }, lng = 'en';
settings[_0x8a0298(0x79)](_0x8a0298(0x7a), (_0x3fee2d, _0xc15378) => {
    const _0x11d3f3 = _0x8a0298, _0x3886a0 = {
            'Xhava': function (_0x4c71bc, _0x15820d) {
                return _0x4c71bc || _0x15820d;
            }
        };
    lng = _0x3886a0[_0x11d3f3(0x7b)](_0xc15378, 'en');
});
export const replacekey = (_0x202df2, _0x13a814, _0x214096 = '') => _0x202df2[_0x8a0298(0x7c)](new RegExp(_0x8a0298(0x7d) + _0x13a814 + _0x8a0298(0x7e) + _0x13a814 + _0x8a0298(0x7f), 'igm'), _0x214096);
export const translate = _0x4ff295 => replaceVariables(_0x4ff295, (_0x3a35ad, _0x5ceaa8) => TAPi18n['__'](_0x5ceaa8, { 'lng': lng }));
export const replace = function replace(_0xf2c534, _0x5f28e6 = {}) {
    const _0xe8737b = _0x8a0298, _0x2c8c05 = {
            'UBfgB': _0xe8737b(0x80),
            'rjkWT': function (_0x45c3a8, _0x592dc3) {
                return _0x45c3a8(_0x592dc3);
            }
        };
    if (!_0xf2c534)
        return '';
    const _0x4b2512 = {
        'Site_Name': Settings[_0xe8737b(0x79)](_0xe8737b(0x81)),
        'Site_URL': Settings[_0xe8737b(0x79)](_0x2c8c05[_0xe8737b(0x82)]),
        'Site_URL_Slash': Settings['get'](_0x2c8c05[_0xe8737b(0x82)])[_0xe8737b(0x7c)](/\/?$/, '/'),
        ..._0x5f28e6[_0xe8737b(0x83)] && {
            'fname': _0x1527e5['strLeft'](_0x5f28e6[_0xe8737b(0x83)], '\x20'),
            'lname': _0x1527e5[_0xe8737b(0x84)](_0x5f28e6['name'], '\x20')
        },
        ..._0x5f28e6
    };
    return Object[_0xe8737b(0x85)](_0x4b2512)['reduce']((_0x2b8096, [_0xcfc36a, _0x2debe3]) => replacekey(_0x2b8096, _0xcfc36a, _0x2debe3), _0x2c8c05['rjkWT'](translate, _0xf2c534));
};
const nonEscapeKeys = ['room_path'];
export const replaceEscaped = (_0x1b01eb, _0x1dafad = {}) => replace(_0x1b01eb, {
    'Site_Name': escapeHTML(settings[_0x8a0298(0x79)]('Site_Name')),
    'Site_Url': escapeHTML(settings['get'](_0x8a0298(0x80))),
    ...Object[_0x8a0298(0x85)](_0x1dafad)[_0x8a0298(0x86)]((_0x2fc155, [_0x2de106, _0x37cd72]) => {
        const _0xd31c8d = _0x8a0298, _0x46d021 = {
                'BPFxK': function (_0x1decdd, _0x3fa9ba) {
                    return _0x1decdd(_0x3fa9ba);
                }
            };
        return _0x2fc155[_0x2de106] = nonEscapeKeys[_0xd31c8d(0x87)](_0x2de106) ? _0x37cd72 : _0x46d021['BPFxK'](escapeHTML, _0x37cd72), _0x2fc155;
    }, {})
});
export const wrap = (_0x41748b, _0xf6962c = {}) => {
    const _0x32c2b6 = _0x8a0298, _0x45f720 = {
            'qdrmD': _0x32c2b6(0x88),
            'ovXpH': function (_0x3e9aa9, _0x126d7a, _0x41f3af) {
                return _0x3e9aa9(_0x126d7a, _0x41f3af);
            },
            'oAbME': _0x32c2b6(0x89)
        };
    if (settings['get'](_0x45f720['qdrmD']))
        return replace(_0x41748b, _0xf6962c);
    return _0x45f720[_0x32c2b6(0x8a)](replaceEscaped, body['replace'](_0x45f720[_0x32c2b6(0x8b)], _0x41748b), _0xf6962c);
};
export const inlinecss = _0x49581b => _0x39ba55['inlineContent'](_0x49581b, Settings['get']('email_style'));
export const getTemplate = (_0x3b5112, _0x4c6a20, _0x1d179b = !![]) => {
    const _0x34bce6 = {
        'Lvvls': function (_0x28b247, _0x322ddb) {
            return _0x28b247 || _0x322ddb;
        },
        'FSWlB': function (_0x464edd, _0x4defe5) {
            return _0x464edd(_0x4defe5);
        }
    };
    let _0x11e0a1 = '';
    Settings['get'](_0x3b5112, (_0xa9fc5, _0x45e5ec) => {
        const _0x71e351 = _0x316a;
        _0x11e0a1 = _0x34bce6[_0x71e351(0x8c)](_0x45e5ec, ''), _0x4c6a20(_0x1d179b ? inlinecss(_0x11e0a1) : _0x11e0a1);
    }), Settings['get']('email_style', () => {
        const _0x21a7e1 = _0x316a;
        _0x4c6a20(_0x1d179b ? _0x34bce6[_0x21a7e1(0x8d)](inlinecss, _0x11e0a1) : _0x11e0a1);
    });
};
export const getTemplateWrapped = (_0x1e5641, _0x190e7a) => {
    const _0xaf7b62 = _0x8a0298, _0x2def7e = {
            'MxjJQ': function (_0x508ca0) {
                return _0x508ca0();
            },
            'qTzso': _0xaf7b62(0x8e),
            'rbclJ': _0xaf7b62(0x8f)
        };
    let _0x13cc1a = '';
    const _0x10b1c3 = _0x5ebc98[_0xaf7b62(0x90)](() => _0x190e7a(wrap(inlinecss(_0x13cc1a))), -0x1c93 + 0x5b2 + 0x1745);
    Settings[_0xaf7b62(0x79)](_0x2def7e[_0xaf7b62(0x91)], () => _0x13cc1a && _0x10b1c3()), Settings['get'](_0xaf7b62(0x92), () => _0x13cc1a && _0x10b1c3()), Settings[_0xaf7b62(0x79)](_0x2def7e[_0xaf7b62(0x93)], () => _0x13cc1a && _0x10b1c3()), Settings[_0xaf7b62(0x79)](_0x1e5641, (_0x2ebb9e, _0x2638b5) => {
        const _0x5df10c = _0xaf7b62;
        return _0x13cc1a = _0x2638b5 || '', _0x13cc1a && _0x2def7e[_0x5df10c(0x94)](_0x10b1c3);
    });
};
export const setSettings = _0x50c1e4 => {
    const _0x111766 = _0x8a0298, _0x135688 = {
            'gTzxo': function (_0xe15e18, _0xedcb10) {
                return _0xe15e18(_0xedcb10);
            },
            'bZkYU': function (_0x341991, _0x3e5907) {
                return _0x341991 || _0x3e5907;
            },
            'vLjPh': function (_0x5e3545, _0x57c1c1) {
                return _0x5e3545(_0x57c1c1);
            },
            'qGyWW': function (_0x3ceb66, _0x24d0e7) {
                return _0x3ceb66 || _0x24d0e7;
            },
            'RHKIH': function (_0x5b52c1, _0x327674) {
                return _0x5b52c1(_0x327674);
            },
            'ziTgB': _0x111766(0x8e),
            'OqkTn': function (_0x119436, _0x182e9a, _0x537e89, _0x377c7b) {
                return _0x119436(_0x182e9a, _0x537e89, _0x377c7b);
            },
            'bOQnA': _0x111766(0x92),
            'YghNC': function (_0x32aa79, _0x9171e8) {
                return _0x32aa79(_0x9171e8);
            }
        };
    Settings = _0x50c1e4, getTemplate(_0x135688[_0x111766(0x95)], _0x12ae9e => {
        const _0x469af2 = _0x111766;
        contentHeader = _0x135688[_0x469af2(0x96)](replace, _0x135688[_0x469af2(0x97)](_0x12ae9e, '')), body = _0x135688[_0x469af2(0x96)](inlinecss, contentHeader + _0x469af2(0x98) + contentFooter);
    }, ![]), _0x135688[_0x111766(0x99)](getTemplate, _0x135688[_0x111766(0x9a)], _0x48058b => {
        const _0x4777b8 = _0x111766;
        contentFooter = _0x135688['vLjPh'](replace, _0x135688['qGyWW'](_0x48058b, '')), body = _0x135688[_0x4777b8(0x9b)](inlinecss, contentHeader + '\x20{{body}}\x20' + contentFooter);
    }, ![]), body = _0x135688['YghNC'](inlinecss, contentHeader + _0x111766(0x98) + contentFooter);
};
export const rfcMailPatternWithName = /^(?:.*<)?([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)(?:>?)$/;
export const checkAddressFormat = _0x4e799f => rfcMailPatternWithName[_0x8a0298(0x9c)](_0x4e799f);
export const sendNoWrap = ({
    to: _0x597c0d,
    from: _0x4d6456,
    replyTo: _0x2248bf,
    subject: _0x470180,
    html: _0x2dee0d,
    text: _0x40f68c,
    headers: _0x58410d
}) => {
    const _0x45fad8 = _0x8a0298, _0xa49482 = {
            'cITrb': function (_0x2e675c, _0x14a4eb) {
                return _0x2e675c(_0x14a4eb);
            }
        };
    if (!_0xa49482[_0x45fad8(0x9d)](checkAddressFormat, _0x597c0d))
        return;
    !_0x40f68c && (_0x40f68c = _0xa49482[_0x45fad8(0x9d)](_0x4ea642, _0x2dee0d)[_0x45fad8(0x9e)]), settings[_0x45fad8(0x79)](_0x45fad8(0x88)) && (_0x2dee0d = undefined), Meteor[_0x45fad8(0x9f)](() => Email[_0x45fad8(0xa0)]({
        'to': _0x597c0d,
        'from': _0x4d6456,
        'replyTo': _0x2248bf,
        'subject': _0x470180,
        'html': _0x2dee0d,
        'text': _0x40f68c,
        'headers': _0x58410d
    }));
};
export const send = ({
    to: _0x2e312a,
    from: _0x4faede,
    replyTo: _0x13279c,
    subject: _0x2a3369,
    html: _0x386212,
    text: _0x335f61,
    data: _0x49c9c2,
    headers: _0x265347
}) => sendNoWrap({
    'to': _0x2e312a,
    'from': _0x4faede,
    'replyTo': _0x13279c,
    'subject': replace(_0x2a3369, _0x49c9c2),
    'text': _0x335f61 ? replace(_0x335f61, _0x49c9c2) : _0x4ea642(replace(_0x386212, _0x49c9c2))[_0x8a0298(0x9e)],
    'html': wrap(_0x386212, _0x49c9c2),
    'headers': _0x265347
});
export const checkAddressFormatAndThrow = (_0x13981e, _0x48b595) => {
    const _0x5433b7 = _0x8a0298, _0x10ea6e = {
            'LrQYO': 'error-invalid-from-address',
            'hPcRZ': 'Invalid\x20from\x20address'
        };
    if (checkAddressFormat(_0x13981e))
        return !![];
    throw new Meteor[(_0x5433b7(0xa1))](_0x10ea6e[_0x5433b7(0xa2)], _0x10ea6e[_0x5433b7(0xa3)], { 'function': _0x48b595 });
};
export const getHeader = () => contentHeader;
export const getFooter = () => contentFooter;
