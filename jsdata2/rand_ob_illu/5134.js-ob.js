const _0x2329 = ['assert', 'platform', 'win32', 'equal', 'test-path.js', 'basename', '.js', 'basename.ext', '/basename.ext', 'basename.ext/', 'basename.ext//', '0|4|2|3|1', 'split', '\\dir\\basename.ext', 'basename.ext\\\\', 'basename.ext\\', '\\basename.ext', 'Icon', 'fromCharCode', '/a/b/', 'extname', 'dirname', 'substr', 'test/simple', '/a/b', '////', '1|3|12|4|21|15|2|10|5|11|0|19|23|17|13|22|18|16|7|6|14|9|8|20', '\\foo\\bar\\', '\\foo', 'c:\\', 'c:\\foo', '\\foo\\', '\\\\unc\\share\\', '\\\\unc\\share', '\\\\unc\\share\\foo', 'c:\\foo\\', 'c:foo\\', '\\\\unc\\share\\foo\\', 'c:\\foo\\bar\\baz', 'c:\\foo\\bar', 'c:foo\\bar', 'c:foo', 'c:foo\\bar\\', '\\foo\\bar\\baz', '\\foo\\bar', '\\\\unc\\share\\foo\\bar\\baz', '\\\\unc\\share\\foo\\bar', '/path/to/file', '/path/to/file.ext', '.ext', '/path.to/file.ext', '/path.to/.file', '/path.to/.file.ext', '/path/to/f.ext', 'file', 'file.ext', '.file', '.file.ext', '/file', '/file.ext', '/.file', '/.file.ext', '.path/file.ext', 'file.ext.ext', 'file.', '.file.', '.file..', '..file', '..file.', '..file..', '...', 'file.ext//', 'file/', 'file./', 'file.//', '..\\', 'file.ext\\\\', 'file\\', 'file\\\\', 'file.\\', 'file.\\\\', '.ext\\\\', 'file.ext\\', 'x/b', 'x/b/c.js', '/b/c.js', '/x/b/c.js', '/foo', '../../../bar', '/bar', '../../bar', 'foo/x', './bar', 'foo/x/bar', 'foo/x/', 'bar', '/./', '/////./', 'foo', 'foo/', 'foo/bar', '../foo', '../../foo', ' /foo', '//foo', 'concat', '//foo/bar', '//foo/bar/', '\\/foo/bar', '\\\\foo/bar', '//foo/', '/foo/bar', '/foo/', '///foo/bar', '////foo', '\\\\\\/foo/bar', 'c:.', 'c:./', 'c:file', 'c:/', 'c:/file', 'forEach', 'join', 'apply', 'vWWZE', 'YxHzW', 'path.join(', 'map', '\n  expect=', 'stringify', 'mkrPs', 'nlhIp', 'length', 'throws', 'normalize', 'a//b//../b', 'a\\b', '/foo/../../../bar', 'a//b//./c', 'a\\b\\c', '\\\\server\\share\\dir\\file.ext', './fixtures///b/../b/c.js', '3|1|2|0|4', 'a/b/c', 'a/b', 'a//b//.', 'c:../a', 'c:\\blah\\a', '\\e.exe', 'd:\\e.exe', 'c:/ignore', 'c:/some/file', 'c:\\some\\file', 'd:/ignore', 'd:some/dir//', 'd:\\ignore\\some\\dir', 'cwd', 'relative\\', '//server/share', '\\\\server\\share\\', '//server//share', 'c:\\some\\dir', '/var/lib', '../', '/../', 'a/b/c/', '../../..', '/some/dir', '/absolute', 'path.resolve(', 'resolve', 'RbLaK', 'ZBMPr', 'qzobD', 'ABbAJ', 'ykVFc', 'RhvZq', 'push', '3|0|2|6|7|1|5|4', '\\\\server\\file', 'isAbsolute', 'C:/Users/', '//server/file', 'C:\\Users\\', '/home/foo', '/home/foo/..', 'bar/', './baz', 'c:/blah\\blah', 'd:/games', 'd:\\games', 'c:/aaaa', 'c:/aaaa/bbbb', '..\\..\\cccc', 'c:/aaaa/cccc', 'c:\\aaaa\\bbbb', 'aaaa\\bbbb', 'd:\\', '/var', '../../bin', '/var/apache', '../apache', '/var/', 'lib', 'var/lib', 'relative', 'StyBe', 'RekMv', 'wSvnh', 'slice', 'CCKJC', 'kVpTS', 'aYoAO', 'sep', 'delimiter', '3GtkEiu', '53031wNxmYX', '702292oUMHdN', '1253831llQUdk', '1HzIzst', '7kNTwis', '64588hWjzzY', '375588WkMJjB', '79496dHaVoJ', '11zwnRuf', '1734905VlaHej', '1aEPEKV'];
const _0x5995e5 = _0x5c13;

(function (_0x455af4, _0x3f6c07) {
    const _0x47a633 = _0x5c13;

    while (true) {
        try {
            const _0x53dc2b = parseInt(_0x47a633(0xe8)) * parseInt(_0x47a633(0xe9)) + -parseInt(_0x47a633(0xea)) + -parseInt(_0x47a633(0xeb)) * -parseInt(_0x47a633(0xec)) + parseInt(_0x47a633(0xed)) * parseInt(_0x47a633(0xee)) + parseInt(_0x47a633(0xef)) + -parseInt(_0x47a633(0xf0)) * -parseInt(_0x47a633(0xf1)) + parseInt(_0x47a633(0xf2)) * -parseInt(_0x47a633(0xf3));

            if (_0x53dc2b === _0x3f6c07) break;else _0x455af4.push(_0x455af4.shift());
        } catch (_0x549a74) {
            _0x455af4.push(_0x455af4.shift());
        }
    }
})(_0x2329, 677887);

const assert = require(_0x5995e5(0xf4));

const path = require('.');

const isWindows = process[_0x5995e5(0xf5)] === _0x5995e5(0xf6);

const f = __dirname + '/simple/test-path.js';

assert[_0x5995e5(0xf7)](path.basename(f), _0x5995e5(0xf8)), assert[_0x5995e5(0xf7)](path[_0x5995e5(0xf9)](f, _0x5995e5(0xfa)), 'test-path'), assert.equal(path[_0x5995e5(0xf9)](''), ''), assert[_0x5995e5(0xf7)](path[_0x5995e5(0xf9)]('/dir/basename.ext'), _0x5995e5(0xfb)), assert.equal(path[_0x5995e5(0xf9)](_0x5995e5(0xfc)), _0x5995e5(0xfb)), assert[_0x5995e5(0xf7)](path[_0x5995e5(0xf9)](_0x5995e5(0xfb)), 'basename.ext'), assert[_0x5995e5(0xf7)](path.basename(_0x5995e5(0xfd)), _0x5995e5(0xfb)), assert[_0x5995e5(0xf7)](path.basename(_0x5995e5(0xfe)), 'basename.ext');
if (isWindows) {
    const MrSOVv = _0x5995e5(0xff)[_0x5995e5(0x100)]('|');

    var lBsHpH = 0;

    while (true) {
        switch (MrSOVv[lBsHpH++]) {
            case '0':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0xf9)](_0x5995e5(0x101)), _0x5995e5(0xfb));
                continue;
            case '1':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0xf9)](_0x5995e5(0x102)), _0x5995e5(0xfb));
                continue;
            case '2':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0xf9)](_0x5995e5(0xfb)), 'basename.ext');
                continue;
            case '3':
                assert[_0x5995e5(0xf7)](path.basename(_0x5995e5(0x103)), _0x5995e5(0xfb));
                continue;
            case '4':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0xf9)](_0x5995e5(0x104)), 'basename.ext');
                continue;
        }
        break;
    }
} else assert[_0x5995e5(0xf7)](path.basename('\\dir\\basename.ext'), '\\dir\\basename.ext'), assert.equal(path[_0x5995e5(0xf9)](_0x5995e5(0x104)), _0x5995e5(0x104)), assert[_0x5995e5(0xf7)](path[_0x5995e5(0xf9)](_0x5995e5(0xfb)), _0x5995e5(0xfb)), assert[_0x5995e5(0xf7)](path.basename(_0x5995e5(0x103)), _0x5995e5(0x103)), assert[_0x5995e5(0xf7)](path[_0x5995e5(0xf9)](_0x5995e5(0x102)), _0x5995e5(0x102));
if (!isWindows) {
    const controlCharFilename = _0x5995e5(0x105) + String[_0x5995e5(0x106)](13);

    assert[_0x5995e5(0xf7)](path[_0x5995e5(0xf9)](_0x5995e5(0x107) + controlCharFilename), controlCharFilename);
}
assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](f), _0x5995e5(0xfa)), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)](f)[_0x5995e5(0x10a)](-11), isWindows ? 'test\\simple' : _0x5995e5(0x10b)), assert[_0x5995e5(0xf7)](path.dirname(_0x5995e5(0x107)), '/a'), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)](_0x5995e5(0x10c)), '/a'), assert.equal(path[_0x5995e5(0x109)]('/a'), '/'), assert.equal(path[_0x5995e5(0x109)](''), '.'), assert[_0x5995e5(0xf7)](path.dirname('/'), '/'), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)](_0x5995e5(0x10d)), '/');
if (isWindows) {
    const WFjMXy = _0x5995e5(0x10e)[_0x5995e5(0x100)]('|');

    var ZxUQSO = 0;

    while (true) {
        switch (WFjMXy[ZxUQSO++]) {
            case '0':
                assert.equal(path[_0x5995e5(0x109)](_0x5995e5(0x10f)), _0x5995e5(0x110));
                continue;
            case '1':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)](_0x5995e5(0x111)), _0x5995e5(0x111));
                continue;
            case '2':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)]('\\'), '\\');
                continue;
            case '3':
                assert[_0x5995e5(0xf7)](path.dirname(_0x5995e5(0x112)), _0x5995e5(0x111));
                continue;
            case '4':
                assert[_0x5995e5(0xf7)](path.dirname('c:\\foo\\bar'), _0x5995e5(0x112));
                continue;
            case '5':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)](_0x5995e5(0x113)), '\\');
                continue;
            case '6':
                assert.equal(path[_0x5995e5(0x109)]('\\\\unc\\share\\foo'), _0x5995e5(0x114));
                continue;
            case '7':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)](_0x5995e5(0x115)), _0x5995e5(0x115));
                continue;
            case '8':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)]('\\\\unc\\share\\foo\\bar\\'), _0x5995e5(0x116));
                continue;
            case '9':
                assert.equal(path[_0x5995e5(0x109)]('\\\\unc\\share\\foo\\bar'), _0x5995e5(0x116));
                continue;
            case '10':
                assert[_0x5995e5(0xf7)](path.dirname(_0x5995e5(0x110)), '\\');
                continue;
            case '11':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)]('\\foo\\bar'), '\\foo');
                continue;
            case '12':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)](_0x5995e5(0x117)), _0x5995e5(0x111));
                continue;
            case '13':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)](_0x5995e5(0x118)), 'c:');
                continue;
            case '14':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)](_0x5995e5(0x119)), _0x5995e5(0x114));
                continue;
            case '15':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)](_0x5995e5(0x11a)), _0x5995e5(0x11b));
                continue;
            case '16':
                assert.equal(path[_0x5995e5(0x109)]('c:foo\\bar\\baz'), _0x5995e5(0x11c));
                continue;
            case '17':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)](_0x5995e5(0x11d)), 'c:');
                continue;
            case '18':
                assert.equal(path[_0x5995e5(0x109)](_0x5995e5(0x11e)), _0x5995e5(0x11d));
                continue;
            case '19':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)](_0x5995e5(0x11f)), _0x5995e5(0x120));
                continue;
            case '20':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)](_0x5995e5(0x121)), _0x5995e5(0x122));
                continue;
            case '21':
                assert[_0x5995e5(0xf7)](path.dirname('c:\\foo\\bar\\'), _0x5995e5(0x112));
                continue;
            case '22':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x109)](_0x5995e5(0x11c)), _0x5995e5(0x11d));
                continue;
            case '23':
                assert.equal(path[_0x5995e5(0x109)]('c:'), 'c:');
                continue;
        }
        break;
    }
}
assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](''), ''), assert.equal(path[_0x5995e5(0x108)](_0x5995e5(0x123)), ''), assert.equal(path.extname(_0x5995e5(0x124)), _0x5995e5(0x125)), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x126)), '.ext'), assert.equal(path[_0x5995e5(0x108)]('/path.to/file'), ''), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x127)), ''), assert[_0x5995e5(0xf7)](path.extname(_0x5995e5(0x128)), _0x5995e5(0x125)), assert.equal(path[_0x5995e5(0x108)](_0x5995e5(0x129)), '.ext'), assert.equal(path[_0x5995e5(0x108)]('/path/to/..ext'), _0x5995e5(0x125)), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x12a)), ''), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x12b)), _0x5995e5(0x125)), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x12c)), ''), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x12d)), _0x5995e5(0x125)), assert[_0x5995e5(0xf7)](path.extname(_0x5995e5(0x12e)), ''), assert.equal(path[_0x5995e5(0x108)](_0x5995e5(0x12f)), _0x5995e5(0x125)), assert.equal(path[_0x5995e5(0x108)](_0x5995e5(0x130)), ''), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x131)), _0x5995e5(0x125)), assert.equal(path[_0x5995e5(0x108)](_0x5995e5(0x132)), _0x5995e5(0x125)), assert[_0x5995e5(0xf7)](path.extname(_0x5995e5(0x133)), _0x5995e5(0x125)), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x134)), '.'), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)]('.'), ''), assert[_0x5995e5(0xf7)](path.extname('./'), ''), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)]('.file.ext'), _0x5995e5(0x125)), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x12c)), ''), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x135)), '.'), assert[_0x5995e5(0xf7)](path.extname(_0x5995e5(0x136)), '.'), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)]('..'), ''), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)]('../'), ''), assert[_0x5995e5(0xf7)](path.extname('..file.ext'), _0x5995e5(0x125)), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x137)), '.file'), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x138)), '.'), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x139)), '.'), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x13a)), '.'), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)]('...ext'), '.ext'), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)]('....'), '.'), assert[_0x5995e5(0xf7)](path.extname('file.ext/'), _0x5995e5(0x125)), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x13b)), _0x5995e5(0x125)), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x13c)), ''), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)]('file//'), ''), assert.equal(path[_0x5995e5(0x108)](_0x5995e5(0x13d)), '.'), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x13e)), '.');
if (isWindows) assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)]('.\\'), ''), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x13f)), ''), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)]('file.ext\\'), '.ext'), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x140)), _0x5995e5(0x125)), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x141)), ''), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x142)), ''), assert[_0x5995e5(0xf7)](path.extname(_0x5995e5(0x143)), '.'), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x144)), '.');else {
    const ydOcgK = ['1', '2', '5', '4', '0', '7', '3', '6'];
    var CrdAAr = 0;

    while (true) {
        switch (ydOcgK[CrdAAr++]) {
            case '0':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)]('file\\'), '');
                continue;
            case '1':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)]('.\\'), '');
                continue;
            case '2':
                assert[_0x5995e5(0xf7)](path.extname(_0x5995e5(0x13f)), '.\\');
                continue;
            case '3':
                assert[_0x5995e5(0xf7)](path.extname(_0x5995e5(0x143)), '.\\');
                continue;
            case '4':
                assert.equal(path.extname(_0x5995e5(0x140)), _0x5995e5(0x145));
                continue;
            case '5':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x146)), '.ext\\');
                continue;
            case '6':
                assert.equal(path[_0x5995e5(0x108)](_0x5995e5(0x144)), '.\\\\');
                continue;
            case '7':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x108)](_0x5995e5(0x142)), '');
                continue;
        }
        break;
    }
}
const failures = [];
var joinTests = [[['.', _0x5995e5(0x147), '..', '/b/c.js'], _0x5995e5(0x148)], [['/.', _0x5995e5(0x147), '..', _0x5995e5(0x149)], _0x5995e5(0x14a)], [[_0x5995e5(0x14b), _0x5995e5(0x14c)], _0x5995e5(0x14d)], [['foo', _0x5995e5(0x14c)], _0x5995e5(0x14e)], [['foo/', '../../../bar'], _0x5995e5(0x14e)], [[_0x5995e5(0x14f), _0x5995e5(0x14c)], '../bar'], [[_0x5995e5(0x14f), _0x5995e5(0x150)], _0x5995e5(0x151)], [['foo/x/', _0x5995e5(0x150)], _0x5995e5(0x151)], [[_0x5995e5(0x152), '.', _0x5995e5(0x153)], _0x5995e5(0x151)], [['./'], './'], [['.', './'], './'], [['.', '.', '.'], '.'], [['.', './', '.'], '.'], [['.', _0x5995e5(0x154), '.'], '.'], [['.', _0x5995e5(0x155), '.'], '.'], [['.'], '.'], [['', '.'], '.'], [['', _0x5995e5(0x156)], _0x5995e5(0x156)], [[_0x5995e5(0x156), _0x5995e5(0x14d)], 'foo/bar'], [['', '/foo'], _0x5995e5(0x14b)], [['', '', _0x5995e5(0x14b)], _0x5995e5(0x14b)], [['', '', _0x5995e5(0x156)], _0x5995e5(0x156)], [[_0x5995e5(0x156), ''], 'foo'], [['foo/', ''], _0x5995e5(0x157)], [[_0x5995e5(0x156), '', '/bar'], _0x5995e5(0x158)], [['./', '..', _0x5995e5(0x14b)], _0x5995e5(0x159)], [['./', '..', '..', '/foo'], '../../foo'], [['.', '..', '..', '/foo'], _0x5995e5(0x15a)], [['', '..', '..', _0x5995e5(0x14b)], _0x5995e5(0x15a)], [['/'], '/'], [['/', '.'], '/'], [['/', '..'], '/'], [['/', '..', '..'], '/'], [[''], '.'], [['', ''], '.'], [[_0x5995e5(0x15b)], _0x5995e5(0x15b)], [[' ', _0x5995e5(0x156)], _0x5995e5(0x15b)], [[' ', '.'], ' '], [[' ', '/'], ' /'], [[' ', ''], ' '], [['/', _0x5995e5(0x156)], _0x5995e5(0x14b)], [['/', _0x5995e5(0x14b)], '/foo'], [['/', _0x5995e5(0x15c)], _0x5995e5(0x14b)], [['/', '', _0x5995e5(0x14b)], '/foo'], [['', '/', _0x5995e5(0x156)], _0x5995e5(0x14b)], [['', '/', _0x5995e5(0x14b)], '/foo']];

function _0x5c13(_0x379b49, _0x3e4f26) {
    return _0x5c13 = function (_0x58e1c6, _0x5a1a0) {
        _0x58e1c6 = _0x58e1c6 - 232;
        const _0x25315a = _0x2329[_0x58e1c6];

        return _0x25315a;
    }, _0x5c13(_0x379b49, _0x3e4f26);
}
isWindows && (joinTests = joinTests[_0x5995e5(0x15d)]([[[_0x5995e5(0x15e)], _0x5995e5(0x15f)], [[_0x5995e5(0x160)], _0x5995e5(0x15f)], [[_0x5995e5(0x161)], _0x5995e5(0x15f)], [['//foo', 'bar'], _0x5995e5(0x15f)], [[_0x5995e5(0x162), _0x5995e5(0x153)], _0x5995e5(0x15f)], [['//foo', _0x5995e5(0x14d)], '//foo/bar/'], [[_0x5995e5(0x15c), '', 'bar'], _0x5995e5(0x15f)], [[_0x5995e5(0x162), '', _0x5995e5(0x153)], '//foo/bar/'], [[_0x5995e5(0x162), '', _0x5995e5(0x14d)], _0x5995e5(0x15f)], [['', _0x5995e5(0x15c), _0x5995e5(0x153)], _0x5995e5(0x15f)], [['', _0x5995e5(0x162), _0x5995e5(0x153)], _0x5995e5(0x15f)], [['', '//foo/', _0x5995e5(0x14d)], '//foo/bar/'], [['\\', _0x5995e5(0x158)], _0x5995e5(0x163)], [['\\', _0x5995e5(0x163)], _0x5995e5(0x163)], [['', '/', _0x5995e5(0x163)], _0x5995e5(0x163)], [['//', 'foo/bar'], _0x5995e5(0x163)], [['//', _0x5995e5(0x163)], '/foo/bar'], [['\\\\', '/', '/foo/bar'], _0x5995e5(0x163)], [['//'], '/'], [[_0x5995e5(0x15c)], _0x5995e5(0x14b)], [[_0x5995e5(0x162)], _0x5995e5(0x164)], [[_0x5995e5(0x15c), '/'], _0x5995e5(0x164)], [[_0x5995e5(0x15c), '', '/'], _0x5995e5(0x164)], [[_0x5995e5(0x165)], _0x5995e5(0x163)], [[_0x5995e5(0x166), 'bar'], _0x5995e5(0x163)], [[_0x5995e5(0x167)], _0x5995e5(0x163)], [['c:'], 'c:.'], [[_0x5995e5(0x168)], _0x5995e5(0x168)], [['c:', ''], _0x5995e5(0x168)], [['', 'c:'], 'c:.'], [[_0x5995e5(0x168), '/'], _0x5995e5(0x169)], [['c:.', _0x5995e5(0x12a)], _0x5995e5(0x16a)], [['c:', '/'], _0x5995e5(0x16b)], [['c:', 'file'], _0x5995e5(0x16c)]]));
joinTests[_0x5995e5(0x16d)](function (_0x2a1204) {
    const _0x84735f = _0x5995e5;
    const _0x494d45 = {
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
    };

    const _0x3b2d8d = path[_0x84735f(0x16e)][_0x84735f(0x16f)](path, _0x2a1204[0]);

    const _0x2db683 = isWindows ? _0x2a1204[1].replace(/\//g, '\\') : _0x2a1204[1];

    const _0x3e810a = _0x494d45.fFXHe(_0x494d45[_0x84735f(0x170)](_0x494d45[_0x84735f(0x171)](_0x494d45.YxHzW(_0x494d45[_0x84735f(0x171)](_0x84735f(0x172), _0x2a1204[0][_0x84735f(0x173)](JSON.stringify)[_0x84735f(0x16e)](',')), ')') + _0x84735f(0x174), JSON[_0x84735f(0x175)](_0x2db683)), _0x494d45[_0x84735f(0x176)]), JSON[_0x84735f(0x175)](_0x3b2d8d));

    if (_0x494d45[_0x84735f(0x177)](_0x3b2d8d, _0x2db683)) failures.push('\n' + _0x3e810a);
}), assert.equal(failures[_0x5995e5(0x178)], 0, '');
const joinThrowTests = [true, false, 7, null, {}, undefined, [], NaN];

joinThrowTests[_0x5995e5(0x16d)](function (_0x192ce8) {
    const _0x1a0728 = _0x5995e5;

    assert[_0x1a0728(0x179)](function () {
        const _0x44f589 = _0x1a0728;

        path[_0x44f589(0x16e)](_0x192ce8);
    }, TypeError), assert[_0x1a0728(0x179)](function () {
        path.resolve(_0x192ce8);
    }, TypeError);
});
if (isWindows) {
    const aBCGLG = ['5', '1', '0', '2', '3', '4'];
    var BepZRm = 0;

    while (true) {
        switch (aBCGLG[BepZRm++]) {
            case '0':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x17a)](_0x5995e5(0x17b)), _0x5995e5(0x17c));
                continue;
            case '1':
                assert[_0x5995e5(0xf7)](path.normalize(_0x5995e5(0x17d)), '\\bar');
                continue;
            case '2':
                assert.equal(path[_0x5995e5(0x17a)](_0x5995e5(0x17e)), _0x5995e5(0x17f));
                continue;
            case '3':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x17a)]('a//b//.'), 'a\\b');
                continue;
            case '4':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x17a)]('//server/share/dir/file.ext'), _0x5995e5(0x180));
                continue;
            case '5':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x17a)](_0x5995e5(0x181)), 'fixtures\\b\\c.js');
                continue;
        }
        break;
    }
} else {
    const fBUiFB = _0x5995e5(0x182).split('|');

    var HPlsRQ = 0;

    while (true) {
        switch (fBUiFB[HPlsRQ++]) {
            case '0':
                assert[_0x5995e5(0xf7)](path.normalize(_0x5995e5(0x17e)), _0x5995e5(0x183));
                continue;
            case '1':
                assert.equal(path[_0x5995e5(0x17a)](_0x5995e5(0x17d)), _0x5995e5(0x14d));
                continue;
            case '2':
                assert[_0x5995e5(0xf7)](path.normalize(_0x5995e5(0x17b)), _0x5995e5(0x184));
                continue;
            case '3':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x17a)](_0x5995e5(0x181)), 'fixtures/b/c.js');
                continue;
            case '4':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x17a)](_0x5995e5(0x185)), _0x5995e5(0x184));
                continue;
        }
        break;
    }
}
if (isWindows) const resolveTests = [[['c:/blah\\blah', 'd:/games', _0x5995e5(0x186)], _0x5995e5(0x187)], [['c:/ignore', 'd:\\a/b\\c/d', _0x5995e5(0x188)], _0x5995e5(0x189)], [[_0x5995e5(0x18a), _0x5995e5(0x18b)], _0x5995e5(0x18c)], [[_0x5995e5(0x18d), _0x5995e5(0x18e)], _0x5995e5(0x18f)], [['.'], process[_0x5995e5(0x190)]()], [['//server/share', '..', _0x5995e5(0x191)], '\\\\server\\share\\relative'], [[_0x5995e5(0x16b), '//'], 'c:\\'], [[_0x5995e5(0x16b), '//dir'], 'c:\\dir'], [[_0x5995e5(0x16b), _0x5995e5(0x192)], _0x5995e5(0x193)], [[_0x5995e5(0x16b), _0x5995e5(0x194)], _0x5995e5(0x193)], [['c:/', '///some//dir'], _0x5995e5(0x195)]];else const resolveTests = [[[_0x5995e5(0x196), _0x5995e5(0x197), _0x5995e5(0x13c)], '/var/file'], [[_0x5995e5(0x196), _0x5995e5(0x198), _0x5995e5(0x13c)], '/file'], [[_0x5995e5(0x199), _0x5995e5(0x19a)], process.cwd()], [['.'], process[_0x5995e5(0x190)]()], [[_0x5995e5(0x19b), '.', '/absolute/'], _0x5995e5(0x19c)]];
const failures = [];

resolveTests[_0x5995e5(0x16d)](function (_0x21399b) {
    const _0x1db9e1 = _0x5995e5;
    const _0x18586c = {
        'RbLaK': function (_0x1843a1, _0xa974fb) {
            return _0x1843a1 + _0xa974fb;
        },
        'ZBMPr': function (_0x1546ab, _0x38a8c1) {
            return _0x1546ab + _0x38a8c1;
        },
        'qzobD': function (_0x2f1ce0, _0x5ab4ec) {
            return _0x2f1ce0 + _0x5ab4ec;
        },
        'UEdOM': _0x1db9e1(0x19d),
        'ABbAJ': _0x1db9e1(0x174),
        'ykVFc': '\n  actual=',
        'RhvZq': function (_0x2765c0, _0x43a22e) {
            return _0x2765c0 !== _0x43a22e;
        }
    };

    const _0x3771a2 = path[_0x1db9e1(0x19e)][_0x1db9e1(0x16f)](path, _0x21399b[0]);

    const _0x525ceb = _0x21399b[1];

    const _0x17de8b = _0x18586c.RbLaK(_0x18586c[_0x1db9e1(0x19f)](_0x18586c[_0x1db9e1(0x19f)](_0x18586c[_0x1db9e1(0x1a0)](_0x18586c[_0x1db9e1(0x1a1)](_0x18586c.UEdOM, _0x21399b[0][_0x1db9e1(0x173)](JSON[_0x1db9e1(0x175)]).join(',')), ')'), _0x18586c[_0x1db9e1(0x1a2)]), JSON.stringify(_0x525ceb)), _0x18586c[_0x1db9e1(0x1a3)]) + JSON[_0x1db9e1(0x175)](_0x3771a2);

    if (_0x18586c[_0x1db9e1(0x1a4)](_0x3771a2, _0x525ceb)) failures[_0x1db9e1(0x1a5)]('\n' + _0x17de8b);
}), assert[_0x5995e5(0xf7)](failures[_0x5995e5(0x178)], 0, failures[_0x5995e5(0x16e)](''));
if (isWindows) {
    const vkUlqw = _0x5995e5(0x1a6)[_0x5995e5(0x100)]('|');

    var JoPZbF = 0;

    while (true) {
        switch (vkUlqw[JoPZbF++]) {
            case '0':
                assert[_0x5995e5(0xf7)](path.isAbsolute(_0x5995e5(0x1a7)), true);
                continue;
            case '1':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x1a8)]('C:cwd\\another'), false);
                continue;
            case '2':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x1a8)](_0x5995e5(0x1a9)), true);
                continue;
            case '3':
                assert[_0x5995e5(0xf7)](path.isAbsolute(_0x5995e5(0x1aa)), true);
                continue;
            case '4':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x1a8)]('directory\\directory'), false);
                continue;
            case '5':
                assert.equal(path.isAbsolute('directory/directory'), false);
                continue;
            case '6':
                assert[_0x5995e5(0xf7)](path[_0x5995e5(0x1a8)](_0x5995e5(0x1ab)), true);
                continue;
            case '7':
                assert.equal(path.isAbsolute('C:cwd/another'), false);
                continue;
        }
        break;
    }
} else assert[_0x5995e5(0xf7)](path.isAbsolute(_0x5995e5(0x1ac)), true), assert.equal(path.isAbsolute(_0x5995e5(0x1ad)), true), assert[_0x5995e5(0xf7)](path[_0x5995e5(0x1a8)](_0x5995e5(0x1ae)), false), assert.equal(path.isAbsolute(_0x5995e5(0x1af)), false);
if (isWindows) const relativeTests = [[_0x5995e5(0x1b0), _0x5995e5(0x1b1), _0x5995e5(0x1b2)], ['c:/aaaa/bbbb', _0x5995e5(0x1b3), '..'], [_0x5995e5(0x1b4), 'c:/cccc', _0x5995e5(0x1b5)], [_0x5995e5(0x1b4), 'c:/aaaa/bbbb', ''], ['c:/aaaa/bbbb', _0x5995e5(0x1b6), '..\\cccc'], ['c:/aaaa/', _0x5995e5(0x1b6), 'cccc'], [_0x5995e5(0x16b), _0x5995e5(0x1b7), _0x5995e5(0x1b8)], [_0x5995e5(0x1b4), _0x5995e5(0x1b9), 'd:\\']];else const relativeTests = [[_0x5995e5(0x196), _0x5995e5(0x1ba), '..'], [_0x5995e5(0x196), '/bin', _0x5995e5(0x1bb)], [_0x5995e5(0x196), _0x5995e5(0x196), ''], ['/var/lib', _0x5995e5(0x1bc), _0x5995e5(0x1bd)], [_0x5995e5(0x1be), _0x5995e5(0x196), _0x5995e5(0x1bf)], ['/', _0x5995e5(0x196), _0x5995e5(0x1c0)]];
const failures = [];

relativeTests[_0x5995e5(0x16d)](function (_0x361120) {
    const _0x357b17 = _0x5995e5;
    const _0x25a717 = {
        'StyBe': function (_0x3c4e34, _0x145a9e) {
            return _0x3c4e34 + _0x145a9e;
        },
        'RekMv': function (_0x1c9552, _0x203e01) {
            return _0x1c9552 + _0x203e01;
        },
        'wSvnh': 'path.relative(',
        'CCKJC': _0x357b17(0x174),
        'kVpTS': '\n  actual=',
        'aYoAO': function (_0x2957ef, _0x11fb96) {
            return _0x2957ef !== _0x11fb96;
        }
    };

    const _0x1eaea1 = path[_0x357b17(0x1c1)](_0x361120[0], _0x361120[1]);

    const _0x4df6a1 = _0x361120[2];

    const _0x3bdc99 = _0x25a717.StyBe(_0x25a717[_0x357b17(0x1c2)](_0x25a717[_0x357b17(0x1c3)](_0x25a717[_0x357b17(0x1c4)] + _0x361120[_0x357b17(0x1c5)](0, 2)[_0x357b17(0x173)](JSON.stringify)[_0x357b17(0x16e)](','), ')'), _0x25a717[_0x357b17(0x1c6)]) + JSON[_0x357b17(0x175)](_0x4df6a1) + _0x25a717[_0x357b17(0x1c7)], JSON[_0x357b17(0x175)](_0x1eaea1));

    if (_0x25a717[_0x357b17(0x1c8)](_0x1eaea1, _0x4df6a1)) failures[_0x357b17(0x1a5)](_0x25a717[_0x357b17(0x1c3)]('\n', _0x3bdc99));
}), assert[_0x5995e5(0xf7)](failures.length, 0, failures[_0x5995e5(0x16e)](''));
isWindows ? assert[_0x5995e5(0xf7)](path[_0x5995e5(0x1c9)], '\\') : assert.equal(path[_0x5995e5(0x1c9)], '/');
isWindows ? assert[_0x5995e5(0xf7)](path[_0x5995e5(0x1ca)], ';') : assert[_0x5995e5(0xf7)](path[_0x5995e5(0x1ca)], ':');
