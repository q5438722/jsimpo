const _0x54f3 = [
    '{{body}}',
    'email_style',
    'Email_Header',
    'Email_Footer',
    '\x20{{body}}\x20',
    'test',
    'defer',
    'send',
    'result',
    'Error',
    'error-invalid-from-address',
    '2GaLJVJ',
    '548426pkujkO',
    '89546EVySHr',
    '4135pgDIfM',
    '131AEkVJZ',
    '2DbMywf',
    '111191eDkXAH',
    '2CTckKb',
    '56723gSHhtq',
    '1635764NdTTmD',
    '1502666rCvCKd',
    'get',
    'Language',
    'replace',
    '(\x5c[',
    '__)',
    'igm',
    'Site_Name',
    'Site_Url',
    'name',
    'strLeft',
    'entries',
    'reduce',
    'room_path',
    'includes',
    'email_plain_text_only'
];
const _0x4b73c1 = _0x3b7f;
(function (_0x6bc3f1, _0x55182c) {
    const _0x45c532 = _0x3b7f;
    while (!![]) {
        try {
            const _0x332a86 = parseInt(_0x45c532(0xb2)) * parseInt(_0x45c532(0xb3)) + -parseInt(_0x45c532(0xb4)) + -parseInt(_0x45c532(0xb5)) * parseInt(_0x45c532(0xb6)) + parseInt(_0x45c532(0xb7)) * parseInt(_0x45c532(0xb8)) + parseInt(_0x45c532(0xb9)) * parseInt(_0x45c532(0xba)) + parseInt(_0x45c532(0xbb)) + -parseInt(_0x45c532(0xbc));
            if (_0x332a86 === _0x55182c)
                break;
            else
                _0x6bc3f1['push'](_0x6bc3f1['shift']());
        } catch (_0x5ea4c8) {
            _0x6bc3f1['push'](_0x6bc3f1['shift']());
        }
    }
}(_0x54f3, 0xe4293));
import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { TAPi18n } from 'meteor/rocketchat:tap-i18n';
import _0x38cd38 from 'underscore';
import _0x484f58 from 'underscore.string';
import _0x76ce19 from 'juice';
import _0x53d5b7 from 'string-strip-html';
import { escapeHTML } from '@rocket.chat/string-helpers';
import { settings } from '../../settings/server';
import { replaceVariables } from './utils.js';
let contentHeader, contentFooter, body, Settings = {
        'get': () => {
        }
    }, lng = 'en';
settings[_0x4b73c1(0xbd)](_0x4b73c1(0xbe), (_0x36cfa3, _0x3e6700) => {
    lng = _0x3e6700 || 'en';
});
export const replacekey = (_0x87f8f5, _0x5d6a5b, _0x487a8a = '') => _0x87f8f5[_0x4b73c1(0xbf)](new RegExp(_0x4b73c1(0xc0) + _0x5d6a5b + '\x5c]|__' + _0x5d6a5b + _0x4b73c1(0xc1), _0x4b73c1(0xc2)), _0x487a8a);
export const translate = _0x30b61c => replaceVariables(_0x30b61c, (_0x2e4528, _0x24e4df) => TAPi18n['__'](_0x24e4df, { 'lng': lng }));
function _0x3b7f(_0x5b0ad5, _0x57aa3d) {
    return _0x3b7f = function (_0x54f370, _0x3b7f33) {
        _0x54f370 = _0x54f370 - 0xb2;
        let _0xcf50ec = _0x54f3[_0x54f370];
        return _0xcf50ec;
    }, _0x3b7f(_0x5b0ad5, _0x57aa3d);
}
export const replace = function replace(_0x5f2afc, _0x59e891 = {}) {
    const _0x1b2a44 = _0x4b73c1;
    if (!_0x5f2afc)
        return '';
    const _0x4adde8 = {
        'Site_Name': Settings[_0x1b2a44(0xbd)](_0x1b2a44(0xc3)),
        'Site_URL': Settings[_0x1b2a44(0xbd)](_0x1b2a44(0xc4)),
        'Site_URL_Slash': Settings['get']('Site_Url')['replace'](/\/?$/, '/'),
        ..._0x59e891[_0x1b2a44(0xc5)] && {
            'fname': _0x484f58[_0x1b2a44(0xc6)](_0x59e891[_0x1b2a44(0xc5)], '\x20'),
            'lname': _0x484f58['strRightBack'](_0x59e891[_0x1b2a44(0xc5)], '\x20')
        },
        ..._0x59e891
    };
    return Object[_0x1b2a44(0xc7)](_0x4adde8)[_0x1b2a44(0xc8)]((_0x4a9346, [_0x57f11a, _0x45f39c]) => replacekey(_0x4a9346, _0x57f11a, _0x45f39c), translate(_0x5f2afc));
};
const nonEscapeKeys = [_0x4b73c1(0xc9)];
export const replaceEscaped = (_0x387834, _0x3d9493 = {}) => replace(_0x387834, {
    'Site_Name': escapeHTML(settings[_0x4b73c1(0xbd)](_0x4b73c1(0xc3))),
    'Site_Url': escapeHTML(settings['get']('Site_Url')),
    ...Object['entries'](_0x3d9493)['reduce']((_0xc6edcf, [_0x34cdc0, _0x18f0e5]) => {
        const _0x3de848 = _0x4b73c1;
        return _0xc6edcf[_0x34cdc0] = nonEscapeKeys[_0x3de848(0xca)](_0x34cdc0) ? _0x18f0e5 : escapeHTML(_0x18f0e5), _0xc6edcf;
    }, {})
});
export const wrap = (_0x69a9c, _0x3172bc = {}) => {
    const _0x52c72e = _0x4b73c1;
    if (settings['get'](_0x52c72e(0xcb)))
        return replace(_0x69a9c, _0x3172bc);
    return replaceEscaped(body['replace'](_0x52c72e(0xcc), _0x69a9c), _0x3172bc);
};
export const inlinecss = _0x57a8f9 => _0x76ce19['inlineContent'](_0x57a8f9, Settings[_0x4b73c1(0xbd)](_0x4b73c1(0xcd)));
export const getTemplate = (_0x4fd29d, _0x4c4792, _0x323c40 = !![]) => {
    const _0x4dcf32 = _0x4b73c1;
    let _0x3b6b1e = '';
    Settings['get'](_0x4fd29d, (_0xc65b8c, _0x22203f) => {
        _0x3b6b1e = _0x22203f || '', _0x4c4792(_0x323c40 ? inlinecss(_0x3b6b1e) : _0x3b6b1e);
    }), Settings[_0x4dcf32(0xbd)](_0x4dcf32(0xcd), () => {
        _0x4c4792(_0x323c40 ? inlinecss(_0x3b6b1e) : _0x3b6b1e);
    });
};
export const getTemplateWrapped = (_0x46c8cf, _0x5e1ab8) => {
    const _0x1d37ca = _0x4b73c1;
    let _0x4bd957 = '';
    const _0x2426d6 = _0x38cd38['debounce'](() => _0x5e1ab8(wrap(inlinecss(_0x4bd957))), 0x64);
    Settings[_0x1d37ca(0xbd)](_0x1d37ca(0xce), () => _0x4bd957 && _0x2426d6()), Settings['get'](_0x1d37ca(0xcf), () => _0x4bd957 && _0x2426d6()), Settings[_0x1d37ca(0xbd)](_0x1d37ca(0xcd), () => _0x4bd957 && _0x2426d6()), Settings[_0x1d37ca(0xbd)](_0x46c8cf, (_0x81a828, _0x5c470d) => {
        return _0x4bd957 = _0x5c470d || '', _0x4bd957 && _0x2426d6();
    });
};
export const setSettings = _0x2d1c9f => {
    const _0x2bb3bf = _0x4b73c1;
    Settings = _0x2d1c9f, getTemplate(_0x2bb3bf(0xce), _0x1bdb1a => {
        const _0xd6269c = _0x2bb3bf;
        contentHeader = replace(_0x1bdb1a || ''), body = inlinecss(contentHeader + _0xd6269c(0xd0) + contentFooter);
    }, ![]), getTemplate('Email_Footer', _0x1ad2a1 => {
        contentFooter = replace(_0x1ad2a1 || ''), body = inlinecss(contentHeader + '\x20{{body}}\x20' + contentFooter);
    }, ![]), body = inlinecss(contentHeader + '\x20{{body}}\x20' + contentFooter);
};
export const rfcMailPatternWithName = /^(?:.*<)?([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)(?:>?)$/;
export const checkAddressFormat = _0x2bd4e1 => rfcMailPatternWithName[_0x4b73c1(0xd1)](_0x2bd4e1);
export const sendNoWrap = ({
    to: _0x545933,
    from: _0x343a59,
    replyTo: _0xb78800,
    subject: _0x2d4800,
    html: _0x13e85c,
    text: _0x203dae,
    headers: _0x42f665
}) => {
    const _0x1565c7 = _0x4b73c1;
    if (!checkAddressFormat(_0x545933))
        return;
    !_0x203dae && (_0x203dae = _0x53d5b7(_0x13e85c)['result']), settings['get'](_0x1565c7(0xcb)) && (_0x13e85c = undefined), Meteor[_0x1565c7(0xd2)](() => Email[_0x1565c7(0xd3)]({
        'to': _0x545933,
        'from': _0x343a59,
        'replyTo': _0xb78800,
        'subject': _0x2d4800,
        'html': _0x13e85c,
        'text': _0x203dae,
        'headers': _0x42f665
    }));
};
export const send = ({
    to: _0x9187fc,
    from: _0x3b11f7,
    replyTo: _0x3b0284,
    subject: _0x35e477,
    html: _0x4b211c,
    text: _0x9824f0,
    data: _0x2dc9fe,
    headers: _0x1f1fd0
}) => sendNoWrap({
    'to': _0x9187fc,
    'from': _0x3b11f7,
    'replyTo': _0x3b0284,
    'subject': replace(_0x35e477, _0x2dc9fe),
    'text': _0x9824f0 ? replace(_0x9824f0, _0x2dc9fe) : _0x53d5b7(replace(_0x4b211c, _0x2dc9fe))[_0x4b73c1(0xd4)],
    'html': wrap(_0x4b211c, _0x2dc9fe),
    'headers': _0x1f1fd0
});
export const checkAddressFormatAndThrow = (_0xea0f48, _0x52a6e6) => {
    const _0x32853e = _0x4b73c1;
    if (checkAddressFormat(_0xea0f48))
        return !![];
    throw new Meteor[(_0x32853e(0xd5))](_0x32853e(0xd6), 'Invalid\x20from\x20address', { 'function': _0x52a6e6 });
};
export const getHeader = () => contentHeader;
export const getFooter = () => contentFooter;
