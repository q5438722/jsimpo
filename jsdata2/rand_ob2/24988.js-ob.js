var _0x2d6f = [
    '1dDUKJA',
    '598227oEWlaV',
    '651241qTbqwr',
    '407317KludtE',
    '1ZWENUz',
    '105552VrVmyv',
    '11wjgRNs',
    '\x0d?\x0a---\x0d?\x0a',
    '__SCRIPT_END__',
    '&amp;',
    '&lt;',
    '&gt;',
    '&quot;',
    '&#39;',
    '[data-template]',
    'querySelector',
    'textContent',
    'replace',
    '</script>',
    'match',
    'length',
    '\x5cn?\x5ct{',
    '\x5cn?\x20{',
    'attributes',
    'name',
    'test',
    'separator',
    'notesSeparator',
    'split',
    'mgi',
    '<aside\x20class=\x22notes\x22>',
    'trim',
    '<script\x20type=\x22text/template\x22>',
    'verticalSeparator',
    'exec',
    'push',
    'substring',
    'index',
    'lastIndex',
    'forEach',
    '<section\x20data-markdown>',
    '</section>',
    '<section\x20',
    'slice',
    'querySelectorAll',
    'section[data-markdown]:not([data-markdown-parsed])',
    'getAttribute',
    'then',
    'outerHTML',
    'responseText',
    'data-separator-vertical',
    'data-separator-notes',
    '<section\x20data-state=\x22alert\x22>',
    'ERROR:\x20The\x20attempt\x20to\x20fetch\x20',
    '\x20failed\x20with\x20HTTP\x20status\x20',
    'status',
    'Check\x20your\x20browser\x27s\x20JavaScript\x20console\x20for\x20more\x20details.',
    '<p>Remember\x20that\x20you\x20need\x20to\x20serve\x20the\x20presentation\x20HTML\x20from\x20a\x20HTTP\x20server.</p>',
    'data-separator',
    'data-markdown',
    'data-charset',
    'overrideMimeType',
    'onreadystatechange',
    'readyState',
    'bind',
    'open',
    'GET',
    'warn',
    'Failed\x20to\x20get\x20the\x20Markdown\x20file\x20',
    '.\x20Make\x20sure\x20that\x20the\x20presentation\x20and\x20the\x20file\x20are\x20served\x20by\x20a\x20HTTP\x20server\x20and\x20the\x20file\x20can\x20be\x20found\x20there.\x20',
    '([^\x22=\x20]+?)=\x22([^\x22]+?)\x22|(data-[^\x22=\x20]+?)(?=[\x22\x20])',
    'setAttribute',
    'childNodes',
    'function',
    'tagName',
    'section',
    'COMMENT_NODE',
    'nodeType',
    'getRevealElement',
    '[data-markdown]:not([data-markdown-parsed])',
    'call',
    'aside.notes',
    'data-element-attributes',
    'data-attributes',
    'parentNode',
    'appendChild',
    'resolve',
    'markdown',
    'code',
    'data-line-numbers=\x22',
    '<pre><code\x20',
    '</code></pre>',
    'listitem',
    '<li\x20class=\x22fragment\x22>',
    'setOptions',
    '610487XQCpkA',
    '2707nnENya',
    '79hORWuP',
    '17524YROYNe'
];
function _0x4b93(_0x514f3a, _0x3947ad) {
    return _0x4b93 = function (_0x2d6ffd, _0x4b932f) {
        _0x2d6ffd = _0x2d6ffd - 0x1e8;
        var _0x16ec9f = _0x2d6f[_0x2d6ffd];
        return _0x16ec9f;
    }, _0x4b93(_0x514f3a, _0x3947ad);
}
var _0x187570 = _0x4b93;
(function (_0x47a649, _0x781e61) {
    var _0x4e3d79 = _0x4b93;
    while (!![]) {
        try {
            var _0x506a61 = parseInt(_0x4e3d79(0x1e8)) + parseInt(_0x4e3d79(0x1e9)) * -parseInt(_0x4e3d79(0x1ea)) + parseInt(_0x4e3d79(0x1eb)) * -parseInt(_0x4e3d79(0x1ec)) + parseInt(_0x4e3d79(0x1ed)) + parseInt(_0x4e3d79(0x1ee)) + parseInt(_0x4e3d79(0x1ef)) * parseInt(_0x4e3d79(0x1f0)) + parseInt(_0x4e3d79(0x1f1)) * -parseInt(_0x4e3d79(0x1f2));
            if (_0x506a61 === _0x781e61)
                break;
            else
                _0x47a649['push'](_0x47a649['shift']());
        } catch (_0x1143d8) {
            _0x47a649['push'](_0x47a649['shift']());
        }
    }
}(_0x2d6f, 0xd5947));
import _0x545885 from 'marked';
const DEFAULT_SLIDE_SEPARATOR = _0x187570(0x1f3), DEFAULT_NOTES_SEPARATOR = 'notes?:', DEFAULT_ELEMENT_ATTRIBUTES_SEPARATOR = '\x5c.element\x5cs*?(.+?)$', DEFAULT_SLIDE_ATTRIBUTES_SEPARATOR = '\x5c.slide:\x5cs*?(\x5cS.+?)$', SCRIPT_END_PLACEHOLDER = _0x187570(0x1f4), CODE_LINE_NUMBER_REGEX = /\[([\s\d,|-]*)\]/, HTML_ESCAPE_MAP = {
        '&': _0x187570(0x1f5),
        '<': _0x187570(0x1f6),
        '>': _0x187570(0x1f7),
        '\x22': _0x187570(0x1f8),
        '\x27': _0x187570(0x1f9)
    }, Plugin = () => {
        var _0x2a484b = _0x187570;
        let _0x19488c;
        function _0x3a5784(_0x47074f) {
            var _0x97ab64 = _0x4b93, _0x164715 = _0x47074f['querySelector'](_0x97ab64(0x1fa)) || _0x47074f[_0x97ab64(0x1fb)]('script'), _0x1ef195 = (_0x164715 || _0x47074f)[_0x97ab64(0x1fc)];
            _0x1ef195 = _0x1ef195[_0x97ab64(0x1fd)](new RegExp(SCRIPT_END_PLACEHOLDER, 'g'), _0x97ab64(0x1fe));
            var _0x5e1ec3 = _0x1ef195[_0x97ab64(0x1ff)](/^\n?(\s*)/)[0x1]['length'], _0x2bdee7 = _0x1ef195[_0x97ab64(0x1ff)](/^\n?(\t*)/)[0x1][_0x97ab64(0x200)];
            if (_0x2bdee7 > 0x0)
                _0x1ef195 = _0x1ef195['replace'](new RegExp(_0x97ab64(0x201) + _0x2bdee7 + '}', 'g'), '\x0a');
            else
                _0x5e1ec3 > 0x1 && (_0x1ef195 = _0x1ef195[_0x97ab64(0x1fd)](new RegExp(_0x97ab64(0x202) + _0x5e1ec3 + '}', 'g'), '\x0a'));
            return _0x1ef195;
        }
        function _0x1b6d9f(_0x4c58fe) {
            var _0x56a36c = _0x4b93, _0x6e551d = _0x4c58fe[_0x56a36c(0x203)], _0xdcd672 = [];
            for (var _0x560002 = 0x0, _0xc1cb97 = _0x6e551d[_0x56a36c(0x200)]; _0x560002 < _0xc1cb97; _0x560002++) {
                var _0x59483b = _0x6e551d[_0x560002][_0x56a36c(0x204)], _0x4ad019 = _0x6e551d[_0x560002]['value'];
                if (/data\-(markdown|separator|vertical|notes)/gi[_0x56a36c(0x205)](_0x59483b))
                    continue;
                _0x4ad019 ? _0xdcd672['push'](_0x59483b + '=\x22' + _0x4ad019 + '\x22') : _0xdcd672['push'](_0x59483b);
            }
            return _0xdcd672['join']('\x20');
        }
        function _0x18927a(_0x493289) {
            var _0x42da04 = _0x4b93;
            return _0x493289 = _0x493289 || {}, _0x493289[_0x42da04(0x206)] = _0x493289['separator'] || DEFAULT_SLIDE_SEPARATOR, _0x493289[_0x42da04(0x207)] = _0x493289['notesSeparator'] || DEFAULT_NOTES_SEPARATOR, _0x493289['attributes'] = _0x493289[_0x42da04(0x203)] || '', _0x493289;
        }
        function _0x1f9a1c(_0x2a6636, _0x158aa4) {
            var _0x54d0d1 = _0x4b93;
            _0x158aa4 = _0x18927a(_0x158aa4);
            var _0x46af16 = _0x2a6636[_0x54d0d1(0x208)](new RegExp(_0x158aa4['notesSeparator'], _0x54d0d1(0x209)));
            return _0x46af16[_0x54d0d1(0x200)] === 0x2 && (_0x2a6636 = _0x46af16[0x0] + _0x54d0d1(0x20a) + _0x545885(_0x46af16[0x1][_0x54d0d1(0x20b)]()) + '</aside>'), _0x2a6636 = _0x2a6636[_0x54d0d1(0x1fd)](/<\/script>/g, SCRIPT_END_PLACEHOLDER), _0x54d0d1(0x20c) + _0x2a6636 + _0x54d0d1(0x1fe);
        }
        function _0x4de13d(_0x50a42d, _0x1c6a7b) {
            var _0x307107 = _0x4b93;
            _0x1c6a7b = _0x18927a(_0x1c6a7b);
            var _0x423a37 = new RegExp(_0x1c6a7b['separator'] + (_0x1c6a7b[_0x307107(0x20d)] ? '|' + _0x1c6a7b[_0x307107(0x20d)] : ''), 'mg'), _0x48e065 = new RegExp(_0x1c6a7b[_0x307107(0x206)]), _0x11b058, _0x29e06c = 0x0, _0x4d3f64, _0x2f1717 = !![], _0x3c0241, _0x5c12a2 = [];
            while (_0x11b058 = _0x423a37[_0x307107(0x20e)](_0x50a42d)) {
                var _0x4091a1 = null;
                _0x4d3f64 = _0x48e065[_0x307107(0x205)](_0x11b058[0x0]), !_0x4d3f64 && _0x2f1717 && _0x5c12a2[_0x307107(0x20f)]([]), _0x3c0241 = _0x50a42d[_0x307107(0x210)](_0x29e06c, _0x11b058[_0x307107(0x211)]), _0x4d3f64 && _0x2f1717 ? _0x5c12a2[_0x307107(0x20f)](_0x3c0241) : _0x5c12a2[_0x5c12a2[_0x307107(0x200)] - 0x1]['push'](_0x3c0241), _0x29e06c = _0x423a37[_0x307107(0x212)], _0x2f1717 = _0x4d3f64;
            }
            (_0x2f1717 ? _0x5c12a2 : _0x5c12a2[_0x5c12a2[_0x307107(0x200)] - 0x1])[_0x307107(0x20f)](_0x50a42d[_0x307107(0x210)](_0x29e06c));
            var _0x2a51c3 = '';
            for (var _0x1f46c2 = 0x0, _0x140e13 = _0x5c12a2[_0x307107(0x200)]; _0x1f46c2 < _0x140e13; _0x1f46c2++) {
                _0x5c12a2[_0x1f46c2] instanceof Array ? (_0x2a51c3 += '<section\x20' + _0x1c6a7b[_0x307107(0x203)] + '>', _0x5c12a2[_0x1f46c2][_0x307107(0x213)](function (_0x40ba58) {
                    var _0x3e8194 = _0x307107;
                    _0x2a51c3 += _0x3e8194(0x214) + _0x1f9a1c(_0x40ba58, _0x1c6a7b) + '</section>';
                }), _0x2a51c3 += _0x307107(0x215)) : _0x2a51c3 += _0x307107(0x216) + _0x1c6a7b['attributes'] + '\x20data-markdown>' + _0x1f9a1c(_0x5c12a2[_0x1f46c2], _0x1c6a7b) + '</section>';
            }
            return _0x2a51c3;
        }
        function _0x2071da(_0x4748b8) {
            return new Promise(function (_0x4e5d3a) {
                var _0x37dd09 = _0x4b93, _0x1fe8e9 = [];
                [][_0x37dd09(0x217)]['call'](_0x4748b8[_0x37dd09(0x218)](_0x37dd09(0x219)))[_0x37dd09(0x213)](function (_0x47824f, _0x227e8e) {
                    var _0x544aac = _0x37dd09;
                    _0x47824f[_0x544aac(0x21a)]('data-markdown')[_0x544aac(0x200)] ? _0x1fe8e9[_0x544aac(0x20f)](_0x337b92(_0x47824f)[_0x544aac(0x21b)](function (_0x468f52, _0x5010f3) {
                        var _0x3dcd16 = _0x544aac;
                        _0x47824f[_0x3dcd16(0x21c)] = _0x4de13d(_0x468f52[_0x3dcd16(0x21d)], {
                            'separator': _0x47824f[_0x3dcd16(0x21a)]('data-separator'),
                            'verticalSeparator': _0x47824f[_0x3dcd16(0x21a)](_0x3dcd16(0x21e)),
                            'notesSeparator': _0x47824f[_0x3dcd16(0x21a)](_0x3dcd16(0x21f)),
                            'attributes': _0x1b6d9f(_0x47824f)
                        });
                    }, function (_0x38336f, _0x242069) {
                        var _0xb94430 = _0x544aac;
                        _0x47824f[_0xb94430(0x21c)] = _0xb94430(0x220) + _0xb94430(0x221) + _0x242069 + _0xb94430(0x222) + _0x38336f[_0xb94430(0x223)] + '.' + _0xb94430(0x224) + _0xb94430(0x225) + '</section>';
                    })) : _0x47824f[_0x544aac(0x21c)] = _0x4de13d(_0x3a5784(_0x47824f), {
                        'separator': _0x47824f['getAttribute'](_0x544aac(0x226)),
                        'verticalSeparator': _0x47824f[_0x544aac(0x21a)](_0x544aac(0x21e)),
                        'notesSeparator': _0x47824f['getAttribute'](_0x544aac(0x21f)),
                        'attributes': _0x1b6d9f(_0x47824f)
                    });
                }), Promise['all'](_0x1fe8e9)[_0x37dd09(0x21b)](_0x4e5d3a);
            });
        }
        function _0x337b92(_0x1c1b73) {
            return new Promise(function (_0x4a56e1, _0xfbdbdf) {
                var _0x21fdab = _0x4b93, _0x450cc5 = new XMLHttpRequest(), _0x57fd2c = _0x1c1b73[_0x21fdab(0x21a)](_0x21fdab(0x227)), _0xd28560 = _0x1c1b73[_0x21fdab(0x21a)](_0x21fdab(0x228));
                _0xd28560 != null && _0xd28560 != '' && _0x450cc5[_0x21fdab(0x229)]('text/html;\x20charset=' + _0xd28560);
                _0x450cc5[_0x21fdab(0x22a)] = function (_0x2650d4, _0x32ae74) {
                    var _0x57ea7f = _0x21fdab;
                    _0x32ae74[_0x57ea7f(0x22b)] === 0x4 && (_0x32ae74[_0x57ea7f(0x223)] >= 0xc8 && _0x32ae74['status'] < 0x12c || _0x32ae74[_0x57ea7f(0x223)] === 0x0 ? _0x4a56e1(_0x32ae74, _0x57fd2c) : _0xfbdbdf(_0x32ae74, _0x57fd2c));
                }[_0x21fdab(0x22c)](this, _0x1c1b73, _0x450cc5), _0x450cc5[_0x21fdab(0x22d)](_0x21fdab(0x22e), _0x57fd2c, !![]);
                try {
                    _0x450cc5['send']();
                } catch (_0x43651f) {
                    console[_0x21fdab(0x22f)](_0x21fdab(0x230) + _0x57fd2c + _0x21fdab(0x231) + _0x43651f), _0x4a56e1(_0x450cc5, _0x57fd2c);
                }
            });
        }
        function _0x168a21(_0x38120a, _0x330294, _0xd55814) {
            var _0x514d21 = _0x4b93, _0x794faa = new RegExp(_0xd55814, 'mg'), _0x365387 = new RegExp(_0x514d21(0x232), 'mg'), _0x377eda = _0x38120a['nodeValue'], _0x454435, _0x35fef1;
            if (_0x454435 = _0x794faa['exec'](_0x377eda)) {
                var _0xf8b865 = _0x454435[0x1];
                _0x377eda = _0x377eda[_0x514d21(0x210)](0x0, _0x454435[_0x514d21(0x211)]) + _0x377eda['substring'](_0x794faa['lastIndex']), _0x38120a['nodeValue'] = _0x377eda;
                while (_0x35fef1 = _0x365387['exec'](_0xf8b865)) {
                    _0x35fef1[0x2] ? _0x330294[_0x514d21(0x233)](_0x35fef1[0x1], _0x35fef1[0x2]) : _0x330294['setAttribute'](_0x35fef1[0x3], '');
                }
                return !![];
            }
            return ![];
        }
        function _0x214f94(_0xb8d048, _0x4b51fc, _0x3319f0, _0x39b874, _0x32a871) {
            var _0x136c5b = _0x4b93;
            if (_0x4b51fc != null && _0x4b51fc[_0x136c5b(0x234)] != undefined && _0x4b51fc[_0x136c5b(0x234)][_0x136c5b(0x200)] > 0x0) {
                var _0x1e7a1a = _0x4b51fc;
                for (var _0x376f2c = 0x0; _0x376f2c < _0x4b51fc[_0x136c5b(0x234)][_0x136c5b(0x200)]; _0x376f2c++) {
                    var _0x28f851 = _0x4b51fc[_0x136c5b(0x234)][_0x376f2c];
                    if (_0x376f2c > 0x0) {
                        var _0x53638a = _0x376f2c - 0x1;
                        while (_0x53638a >= 0x0) {
                            var _0x378617 = _0x4b51fc[_0x136c5b(0x234)][_0x53638a];
                            if (typeof _0x378617[_0x136c5b(0x233)] == _0x136c5b(0x235) && _0x378617[_0x136c5b(0x236)] != 'BR') {
                                _0x1e7a1a = _0x378617;
                                break;
                            }
                            _0x53638a = _0x53638a - 0x1;
                        }
                    }
                    var _0x48476f = _0xb8d048;
                    _0x28f851['nodeName'] == _0x136c5b(0x237) && (_0x48476f = _0x28f851, _0x1e7a1a = _0x28f851), (typeof _0x28f851[_0x136c5b(0x233)] == _0x136c5b(0x235) || _0x28f851['nodeType'] == Node[_0x136c5b(0x238)]) && _0x214f94(_0x48476f, _0x28f851, _0x1e7a1a, _0x39b874, _0x32a871);
                }
            }
            _0x4b51fc[_0x136c5b(0x239)] == Node[_0x136c5b(0x238)] && (_0x168a21(_0x4b51fc, _0x3319f0, _0x39b874) == ![] && _0x168a21(_0x4b51fc, _0xb8d048, _0x32a871));
        }
        function _0x5df56d() {
            var _0x1c7134 = _0x4b93, _0x15f72d = _0x19488c[_0x1c7134(0x23a)]()[_0x1c7134(0x218)](_0x1c7134(0x23b));
            return [][_0x1c7134(0x217)][_0x1c7134(0x23c)](_0x15f72d)[_0x1c7134(0x213)](function (_0x1f84a9) {
                var _0x1e1dd7 = _0x1c7134;
                _0x1f84a9[_0x1e1dd7(0x233)]('data-markdown-parsed', !![]);
                var _0x214c71 = _0x1f84a9[_0x1e1dd7(0x1fb)](_0x1e1dd7(0x23d)), _0x2e5543 = _0x3a5784(_0x1f84a9);
                _0x1f84a9['innerHTML'] = _0x545885(_0x2e5543), _0x214f94(_0x1f84a9, _0x1f84a9, null, _0x1f84a9[_0x1e1dd7(0x21a)]('data-element-attributes') || _0x1f84a9['parentNode']['getAttribute'](_0x1e1dd7(0x23e)) || DEFAULT_ELEMENT_ATTRIBUTES_SEPARATOR, _0x1f84a9[_0x1e1dd7(0x21a)](_0x1e1dd7(0x23f)) || _0x1f84a9[_0x1e1dd7(0x240)][_0x1e1dd7(0x21a)](_0x1e1dd7(0x23f)) || DEFAULT_SLIDE_ATTRIBUTES_SEPARATOR), _0x214c71 && _0x1f84a9[_0x1e1dd7(0x241)](_0x214c71);
            }), Promise[_0x1c7134(0x242)]();
        }
        function _0x36e049(_0xa6ec2f) {
            var _0x30c0bf = _0x4b93;
            return _0xa6ec2f[_0x30c0bf(0x1fd)](/([&<>'"])/g, _0x3333e1 => HTML_ESCAPE_MAP[_0x3333e1]);
        }
        return {
            'id': _0x2a484b(0x243),
            'init': function (_0x1bac07) {
                var _0x59b9da = _0x2a484b;
                _0x19488c = _0x1bac07;
                let {
                    renderer: _0x2a5073,
                    animateLists: _0x2f1199,
                    ..._0xb6ff3e
                } = _0x19488c['getConfig']()[_0x59b9da(0x243)] || {};
                return !_0x2a5073 && (_0x2a5073 = new _0x545885['Renderer'](), _0x2a5073[_0x59b9da(0x244)] = (_0x424e3d, _0x1b18ed) => {
                    var _0x14373c = _0x59b9da;
                    let _0x22488a = '';
                    return CODE_LINE_NUMBER_REGEX[_0x14373c(0x205)](_0x1b18ed) && (_0x22488a = _0x1b18ed[_0x14373c(0x1ff)](CODE_LINE_NUMBER_REGEX)[0x1][_0x14373c(0x20b)](), _0x22488a = _0x14373c(0x245) + _0x22488a + '\x22', _0x1b18ed = _0x1b18ed[_0x14373c(0x1fd)](CODE_LINE_NUMBER_REGEX, '')[_0x14373c(0x20b)]()), _0x424e3d = _0x36e049(_0x424e3d), _0x14373c(0x246) + _0x22488a + '\x20class=\x22' + _0x1b18ed + '\x22>' + _0x424e3d + _0x14373c(0x247);
                }), _0x2f1199 === !![] && (_0x2a5073[_0x59b9da(0x248)] = _0xf48b82 => _0x59b9da(0x249) + _0xf48b82 + '</li>'), _0x545885[_0x59b9da(0x24a)]({
                    'renderer': _0x2a5073,
                    ..._0xb6ff3e
                }), _0x2071da(_0x19488c['getRevealElement']())[_0x59b9da(0x21b)](_0x5df56d);
            },
            'processSlides': _0x2071da,
            'convertSlides': _0x5df56d,
            'slidify': _0x4de13d,
            'marked': _0x545885
        };
    };
export default Plugin;
