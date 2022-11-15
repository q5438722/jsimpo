const _0x24d0 = [
    'includes',
    'email_plain_text_only',
    'inlineContent',
    'email_style',
    'Email_Header',
    'Email_Footer',
    '\x20{{body}}\x20',
    'test',
    'result',
    'defer',
    'send',
    'Error',
    'Invalid\x20from\x20address',
    '1RYIpZV',
    '421577rJFVhs',
    '231281DLZoAt',
    '17ulJMQB',
    '18449rESQvi',
    '967iqNvac',
    '133xKtFaI',
    '23921noxgPR',
    '9EePmtE',
    '11HEzwGH',
    '13163lefBKC',
    '2ZTLSBH',
    '105610quJKXp',
    'get',
    'Language',
    'replace',
    '__)',
    'igm',
    'Site_Name',
    'Site_Url',
    'name',
    'strLeft',
    'entries',
    'reduce'
];
const _0x5cbc9c = _0x4c8f;
(function (_0x4a1f93, _0x50a08f) {
    const _0x4f2100 = _0x4c8f;
    while (!![]) {
        try {
            const _0x196656 = -parseInt(_0x4f2100(0xa9)) * -parseInt(_0x4f2100(0xaa)) + -parseInt(_0x4f2100(0xab)) + -parseInt(_0x4f2100(0xac)) * -parseInt(_0x4f2100(0xad)) + -parseInt(_0x4f2100(0xae)) * -parseInt(_0x4f2100(0xaf)) + -parseInt(_0x4f2100(0xb0)) * parseInt(_0x4f2100(0xb1)) + parseInt(_0x4f2100(0xb2)) * parseInt(_0x4f2100(0xb3)) + -parseInt(_0x4f2100(0xb4)) * parseInt(_0x4f2100(0xb5));
            if (_0x196656 === _0x50a08f)
                break;
            else
                _0x4a1f93['push'](_0x4a1f93['shift']());
        } catch (_0x1216a2) {
            _0x4a1f93['push'](_0x4a1f93['shift']());
        }
    }
}(_0x24d0, 0x55a68));
import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { TAPi18n } from 'meteor/rocketchat:tap-i18n';
import _0x26a237 from 'underscore';
import _0x254181 from 'underscore.string';
import _0x58f420 from 'juice';
function _0x4c8f(_0x713d75, _0x3723de) {
    return _0x4c8f = function (_0x24d076, _0x4c8f61) {
        _0x24d076 = _0x24d076 - 0xa9;
        let _0x20454a = _0x24d0[_0x24d076];
        return _0x20454a;
    }, _0x4c8f(_0x713d75, _0x3723de);
}
import _0x2813cb from 'string-strip-html';
import { escapeHTML } from '@rocket.chat/string-helpers';
import { settings } from '../../settings/server';
import { replaceVariables } from './utils.js';
let contentHeader, contentFooter, body, Settings = {
        'get': () => {
        }
    }, lng = 'en';
settings[_0x5cbc9c(0xb6)](_0x5cbc9c(0xb7), (_0x24baba, _0x4f0932) => {
    lng = _0x4f0932 || 'en';
});
export const replacekey = (_0x2f28a5, _0x2d04d8, _0x31ee8f = '') => _0x2f28a5[_0x5cbc9c(0xb8)](new RegExp('(\x5c[' + _0x2d04d8 + '\x5c]|__' + _0x2d04d8 + _0x5cbc9c(0xb9), _0x5cbc9c(0xba)), _0x31ee8f);
export const translate = _0x4bdb8b => replaceVariables(_0x4bdb8b, (_0x2f172e, _0x51eeeb) => TAPi18n['__'](_0x51eeeb, { 'lng': lng }));
export const replace = function replace(_0x1be2e8, _0x291bcc = {}) {
    const _0x2f2bed = _0x5cbc9c;
    if (!_0x1be2e8)
        return '';
    const _0x5eb982 = {
        'Site_Name': Settings[_0x2f2bed(0xb6)](_0x2f2bed(0xbb)),
        'Site_URL': Settings[_0x2f2bed(0xb6)](_0x2f2bed(0xbc)),
        'Site_URL_Slash': Settings['get'](_0x2f2bed(0xbc))[_0x2f2bed(0xb8)](/\/?$/, '/'),
        ..._0x291bcc[_0x2f2bed(0xbd)] && {
            'fname': _0x254181[_0x2f2bed(0xbe)](_0x291bcc[_0x2f2bed(0xbd)], '\x20'),
            'lname': _0x254181['strRightBack'](_0x291bcc['name'], '\x20')
        },
        ..._0x291bcc
    };
    return Object[_0x2f2bed(0xbf)](_0x5eb982)['reduce']((_0x1326b4, [_0x26de94, _0x10a409]) => replacekey(_0x1326b4, _0x26de94, _0x10a409), translate(_0x1be2e8));
};
const nonEscapeKeys = ['room_path'];
export const replaceEscaped = (_0x2cf7a7, _0x5af77f = {}) => replace(_0x2cf7a7, {
    'Site_Name': escapeHTML(settings[_0x5cbc9c(0xb6)]('Site_Name')),
    'Site_Url': escapeHTML(settings[_0x5cbc9c(0xb6)](_0x5cbc9c(0xbc))),
    ...Object[_0x5cbc9c(0xbf)](_0x5af77f)[_0x5cbc9c(0xc0)]((_0x2008fd, [_0x4e81cc, _0x234f2a]) => {
        const _0x415cc1 = _0x5cbc9c;
        return _0x2008fd[_0x4e81cc] = nonEscapeKeys[_0x415cc1(0xc1)](_0x4e81cc) ? _0x234f2a : escapeHTML(_0x234f2a), _0x2008fd;
    }, {})
});
export const wrap = (_0x3b398c, _0x333566 = {}) => {
    const _0x225f94 = _0x5cbc9c;
    if (settings[_0x225f94(0xb6)](_0x225f94(0xc2)))
        return replace(_0x3b398c, _0x333566);
    return replaceEscaped(body[_0x225f94(0xb8)]('{{body}}', _0x3b398c), _0x333566);
};
export const inlinecss = _0x4436e9 => _0x58f420[_0x5cbc9c(0xc3)](_0x4436e9, Settings[_0x5cbc9c(0xb6)](_0x5cbc9c(0xc4)));
export const getTemplate = (_0x4769d6, _0x2904ed, _0x3670fc = !![]) => {
    const _0x611f01 = _0x5cbc9c;
    let _0xa136f8 = '';
    Settings[_0x611f01(0xb6)](_0x4769d6, (_0x4b7963, _0x335b1a) => {
        _0xa136f8 = _0x335b1a || '', _0x2904ed(_0x3670fc ? inlinecss(_0xa136f8) : _0xa136f8);
    }), Settings[_0x611f01(0xb6)]('email_style', () => {
        _0x2904ed(_0x3670fc ? inlinecss(_0xa136f8) : _0xa136f8);
    });
};
export const getTemplateWrapped = (_0x22991a, _0x5a984c) => {
    const _0x176057 = _0x5cbc9c;
    let _0xbab5d2 = '';
    const _0x24154f = _0x26a237['debounce'](() => _0x5a984c(wrap(inlinecss(_0xbab5d2))), 0x64);
    Settings[_0x176057(0xb6)](_0x176057(0xc5), () => _0xbab5d2 && _0x24154f()), Settings[_0x176057(0xb6)]('Email_Footer', () => _0xbab5d2 && _0x24154f()), Settings[_0x176057(0xb6)]('email_style', () => _0xbab5d2 && _0x24154f()), Settings[_0x176057(0xb6)](_0x22991a, (_0x36f67a, _0x392ecf) => {
        return _0xbab5d2 = _0x392ecf || '', _0xbab5d2 && _0x24154f();
    });
};
export const setSettings = _0x40e14b => {
    const _0x168f48 = _0x5cbc9c;
    Settings = _0x40e14b, getTemplate(_0x168f48(0xc5), _0x242440 => {
        contentHeader = replace(_0x242440 || ''), body = inlinecss(contentHeader + '\x20{{body}}\x20' + contentFooter);
    }, ![]), getTemplate(_0x168f48(0xc6), _0xff26c1 => {
        const _0x128811 = _0x168f48;
        contentFooter = replace(_0xff26c1 || ''), body = inlinecss(contentHeader + _0x128811(0xc7) + contentFooter);
    }, ![]), body = inlinecss(contentHeader + _0x168f48(0xc7) + contentFooter);
};
export const rfcMailPatternWithName = /^(?:.*<)?([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)(?:>?)$/;
export const checkAddressFormat = _0x44d769 => rfcMailPatternWithName[_0x5cbc9c(0xc8)](_0x44d769);
export const sendNoWrap = ({
    to: _0x2d7c02,
    from: _0x193e49,
    replyTo: _0x18d66e,
    subject: _0x458610,
    html: _0x203760,
    text: _0x387c9d,
    headers: _0x86f767
}) => {
    const _0x3263b0 = _0x5cbc9c;
    if (!checkAddressFormat(_0x2d7c02))
        return;
    !_0x387c9d && (_0x387c9d = _0x2813cb(_0x203760)[_0x3263b0(0xc9)]), settings[_0x3263b0(0xb6)](_0x3263b0(0xc2)) && (_0x203760 = undefined), Meteor[_0x3263b0(0xca)](() => Email[_0x3263b0(0xcb)]({
        'to': _0x2d7c02,
        'from': _0x193e49,
        'replyTo': _0x18d66e,
        'subject': _0x458610,
        'html': _0x203760,
        'text': _0x387c9d,
        'headers': _0x86f767
    }));
};
export const send = ({
    to: _0x1b19b9,
    from: _0x1754e8,
    replyTo: _0x849802,
    subject: _0x48a264,
    html: _0x343bdc,
    text: _0x112cbb,
    data: _0x13937e,
    headers: _0x5c4cca
}) => sendNoWrap({
    'to': _0x1b19b9,
    'from': _0x1754e8,
    'replyTo': _0x849802,
    'subject': replace(_0x48a264, _0x13937e),
    'text': _0x112cbb ? replace(_0x112cbb, _0x13937e) : _0x2813cb(replace(_0x343bdc, _0x13937e))[_0x5cbc9c(0xc9)],
    'html': wrap(_0x343bdc, _0x13937e),
    'headers': _0x5c4cca
});
export const checkAddressFormatAndThrow = (_0x56c708, _0x53d0fa) => {
    const _0x4c376a = _0x5cbc9c;
    if (checkAddressFormat(_0x56c708))
        return !![];
    throw new Meteor[(_0x4c376a(0xcc))]('error-invalid-from-address', _0x4c376a(0xcd), { 'function': _0x53d0fa });
};
export const getHeader = () => contentHeader;
export const getFooter = () => contentFooter;
