import _0x2cd0b9 from 'consola';
import {
    loadFixture,
    getPort,
    Nuxt,
    rp
} from '../utils';
let port;
const url = _0xe64d7f => 'http://localhost:' + port + _0xe64d7f;
let nuxt = null;
describe('basic\x20ssr', () => {
    beforeAll(async () => {
        const _0x42cbd1 = await loadFixture('basic');
        nuxt = new Nuxt(_0x42cbd1), await nuxt['ready'](), port = await getPort(), await nuxt['server']['listen'](port, '0.0.0.0');
    }), test('/stateless', async () => {
        const {html: _0x3aa9cc} = await nuxt['server']['renderRoute']('/stateless');
        expect(_0x3aa9cc)['toContain']('<h1>My\x20component!</h1>');
    }), test('/store-module', async () => {
        const {html: _0x199bc6} = await nuxt['server']['renderRoute']('/store-module');
        expect(_0x199bc6)['toContain']('<h1>mutated</h1>');
    }), test('/css', async () => {
        const _0x36bb6c = await nuxt['server']['renderAndGetWindow'](url('/css')), _0x41062c = _0x36bb6c['document']['head']['innerHTML'];
        expect(_0x41062c)['toContain']('color:red');
        const _0x3fee59 = _0x36bb6c['document']['querySelector']('.red');
        expect(_0x3fee59)['not']['toBe'](null), expect(_0x3fee59['textContent'])['toContain']('This\x20is\x20red'), expect(_0x3fee59['className'])['toBe']('red');
    }), test('/postcss', async () => {
        const _0x571162 = await nuxt['server']['renderAndGetWindow'](url('/css')), _0x56c792 = _0x571162['document']['head']['innerHTML'];
        expect(_0x56c792)['toContain']('color:red');
        const _0x49cf87 = _0x571162['document']['querySelector']('.red');
        expect(_0x49cf87)['not']['toBe'](null), expect(_0x49cf87['textContent'])['toContain']('This\x20is\x20red'), expect(_0x49cf87['className'])['toBe']('red');
    }), test('/postcss', async () => {
        const _0x5f58a8 = await nuxt['server']['renderAndGetWindow'](url('/css')), _0x283518 = _0x5f58a8['document']['head']['innerHTML'];
        expect(_0x283518)['toContain']('background-color:#00f');
    }), test('/stateful', async () => {
        const {html: _0x8189c5} = await nuxt['server']['renderRoute']('/stateful');
        expect(_0x8189c5)['toContain']('<div><p>The\x20answer\x20is\x2042</p></div>');
    }), test('/store', async () => {
        const {html: _0x475319} = await nuxt['server']['renderRoute']('/store');
        expect(_0x475319)['toContain']('<h1>foo/bar/baz:\x20Vuex\x20Nested\x20Modules</h1>'), expect(_0x475319)['toContain']('<h2>index/counter:\x201</h2>'), expect(_0x475319)['toContain']('<h3>foo/blarg/getVal:\x204</h3>'), expect(_0x475319)['toContain']('<h4>foo/bab/getBabVal:\x2010</h4>');
    }), test('/head', async () => {
        const _0x4cbfe2 = await nuxt['server']['renderAndGetWindow'](url('/head'));
        expect(_0x4cbfe2['document']['title'])['toBe']('My\x20title\x20-\x20Nuxt');
        const _0x2b16fb = _0x4cbfe2['document']['querySelector']('html')['outerHTML'];
        expect(_0x2b16fb)['toContain']('<div><h1>I\x20can\x20haz\x20meta\x20tags</h1></div>'), expect(_0x2b16fb)['toContain']('<script\x20data-n-head=\x22ssr\x22\x20src=\x22/body.js\x22\x20data-body=\x22true\x22>');
        const _0x1fb0e3 = _0x4cbfe2['document']['getElementsByTagName']('meta');
        expect(_0x1fb0e3[-0x118f + 0xf1 * -0x9 + 0x1a09]['getAttribute']('content'))['toBe']('my\x20meta'), expect(_0x2cd0b9['log'])['toHaveBeenCalledWith']('Body\x20script!'), expect(_0x2b16fb)['toContain']('<html\x20foo=\x22baz\x22\x20data-n-head=\x22%7B%22foo%22:%7B%22ssr%22:%22baz%22%7D%7D\x22>'), expect(_0x2b16fb)['toContain']('<head\x20bar=\x22foo\x22\x20data-n-head=\x22%7B%22bar%22:%7B%22ssr%22:%22foo%22%7D%7D\x22>'), expect(_0x2b16fb)['toContain']('<body\x20baz=\x22bar\x22\x20data-n-head=\x22%7B%22baz%22:%7B%22ssr%22:%22bar%22%7D%7D\x22>');
    }), test('/async-data', async () => {
        const {html: _0x478e4a} = await nuxt['server']['renderRoute']('/async-data');
        expect(_0x478e4a)['toContain']('<p>Nuxt</p>');
    }), test('/await-async-data', async () => {
        const {html: _0x1533b3} = await nuxt['server']['renderRoute']('/await-async-data');
        expect(_0x1533b3)['toContain']('<p>Await\x20Nuxt</p>');
    }), test('/callback-async-data', async () => {
        const {html: _0x552266} = await nuxt['server']['renderRoute']('/callback-async-data');
        expect(_0x552266)['toContain']('<p>Callback\x20Nuxt</p>');
    }), test('/users/1', async () => {
        const {html: _0x281441} = await nuxt['server']['renderRoute']('/users/1');
        expect(_0x281441)['toContain']('<h1>User:\x201</h1>');
    }), test('/validate\x20should\x20display\x20a\x20404', async () => {
        const {html: _0x4c5955} = await nuxt['server']['renderRoute']('/validate');
        expect(_0x4c5955)['toContain']('This\x20page\x20could\x20not\x20be\x20found');
    }), test('/validate-async\x20should\x20display\x20a\x20404', async () => {
        const {html: _0x57a530} = await nuxt['server']['renderRoute']('/validate-async');
        expect(_0x57a530)['toContain']('This\x20page\x20could\x20not\x20be\x20found');
    }), test('/validate?valid=true', async () => {
        const {html: _0x476757} = await nuxt['server']['renderRoute']('/validate?valid=true');
        expect(_0x476757)['toContain']('<h1>I\x20am\x20valid</h1>');
    }), test('/validate-async?valid=true', async () => {
        const {html: _0x2d2d08} = await nuxt['server']['renderRoute']('/validate-async?valid=true');
        expect(_0x2d2d08)['toContain']('<h1>I\x20am\x20valid</h1>');
    }), test('/validate?error=403', async () => {
        const {
            html: _0x3ebded,
            error: _0x410dce
        } = await nuxt['server']['renderRoute']('/validate?error=403');
        expect(_0x410dce)['toMatchObject']({
            'statusCode': 0x193,
            'message': 'Custom\x20Error'
        }), expect(_0x3ebded)['toContain']('Custom\x20Error');
    }), test('/validate-async?error=503', async () => {
        const {
            html: _0xd8e42d,
            error: _0x41381a
        } = await nuxt['server']['renderRoute']('/validate-async?error=503');
        expect(_0x41381a)['toMatchObject']({
            'statusCode': 0x1f7,
            'message': 'Custom\x20Error'
        }), expect(_0xd8e42d)['toContain']('Custom\x20Error');
    }), test('/before-enter', async () => {
        const {html: _0x40f58f} = await nuxt['server']['renderRoute']('/before-enter');
        expect(_0x40f58f)['toContain']('<h1>Index\x20page</h1>');
    }), describe('/redirect', () => {
        let _0x29a781, _0x2a14cd;
        const _0x306e35 = {
            'res': {
                'writeHead'(_0x3218dc, _0x1adb3d) {
                    _0x2a14cd = _0x3218dc, _0x29a781 = _0x1adb3d;
                },
                'end'() {
                }
            }
        };
        test('/redirect', async () => {
            const {
                html: _0x205589,
                redirected: _0x69ca35
            } = await nuxt['server']['renderRoute']('/redirect');
            expect(_0x205589)['toContain']('<div\x20id=\x22__nuxt\x22></div>'), expect(_0x205589)['not']['toContain']('window.__NUXT__'), expect(_0x69ca35['path'] === '/')['toBe'](!![]), expect(_0x69ca35['status'] === 0x11 * 0xef + 0x647 * -0x5 + 0x10b2)['toBe'](!![]);
        }), test('/redirect\x20->\x20check\x20redirected\x20source', async () => {
            const _0x3a64a7 = await nuxt['server']['renderAndGetWindow'](url('/redirect')), _0x13091c = _0x3a64a7['document']['body']['innerHTML'];
            expect(_0x13091c)['toContain']('<h1>Index\x20page</h1>');
        }), test('/redirect\x20->\x20external\x20link', async () => {
            const {html: _0x19aa30} = await nuxt['server']['renderRoute']('/redirect-external', _0x306e35);
            expect(_0x2a14cd)['toBe'](0x360 + 0x1533 + -0x1765), expect(_0x29a781['Location'])['toBe']('https://nuxtjs.org/docs/2.x/features/data-fetching/'), expect(_0x19aa30)['toContain']('<div\x20data-server-rendered=\x22true\x22\x20id=\x22__nuxt\x22></div>');
        }), test('/redirect\x20->\x20external\x20link\x20without\x20trailing\x20slash', async () => {
            const {html: _0x55a12f} = await nuxt['server']['renderRoute']('/redirect-external-no-slash', _0x306e35);
            expect(_0x2a14cd)['toBe'](-0x527 + 0x5 * -0xa7 + 0x998), expect(_0x29a781['Location'])['toBe']('https://nuxtjs.org/docs/2.x/features/data-fetching'), expect(_0x55a12f)['toContain']('<div\x20data-server-rendered=\x22true\x22\x20id=\x22__nuxt\x22></div>');
        }), test('/redirect\x20->\x20external\x20link\x20with\x20root\x20domain\x20url', async () => {
            const {html: _0x12227b} = await nuxt['server']['renderRoute']('/redirect-external-root', _0x306e35);
            expect(_0x2a14cd)['toBe'](-0x1672 + 0xd2b + -0xa75 * -0x1), expect(_0x29a781['Location'])['toBe']('https://nuxtjs.org/'), expect(_0x12227b)['toContain']('<div\x20data-server-rendered=\x22true\x22\x20id=\x22__nuxt\x22></div>');
        });
    }), test('/before-nuxt-render\x20->\x20check\x20window.__NUXT__.beforeNuxtRender\x20=\x20true', async () => {
        const _0x449621 = await nuxt['server']['renderAndGetWindow'](url('/before-nuxt-render'));
        expect(_0x449621['document']['title'])['toBe']('Nuxt'), expect(_0x449621['__NUXT__']['beforeNuxtRender'])['toBe'](!![]);
    }), test('/before-serialize\x20->\x20check\x20window.__NUXT__.beforeSerialize\x20=\x20true', async () => {
        const _0x825900 = await nuxt['server']['renderAndGetWindow'](url('/before-serialize'));
        expect(_0x825900['document']['title'])['toBe']('Nuxt'), expect(_0x825900['__NUXT__']['beforeSerialize'])['toBe'](!![]);
    }), test('/error', async () => {
        await expect(nuxt['server']['renderRoute']('/error', {
            'req': {},
            'res': {}
        }))['rejects']['toThrow']('Error\x20mouahahah');
    }), test('/error-string', async () => {
        let _0x264cb7;
        try {
            await nuxt['server']['renderRoute']('/error-string', {
                'req': {},
                'res': {}
            });
        } catch (_0x1e18bc) {
            _0x264cb7 = _0x1e18bc;
        }
        await expect(_0x264cb7)['toEqual']('fetch\x20error!');
    }), test('/error-object', async () => {
        let _0x4feee8;
        try {
            await nuxt['server']['renderRoute']('/error-object', {
                'req': {},
                'res': {}
            });
        } catch (_0x64b42b) {
            _0x4feee8 = _0x64b42b;
        }
        await expect(_0x4feee8)['toEqual']({ 'error': 'fetch\x20error!' });
    }), test('/error\x20status\x20code', async () => {
        await expect(rp(url('/error')))['rejects']['toMatchObject']({ 'response': { 'statusCode': 0x1f4 } });
    }), test('/error\x20json\x20format\x20error', async () => {
        const _0x33de01 = { 'headers': { 'accept': 'application/json' } };
        await expect(rp(url('/error'), _0x33de01))['rejects']['toMatchObject']({
            'response': {
                'statusCode': 0x1f4,
                'headers': { 'content-type': 'text/json;\x20charset=utf-8' }
            }
        });
    }), test('/error2', async () => {
        const {
            html: _0x3f2fff,
            error: _0x293a5a
        } = await nuxt['server']['renderRoute']('/error2');
        expect(_0x3f2fff)['toContain']('Custom\x20error'), expect(_0x293a5a['message'])['toContain']('Custom\x20error'), expect(_0x293a5a['statusCode'])['toBe'](0xc03 + -0x219c + 0x178d), expect(_0x293a5a['customProp'])['toBe']('ezpz');
    }), test('/error2\x20status\x20code', async () => {
        await expect(rp(url('/error2')))['rejects']['toMatchObject']({
            'response': {
                'statusCode': 0x1f4,
                'body': expect['stringContaining']('Custom\x20error')
            }
        });
    }), test('/error-midd', async () => {
        await expect(rp(url('/error-midd')))['rejects']['toMatchObject']({ 'response': { 'statusCode': 0x1f9 } });
    }), test('/redirect-middleware', async () => {
        await expect(rp(url('/redirect-middleware')))['resolves']['toBeTruthy']();
    }), test('/redirect-name', async () => {
        const {
            html: _0x22d815,
            redirected: _0x121d27
        } = await nuxt['server']['renderRoute']('/redirect-name');
        expect(_0x22d815)['toContain']('<div\x20id=\x22__nuxt\x22></div>'), expect(_0x121d27['path'] === '/stateless')['toBe'](!![]), expect(_0x121d27['status'] === 0x111 * -0x1d + -0x10a * 0x15 + -0xb * -0x4e7)['toBe'](!![]);
    }), test('/client-only', async () => {
        const {html: _0x7d7465} = await nuxt['server']['renderRoute']('/client-only');
        expect(_0x7d7465['includes']('<p\x20class=\x22client-only-placeholder\x22>Loading...</p>'))['toBe'](!![]);
    }), test('/client-only\x20(client-side)', async () => {
        const _0x1a1c42 = await nuxt['server']['renderAndGetWindow'](url('/client-only')), _0x7b737e = _0x1a1c42['document']['body']['innerHTML'];
        expect(_0x7b737e)['toContain']('Displayed\x20only\x20on\x20client-side</h1>');
    }), test('/no-ssr', async () => {
        const {html: _0x268e55} = await nuxt['server']['renderRoute']('/no-ssr');
        expect(_0x268e55['includes']('<p\x20class=\x22no-ssr-placeholder\x22>Loading...</p>'))['toBe'](!![]);
    }), test('/no-ssr\x20(client-side)', async () => {
        const _0xe06190 = await nuxt['server']['renderAndGetWindow'](url('/no-ssr')), _0x5a7e18 = _0xe06190['document']['body']['innerHTML'];
        expect(_0x5a7e18)['toContain']('Displayed\x20only\x20on\x20client-side</h1>'), expect(_0x2cd0b9['warn'])['toHaveBeenCalledTimes'](0x56 + -0x25d9 + 0x1 * 0x2584), expect(_0x2cd0b9['warn'])['toHaveBeenCalledWith'](expect['stringContaining']('<no-ssr>\x20has\x20been\x20deprecated'));
    }), test('ETag\x20Header', async () => {
        const {
                headers: {etag: _0x49e3c2}
            } = await rp(url('/stateless')), _0x1fb600 = await rp(url('/stateless'), { 'headers': { 'If-None-Match': _0x49e3c2 } });
        await expect(_0x1fb600)['toMatchObject']({ 'statusCode': 0x130 });
    }), test('/_nuxt/\x20should\x20return\x20404', async () => {
        await expect(rp(url('/_nuxt/')))['rejects']['toMatchObject']({ 'response': { 'statusCode': 0x194 } });
    }), test('/meta', async () => {
        const {html: _0x136ff2} = await nuxt['server']['renderRoute']('/meta');
        expect(/<pre>.*&quot;works&quot;: true.*<\/pre>/s['test'](_0x136ff2))['toBe'](!![]);
    }), test('/fn-midd', async () => {
        await expect(rp(url('/fn-midd')))['rejects']['toMatchObject']({ 'response': { 'statusCode': 0x193 } });
    }), test('/fn-midd?please=true', async () => {
        const {html: _0x13a177} = await nuxt['server']['renderRoute']('/fn-midd?please=true');
        expect(_0x13a177)['toContain']('<h1>Date:');
    }), test('/router-guard', async () => {
        const {html: _0x5b926b} = await nuxt['server']['renderRoute']('/router-guard');
        expect(_0x5b926b)['toContain']('<p>Nuxt</p>'), expect(_0x5b926b['includes']('Router\x20Guard'))['toBe'](![]);
    }), test('/router-guard-error', async () => {
        const {
            html: _0x2cb8c9,
            error: _0x2d01db
        } = await nuxt['server']['renderRoute']('/router-guard-error');
        expect(_0x2d01db)['toBe'](null), expect(_0x2cb8c9['includes']('Page\x20content'))['toBe'](![]);
    }), test('/router-guard-error?error=zepe', async () => {
        const {
            html: _0x1390b0,
            error: _0x1c7d5f
        } = await nuxt['server']['renderRoute']('/router-guard-error?error=zepe');
        expect(_0x1390b0['includes']('Page\x20content'))['toBe'](![]), expect(_0x1390b0)['toContain']('zepe'), expect(_0x1c7d5f['message'])['toContain']('zepe'), expect(_0x1c7d5f['statusCode'])['toBe'](-0x230f + 0x203e + 0x4c5);
    }), test('/router-guard-error?throw=ezae', async () => {
        await expect(nuxt['server']['renderRoute']('/router-guard-error?throw=ezae'))['rejects']['toMatchObject']({ 'message': 'ezae' });
    }), test('/jsx', async () => {
        const {html: _0x6a7ae5} = await nuxt['server']['renderRoute']('/jsx');
        expect(_0x6a7ae5)['toContain']('<h1>JSX\x20Page</h1>');
    }), test('/jsx-link', async () => {
        const {html: _0x2fac5d} = await nuxt['server']['renderRoute']('/jsx-link');
        expect(_0x2fac5d)['toContain']('<h1>JSX\x20Link\x20Page</h1>');
    }), test('/js-link', async () => {
        const {html: _0x4b528c} = await nuxt['server']['renderRoute']('/js-link');
        expect(_0x4b528c)['toContain']('<h1>vue\x20file\x20is\x20first-class</h1>');
    }), test('/тест雨\x20(test\x20non\x20ascii\x20route)', async () => {
        const _0x24d51f = await nuxt['server']['renderAndGetWindow'](url('/тест雨')), _0x135334 = _0x24d51f['document']['body']['innerHTML'];
        expect(_0x135334)['toMatch']('Hello\x20unicode');
    }), test('/custom\x20(js\x20layout)', async () => {
        const _0x1a9ce1 = await nuxt['server']['renderAndGetWindow'](url('/custom')), _0x92c711 = _0x1a9ce1['document']['body']['innerHTML'];
        expect(_0x92c711)['toMatch']('<h1>JS\x20Layout</h1>'), expect(_0x92c711)['toMatch']('<h2>custom\x20page</h2>');
    }), test('/symlink/symlinked', async () => {
        const {html: _0x2354cc} = await nuxt['server']['renderRoute']('/symlink/symlinked');
        expect(_0x2354cc)['toContain']('<h1>Symlinked\x20page</h1>');
    }), test('/symlink/deep/nested-symlinked', async () => {
        const {html: _0x29abe2} = await nuxt['server']['renderRoute']('/symlink/deep/nested-symlinked');
        expect(_0x29abe2)['toContain']('<h1>Nested\x20symlink\x20page</h1>');
    }), test('/components', async () => {
        const {html: _0x32b557} = await nuxt['server']['renderRoute']('/components');
        expect(_0x32b557)['toContain']('Auto\x20discovered\x20component!');
    }), test('/\x20(normal\x20<script>)', async () => {
        const {html: _0x7d4c10} = await nuxt['server']['renderRoute']('/');
        expect(_0x7d4c10)['toContain']('\x22\x20defer>');
    }), afterAll(async () => {
        await nuxt['close']();
    });
});
