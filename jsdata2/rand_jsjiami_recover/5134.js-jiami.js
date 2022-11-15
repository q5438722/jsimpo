var assert = require('assert');
var path = require('.');
var isWindows = process['platform'] === 'win32';
var f = __dirname + '/simple/test-path.js';
assert['equal'](path['basename'](f), 'test-path.js');
assert['equal'](path['basename'](f, '.js'), 'test-path');
assert['equal'](path['basename'](''), '');
assert['equal'](path['basename']('/dir/basename.ext'), 'basename.ext');
assert['equal'](path['basename']('/basename.ext'), 'basename.ext');
assert['equal'](path['basename']('basename.ext'), 'basename.ext');
assert['equal'](path['basename']('basename.ext/'), 'basename.ext');
assert['equal'](path['basename']('basename.ext//'), 'basename.ext');
if (isWindows) {
    var EMihKv = '3|4|2|0|1'['split']('|'), FmOOLS = 0;
    while (!![]) {
        switch (EMihKv[FmOOLS++]) {
        case '0':
            assert['equal'](path['basename']('basename.ext\\'), 'basename.ext');
            continue;
        case '1':
            assert['equal'](path['basename']('basename.ext\\\\'), 'basename.ext');
            continue;
        case '2':
            assert['equal'](path['basename']('basename.ext'), 'basename.ext');
            continue;
        case '3':
            assert['equal'](path['basename']('\\dir\\basename.ext'), 'basename.ext');
            continue;
        case '4':
            assert['equal'](path['basename']('\\basename.ext'), 'basename.ext');
            continue;
        }
        break;
    }
} else {
    var tXltCX = '3|1|2|0|4'['split']('|'), gHtaep = 0;
    while (!![]) {
        switch (tXltCX[gHtaep++]) {
        case '0':
            assert['equal'](path['basename']('basename.ext\\'), 'basename.ext\\');
            continue;
        case '1':
            assert['equal'](path['basename']('\\basename.ext'), '\\basename.ext');
            continue;
        case '2':
            assert['equal'](path['basename']('basename.ext'), 'basename.ext');
            continue;
        case '3':
            assert['equal'](path['basename']('\\dir\\basename.ext'), '\\dir\\basename.ext');
            continue;
        case '4':
            assert['equal'](path['basename']('basename.ext\\\\'), 'basename.ext\\\\');
            continue;
        }
        break;
    }
}
if (!isWindows) {
    var controlCharFilename = 'Icon' + String['fromCharCode'](13);
    assert['equal'](path['basename']('/a/b/' + controlCharFilename), controlCharFilename);
}
assert['equal'](path['extname'](f), '.js');
assert['equal'](path['dirname'](f)['substr'](-11), isWindows ? 'test\\simple' : 'test/simple');
assert['equal'](path['dirname']('/a/b/'), '/a');
assert['equal'](path['dirname']('/a/b'), '/a');
assert['equal'](path['dirname']('/a'), '/');
assert['equal'](path['dirname'](''), '.');
assert['equal'](path['dirname']('/'), '/');
assert['equal'](path['dirname']('////'), '/');
if (isWindows) {
    var Cgcfps = '10|5|23|13|14|12|19|1|21|9|16|11|20|7|2|18|0|8|3|22|17|4|15|6'['split']('|'), EysdLc = 0;
    while (!![]) {
        switch (Cgcfps[EysdLc++]) {
        case '0':
            assert['equal'](path['dirname']('c:foo\\bar\\'), 'c:foo');
            continue;
        case '1':
            assert['equal'](path['dirname']('\\foo'), '\\');
            continue;
        case '2':
            assert['equal'](path['dirname']('c:foo\\'), 'c:');
            continue;
        case '3':
            assert['equal'](path['dirname']('\\\\unc\\share'), '\\\\unc\\share');
            continue;
        case '4':
            assert['equal'](path['dirname']('\\\\unc\\share\\foo\\bar'), '\\\\unc\\share\\foo');
            continue;
        case '5':
            assert['equal'](path['dirname']('c:\\foo'), 'c:\\');
            continue;
        case '6':
            assert['equal'](path['dirname']('\\\\unc\\share\\foo\\bar\\baz'), '\\\\unc\\share\\foo\\bar');
            continue;
        case '7':
            assert['equal'](path['dirname']('c:foo'), 'c:');
            continue;
        case '8':
            assert['equal'](path['dirname']('c:foo\\bar\\baz'), 'c:foo\\bar');
            continue;
        case '9':
            assert['equal'](path['dirname']('\\foo\\bar'), '\\foo');
            continue;
        case '10':
            assert['equal'](path['dirname']('c:\\'), 'c:\\');
            continue;
        case '11':
            assert['equal'](path['dirname']('\\foo\\bar\\baz'), '\\foo\\bar');
            continue;
        case '12':
            assert['equal'](path['dirname']('c:\\foo\\bar\\baz'), 'c:\\foo\\bar');
            continue;
        case '13':
            assert['equal'](path['dirname']('c:\\foo\\bar'), 'c:\\foo');
            continue;
        case '14':
            assert['equal'](path['dirname']('c:\\foo\\bar\\'), 'c:\\foo');
            continue;
        case '15':
            assert['equal'](path['dirname']('\\\\unc\\share\\foo\\bar\\'), '\\\\unc\\share\\foo');
            continue;
        case '16':
            assert['equal'](path['dirname']('\\foo\\bar\\'), '\\foo');
            continue;
        case '17':
            assert['equal'](path['dirname']('\\\\unc\\share\\foo\\'), '\\\\unc\\share\\');
            continue;
        case '18':
            assert['equal'](path['dirname']('c:foo\\bar'), 'c:foo');
            continue;
        case '19':
            assert['equal'](path['dirname']('\\'), '\\');
            continue;
        case '20':
            assert['equal'](path['dirname']('c:'), 'c:');
            continue;
        case '21':
            assert['equal'](path['dirname']('\\foo\\'), '\\');
            continue;
        case '22':
            assert['equal'](path['dirname']('\\\\unc\\share\\foo'), '\\\\unc\\share\\');
            continue;
        case '23':
            assert['equal'](path['dirname']('c:\\foo\\'), 'c:\\');
            continue;
        }
        break;
    }
}
assert['equal'](path['extname'](''), '');
assert['equal'](path['extname']('/path/to/file'), '');
assert['equal'](path['extname']('/path/to/file.ext'), '.ext');
assert['equal'](path['extname']('/path.to/file.ext'), '.ext');
assert['equal'](path['extname']('/path.to/file'), '');
assert['equal'](path['extname']('/path.to/.file'), '');
assert['equal'](path['extname']('/path.to/.file.ext'), '.ext');
assert['equal'](path['extname']('/path/to/f.ext'), '.ext');
assert['equal'](path['extname']('/path/to/..ext'), '.ext');
assert['equal'](path['extname']('file'), '');
assert['equal'](path['extname']('file.ext'), '.ext');
assert['equal'](path['extname']('.file'), '');
assert['equal'](path['extname']('.file.ext'), '.ext');
assert['equal'](path['extname']('/file'), '');
assert['equal'](path['extname']('/file.ext'), '.ext');
assert['equal'](path['extname']('/.file'), '');
assert['equal'](path['extname']('/.file.ext'), '.ext');
assert['equal'](path['extname']('.path/file.ext'), '.ext');
assert['equal'](path['extname']('file.ext.ext'), '.ext');
assert['equal'](path['extname']('file.'), '.');
assert['equal'](path['extname']('.'), '');
assert['equal'](path['extname']('./'), '');
assert['equal'](path['extname']('.file.ext'), '.ext');
assert['equal'](path['extname']('.file'), '');
assert['equal'](path['extname']('.file.'), '.');
assert['equal'](path['extname']('.file..'), '.');
assert['equal'](path['extname']('..'), '');
assert['equal'](path['extname']('../'), '');
assert['equal'](path['extname']('..file.ext'), '.ext');
assert['equal'](path['extname']('..file'), '.file');
assert['equal'](path['extname']('..file.'), '.');
assert['equal'](path['extname']('..file..'), '.');
assert['equal'](path['extname']('...'), '.');
assert['equal'](path['extname']('...ext'), '.ext');
assert['equal'](path['extname']('....'), '.');
assert['equal'](path['extname']('file.ext/'), '.ext');
assert['equal'](path['extname']('file.ext//'), '.ext');
assert['equal'](path['extname']('file/'), '');
assert['equal'](path['extname']('file//'), '');
assert['equal'](path['extname']('file./'), '.');
assert['equal'](path['extname']('file.//'), '.');
if (isWindows) {
    assert['equal'](path['extname']('.\\'), '');
    assert['equal'](path['extname']('..\\'), '');
    assert['equal'](path['extname']('file.ext\\'), '.ext');
    assert['equal'](path['extname']('file.ext\\\\'), '.ext');
    assert['equal'](path['extname']('file\\'), '');
    assert['equal'](path['extname']('file\\\\'), '');
    assert['equal'](path['extname']('file.\\'), '.');
    assert['equal'](path['extname']('file.\\\\'), '.');
} else {
    assert['equal'](path['extname']('.\\'), '');
    assert['equal'](path['extname']('..\\'), '.\\');
    assert['equal'](path['extname']('file.ext\\'), '.ext\\');
    assert['equal'](path['extname']('file.ext\\\\'), '.ext\\\\');
    assert['equal'](path['extname']('file\\'), '');
    assert['equal'](path['extname']('file\\\\'), '');
    assert['equal'](path['extname']('file.\\'), '.\\');
    assert['equal'](path['extname']('file.\\\\'), '.\\\\');
}
var failures = [];
var joinTests = [
    [
        [
            '.',
            'x/b',
            '..',
            '/b/c.js'
        ],
        'x/b/c.js'
    ],
    [
        [
            '/.',
            'x/b',
            '..',
            '/b/c.js'
        ],
        '/x/b/c.js'
    ],
    [
        [
            '/foo',
            '../../../bar'
        ],
        '/bar'
    ],
    [
        [
            'foo',
            '../../../bar'
        ],
        '../../bar'
    ],
    [
        [
            'foo/',
            '../../../bar'
        ],
        '../../bar'
    ],
    [
        [
            'foo/x',
            '../../../bar'
        ],
        '../bar'
    ],
    [
        [
            'foo/x',
            './bar'
        ],
        'foo/x/bar'
    ],
    [
        [
            'foo/x/',
            './bar'
        ],
        'foo/x/bar'
    ],
    [
        [
            'foo/x/',
            '.',
            'bar'
        ],
        'foo/x/bar'
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
            '/////./',
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
            'foo'
        ],
        'foo'
    ],
    [
        [
            'foo',
            '/bar'
        ],
        'foo/bar'
    ],
    [
        [
            '',
            '/foo'
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
            'foo'
        ],
        'foo'
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
            'foo/',
            ''
        ],
        'foo/'
    ],
    [
        [
            'foo',
            '',
            '/bar'
        ],
        'foo/bar'
    ],
    [
        [
            './',
            '..',
            '/foo'
        ],
        '../foo'
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
        '../../foo'
    ],
    [
        [
            '',
            '..',
            '..',
            '/foo'
        ],
        '../../foo'
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
        ' /foo'
    ],
    [
        [
            ' ',
            'foo'
        ],
        ' /foo'
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
            'foo'
        ],
        '/foo'
    ],
    [
        [
            '/',
            '/foo'
        ],
        '/foo'
    ],
    [
        [
            '/',
            '//foo'
        ],
        '/foo'
    ],
    [
        [
            '/',
            '',
            '/foo'
        ],
        '/foo'
    ],
    [
        [
            '',
            '/',
            'foo'
        ],
        '/foo'
    ],
    [
        [
            '',
            '/',
            '/foo'
        ],
        '/foo'
    ]
];
if (isWindows) {
    joinTests = joinTests['concat']([
        [
            ['//foo/bar'],
            '//foo/bar/'
        ],
        [
            ['\\/foo/bar'],
            '//foo/bar/'
        ],
        [
            ['\\\\foo/bar'],
            '//foo/bar/'
        ],
        [
            [
                '//foo',
                'bar'
            ],
            '//foo/bar/'
        ],
        [
            [
                '//foo/',
                'bar'
            ],
            '//foo/bar/'
        ],
        [
            [
                '//foo',
                '/bar'
            ],
            '//foo/bar/'
        ],
        [
            [
                '//foo',
                '',
                'bar'
            ],
            '//foo/bar/'
        ],
        [
            [
                '//foo/',
                '',
                'bar'
            ],
            '//foo/bar/'
        ],
        [
            [
                '//foo/',
                '',
                '/bar'
            ],
            '//foo/bar/'
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
                '//foo/',
                'bar'
            ],
            '//foo/bar/'
        ],
        [
            [
                '',
                '//foo/',
                '/bar'
            ],
            '//foo/bar/'
        ],
        [
            [
                '\\',
                'foo/bar'
            ],
            '/foo/bar'
        ],
        [
            [
                '\\',
                '/foo/bar'
            ],
            '/foo/bar'
        ],
        [
            [
                '',
                '/',
                '/foo/bar'
            ],
            '/foo/bar'
        ],
        [
            [
                '//',
                'foo/bar'
            ],
            '/foo/bar'
        ],
        [
            [
                '//',
                '/foo/bar'
            ],
            '/foo/bar'
        ],
        [
            [
                '\\\\',
                '/',
                '/foo/bar'
            ],
            '/foo/bar'
        ],
        [
            ['//'],
            '/'
        ],
        [
            ['//foo'],
            '/foo'
        ],
        [
            ['//foo/'],
            '/foo/'
        ],
        [
            [
                '//foo',
                '/'
            ],
            '/foo/'
        ],
        [
            [
                '//foo',
                '',
                '/'
            ],
            '/foo/'
        ],
        [
            ['///foo/bar'],
            '/foo/bar'
        ],
        [
            [
                '////foo',
                'bar'
            ],
            '/foo/bar'
        ],
        [
            ['\\\\\\/foo/bar'],
            '/foo/bar'
        ],
        [
            ['c:'],
            'c:.'
        ],
        [
            ['c:.'],
            'c:.'
        ],
        [
            [
                'c:',
                ''
            ],
            'c:.'
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
                'c:.',
                '/'
            ],
            'c:./'
        ],
        [
            [
                'c:.',
                'file'
            ],
            'c:file'
        ],
        [
            [
                'c:',
                '/'
            ],
            'c:/'
        ],
        [
            [
                'c:',
                'file'
            ],
            'c:/file'
        ]
    ]);
}
joinTests['forEach'](function (_0x54e23e) {
    var _0x274c4e = path['join']['apply'](path, _0x54e23e[0]);
    var _0x259a04 = isWindows ? _0x54e23e[1]['replace'](/\//g, '\\') : _0x54e23e[1];
    var _0x1f0d6b = _0x6f9f7d['oTTXv'](_0x6f9f7d['ZztXI'](_0x6f9f7d['ZztXI']('path.join(', _0x54e23e[0]['map'](JSON['stringify'])['join'](',')), ')') + '\n  expect=', JSON['stringify'](_0x259a04)) + '\n  actual=' + JSON['stringify'](_0x274c4e);
    if (_0x274c4e !== _0x259a04)
        failures['push']('\n' + _0x1f0d6b);
});
assert['equal'](failures['length'], 0, failures['join'](''));
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
joinThrowTests['forEach'](function (_0x1d03ce) {
    assert['throws'](function () {
        path['join'](_0x1d03ce);
    }, TypeError);
    assert['throws'](function () {
        path['resolve'](_0x1d03ce);
    }, TypeError);
});
if (isWindows) {
    var WlonUB = '3|2|4|0|1|5'['split']('|'), HFBOhq = 0;
    while (!![]) {
        switch (WlonUB[HFBOhq++]) {
        case '0':
            assert['equal'](path['normalize']('a//b//./c'), 'a\\b\\c');
            continue;
        case '1':
            assert['equal'](path['normalize']('a//b//.'), 'a\\b');
            continue;
        case '2':
            assert['equal'](path['normalize']('/foo/../../../bar'), '\\bar');
            continue;
        case '3':
            assert['equal'](path['normalize']('./fixtures///b/../b/c.js'), 'fixtures\\b\\c.js');
            continue;
        case '4':
            assert['equal'](path['normalize']('a//b//../b'), 'a\\b');
            continue;
        case '5':
            assert['equal'](path['normalize']('//server/share/dir/file.ext'), '\\\\server\\share\\dir\\file.ext');
            continue;
        }
        break;
    }
} else {
    var dWcrVo = '4|0|3|2|1'['split']('|'), msDCXT = 0;
    while (!![]) {
        switch (dWcrVo[msDCXT++]) {
        case '0':
            assert['equal'](path['normalize']('/foo/../../../bar'), '/bar');
            continue;
        case '1':
            assert['equal'](path['normalize']('a//b//.'), 'a/b');
            continue;
        case '2':
            assert['equal'](path['normalize']('a//b//./c'), 'a/b/c');
            continue;
        case '3':
            assert['equal'](path['normalize']('a//b//../b'), 'a/b');
            continue;
        case '4':
            assert['equal'](path['normalize']('./fixtures///b/../b/c.js'), 'fixtures/b/c.js');
            continue;
        }
        break;
    }
}
if (isWindows) {
    var resolveTests = [
        [
            [
                'c:/blah\\blah',
                'd:/games',
                'c:../a'
            ],
            'c:\\blah\\a'
        ],
        [
            [
                'c:/ignore',
                'd:\\a/b\\c/d',
                '\\e.exe'
            ],
            'd:\\e.exe'
        ],
        [
            [
                'c:/ignore',
                'c:/some/file'
            ],
            'c:\\some\\file'
        ],
        [
            [
                'd:/ignore',
                'd:some/dir//'
            ],
            'd:\\ignore\\some\\dir'
        ],
        [
            ['.'],
            process['cwd']()
        ],
        [
            [
                '//server/share',
                '..',
                'relative\\'
            ],
            '\\\\server\\share\\relative'
        ],
        [
            [
                'c:/',
                '//'
            ],
            'c:\\'
        ],
        [
            [
                'c:/',
                '//dir'
            ],
            'c:\\dir'
        ],
        [
            [
                'c:/',
                '//server/share'
            ],
            '\\\\server\\share\\'
        ],
        [
            [
                'c:/',
                '//server//share'
            ],
            '\\\\server\\share\\'
        ],
        [
            [
                'c:/',
                '///some//dir'
            ],
            'c:\\some\\dir'
        ]
    ];
} else {
    var resolveTests = [
        [
            [
                '/var/lib',
                '../',
                'file/'
            ],
            '/var/file'
        ],
        [
            [
                '/var/lib',
                '/../',
                'file/'
            ],
            '/file'
        ],
        [
            [
                'a/b/c/',
                '../../..'
            ],
            process['cwd']()
        ],
        [
            ['.'],
            process['cwd']()
        ],
        [
            [
                '/some/dir',
                '.',
                '/absolute/'
            ],
            '/absolute'
        ]
    ];
}
var failures = [];
resolveTests['forEach'](function (_0x2e7ddf) {
    var _0x35d315 = path['resolve']['apply'](path, _0x2e7ddf[0]);
    var _0x2120d9 = _0x2e7ddf[1];
    var _0x417bc6 = _0x23257e['cZWRe'](_0x23257e['cZWRe']('path.resolve(' + _0x2e7ddf[0]['map'](JSON['stringify'])['join'](',') + ')', '\n  expect='), JSON['stringify'](_0x2120d9)) + '\n  actual=' + JSON['stringify'](_0x35d315);
    if (_0x35d315 !== _0x2120d9)
        failures['push']('\n' + _0x417bc6);
});
assert['equal'](failures['length'], 0, failures['join'](''));
if (isWindows) {
    var KTlOby = '4|1|3|0|7|6|2|5'['split']('|'), PJnsEN = 0;
    while (!![]) {
        switch (KTlOby[PJnsEN++]) {
        case '0':
            assert['equal'](path['isAbsolute']('C:\\Users\\'), !![]);
            continue;
        case '1':
            assert['equal'](path['isAbsolute']('\\\\server\\file'), !![]);
            continue;
        case '2':
            assert['equal'](path['isAbsolute']('directory/directory'), ![]);
            continue;
        case '3':
            assert['equal'](path['isAbsolute']('C:/Users/'), !![]);
            continue;
        case '4':
            assert['equal'](path['isAbsolute']('//server/file'), !![]);
            continue;
        case '5':
            assert['equal'](path['isAbsolute']('directory\\directory'), ![]);
            continue;
        case '6':
            assert['equal'](path['isAbsolute']('C:cwd\\another'), ![]);
            continue;
        case '7':
            assert['equal'](path['isAbsolute']('C:cwd/another'), ![]);
            continue;
        }
        break;
    }
} else {
    assert['equal'](path['isAbsolute']('/home/foo'), !![]);
    assert['equal'](path['isAbsolute']('/home/foo/..'), !![]);
    assert['equal'](path['isAbsolute']('bar/'), ![]);
    assert['equal'](path['isAbsolute']('./baz'), ![]);
}
if (isWindows) {
    var relativeTests = [
        [
            'c:/blah\\blah',
            'd:/games',
            'd:\\games'
        ],
        [
            'c:/aaaa/bbbb',
            'c:/aaaa',
            '..'
        ],
        [
            'c:/aaaa/bbbb',
            'c:/cccc',
            '..\\..\\cccc'
        ],
        [
            'c:/aaaa/bbbb',
            'c:/aaaa/bbbb',
            ''
        ],
        [
            'c:/aaaa/bbbb',
            'c:/aaaa/cccc',
            '..\\cccc'
        ],
        [
            'c:/aaaa/',
            'c:/aaaa/cccc',
            'cccc'
        ],
        [
            'c:/',
            'c:\\aaaa\\bbbb',
            'aaaa\\bbbb'
        ],
        [
            'c:/aaaa/bbbb',
            'd:\\',
            'd:\\'
        ]
    ];
} else {
    var relativeTests = [
        [
            '/var/lib',
            '/var',
            '..'
        ],
        [
            '/var/lib',
            '/bin',
            '../../bin'
        ],
        [
            '/var/lib',
            '/var/lib',
            ''
        ],
        [
            '/var/lib',
            '/var/apache',
            '../apache'
        ],
        [
            '/var/',
            '/var/lib',
            'lib'
        ],
        [
            '/',
            '/var/lib',
            'var/lib'
        ]
    ];
}
var failures = [];
relativeTests['forEach'](function (_0x2b0ab4) {
    var _0x3392ad = path['relative'](_0x2b0ab4[0], _0x2b0ab4[1]);
    var _0x331ec6 = _0x2b0ab4[2];
    var _0x8483d5 = _0x2b2237['MRdkh'](_0x2b2237['fslcb']('path.relative(', _0x2b0ab4['slice'](0, 2)['map'](JSON['stringify'])['join'](',')) + ')' + '\n  expect=', JSON['stringify'](_0x331ec6)) + '\n  actual=' + JSON['stringify'](_0x3392ad);
    if (_0x3392ad !== _0x331ec6)
        failures['push']('\n' + _0x8483d5);
});
assert['equal'](failures['length'], 0, failures['join'](''));
if (isWindows) {
    assert['equal'](path['sep'], '\\');
} else {
    assert['equal'](path['sep'], '/');
}
if (isWindows) {
    assert['equal'](path['delimiter'], ';');
} else {
    assert['equal'](path['delimiter'], ':');
}