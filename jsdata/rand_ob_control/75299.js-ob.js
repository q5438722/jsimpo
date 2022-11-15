import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { TAPi18n } from 'meteor/rocketchat:tap-i18n';
import _0x2a814d from 'underscore';
import _0x4815fa from 'underscore.string';
import _0x5d938d from 'juice';
import _0x3b7c9f from 'string-strip-html';
import { escapeHTML } from '@rocket.chat/string-helpers';
import { settings } from '../../settings/server';
import { replaceVariables } from './utils.js';
let contentHeader, contentFooter, body, Settings = {
        'get': () => {
        }
    }, lng = 'en';
settings['get']('Language', (_0x11bab3, _0x39bfdc) => {
    const _0x514367 = {
        'lPCRj': function (_0x2b734c, _0x1c62e3) {
            return _0x2b734c || _0x1c62e3;
        }
    };
    lng = _0x514367['lPCRj'](_0x39bfdc, 'en');
});
export const replacekey = (_0x5be4f1, _0x48b138, _0x3d2d7d = '') => _0x5be4f1['replace'](new RegExp('(\x5c[' + _0x48b138 + '\x5c]|__' + _0x48b138 + '__)', 'igm'), _0x3d2d7d);
export const translate = _0x5a8481 => replaceVariables(_0x5a8481, (_0x2d0aa0, _0x3e05c3) => TAPi18n['__'](_0x3e05c3, { 'lng': lng }));
export const replace = function replace(_0x737ab3, _0x33be45 = {}) {
    const _0x31c7d3 = {
        'gyLAv': 'Site_Name',
        'xRBGw': 'Site_Url',
        'YXROp': function (_0x273fb7, _0x2a0b0a) {
            return _0x273fb7(_0x2a0b0a);
        }
    };
    if (!_0x737ab3)
        return '';
    const _0xacea6c = {
        'Site_Name': Settings['get'](_0x31c7d3['gyLAv']),
        'Site_URL': Settings['get'](_0x31c7d3['xRBGw']),
        'Site_URL_Slash': Settings['get'](_0x31c7d3['xRBGw'])['replace'](/\/?$/, '/'),
        ..._0x33be45['name'] && {
            'fname': _0x4815fa['strLeft'](_0x33be45['name'], '\x20'),
            'lname': _0x4815fa['strRightBack'](_0x33be45['name'], '\x20')
        },
        ..._0x33be45
    };
    return Object['entries'](_0xacea6c)['reduce']((_0x162ef8, [_0x2b48e0, _0x4ce0e7]) => replacekey(_0x162ef8, _0x2b48e0, _0x4ce0e7), _0x31c7d3['YXROp'](translate, _0x737ab3));
};
const nonEscapeKeys = ['room_path'];
export const replaceEscaped = (_0x51c43d, _0x3afea9 = {}) => replace(_0x51c43d, {
    'Site_Name': escapeHTML(settings['get']('Site_Name')),
    'Site_Url': escapeHTML(settings['get']('Site_Url')),
    ...Object['entries'](_0x3afea9)['reduce']((_0x192378, [_0xe36cb, _0x35048e]) => {
        const _0x12b3ae = {
            'CKNVR': function (_0x26399c, _0x4b5f55) {
                return _0x26399c(_0x4b5f55);
            }
        };
        return _0x192378[_0xe36cb] = nonEscapeKeys['includes'](_0xe36cb) ? _0x35048e : _0x12b3ae['CKNVR'](escapeHTML, _0x35048e), _0x192378;
    }, {})
});
export const wrap = (_0x239cc6, _0x56f158 = {}) => {
    const _0x118fed = {
        'dGkPJ': 'email_plain_text_only',
        'GZJaH': function (_0x145f96, _0x16ed4f, _0x39dc43) {
            return _0x145f96(_0x16ed4f, _0x39dc43);
        },
        'lnTEM': '{{body}}'
    };
    if (settings['get'](_0x118fed['dGkPJ']))
        return _0x118fed['GZJaH'](replace, _0x239cc6, _0x56f158);
    return _0x118fed['GZJaH'](replaceEscaped, body['replace'](_0x118fed['lnTEM'], _0x239cc6), _0x56f158);
};
export const inlinecss = _0xa63908 => _0x5d938d['inlineContent'](_0xa63908, Settings['get']('email_style'));
export const getTemplate = (_0x12ceac, _0x2bd352, _0x54dce7 = !![]) => {
    const _0x247f95 = {
        'oFqyC': function (_0x2004d5, _0x1f2787) {
            return _0x2004d5 || _0x1f2787;
        },
        'zyTYp': function (_0x25cfe0, _0x575290) {
            return _0x25cfe0(_0x575290);
        },
        'WXpKa': function (_0x3f72af, _0x110f43) {
            return _0x3f72af(_0x110f43);
        },
        'hlIgu': 'email_style'
    };
    let _0x523766 = '';
    Settings['get'](_0x12ceac, (_0x563800, _0x1c7eb8) => {
        _0x523766 = _0x247f95['oFqyC'](_0x1c7eb8, ''), _0x247f95['zyTYp'](_0x2bd352, _0x54dce7 ? _0x247f95['zyTYp'](inlinecss, _0x523766) : _0x523766);
    }), Settings['get'](_0x247f95['hlIgu'], () => {
        _0x247f95['zyTYp'](_0x2bd352, _0x54dce7 ? _0x247f95['WXpKa'](inlinecss, _0x523766) : _0x523766);
    });
};
export const getTemplateWrapped = (_0x1de17e, _0x47c137) => {
    const _0x2eb114 = {
        'gtuSy': function (_0x313065, _0x487c75) {
            return _0x313065 || _0x487c75;
        },
        'asbaO': function (_0xc34965) {
            return _0xc34965();
        },
        'oroeV': 'Email_Header',
        'aRHat': 'Email_Footer',
        'HoRGK': 'email_style'
    };
    let _0x5362bd = '';
    const _0x2e3f3b = _0x2a814d['debounce'](() => _0x47c137(wrap(inlinecss(_0x5362bd))), 0x64);
    Settings['get'](_0x2eb114['oroeV'], () => _0x5362bd && _0x2e3f3b()), Settings['get'](_0x2eb114['aRHat'], () => _0x5362bd && _0x2e3f3b()), Settings['get'](_0x2eb114['HoRGK'], () => _0x5362bd && _0x2e3f3b()), Settings['get'](_0x1de17e, (_0xa7ffe4, _0x41ad68) => {
        return _0x5362bd = _0x2eb114['gtuSy'](_0x41ad68, ''), _0x5362bd && _0x2eb114['asbaO'](_0x2e3f3b);
    });
};
export const setSettings = _0x12729a => {
    const _0x1a7c59 = {
        'dUQkp': function (_0x159fde, _0x186c17) {
            return _0x159fde(_0x186c17);
        },
        'HlsEW': function (_0x5e0852, _0x3aa470) {
            return _0x5e0852 || _0x3aa470;
        },
        'VvkaS': function (_0x5457c0, _0x392309) {
            return _0x5457c0(_0x392309);
        },
        'UyunJ': function (_0xe1a3c5, _0x1acb2b, _0x2f0629, _0x4ff311) {
            return _0xe1a3c5(_0x1acb2b, _0x2f0629, _0x4ff311);
        },
        'JttPk': 'Email_Header',
        'RFiqk': 'Email_Footer',
        'OaqvG': function (_0x22471c, _0x6ac878) {
            return _0x22471c(_0x6ac878);
        }
    };
    Settings = _0x12729a, _0x1a7c59['UyunJ'](getTemplate, _0x1a7c59['JttPk'], _0x1301ab => {
        contentHeader = _0x1a7c59['dUQkp'](replace, _0x1a7c59['HlsEW'](_0x1301ab, '')), body = _0x1a7c59['VvkaS'](inlinecss, contentHeader + '\x20{{body}}\x20' + contentFooter);
    }, ![]), _0x1a7c59['UyunJ'](getTemplate, _0x1a7c59['RFiqk'], _0x2f3f44 => {
        contentFooter = _0x1a7c59['VvkaS'](replace, _0x1a7c59['HlsEW'](_0x2f3f44, '')), body = _0x1a7c59['VvkaS'](inlinecss, contentHeader + '\x20{{body}}\x20' + contentFooter);
    }, ![]), body = _0x1a7c59['OaqvG'](inlinecss, contentHeader + '\x20{{body}}\x20' + contentFooter);
};
export const rfcMailPatternWithName = /^(?:.*<)?([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)(?:>?)$/;
export const checkAddressFormat = _0x5c6897 => rfcMailPatternWithName['test'](_0x5c6897);
export const sendNoWrap = ({
    to: _0x59e489,
    from: _0x1e76e8,
    replyTo: _0x51b7c0,
    subject: _0xb74353,
    html: _0x274c1a,
    text: _0x1915c2,
    headers: _0x50e429
}) => {
    const _0x4087e2 = {
        'AZLEN': function (_0x468f34, _0x3efe56) {
            return _0x468f34(_0x3efe56);
        },
        'AHcXj': function (_0x24065f, _0x2f9883) {
            return _0x24065f(_0x2f9883);
        },
        'JeLxu': 'email_plain_text_only'
    };
    if (!_0x4087e2['AZLEN'](checkAddressFormat, _0x59e489))
        return;
    !_0x1915c2 && (_0x1915c2 = _0x4087e2['AHcXj'](_0x3b7c9f, _0x274c1a)['result']), settings['get'](_0x4087e2['JeLxu']) && (_0x274c1a = undefined), Meteor['defer'](() => Email['send']({
        'to': _0x59e489,
        'from': _0x1e76e8,
        'replyTo': _0x51b7c0,
        'subject': _0xb74353,
        'html': _0x274c1a,
        'text': _0x1915c2,
        'headers': _0x50e429
    }));
};
export const send = ({
    to: _0x416b2a,
    from: _0x508e79,
    replyTo: _0x9855e3,
    subject: _0x1a5603,
    html: _0x1b7c51,
    text: _0x4b5e37,
    data: _0x53626b,
    headers: _0x4066a9
}) => sendNoWrap({
    'to': _0x416b2a,
    'from': _0x508e79,
    'replyTo': _0x9855e3,
    'subject': replace(_0x1a5603, _0x53626b),
    'text': _0x4b5e37 ? replace(_0x4b5e37, _0x53626b) : _0x3b7c9f(replace(_0x1b7c51, _0x53626b))['result'],
    'html': wrap(_0x1b7c51, _0x53626b),
    'headers': _0x4066a9
});
export const checkAddressFormatAndThrow = (_0x43c061, _0xc05434) => {
    const _0x4113ff = {
        'dTsHu': function (_0x270f62, _0x5f164c) {
            return _0x270f62(_0x5f164c);
        },
        'hapMX': 'error-invalid-from-address',
        'sLAla': 'Invalid\x20from\x20address'
    };
    if (_0x4113ff['dTsHu'](checkAddressFormat, _0x43c061))
        return !![];
    throw new Meteor['Error'](_0x4113ff['hapMX'], _0x4113ff['sLAla'], { 'function': _0xc05434 });
};
export const getHeader = () => contentHeader;
export const getFooter = () => contentFooter;
