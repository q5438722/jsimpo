var assert = require(_0x8e4a97(395)), path = require('.'), isWindows = process['platform'] === _0x8e4a97(396), f = __dirname + _0x8e4a97(397);
assert[_0x8e4a97(398)](path[_0x8e4a97(399)](f), _0x8e4a97(400)), assert[_0x8e4a97(398)](path[_0x8e4a97(399)](f, _0x8e4a97(401)), _0x8e4a97(402)), assert[_0x8e4a97(398)](path[_0x8e4a97(399)](''), ''), assert[_0x8e4a97(398)](path[_0x8e4a97(399)](_0x8e4a97(403)), _0x8e4a97(404)), assert['equal'](path[_0x8e4a97(399)](_0x8e4a97(405)), 'basename.ext'), assert[_0x8e4a97(398)](path[_0x8e4a97(399)](_0x8e4a97(404)), _0x8e4a97(404)), assert[_0x8e4a97(398)](path[_0x8e4a97(399)](_0x8e4a97(406)), _0x8e4a97(404)), assert[_0x8e4a97(398)](path[_0x8e4a97(399)](_0x8e4a97(407)), _0x8e4a97(404));
isWindows ? (assert[_0x8e4a97(398)](path[_0x8e4a97(399)](_0x8e4a97(408)), 'basename.ext'), assert[_0x8e4a97(398)](path['basename']('\\basename.ext'), _0x8e4a97(404)), assert[_0x8e4a97(398)](path[_0x8e4a97(399)](_0x8e4a97(404)), _0x8e4a97(404)), assert[_0x8e4a97(398)](path['basename'](_0x8e4a97(409)), 'basename.ext'), assert[_0x8e4a97(398)](path[_0x8e4a97(399)](_0x8e4a97(410)), _0x8e4a97(404))) : (assert['equal'](path[_0x8e4a97(399)](_0x8e4a97(408)), _0x8e4a97(408)), assert[_0x8e4a97(398)](path[_0x8e4a97(399)](_0x8e4a97(411)), _0x8e4a97(411)), assert[_0x8e4a97(398)](path[_0x8e4a97(399)](_0x8e4a97(404)), _0x8e4a97(404)), assert[_0x8e4a97(398)](path[_0x8e4a97(399)](_0x8e4a97(409)), _0x8e4a97(409)), assert['equal'](path['basename'](_0x8e4a97(410)), _0x8e4a97(410)));
if (!isWindows) {
    var controlCharFilename = _0x8e4a97(412) + String['fromCharCode'](13);
    assert['equal'](path[_0x8e4a97(399)](_0x8e4a97(413) + controlCharFilename), controlCharFilename);
}
assert[_0x8e4a97(398)](path['extname'](f), _0x8e4a97(401)), assert['equal'](path[_0x8e4a97(414)](f)[_0x8e4a97(415)](-11), isWindows ? _0x8e4a97(416) : _0x8e4a97(417)), assert[_0x8e4a97(398)](path['dirname']('/a/b/'), '/a'), assert[_0x8e4a97(398)](path[_0x8e4a97(414)](_0x8e4a97(418)), '/a'), assert[_0x8e4a97(398)](path['dirname']('/a'), '/'), assert[_0x8e4a97(398)](path[_0x8e4a97(414)](''), '.'), assert[_0x8e4a97(398)](path[_0x8e4a97(414)]('/'), '/'), assert[_0x8e4a97(398)](path['dirname'](_0x8e4a97(419)), '/');
isWindows && (assert['equal'](path[_0x8e4a97(414)](_0x8e4a97(420)), _0x8e4a97(420)), assert['equal'](path[_0x8e4a97(414)](_0x8e4a97(421)), _0x8e4a97(420)), assert['equal'](path[_0x8e4a97(414)](_0x8e4a97(422)), 'c:\\'), assert['equal'](path['dirname'](_0x8e4a97(423)), _0x8e4a97(421)), assert[_0x8e4a97(398)](path['dirname'](_0x8e4a97(424)), _0x8e4a97(421)), assert['equal'](path[_0x8e4a97(414)](_0x8e4a97(425)), _0x8e4a97(423)), assert[_0x8e4a97(398)](path['dirname']('\\'), '\\'), assert[_0x8e4a97(398)](path['dirname'](_0x8e4a97(426)), '\\'), assert[_0x8e4a97(398)](path['dirname'](_0x8e4a97(427)), '\\'), assert[_0x8e4a97(398)](path[_0x8e4a97(414)](_0x8e4a97(428)), _0x8e4a97(426)), assert[_0x8e4a97(398)](path[_0x8e4a97(414)](_0x8e4a97(429)), _0x8e4a97(426)), assert['equal'](path[_0x8e4a97(414)](_0x8e4a97(430)), _0x8e4a97(428)), assert[_0x8e4a97(398)](path[_0x8e4a97(414)]('c:'), 'c:'), assert[_0x8e4a97(398)](path[_0x8e4a97(414)](_0x8e4a97(431)), 'c:'), assert['equal'](path[_0x8e4a97(414)](_0x8e4a97(432)), 'c:'), assert['equal'](path[_0x8e4a97(414)](_0x8e4a97(433)), _0x8e4a97(431)), assert['equal'](path[_0x8e4a97(414)](_0x8e4a97(434)), _0x8e4a97(431)), assert[_0x8e4a97(398)](path[_0x8e4a97(414)](_0x8e4a97(435)), _0x8e4a97(433)), assert['equal'](path[_0x8e4a97(414)](_0x8e4a97(436)), _0x8e4a97(436)), assert['equal'](path[_0x8e4a97(414)](_0x8e4a97(437)), _0x8e4a97(438)), assert[_0x8e4a97(398)](path['dirname'](_0x8e4a97(439)), '\\\\unc\\share\\'), assert[_0x8e4a97(398)](path[_0x8e4a97(414)]('\\\\unc\\share\\foo\\bar'), _0x8e4a97(437)), assert[_0x8e4a97(398)](path[_0x8e4a97(414)](_0x8e4a97(440)), _0x8e4a97(437)), assert['equal'](path[_0x8e4a97(414)](_0x8e4a97(441)), _0x8e4a97(442)));
assert['equal'](path[_0x8e4a97(443)](''), ''), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(444)), ''), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(445)), _0x8e4a97(446)), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(447)), '.ext'), assert['equal'](path[_0x8e4a97(443)]('/path.to/file'), ''), assert['equal'](path[_0x8e4a97(443)](_0x8e4a97(448)), ''), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(449)), _0x8e4a97(446)), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(450)), '.ext'), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(451)), _0x8e4a97(446)), assert[_0x8e4a97(398)](path[_0x8e4a97(443)]('file'), ''), assert['equal'](path[_0x8e4a97(443)]('file.ext'), _0x8e4a97(446)), assert['equal'](path[_0x8e4a97(443)](_0x8e4a97(452)), ''), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(453)), _0x8e4a97(446)), assert[_0x8e4a97(398)](path['extname'](_0x8e4a97(454)), ''), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(455)), '.ext'), assert['equal'](path['extname'](_0x8e4a97(456)), ''), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(457)), '.ext'), assert['equal'](path[_0x8e4a97(443)](_0x8e4a97(458)), '.ext'), assert['equal'](path[_0x8e4a97(443)](_0x8e4a97(459)), _0x8e4a97(446)), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(460)), '.'), assert[_0x8e4a97(398)](path[_0x8e4a97(443)]('.'), ''), assert[_0x8e4a97(398)](path['extname']('./'), ''), assert[_0x8e4a97(398)](path[_0x8e4a97(443)]('.file.ext'), _0x8e4a97(446)), assert['equal'](path[_0x8e4a97(443)](_0x8e4a97(452)), ''), assert[_0x8e4a97(398)](path['extname'](_0x8e4a97(461)), '.'), assert['equal'](path[_0x8e4a97(443)](_0x8e4a97(462)), '.'), assert[_0x8e4a97(398)](path[_0x8e4a97(443)]('..'), ''), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(463)), ''), assert[_0x8e4a97(398)](path[_0x8e4a97(443)]('..file.ext'), _0x8e4a97(446)), assert[_0x8e4a97(398)](path['extname'](_0x8e4a97(464)), _0x8e4a97(452)), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(465)), '.'), assert[_0x8e4a97(398)](path['extname'](_0x8e4a97(466)), '.'), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(467)), '.'), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(468)), _0x8e4a97(446)), assert['equal'](path['extname'](_0x8e4a97(469)), '.'), assert['equal'](path[_0x8e4a97(443)]('file.ext/'), _0x8e4a97(446)), assert['equal'](path['extname'](_0x8e4a97(470)), _0x8e4a97(446)), assert[_0x8e4a97(398)](path['extname'](_0x8e4a97(471)), ''), assert['equal'](path[_0x8e4a97(443)](_0x8e4a97(472)), ''), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(473)), '.'), assert['equal'](path[_0x8e4a97(443)]('file.//'), '.');
isWindows ? (assert['equal'](path[_0x8e4a97(443)]('.\\'), ''), assert['equal'](path[_0x8e4a97(443)](_0x8e4a97(474)), ''), assert['equal'](path['extname'](_0x8e4a97(475)), '.ext'), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(476)), _0x8e4a97(446)), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(477)), ''), assert[_0x8e4a97(398)](path[_0x8e4a97(443)]('file\\\\'), ''), assert[_0x8e4a97(398)](path['extname'](_0x8e4a97(478)), '.'), assert['equal'](path[_0x8e4a97(443)](_0x8e4a97(479)), '.')) : (assert[_0x8e4a97(398)](path['extname']('.\\'), ''), assert[_0x8e4a97(398)](path['extname'](_0x8e4a97(474)), '.\\'), assert['equal'](path[_0x8e4a97(443)](_0x8e4a97(475)), '.ext\\'), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(476)), '.ext\\\\'), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(477)), ''), assert['equal'](path[_0x8e4a97(443)]('file\\\\'), ''), assert[_0x8e4a97(398)](path['extname']('file.\\'), '.\\'), assert[_0x8e4a97(398)](path[_0x8e4a97(443)](_0x8e4a97(479)), _0x8e4a97(480)));
var failures = [], joinTests = [
        [
            [
                '.',
                'x/b',
                '..',
                _0x8e4a97(481)
            ],
            _0x8e4a97(482)
        ],
        [
            [
                '/.',
                _0x8e4a97(483),
                '..',
                _0x8e4a97(481)
            ],
            _0x8e4a97(484)
        ],
        [
            [
                _0x8e4a97(485),
                '../../../bar'
            ],
            _0x8e4a97(486)
        ],
        [
            [
                'foo',
                '../../../bar'
            ],
            _0x8e4a97(487)
        ],
        [
            [
                _0x8e4a97(488),
                _0x8e4a97(489)
            ],
            '../../bar'
        ],
        [
            [
                'foo/x',
                _0x8e4a97(489)
            ],
            _0x8e4a97(490)
        ],
        [
            [
                _0x8e4a97(491),
                './bar'
            ],
            _0x8e4a97(492)
        ],
        [
            [
                'foo/x/',
                _0x8e4a97(493)
            ],
            _0x8e4a97(492)
        ],
        [
            [
                _0x8e4a97(494),
                '.',
                _0x8e4a97(495)
            ],
            _0x8e4a97(492)
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
                '/./',
                '.'
            ],
            '.'
        ],
        [
            [
                '.',
                _0x8e4a97(496),
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
                _0x8e4a97(497)
            ],
            _0x8e4a97(497)
        ],
        [
            [
                _0x8e4a97(497),
                '/bar'
            ],
            _0x8e4a97(498)
        ],
        [
            [
                '',
                _0x8e4a97(485)
            ],
            '/foo'
        ],
        [
            [
                '',
                '',
                '/foo'
            ],
            '/foo'
        ],
        [
            [
                '',
                '',
                _0x8e4a97(497)
            ],
            _0x8e4a97(497)
        ],
        [
            [
                'foo',
                ''
            ],
            'foo'
        ],
        [
            [
                _0x8e4a97(488),
                ''
            ],
            'foo/'
        ],
        [
            [
                'foo',
                '',
                _0x8e4a97(486)
            ],
            _0x8e4a97(498)
        ],
        [
            [
                './',
                '..',
                _0x8e4a97(485)
            ],
            _0x8e4a97(499)
        ],
        [
            [
                './',
                '..',
                '..',
                _0x8e4a97(485)
            ],
            _0x8e4a97(500)
        ],
        [
            [
                '.',
                '..',
                '..',
                _0x8e4a97(485)
            ],
            _0x8e4a97(500)
        ],
        [
            [
                '',
                '..',
                '..',
                _0x8e4a97(485)
            ],
            _0x8e4a97(500)
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
            [' /foo'],
            _0x8e4a97(501)
        ],
        [
            [
                ' ',
                _0x8e4a97(497)
            ],
            _0x8e4a97(501)
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
                _0x8e4a97(497)
            ],
            _0x8e4a97(485)
        ],
        [
            [
                '/',
                _0x8e4a97(485)
            ],
            _0x8e4a97(485)
        ],
        [
            [
                '/',
                _0x8e4a97(502)
            ],
            _0x8e4a97(485)
        ],
        [
            [
                '/',
                '',
                '/foo'
            ],
            _0x8e4a97(485)
        ],
        [
            [
                '',
                '/',
                _0x8e4a97(497)
            ],
            _0x8e4a97(485)
        ],
        [
            [
                '',
                '/',
                _0x8e4a97(485)
            ],
            _0x8e4a97(485)
        ]
    ];
isWindows && (joinTests = joinTests[_0x8e4a97(503)]([
    [
        [_0x8e4a97(504)],
        _0x8e4a97(505)
    ],
    [
        ['\\/foo/bar'],
        '//foo/bar/'
    ],
    [
        [_0x8e4a97(506)],
        _0x8e4a97(505)
    ],
    [
        [
            _0x8e4a97(502),
            _0x8e4a97(495)
        ],
        _0x8e4a97(505)
    ],
    [
        [
            '//foo/',
            _0x8e4a97(495)
        ],
        _0x8e4a97(505)
    ],
    [
        [
            _0x8e4a97(502),
            _0x8e4a97(486)
        ],
        _0x8e4a97(505)
    ],
    [
        [
            _0x8e4a97(502),
            '',
            _0x8e4a97(495)
        ],
        _0x8e4a97(505)
    ],
    [
        [
            _0x8e4a97(507),
            '',
            'bar'
        ],
        _0x8e4a97(505)
    ],
    [
        [
            '//foo/',
            '',
            '/bar'
        ],
        _0x8e4a97(505)
    ],
    [
        [
            '',
            '//foo',
            'bar'
        ],
        '//foo/bar/'
    ],
    [
        [
            '',
            _0x8e4a97(507),
            _0x8e4a97(495)
        ],
        _0x8e4a97(505)
    ],
    [
        [
            '',
            _0x8e4a97(507),
            _0x8e4a97(486)
        ],
        _0x8e4a97(505)
    ],
    [
        [
            '\\',
            _0x8e4a97(498)
        ],
        '/foo/bar'
    ],
    [
        [
            '\\',
            '/foo/bar'
        ],
        _0x8e4a97(508)
    ],
    [
        [
            '',
            '/',
            _0x8e4a97(508)
        ],
        _0x8e4a97(508)
    ],
    [
        [
            '//',
            _0x8e4a97(498)
        ],
        _0x8e4a97(508)
    ],
    [
        [
            '//',
            _0x8e4a97(508)
        ],
        _0x8e4a97(508)
    ],
    [
        [
            '\\\\',
            '/',
            _0x8e4a97(508)
        ],
        _0x8e4a97(508)
    ],
    [
        ['//'],
        '/'
    ],
    [
        [_0x8e4a97(502)],
        '/foo'
    ],
    [
        [_0x8e4a97(507)],
        _0x8e4a97(509)
    ],
    [
        [
            '//foo',
            '/'
        ],
        _0x8e4a97(509)
    ],
    [
        [
            _0x8e4a97(502),
            '',
            '/'
        ],
        _0x8e4a97(509)
    ],
    [
        [_0x8e4a97(510)],
        _0x8e4a97(508)
    ],
    [
        [
            '////foo',
            _0x8e4a97(495)
        ],
        '/foo/bar'
    ],
    [
        [_0x8e4a97(511)],
        _0x8e4a97(508)
    ],
    [
        ['c:'],
        'c:.'
    ],
    [
        [_0x8e4a97(512)],
        'c:.'
    ],
    [
        [
            'c:',
            ''
        ],
        _0x8e4a97(512)
    ],
    [
        [
            '',
            'c:'
        ],
        _0x8e4a97(512)
    ],
    [
        [
            _0x8e4a97(512),
            '/'
        ],
        _0x8e4a97(513)
    ],
    [
        [
            _0x8e4a97(512),
            _0x8e4a97(514)
        ],
        _0x8e4a97(515)
    ],
    [
        [
            'c:',
            '/'
        ],
        _0x8e4a97(516)
    ],
    [
        [
            'c:',
            _0x8e4a97(514)
        ],
        _0x8e4a97(517)
    ]
]));
joinTests['forEach'](function (_0x13fcca) {
    var _0x9302e4 = _0x8e4a97, _0x5f488f = path[_0x9302e4(518)][_0x9302e4(519)](path, _0x13fcca[0]), _0xf7e09b = isWindows ? _0x13fcca[1][_0x9302e4(520)](/\//g, '\\') : _0x13fcca[1], _0x228e0f = 'path.join(' + _0x13fcca[0][_0x9302e4(521)](JSON[_0x9302e4(522)])[_0x9302e4(518)](',') + ')' + '\n  expect=' + JSON[_0x9302e4(522)](_0xf7e09b) + '\n  actual=' + JSON[_0x9302e4(522)](_0x5f488f);
    if (_0x5f488f !== _0xf7e09b)
        failures[_0x9302e4(523)]('\n' + _0x228e0f);
}), assert[_0x8e4a97(398)](failures['length'], 0, failures[_0x8e4a97(518)](''));
var joinThrowTests = [
    !![],
    ![],
    7,
    null,
    {},
    undefined,
    [],
    NaN
];
joinThrowTests[_0x8e4a97(524)](function (_0x37c68a) {
    var _0x16907b = _0x8e4a97;
    assert['throws'](function () {
        var _0x3304fd = _0x3a43;
        path[_0x3304fd(518)](_0x37c68a);
    }, TypeError), assert[_0x16907b(525)](function () {
        var _0x121925 = _0x16907b;
        path[_0x121925(526)](_0x37c68a);
    }, TypeError);
});
isWindows ? (assert[_0x8e4a97(398)](path[_0x8e4a97(527)](_0x8e4a97(528)), _0x8e4a97(529)), assert['equal'](path['normalize'](_0x8e4a97(530)), _0x8e4a97(531)), assert[_0x8e4a97(398)](path['normalize'](_0x8e4a97(532)), _0x8e4a97(533)), assert[_0x8e4a97(398)](path[_0x8e4a97(527)](_0x8e4a97(534)), 'a\\b\\c'), assert['equal'](path[_0x8e4a97(527)](_0x8e4a97(535)), _0x8e4a97(533)), assert['equal'](path[_0x8e4a97(527)]('//server/share/dir/file.ext'), _0x8e4a97(536))) : (assert[_0x8e4a97(398)](path[_0x8e4a97(527)]('./fixtures///b/../b/c.js'), _0x8e4a97(537)), assert[_0x8e4a97(398)](path[_0x8e4a97(527)](_0x8e4a97(530)), _0x8e4a97(486)), assert['equal'](path[_0x8e4a97(527)](_0x8e4a97(532)), _0x8e4a97(538)), assert[_0x8e4a97(398)](path[_0x8e4a97(527)](_0x8e4a97(534)), _0x8e4a97(539)), assert[_0x8e4a97(398)](path[_0x8e4a97(527)](_0x8e4a97(535)), _0x8e4a97(538)));
if (isWindows)
    var resolveTests = [
        [
            [
                _0x8e4a97(540),
                _0x8e4a97(541),
                'c:../a'
            ],
            _0x8e4a97(542)
        ],
        [
            [
                'c:/ignore',
                _0x8e4a97(543),
                _0x8e4a97(544)
            ],
            _0x8e4a97(545)
        ],
        [
            [
                _0x8e4a97(546),
                'c:/some/file'
            ],
            'c:\\some\\file'
        ],
        [
            [
                _0x8e4a97(547),
                _0x8e4a97(548)
            ],
            _0x8e4a97(549)
        ],
        [
            ['.'],
            process[_0x8e4a97(550)]()
        ],
        [
            [
                _0x8e4a97(551),
                '..',
                _0x8e4a97(552)
            ],
            '\\\\server\\share\\relative'
        ],
        [
            [
                _0x8e4a97(516),
                '//'
            ],
            _0x8e4a97(420)
        ],
        [
            [
                _0x8e4a97(516),
                _0x8e4a97(553)
            ],
            _0x8e4a97(554)
        ],
        [
            [
                _0x8e4a97(516),
                '//server/share'
            ],
            _0x8e4a97(555)
        ],
        [
            [
                _0x8e4a97(516),
                _0x8e4a97(556)
            ],
            _0x8e4a97(555)
        ],
        [
            [
                _0x8e4a97(516),
                _0x8e4a97(557)
            ],
            _0x8e4a97(558)
        ]
    ];
else
    var resolveTests = [
        [
            [
                '/var/lib',
                '../',
                _0x8e4a97(471)
            ],
            _0x8e4a97(559)
        ],
        [
            [
                _0x8e4a97(560),
                _0x8e4a97(561),
                _0x8e4a97(471)
            ],
            _0x8e4a97(454)
        ],
        [
            [
                _0x8e4a97(562),
                '../../..'
            ],
            process[_0x8e4a97(550)]()
        ],
        [
            ['.'],
            process['cwd']()
        ],
        [
            [
                _0x8e4a97(563),
                '.',
                _0x8e4a97(564)
            ],
            _0x8e4a97(565)
        ]
    ];
var failures = [];
resolveTests[_0x8e4a97(524)](function (_0x59914e) {
    var _0x31ad1c = _0x8e4a97, _0x4a8b49 = path[_0x31ad1c(526)][_0x31ad1c(519)](path, _0x59914e[0]), _0x5cfb8c = _0x59914e[1], _0x1296e4 = _0x31ad1c(566) + _0x59914e[0][_0x31ad1c(521)](JSON['stringify'])['join'](',') + ')' + _0x31ad1c(567) + JSON[_0x31ad1c(522)](_0x5cfb8c) + _0x31ad1c(568) + JSON[_0x31ad1c(522)](_0x4a8b49);
    if (_0x4a8b49 !== _0x5cfb8c)
        failures['push']('\n' + _0x1296e4);
}), assert[_0x8e4a97(398)](failures[_0x8e4a97(569)], 0, failures[_0x8e4a97(518)](''));
isWindows ? (assert[_0x8e4a97(398)](path[_0x8e4a97(570)](_0x8e4a97(571)), !![]), assert[_0x8e4a97(398)](path[_0x8e4a97(570)]('\\\\server\\file'), !![]), assert[_0x8e4a97(398)](path[_0x8e4a97(570)](_0x8e4a97(572)), !![]), assert[_0x8e4a97(398)](path[_0x8e4a97(570)](_0x8e4a97(573)), !![]), assert[_0x8e4a97(398)](path['isAbsolute'](_0x8e4a97(574)), ![]), assert[_0x8e4a97(398)](path['isAbsolute'](_0x8e4a97(575)), ![]), assert[_0x8e4a97(398)](path['isAbsolute'](_0x8e4a97(576)), ![]), assert[_0x8e4a97(398)](path['isAbsolute'](_0x8e4a97(577)), ![])) : (assert['equal'](path['isAbsolute'](_0x8e4a97(578)), !![]), assert[_0x8e4a97(398)](path[_0x8e4a97(570)]('/home/foo/..'), !![]), assert[_0x8e4a97(398)](path[_0x8e4a97(570)](_0x8e4a97(579)), ![]), assert[_0x8e4a97(398)](path['isAbsolute'](_0x8e4a97(580)), ![]));
if (isWindows)
    var relativeTests = [
        [
            _0x8e4a97(540),
            _0x8e4a97(541),
            _0x8e4a97(581)
        ],
        [
            _0x8e4a97(582),
            'c:/aaaa',
            '..'
        ],
        [
            _0x8e4a97(582),
            'c:/cccc',
            _0x8e4a97(583)
        ],
        [
            'c:/aaaa/bbbb',
            'c:/aaaa/bbbb',
            ''
        ],
        [
            'c:/aaaa/bbbb',
            _0x8e4a97(584),
            _0x8e4a97(585)
        ],
        [
            _0x8e4a97(586),
            'c:/aaaa/cccc',
            'cccc'
        ],
        [
            _0x8e4a97(516),
            _0x8e4a97(587),
            _0x8e4a97(588)
        ],
        [
            _0x8e4a97(582),
            'd:\\',
            _0x8e4a97(589)
        ]
    ];
else
    var relativeTests = [
        [
            _0x8e4a97(560),
            _0x8e4a97(590),
            '..'
        ],
        [
            _0x8e4a97(560),
            '/bin',
            _0x8e4a97(591)
        ],
        [
            _0x8e4a97(560),
            '/var/lib',
            ''
        ],
        [
            _0x8e4a97(560),
            '/var/apache',
            _0x8e4a97(592)
        ],
        [
            _0x8e4a97(593),
            _0x8e4a97(560),
            _0x8e4a97(594)
        ],
        [
            '/',
            _0x8e4a97(560),
            _0x8e4a97(595)
        ]
    ];
var failures = [];
relativeTests[_0x8e4a97(524)](function (_0x298da1) {
    var _0x180a89 = _0x8e4a97, _0x5eaf89 = path[_0x180a89(596)](_0x298da1[0], _0x298da1[1]), _0x1331f1 = _0x298da1[2], _0x4ae7eb = 'path.relative(' + _0x298da1[_0x180a89(597)](0, 2)['map'](JSON[_0x180a89(522)])[_0x180a89(518)](',') + ')' + _0x180a89(567) + JSON[_0x180a89(522)](_0x1331f1) + _0x180a89(568) + JSON[_0x180a89(522)](_0x5eaf89);
    if (_0x5eaf89 !== _0x1331f1)
        failures[_0x180a89(523)]('\n' + _0x4ae7eb);
}), assert[_0x8e4a97(398)](failures[_0x8e4a97(569)], 0, failures[_0x8e4a97(518)](''));
isWindows ? assert[_0x8e4a97(398)](path[_0x8e4a97(598)], '\\') : assert[_0x8e4a97(398)](path['sep'], '/');
function _0x3a43(_0xa18eca, _0x40ca5b) {
    return _0x3a43 = function (_0x39a20c, _0x3a438f) {
        _0x39a20c = _0x39a20c - 385;
        var _0x236e45 = _0x39a2[_0x39a20c];
        return _0x236e45;
    }, _0x3a43(_0xa18eca, _0x40ca5b);
}
isWindows ? assert[_0x8e4a97(398)](path['delimiter'], ';') : assert[_0x8e4a97(398)](path[_0x8e4a97(599)], ':');