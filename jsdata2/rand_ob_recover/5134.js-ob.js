var assert = require(_0x5995e5(244)), path = require('.'), isWindows = process[_0x5995e5(245)] === _0x5995e5(246), f = __dirname + '/simple/test-path.js';
assert[_0x5995e5(247)](path['basename'](f), _0x5995e5(248)), assert[_0x5995e5(247)](path[_0x5995e5(249)](f, _0x5995e5(250)), 'test-path'), assert['equal'](path[_0x5995e5(249)](''), ''), assert[_0x5995e5(247)](path[_0x5995e5(249)]('/dir/basename.ext'), _0x5995e5(251)), assert['equal'](path[_0x5995e5(249)](_0x5995e5(252)), _0x5995e5(251)), assert[_0x5995e5(247)](path[_0x5995e5(249)](_0x5995e5(251)), 'basename.ext'), assert[_0x5995e5(247)](path['basename'](_0x5995e5(253)), _0x5995e5(251)), assert[_0x5995e5(247)](path['basename'](_0x5995e5(254)), 'basename.ext');
if (isWindows) {
    var MrSOVv = _0x5995e5(255)[_0x5995e5(256)]('|'), lBsHpH = -868 + 219 * 43 + -8549;
    while (!![]) {
        switch (MrSOVv[lBsHpH++]) {
        case '0':
            assert[_0x5995e5(247)](path[_0x5995e5(249)](_0x5995e5(257)), _0x5995e5(251));
            continue;
        case '1':
            assert[_0x5995e5(247)](path[_0x5995e5(249)](_0x5995e5(258)), _0x5995e5(251));
            continue;
        case '2':
            assert[_0x5995e5(247)](path[_0x5995e5(249)](_0x5995e5(251)), 'basename.ext');
            continue;
        case '3':
            assert[_0x5995e5(247)](path['basename'](_0x5995e5(259)), _0x5995e5(251));
            continue;
        case '4':
            assert[_0x5995e5(247)](path[_0x5995e5(249)](_0x5995e5(260)), 'basename.ext');
            continue;
        }
        break;
    }
} else
    assert[_0x5995e5(247)](path['basename']('\\dir\\basename.ext'), '\\dir\\basename.ext'), assert['equal'](path[_0x5995e5(249)](_0x5995e5(260)), _0x5995e5(260)), assert[_0x5995e5(247)](path[_0x5995e5(249)](_0x5995e5(251)), _0x5995e5(251)), assert[_0x5995e5(247)](path['basename'](_0x5995e5(259)), _0x5995e5(259)), assert[_0x5995e5(247)](path[_0x5995e5(249)](_0x5995e5(258)), _0x5995e5(258));
if (!isWindows) {
    var controlCharFilename = _0x5995e5(261) + String[_0x5995e5(262)](1353 * 6 + -1068 + -7037);
    assert[_0x5995e5(247)](path[_0x5995e5(249)](_0x5995e5(263) + controlCharFilename), controlCharFilename);
}
assert[_0x5995e5(247)](path[_0x5995e5(264)](f), _0x5995e5(250)), assert[_0x5995e5(247)](path[_0x5995e5(265)](f)[_0x5995e5(266)](-(605 + -8593 + 7999)), isWindows ? 'test\\simple' : _0x5995e5(267)), assert[_0x5995e5(247)](path['dirname'](_0x5995e5(263)), '/a'), assert[_0x5995e5(247)](path[_0x5995e5(265)](_0x5995e5(268)), '/a'), assert['equal'](path[_0x5995e5(265)]('/a'), '/'), assert['equal'](path[_0x5995e5(265)](''), '.'), assert[_0x5995e5(247)](path['dirname']('/'), '/'), assert[_0x5995e5(247)](path[_0x5995e5(265)](_0x5995e5(269)), '/');
if (isWindows) {
    var WFjMXy = _0x5995e5(270)[_0x5995e5(256)]('|'), ZxUQSO = 6610 + 7 * 14 + -6708;
    while (!![]) {
        switch (WFjMXy[ZxUQSO++]) {
        case '0':
            assert['equal'](path[_0x5995e5(265)](_0x5995e5(271)), _0x5995e5(272));
            continue;
        case '1':
            assert[_0x5995e5(247)](path[_0x5995e5(265)](_0x5995e5(273)), _0x5995e5(273));
            continue;
        case '2':
            assert[_0x5995e5(247)](path[_0x5995e5(265)]('\\'), '\\');
            continue;
        case '3':
            assert[_0x5995e5(247)](path['dirname'](_0x5995e5(274)), _0x5995e5(273));
            continue;
        case '4':
            assert[_0x5995e5(247)](path['dirname']('c:\\foo\\bar'), _0x5995e5(274));
            continue;
        case '5':
            assert[_0x5995e5(247)](path[_0x5995e5(265)](_0x5995e5(275)), '\\');
            continue;
        case '6':
            assert['equal'](path[_0x5995e5(265)]('\\\\unc\\share\\foo'), _0x5995e5(276));
            continue;
        case '7':
            assert[_0x5995e5(247)](path[_0x5995e5(265)](_0x5995e5(277)), _0x5995e5(277));
            continue;
        case '8':
            assert[_0x5995e5(247)](path[_0x5995e5(265)]('\\\\unc\\share\\foo\\bar\\'), _0x5995e5(278));
            continue;
        case '9':
            assert['equal'](path[_0x5995e5(265)]('\\\\unc\\share\\foo\\bar'), _0x5995e5(278));
            continue;
        case '10':
            assert[_0x5995e5(247)](path['dirname'](_0x5995e5(272)), '\\');
            continue;
        case '11':
            assert[_0x5995e5(247)](path[_0x5995e5(265)]('\\foo\\bar'), '\\foo');
            continue;
        case '12':
            assert[_0x5995e5(247)](path[_0x5995e5(265)](_0x5995e5(279)), _0x5995e5(273));
            continue;
        case '13':
            assert[_0x5995e5(247)](path[_0x5995e5(265)](_0x5995e5(280)), 'c:');
            continue;
        case '14':
            assert[_0x5995e5(247)](path[_0x5995e5(265)](_0x5995e5(281)), _0x5995e5(276));
            continue;
        case '15':
            assert[_0x5995e5(247)](path[_0x5995e5(265)](_0x5995e5(282)), _0x5995e5(283));
            continue;
        case '16':
            assert['equal'](path[_0x5995e5(265)]('c:foo\\bar\\baz'), _0x5995e5(284));
            continue;
        case '17':
            assert[_0x5995e5(247)](path[_0x5995e5(265)](_0x5995e5(285)), 'c:');
            continue;
        case '18':
            assert['equal'](path[_0x5995e5(265)](_0x5995e5(286)), _0x5995e5(285));
            continue;
        case '19':
            assert[_0x5995e5(247)](path[_0x5995e5(265)](_0x5995e5(287)), _0x5995e5(288));
            continue;
        case '20':
            assert[_0x5995e5(247)](path[_0x5995e5(265)](_0x5995e5(289)), _0x5995e5(290));
            continue;
        case '21':
            assert[_0x5995e5(247)](path['dirname']('c:\\foo\\bar\\'), _0x5995e5(274));
            continue;
        case '22':
            assert[_0x5995e5(247)](path[_0x5995e5(265)](_0x5995e5(284)), _0x5995e5(285));
            continue;
        case '23':
            assert['equal'](path[_0x5995e5(265)]('c:'), 'c:');
            continue;
        }
        break;
    }
}
assert[_0x5995e5(247)](path[_0x5995e5(264)](''), ''), assert['equal'](path[_0x5995e5(264)](_0x5995e5(291)), ''), assert['equal'](path['extname'](_0x5995e5(292)), _0x5995e5(293)), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(294)), '.ext'), assert['equal'](path[_0x5995e5(264)]('/path.to/file'), ''), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(295)), ''), assert[_0x5995e5(247)](path['extname'](_0x5995e5(296)), _0x5995e5(293)), assert['equal'](path[_0x5995e5(264)](_0x5995e5(297)), '.ext'), assert['equal'](path[_0x5995e5(264)]('/path/to/..ext'), _0x5995e5(293)), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(298)), ''), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(299)), _0x5995e5(293)), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(300)), ''), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(301)), _0x5995e5(293)), assert[_0x5995e5(247)](path['extname'](_0x5995e5(302)), ''), assert['equal'](path[_0x5995e5(264)](_0x5995e5(303)), _0x5995e5(293)), assert['equal'](path[_0x5995e5(264)](_0x5995e5(304)), ''), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(305)), _0x5995e5(293)), assert['equal'](path[_0x5995e5(264)](_0x5995e5(306)), _0x5995e5(293)), assert[_0x5995e5(247)](path['extname'](_0x5995e5(307)), _0x5995e5(293)), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(308)), '.'), assert[_0x5995e5(247)](path[_0x5995e5(264)]('.'), ''), assert[_0x5995e5(247)](path['extname']('./'), ''), assert[_0x5995e5(247)](path[_0x5995e5(264)]('.file.ext'), _0x5995e5(293)), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(300)), ''), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(309)), '.'), assert[_0x5995e5(247)](path['extname'](_0x5995e5(310)), '.'), assert[_0x5995e5(247)](path[_0x5995e5(264)]('..'), ''), assert[_0x5995e5(247)](path[_0x5995e5(264)]('../'), ''), assert[_0x5995e5(247)](path['extname']('..file.ext'), _0x5995e5(293)), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(311)), '.file'), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(312)), '.'), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(313)), '.'), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(314)), '.'), assert[_0x5995e5(247)](path[_0x5995e5(264)]('...ext'), '.ext'), assert[_0x5995e5(247)](path[_0x5995e5(264)]('....'), '.'), assert[_0x5995e5(247)](path['extname']('file.ext/'), _0x5995e5(293)), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(315)), _0x5995e5(293)), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(316)), ''), assert[_0x5995e5(247)](path[_0x5995e5(264)]('file//'), ''), assert['equal'](path[_0x5995e5(264)](_0x5995e5(317)), '.'), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(318)), '.');
if (isWindows)
    assert[_0x5995e5(247)](path[_0x5995e5(264)]('.\\'), ''), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(319)), ''), assert[_0x5995e5(247)](path[_0x5995e5(264)]('file.ext\\'), '.ext'), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(320)), _0x5995e5(293)), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(321)), ''), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(322)), ''), assert[_0x5995e5(247)](path['extname'](_0x5995e5(323)), '.'), assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(324)), '.');
else {
    var ydOcgK = '1|2|5|4|0|7|3|6'['split']('|'), CrdAAr = 1 * 6106 + -50 + -6056;
    while (!![]) {
        switch (ydOcgK[CrdAAr++]) {
        case '0':
            assert[_0x5995e5(247)](path[_0x5995e5(264)]('file\\'), '');
            continue;
        case '1':
            assert[_0x5995e5(247)](path[_0x5995e5(264)]('.\\'), '');
            continue;
        case '2':
            assert[_0x5995e5(247)](path['extname'](_0x5995e5(319)), '.\\');
            continue;
        case '3':
            assert[_0x5995e5(247)](path['extname'](_0x5995e5(323)), '.\\');
            continue;
        case '4':
            assert['equal'](path['extname'](_0x5995e5(320)), _0x5995e5(325));
            continue;
        case '5':
            assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(326)), '.ext\\');
            continue;
        case '6':
            assert['equal'](path[_0x5995e5(264)](_0x5995e5(324)), '.\\\\');
            continue;
        case '7':
            assert[_0x5995e5(247)](path[_0x5995e5(264)](_0x5995e5(322)), '');
            continue;
        }
        break;
    }
}
var failures = [], joinTests = [
        [
            [
                '.',
                _0x5995e5(327),
                '..',
                '/b/c.js'
            ],
            _0x5995e5(328)
        ],
        [
            [
                '/.',
                _0x5995e5(327),
                '..',
                _0x5995e5(329)
            ],
            _0x5995e5(330)
        ],
        [
            [
                _0x5995e5(331),
                _0x5995e5(332)
            ],
            _0x5995e5(333)
        ],
        [
            [
                'foo',
                _0x5995e5(332)
            ],
            _0x5995e5(334)
        ],
        [
            [
                'foo/',
                '../../../bar'
            ],
            _0x5995e5(334)
        ],
        [
            [
                _0x5995e5(335),
                _0x5995e5(332)
            ],
            '../bar'
        ],
        [
            [
                _0x5995e5(335),
                _0x5995e5(336)
            ],
            _0x5995e5(337)
        ],
        [
            [
                'foo/x/',
                _0x5995e5(336)
            ],
            _0x5995e5(337)
        ],
        [
            [
                _0x5995e5(338),
                '.',
                _0x5995e5(339)
            ],
            _0x5995e5(337)
        ],
        [
            ['./'],
            './'
        ],
        [
            [
                '.',
                './'
            ],
            './'
        ],
        [
            [
                '.',
                '.',
                '.'
            ],
            '.'
        ],
        [
            [
                '.',
                './',
                '.'
            ],
            '.'
        ],
        [
            [
                '.',
                _0x5995e5(340),
                '.'
            ],
            '.'
        ],
        [
            [
                '.',
                _0x5995e5(341),
                '.'
            ],
            '.'
        ],
        [
            ['.'],
            '.'
        ],
        [
            [
                '',
                '.'
            ],
            '.'
        ],
        [
            [
                '',
                _0x5995e5(342)
            ],
            _0x5995e5(342)
        ],
        [
            [
                _0x5995e5(342),
                _0x5995e5(333)
            ],
            'foo/bar'
        ],
        [
            [
                '',
                '/foo'
            ],
            _0x5995e5(331)
        ],
        [
            [
                '',
                '',
                _0x5995e5(331)
            ],
            _0x5995e5(331)
        ],
        [
            [
                '',
                '',
                _0x5995e5(342)
            ],
            _0x5995e5(342)
        ],
        [
            [
                _0x5995e5(342),
                ''
            ],
            'foo'
        ],
        [
            [
                'foo/',
                ''
            ],
            _0x5995e5(343)
        ],
        [
            [
                _0x5995e5(342),
                '',
                '/bar'
            ],
            _0x5995e5(344)
        ],
        [
            [
                './',
                '..',
                _0x5995e5(331)
            ],
            _0x5995e5(345)
        ],
        [
            [
                './',
                '..',
                '..',
                '/foo'
            ],
            '../../foo'
        ],
        [
            [
                '.',
                '..',
                '..',
                '/foo'
            ],
            _0x5995e5(346)
        ],
        [
            [
                '',
                '..',
                '..',
                _0x5995e5(331)
            ],
            _0x5995e5(346)
        ],
        [
            ['/'],
            '/'
        ],
        [
            [
                '/',
                '.'
            ],
            '/'
        ],
        [
            [
                '/',
                '..'
            ],
            '/'
        ],
        [
            [
                '/',
                '..',
                '..'
            ],
            '/'
        ],
        [
            [''],
            '.'
        ],
        [
            [
                '',
                ''
            ],
            '.'
        ],
        [
            [_0x5995e5(347)],
            _0x5995e5(347)
        ],
        [
            [
                ' ',
                _0x5995e5(342)
            ],
            _0x5995e5(347)
        ],
        [
            [
                ' ',
                '.'
            ],
            ' '
        ],
        [
            [
                ' ',
                '/'
            ],
            ' /'
        ],
        [
            [
                ' ',
                ''
            ],
            ' '
        ],
        [
            [
                '/',
                _0x5995e5(342)
            ],
            _0x5995e5(331)
        ],
        [
            [
                '/',
                _0x5995e5(331)
            ],
            '/foo'
        ],
        [
            [
                '/',
                _0x5995e5(348)
            ],
            _0x5995e5(331)
        ],
        [
            [
                '/',
                '',
                _0x5995e5(331)
            ],
            '/foo'
        ],
        [
            [
                '',
                '/',
                _0x5995e5(342)
            ],
            _0x5995e5(331)
        ],
        [
            [
                '',
                '/',
                _0x5995e5(331)
            ],
            '/foo'
        ]
    ];
function _0x5c13(_0x379b49, _0x3e4f26) {
    return _0x5c13 = function (_0x58e1c6, _0x5a1a0) {
        _0x58e1c6 = _0x58e1c6 - (4830 + -918 * 2 + -2762);
        var _0x25315a = _0x2329[_0x58e1c6];
        return _0x25315a;
    }, _0x5c13(_0x379b49, _0x3e4f26);
}
isWindows && (joinTests = joinTests[_0x5995e5(349)]([
    [
        [_0x5995e5(350)],
        _0x5995e5(351)
    ],
    [
        [_0x5995e5(352)],
        _0x5995e5(351)
    ],
    [
        [_0x5995e5(353)],
        _0x5995e5(351)
    ],
    [
        [
            '//foo',
            'bar'
        ],
        _0x5995e5(351)
    ],
    [
        [
            _0x5995e5(354),
            _0x5995e5(339)
        ],
        _0x5995e5(351)
    ],
    [
        [
            '//foo',
            _0x5995e5(333)
        ],
        '//foo/bar/'
    ],
    [
        [
            _0x5995e5(348),
            '',
            'bar'
        ],
        _0x5995e5(351)
    ],
    [
        [
            _0x5995e5(354),
            '',
            _0x5995e5(339)
        ],
        '//foo/bar/'
    ],
    [
        [
            _0x5995e5(354),
            '',
            _0x5995e5(333)
        ],
        _0x5995e5(351)
    ],
    [
        [
            '',
            _0x5995e5(348),
            _0x5995e5(339)
        ],
        _0x5995e5(351)
    ],
    [
        [
            '',
            _0x5995e5(354),
            _0x5995e5(339)
        ],
        _0x5995e5(351)
    ],
    [
        [
            '',
            '//foo/',
            _0x5995e5(333)
        ],
        '//foo/bar/'
    ],
    [
        [
            '\\',
            _0x5995e5(344)
        ],
        _0x5995e5(355)
    ],
    [
        [
            '\\',
            _0x5995e5(355)
        ],
        _0x5995e5(355)
    ],
    [
        [
            '',
            '/',
            _0x5995e5(355)
        ],
        _0x5995e5(355)
    ],
    [
        [
            '//',
            'foo/bar'
        ],
        _0x5995e5(355)
    ],
    [
        [
            '//',
            _0x5995e5(355)
        ],
        '/foo/bar'
    ],
    [
        [
            '\\\\',
            '/',
            '/foo/bar'
        ],
        _0x5995e5(355)
    ],
    [
        ['//'],
        '/'
    ],
    [
        [_0x5995e5(348)],
        _0x5995e5(331)
    ],
    [
        [_0x5995e5(354)],
        _0x5995e5(356)
    ],
    [
        [
            _0x5995e5(348),
            '/'
        ],
        _0x5995e5(356)
    ],
    [
        [
            _0x5995e5(348),
            '',
            '/'
        ],
        _0x5995e5(356)
    ],
    [
        [_0x5995e5(357)],
        _0x5995e5(355)
    ],
    [
        [
            _0x5995e5(358),
            'bar'
        ],
        _0x5995e5(355)
    ],
    [
        [_0x5995e5(359)],
        _0x5995e5(355)
    ],
    [
        ['c:'],
        'c:.'
    ],
    [
        [_0x5995e5(360)],
        _0x5995e5(360)
    ],
    [
        [
            'c:',
            ''
        ],
        _0x5995e5(360)
    ],
    [
        [
            '',
            'c:'
        ],
        'c:.'
    ],
    [
        [
            _0x5995e5(360),
            '/'
        ],
        _0x5995e5(361)
    ],
    [
        [
            'c:.',
            _0x5995e5(298)
        ],
        _0x5995e5(362)
    ],
    [
        [
            'c:',
            '/'
        ],
        _0x5995e5(363)
    ],
    [
        [
            'c:',
            'file'
        ],
        _0x5995e5(364)
    ]
]));
joinTests[_0x5995e5(365)](function (_0x2a1204) {
    var _0x84735f = _0x5995e5, _0x494d45 = {
            'fFXHe': function (_0x3a38ac, _0xf7f0a9) {
                return _0x3a38ac + _0xf7f0a9;
            },
            'vWWZE': function (_0x5ef558, _0x3f2ccf) {
                return _0x5ef558 + _0x3f2ccf;
            },
            'YxHzW': function (_0x4133b9, _0x337ceb) {
                return _0x4133b9 + _0x337ceb;
            },
            'mkrPs': '\n  actual=',
            'nlhIp': function (_0x2f3616, _0x19cb2f) {
                return _0x2f3616 !== _0x19cb2f;
            }
        }, _0x3b2d8d = path[_0x84735f(366)][_0x84735f(367)](path, _0x2a1204[-4480 + -587 + 5067 * 1]), _0x2db683 = isWindows ? _0x2a1204[-4615 + 5139 + 1 * -523]['replace'](/\//g, '\\') : _0x2a1204[6544 + 1 * 4053 + -6 * 1766], _0x3e810a = _0x494d45['fFXHe'](_0x494d45[_0x84735f(368)](_0x494d45[_0x84735f(369)](_0x494d45['YxHzW'](_0x494d45[_0x84735f(369)](_0x84735f(370), _0x2a1204[-4182 + -7994 * 1 + -2 * -6088][_0x84735f(371)](JSON['stringify'])[_0x84735f(366)](',')), ')') + _0x84735f(372), JSON[_0x84735f(373)](_0x2db683)), _0x494d45[_0x84735f(374)]), JSON[_0x84735f(373)](_0x3b2d8d));
    if (_0x494d45[_0x84735f(375)](_0x3b2d8d, _0x2db683))
        failures['push']('\n' + _0x3e810a);
}), assert['equal'](failures[_0x5995e5(376)], -9722 + 1 * 7639 + -2083 * -1, failures['join'](''));
var joinThrowTests = [
    !![],
    ![],
    1 * 7888 + 1 * -9406 + 1525,
    null,
    {},
    undefined,
    [],
    NaN
];
joinThrowTests[_0x5995e5(365)](function (_0x192ce8) {
    var _0x1a0728 = _0x5995e5;
    assert[_0x1a0728(377)](function () {
        var _0x44f589 = _0x1a0728;
        path[_0x44f589(366)](_0x192ce8);
    }, TypeError), assert[_0x1a0728(377)](function () {
        path['resolve'](_0x192ce8);
    }, TypeError);
});
if (isWindows) {
    var aBCGLG = '5|1|0|2|3|4'['split']('|'), BepZRm = -4844 * -2 + 8537 * 1 + 225 * -81;
    while (!![]) {
        switch (aBCGLG[BepZRm++]) {
        case '0':
            assert[_0x5995e5(247)](path[_0x5995e5(378)](_0x5995e5(379)), _0x5995e5(380));
            continue;
        case '1':
            assert[_0x5995e5(247)](path['normalize'](_0x5995e5(381)), '\\bar');
            continue;
        case '2':
            assert['equal'](path[_0x5995e5(378)](_0x5995e5(382)), _0x5995e5(383));
            continue;
        case '3':
            assert[_0x5995e5(247)](path[_0x5995e5(378)]('a//b//.'), 'a\\b');
            continue;
        case '4':
            assert[_0x5995e5(247)](path[_0x5995e5(378)]('//server/share/dir/file.ext'), _0x5995e5(384));
            continue;
        case '5':
            assert[_0x5995e5(247)](path[_0x5995e5(378)](_0x5995e5(385)), 'fixtures\\b\\c.js');
            continue;
        }
        break;
    }
} else {
    var fBUiFB = _0x5995e5(386)['split']('|'), HPlsRQ = -9222 + 5497 + 3725;
    while (!![]) {
        switch (fBUiFB[HPlsRQ++]) {
        case '0':
            assert[_0x5995e5(247)](path['normalize'](_0x5995e5(382)), _0x5995e5(387));
            continue;
        case '1':
            assert['equal'](path[_0x5995e5(378)](_0x5995e5(381)), _0x5995e5(333));
            continue;
        case '2':
            assert[_0x5995e5(247)](path['normalize'](_0x5995e5(379)), _0x5995e5(388));
            continue;
        case '3':
            assert[_0x5995e5(247)](path[_0x5995e5(378)](_0x5995e5(385)), 'fixtures/b/c.js');
            continue;
        case '4':
            assert[_0x5995e5(247)](path[_0x5995e5(378)](_0x5995e5(389)), _0x5995e5(388));
            continue;
        }
        break;
    }
}
if (isWindows)
    var resolveTests = [
        [
            [
                'c:/blah\\blah',
                'd:/games',
                _0x5995e5(390)
            ],
            _0x5995e5(391)
        ],
        [
            [
                'c:/ignore',
                'd:\\a/b\\c/d',
                _0x5995e5(392)
            ],
            _0x5995e5(393)
        ],
        [
            [
                _0x5995e5(394),
                _0x5995e5(395)
            ],
            _0x5995e5(396)
        ],
        [
            [
                _0x5995e5(397),
                _0x5995e5(398)
            ],
            _0x5995e5(399)
        ],
        [
            ['.'],
            process[_0x5995e5(400)]()
        ],
        [
            [
                '//server/share',
                '..',
                _0x5995e5(401)
            ],
            '\\\\server\\share\\relative'
        ],
        [
            [
                _0x5995e5(363),
                '//'
            ],
            'c:\\'
        ],
        [
            [
                _0x5995e5(363),
                '//dir'
            ],
            'c:\\dir'
        ],
        [
            [
                _0x5995e5(363),
                _0x5995e5(402)
            ],
            _0x5995e5(403)
        ],
        [
            [
                _0x5995e5(363),
                _0x5995e5(404)
            ],
            _0x5995e5(403)
        ],
        [
            [
                'c:/',
                '///some//dir'
            ],
            _0x5995e5(405)
        ]
    ];
else
    var resolveTests = [
        [
            [
                _0x5995e5(406),
                _0x5995e5(407),
                _0x5995e5(316)
            ],
            '/var/file'
        ],
        [
            [
                _0x5995e5(406),
                _0x5995e5(408),
                _0x5995e5(316)
            ],
            '/file'
        ],
        [
            [
                _0x5995e5(409),
                _0x5995e5(410)
            ],
            process['cwd']()
        ],
        [
            ['.'],
            process[_0x5995e5(400)]()
        ],
        [
            [
                _0x5995e5(411),
                '.',
                '/absolute/'
            ],
            _0x5995e5(412)
        ]
    ];
var failures = [];
resolveTests[_0x5995e5(365)](function (_0x21399b) {
    var _0x1db9e1 = _0x5995e5, _0x18586c = {
            'RbLaK': function (_0x1843a1, _0xa974fb) {
                return _0x1843a1 + _0xa974fb;
            },
            'ZBMPr': function (_0x1546ab, _0x38a8c1) {
                return _0x1546ab + _0x38a8c1;
            },
            'qzobD': function (_0x2f1ce0, _0x5ab4ec) {
                return _0x2f1ce0 + _0x5ab4ec;
            },
            'UEdOM': _0x1db9e1(413),
            'ABbAJ': _0x1db9e1(372),
            'ykVFc': '\n  actual=',
            'RhvZq': function (_0x2765c0, _0x43a22e) {
                return _0x2765c0 !== _0x43a22e;
            }
        }, _0x3771a2 = path[_0x1db9e1(414)][_0x1db9e1(367)](path, _0x21399b[-15 * -337 + 1 * -8533 + -94 * -37]), _0x525ceb = _0x21399b[-1206 + -4897 + 6104], _0x17de8b = _0x18586c['RbLaK'](_0x18586c[_0x1db9e1(415)](_0x18586c[_0x1db9e1(415)](_0x18586c[_0x1db9e1(416)](_0x18586c[_0x1db9e1(417)](_0x18586c['UEdOM'], _0x21399b[8431 * -1 + -6903 + 15334][_0x1db9e1(371)](JSON[_0x1db9e1(373)])['join'](',')), ')'), _0x18586c[_0x1db9e1(418)]), JSON['stringify'](_0x525ceb)), _0x18586c[_0x1db9e1(419)]) + JSON[_0x1db9e1(373)](_0x3771a2);
    if (_0x18586c[_0x1db9e1(420)](_0x3771a2, _0x525ceb))
        failures[_0x1db9e1(421)]('\n' + _0x17de8b);
}), assert[_0x5995e5(247)](failures[_0x5995e5(376)], -8956 + 2346 + 1322 * 5, failures[_0x5995e5(366)](''));
if (isWindows) {
    var vkUlqw = _0x5995e5(422)[_0x5995e5(256)]('|'), JoPZbF = 4718 * -1 + 7918 + 100 * -32;
    while (!![]) {
        switch (vkUlqw[JoPZbF++]) {
        case '0':
            assert[_0x5995e5(247)](path['isAbsolute'](_0x5995e5(423)), !![]);
            continue;
        case '1':
            assert[_0x5995e5(247)](path[_0x5995e5(424)]('C:cwd\\another'), ![]);
            continue;
        case '2':
            assert[_0x5995e5(247)](path[_0x5995e5(424)](_0x5995e5(425)), !![]);
            continue;
        case '3':
            assert[_0x5995e5(247)](path['isAbsolute'](_0x5995e5(426)), !![]);
            continue;
        case '4':
            assert[_0x5995e5(247)](path[_0x5995e5(424)]('directory\\directory'), ![]);
            continue;
        case '5':
            assert['equal'](path['isAbsolute']('directory/directory'), ![]);
            continue;
        case '6':
            assert[_0x5995e5(247)](path[_0x5995e5(424)](_0x5995e5(427)), !![]);
            continue;
        case '7':
            assert['equal'](path['isAbsolute']('C:cwd/another'), ![]);
            continue;
        }
        break;
    }
} else
    assert[_0x5995e5(247)](path['isAbsolute'](_0x5995e5(428)), !![]), assert['equal'](path['isAbsolute'](_0x5995e5(429)), !![]), assert[_0x5995e5(247)](path[_0x5995e5(424)](_0x5995e5(430)), ![]), assert['equal'](path['isAbsolute'](_0x5995e5(431)), ![]);
if (isWindows)
    var relativeTests = [
        [
            _0x5995e5(432),
            _0x5995e5(433),
            _0x5995e5(434)
        ],
        [
            'c:/aaaa/bbbb',
            _0x5995e5(435),
            '..'
        ],
        [
            _0x5995e5(436),
            'c:/cccc',
            _0x5995e5(437)
        ],
        [
            _0x5995e5(436),
            'c:/aaaa/bbbb',
            ''
        ],
        [
            'c:/aaaa/bbbb',
            _0x5995e5(438),
            '..\\cccc'
        ],
        [
            'c:/aaaa/',
            _0x5995e5(438),
            'cccc'
        ],
        [
            _0x5995e5(363),
            _0x5995e5(439),
            _0x5995e5(440)
        ],
        [
            _0x5995e5(436),
            _0x5995e5(441),
            'd:\\'
        ]
    ];
else
    var relativeTests = [
        [
            _0x5995e5(406),
            _0x5995e5(442),
            '..'
        ],
        [
            _0x5995e5(406),
            '/bin',
            _0x5995e5(443)
        ],
        [
            _0x5995e5(406),
            _0x5995e5(406),
            ''
        ],
        [
            '/var/lib',
            _0x5995e5(444),
            _0x5995e5(445)
        ],
        [
            _0x5995e5(446),
            _0x5995e5(406),
            _0x5995e5(447)
        ],
        [
            '/',
            _0x5995e5(406),
            _0x5995e5(448)
        ]
    ];
var failures = [];
relativeTests[_0x5995e5(365)](function (_0x361120) {
    var _0x357b17 = _0x5995e5, _0x25a717 = {
            'StyBe': function (_0x3c4e34, _0x145a9e) {
                return _0x3c4e34 + _0x145a9e;
            },
            'RekMv': function (_0x1c9552, _0x203e01) {
                return _0x1c9552 + _0x203e01;
            },
            'wSvnh': 'path.relative(',
            'CCKJC': _0x357b17(372),
            'kVpTS': '\n  actual=',
            'aYoAO': function (_0x2957ef, _0x11fb96) {
                return _0x2957ef !== _0x11fb96;
            }
        }, _0x1eaea1 = path[_0x357b17(449)](_0x361120[2734 + 2932 * -1 + 18 * 11], _0x361120[7012 + 28 * 11 + -7319]), _0x4df6a1 = _0x361120[1 * 8306 + -8141 + 163 * -1], _0x3bdc99 = _0x25a717['StyBe'](_0x25a717[_0x357b17(450)](_0x25a717[_0x357b17(451)](_0x25a717[_0x357b17(452)] + _0x361120[_0x357b17(453)](3556 * -2 + 8546 + 1434 * -1, -43 * 83 + -5132 + 8703)[_0x357b17(371)](JSON['stringify'])[_0x357b17(366)](','), ')'), _0x25a717[_0x357b17(454)]) + JSON[_0x357b17(373)](_0x4df6a1) + _0x25a717[_0x357b17(455)], JSON[_0x357b17(373)](_0x1eaea1));
    if (_0x25a717[_0x357b17(456)](_0x1eaea1, _0x4df6a1))
        failures[_0x357b17(421)](_0x25a717[_0x357b17(451)]('\n', _0x3bdc99));
}), assert[_0x5995e5(247)](failures['length'], -3 * -1758 + -5989 + -55 * -13, failures[_0x5995e5(366)](''));
isWindows ? assert[_0x5995e5(247)](path[_0x5995e5(457)], '\\') : assert['equal'](path[_0x5995e5(457)], '/');
isWindows ? assert[_0x5995e5(247)](path[_0x5995e5(458)], ';') : assert[_0x5995e5(247)](path[_0x5995e5(458)], ':');