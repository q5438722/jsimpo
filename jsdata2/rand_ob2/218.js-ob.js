'use strict';
const _0x291a = [
    'push',
    'slice',
    'lang',
    'line_number',
    'wrap',
    'true',
    'mark',
    'split',
    'substr',
    'isNaN',
    '<span>',
    '</a>',
    '</span><a\x20href=\x22',
    '\x22>link</a>',
    'match',
    '</span>',
    'exports',
    'config',
    'highlight',
    'prismjs',
    'enable',
    '<pre><code>',
    'findIndex',
    'startsWith',
    'highlight:',
    'splice',
    '</code></pre>',
    'undefined',
    'prismHighlight',
    'hljs',
    'tab_replace',
    'auto_detect',
    'replace',
    '&#123;',
    '13962EfsNHs',
    '199690zqyLzw',
    '152464cFfpsC',
    '143543CWFaPp',
    '206yDldyE',
    '1036GmWrMS',
    '64247LGbJNf',
    '4pIImMf',
    '554673iXqEVJ',
    'hexo-util',
    'indexOf'
];
function _0x534c(_0x26a51d, _0x2b93b5) {
    return _0x534c = function (_0x291ae6, _0x534c66) {
        _0x291ae6 = _0x291ae6 - 0xe2;
        let _0x3685a4 = _0x291a[_0x291ae6];
        return _0x3685a4;
    }, _0x534c(_0x26a51d, _0x2b93b5);
}
const _0x53df6a = _0x534c;
(function (_0x6afcd1, _0x2b139a) {
    const _0x1e7754 = _0x534c;
    while (!![]) {
        try {
            const _0x4da600 = parseInt(_0x1e7754(0xe2)) + parseInt(_0x1e7754(0xe3)) + parseInt(_0x1e7754(0xe4)) + -parseInt(_0x1e7754(0xe5)) + parseInt(_0x1e7754(0xe6)) * parseInt(_0x1e7754(0xe7)) + parseInt(_0x1e7754(0xe8)) * parseInt(_0x1e7754(0xe9)) + -parseInt(_0x1e7754(0xea));
            if (_0x4da600 === _0x2b139a)
                break;
            else
                _0x6afcd1['push'](_0x6afcd1['shift']());
        } catch (_0x3d7465) {
            _0x6afcd1['push'](_0x6afcd1['shift']());
        }
    }
}(_0x291a, 0x21c40));
const {escapeHTML} = require(_0x53df6a(0xeb));
let highlight, prismHighlight;
const rCaptionUrlTitle = /(\S[\S\s]*)\s+(https?:\/\/\S+)\s+(.+)/i, rCaptionUrl = /(\S[\S\s]*)\s+(https?:\/\/\S+)/i, rCaption = /\S[\S\s]*/;
function parseArgs(_0x5cd60d) {
    const _0x2db15a = _0x53df6a, _0x351fb1 = [], _0x3bded9 = _0x5cd60d['length'];
    let _0x43e967, _0x5d459f, _0x23f8fc, _0x6c4cdd = 0x1;
    const _0x22dfcd = [];
    for (let _0x22cb48 = 0x0; _0x22cb48 < _0x3bded9; _0x22cb48++) {
        const _0x109184 = _0x5cd60d[_0x22cb48][_0x2db15a(0xec)](':');
        if (_0x109184 === -0x1) {
            _0x351fb1[_0x2db15a(0xed)](_0x5cd60d[_0x22cb48]);
            continue;
        }
        const _0x2228c8 = _0x5cd60d[_0x22cb48][_0x2db15a(0xee)](0x0, _0x109184), _0x1c01d7 = _0x5cd60d[_0x22cb48][_0x2db15a(0xee)](_0x109184 + 0x1);
        switch (_0x2228c8) {
        case _0x2db15a(0xef):
            _0x43e967 = _0x1c01d7;
            break;
        case _0x2db15a(0xf0):
            _0x5d459f = _0x1c01d7 === 'true';
            break;
        case 'first_line':
            if (!isNaN(_0x1c01d7))
                _0x6c4cdd = +_0x1c01d7;
            break;
        case _0x2db15a(0xf1):
            _0x23f8fc = _0x1c01d7 === _0x2db15a(0xf2);
            break;
        case _0x2db15a(0xf3): {
                for (const _0x4dca2f of _0x1c01d7[_0x2db15a(0xf4)](',')) {
                    const _0x347569 = _0x4dca2f['indexOf']('-');
                    if (_0x347569 !== -0x1) {
                        let _0x3387b5 = +_0x4dca2f[_0x2db15a(0xf5)](0x0, _0x347569), _0x298e85 = +_0x4dca2f['substr'](_0x347569 + 0x1);
                        if (Number[_0x2db15a(0xf6)](_0x3387b5) || Number[_0x2db15a(0xf6)](_0x298e85))
                            continue;
                        if (_0x298e85 < _0x3387b5) {
                            const _0x27bb08 = _0x3387b5;
                            _0x3387b5 = _0x298e85, _0x298e85 = _0x27bb08;
                        }
                        for (; _0x3387b5 <= _0x298e85; _0x3387b5++) {
                            _0x22dfcd[_0x2db15a(0xed)](_0x3387b5);
                        }
                    }
                    if (!isNaN(_0x4dca2f))
                        _0x22dfcd[_0x2db15a(0xed)](+_0x4dca2f);
                }
                break;
            }
        default: {
                _0x351fb1['push'](_0x5cd60d[_0x22cb48]);
            }
        }
    }
    const _0x50f83e = _0x351fb1['join']('\x20');
    let _0xbe97f1, _0x1c9ec7 = '';
    if ((_0xbe97f1 = _0x50f83e['match'](rCaptionUrlTitle)) != null)
        _0x1c9ec7 = _0x2db15a(0xf7) + _0xbe97f1[0x1] + '</span><a\x20href=\x22' + _0xbe97f1[0x2] + '\x22>' + _0xbe97f1[0x3] + _0x2db15a(0xf8);
    else {
        if ((_0xbe97f1 = _0x50f83e['match'](rCaptionUrl)) != null)
            _0x1c9ec7 = _0x2db15a(0xf7) + _0xbe97f1[0x1] + _0x2db15a(0xf9) + _0xbe97f1[0x2] + _0x2db15a(0xfa);
        else
            (_0xbe97f1 = _0x50f83e[_0x2db15a(0xfb)](rCaption)) != null && (_0x1c9ec7 = '<span>' + _0xbe97f1[0x0] + _0x2db15a(0xfc));
    }
    return {
        'lang': _0x43e967,
        'firstLine': _0x6c4cdd,
        'caption': _0x1c9ec7,
        'line_number': _0x5d459f,
        'mark': _0x22dfcd,
        'wrap': _0x23f8fc
    };
}
module[_0x53df6a(0xfd)] = _0x1ed860 => function _0x5cf064(_0x9990f3, _0x26f93a) {
    const _0x2908f3 = _0x53df6a, _0x40625f = _0x1ed860[_0x2908f3(0xfe)][_0x2908f3(0xff)] || {}, _0x31212b = _0x1ed860[_0x2908f3(0xfe)][_0x2908f3(0x100)] || {};
    if (!_0x40625f[_0x2908f3(0x101)] && !_0x31212b[_0x2908f3(0x101)])
        return _0x2908f3(0x102) + escapeHTML(_0x26f93a) + '</code></pre>';
    let _0x29ad6e, _0x55ec02 = !![];
    if ((_0x29ad6e = _0x9990f3[_0x2908f3(0x103)](_0x49b914 => _0x49b914[_0x2908f3(0x104)](_0x2908f3(0x105)))) !== -0x1) {
        const _0x858151 = _0x9990f3[_0x29ad6e], _0x191188 = _0x858151[_0x2908f3(0xee)](0xa);
        _0x55ec02 = _0x191188 === _0x2908f3(0xf2), _0x9990f3[_0x2908f3(0x106)](_0x29ad6e, 0x1);
    }
    if (!_0x55ec02)
        return _0x2908f3(0x102) + escapeHTML(_0x26f93a) + _0x2908f3(0x107);
    const {
        lang: _0x29d10a,
        firstLine: _0x2c3d44,
        caption: _0x23b161,
        line_number: _0x57462f,
        mark: _0x2d116a,
        wrap: _0x128bc7
    } = parseArgs(_0x9990f3);
    if (_0x31212b[_0x2908f3(0x101)]) {
        const _0x1e3d9c = {
            'lang': _0x29d10a,
            'firstLine': _0x2c3d44,
            'caption': _0x23b161,
            'lineNumber': typeof _0x57462f !== _0x2908f3(0x108) ? _0x57462f : _0x31212b['line_number'],
            'mark': _0x2d116a,
            'tab': _0x31212b['tab_replace'],
            'isPreprocess': _0x31212b['preprocess']
        };
        if (!prismHighlight)
            prismHighlight = require(_0x2908f3(0xeb))[_0x2908f3(0x109)];
        _0x26f93a = prismHighlight(_0x26f93a, _0x1e3d9c);
    } else {
        const _0x127f8b = {
            'lang': typeof _0x29d10a !== _0x2908f3(0x108) ? _0x29d10a : '',
            'firstLine': _0x2c3d44,
            'caption': _0x23b161,
            'gutter': typeof _0x57462f !== _0x2908f3(0x108) ? _0x57462f : _0x40625f['line_number'],
            'hljs': _0x40625f[_0x2908f3(0x10a)],
            'mark': _0x2d116a,
            'tab': _0x40625f[_0x2908f3(0x10b)],
            'autoDetect': _0x40625f[_0x2908f3(0x10c)],
            'wrap': typeof _0x128bc7 === 'boolean' ? _0x128bc7 : _0x40625f[_0x2908f3(0xf1)]
        };
        if (!highlight)
            highlight = require(_0x2908f3(0xeb))[_0x2908f3(0xff)];
        _0x26f93a = highlight(_0x26f93a, _0x127f8b);
    }
    return _0x26f93a[_0x2908f3(0x10d)](/{/g, _0x2908f3(0x10e))[_0x2908f3(0x10d)](/}/g, '&#125;');
};
