const _0x5881 = [
    'todos',
    'then',
    'fixturesFolder',
    'remove',
    'does-not-exist.json',
    'get',
    'message',
    'include',
    'A\x20fixture\x20file\x20could\x20not\x20be\x20found',
    'unicode\x20escape\x20syntax',
    'can\x20parse\x20unicode\x20escape\x20in\x20JSON',
    'unicode_escape.json',
    'deep',
    'nested\x20fixtures',
    'nested/fixture.js',
    'fixture',
    'json\x20files',
    'throws\x20when\x20json\x20is\x20invalid',
    '\x27bad_json.json\x27\x20is\x20not\x20valid\x20JSON.\x0aParse\x20error\x20on\x20line\x202:\x0a{\x20\x20\x22bad\x22:\x20\x22json\x22\x20\x20\x22should\x22:\x20\x22not\x20parse\x0a------------------^\x0aExpecting\x20\x27EOF\x27,\x20\x27}\x27,\x20\x27:\x27,\x20\x27,\x27,\x20\x27]\x27,\x20got\x20\x27STRING\x27',
    'should\x20have\x20failed\x20but\x20did\x20not',
    'catch',
    '\x27bad_json.json\x27\x20is\x20not\x20valid\x20JSON.',
    'Expecting\x20\x27EOF\x27,\x20\x27}\x27,\x20\x27:\x27,\x20\x27,\x27,\x20\x27]\x27,\x20got\x20\x27STRING\x27',
    'auto',
    'does\x20not\x20reformat\x20json\x20on\x20parse\x20error',
    'bad_json.json',
    'readFileAsync',
    '/bad_json.json',
    '{\x0a\x20\x20\x22bad\x22:\x20\x22json\x22\x0a\x20\x20\x22should\x22:\x20\x22not\x20parse\x22\x0a}',
    'does\x20not\x20reformat\x20json\x20or\x20write\x20fixture\x20file',
    'no_format.json',
    '/no_format.json',
    'utf8',
    '{\x22id\x22:\x201,\x20\x22name\x22:\x20\x22brian\x22}',
    'does\x20not\x20remove\x20string\x20whitespace',
    '/words.json',
    '{\x0a\x20\x20\x22some\x22:\x20\x22multiple\x20space\x20separate\x20words\x22,\x0a\x20\x20\x22that\x22:\x20\x22should\x20keep\x20their\x20spaces\x22\x0a}',
    'parses\x20json\x20to\x20valid\x20JS\x20object',
    'users.json',
    'jennifer',
    'does\x20not\x20reformat\x20empty\x20objects',
    'empty_objects',
    'map',
    '/empty_objects.json',
    'can\x20load\x20a\x20fixture\x20with\x20no\x20extension\x20when\x20a\x20same-named\x20folder\x20also\x20exists',
    'folder-same-as-fixture',
    'foo',
    'user.js',
    'brian',
    '{foo:\x20\x22bar\x22,\x20baz:\x20\x22quux\x22}',
    'bad_js.js:3\x0a\x20\x20bar:\x20\x22bar\x0a\x20\x20\x20\x20\x20\x20\x20^\x0aParseError:\x20Unterminated\x20string\x20constant',
    '\x27bad_js.js\x27\x20is\x20not\x20a\x20valid\x20JavaScript\x20object.\x0a',
    'returns\x20valid\x20coffee\x20object',
    'valid_coffee_obj.coffee',
    'cypress',
    'does\x20not\x20rewrite\x20coffee\x20files',
    'no_format_coffee.coffee',
    '[\x0a\x20\x20{id:\x201}\x0a\x20\x20{id:\x202}\x0a]',
    'throws\x20on\x20bad\x20coffee\x20object',
    'bad_coffee.coffee',
    '\x27bad_coffee.coffee\x20is\x20not\x20a\x20valid\x20CoffeeScript\x20object.\x0a[stdin]:1:1:\x20error:\x20missing\x20}\x0a{\x0a^',
    'html\x20files',
    '<!doctype\x20html>\x0a<html>\x0a<head>\x0a<title>index.html</title>\x0a</head>\x0a<body>\x0aindex\x0a</body>\x0a</html>',
    'does\x20not\x20rewrite\x20file\x20as\x20formatted\x20html',
    'txt\x20files',
    'message.txt',
    'foobarbaz',
    'csv\x20files',
    'returns\x20text\x20as\x20string',
    'Name,Occupation,Birth\x20Year\x0aJane,Engineer,1976\x0aJohn,Chef,1982\x0a',
    'file\x20with\x20unknown\x20extension',
    'unknown_ext.yaml',
    '-\x20foo\x0a-\x20bar\x0a-\x20\x0a',
    'file\x20with\x20unknown\x20extension\x20and\x20encoding\x20specified',
    'returns\x20text\x20encoded\x20as\x20specified',
    'ascii.foo',
    'ascii',
    'join',
    'returns\x20png\x20as\x20string',
    'read',
    'images/flower.png',
    'base64',
    'returns\x20jpg\x20as\x20string',
    'images/sample.jpg',
    'returns\x20gif\x20as\x20string',
    'images/word.gif',
    'returns\x20tif\x20as\x20string',
    'images/sample.tif',
    'returns\x20png\x20as\x20binary',
    'binary',
    'zip\x20files',
    'returns\x20zip\x20as\x20base64\x20string',
    'example.zip',
    'UEsDBAoAAAAAAK2zOUcAAAAAAAAAAAAAAAAEABAAemlwL1VYDAAGAwZWBgMGVvUBFABQSwMECgAAAAAAo7M5RwAAAAAAAAAAAAAAAAkAEAB6aXAvYS50eHRVWAwA8QIGVvECBlb1ARQAUEsDBAoAAAAAAKSzOUcAAAAAAAAAAAAAAAAJABAAemlwL2IudHh0VVgMAPMCBlbzAgZW9QEUAFBLAwQKAAAAAAClszlHAAAAAAAAAAAAAAAACQAQAHppcC9jLnR4dFVYDAD1AgZW9QIGVvUBFABQSwMECgAAAAAApbM5RwAAAAAAAAAAAAAAAAkAEAB6aXAvZC50eHRVWAwA9gIGVvYCBlb1ARQAUEsDBAoAAAAAAKazOUcAAAAAAAAAAAAAAAAJABAAemlwL2UudHh0VVgMAPgCBlb4AgZW9QEUAFBLAwQKAAAAAACnszlHAAAAAAAAAAAAAAAACQAQAHppcC9mLnR4dFVYDAD5AgZW+QIGVvUBFABQSwMECgAAAAAAqLM5RwAAAAAAAAAAAAAAAAkAEAB6aXAvZy50eHRVWAwA+wIGVvsCBlb1ARQAUEsDBAoAAAAAAKizOUcAAAAAAAAAAAAAAAAJABAAemlwL2gudHh0VVgMAPwCBlb8AgZW9QEUAFBLAwQKAAAAAACpszlHAAAAAAAAAAAAAAAACQAQAHppcC9pLnR4dFVYDAD9AgZW/QIGVvUBFABQSwMECgAAAAAAqrM5RwAAAAAAAAAAAAAAAAkAEAB6aXAvai50eHRVWAwA/wIGVv8CBlb1ARQAUEsDBAoAAAAAAK2zOUcAAAAAAAAAAAAAAAAJABAAemlwL2sudHh0VVgMAAYDBlYGAwZW9QEUAFBLAQIVAwoAAAAAAK2zOUcAAAAAAAAAAAAAAAAEAAwAAAAAAAAAAEDtQQAAAAB6aXAvVVgIAAYDBlYGAwZWUEsBAhUDCgAAAAAAo7M5RwAAAAAAAAAAAAAAAAkADAAAAAAAAAAAQKSBMgAAAHppcC9hLnR4dFVYCADxAgZW8QIGVlBLAQIVAwoAAAAAAKSzOUcAAAAAAAAAAAAAAAAJAAwAAAAAAAAAAECkgWkAAAB6aXAvYi50eHRVWAgA8wIGVvMCBlZQSwECFQMKAAAAAAClszlHAAAAAAAAAAAAAAAACQAMAAAAAAAAAABApIGgAAAAemlwL2MudHh0VVgIAPUCBlb1AgZWUEsBAhUDCgAAAAAApbM5RwAAAAAAAAAAAAAAAAkADAAAAAAAAAAAQKSB1wAAAHppcC9kLnR4dFVYCAD2AgZW9gIGVlBLAQIVAwoAAAAAAKazOUcAAAAAAAAAAAAAAAAJAAwAAAAAAAAAAECkgQ4BAAB6aXAvZS50eHRVWAgA+AIGVvgCBlZQSwECFQMKAAAAAACnszlHAAAAAAAAAAAAAAAACQAMAAAAAAAAAABApIFFAQAAemlwL2YudHh0VVgIAPkCBlb5AgZWUEsBAhUDCgAAAAAAqLM5RwAAAAAAAAAAAAAAAAkADAAAAAAAAAAAQKSBfAEAAHppcC9nLnR4dFVYCAD7AgZW+wIGVlBLAQIVAwoAAAAAAKizOUcAAAAAAAAAAAAAAAAJAAwAAAAAAAAAAECkgbMBAAB6aXAvaC50eHRVWAgA/AIGVvwCBlZQSwECFQMKAAAAAACpszlHAAAAAAAAAAAAAAAACQAMAAAAAAAAAABApIHqAQAAemlwL2kudHh0VVgIAP0CBlb9AgZWUEsBAhUDCgAAAAAAqrM5RwAAAAAAAAAAAAAAAAkADAAAAAAAAAAAQKSBIQIAAHppcC9qLnR4dFVYCAD/AgZW/wIGVlBLAQIVAwoAAAAAAK2zOUcAAAAAAAAAAAAAAAAJAAwAAAAAAAAAAECkgVgCAAB6aXAvay50eHRVWAgABgMGVgYDBlZQSwUGAAAAAAwADAAfAwAAjwIAAAAA',
    'extension\x20omitted',
    '#2\x20finds\x20js',
    'bar',
    'does-not-exist',
    '/does-not-exist',
    'new\x20lines',
    'does\x20not\x20remove\x20trailing\x20new\x20lines\x20on\x20.txt',
    'trailing_new_line.txt',
    'foo\x0abar\x0abaz\x0a',
    'does\x20not\x20remove\x20trailing\x20new\x20lines\x20on\x20.json',
    '/trailing_new_line.json',
    '{\x22foo\x22:\x20\x22bar\x22}\x0a',
    'does\x20not\x20remove\x20trailing\x20new\x20lines\x20on\x20.js',
    'trailing_new_line.js',
    '/trailing_new_line.js',
    '{foo:\x20\x22bar\x22}\x0a',
    'does\x20not\x20remove\x20trailing\x20new\x20lines\x20on\x20.coffee',
    'trailing_new_line_coffee.coffee',
    '/trailing_new_line_coffee.coffee',
    '{\x20foo:\x20\x22bar\x22\x20}\x0a',
    'does\x20not\x20remove\x20trailing\x20new\x20lines\x20on\x20.html',
    'trailing_new_line.html',
    '/trailing_new_line.html',
    '879430BEFnru',
    '182026HNRBBs',
    '954557KrUTkZ',
    '537497aHkqFu',
    '1lALGhT',
    '721002VlVpzv',
    '420226ZxBAMz',
    '158811xovhGx',
    '../spec_helper',
    'path',
    'bluebird',
    'lib/fixture',
    '/test/support/helpers/fixtures',
    'eol',
    'scaffold',
    'todosPath',
    'projectPath'
];
const _0x3bf5b7 = _0x96a3;
function _0x96a3(_0xd03ab8, _0x166ce9) {
    return _0x96a3 = function (_0x5881f8, _0x96a3f1) {
        _0x5881f8 = _0x5881f8 - 0x1c6;
        let _0x55e5d9 = _0x5881[_0x5881f8];
        return _0x55e5d9;
    }, _0x96a3(_0xd03ab8, _0x166ce9);
}
(function (_0x741162, _0x45da2b) {
    const _0x194779 = _0x96a3;
    while (!![]) {
        try {
            const _0x406d1f = parseInt(_0x194779(0x1c6)) + -parseInt(_0x194779(0x1c7)) + -parseInt(_0x194779(0x1c8)) + parseInt(_0x194779(0x1c9)) * -parseInt(_0x194779(0x1ca)) + parseInt(_0x194779(0x1cb)) + parseInt(_0x194779(0x1cc)) + parseInt(_0x194779(0x1cd));
            if (_0x406d1f === _0x45da2b)
                break;
            else
                _0x741162['push'](_0x741162['shift']());
        } catch (_0x214cf9) {
            _0x741162['push'](_0x741162['shift']());
        }
    }
}(_0x5881, 0x7b62d), require(_0x3bf5b7(0x1ce)));
const path = require(_0x3bf5b7(0x1cf)), Promise = require(_0x3bf5b7(0x1d0)), config = require(root + 'lib/config'), fixture = require(root + _0x3bf5b7(0x1d1)), {fs} = require(root + 'lib/util/fs'), FixturesHelper = require(root + _0x3bf5b7(0x1d2)), os = require('os'), eol = require(_0x3bf5b7(0x1d3)), isWindows = () => {
        return os['platform']() === 'win32';
    };
describe(_0x3bf5b7(0x1d1), () => {
    const _0x978ab = _0x3bf5b7;
    beforeEach(function () {
        const _0x39774f = _0x96a3;
        return FixturesHelper[_0x39774f(0x1d4)](), this[_0x39774f(0x1d5)] = FixturesHelper[_0x39774f(0x1d6)](_0x39774f(0x1d7)), config['get'](this[_0x39774f(0x1d5)])[_0x39774f(0x1d8)](_0x55910a => {
            const _0x1c9d40 = _0x39774f;
            ({
                fixturesFolder: this[_0x1c9d40(0x1d9)]
            } = _0x55910a);
        });
    }), afterEach(() => {
        const _0x213f1b = _0x96a3;
        return FixturesHelper[_0x213f1b(0x1da)]();
    }), context('file\x20not\x20found', () => {
        it('throws\x20when\x20file\x20cannot\x20be\x20found', function () {
            const _0xfcbcaa = _0x96a3, _0x4fee6d = _0xfcbcaa(0x1db);
            return fixture[_0xfcbcaa(0x1dc)](this[_0xfcbcaa(0x1d9)], _0x4fee6d)['then'](() => {
                throw new Error('should\x20have\x20failed\x20but\x20did\x20not');
            })['catch'](_0x56c890 => {
                const _0x54415d = _0xfcbcaa;
                expect(_0x56c890[_0x54415d(0x1dd)])['to'][_0x54415d(0x1de)](_0x54415d(0x1df)), expect(_0x56c890[_0x54415d(0x1dd)])['to'][_0x54415d(0x1de)](_0x4fee6d);
            });
        });
    }), context(_0x978ab(0x1e0), () => {
        const _0x4bbd65 = _0x978ab;
        it(_0x4bbd65(0x1e1), function () {
            const _0x10aa49 = _0x4bbd65;
            return fixture[_0x10aa49(0x1dc)](this[_0x10aa49(0x1d9)], _0x10aa49(0x1e2))[_0x10aa49(0x1d8)](_0x35741f => {
                const _0x3a7bc3 = _0x10aa49;
                expect(_0x35741f)['to'][_0x3a7bc3(0x1e3)]['eq']({ 'name': '♥' });
            });
        });
    }), context(_0x978ab(0x1e4), () => {
        it('can\x20pass\x20path\x20to\x20nested\x20fixture', function () {
            const _0x2a4fd7 = _0x96a3;
            return fixture['get'](this[_0x2a4fd7(0x1d9)], _0x2a4fd7(0x1e5))[_0x2a4fd7(0x1d8)](_0x38f201 => {
                const _0x317623 = _0x2a4fd7;
                expect(_0x38f201)['to'][_0x317623(0x1e3)]['eq']({ 'nested': _0x317623(0x1e6) });
            });
        });
    }), context(_0x978ab(0x1e7), () => {
        const _0xb0100a = _0x978ab;
        it(_0xb0100a(0x1e8), function () {
            const _0x541848 = _0xb0100a, _0x108995 = _0x541848(0x1e9);
            return fixture[_0x541848(0x1dc)](this[_0x541848(0x1d9)], 'bad_json.json')[_0x541848(0x1d8)](() => {
                const _0x3232f4 = _0x541848;
                throw new Error(_0x3232f4(0x1ea));
            })[_0x541848(0x1eb)](_0x339d13 => {
                const _0x220145 = _0x541848;
                isWindows() ? (expect(_0x339d13[_0x220145(0x1dd)])['to'][_0x220145(0x1de)](_0x220145(0x1ec)), expect(_0x339d13[_0x220145(0x1dd)])['to'][_0x220145(0x1de)]('Parse\x20error\x20on\x20line\x202:'), expect(_0x339d13['message'])['to']['include'](_0x220145(0x1ed))) : expect(eol[_0x220145(0x1ee)](_0x339d13[_0x220145(0x1dd)]))['to']['eq'](eol[_0x220145(0x1ee)](_0x108995));
            });
        }), it(_0xb0100a(0x1ef), function () {
            const _0x45e47a = _0xb0100a;
            return fixture[_0x45e47a(0x1dc)](this['fixturesFolder'], _0x45e47a(0x1f0))[_0x45e47a(0x1d8)](() => {
                const _0x51da4f = _0x45e47a;
                throw new Error(_0x51da4f(0x1ea));
            })[_0x45e47a(0x1eb)](_0x26aa15 => {
                const _0x307779 = _0x45e47a;
                return fs[_0x307779(0x1f1)](this['fixturesFolder'] + _0x307779(0x1f2), 'utf8')[_0x307779(0x1d8)](_0x888bc2 => {
                    const _0x5dd394 = _0x307779;
                    expect(_0x888bc2)['to']['eq'](_0x5dd394(0x1f3));
                });
            });
        }), it(_0xb0100a(0x1f4), function () {
            const _0x5412a0 = _0xb0100a;
            return fixture['get'](this['fixturesFolder'], _0x5412a0(0x1f5))['then'](_0x4eb038 => {
                const _0x2ee55a = _0x5412a0;
                return fs[_0x2ee55a(0x1f1)](this[_0x2ee55a(0x1d9)] + _0x2ee55a(0x1f6), _0x2ee55a(0x1f7))[_0x2ee55a(0x1d8)](_0x432cc9 => {
                    const _0x446f51 = _0x2ee55a;
                    expect(_0x432cc9)['to']['eq'](_0x446f51(0x1f8));
                });
            });
        }), it(_0xb0100a(0x1f9), function () {
            const _0x4277b6 = _0xb0100a;
            return fixture[_0x4277b6(0x1dc)](this[_0x4277b6(0x1d9)], 'words.json')['then'](_0x4d6c89 => {
                const _0x3740bd = _0x4277b6;
                return fs[_0x3740bd(0x1f1)](this[_0x3740bd(0x1d9)] + _0x3740bd(0x1fa), 'utf8')[_0x3740bd(0x1d8)](_0x4205f2 => {
                    const _0x4f0c7e = _0x3740bd;
                    expect(_0x4205f2)['to']['eq'](_0x4f0c7e(0x1fb));
                });
            });
        }), it(_0xb0100a(0x1fc), function () {
            const _0x308335 = _0xb0100a;
            return fixture[_0x308335(0x1dc)](this[_0x308335(0x1d9)], _0x308335(0x1fd))[_0x308335(0x1d8)](_0x22b179 => {
                const _0x1347fe = _0x308335;
                expect(_0x22b179)['to']['deep']['eq']([
                    {
                        'id': 0x1,
                        'name': 'brian'
                    },
                    {
                        'id': 0x2,
                        'name': _0x1347fe(0x1fe)
                    }
                ]);
            });
        }), it(_0xb0100a(0x1ff), function () {
            const _0x2d4314 = _0xb0100a, _0x256e0b = () => {
                    const _0x5bb487 = _0x96a3;
                    return fixture['get'](this[_0x5bb487(0x1d9)], _0x5bb487(0x200));
                };
            return Promise[_0x2d4314(0x201)](Array(0x1f4), _0x256e0b, { 'concurrency': 0x5 })[_0x2d4314(0x1d8)](() => {
                const _0x468cd2 = _0x2d4314;
                return fs[_0x468cd2(0x1f1)](this[_0x468cd2(0x1d9)] + _0x468cd2(0x202), _0x468cd2(0x1f7))[_0x468cd2(0x1d8)](_0x344d53 => {
                    expect(_0x344d53)['to']['eq']('{\x0a\x20\x20\x22empty\x22:\x20{\x0a\x20\x20\x20\x20\x22object\x22:\x20{},\x0a\x20\x20\x20\x20\x22array\x22:\x20[],\x0a\x20\x20\x20\x20\x22object2\x22:\x20{\x0a\x0a\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x22array2\x22:\x20[\x0a\x0a\x20\x20\x20\x20]\x0a\x20\x20}\x0a}');
                });
            });
        }), it(_0xb0100a(0x203), () => {
            const _0x895132 = _0xb0100a, _0x1f85e9 = FixturesHelper[_0x895132(0x1d6)](_0x895132(0x204));
            return config[_0x895132(0x1dc)](_0x1f85e9)['then'](_0x1eb4ca => {
                const _0x154237 = _0x895132;
                return fixture['get'](_0x1eb4ca[_0x154237(0x1d9)], _0x154237(0x205))[_0x154237(0x1d8)](_0x7364ab => {
                    const _0x3fa56e = _0x154237;
                    expect(_0x7364ab)['to'][_0x3fa56e(0x1e3)]['eq']({ 'bar': 'baz' });
                });
            });
        });
    }), context('js\x20files', () => {
        it('returns\x20valid\x20JS\x20object', function () {
            const _0x360002 = _0x96a3;
            return fixture[_0x360002(0x1dc)](this[_0x360002(0x1d9)], _0x360002(0x206))['then'](_0x3c5f24 => {
                const _0x249324 = _0x360002;
                expect(_0x3c5f24)['to'][_0x249324(0x1e3)]['eq']({
                    'id': 0x1,
                    'name': _0x249324(0x207),
                    'age': 0x1d,
                    'posts': []
                });
            });
        }), it('does\x20not\x20rewrite\x20file\x20as\x20a\x20formated\x20valid\x20JS\x20object', function () {
            const _0x3583bc = _0x96a3;
            return fixture[_0x3583bc(0x1dc)](this[_0x3583bc(0x1d9)], 'no_format.js')[_0x3583bc(0x1d8)](_0x588c97 => {
                const _0xff4d7a = _0x3583bc;
                return fs['readFileAsync'](this['fixturesFolder'] + '/no_format.js', _0xff4d7a(0x1f7))[_0xff4d7a(0x1d8)](_0x2b8819 => {
                    const _0x2b1de2 = _0xff4d7a;
                    expect(_0x2b8819)['to']['eq'](_0x2b1de2(0x208));
                });
            });
        }), it('throws\x20on\x20a\x20bad\x20JS\x20object', function () {
            const _0x2d9c6e = _0x96a3, _0x237fe9 = _0x2d9c6e(0x209);
            return fixture[_0x2d9c6e(0x1dc)](this[_0x2d9c6e(0x1d9)], 'bad_js.js')[_0x2d9c6e(0x1d8)](() => {
                const _0x2a5ac3 = _0x2d9c6e;
                throw new Error(_0x2a5ac3(0x1ea));
            })[_0x2d9c6e(0x1eb)](_0x13c884 => {
                const _0x460344 = _0x2d9c6e;
                expect(_0x13c884['message'])['to']['eq'](_0x460344(0x20a) + _0x237fe9);
            });
        });
    }), context('coffee\x20files', () => {
        const _0x33451b = _0x978ab;
        it(_0x33451b(0x20b), function () {
            const _0x2d1161 = _0x33451b;
            return fixture[_0x2d1161(0x1dc)](this['fixturesFolder'], _0x2d1161(0x20c))['then'](_0x44cc9c => {
                const _0x39554d = _0x2d1161;
                expect(_0x44cc9c)['to'][_0x39554d(0x1e3)]['eq']({
                    'name': _0x39554d(0x20d),
                    'users': []
                });
            });
        }), it(_0x33451b(0x20e), function () {
            const _0x48352b = _0x33451b;
            return fixture[_0x48352b(0x1dc)](this[_0x48352b(0x1d9)], _0x48352b(0x20f))['then'](() => {
                const _0x53499f = _0x48352b;
                return fs[_0x53499f(0x1f1)](this[_0x53499f(0x1d9)] + '/no_format_coffee.coffee', _0x53499f(0x1f7))['then'](_0x5abb1f => {
                    const _0x3ba4e9 = _0x53499f;
                    expect(_0x5abb1f)['to']['eq'](_0x3ba4e9(0x210));
                });
            });
        }), it(_0x33451b(0x211), function () {
            const _0x418681 = _0x33451b;
            return fixture['get'](this[_0x418681(0x1d9)], _0x418681(0x212))[_0x418681(0x1d8)](() => {
                throw new Error('should\x20have\x20failed\x20but\x20did\x20not');
            })[_0x418681(0x1eb)](_0x4ae695 => {
                const _0x5942b7 = _0x418681;
                expect(_0x4ae695[_0x5942b7(0x1dd)])['to']['eq'](_0x5942b7(0x213));
            });
        });
    }), context(_0x978ab(0x214), () => {
        const _0x489e1b = _0x978ab;
        it('returns\x20html\x20as\x20a\x20string', function () {
            const _0xc99e9f = _0x96a3;
            return fixture[_0xc99e9f(0x1dc)](this[_0xc99e9f(0x1d9)], 'index.html')['then'](_0x207d11 => {
                const _0x2d1d6c = _0xc99e9f;
                expect(_0x207d11)['to']['eq'](_0x2d1d6c(0x215));
            });
        }), it(_0x489e1b(0x216), function () {
            const _0x2dea60 = _0x489e1b;
            return fixture[_0x2dea60(0x1dc)](this['fixturesFolder'], 'index.html')[_0x2dea60(0x1d8)](() => {
                const _0x4c89b7 = _0x2dea60;
                return fs[_0x4c89b7(0x1f1)](this[_0x4c89b7(0x1d9)] + '/index.html', 'utf8')['then'](_0x48476a => {
                    expect(_0x48476a)['to']['eq']('<!doctype\x20html>\x0a<html>\x0a<head>\x0a<title>index.html</title>\x0a</head>\x0a<body>\x0aindex\x0a</body>\x0a</html>');
                });
            });
        });
    }), context(_0x978ab(0x217), () => {
        it('returns\x20text\x20as\x20string', function () {
            const _0x4bc2d1 = _0x96a3;
            return fixture[_0x4bc2d1(0x1dc)](this[_0x4bc2d1(0x1d9)], _0x4bc2d1(0x218))[_0x4bc2d1(0x1d8)](_0x32f9b9 => {
                const _0x33a20c = _0x4bc2d1;
                expect(_0x32f9b9)['to']['eq'](_0x33a20c(0x219));
            });
        });
    }), context(_0x978ab(0x21a), () => {
        const _0x2cccd1 = _0x978ab;
        it(_0x2cccd1(0x21b), function () {
            const _0x2e4560 = _0x2cccd1;
            return fixture[_0x2e4560(0x1dc)](this[_0x2e4560(0x1d9)], 'data.csv')[_0x2e4560(0x1d8)](_0xa7a724 => {
                const _0x1ed174 = _0x2e4560;
                expect(_0xa7a724)['to']['eq'](_0x1ed174(0x21c));
            });
        });
    }), context(_0x978ab(0x21d), () => {
        const _0x42dd23 = _0x978ab;
        it(_0x42dd23(0x21b), function () {
            const _0x340c57 = _0x42dd23;
            return fixture[_0x340c57(0x1dc)](this[_0x340c57(0x1d9)], _0x340c57(0x21e))[_0x340c57(0x1d8)](_0x81845c => {
                const _0x5c84a4 = _0x340c57;
                expect(_0x81845c)['to']['eq'](_0x5c84a4(0x21f));
            });
        });
    }), context(_0x978ab(0x220), () => {
        const _0xbd1680 = _0x978ab;
        it(_0xbd1680(0x221), function () {
            const _0x435746 = _0xbd1680;
            return fixture['get'](this[_0x435746(0x1d9)], _0x435746(0x222), { 'encoding': _0x435746(0x223) })[_0x435746(0x1d8)](_0x11672e => {
                expect(_0x11672e)['to']['eq']('o#?\x0a');
            });
        });
    }), context('image\x20files', () => {
        const _0x396517 = _0x978ab;
        beforeEach(function () {
            this['read'] = (_0x35cc69, _0x3a25d5, _0x4a9b91) => {
                const _0x1c0626 = _0x96a3;
                return fs[_0x1c0626(0x1f1)](path[_0x1c0626(0x224)](_0x35cc69, _0x3a25d5), _0x4a9b91);
            };
        }), it(_0x396517(0x225), function () {
            const _0x2169cd = _0x396517;
            return this[_0x2169cd(0x226)](this[_0x2169cd(0x1d9)], _0x2169cd(0x227), _0x2169cd(0x228))['then'](_0x212b4d => {
                const _0x452b7a = _0x2169cd;
                return fixture['get'](this['fixturesFolder'], 'images/flower.png')[_0x452b7a(0x1d8)](_0x515c06 => {
                    expect(_0x515c06)['to']['eq'](_0x212b4d);
                });
            });
        }), it(_0x396517(0x229), function () {
            const _0x3a51cd = _0x396517;
            return this['read'](this[_0x3a51cd(0x1d9)], 'images/sample.jpg', 'base64')[_0x3a51cd(0x1d8)](_0x46fc44 => {
                const _0x343dbd = _0x3a51cd;
                return fixture['get'](this[_0x343dbd(0x1d9)], _0x343dbd(0x22a))[_0x343dbd(0x1d8)](_0x3013b1 => {
                    expect(_0x3013b1)['to']['eq'](_0x46fc44);
                });
            });
        }), it(_0x396517(0x22b), function () {
            const _0x4826a9 = _0x396517;
            return this[_0x4826a9(0x226)](this[_0x4826a9(0x1d9)], _0x4826a9(0x22c), 'base64')[_0x4826a9(0x1d8)](_0x443066 => {
                const _0x4254bf = _0x4826a9;
                return fixture[_0x4254bf(0x1dc)](this[_0x4254bf(0x1d9)], _0x4254bf(0x22c))['then'](_0x4be157 => {
                    expect(_0x4be157)['to']['eq'](_0x443066);
                });
            });
        }), it(_0x396517(0x22d), function () {
            const _0x481bd9 = _0x396517;
            return this['read'](this[_0x481bd9(0x1d9)], _0x481bd9(0x22e), _0x481bd9(0x228))[_0x481bd9(0x1d8)](_0x29d0cd => {
                const _0x236359 = _0x481bd9;
                return fixture[_0x236359(0x1dc)](this['fixturesFolder'], _0x236359(0x22e))[_0x236359(0x1d8)](_0x5dfd14 => {
                    expect(_0x5dfd14)['to']['eq'](_0x29d0cd);
                });
            });
        }), it(_0x396517(0x22f), function () {
            const _0x506b7d = _0x396517;
            return this['read'](this[_0x506b7d(0x1d9)], 'images/flower.png', _0x506b7d(0x230))[_0x506b7d(0x1d8)](_0x365b84 => {
                const _0x1d8dba = _0x506b7d;
                return fixture['get'](this[_0x1d8dba(0x1d9)], _0x1d8dba(0x227), { 'encoding': _0x1d8dba(0x230) })[_0x1d8dba(0x1d8)](_0x330d6f => {
                    expect(_0x365b84)['to']['eq'](_0x330d6f);
                });
            });
        });
    }), context(_0x978ab(0x231), () => {
        const _0xa3c1d0 = _0x978ab;
        it(_0xa3c1d0(0x232), function () {
            const _0x368878 = _0xa3c1d0;
            return fixture['get'](this[_0x368878(0x1d9)], _0x368878(0x233))['then'](_0x473de3 => {
                const _0x2f9bda = _0x368878, _0xf3768b = _0x2f9bda(0x234);
                expect(_0x473de3)['to']['eq'](_0xf3768b);
            });
        });
    }), context(_0x978ab(0x235), () => {
        const _0x4e4e93 = _0x978ab;
        it('#1\x20finds\x20json', function () {
            const _0x10f91b = _0x96a3;
            return fixture[_0x10f91b(0x1dc)](this[_0x10f91b(0x1d9)], _0x10f91b(0x205))['then'](_0xe19759 => {
                const _0x20a33a = _0x10f91b;
                expect(_0xe19759)['to'][_0x20a33a(0x1e3)]['eq']([{ 'json': !![] }]);
            });
        }), it(_0x4e4e93(0x236), function () {
            const _0xc73ddd = _0x4e4e93;
            return fixture[_0xc73ddd(0x1dc)](this[_0xc73ddd(0x1d9)], _0xc73ddd(0x237))[_0xc73ddd(0x1d8)](_0x42e8ab => {
                const _0x2681d0 = _0xc73ddd;
                expect(_0x42e8ab)['to'][_0x2681d0(0x1e3)]['eq']({ 'js': !![] });
            });
        }), it('throws\x20when\x20no\x20file\x20by\x20any\x20extension\x20can\x20be\x20found', function () {
            const _0x5696ea = _0x4e4e93;
            return fixture[_0x5696ea(0x1dc)](this[_0x5696ea(0x1d9)], _0x5696ea(0x238))[_0x5696ea(0x1d8)](() => {
                const _0x399e62 = _0x5696ea;
                throw new Error(_0x399e62(0x1ea));
            })[_0x5696ea(0x1eb)](_0x4aac8e => {
                const _0x165fd6 = _0x5696ea;
                expect(_0x4aac8e['message'])['to'][_0x165fd6(0x1de)](_0x165fd6(0x1df)), expect(_0x4aac8e[_0x165fd6(0x1dd)])['to'][_0x165fd6(0x1de)](_0x165fd6(0x239));
            });
        });
    }), context(_0x978ab(0x23a), () => {
        const _0x393c3c = _0x978ab;
        it(_0x393c3c(0x23b), function () {
            const _0xe622a4 = _0x393c3c;
            return fixture[_0xe622a4(0x1dc)](this[_0xe622a4(0x1d9)], _0xe622a4(0x23c))[_0xe622a4(0x1d8)](_0x489a73 => {
                const _0x1f1295 = _0xe622a4;
                return fs[_0x1f1295(0x1f1)](this['fixturesFolder'] + '/trailing_new_line.txt', _0x1f1295(0x1f7))['then'](_0x44eca0 => {
                    const _0x3b3c08 = _0x1f1295;
                    expect(_0x44eca0)['to']['eq'](_0x3b3c08(0x23d));
                });
            });
        }), it(_0x393c3c(0x23e), function () {
            const _0x55afa1 = _0x393c3c;
            return fixture['get'](this[_0x55afa1(0x1d9)], 'trailing_new_line.json')[_0x55afa1(0x1d8)](_0x1a5234 => {
                const _0x58a280 = _0x55afa1;
                return fs[_0x58a280(0x1f1)](this[_0x58a280(0x1d9)] + _0x58a280(0x23f), _0x58a280(0x1f7))['then'](_0x2b726f => {
                    const _0x596f97 = _0x58a280;
                    expect(_0x2b726f)['to']['eq'](_0x596f97(0x240));
                });
            });
        }), it(_0x393c3c(0x241), function () {
            const _0x5f4b95 = _0x393c3c;
            return fixture['get'](this[_0x5f4b95(0x1d9)], _0x5f4b95(0x242))[_0x5f4b95(0x1d8)](_0x44f15a => {
                const _0x379786 = _0x5f4b95;
                return fs['readFileAsync'](this[_0x379786(0x1d9)] + _0x379786(0x243), _0x379786(0x1f7))[_0x379786(0x1d8)](_0x5faef5 => {
                    const _0x2de311 = _0x379786;
                    expect(_0x5faef5)['to']['eq'](_0x2de311(0x244));
                });
            });
        }), it(_0x393c3c(0x245), function () {
            const _0x560a7d = _0x393c3c;
            return fixture[_0x560a7d(0x1dc)](this[_0x560a7d(0x1d9)], _0x560a7d(0x246))[_0x560a7d(0x1d8)](_0x4fd5a4 => {
                const _0x3ff43f = _0x560a7d;
                return fs[_0x3ff43f(0x1f1)](this[_0x3ff43f(0x1d9)] + _0x3ff43f(0x247), 'utf8')[_0x3ff43f(0x1d8)](_0x3418f1 => {
                    const _0x4ce7e3 = _0x3ff43f;
                    expect(_0x3418f1)['to']['eq'](_0x4ce7e3(0x248));
                });
            });
        }), it(_0x393c3c(0x249), function () {
            const _0x5322c8 = _0x393c3c;
            return fixture[_0x5322c8(0x1dc)](this[_0x5322c8(0x1d9)], _0x5322c8(0x24a))[_0x5322c8(0x1d8)](_0x47737b => {
                const _0x31722f = _0x5322c8;
                return fs[_0x31722f(0x1f1)](this[_0x31722f(0x1d9)] + _0x31722f(0x24b), _0x31722f(0x1f7))[_0x31722f(0x1d8)](_0x3f4ba1 => {
                    expect(_0x3f4ba1)['to']['eq']('<html><body>foo</body></html>\x0a');
                });
            });
        });
    });
});
