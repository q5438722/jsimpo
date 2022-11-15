import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { TAPi18n } from 'meteor/rocketchat:tap-i18n';
import _0x512f96 from 'underscore';
import _0x125301 from 'underscore.string';
import _0x47e082 from 'juice';
import _0x59593a from 'string-strip-html';
import { escapeHTML } from '@rocket.chat/string-helpers';
import { settings } from '../../settings/server';
import { replaceVariables } from './utils.js';
let contentHeader, contentFooter, body, Settings = {
        'get': () => {
        }
    }, lng = 'en';
settings['get']('Language', (_0x47f21c, _0x4f85aa) => {
    lng = _0x4f85aa || 'en';
});
export const replacekey = (_0x401088, _0x3607a9, _0x2b67f7 = '') => _0x401088['replace'](new RegExp('(\x5c[' + _0x3607a9 + '\x5c]|__' + _0x3607a9 + '__)', 'igm'), _0x2b67f7);
export const translate = _0x16d6f6 => replaceVariables(_0x16d6f6, (_0x4cbb0f, _0x389662) => TAPi18n['__'](_0x389662, { 'lng': lng }));
export const replace = function replace(_0x551e80, _0x1a4e25 = {}) {
    if (!_0x551e80)
        return '';
    const _0x3021b7 = {
        'Site_Name': Settings['get']('Site_Name'),
        'Site_URL': Settings['get']('Site_Url'),
        'Site_URL_Slash': Settings['get']('Site_Url')['replace'](/\/?$/, '/'),
        ..._0x1a4e25['name'] && {
            'fname': _0x125301['strLeft'](_0x1a4e25['name'], '\x20'),
            'lname': _0x125301['strRightBack'](_0x1a4e25['name'], '\x20')
        },
        ..._0x1a4e25
    };
    return Object['entries'](_0x3021b7)['reduce']((_0x8264e7, [_0x2e24d9, _0x3111a7]) => replacekey(_0x8264e7, _0x2e24d9, _0x3111a7), translate(_0x551e80));
};
const nonEscapeKeys = ['room_path'];
export const replaceEscaped = (_0x4090d3, _0x2d9084 = {}) => replace(_0x4090d3, {
    'Site_Name': escapeHTML(settings['get']('Site_Name')),
    'Site_Url': escapeHTML(settings['get']('Site_Url')),
    ...Object['entries'](_0x2d9084)['reduce']((_0x12c014, [_0x13fa2b, _0x25aa55]) => {
        return _0x12c014[_0x13fa2b] = nonEscapeKeys['includes'](_0x13fa2b) ? _0x25aa55 : escapeHTML(_0x25aa55), _0x12c014;
    }, {})
});
export const wrap = (_0x58c647, _0x4ad8e6 = {}) => {
    if (settings['get']('email_plain_text_only'))
        return replace(_0x58c647, _0x4ad8e6);
    return replaceEscaped(body['replace']('{{body}}', _0x58c647), _0x4ad8e6);
};
export const inlinecss = _0x3db937 => _0x47e082['inlineContent'](_0x3db937, Settings['get']('email_style'));
export const getTemplate = (_0x1fdf01, _0x4655e8, _0x3cbfb7 = !![]) => {
    let _0x43f71c = '';
    Settings['get'](_0x1fdf01, (_0x4e423c, _0x5ba5ca) => {
        _0x43f71c = _0x5ba5ca || '', _0x4655e8(_0x3cbfb7 ? inlinecss(_0x43f71c) : _0x43f71c);
    }), Settings['get']('email_style', () => {
        _0x4655e8(_0x3cbfb7 ? inlinecss(_0x43f71c) : _0x43f71c);
    });
};
export const getTemplateWrapped = (_0x22e4a1, _0x44dd44) => {
    let _0x489c8f = '';
    const _0x438c85 = _0x512f96['debounce'](() => _0x44dd44(wrap(inlinecss(_0x489c8f))), -0x1 * 0x446 + -0x17ee + 0xb7 * 0x28);
    Settings['get']('Email_Header', () => _0x489c8f && _0x438c85()), Settings['get']('Email_Footer', () => _0x489c8f && _0x438c85()), Settings['get']('email_style', () => _0x489c8f && _0x438c85()), Settings['get'](_0x22e4a1, (_0xe7636b, _0x5b9e49) => {
        return _0x489c8f = _0x5b9e49 || '', _0x489c8f && _0x438c85();
    });
};
export const setSettings = _0x376d38 => {
    Settings = _0x376d38, getTemplate('Email_Header', _0xf06d3e => {
        contentHeader = replace(_0xf06d3e || ''), body = inlinecss(contentHeader + '\x20{{body}}\x20' + contentFooter);
    }, ![]), getTemplate('Email_Footer', _0x4af3c1 => {
        contentFooter = replace(_0x4af3c1 || ''), body = inlinecss(contentHeader + '\x20{{body}}\x20' + contentFooter);
    }, ![]), body = inlinecss(contentHeader + '\x20{{body}}\x20' + contentFooter);
};
export const rfcMailPatternWithName = /^(?:.*<)?([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)(?:>?)$/;
export const checkAddressFormat = _0x5615d4 => rfcMailPatternWithName['test'](_0x5615d4);
export const sendNoWrap = ({
    to: _0x43d36a,
    from: _0x21b9e2,
    replyTo: _0x3ca12c,
    subject: _0x3ccce3,
    html: _0x4c07d9,
    text: _0xcd8d90,
    headers: _0x455716
}) => {
    if (!checkAddressFormat(_0x43d36a))
        return;
    !_0xcd8d90 && (_0xcd8d90 = _0x59593a(_0x4c07d9)['result']), settings['get']('email_plain_text_only') && (_0x4c07d9 = undefined), Meteor['defer'](() => Email['send']({
        'to': _0x43d36a,
        'from': _0x21b9e2,
        'replyTo': _0x3ca12c,
        'subject': _0x3ccce3,
        'html': _0x4c07d9,
        'text': _0xcd8d90,
        'headers': _0x455716
    }));
};
export const send = ({
    to: _0x31caa7,
    from: _0x2d9a96,
    replyTo: _0x10fc03,
    subject: _0xfcc258,
    html: _0x254d05,
    text: _0x1a03e8,
    data: _0x489f99,
    headers: _0xdd3949
}) => sendNoWrap({
    'to': _0x31caa7,
    'from': _0x2d9a96,
    'replyTo': _0x10fc03,
    'subject': replace(_0xfcc258, _0x489f99),
    'text': _0x1a03e8 ? replace(_0x1a03e8, _0x489f99) : _0x59593a(replace(_0x254d05, _0x489f99))['result'],
    'html': wrap(_0x254d05, _0x489f99),
    'headers': _0xdd3949
});
export const checkAddressFormatAndThrow = (_0x184b76, _0x2499c6) => {
    if (checkAddressFormat(_0x184b76))
        return !![];
    throw new Meteor['Error']('error-invalid-from-address', 'Invalid\x20from\x20address', { 'function': _0x2499c6 });
};
export const getHeader = () => contentHeader;
export const getFooter = () => contentFooter;
