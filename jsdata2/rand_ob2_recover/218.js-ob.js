const {escapeHTML} = require(_0x53df6a(235));
let highlight, prismHighlight;
const rCaptionUrlTitle = /(\S[\S\s]*)\s+(https?:\/\/\S+)\s+(.+)/i, rCaptionUrl = /(\S[\S\s]*)\s+(https?:\/\/\S+)/i, rCaption = /\S[\S\s]*/;
function parseArgs(_0x5cd60d) {
    const _0x2db15a = _0x53df6a, _0x351fb1 = [], _0x3bded9 = _0x5cd60d['length'];
    let _0x43e967, _0x5d459f, _0x23f8fc, _0x6c4cdd = 1;
    const _0x22dfcd = [];
    for (let _0x22cb48 = 0; _0x22cb48 < _0x3bded9; _0x22cb48++) {
        const _0x109184 = _0x5cd60d[_0x22cb48][_0x2db15a(236)](':');
        if (_0x109184 === -1) {
            _0x351fb1[_0x2db15a(237)](_0x5cd60d[_0x22cb48]);
            continue;
        }
        const _0x2228c8 = _0x5cd60d[_0x22cb48][_0x2db15a(238)](0, _0x109184), _0x1c01d7 = _0x5cd60d[_0x22cb48][_0x2db15a(238)](_0x109184 + 1);
        switch (_0x2228c8) {
        case _0x2db15a(239):
            _0x43e967 = _0x1c01d7;
            break;
        case _0x2db15a(240):
            _0x5d459f = _0x1c01d7 === 'true';
            break;
        case 'first_line':
            if (!isNaN(_0x1c01d7))
                _0x6c4cdd = +_0x1c01d7;
            break;
        case _0x2db15a(241):
            _0x23f8fc = _0x1c01d7 === _0x2db15a(242);
            break;
        case _0x2db15a(243): {
                for (const _0x4dca2f of _0x1c01d7[_0x2db15a(244)](',')) {
                    const _0x347569 = _0x4dca2f['indexOf']('-');
                    if (_0x347569 !== -1) {
                        let _0x3387b5 = +_0x4dca2f[_0x2db15a(245)](0, _0x347569), _0x298e85 = +_0x4dca2f['substr'](_0x347569 + 1);
                        if (Number[_0x2db15a(246)](_0x3387b5) || Number[_0x2db15a(246)](_0x298e85))
                            continue;
                        if (_0x298e85 < _0x3387b5) {
                            const _0x27bb08 = _0x3387b5;
                            _0x3387b5 = _0x298e85, _0x298e85 = _0x27bb08;
                        }
                        for (; _0x3387b5 <= _0x298e85; _0x3387b5++) {
                            _0x22dfcd[_0x2db15a(237)](_0x3387b5);
                        }
                    }
                    if (!isNaN(_0x4dca2f))
                        _0x22dfcd[_0x2db15a(237)](+_0x4dca2f);
                }
                break;
            }
        default: {
                _0x351fb1['push'](_0x5cd60d[_0x22cb48]);
            }
        }
    }
    const _0x50f83e = _0x351fb1['join'](' ');
    let _0xbe97f1, _0x1c9ec7 = '';
    if ((_0xbe97f1 = _0x50f83e['match'](rCaptionUrlTitle)) != null)
        _0x1c9ec7 = _0x2db15a(247) + _0xbe97f1[1] + '</span><a href="' + _0xbe97f1[2] + '">' + _0xbe97f1[3] + _0x2db15a(248);
    else {
        if ((_0xbe97f1 = _0x50f83e['match'](rCaptionUrl)) != null)
            _0x1c9ec7 = _0x2db15a(247) + _0xbe97f1[1] + _0x2db15a(249) + _0xbe97f1[2] + _0x2db15a(250);
        else
            (_0xbe97f1 = _0x50f83e[_0x2db15a(251)](rCaption)) != null && (_0x1c9ec7 = '<span>' + _0xbe97f1[0] + _0x2db15a(252));
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
module[_0x53df6a(253)] = _0x1ed860 => function _0x5cf064(_0x9990f3, _0x26f93a) {
    const _0x2908f3 = _0x53df6a, _0x40625f = _0x1ed860[_0x2908f3(254)][_0x2908f3(255)] || {}, _0x31212b = _0x1ed860[_0x2908f3(254)][_0x2908f3(256)] || {};
    if (!_0x40625f[_0x2908f3(257)] && !_0x31212b[_0x2908f3(257)])
        return _0x2908f3(258) + escapeHTML(_0x26f93a) + '</code></pre>';
    let _0x29ad6e, _0x55ec02 = !![];
    if ((_0x29ad6e = _0x9990f3[_0x2908f3(259)](_0x49b914 => _0x49b914[_0x2908f3(260)](_0x2908f3(261)))) !== -1) {
        const _0x858151 = _0x9990f3[_0x29ad6e], _0x191188 = _0x858151[_0x2908f3(238)](10);
        _0x55ec02 = _0x191188 === _0x2908f3(242), _0x9990f3[_0x2908f3(262)](_0x29ad6e, 1);
    }
    if (!_0x55ec02)
        return _0x2908f3(258) + escapeHTML(_0x26f93a) + _0x2908f3(263);
    const {
        lang: _0x29d10a,
        firstLine: _0x2c3d44,
        caption: _0x23b161,
        line_number: _0x57462f,
        mark: _0x2d116a,
        wrap: _0x128bc7
    } = parseArgs(_0x9990f3);
    if (_0x31212b[_0x2908f3(257)]) {
        const _0x1e3d9c = {
            'lang': _0x29d10a,
            'firstLine': _0x2c3d44,
            'caption': _0x23b161,
            'lineNumber': typeof _0x57462f !== _0x2908f3(264) ? _0x57462f : _0x31212b['line_number'],
            'mark': _0x2d116a,
            'tab': _0x31212b['tab_replace'],
            'isPreprocess': _0x31212b['preprocess']
        };
        if (!prismHighlight)
            prismHighlight = require(_0x2908f3(235))[_0x2908f3(265)];
        _0x26f93a = prismHighlight(_0x26f93a, _0x1e3d9c);
    } else {
        const _0x127f8b = {
            'lang': typeof _0x29d10a !== _0x2908f3(264) ? _0x29d10a : '',
            'firstLine': _0x2c3d44,
            'caption': _0x23b161,
            'gutter': typeof _0x57462f !== _0x2908f3(264) ? _0x57462f : _0x40625f['line_number'],
            'hljs': _0x40625f[_0x2908f3(266)],
            'mark': _0x2d116a,
            'tab': _0x40625f[_0x2908f3(267)],
            'autoDetect': _0x40625f[_0x2908f3(268)],
            'wrap': typeof _0x128bc7 === 'boolean' ? _0x128bc7 : _0x40625f[_0x2908f3(241)]
        };
        if (!highlight)
            highlight = require(_0x2908f3(235))[_0x2908f3(255)];
        _0x26f93a = highlight(_0x26f93a, _0x127f8b);
    }
    return _0x26f93a[_0x2908f3(269)](/{/g, _0x2908f3(270))[_0x2908f3(269)](/}/g, '&#125;');
};