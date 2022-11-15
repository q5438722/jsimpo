import _0x3f64e1 from './utils';
describe('when\x20assignWithDepth:\x20should\x20merge\x20objects\x20within\x20objects', function () {
    it('should\x20handle\x20simple,\x20depth:1\x20types\x20(identity)', function () {
        let _0x31e142 = {
                'foo': 'bar',
                'bar': 0x0
            }, _0x243de6 = {
                'foo': 'bar',
                'bar': 0x0
            }, _0x378073 = _0x3f64e1['assignWithDepth'](_0x31e142, _0x243de6);
        expect(_0x378073)['toEqual'](_0x243de6);
    }), it('should\x20handle\x20simple,\x20depth:1\x20types\x20(dst:\x20undefined)', function () {
        let _0x25e262 = undefined, _0x38f971 = {
                'foo': 'bar',
                'bar': 0x0
            }, _0x3cefb4 = _0x3f64e1['assignWithDepth'](_0x25e262, _0x38f971);
        expect(_0x3cefb4)['toEqual'](_0x38f971);
    }), it('should\x20handle\x20simple,\x20depth:1\x20types\x20(src:\x20undefined)', function () {
        let _0x58a159 = {
                'foo': 'bar',
                'bar': 0x0
            }, _0x332847 = undefined, _0x4f2532 = _0x3f64e1['assignWithDepth'](_0x58a159, _0x332847);
        expect(_0x4f2532)['toEqual'](_0x58a159);
    }), it('should\x20handle\x20simple,\x20depth:1\x20types\x20(merge)', function () {
        let _0x523a22 = {
                'foo': 'bar',
                'bar': 0x0
            }, _0x226be7 = { 'foo': 'foo' }, _0x4e6508 = _0x3f64e1['assignWithDepth'](_0x523a22, _0x226be7);
        expect(_0x4e6508)['toEqual']({
            'foo': 'foo',
            'bar': 0x0
        });
    }), it('should\x20handle\x20depth:2\x20types\x20(dst:\x20orphan)', function () {
        let _0x29a679 = {
                'foo': 'bar',
                'bar': { 'foo': 'bar' }
            }, _0x3edbfb = { 'foo': 'bar' }, _0x156d6a = _0x3f64e1['assignWithDepth'](_0x29a679, _0x3edbfb);
        expect(_0x156d6a)['toEqual'](_0x29a679);
    }), it('should\x20handle\x20depth:2\x20types\x20(dst:\x20object,\x20src:\x20simple\x20type)', function () {
        let _0x384970 = {
                'foo': 'bar',
                'bar': { 'foo': 'bar' }
            }, _0x29c9df = {
                'foo': 'foo',
                'bar': 'should\x20NOT\x20clobber'
            }, _0x584841 = _0x3f64e1['assignWithDepth'](_0x384970, _0x29c9df);
        expect(_0x584841)['toEqual']({
            'foo': 'foo',
            'bar': { 'foo': 'bar' }
        });
    }), it('should\x20handle\x20depth:2\x20types\x20(src:\x20orphan)', function () {
        let _0x528caf = { 'foo': 'bar' }, _0x4b6fdd = {
                'foo': 'bar',
                'bar': { 'foo': 'bar' }
            }, _0x1b7838 = _0x3f64e1['assignWithDepth'](_0x528caf, _0x4b6fdd);
        expect(_0x1b7838)['toEqual'](_0x4b6fdd);
    }), it('should\x20handle\x20depth:2\x20types\x20(merge)', function () {
        let _0x549839 = {
                'foo': 'bar',
                'bar': { 'foo': 'bar' },
                'boofar': 0x1
            }, _0x56ce17 = {
                'foo': 'foo',
                'bar': { 'bar': 0x0 },
                'foobar': 'foobar'
            }, _0x26f778 = _0x3f64e1['assignWithDepth'](_0x549839, _0x56ce17);
        expect(_0x26f778)['toEqual']({
            'foo': 'foo',
            'bar': {
                'foo': 'bar',
                'bar': 0x0
            },
            'foobar': 'foobar',
            'boofar': 0x1
        });
    }), it('should\x20handle\x20depth:3\x20types\x20(merge\x20with\x20clobber\x20because\x20assignWithDepth::depth\x20==\x202)', function () {
        let _0x45fc7b = {
                'foo': 'bar',
                'bar': {
                    'foo': 'bar',
                    'bar': {
                        'foo': {
                            'message': 'this',
                            'willbe': 'clobbered'
                        }
                    }
                },
                'boofar': 0x1
            }, _0x309d9f = {
                'foo': 'foo',
                'bar': {
                    'foo': 'foo',
                    'bar': { 'foo': { 'message': 'clobbered\x20other\x20foo' } }
                },
                'foobar': 'foobar'
            }, _0x4c9360 = _0x3f64e1['assignWithDepth'](_0x45fc7b, _0x309d9f);
        expect(_0x4c9360)['toEqual']({
            'foo': 'foo',
            'bar': {
                'foo': 'foo',
                'bar': { 'foo': { 'message': 'clobbered\x20other\x20foo' } }
            },
            'foobar': 'foobar',
            'boofar': 0x1
        });
    }), it('should\x20handle\x20depth:3\x20types\x20(merge\x20with\x20clobber\x20because\x20assignWithDepth::depth\x20==\x201)', function () {
        let _0x829231 = {
                'foo': 'bar',
                'bar': {
                    'foo': 'bar',
                    'bar': {
                        'foo': {
                            'message': '',
                            'willNotbe': 'present'
                        },
                        'bar': 'shouldNotBePresent'
                    }
                },
                'boofar': 0x1
            }, _0x21bb6 = {
                'foo': 'foo',
                'bar': {
                    'foo': 'foo',
                    'bar': { 'foo': { 'message': 'this' } }
                },
                'foobar': 'foobar'
            }, _0x49792c = _0x3f64e1['assignWithDepth'](_0x829231, _0x21bb6, { 'depth': 0x1 });
        expect(_0x49792c)['toEqual']({
            'foo': 'foo',
            'bar': {
                'foo': 'foo',
                'bar': { 'foo': { 'message': 'this' } }
            },
            'foobar': 'foobar',
            'boofar': 0x1
        });
    }), it('should\x20handle\x20depth:3\x20types\x20(merge\x20with\x20no\x20clobber\x20because\x20assignWithDepth::depth\x20==\x203)', function () {
        let _0xcc15de = {
                'foo': 'bar',
                'bar': {
                    'foo': 'bar',
                    'bar': {
                        'foo': {
                            'message': '',
                            'willbe': 'present'
                        }
                    }
                },
                'boofar': 0x1
            }, _0x1f2c9a = {
                'foo': 'foo',
                'bar': {
                    'foo': 'foo',
                    'bar': { 'foo': { 'message': 'this' } }
                },
                'foobar': 'foobar'
            }, _0x4f7da1 = _0x3f64e1['assignWithDepth'](_0xcc15de, _0x1f2c9a, { 'depth': 0x3 });
        expect(_0x4f7da1)['toEqual']({
            'foo': 'foo',
            'bar': {
                'foo': 'foo',
                'bar': {
                    'foo': {
                        'message': 'this',
                        'willbe': 'present'
                    }
                }
            },
            'foobar': 'foobar',
            'boofar': 0x1
        });
    });
}), describe('when\x20memoizing', function () {
    it('should\x20return\x20the\x20same\x20value', function () {
        const _0x426f4b = _0x3f64e1['memoize'](function (_0x1e598c, _0x58b084) {
            return _0x58b084['flag'] = !![], _0x1e598c < -0x85a * -0x1 + 0x6 * -0x669 + 0x202 * 0xf ? 0x2e2 * 0x4 + -0x58 * 0x4d + -0xef1 * -0x1 : _0x426f4b(_0x1e598c - (-0x1442 + -0x2544 + 0x3988), _0x58b084) + _0x426f4b(_0x1e598c - (-0x35 * -0x67 + -0xe18 + -0x73a), _0x58b084);
        });
        let _0x593256 = { 'flag': ![] };
        _0x426f4b(0xa89 + 0x14e8 + -0x1 * 0x1f67, _0x593256), expect(_0x593256['flag'])['toBe'](!![]), _0x593256 = { 'flag': ![] }, _0x426f4b(-0x1 * 0x20ba + -0xc5 * -0x1d + -0x1 * -0xa73, _0x593256), expect(_0x593256['flag'])['toBe'](![]);
    });
}), describe('when\x20detecting\x20chart\x20type\x20', function () {
    it('should\x20handle\x20a\x20graph\x20definition', function () {
        const _0xebd6cf = 'graph\x20TB\x0abfs1:queue', _0x8247fb = _0x3f64e1['detectType'](_0xebd6cf);
        expect(_0x8247fb)['toBe']('flowchart');
    }), it('should\x20handle\x20an\x20initialize\x20definition', function () {
        const _0x56c9a9 = '\x0a%%{initialize:\x20{\x20\x27logLevel\x27:\x200,\x20\x27theme\x27:\x20\x27dark\x27\x20}}%%\x0asequenceDiagram\x0aAlice->Bob:\x20hi', _0x8f392e = _0x3f64e1['detectType'](_0x56c9a9), _0x421f24 = _0x3f64e1['detectInit'](_0x56c9a9);
        expect(_0x8f392e)['toBe']('sequence'), expect(_0x421f24)['toEqual']({
            'logLevel': 0x0,
            'theme': 'dark'
        });
    }), it('should\x20handle\x20an\x20init\x20definition', function () {
        const _0x484c8e = '\x0a%%{init:\x20{\x20\x27logLevel\x27:\x200,\x20\x27theme\x27:\x20\x27dark\x27\x20}}%%\x0asequenceDiagram\x0aAlice->Bob:\x20hi', _0x30751c = _0x3f64e1['detectType'](_0x484c8e), _0x1dbd34 = _0x3f64e1['detectInit'](_0x484c8e);
        expect(_0x30751c)['toBe']('sequence'), expect(_0x1dbd34)['toEqual']({
            'logLevel': 0x0,
            'theme': 'dark'
        });
    }), it('should\x20handle\x20an\x20init\x20definition\x20with\x20config\x20converted\x20to\x20the\x20proper\x20diagram\x20configuration', function () {
        const _0x16f61f = '\x0a%%{init:\x20{\x20\x27logLevel\x27:\x200,\x20\x27theme\x27:\x20\x27dark\x27,\x20\x27config\x27:\x20{\x27wrap\x27:\x20true}\x20}\x20}%%\x0asequenceDiagram\x0aAlice->Bob:\x20hi', _0xdd01ea = _0x3f64e1['detectType'](_0x16f61f), _0x11bb52 = _0x3f64e1['detectInit'](_0x16f61f);
        expect(_0xdd01ea)['toBe']('sequence'), expect(_0x11bb52)['toEqual']({
            'logLevel': 0x0,
            'theme': 'dark',
            'sequence': { 'wrap': !![] }
        });
    }), it('should\x20handle\x20a\x20multiline\x20init\x20definition', function () {
        const _0x25bd05 = '\x0a%%{\x0a\x20\x20init:\x20{\x0a\x20\x20\x20\x20\x27logLevel\x27:\x200,\x0a\x20\x20\x20\x20\x27theme\x27:\x20\x27dark\x27\x0a\x20\x20}\x0a}%%\x0asequenceDiagram\x0aAlice->Bob:\x20hi', _0xd42714 = _0x3f64e1['detectType'](_0x25bd05), _0x14c3b4 = _0x3f64e1['detectInit'](_0x25bd05);
        expect(_0xd42714)['toBe']('sequence'), expect(_0x14c3b4)['toEqual']({
            'logLevel': 0x0,
            'theme': 'dark'
        });
    }), it('should\x20handle\x20multiple\x20init\x20directives', function () {
        const _0x42c593 = '\x0a%%{\x20init:\x20{\x20\x27logLevel\x27:\x200,\x20\x27theme\x27:\x20\x27forest\x27\x20}\x20}%%\x0a%%{\x0a\x20\x20init:\x20{\x0a\x20\x20\x20\x20\x27theme\x27:\x20\x27dark\x27\x0a\x20\x20}\x0a}%%\x0asequenceDiagram\x0aAlice->Bob:\x20hi', _0x4f71a2 = _0x3f64e1['detectType'](_0x42c593), _0x20636f = _0x3f64e1['detectInit'](_0x42c593);
        expect(_0x4f71a2)['toBe']('sequence'), expect(_0x20636f)['toEqual']({
            'logLevel': 0x0,
            'theme': 'dark'
        });
    }), it('should\x20handle\x20a\x20graph\x20definition\x20with\x20leading\x20spaces', function () {
        const _0x2befc5 = '\x20\x20\x20\x20graph\x20TB\x0abfs1:queue', _0x33a316 = _0x3f64e1['detectType'](_0x2befc5);
        expect(_0x33a316)['toBe']('flowchart');
    }), it('should\x20handle\x20a\x20graph\x20definition\x20with\x20leading\x20spaces\x20and\x20newline', function () {
        const _0x5be6a1 = '\x20\x20\x0a\x20\x20graph\x20TB\x0abfs1:queue', _0x241e90 = _0x3f64e1['detectType'](_0x5be6a1);
        expect(_0x241e90)['toBe']('flowchart');
    }), it('should\x20handle\x20a\x20graph\x20definition\x20for\x20gitGraph', function () {
        const _0x21ee5f = '\x20\x20\x0a\x20\x20gitGraph\x20TB:\x0abfs1:queue', _0x56e679 = _0x3f64e1['detectType'](_0x21ee5f);
        expect(_0x56e679)['toBe']('git');
    });
}), describe('when\x20finding\x20substring\x20in\x20array\x20', function () {
    it('should\x20return\x20the\x20array\x20index\x20that\x20contains\x20the\x20substring', function () {
        const _0x394902 = [
                'stroke:val1',
                'fill:val2'
            ], _0x19060c = _0x3f64e1['isSubstringInArray']('fill', _0x394902);
        expect(_0x19060c)['toEqual'](-0x2 * -0x905 + 0x1 * 0x1656 + 0x5 * -0x813);
    }), it('should\x20return\x20-1\x20if\x20the\x20substring\x20is\x20not\x20found\x20in\x20the\x20array', function () {
        const _0x71edd = [
                'stroke:val1',
                'stroke-width:val2'
            ], _0x5e77bb = _0x3f64e1['isSubstringInArray']('fill', _0x71edd);
        expect(_0x5e77bb)['toEqual'](-(0xdaa + 0xaf8 + 0x61 * -0x41));
    });
}), describe('when\x20formatting\x20urls', function () {
    it('should\x20handle\x20links', function () {
        const _0x36e3ec = 'https://mermaid-js.github.io/mermaid/#/';
        let _0x202eee = { 'securityLevel': 'loose' }, _0x47919a = _0x3f64e1['formatUrl'](_0x36e3ec, _0x202eee);
        expect(_0x47919a)['toEqual'](_0x36e3ec), _0x202eee['securityLevel'] = 'strict', _0x47919a = _0x3f64e1['formatUrl'](_0x36e3ec, _0x202eee), expect(_0x47919a)['toEqual'](_0x36e3ec);
    }), it('should\x20handle\x20anchors', function () {
        const _0xcecbba = '#interaction';
        let _0xe6233c = { 'securityLevel': 'loose' }, _0x40e4ae = _0x3f64e1['formatUrl'](_0xcecbba, _0xe6233c);
        expect(_0x40e4ae)['toEqual'](_0xcecbba), _0xe6233c['securityLevel'] = 'strict', _0x40e4ae = _0x3f64e1['formatUrl'](_0xcecbba, _0xe6233c), expect(_0x40e4ae)['toEqual']('about:blank');
    }), it('should\x20handle\x20mailto', function () {
        const _0x14b965 = 'mailto:user@user.user';
        let _0x36adb7 = { 'securityLevel': 'loose' }, _0x43ff53 = _0x3f64e1['formatUrl'](_0x14b965, _0x36adb7);
        expect(_0x43ff53)['toEqual'](_0x14b965), _0x36adb7['securityLevel'] = 'strict', _0x43ff53 = _0x3f64e1['formatUrl'](_0x14b965, _0x36adb7), expect(_0x43ff53)['toEqual'](_0x14b965);
    }), it('should\x20handle\x20other\x20protocols', function () {
        const _0x4002cf = 'notes://do-your-thing/id';
        let _0x354815 = { 'securityLevel': 'loose' }, _0x33a184 = _0x3f64e1['formatUrl'](_0x4002cf, _0x354815);
        expect(_0x33a184)['toEqual'](_0x4002cf), _0x354815['securityLevel'] = 'strict', _0x33a184 = _0x3f64e1['formatUrl'](_0x4002cf, _0x354815), expect(_0x33a184)['toEqual'](_0x4002cf);
    }), it('should\x20handle\x20scripts', function () {
        const _0x403029 = 'javascript:alert(\x22test\x22)';
        let _0x4953d0 = { 'securityLevel': 'loose' }, _0x2622f7 = _0x3f64e1['formatUrl'](_0x403029, _0x4953d0);
        expect(_0x2622f7)['toEqual'](_0x403029), _0x4953d0['securityLevel'] = 'strict', _0x2622f7 = _0x3f64e1['formatUrl'](_0x403029, _0x4953d0), expect(_0x2622f7)['toEqual']('about:blank');
    });
}), describe('when\x20calculating\x20SVG\x20size', function () {
    it('should\x20return\x20width\x20100%\x20when\x20useMaxWidth\x20is\x20true', function () {
        const _0x48bdbc = _0x3f64e1['calculateSvgSizeAttrs'](-0x1063 + -0x39d * 0x8 + 0x2daf, -0x229a + 0x1927 + -0x369 * -0x3, !![]);
        expect(_0x48bdbc['get']('height'))['toEqual'](-0x1 * 0x1f29 + 0x1442 + 0xb4b), expect(_0x48bdbc['get']('style'))['toEqual']('max-width:\x20200px;'), expect(_0x48bdbc['get']('width'))['toEqual']('100%');
    }), it('should\x20return\x20absolute\x20width\x20when\x20useMaxWidth\x20is\x20false', function () {
        const _0x2a0654 = _0x3f64e1['calculateSvgSizeAttrs'](0x787 * 0x4 + -0x258a + 0x16 * 0x5b, -0xb11 + -0x1 * 0x737 + 0x14 * 0xf4, ![]);
        expect(_0x2a0654['get']('height'))['toEqual'](0x10 + 0x1ab1 + -0x1a5d), expect(_0x2a0654['get']('width'))['toEqual'](-0x554 * -0x4 + 0x1930 + -0x2db8);
    });
}), describe('when\x20initializing\x20the\x20id\x20generator', function () {
    it('should\x20return\x20a\x20random\x20number\x20generator\x20based\x20on\x20Date', function (_0x203cb3) {
        const _0x55a32f = new _0x3f64e1['initIdGeneratior'](![]);
        expect(typeof _0x55a32f['next'])['toEqual']('function');
        const _0xfb548f = _0x55a32f['next']();
        setTimeout(() => {
            expect(_0x55a32f['next']() > _0xfb548f)['toBe'](!![]), _0x203cb3();
        }, -0x959 + -0x526 + 0xe84);
    }), it('should\x20return\x20a\x20non\x20random\x20number\x20generator', function () {
        const _0x4187b7 = new _0x3f64e1['initIdGeneratior'](!![]);
        expect(typeof _0x4187b7['next'])['toEqual']('function');
        const _0x146f6f = 0x1c7 * 0x1 + -0x85f * 0x1 + 0x698, _0x3d6b87 = _0x4187b7['next']();
        expect(_0x146f6f)['toEqual'](_0x3d6b87), expect(_0x4187b7['next']())['toEqual'](_0x3d6b87 + (-0x2303 * -0x1 + 0x5c * -0x1f + -0x17de));
    }), it('should\x20return\x20a\x20non\x20random\x20number\x20generator\x20based\x20on\x20seed', function () {
        const _0x494fe3 = new _0x3f64e1['initIdGeneratior'](!![], 'thisIsASeed');
        expect(typeof _0x494fe3['next'])['toEqual']('function');
        const _0x1e42b6 = 0x1918 + 0x1 * -0x641 + -0x12cc, _0x44cf64 = _0x494fe3['next']();
        expect(_0x1e42b6)['toEqual'](_0x44cf64), expect(_0x494fe3['next']())['toEqual'](_0x44cf64 + (-0x30f + -0xe94 + -0x2 * -0x8d2));
    });
});
