import _0x225678 from 'cheerio';
import 'flat-map-polyfill';
import {
    pathExists,
    readdir,
    readFile,
    readJSON,
    remove
} from 'fs-extra';
import {
    check,
    File,
    findPort,
    killApp,
    launchApp,
    nextBuild,
    nextStart,
    renderViaHTTP,
    waitFor
} from 'next-test-utils';
import _0x30a9b2 from 'next-webdriver';
import { join } from 'path';
jest['setTimeout']((-0x10ee * -0x1 + 0x38 * 0x81 + -0x2 * 0x149f) * (0xf62 * 0x1 + -0x21d2 + 0x12ac) * (0x2597 + -0x60d + -0x1f88));
const fixturesDir = join(__dirname, '../..', 'css-fixtures');
describe('CSS\x20Support', () => {
    describe('Basic\x20Global\x20Support', () => {
        const _0x1b0b78 = join(fixturesDir, 'single-global');
        beforeAll(async () => {
            await remove(join(_0x1b0b78, '.next'));
        }), it('should\x20compile\x20successfully', async () => {
            const {
                code: _0x2bfdcd,
                stdout: _0x3754be
            } = await nextBuild(_0x1b0b78, [], { 'stdout': !![] });
            expect(_0x2bfdcd)['toBe'](-0x1be1 + 0x106 + -0x5 * -0x55f), expect(_0x3754be)['toMatch'](/Compiled successfully/);
        }), it('should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x2b97de = join(_0x1b0b78, '.next/static/css'), _0x4a7a14 = await readdir(_0x2b97de), _0x2c9b0d = _0x4a7a14['filter'](_0x20b67b => /\.css$/['test'](_0x20b67b));
            expect(_0x2c9b0d['length'])['toBe'](0xddb + -0x12c0 + 0x4e6), expect(await readFile(join(_0x2b97de, _0x2c9b0d[0x2187 + -0xb1f + -0x1668]), 'utf8'))['toContain']('color:red');
        });
    }), describe('Basic\x20Global\x20Support\x20with\x20src/\x20dir', () => {
        const _0x4b13e8 = join(fixturesDir, 'single-global-src');
        beforeAll(async () => {
            await remove(join(_0x4b13e8, '.next'));
        }), it('should\x20compile\x20successfully', async () => {
            const {
                code: _0x23e0d4,
                stdout: _0x3b33d0
            } = await nextBuild(_0x4b13e8, [], { 'stdout': !![] });
            expect(_0x23e0d4)['toBe'](0x1 * -0xfd5 + 0x2064 + -0x9 * 0x1d7), expect(_0x3b33d0)['toMatch'](/Compiled successfully/);
        }), it('should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x3416dd = join(_0x4b13e8, '.next/static/css'), _0x559748 = await readdir(_0x3416dd), _0x1183b9 = _0x559748['filter'](_0x26f9e1 => /\.css$/['test'](_0x26f9e1));
            expect(_0x1183b9['length'])['toBe'](-0x89 * -0x45 + 0xf62 + -0x344e), expect(await readFile(join(_0x3416dd, _0x1183b9[0x65a + -0x9 * -0x223 + -0x1 * 0x1995]), 'utf8'))['toContain']('color:red');
        });
    }), describe('Multi\x20Global\x20Support', () => {
        const _0x58b43b = join(fixturesDir, 'multi-global');
        beforeAll(async () => {
            await remove(join(_0x58b43b, '.next'));
        }), it('should\x20compile\x20successfully', async () => {
            const {
                code: _0x17de73,
                stdout: _0xc82e26
            } = await nextBuild(_0x58b43b, [], { 'stdout': !![] });
            expect(_0x17de73)['toBe'](-0x939 + -0x194f * 0x1 + -0x11 * -0x208), expect(_0xc82e26)['toMatch'](/Compiled successfully/);
        }), it('should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x3ea524 = join(_0x58b43b, '.next/static/css'), _0x5bb8b4 = await readdir(_0x3ea524), _0x5e3020 = _0x5bb8b4['filter'](_0x3d62db => /\.css$/['test'](_0x3d62db));
            expect(_0x5e3020['length'])['toBe'](0x28d * 0xf + -0x13c9 + 0x1 * -0x1279);
            const _0x1dc1e8 = await readFile(join(_0x3ea524, _0x5e3020[-0x621 + 0x3ce * -0x8 + 0x2491]), 'utf8');
            expect(_0x1dc1e8['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatchInlineSnapshot']('\x22.red-text{color:red}.blue-text{color:blue}\x22');
        });
    }), describe('Nested\x20@import()\x20Global\x20Support', () => {
        const _0x50d252 = join(fixturesDir, 'nested-global');
        beforeAll(async () => {
            await remove(join(_0x50d252, '.next'));
        }), it('should\x20compile\x20successfully', async () => {
            const {
                code: _0x295d87,
                stdout: _0x2ac1d4
            } = await nextBuild(_0x50d252, [], { 'stdout': !![] });
            expect(_0x295d87)['toBe'](-0x200c + -0x51b * -0x1 + 0x1af1), expect(_0x2ac1d4)['toMatch'](/Compiled successfully/);
        }), it('should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x4a0376 = join(_0x50d252, '.next/static/css'), _0x4b69cd = await readdir(_0x4a0376), _0x18d45e = _0x4b69cd['filter'](_0xf6bd6a => /\.css$/['test'](_0xf6bd6a));
            expect(_0x18d45e['length'])['toBe'](0xb32 * -0x1 + 0x3 * 0x1f1 + 0x158 * 0x4);
            const _0x4fc804 = await readFile(join(_0x4a0376, _0x18d45e[-0xcd0 + -0x10a * -0x13 + -0x6ee * 0x1]), 'utf8');
            expect(_0x4fc804['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatchInlineSnapshot']('\x22.red-text{color:purple;font-weight:bolder;color:red}.blue-text{color:orange;font-weight:bolder;color:blue}\x22');
        });
    }), describe('CSS\x20Compilation\x20and\x20Prefixing', () => {
        const _0x1a42cc = join(fixturesDir, 'compilation-and-prefixing');
        beforeAll(async () => {
            await remove(join(_0x1a42cc, '.next'));
        }), it('should\x20compile\x20successfully', async () => {
            const {
                code: _0x308e66,
                stdout: _0x5c49a9
            } = await nextBuild(_0x1a42cc, [], { 'stdout': !![] });
            expect(_0x308e66)['toBe'](0x4b1 * 0x7 + 0x2b0 + -0x1 * 0x2387), expect(_0x5c49a9)['toMatch'](/Compiled successfully/);
        }), it('should\x27ve\x20compiled\x20and\x20prefixed', async () => {
            const _0x30e8af = join(_0x1a42cc, '.next/static/css'), _0x7048d4 = await readdir(_0x30e8af), _0x3cc66f = _0x7048d4['filter'](_0xb42f2a => /\.css$/['test'](_0xb42f2a));
            expect(_0x3cc66f['length'])['toBe'](-0xf94 + 0xd62 + -0x233 * -0x1);
            const _0x53878a = await readFile(join(_0x30e8af, _0x3cc66f[0x16 * 0x131 + -0x30 * 0x66 + -0x716]), 'utf8');
            expect(_0x53878a['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatchInlineSnapshot']('\x22@media\x20(min-width:480px)\x20and\x20(max-width:767px){::-moz-placeholder{color:green}:-ms-input-placeholder{color:green}::placeholder{color:green}}.flex-parsing{flex:0\x200\x20calc(50%\x20-\x20var(--vertical-gutter))}.transform-parsing{transform:translate3d(0,0)}.css-grid-shorthand{grid-column:span\x202}.g-docs-sidenav\x20.filter::-webkit-input-placeholder{opacity:80%}\x22'), expect(_0x53878a)['toMatch'](/\/\*#\s*sourceMappingURL=(.+\.map)\s*\*\//);
        }), it('should\x27ve\x20emitted\x20a\x20source\x20map', async () => {
            const _0x110929 = join(_0x1a42cc, '.next/static/css'), _0x882d09 = await readdir(_0x110929), _0x3cb502 = _0x882d09['filter'](_0xc8c7 => /\.css\.map$/['test'](_0xc8c7));
            expect(_0x3cb502['length'])['toBe'](0x19a6 + -0x1313 + -0x692);
            const _0x38bc0f = (await readFile(join(_0x110929, _0x3cb502[0xdf1 + -0x20 * -0x3a + -0x1531]), 'utf8'))['trim'](), {
                    version: _0x152eba,
                    mappings: _0x5ee46e,
                    sourcesContent: _0x79d5d3
                } = JSON['parse'](_0x38bc0f);
            expect({
                'version': _0x152eba,
                'mappings': _0x5ee46e,
                'sourcesContent': _0x79d5d3
            })['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20Object\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22mappings\x22:\x20\x22AAAA,+CACE,mBACE,WACF,CAFA,uBACE,WACF,CAFA,cACE,WACF,CACF,CAEA,cACE,2CACF,CAEA,mBACE,0BACF,CAEA,oBACE,kBACF,CAEA,mDACE,WACF\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22sourcesContent\x22:\x20Array\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22@media\x20(480px\x20<=\x20width\x20<\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20::placeholder\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20green;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.flex-parsing\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex:\x200\x200\x20calc(50%\x20-\x20var(--vertical-gutter));\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.transform-parsing\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate3d(0px,\x200px);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.css-grid-shorthand\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20grid-column:\x20span\x202;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.g-docs-sidenav\x20.filter::-webkit-input-placeholder\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x2080%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22version\x22:\x203,\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20');
        });
    }), describe('Multi\x20Global\x20Support\x20(reversed)', () => {
        const _0x27901a = join(fixturesDir, 'multi-global-reversed');
        beforeAll(async () => {
            await remove(join(_0x27901a, '.next'));
        }), it('should\x20compile\x20successfully', async () => {
            const {
                code: _0x3a846d,
                stdout: _0x55b608
            } = await nextBuild(_0x27901a, [], { 'stdout': !![] });
            expect(_0x3a846d)['toBe'](-0x222d * 0x1 + 0x97d + -0x9e * -0x28), expect(_0x55b608)['toMatch'](/Compiled successfully/);
        }), it('should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x3be97a = join(_0x27901a, '.next/static/css'), _0x41b5a9 = await readdir(_0x3be97a), _0x50a085 = _0x41b5a9['filter'](_0x5b6f8c => /\.css$/['test'](_0x5b6f8c));
            expect(_0x50a085['length'])['toBe'](0x1 * -0x256a + 0x39b + -0x43a * -0x8);
            const _0x2cd827 = await readFile(join(_0x3be97a, _0x50a085[0x2226 + -0x269c + -0x2 * -0x23b]), 'utf8');
            expect(_0x2cd827['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatchInlineSnapshot']('\x22.blue-text{color:blue}.red-text{color:red}\x22');
        });
    }), describe('React\x20Lifecyce\x20Order\x20(dev)', () => {
        const _0x1c0962 = join(fixturesDir, 'transition-react');
        beforeAll(async () => {
            await remove(join(_0x1c0962, '.next'));
        });
        let _0x397121, _0x37ba36;
        beforeAll(async () => {
            _0x397121 = await findPort(), _0x37ba36 = await launchApp(_0x1c0962, _0x397121);
        }), afterAll(async () => {
            await killApp(_0x37ba36);
        }), it('should\x20have\x20the\x20correct\x20color\x20on\x20mount\x20after\x20navigation', async () => {
            let _0x4e2a49;
            try {
                _0x4e2a49 = await _0x30a9b2(_0x397121, '/'), await _0x4e2a49['waitForElementByCss']('#link-other')['click']();
                const _0x54bff6 = await _0x4e2a49['waitForElementByCss']('#red-title')['text']();
                expect(_0x54bff6)['toMatchInlineSnapshot']('\x22rgb(255,\x200,\x200)\x22');
            } finally {
                _0x4e2a49 && await _0x4e2a49['close']();
            }
        });
    }), describe('React\x20Lifecyce\x20Order\x20(production)', () => {
        const _0x12d73a = join(fixturesDir, 'transition-react');
        beforeAll(async () => {
            await remove(join(_0x12d73a, '.next'));
        });
        let _0x5efa9e, _0x25452c, _0x3a8105, _0x50ed52;
        beforeAll(async () => {
            ;
            ({
                code: _0x3a8105,
                stdout: _0x50ed52
            } = await nextBuild(_0x12d73a, [], { 'stdout': !![] }), _0x5efa9e = await findPort(), _0x25452c = await nextStart(_0x12d73a, _0x5efa9e));
        }), afterAll(async () => {
            await killApp(_0x25452c);
        }), it('should\x20have\x20compiled\x20successfully', () => {
            expect(_0x3a8105)['toBe'](0x5 * 0x39a + 0x22cc + -0x34ce), expect(_0x50ed52)['toMatch'](/Compiled successfully/);
        }), it('should\x20have\x20the\x20correct\x20color\x20on\x20mount\x20after\x20navigation', async () => {
            let _0x25e98f;
            try {
                _0x25e98f = await _0x30a9b2(_0x5efa9e, '/'), await _0x25e98f['waitForElementByCss']('#link-other')['click']();
                const _0x38670c = await _0x25e98f['waitForElementByCss']('#red-title')['text']();
                expect(_0x38670c)['toMatchInlineSnapshot']('\x22rgb(255,\x200,\x200)\x22');
            } finally {
                _0x25e98f && await _0x25e98f['close']();
            }
        });
    }), describe('Invalid\x20CSS\x20in\x20_document', () => {
        const _0x34e6e8 = join(fixturesDir, 'invalid-module-document');
        beforeAll(async () => {
            await remove(join(_0x34e6e8, '.next'));
        }), it('should\x20fail\x20to\x20build', async () => {
            const {
                code: _0x499bc9,
                stderr: _0x1ee3a9
            } = await nextBuild(_0x34e6e8, [], { 'stderr': !![] });
            expect(_0x499bc9)['not']['toBe'](0x214c + 0x26 * 0x92 + 0x8 * -0x6df), expect(_0x1ee3a9)['toContain']('Failed\x20to\x20compile'), expect(_0x1ee3a9)['toContain']('styles.module.css'), expect(_0x1ee3a9)['toMatch'](/CSS.*cannot.*be imported within.*pages[\\/]_document\.js/), expect(_0x1ee3a9)['toMatch'](/Location:.*pages[\\/]_document\.js/);
        });
    }), describe('Invalid\x20Global\x20CSS', () => {
        const _0x2e4f7d = join(fixturesDir, 'invalid-global');
        beforeAll(async () => {
            await remove(join(_0x2e4f7d, '.next'));
        }), it('should\x20fail\x20to\x20build', async () => {
            const {
                code: _0x50e9bf,
                stderr: _0x243221
            } = await nextBuild(_0x2e4f7d, [], { 'stderr': !![] });
            expect(_0x50e9bf)['not']['toBe'](0x1745 + -0x1647 + -0xfe), expect(_0x243221)['toContain']('Failed\x20to\x20compile'), expect(_0x243221)['toContain']('styles/global.css'), expect(_0x243221)['toMatch'](/Please move all first-party global CSS imports.*?pages(\/|\\)_app/), expect(_0x243221)['toMatch'](/Location:.*pages[\\/]index\.js/);
        });
    }), describe('Valid\x20Global\x20CSS\x20from\x20npm', () => {
        const _0x243f6d = join(fixturesDir, 'import-global-from-module');
        beforeAll(async () => {
            await remove(join(_0x243f6d, '.next'));
        }), it('should\x20compile\x20successfully', async () => {
            const {
                code: _0x1e57c3,
                stdout: _0x4cada0
            } = await nextBuild(_0x243f6d, [], { 'stdout': !![] });
            expect(_0x1e57c3)['toBe'](0x3 * 0x7df + -0x1 * 0x1328 + -0xa3 * 0x7), expect(_0x4cada0)['toMatch'](/Compiled successfully/);
        }), it('should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x1f7425 = join(_0x243f6d, '.next/static/css'), _0x4a1049 = await readdir(_0x1f7425), _0x2355c4 = _0x4a1049['filter'](_0x2cc6cb => /\.css$/['test'](_0x2cc6cb));
            expect(_0x2355c4['length'])['toBe'](-0x8 * -0x341 + 0x198e + -0x3395);
            const _0x396ae2 = await readFile(join(_0x1f7425, _0x2355c4[0x547 + -0xe32 + 0x8eb]), 'utf8');
            expect(_0x396ae2['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatchInlineSnapshot']('\x22.red-text{color:\x5c\x22red\x5c\x22}\x22');
        });
    }), describe('Invalid\x20Global\x20CSS\x20with\x20Custom\x20App', () => {
        const _0x5c00d5 = join(fixturesDir, 'invalid-global-with-app');
        beforeAll(async () => {
            await remove(join(_0x5c00d5, '.next'));
        }), it('should\x20fail\x20to\x20build', async () => {
            const {
                code: _0x5e2a60,
                stderr: _0x545022
            } = await nextBuild(_0x5c00d5, [], { 'stderr': !![] });
            expect(_0x5e2a60)['not']['toBe'](-0x1631 + 0x7 * -0xfb + 0x1d0e), expect(_0x545022)['toContain']('Failed\x20to\x20compile'), expect(_0x545022)['toContain']('styles/global.css'), expect(_0x545022)['toMatch'](/Please move all first-party global CSS imports.*?pages(\/|\\)_app/), expect(_0x545022)['toMatch'](/Location:.*pages[\\/]index\.js/);
        });
    }), describe('Valid\x20and\x20Invalid\x20Global\x20CSS\x20with\x20Custom\x20App', () => {
        const _0x5483af = join(fixturesDir, 'valid-and-invalid-global');
        beforeAll(async () => {
            await remove(join(_0x5483af, '.next'));
        }), it('should\x20fail\x20to\x20build', async () => {
            const {
                code: _0x5b4551,
                stderr: _0x33d7e7
            } = await nextBuild(_0x5483af, [], { 'stderr': !![] });
            expect(_0x5b4551)['not']['toBe'](-0xeb0 * 0x2 + -0x1c5 * -0x3 + 0x1811), expect(_0x33d7e7)['toContain']('Failed\x20to\x20compile'), expect(_0x33d7e7)['toContain']('styles/global.css'), expect(_0x33d7e7)['toContain']('Please\x20move\x20all\x20first-party\x20global\x20CSS\x20imports'), expect(_0x33d7e7)['toMatch'](/Location:.*pages[\\/]index\.js/);
        });
    }), describe('Can\x20hot\x20reload\x20CSS\x20without\x20losing\x20state', () => {
        const _0x465f2b = join(fixturesDir, 'multi-page');
        beforeAll(async () => {
            await remove(join(_0x465f2b, '.next'));
        });
        let _0x7ec90a, _0x573663;
        beforeAll(async () => {
            _0x7ec90a = await findPort(), _0x573663 = await launchApp(_0x465f2b, _0x7ec90a);
        }), afterAll(async () => {
            await killApp(_0x573663);
        }), it('should\x20update\x20CSS\x20color\x20without\x20remounting\x20<input>', async () => {
            let _0x37b4bd;
            try {
                _0x37b4bd = await _0x30a9b2(_0x7ec90a, '/page1');
                const _0x4658be = 'hello\x20world';
                await _0x37b4bd['elementById']('text-input')['type'](_0x4658be), expect(await _0x37b4bd['elementById']('text-input')['getValue']())['toBe'](_0x4658be);
                const _0x544535 = await _0x37b4bd['eval']('window.getComputedStyle(document.querySelector(\x27.red-text\x27)).color');
                expect(_0x544535)['toMatchInlineSnapshot']('\x22rgb(255,\x200,\x200)\x22');
                const _0x4273ef = new File(join(_0x465f2b, 'styles/global1.css'));
                try {
                    _0x4273ef['replace']('color:\x20red', 'color:\x20purple'), await check(() => _0x37b4bd['eval']('window.getComputedStyle(document.querySelector(\x27.red-text\x27)).color'), 'rgb(128,\x200,\x20128)'), expect(await _0x37b4bd['elementById']('text-input')['getValue']())['toBe'](_0x4658be);
                } finally {
                    _0x4273ef['restore']();
                }
            } finally {
                _0x37b4bd && await _0x37b4bd['close']();
            }
        });
    }), describe('Has\x20CSS\x20in\x20computed\x20styles\x20in\x20Development', () => {
        const _0x1a6a7c = join(fixturesDir, 'multi-page');
        beforeAll(async () => {
            await remove(join(_0x1a6a7c, '.next'));
        });
        let _0x182552, _0x40b61d;
        beforeAll(async () => {
            _0x182552 = await findPort(), _0x40b61d = await launchApp(_0x1a6a7c, _0x182552);
        }), afterAll(async () => {
            await killApp(_0x40b61d);
        }), it('should\x20have\x20CSS\x20for\x20page', async () => {
            let _0x12dae4;
            try {
                _0x12dae4 = await _0x30a9b2(_0x182552, '/page2');
                const _0x523ee3 = await _0x12dae4['eval']('window.getComputedStyle(document.querySelector(\x27.blue-text\x27)).color');
                expect(_0x523ee3)['toMatchInlineSnapshot']('\x22rgb(0,\x200,\x20255)\x22');
            } finally {
                _0x12dae4 && await _0x12dae4['close']();
            }
        });
    }), describe('Body\x20is\x20not\x20hidden\x20when\x20unused\x20in\x20Development', () => {
        const _0x57dbf0 = join(fixturesDir, 'unused');
        beforeAll(async () => {
            await remove(join(_0x57dbf0, '.next'));
        });
        let _0x5643aa, _0x43272c;
        beforeAll(async () => {
            _0x5643aa = await findPort(), _0x43272c = await launchApp(_0x57dbf0, _0x5643aa);
        }), afterAll(async () => {
            await killApp(_0x43272c);
        }), it('should\x20have\x20body\x20visible', async () => {
            let _0x478021;
            try {
                _0x478021 = await _0x30a9b2(_0x5643aa, '/');
                const _0x2c2a98 = await _0x478021['eval']('window.getComputedStyle(document.querySelector(\x27body\x27)).display');
                expect(_0x2c2a98)['toBe']('block');
            } finally {
                _0x478021 && await _0x478021['close']();
            }
        });
    }), describe('Body\x20is\x20not\x20hidden\x20when\x20broken\x20in\x20Development', () => {
        const _0x2d0f80 = join(fixturesDir, 'unused');
        let _0x4f1b48, _0x2dcc19;
        beforeAll(async () => {
            await remove(join(_0x2d0f80, '.next')), _0x4f1b48 = await findPort(), _0x2dcc19 = await launchApp(_0x2d0f80, _0x4f1b48);
        }), afterAll(async () => {
            await killApp(_0x2dcc19);
        }), it('should\x20have\x20body\x20visible', async () => {
            const _0x7b459a = new File(join(_0x2d0f80, 'pages/index.js'));
            let _0x403a7d;
            try {
                _0x7b459a['replace']('<div\x20/>', '<div>'), await waitFor(0x2fd + -0x8ff + 0xdd2), _0x403a7d = await _0x30a9b2(_0x4f1b48, '/');
                const _0xd7d6aa = await _0x403a7d['eval']('window.getComputedStyle(document.querySelector(\x27body\x27)).display');
                expect(_0xd7d6aa)['toBe']('block');
            } finally {
                _0x7b459a['restore'](), _0x403a7d && await _0x403a7d['close']();
            }
        });
    }), describe('Has\x20CSS\x20in\x20computed\x20styles\x20in\x20Production', () => {
        const _0xcb038e = join(fixturesDir, 'multi-page');
        let _0x5d70fa, _0x1b7841, _0x4b10f, _0x51f2c7;
        beforeAll(async () => {
            await remove(join(_0xcb038e, '.next')), {
                code: _0x51f2c7,
                stdout: _0x4b10f
            } = await nextBuild(_0xcb038e, [], { 'stdout': !![] }), _0x5d70fa = await findPort(), _0x1b7841 = await nextStart(_0xcb038e, _0x5d70fa);
        }), afterAll(async () => {
            await killApp(_0x1b7841);
        }), it('should\x20have\x20compiled\x20successfully', () => {
            expect(_0x51f2c7)['toBe'](0x1 * 0x6e + 0xa4 * -0x6 + 0x2 * 0x1b5), expect(_0x4b10f)['toMatch'](/Compiled successfully/);
        }), it('should\x20have\x20CSS\x20for\x20page', async () => {
            const _0x40afe7 = await _0x30a9b2(_0x5d70fa, '/page2'), _0x561b00 = await _0x40afe7['eval']('window.getComputedStyle(document.querySelector(\x27.blue-text\x27)).color');
            expect(_0x561b00)['toMatchInlineSnapshot']('\x22rgb(0,\x200,\x20255)\x22');
        }), it('should\x27ve\x20preloaded\x20the\x20CSS\x20file\x20and\x20injected\x20it\x20in\x20<head>', async () => {
            const _0xae1da2 = await renderViaHTTP(_0x5d70fa, '/page2'), _0x2f20ce = _0x225678['load'](_0xae1da2), _0x5c972e = _0x2f20ce('link[rel=\x22preload\x22][as=\x22style\x22]');
            expect(_0x5c972e['length'])['toBe'](-0x7cf + 0x36b + 0x4b * 0xf), expect(_0x5c972e['attr']('href'))['toMatch'](/^\/_next\/static\/css\/.*\.css$/);
            const _0x358bef = _0x2f20ce('link[rel=\x22stylesheet\x22]');
            expect(_0x358bef['length'])['toBe'](0xc69 + -0x4 * -0x1e8 + -0x1408), expect(_0x358bef['attr']('href'))['toMatch'](/^\/_next\/static\/css\/.*\.css$/);
            const _0x3d5c11 = []['slice']['call'](_0x2f20ce('link[rel=\x22preload\x22]')), _0xec1762 = _0x3d5c11['flatMap']((_0x2ed818, _0x34df6f) => _0x2ed818['attribs']['as'] === 'style' ? _0x34df6f : []);
            expect(_0xec1762)['toEqual']([-0x1f48 + -0x2069 * 0x1 + 0x3fb1]);
        });
    }), describe('CSS\x20URL\x20via\x20`file-loader`', () => {
        const _0x35b597 = join(fixturesDir, 'url-global');
        beforeAll(async () => {
            await remove(join(_0x35b597, '.next'));
        }), it('should\x20compile\x20successfully', async () => {
            const {
                code: _0x4899e1,
                stdout: _0x27dacd
            } = await nextBuild(_0x35b597, [], { 'stdout': !![] });
            expect(_0x4899e1)['toBe'](-0x1f0f + 0x4 * -0x12f + 0x23cb), expect(_0x27dacd)['toMatch'](/Compiled successfully/);
        }), it('should\x27ve\x20emitted\x20expected\x20files', async () => {
            const _0x4b7a85 = join(_0x35b597, '.next/static/css'), _0x1ec1eb = join(_0x35b597, '.next/static/media'), _0x481b74 = await readdir(_0x4b7a85), _0x13c3ed = _0x481b74['filter'](_0x310fb3 => /\.css$/['test'](_0x310fb3));
            expect(_0x13c3ed['length'])['toBe'](-0x93c + -0x4ec + 0xe29);
            const _0x255917 = await readFile(join(_0x4b7a85, _0x13c3ed[-0x1 * -0x19db + 0x193f + -0x1f * 0x1a6]), 'utf8');
            expect(_0x255917['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatch'](/^\.red-text\{color:red;background-image:url\(\/_next\/static\/media\/dark\.[a-z0-9]{32}\.svg\) url\(\/_next\/static\/media\/dark2\.[a-z0-9]{32}\.svg\)\}\.blue-text\{color:orange;font-weight:bolder;background-image:url\(\/_next\/static\/media\/light\.[a-z0-9]{32}\.svg\);color:blue\}$/);
            const _0x37b369 = await readdir(_0x1ec1eb);
            expect(_0x37b369['length'])['toBe'](-0xf * 0x166 + 0x6f8 + 0xe05), expect(_0x37b369['map'](_0x2fc290 => /^(.+?)\..{32}\.(.+?)$/['exec'](_0x2fc290)['slice'](-0x1 * -0x1173 + -0x2 * -0x11c5 + -0x34fc)['join']('.'))['sort']())['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20Array\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22dark.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22dark2.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22light.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20');
        });
    }), describe('CSS\x20URL\x20via\x20`file-loader`\x20and\x20asset\x20prefix\x20(1)', () => {
        const _0x601159 = join(fixturesDir, 'url-global-asset-prefix-1');
        beforeAll(async () => {
            await remove(join(_0x601159, '.next'));
        }), it('should\x20compile\x20successfully', async () => {
            const {
                code: _0x3c9680,
                stdout: _0x3e1776
            } = await nextBuild(_0x601159, [], { 'stdout': !![] });
            expect(_0x3c9680)['toBe'](0xa3f + 0x3af + -0x2 * 0x6f7), expect(_0x3e1776)['toMatch'](/Compiled successfully/);
        }), it('should\x27ve\x20emitted\x20expected\x20files', async () => {
            const _0x14fa12 = join(_0x601159, '.next/static/css'), _0x9f1022 = join(_0x601159, '.next/static/media'), _0x49cad1 = await readdir(_0x14fa12), _0x51fb9d = _0x49cad1['filter'](_0x5cdecd => /\.css$/['test'](_0x5cdecd));
            expect(_0x51fb9d['length'])['toBe'](0x16ad + -0x102b + -0x6f * 0xf);
            const _0x5830fa = await readFile(join(_0x14fa12, _0x51fb9d[-0x251f + 0x12f1 * 0x2 + -0x3 * 0x41]), 'utf8');
            expect(_0x5830fa['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatch'](/^\.red-text\{color:red;background-image:url\(\/foo\/_next\/static\/media\/dark\.[a-z0-9]{32}\.svg\) url\(\/foo\/_next\/static\/media\/dark2\.[a-z0-9]{32}\.svg\)\}\.blue-text\{color:orange;font-weight:bolder;background-image:url\(\/foo\/_next\/static\/media\/light\.[a-z0-9]{32}\.svg\);color:blue\}$/);
            const _0x54dd12 = await readdir(_0x9f1022);
            expect(_0x54dd12['length'])['toBe'](0x2c7 + 0x33e * -0x5 + 0xd72), expect(_0x54dd12['map'](_0x326652 => /^(.+?)\..{32}\.(.+?)$/['exec'](_0x326652)['slice'](0x2147 + 0x1a2e + -0x3b74)['join']('.'))['sort']())['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20Array\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22dark.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22dark2.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22light.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20');
        });
    }), describe('CSS\x20URL\x20via\x20`file-loader`\x20and\x20asset\x20prefix\x20(2)', () => {
        const _0x59ef03 = join(fixturesDir, 'url-global-asset-prefix-2');
        beforeAll(async () => {
            await remove(join(_0x59ef03, '.next'));
        }), it('should\x20compile\x20successfully', async () => {
            const {
                code: _0x52ade0,
                stdout: _0x40f744
            } = await nextBuild(_0x59ef03, [], { 'stdout': !![] });
            expect(_0x52ade0)['toBe'](-0x1 * -0xb45 + 0x1 * 0x3c7 + -0x3 * 0x504), expect(_0x40f744)['toMatch'](/Compiled successfully/);
        }), it('should\x27ve\x20emitted\x20expected\x20files', async () => {
            const _0x3ce797 = join(_0x59ef03, '.next/static/css'), _0x35c5f1 = join(_0x59ef03, '.next/static/media'), _0x3e4554 = await readdir(_0x3ce797), _0x195034 = _0x3e4554['filter'](_0x7a760a => /\.css$/['test'](_0x7a760a));
            expect(_0x195034['length'])['toBe'](-0x1132 + -0x157e + -0x7 * -0x587);
            const _0xcd33cd = await readFile(join(_0x3ce797, _0x195034[-0x110c + 0x4c5 + 0x1c1 * 0x7]), 'utf8');
            expect(_0xcd33cd['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatch'](/^\.red-text\{color:red;background-image:url\(\/foo\/_next\/static\/media\/dark\.[a-z0-9]{32}\.svg\) url\(\/foo\/_next\/static\/media\/dark2\.[a-z0-9]{32}\.svg\)\}\.blue-text\{color:orange;font-weight:bolder;background-image:url\(\/foo\/_next\/static\/media\/light\.[a-z0-9]{32}\.svg\);color:blue\}$/);
            const _0x336681 = await readdir(_0x35c5f1);
            expect(_0x336681['length'])['toBe'](-0x1 * -0x1613 + -0x186 * -0xe + 0x2b64 * -0x1), expect(_0x336681['map'](_0x1f3020 => /^(.+?)\..{32}\.(.+?)$/['exec'](_0x1f3020)['slice'](0xb7f + -0x1ff6 + 0x83 * 0x28)['join']('.'))['sort']())['toMatchInlineSnapshot']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20Array\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22dark.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22dark2.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22light.svg\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20]\x0a\x20\x20\x20\x20\x20\x20');
        });
    }), describe('Good\x20CSS\x20Import\x20from\x20node_modules', () => {
        const _0x19e352 = join(fixturesDir, 'npm-import');
        beforeAll(async () => {
            await remove(join(_0x19e352, '.next'));
        }), it('should\x20compile\x20successfully', async () => {
            const {
                code: _0x5ee85c,
                stdout: _0x5b98b9
            } = await nextBuild(_0x19e352, [], { 'stdout': !![] });
            expect(_0x5ee85c)['toBe'](0x19 * -0xd6 + 0x4df * 0x3 + -0x649 * -0x1), expect(_0x5b98b9)['toMatch'](/Compiled successfully/);
        }), it('should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x28bc2c = join(_0x19e352, '.next/static/css'), _0x3f53be = await readdir(_0x28bc2c), _0xe25bd4 = _0x3f53be['filter'](_0x3b1368 => /\.css$/['test'](_0x3b1368));
            expect(_0xe25bd4['length'])['toBe'](-0x831 + 0xc26 + -0x3f4);
            const _0x54a69f = await readFile(join(_0x28bc2c, _0xe25bd4[-0x1 * 0x23e9 + -0x1 * 0xab4 + 0x1 * 0x2e9d]), 'utf8');
            expect(_0x54a69f['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatch'](/nprogress/);
        });
    }), describe('Good\x20Nested\x20CSS\x20Import\x20from\x20node_modules', () => {
        const _0xc649c2 = join(fixturesDir, 'npm-import-nested');
        beforeAll(async () => {
            await remove(join(_0xc649c2, '.next'));
        }), it('should\x20compile\x20successfully', async () => {
            const {
                code: _0x371f78,
                stdout: _0x509353
            } = await nextBuild(_0xc649c2, [], { 'stdout': !![] });
            expect(_0x371f78)['toBe'](0xd89 + 0x2f0 + -0x1079), expect(_0x509353)['toMatch'](/Compiled successfully/);
        }), it('should\x27ve\x20emitted\x20a\x20single\x20CSS\x20file', async () => {
            const _0x5df0b4 = join(_0xc649c2, '.next/static/css'), _0x1098b2 = await readdir(_0x5df0b4), _0x2fd89d = _0x1098b2['filter'](_0x59d19e => /\.css$/['test'](_0x59d19e));
            expect(_0x2fd89d['length'])['toBe'](0x3 * -0xc2f + -0x518 + 0x29a6);
            const _0x21e55e = await readFile(join(_0x5df0b4, _0x2fd89d[0x21ab + -0x14d * -0x3 + 0x55e * -0x7]), 'utf8');
            expect(_0x21e55e['replace'](/\/\*.*?\*\//g, '')['trim']())['toMatchInlineSnapshot']('\x22.other{color:blue}.test{color:red}\x22');
        });
    }), describe('CSS\x20Import\x20from\x20node_modules', () => {
        const _0x4f7334 = join(fixturesDir, 'npm-import-bad');
        beforeAll(async () => {
            await remove(join(_0x4f7334, '.next'));
        }), it('should\x20fail\x20the\x20build', async () => {
            const {
                code: _0x1bee79,
                stderr: _0x21bd44
            } = await nextBuild(_0x4f7334, [], { 'stderr': !![] });
            expect(_0x1bee79)['toBe'](-0x2422 + -0x1370 + -0x6 * -0x943), expect(_0x21bd44)['not']['toMatch'](/Can't resolve '[^']*?nprogress[^']*?'/), expect(_0x21bd44)['not']['toMatch'](/Build error occurred/);
        });
    }), describe('Ordering\x20with\x20styled-jsx\x20(dev)', () => {
        const _0x14f235 = join(fixturesDir, 'with-styled-jsx');
        let _0x70eaca, _0x2a8196;
        beforeAll(async () => {
            await remove(join(_0x14f235, '.next')), _0x70eaca = await findPort(), _0x2a8196 = await launchApp(_0x14f235, _0x70eaca);
        }), afterAll(async () => {
            await killApp(_0x2a8196);
        }), it('should\x20have\x20the\x20correct\x20color\x20(css\x20ordering)', async () => {
            const _0x1f159e = await _0x30a9b2(_0x70eaca, '/'), _0x4177dc = await _0x1f159e['eval']('window.getComputedStyle(document.querySelector(\x27.my-text\x27)).color');
            expect(_0x4177dc)['toMatchInlineSnapshot']('\x22rgb(0,\x20128,\x200)\x22');
        });
    }), describe('Ordering\x20with\x20styled-jsx\x20(prod)', () => {
        const _0xa8b75c = join(fixturesDir, 'with-styled-jsx');
        let _0x300ad4, _0x3c9fc4, _0xe4f876, _0x1ec4f5;
        beforeAll(async () => {
            await remove(join(_0xa8b75c, '.next')), {
                code: _0x1ec4f5,
                stdout: _0xe4f876
            } = await nextBuild(_0xa8b75c, [], { 'stdout': !![] }), _0x300ad4 = await findPort(), _0x3c9fc4 = await nextStart(_0xa8b75c, _0x300ad4);
        }), afterAll(async () => {
            await killApp(_0x3c9fc4);
        }), it('should\x20have\x20compiled\x20successfully', () => {
            expect(_0x1ec4f5)['toBe'](0x1ea6 * 0x1 + -0x11 * -0x1a6 + -0xbbc * 0x5), expect(_0xe4f876)['toMatch'](/Compiled successfully/);
        }), it('should\x20have\x20the\x20correct\x20color\x20(css\x20ordering)', async () => {
            const _0xfcad61 = await _0x30a9b2(_0x300ad4, '/'), _0x151a5d = await _0xfcad61['eval']('window.getComputedStyle(document.querySelector(\x27.my-text\x27)).color');
            expect(_0x151a5d)['toMatchInlineSnapshot']('\x22rgb(0,\x20128,\x200)\x22');
        });
    }), describe('Ordering\x20with\x20Global\x20CSS\x20and\x20Modules\x20(dev)', () => {
        const _0x1f8fed = join(fixturesDir, 'global-and-module-ordering');
        let _0x274ea6, _0x56a2bf;
        beforeAll(async () => {
            await remove(join(_0x1f8fed, '.next')), _0x274ea6 = await findPort(), _0x56a2bf = await launchApp(_0x1f8fed, _0x274ea6);
        }), afterAll(async () => {
            await killApp(_0x56a2bf);
        }), it('should\x20not\x20execute\x20scripts\x20in\x20any\x20order', async () => {
            const _0x375264 = await renderViaHTTP(_0x274ea6, '/'), _0x3588ce = _0x225678['load'](_0x375264);
            let _0x4a28e8 = 0x50e * -0x4 + 0x1 * 0x206a + -0xc32, _0x169b47 = -0x1d3 * -0x9 + 0xb1d + -0x1b88;
            for (const _0xf76f55 of _0x3588ce('script')['toArray']()) {
                ++_0x169b47, 'async' in _0xf76f55['attribs'] && ++_0x4a28e8;
            }
            expect(_0x4a28e8)['toBe'](-0x258 + -0x1049 * 0x1 + 0x12a1), expect(_0x169b47)['not']['toBe'](-0x177b * -0x1 + -0x29 * 0x95 + 0x62);
        }), it('should\x20have\x20the\x20correct\x20color\x20(css\x20ordering)', async () => {
            const _0x2e9186 = await _0x30a9b2(_0x274ea6, '/'), _0x3777ad = await _0x2e9186['eval']('window.getComputedStyle(document.querySelector(\x27#blueText\x27)).color');
            expect(_0x3777ad)['toMatchInlineSnapshot']('\x22rgb(0,\x200,\x20255)\x22');
        }), it('should\x20have\x20the\x20correct\x20color\x20(css\x20ordering)\x20during\x20hot\x20reloads', async () => {
            let _0x219178;
            try {
                _0x219178 = await _0x30a9b2(_0x274ea6, '/');
                const _0x57e327 = await _0x219178['eval']('window.getComputedStyle(document.querySelector(\x27#blueText\x27)).color');
                expect(_0x57e327)['toMatchInlineSnapshot']('\x22rgb(0,\x200,\x20255)\x22');
                const _0x55f130 = await _0x219178['eval']('window.getComputedStyle(document.querySelector(\x27#yellowText\x27)).color');
                expect(_0x55f130)['toMatchInlineSnapshot']('\x22rgb(255,\x20255,\x200)\x22');
                const _0x4fc29c = new File(join(_0x1f8fed, 'pages/index.module.css'));
                try {
                    _0x4fc29c['replace']('color:\x20yellow;', 'color:\x20rgb(1,\x201,\x201);'), await check(() => _0x219178['eval']('window.getComputedStyle(document.querySelector(\x27#yellowText\x27)).color'), 'rgb(1,\x201,\x201)'), await check(() => _0x219178['eval']('window.getComputedStyle(document.querySelector(\x27#blueText\x27)).color'), 'rgb(0,\x200,\x20255)');
                } finally {
                    _0x4fc29c['restore']();
                }
            } finally {
                _0x219178 && await _0x219178['close']();
            }
        });
    }), describe('Ordering\x20with\x20Global\x20CSS\x20and\x20Modules\x20(prod)', () => {
        const _0x53c46a = join(fixturesDir, 'global-and-module-ordering');
        let _0x34703, _0x474c6c, _0x1b624b, _0x413f26;
        beforeAll(async () => {
            await remove(join(_0x53c46a, '.next')), {
                code: _0x413f26,
                stdout: _0x1b624b
            } = await nextBuild(_0x53c46a, [], { 'stdout': !![] }), _0x34703 = await findPort(), _0x474c6c = await nextStart(_0x53c46a, _0x34703);
        }), afterAll(async () => {
            await killApp(_0x474c6c);
        }), it('should\x20have\x20compiled\x20successfully', () => {
            expect(_0x413f26)['toBe'](-0x18d + -0x1d * -0x36 + -0xa7 * 0x7), expect(_0x1b624b)['toMatch'](/Compiled successfully/);
        }), it('should\x20have\x20the\x20correct\x20color\x20(css\x20ordering)', async () => {
            const _0x3f434b = await _0x30a9b2(_0x34703, '/'), _0x468b4a = await _0x3f434b['eval']('window.getComputedStyle(document.querySelector(\x27#blueText\x27)).color');
            expect(_0x468b4a)['toMatchInlineSnapshot']('\x22rgb(0,\x200,\x20255)\x22');
        });
    }), describe('CSS\x20Property\x20Ordering', () => {
        const _0x23e048 = join(fixturesDir, 'next-issue-15468');
        let _0x16a867, _0x2815a2, _0x4f79d5, _0x1ad472;
        beforeAll(async () => {
            await remove(join(_0x23e048, '.next')), {
                code: _0x1ad472,
                stdout: _0x4f79d5
            } = await nextBuild(_0x23e048, [], { 'stdout': !![] }), _0x16a867 = await findPort(), _0x2815a2 = await nextStart(_0x23e048, _0x16a867);
        }), afterAll(async () => {
            await killApp(_0x2815a2);
        }), it('should\x20have\x20compiled\x20successfully', () => {
            expect(_0x1ad472)['toBe'](0x225f + -0x203a + -0x225), expect(_0x4f79d5)['toMatch'](/Compiled successfully/);
        }), it('should\x20have\x20the\x20border\x20width\x20(property\x20ordering)', async () => {
            const _0x1a87fc = await _0x30a9b2(_0x16a867, '/'), _0xe5fbe1 = await _0x1a87fc['eval']('window.getComputedStyle(document.querySelector(\x27.test1\x27)).borderWidth');
            expect(_0xe5fbe1)['toMatchInlineSnapshot']('\x220px\x22');
            const _0x5e9534 = await _0x1a87fc['eval']('window.getComputedStyle(document.querySelector(\x27.test2\x27)).borderWidth');
            expect(_0x5e9534)['toMatchInlineSnapshot']('\x225px\x22');
        });
    }), describe('Basic\x20Tailwind\x20CSS', () => {
        const _0xd6ede2 = join(fixturesDir, 'with-tailwindcss');
        beforeAll(async () => {
            await remove(join(_0xd6ede2, '.next'));
        }), it('should\x20compile\x20successfully', async () => {
            const {
                code: _0x275734,
                stdout: _0x3263d6
            } = await nextBuild(_0xd6ede2, [], { 'stdout': !![] });
            expect(_0x275734)['toBe'](0x2 * -0x111d + 0x4f * -0x3e + 0x355c), expect(_0x3263d6)['toMatch'](/Compiled successfully/), expect(_0x3263d6)['toContain']('.css');
        }), it('should\x27ve\x20compiled\x20and\x20prefixed', async () => {
            const _0x2e97c7 = join(_0xd6ede2, '.next/static/css'), _0x22909e = await readdir(_0x2e97c7), _0x28f3ad = _0x22909e['filter'](_0x5a23d6 => /\.css$/['test'](_0x5a23d6));
            expect(_0x28f3ad['length'])['toBe'](0x1af7 + -0x35 * -0x2f + -0x24b1);
            const _0x184da6 = await readFile(join(_0x2e97c7, _0x28f3ad[-0x14fa + 0x2348 + -0xe4e * 0x1]), 'utf8');
            expect(_0x184da6)['toMatch'](/object-right-bottom/), expect(_0x184da6)['not']['toMatch'](/tailwind/), expect(_0x184da6)['toMatch'](/\/\*#\s*sourceMappingURL=(.+\.map)\s*\*\//);
        }), it('should\x27ve\x20emitted\x20a\x20source\x20map', async () => {
            const _0x5a7b6e = join(_0xd6ede2, '.next/static/css'), _0x340978 = await readdir(_0x5a7b6e), _0x170557 = _0x340978['filter'](_0x1a4c48 => /\.css\.map$/['test'](_0x1a4c48));
            expect(_0x170557['length'])['toBe'](-0x14d1 + 0x1 * -0x23b1 + 0x3883);
        });
    }), describe('Tailwind\x20and\x20Purge\x20CSS', () => {
        const _0x651f99 = join(fixturesDir, 'with-tailwindcss-and-purgecss');
        beforeAll(async () => {
            await remove(join(_0x651f99, '.next'));
        }), it('should\x20compile\x20successfully', async () => {
            const {
                code: _0x57892d,
                stdout: _0x347982
            } = await nextBuild(_0x651f99, [], { 'stdout': !![] });
            expect(_0x57892d)['toBe'](0x677 + -0xb * -0x2cf + -0x3 * 0xc74), expect(_0x347982)['toMatch'](/Compiled successfully/);
        }), it('should\x27ve\x20compiled\x20and\x20prefixed', async () => {
            const _0x5383ed = join(_0x651f99, '.next/static/css'), _0x392c74 = await readdir(_0x5383ed), _0x5801be = _0x392c74['filter'](_0x5b9db3 => /\.css$/['test'](_0x5b9db3));
            expect(_0x5801be['length'])['toBe'](-0x1524 + 0x265 * -0xf + 0x3910);
            const _0x568a30 = await readFile(join(_0x5383ed, _0x5801be[0x6 * -0x52f + 0x1 * -0x3fe + 0x2318]), 'utf8');
            expect(_0x568a30)['not']['toMatch'](/object-right-bottom/), expect(_0x568a30)['toMatch'](/text-blue-500/), expect(_0x568a30)['not']['toMatch'](/tailwind/), expect(_0x568a30)['toMatch'](/\/\*#\s*sourceMappingURL=(.+\.map)\s*\*\//);
        }), it('should\x27ve\x20emitted\x20a\x20source\x20map', async () => {
            const _0xe3910f = join(_0x651f99, '.next/static/css'), _0x2bcca2 = await readdir(_0xe3910f), _0x545ff9 = _0x2bcca2['filter'](_0xea1e2c => /\.css\.map$/['test'](_0xea1e2c));
            expect(_0x545ff9['length'])['toBe'](-0x11eb * 0x1 + 0x1 * -0x2ab + 0x3 * 0x6dd);
        });
    }), describe('CSS\x20page\x20transition\x20inject\x20<style>\x20with\x20nonce\x20so\x20it\x20works\x20with\x20CSP\x20header', () => {
        const _0x5f8c9f = join(fixturesDir, 'csp-style-src-nonce');
        let _0x1d0b6e, _0x3e260e;
        function _0x1c571b() {
            async function _0x3777f4(_0x2ffb8b) {
                await _0x2ffb8b['waitForElementByCss']('#green-title');
                const _0x3d42e1 = await _0x2ffb8b['eval']('window.getComputedStyle(document.querySelector(\x27#green-title\x27)).color');
                expect(_0x3d42e1)['toBe']('rgb(0,\x20128,\x200)');
            }
            async function _0x223ec6(_0x2dda85) {
                await _0x2dda85['waitForElementByCss']('#blue-title');
                const _0x2a198d = await _0x2dda85['eval']('window.getComputedStyle(document.querySelector(\x27#blue-title\x27)).color');
                expect(_0x2a198d)['toBe']('rgb(0,\x200,\x20255)');
            }
            it('should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20load)', async () => {
                const _0x3e9ec8 = await _0x30a9b2(_0x3e260e, '/');
                try {
                    await _0x3777f4(_0x3e9ec8);
                } finally {
                    await _0x3e9ec8['close']();
                }
            }), it('should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20hover)', async () => {
                const _0x4a1e74 = await _0x30a9b2(_0x3e260e, '/');
                try {
                    await _0x3777f4(_0x4a1e74), await _0x4a1e74['waitForElementByCss']('#link-other')['moveTo'](), await waitFor(-0x2056 + -0x1f73 + 0x4799), await _0x3777f4(_0x4a1e74);
                } finally {
                    await _0x4a1e74['close']();
                }
            }), it('should\x20not\x20change\x20color\x20on\x20hover', async () => {
                const _0xa90aeb = await _0x30a9b2(_0x3e260e, '/');
                try {
                    await _0x3777f4(_0xa90aeb), await _0xa90aeb['waitForElementByCss']('#link-other')['moveTo'](), await waitFor(-0x11b * 0xd + -0x1 * 0x1862 + 0x7 * 0x6a7), await _0x3777f4(_0xa90aeb);
                } finally {
                    await _0xa90aeb['close']();
                }
            }), it('should\x20have\x20correct\x20CSS\x20injection\x20order', async () => {
                const _0x1ccce1 = await _0x30a9b2(_0x3e260e, '/');
                try {
                    await _0x3777f4(_0x1ccce1);
                    const _0x137d17 = await _0x1ccce1['eval']('document.querySelector(\x27link[rel=stylesheet][data-n-p]\x27).previousSibling.getAttribute(\x27href\x27)'), _0x498741 = await _0x1ccce1['eval']('document.querySelector(\x27link[rel=stylesheet][data-n-p]\x27).getAttribute(\x27href\x27)');
                    expect(_0x137d17)['toBeDefined'](), expect(_0x137d17)['toBe'](_0x498741), await _0x1ccce1['waitForElementByCss']('#link-other')['click'](), await _0x223ec6(_0x1ccce1);
                    const _0x2a4b3c = await _0x1ccce1['eval']('document.querySelector(\x27style[data-n-href]\x27).previousSibling.getAttribute(\x27data-n-css\x27)'), _0x552e96 = await _0x1ccce1['eval']('document.querySelector(\x27style[data-n-href]\x27).getAttribute(\x27data-n-href\x27)');
                    expect(_0x2a4b3c)['toBe']('VmVyY2Vs'), expect(_0x552e96)['toBeDefined'](), expect(_0x552e96)['not']['toBe'](_0x498741), await _0x1ccce1['waitForElementByCss']('#link-index')['click'](), await _0x3777f4(_0x1ccce1);
                    const _0x4918b9 = await _0x1ccce1['eval']('document.querySelector(\x27style[data-n-href]\x27).previousSibling.getAttribute(\x27data-n-css\x27)'), _0x514d76 = await _0x1ccce1['eval']('document.querySelector(\x27style[data-n-href]\x27).getAttribute(\x27data-n-href\x27)');
                    expect(_0x4918b9)['toBeTruthy'](), expect(_0x514d76)['toBeDefined'](), expect(_0x514d76)['toBe'](_0x498741);
                } finally {
                    await _0x1ccce1['close']();
                }
            }), it('should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20nav\x20from\x20index)', async () => {
                const _0x3c05f0 = await _0x30a9b2(_0x3e260e, '/');
                try {
                    await _0x3777f4(_0x3c05f0), await _0x3c05f0['waitForElementByCss']('#link-other')['click'](), await _0x3c05f0['waitForElementByCss']('#link-index'), await _0x223ec6(_0x3c05f0), await _0x3c05f0['waitForElementByCss']('#link-index')['click'](), await _0x3777f4(_0x3c05f0);
                } finally {
                    await _0x3c05f0['close']();
                }
            }), it('should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20nav\x20from\x20other)', async () => {
                const _0x271c22 = await _0x30a9b2(_0x3e260e, '/other');
                try {
                    await _0x223ec6(_0x271c22), await _0x271c22['waitForElementByCss']('#link-index')['click'](), await _0x271c22['waitForElementByCss']('#link-other'), await _0x3777f4(_0x271c22), await _0x271c22['waitForElementByCss']('#link-other')['click'](), await _0x223ec6(_0x271c22);
                } finally {
                    await _0x271c22['close']();
                }
            });
        }
        describe('Production\x20Mode', () => {
            beforeAll(async () => {
                await remove(join(_0x5f8c9f, '.next'));
            }), beforeAll(async () => {
                await nextBuild(_0x5f8c9f, [], {}), _0x3e260e = await findPort(), _0x1d0b6e = await nextStart(_0x5f8c9f, _0x3e260e);
            }), afterAll(async () => {
                await killApp(_0x1d0b6e);
            }), _0x1c571b();
        });
    }), describe('CSS\x20Modules\x20Composes\x20Ordering', () => {
        const _0x445e7f = join(fixturesDir, 'composes-ordering');
        let _0x2ce74c, _0x3ade90;
        function _0x48c342(_0x5347a3 = ![]) {
            async function _0x16c663(_0x3b24fb) {
                await _0x3b24fb['waitForElementByCss']('#black-title');
                const _0x2d6e78 = await _0x3b24fb['eval']('window.getComputedStyle(document.querySelector(\x27#black-title\x27)).color');
                expect(_0x2d6e78)['toBe']('rgb(17,\x2017,\x2017)');
            }
            async function _0x56fb14(_0x4c7007) {
                await _0x4c7007['waitForElementByCss']('#red-title');
                const _0x20044c = await _0x4c7007['eval']('window.getComputedStyle(document.querySelector(\x27#red-title\x27)).color');
                expect(_0x20044c)['toBe']('rgb(255,\x200,\x200)');
            }
            it('should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20load)', async () => {
                const _0xc65ba7 = await _0x30a9b2(_0x3ade90, '/');
                try {
                    await _0x16c663(_0xc65ba7);
                } finally {
                    await _0xc65ba7['close']();
                }
            }), it('should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20hover)', async () => {
                const _0x301048 = await _0x30a9b2(_0x3ade90, '/');
                try {
                    await _0x16c663(_0x301048), await _0x301048['waitForElementByCss']('#link-other')['moveTo'](), await waitFor(0x3bb * -0x4 + -0xd92 + 0x1227 * 0x2), await _0x16c663(_0x301048);
                } finally {
                    await _0x301048['close']();
                }
            }), !_0x5347a3 && (it('should\x20not\x20change\x20color\x20on\x20hover', async () => {
                const _0x196de0 = await _0x30a9b2(_0x3ade90, '/');
                try {
                    await _0x16c663(_0x196de0), await _0x196de0['waitForElementByCss']('#link-other')['moveTo'](), await waitFor(0x56b + -0x248e + 0x26f3), await _0x16c663(_0x196de0);
                } finally {
                    await _0x196de0['close']();
                }
            }), it('should\x20have\x20correct\x20CSS\x20injection\x20order', async () => {
                const _0x567fae = await _0x30a9b2(_0x3ade90, '/');
                try {
                    await _0x16c663(_0x567fae);
                    const _0xbb0350 = await _0x567fae['eval']('document.querySelector(\x27link[rel=stylesheet][data-n-p]\x27).previousSibling.getAttribute(\x27href\x27)'), _0xcc91d4 = await _0x567fae['eval']('document.querySelector(\x27link[rel=stylesheet][data-n-p]\x27).getAttribute(\x27href\x27)');
                    expect(_0xbb0350)['toBeDefined'](), expect(_0xbb0350)['toBe'](_0xcc91d4), await _0x567fae['waitForElementByCss']('#link-other')['click'](), await _0x56fb14(_0x567fae);
                    const _0x4606d7 = await _0x567fae['eval']('document.querySelector(\x27style[data-n-href]\x27).previousSibling.getAttribute(\x27data-n-css\x27)'), _0x203286 = await _0x567fae['eval']('document.querySelector(\x27style[data-n-href]\x27).getAttribute(\x27data-n-href\x27)');
                    expect(_0x4606d7)['toBe'](''), expect(_0x203286)['toBeDefined'](), expect(_0x203286)['not']['toBe'](_0xcc91d4), await _0x567fae['waitForElementByCss']('#link-index')['click'](), await _0x16c663(_0x567fae);
                    const _0x555691 = await _0x567fae['eval']('document.querySelector(\x27style[data-n-href]\x27).previousSibling.getAttribute(\x27data-n-css\x27)'), _0x40162a = await _0x567fae['eval']('document.querySelector(\x27style[data-n-href]\x27).getAttribute(\x27data-n-href\x27)');
                    expect(_0x555691)['toBe'](''), expect(_0x40162a)['toBeDefined'](), expect(_0x40162a)['toBe'](_0xcc91d4);
                } finally {
                    await _0x567fae['close']();
                }
            })), it('should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20nav\x20from\x20index)', async () => {
                const _0x4fca06 = await _0x30a9b2(_0x3ade90, '/');
                try {
                    await _0x16c663(_0x4fca06), await _0x4fca06['waitForElementByCss']('#link-other')['click'](), await _0x4fca06['waitForElementByCss']('#link-index'), await _0x56fb14(_0x4fca06), await _0x4fca06['waitForElementByCss']('#link-index')['click'](), await _0x16c663(_0x4fca06);
                } finally {
                    await _0x4fca06['close']();
                }
            }), it('should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20nav\x20from\x20other)', async () => {
                const _0x3eca22 = await _0x30a9b2(_0x3ade90, '/other');
                try {
                    await _0x56fb14(_0x3eca22), await _0x3eca22['waitForElementByCss']('#link-index')['click'](), await _0x3eca22['waitForElementByCss']('#link-other'), await _0x16c663(_0x3eca22), await _0x3eca22['waitForElementByCss']('#link-other')['click'](), await _0x56fb14(_0x3eca22);
                } finally {
                    await _0x3eca22['close']();
                }
            });
        }
        describe('Development\x20Mode', () => {
            beforeAll(async () => {
                await remove(join(_0x445e7f, '.next'));
            }), beforeAll(async () => {
                _0x3ade90 = await findPort(), _0x2ce74c = await launchApp(_0x445e7f, _0x3ade90);
            }), afterAll(async () => {
                await killApp(_0x2ce74c);
            }), _0x48c342(!![]);
        }), describe('Production\x20Mode', () => {
            beforeAll(async () => {
                await remove(join(_0x445e7f, '.next'));
            }), beforeAll(async () => {
                await nextBuild(_0x445e7f, [], {}), _0x3ade90 = await findPort(), _0x2ce74c = await nextStart(_0x445e7f, _0x3ade90);
            }), afterAll(async () => {
                await killApp(_0x2ce74c);
            }), _0x48c342();
        });
    }), describe('CSS\x20Cleanup\x20on\x20Render\x20Failure', () => {
        const _0xd366f = join(fixturesDir, 'transition-cleanup');
        let _0x393f76, _0x4f5082;
        function _0x4db4a4() {
            async function _0x4e5fe8(_0x36c285) {
                await _0x36c285['waitForElementByCss']('#black-title');
                const _0x41b2c5 = await _0x36c285['eval']('window.getComputedStyle(document.querySelector(\x27#black-title\x27)).color');
                expect(_0x41b2c5)['toBe']('rgb(17,\x2017,\x2017)');
            }
            it('not\x20have\x20intermediary\x20page\x20styles\x20on\x20error\x20rendering', async () => {
                const _0x479a42 = await _0x30a9b2(_0x4f5082, '/');
                try {
                    await _0x4e5fe8(_0x479a42);
                    const _0x47b712 = await _0x479a42['eval']('document.querySelector(\x27link[rel=stylesheet][data-n-p]\x27)');
                    expect(_0x47b712)['toBeDefined'](), await _0x479a42['waitForElementByCss']('#link-other')['click'](), await check(() => _0x479a42['eval']('document.body.innerText'), 'Application\x20error:\x20a\x20client-side\x20exception\x20has\x20occurred\x20(see\x20the\x20browser\x20console\x20for\x20more\x20information).', !![]);
                    const _0x5c3640 = await _0x479a42['eval']('document.querySelector(\x27link[rel=stylesheet][data-n-p]\x27)');
                    expect(_0x5c3640)['toBeFalsy']();
                    const _0x2ea384 = await _0x479a42['eval']('document.querySelector(\x27link[rel=stylesheet]\x27)');
                    expect(_0x2ea384)['toBeFalsy']();
                } finally {
                    await _0x479a42['close']();
                }
            });
        }
        describe('Production\x20Mode', () => {
            beforeAll(async () => {
                await remove(join(_0xd366f, '.next'));
            }), beforeAll(async () => {
                await nextBuild(_0xd366f, [], {}), _0x4f5082 = await findPort(), _0x393f76 = await nextStart(_0xd366f, _0x4f5082);
            }), afterAll(async () => {
                await killApp(_0x393f76);
            }), _0x4db4a4();
        });
    }), describe('Page\x20reload\x20on\x20CSS\x20missing', () => {
        const _0x3e7e9b = join(fixturesDir, 'transition-reload');
        let _0x164b91, _0x22aec7;
        function _0x358003() {
            async function _0xcf5720(_0x394570) {
                await _0x394570['waitForElementByCss']('#black-title');
                const _0x48a04e = await _0x394570['eval']('window.getComputedStyle(document.querySelector(\x27#black-title\x27)).color');
                expect(_0x48a04e)['toBe']('rgb(17,\x2017,\x2017)');
            }
            it('should\x20fall\x20back\x20to\x20server-side\x20transition\x20on\x20missing\x20CSS', async () => {
                const _0x1ab868 = await _0x30a9b2(_0x22aec7, '/');
                try {
                    await _0xcf5720(_0x1ab868), await _0x1ab868['eval']('window.__priorNavigatePageState\x20=\x20\x27OOF\x27;'), await _0x1ab868['waitForElementByCss']('#link-other')['click'](), await _0x1ab868['waitForElementByCss']('#link-index');
                    const _0x3cc5c = await _0x1ab868['eval']('window.__priorNavigatePageState');
                    expect(_0x3cc5c)['toBeFalsy']();
                } finally {
                    await _0x1ab868['close']();
                }
            });
        }
        describe('Production\x20Mode', () => {
            beforeAll(async () => {
                await remove(join(_0x3e7e9b, '.next'));
            }), beforeAll(async () => {
                await nextBuild(_0x3e7e9b, [], {}), _0x22aec7 = await findPort(), _0x164b91 = await nextStart(_0x3e7e9b, _0x22aec7);
                const _0x13a143 = await readJSON(join(_0x3e7e9b, '.next', 'build-manifest.json')), _0x239b7b = _0x13a143['pages']['/other']['filter'](_0x56b63b => _0x56b63b['endsWith']('.css'));
                if (_0x239b7b['length'] < 0x232c + -0xe43 * -0x2 + 0x153b * -0x3)
                    throw new Error();
                await Promise['all'](_0x239b7b['map'](_0x105c2d => remove(join(_0x3e7e9b, '.next', _0x105c2d))));
            }), afterAll(async () => {
                await killApp(_0x164b91);
            }), _0x358003();
        });
    }), describe('Page\x20hydrates\x20with\x20CSS\x20and\x20not\x20waiting\x20on\x20dependencies', () => {
        const _0x4a0693 = join(fixturesDir, 'hydrate-without-deps');
        let _0x4bd7b7, _0x54ef12;
        function _0x114940() {
            async function _0x5c35b7(_0x339dae) {
                await _0x339dae['waitForElementByCss']('#black-title');
                const _0x4fc602 = await _0x339dae['eval']('window.getComputedStyle(document.querySelector(\x27#black-title\x27)).color');
                expect(_0x4fc602)['toBe']('rgb(17,\x2017,\x2017)');
            }
            async function _0x63a6a2(_0x3d9a4d) {
                await _0x3d9a4d['waitForElementByCss']('#red-title');
                const _0x49334f = await _0x3d9a4d['eval']('window.getComputedStyle(document.querySelector(\x27#red-title\x27)).color');
                expect(_0x49334f)['toBe']('rgb(255,\x200,\x200)');
            }
            it('should\x20hydrate\x20black\x20without\x20dependencies\x20manifest', async () => {
                const _0x27da56 = await _0x30a9b2(_0x54ef12, '/');
                try {
                    await _0x5c35b7(_0x27da56), await check(() => _0x27da56['eval']('document.querySelector(\x27p\x27).innerText'), 'mounted');
                } finally {
                    await _0x27da56['close']();
                }
            }), it('should\x20hydrate\x20red\x20without\x20dependencies\x20manifest', async () => {
                const _0x59fa38 = await _0x30a9b2(_0x54ef12, '/client');
                try {
                    await _0x63a6a2(_0x59fa38), await check(() => _0x59fa38['eval']('document.querySelector(\x27p\x27).innerText'), 'mounted');
                } finally {
                    await _0x59fa38['close']();
                }
            }), it('should\x20route\x20from\x20black\x20to\x20red\x20without\x20dependencies', async () => {
                const _0x25de65 = await _0x30a9b2(_0x54ef12, '/');
                try {
                    await _0x5c35b7(_0x25de65), await check(() => _0x25de65['eval']('document.querySelector(\x27p\x27).innerText'), 'mounted'), await _0x25de65['eval']('document.querySelector(\x27#link-client\x27).click()'), await _0x63a6a2(_0x25de65), await check(() => _0x25de65['eval']('document.querySelector(\x27p\x27).innerText'), 'mounted');
                } finally {
                    await _0x25de65['close']();
                }
            });
        }
        describe('Production\x20Mode', () => {
            beforeAll(async () => {
                await remove(join(_0x4a0693, '.next'));
            }), beforeAll(async () => {
                await nextBuild(_0x4a0693, [], {}), _0x54ef12 = await findPort(), _0x4bd7b7 = await nextStart(_0x4a0693, _0x54ef12);
                const _0x1fd31e = (await readFile(join(_0x4a0693, '.next', 'BUILD_ID'), 'utf8'))['trim'](), _0x1b7bbd = join(_0x4a0693, '.next/static/', _0x1fd31e, '_buildManifest.js');
                if (!await pathExists(_0x1b7bbd))
                    throw new Error('Missing\x20build\x20manifest');
                await remove(_0x1b7bbd);
            }), afterAll(async () => {
                await killApp(_0x4bd7b7);
            }), _0x114940();
        });
    }), describe('Basic\x20CSS\x20Modules\x20Ordering', () => {
        const _0x53016a = join(fixturesDir, 'next-issue-12343');
        let _0x24d4b4, _0x24378d;
        function _0x424e31() {
            async function _0xa25e14(_0x375bb6) {
                await _0x375bb6['waitForElementByCss']('#link-other');
                const _0x4dd5ce = await _0x375bb6['eval']('window.getComputedStyle(document.querySelector(\x27#link-other\x27)).backgroundColor');
                expect(_0x4dd5ce)['toBe']('rgb(0,\x20255,\x200)');
            }
            async function _0x1db40d(_0x56552f) {
                await _0x56552f['waitForElementByCss']('#link-index');
                const _0x1ca9c9 = await _0x56552f['eval']('window.getComputedStyle(document.querySelector(\x27#link-index\x27)).backgroundColor');
                expect(_0x1ca9c9)['toBe']('rgb(255,\x20105,\x20180)');
            }
            it('should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20load)', async () => {
                const _0x48a9cf = await _0x30a9b2(_0x24378d, '/');
                try {
                    await _0xa25e14(_0x48a9cf);
                } finally {
                    await _0x48a9cf['close']();
                }
            }), it('should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20hover)', async () => {
                const _0x389ca5 = await _0x30a9b2(_0x24378d, '/');
                try {
                    await _0xa25e14(_0x389ca5), await _0x389ca5['waitForElementByCss']('#link-other')['moveTo'](), await waitFor(-0xb8c + -0x124d + 0x1f * 0x137), await _0xa25e14(_0x389ca5);
                } finally {
                    await _0x389ca5['close']();
                }
            }), it('should\x20have\x20correct\x20color\x20on\x20index\x20page\x20(on\x20nav)', async () => {
                const _0x1215e2 = await _0x30a9b2(_0x24378d, '/');
                try {
                    await _0xa25e14(_0x1215e2), await _0x1215e2['waitForElementByCss']('#link-other')['click'](), await _0x1215e2['waitForElementByCss']('#link-index'), await _0x1db40d(_0x1215e2), await _0x1215e2['waitForElementByCss']('#link-index')['click'](), await _0xa25e14(_0x1215e2);
                } finally {
                    await _0x1215e2['close']();
                }
            });
        }
        describe('Development\x20Mode', () => {
            beforeAll(async () => {
                await remove(join(_0x53016a, '.next'));
            }), beforeAll(async () => {
                _0x24378d = await findPort(), _0x24d4b4 = await launchApp(_0x53016a, _0x24378d);
            }), afterAll(async () => {
                await killApp(_0x24d4b4);
            }), _0x424e31();
        }), describe('Production\x20Mode', () => {
            beforeAll(async () => {
                await remove(join(_0x53016a, '.next'));
            }), beforeAll(async () => {
                await nextBuild(_0x53016a, [], {}), _0x24378d = await findPort(), _0x24d4b4 = await nextStart(_0x53016a, _0x24378d);
            }), afterAll(async () => {
                await killApp(_0x24d4b4);
            }), _0x424e31();
        });
    }), describe('should\x20handle\x20unresolved\x20files\x20gracefully', () => {
        const _0x576a28 = join(fixturesDir, 'unresolved-css-url');
        it('should\x20build\x20correctly', async () => {
            await remove(join(_0x576a28, '.next'));
            const {code: _0x4fdd6f} = await nextBuild(_0x576a28);
            expect(_0x4fdd6f)['toBe'](-0xbba + -0x8bf * -0x3 + 0x5 * -0x2e7);
        }), it('should\x20have\x20correct\x20file\x20references\x20in\x20CSS\x20output', async () => {
            const _0x510e96 = await readdir(join(_0x576a28, '.next/static/css'));
            for (const _0x3a9baa of _0x510e96) {
                if (_0x3a9baa['endsWith']('.css.map'))
                    continue;
                const _0x366a37 = await readFile(join(_0x576a28, '.next/static/css', _0x3a9baa), 'utf8');
                console['log'](_0x3a9baa, _0x366a37);
                const _0x11f2ad = _0x366a37['includes']('p{') || _0x366a37['includes']('p,') ? 0x246e + 0x16e1 * 0x1 + -0x3b4d : 0x19a1 + -0xef2 + -0xaae;
                expect(_0x366a37['match'](/\(\/vercel\.svg/g)['length'])['toBe'](_0x11f2ad), expect(_0x366a37['match'](/\(\/_next\/static\/media/g)['length'])['toBe'](-0xa69 + 0x10 * -0x2f + 0xd5a), expect(_0x366a37['match'](/\(https:\/\//g)['length'])['toBe'](_0x11f2ad);
            }
        });
    });
});
