const _0x2b0c = [
    '\x20{{body}}\x20',
    'test',
    'gwAZK',
    'lhuzM',
    'result',
    'CHwlB',
    'defer',
    'error-invalid-from-address',
    'cqGwj',
    'veEGL',
    '1435755EOwcXO',
    '425822hdlgNv',
    '910043ZfBqvm',
    '1428658icbQED',
    '177184CQzGYv',
    '447yWRRtn',
    '3203IrAQjd',
    '10099wDQVOT',
    '109hVStfG',
    'get',
    'Language',
    'NEoSw',
    'replace',
    '__)',
    'igm',
    'Site_Name',
    'YYAly',
    'Site_Url',
    'name',
    'strLeft',
    'strRightBack',
    'entries',
    'room_path',
    'includes',
    'email_plain_text_only',
    'GEOsk',
    'HFsvz',
    'inlineContent',
    'email_style',
    'OSIdY',
    'PeWDF',
    'Email_Header',
    'Email_Footer',
    'debounce',
    'zqRYz',
    'CGJdh',
    'hGzrJ',
    'sBtWY',
    'PtJWc',
    'zqecd',
    'JCWUe',
    'KEbOQ',
    'kJnXR'
];
const _0x453538 = _0x5614;
(function (_0x5d0c8b, _0x57a1e7) {
    const _0xf420cb = _0x5614;
    while (!![]) {
        try {
            const _0x1a8660 = -parseInt(_0xf420cb(0x142)) + parseInt(_0xf420cb(0x143)) + parseInt(_0xf420cb(0x144)) + -parseInt(_0xf420cb(0x145)) + -parseInt(_0xf420cb(0x146)) + parseInt(_0xf420cb(0x147)) * parseInt(_0xf420cb(0x148)) + parseInt(_0xf420cb(0x149)) * parseInt(_0xf420cb(0x14a));
            if (_0x1a8660 === _0x57a1e7)
                break;
            else
                _0x5d0c8b['push'](_0x5d0c8b['shift']());
        } catch (_0x494f8d) {
            _0x5d0c8b['push'](_0x5d0c8b['shift']());
        }
    }
}(_0x2b0c, -0xd2929 + 0x22c87 + -0x1 * -0x179a52));
import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { TAPi18n } from 'meteor/rocketchat:tap-i18n';
import _0x1f8067 from 'underscore';
import _0x17ba5e from 'underscore.string';
import _0x37d481 from 'juice';
import _0x3a3c52 from 'string-strip-html';
import { escapeHTML } from '@rocket.chat/string-helpers';
function _0x5614(_0x10a3ce, _0x5a297a) {
    return _0x5614 = function (_0x1d4613, _0xa5189b) {
        _0x1d4613 = _0x1d4613 - (-0xb4b + 0x16e * 0x1 + 0x3b5 * 0x3);
        let _0x491d7d = _0x2b0c[_0x1d4613];
        return _0x491d7d;
    }, _0x5614(_0x10a3ce, _0x5a297a);
}
import { settings } from '../../settings/server';
import { replaceVariables } from './utils.js';
let contentHeader, contentFooter, body, Settings = {
        'get': () => {
        }
    }, lng = 'en';
settings[_0x453538(0x14b)](_0x453538(0x14c), (_0x20b47b, _0x209b17) => {
    const _0x528ad2 = _0x453538, _0x4c4eb3 = {
            'NEoSw': function (_0x299d51, _0x2c5364) {
                return _0x299d51 || _0x2c5364;
            }
        };
    lng = _0x4c4eb3[_0x528ad2(0x14d)](_0x209b17, 'en');
});
export const replacekey = (_0x34be71, _0x2458ac, _0x1264ea = '') => _0x34be71[_0x453538(0x14e)](new RegExp('(\x5c[' + _0x2458ac + '\x5c]|__' + _0x2458ac + _0x453538(0x14f), _0x453538(0x150)), _0x1264ea);
export const translate = _0x564d46 => replaceVariables(_0x564d46, (_0x60a2c, _0x535237) => TAPi18n['__'](_0x535237, { 'lng': lng }));
export const replace = function replace(_0x112beb, _0x1f50fb = {}) {
    const _0x134bfb = _0x453538, _0x14b854 = { 'YYAly': _0x134bfb(0x151) };
    if (!_0x112beb)
        return '';
    const _0x2a2eaf = {
        'Site_Name': Settings[_0x134bfb(0x14b)](_0x14b854[_0x134bfb(0x152)]),
        'Site_URL': Settings[_0x134bfb(0x14b)](_0x134bfb(0x153)),
        'Site_URL_Slash': Settings[_0x134bfb(0x14b)]('Site_Url')[_0x134bfb(0x14e)](/\/?$/, '/'),
        ..._0x1f50fb[_0x134bfb(0x154)] && {
            'fname': _0x17ba5e[_0x134bfb(0x155)](_0x1f50fb[_0x134bfb(0x154)], '\x20'),
            'lname': _0x17ba5e[_0x134bfb(0x156)](_0x1f50fb[_0x134bfb(0x154)], '\x20')
        },
        ..._0x1f50fb
    };
    return Object[_0x134bfb(0x157)](_0x2a2eaf)['reduce']((_0xf85113, [_0x181862, _0x42b1ea]) => replacekey(_0xf85113, _0x181862, _0x42b1ea), translate(_0x112beb));
};
const nonEscapeKeys = [_0x453538(0x158)];
export const replaceEscaped = (_0x44477d, _0x28cd22 = {}) => replace(_0x44477d, {
    'Site_Name': escapeHTML(settings[_0x453538(0x14b)](_0x453538(0x151))),
    'Site_Url': escapeHTML(settings[_0x453538(0x14b)](_0x453538(0x153))),
    ...Object[_0x453538(0x157)](_0x28cd22)['reduce']((_0x1ba517, [_0x402226, _0x991ecc]) => {
        const _0x40f2d2 = _0x453538, _0x2c508b = {
                'vMEnK': function (_0x1b60c3, _0x104b67) {
                    return _0x1b60c3(_0x104b67);
                }
            };
        return _0x1ba517[_0x402226] = nonEscapeKeys[_0x40f2d2(0x159)](_0x402226) ? _0x991ecc : _0x2c508b['vMEnK'](escapeHTML, _0x991ecc), _0x1ba517;
    }, {})
});
export const wrap = (_0x59d19a, _0x555f1b = {}) => {
    const _0x425bf9 = _0x453538, _0x326dd9 = {
            'GEOsk': function (_0x54ed0c, _0x4d926b, _0x3122b8) {
                return _0x54ed0c(_0x4d926b, _0x3122b8);
            },
            'HFsvz': '{{body}}'
        };
    if (settings[_0x425bf9(0x14b)](_0x425bf9(0x15a)))
        return replace(_0x59d19a, _0x555f1b);
    return _0x326dd9[_0x425bf9(0x15b)](replaceEscaped, body[_0x425bf9(0x14e)](_0x326dd9[_0x425bf9(0x15c)], _0x59d19a), _0x555f1b);
};
export const inlinecss = _0xe325d4 => _0x37d481[_0x453538(0x15d)](_0xe325d4, Settings[_0x453538(0x14b)](_0x453538(0x15e)));
export const getTemplate = (_0x2f1d84, _0x583036, _0x468064 = !![]) => {
    const _0x59aa60 = _0x453538, _0x17a16f = {
            'OSIdY': function (_0xac9bf2, _0x25611d) {
                return _0xac9bf2 || _0x25611d;
            },
            'PeWDF': function (_0x2aa7b5, _0x238ecd) {
                return _0x2aa7b5(_0x238ecd);
            },
            'DxSZR': function (_0x1de5b1, _0x344377) {
                return _0x1de5b1(_0x344377);
            }
        };
    let _0x3e0cc2 = '';
    Settings[_0x59aa60(0x14b)](_0x2f1d84, (_0x5287df, _0x4330fe) => {
        const _0x4624fb = _0x59aa60;
        _0x3e0cc2 = _0x17a16f[_0x4624fb(0x15f)](_0x4330fe, ''), _0x17a16f['PeWDF'](_0x583036, _0x468064 ? _0x17a16f[_0x4624fb(0x160)](inlinecss, _0x3e0cc2) : _0x3e0cc2);
    }), Settings[_0x59aa60(0x14b)](_0x59aa60(0x15e), () => {
        const _0x3573b2 = _0x59aa60;
        _0x17a16f[_0x3573b2(0x160)](_0x583036, _0x468064 ? _0x17a16f['DxSZR'](inlinecss, _0x3e0cc2) : _0x3e0cc2);
    });
};
export const getTemplateWrapped = (_0x1ae507, _0x320f4a) => {
    const _0x3aa89c = _0x453538, _0x11f8ac = {
            'hGzrJ': function (_0x26c4b0, _0x1c00db) {
                return _0x26c4b0 || _0x1c00db;
            },
            'zqRYz': _0x3aa89c(0x161),
            'CGJdh': _0x3aa89c(0x162)
        };
    let _0x39ee85 = '';
    const _0x48ad1a = _0x1f8067[_0x3aa89c(0x163)](() => _0x320f4a(wrap(inlinecss(_0x39ee85))), 0x1 * -0x1b8d + -0x135f + 0x8 * 0x5ea);
    Settings[_0x3aa89c(0x14b)](_0x11f8ac[_0x3aa89c(0x164)], () => _0x39ee85 && _0x48ad1a()), Settings[_0x3aa89c(0x14b)](_0x11f8ac[_0x3aa89c(0x165)], () => _0x39ee85 && _0x48ad1a()), Settings[_0x3aa89c(0x14b)](_0x3aa89c(0x15e), () => _0x39ee85 && _0x48ad1a()), Settings[_0x3aa89c(0x14b)](_0x1ae507, (_0x37d0b9, _0x1ff057) => {
        const _0x86252f = _0x3aa89c;
        return _0x39ee85 = _0x11f8ac[_0x86252f(0x166)](_0x1ff057, ''), _0x39ee85 && _0x48ad1a();
    });
};
export const setSettings = _0x4717bb => {
    const _0x4ebe00 = _0x453538, _0x12390e = {
            'zqecd': function (_0x8f3b2b, _0xef388e) {
                return _0x8f3b2b(_0xef388e);
            },
            'oRLvM': function (_0x102986, _0x5d6b53) {
                return _0x102986 || _0x5d6b53;
            },
            'JCWUe': function (_0x402511, _0x183f0c) {
                return _0x402511(_0x183f0c);
            },
            'kJnXR': function (_0x36a6ab, _0x499843) {
                return _0x36a6ab(_0x499843);
            },
            'sBtWY': function (_0x51d740, _0xcae3a8, _0x52b18e, _0x32c550) {
                return _0x51d740(_0xcae3a8, _0x52b18e, _0x32c550);
            },
            'PtJWc': _0x4ebe00(0x161),
            'KEbOQ': 'Email_Footer'
        };
    Settings = _0x4717bb, _0x12390e[_0x4ebe00(0x167)](getTemplate, _0x12390e[_0x4ebe00(0x168)], _0x52964f => {
        const _0x575d66 = _0x4ebe00;
        contentHeader = _0x12390e[_0x575d66(0x169)](replace, _0x12390e['oRLvM'](_0x52964f, '')), body = _0x12390e[_0x575d66(0x16a)](inlinecss, contentHeader + '\x20{{body}}\x20' + contentFooter);
    }, ![]), getTemplate(_0x12390e[_0x4ebe00(0x16b)], _0x2d8185 => {
        const _0x9b5b42 = _0x4ebe00;
        contentFooter = _0x12390e[_0x9b5b42(0x16c)](replace, _0x2d8185 || ''), body = inlinecss(contentHeader + _0x9b5b42(0x16d) + contentFooter);
    }, ![]), body = _0x12390e[_0x4ebe00(0x16c)](inlinecss, contentHeader + _0x4ebe00(0x16d) + contentFooter);
};
export const rfcMailPatternWithName = /^(?:.*<)?([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)(?:>?)$/;
export const checkAddressFormat = _0xc50c4c => rfcMailPatternWithName[_0x453538(0x16e)](_0xc50c4c);
export const sendNoWrap = ({
    to: _0x204805,
    from: _0x37a667,
    replyTo: _0x27123a,
    subject: _0x2ccd24,
    html: _0x35de70,
    text: _0x54b2b6,
    headers: _0x3f4f8b
}) => {
    const _0x1af643 = _0x453538, _0x12cf20 = {
            'gwAZK': function (_0x561206, _0x294fe2) {
                return _0x561206(_0x294fe2);
            },
            'lhuzM': function (_0x24d7fa, _0x442949) {
                return _0x24d7fa(_0x442949);
            },
            'CHwlB': _0x1af643(0x15a)
        };
    if (!_0x12cf20[_0x1af643(0x16f)](checkAddressFormat, _0x204805))
        return;
    !_0x54b2b6 && (_0x54b2b6 = _0x12cf20[_0x1af643(0x170)](_0x3a3c52, _0x35de70)[_0x1af643(0x171)]), settings['get'](_0x12cf20[_0x1af643(0x172)]) && (_0x35de70 = undefined), Meteor[_0x1af643(0x173)](() => Email['send']({
        'to': _0x204805,
        'from': _0x37a667,
        'replyTo': _0x27123a,
        'subject': _0x2ccd24,
        'html': _0x35de70,
        'text': _0x54b2b6,
        'headers': _0x3f4f8b
    }));
};
export const send = ({
    to: _0x35116a,
    from: _0x21fe67,
    replyTo: _0x2e4a46,
    subject: _0x5c2f8d,
    html: _0x51557e,
    text: _0x5bc6f4,
    data: _0xdc3b02,
    headers: _0xd5e87b
}) => sendNoWrap({
    'to': _0x35116a,
    'from': _0x21fe67,
    'replyTo': _0x2e4a46,
    'subject': replace(_0x5c2f8d, _0xdc3b02),
    'text': _0x5bc6f4 ? replace(_0x5bc6f4, _0xdc3b02) : _0x3a3c52(replace(_0x51557e, _0xdc3b02))['result'],
    'html': wrap(_0x51557e, _0xdc3b02),
    'headers': _0xd5e87b
});
export const checkAddressFormatAndThrow = (_0x27ca73, _0x3bbbe2) => {
    const _0x3d9e8d = _0x453538, _0x500fab = {
            'cqGwj': _0x3d9e8d(0x174),
            'veEGL': 'Invalid\x20from\x20address'
        };
    if (checkAddressFormat(_0x27ca73))
        return !![];
    throw new Meteor['Error'](_0x500fab[_0x3d9e8d(0x175)], _0x500fab[_0x3d9e8d(0x176)], { 'function': _0x3bbbe2 });
};
export const getHeader = () => contentHeader;
export const getFooter = () => contentFooter;
