import _0x3a003a from 'os';
import _0x1a62e2 from 'glob';
import _0x25345c from 'fs-extra';
import _0x3e38a1 from 'execa';
import _0x3d6b17 from 'cheerio';
import {
    join,
    dirname,
    relative
} from 'path';
import { version } from 'next/package';
import { recursiveReadDir } from 'next/dist/lib/recursive-readdir';
import {
    fetchViaHTTP,
    findPort,
    initNextServerScript,
    killApp,
    renderViaHTTP
} from 'next-test-utils';
jest['setTimeout']((0x1 * 0x171a + 0x1b74 + -0x2ea6) * (-0x1 * -0x15b5 + 0x55 * 0x49 + 0x2 * -0x16db) * (0x29 * -0x21 + -0xcc1 + -0x6 * -0x302));
const appDir = join(__dirname, '../app'), workDir = join(_0x3a003a['tmpdir'](), 'required-server-files-' + Date['now']());
let server, nextApp, appPort, buildId, requiredFilesManifest, errors = [];
describe('Required\x20Server\x20Files', () => {
    beforeAll(async () => {
        const _0x4b6178 = await _0x25345c['readJSON'](require['resolve']('next/dist/server/next-server') + '.nft.json'), _0x2cdb37 = dirname(require['resolve']('next/package.json'));
        await _0x3e38a1('yarn', ['pack'], { 'cwd': _0x2cdb37 });
        const _0x95b4ea = join(_0x2cdb37, 'next-v' + version + '.tgz');
        await _0x25345c['ensureDir'](workDir), await _0x25345c['writeFile'](join(workDir, 'package.json'), JSON['stringify']({
            'dependencies': {
                'next': _0x95b4ea,
                'react': 'latest',
                'react-dom': 'latest'
            }
        })), await _0x25345c['copy'](appDir, workDir), await _0x3e38a1('yarn', ['install'], {
            'cwd': workDir,
            'stdio': [
                'ignore',
                'inherit',
                'inherit'
            ],
            'env': {
                ...process['env'],
                'YARN_CACHE_FOLDER': join(workDir, '.yarn-cache')
            }
        }), await _0x3e38a1('yarn', [
            'next',
            'build'
        ], {
            'cwd': workDir,
            'stdio': [
                'ignore',
                'inherit',
                'inherit'
            ],
            'env': {
                ...process['env'],
                'NODE_ENV': 'production',
                'NOW_BUILDER': '1'
            }
        }), buildId = await _0x25345c['readFile'](join(workDir, '.next/BUILD_ID'), 'utf8'), requiredFilesManifest = await _0x25345c['readJSON'](join(workDir, '.next/required-server-files.json')), await _0x25345c['ensureDir'](workDir + '-react'), await _0x25345c['writeFile'](join(workDir + '-react/package.json'), JSON['stringify']({
            'dependencies': {
                'react': 'latest',
                'react-dom': 'latest'
            }
        })), await _0x3e38a1('yarn', ['install'], {
            'cwd': workDir + '-react',
            'stdio': [
                'ignore',
                'inherit',
                'inherit'
            ],
            'env': {
                ...process['env'],
                'YARN_CACHE_FOLDER': join(workDir, '.yarn')
            }
        }), await _0x25345c['remove'](_0x95b4ea);
        const _0x45a9d4 = await recursiveReadDir(workDir, /.*/), _0x5b3d98 = await _0x1a62e2['sync']('**/*.nft.json', { 'cwd': join(workDir, '.next/server/pages') }), _0x45a11a = new Set();
        for (const _0x311a4 of _0x5b3d98) {
            const _0x2f7c26 = join(workDir, '.next/server/pages', _0x311a4), _0x598367 = await _0x25345c['readJSON'](_0x2f7c26);
            _0x598367['files']['forEach'](_0x3fa391 => _0x45a11a['add'](relative(workDir, join(dirname(_0x2f7c26), _0x3fa391))));
        }
        for (const _0x3991c8 of _0x45a9d4) {
            const _0x4e2f1f = join('./', _0x3991c8);
            !_0x4b6178['files']['includes'](_0x4e2f1f) && _0x3991c8 !== '/node_modules/next/dist/server/next-server.js' && !_0x45a11a['has'](_0x4e2f1f) && !requiredFilesManifest['files']['includes'](_0x4e2f1f) && !_0x4e2f1f['startsWith']('.next/server') && _0x4e2f1f !== '.next/required-server-files.json' && await _0x25345c['remove'](join(workDir, _0x3991c8));
        }
        for (const _0x1a1251 of await _0x25345c['readdir'](workDir + '-react/node_modules')) {
            await _0x25345c['copy'](join(workDir + '-react/node_modules', _0x1a1251), join(workDir, 'node_modules', _0x1a1251));
        }
        await _0x25345c['remove'](workDir + '-react');
        async function _0x3e693e() {
            const _0x10c3e3 = require('http'), _0x38d9a9 = require('next/dist/server/next-server')['default'], _0x17a738 = process['env']['PORT'];
            nextApp = new _0x38d9a9({
                'conf': global['nextConfig'],
                'dir': process['env']['APP_DIR'],
                'quiet': ![],
                'minimalMode': !![]
            }), server = _0x10c3e3['createServer'](async (_0x3a96b4, _0x36032f) => {
                try {
                    await nextApp['getRequestHandler']()(_0x3a96b4, _0x36032f);
                } catch (_0x105564) {
                    console['error']('top-level', _0x105564), _0x36032f['statusCode'] = -0x1d23 + -0x1adf + 0x39f6, _0x36032f['end']('error');
                }
            }), await new Promise((_0x412d1b, _0x45499d) => {
                server['listen'](_0x17a738, _0x3ee827 => _0x3ee827 ? _0x45499d(_0x3ee827) : _0x412d1b());
            }), console['log']('Listening\x20at\x20::' + _0x17a738);
        }
        const _0x196bff = join(workDir, 'server.js');
        await _0x25345c['writeFile'](_0x196bff, 'global.nextConfig\x20=\x20' + JSON['stringify'](requiredFilesManifest['config']) + ';\x0a' + _0x3e693e['toString']() + ';\x0a' + 'startServer().catch(console.error)'), appPort = await findPort(), server = await initNextServerScript(_0x196bff, /Listening at/, {
            ...process['env'],
            'NODE_ENV': 'production',
            'PORT': appPort,
            'APP_DIR': workDir
        }, undefined, {
            'cwd': workDir,
            'onStderr'(_0x3b4c58) {
                _0x3b4c58['includes']('top-level') && errors['push'](_0x3b4c58);
            }
        });
    }), afterAll(async () => {
        if (server)
            killApp(server);
        await _0x25345c['remove'](workDir);
    }), it('should\x20output\x20required-server-files\x20manifest\x20correctly', async () => {
        expect(requiredFilesManifest['version'])['toBe'](0x1695 + 0x249e + -0x3b32), expect(Array['isArray'](requiredFilesManifest['files']))['toBe'](!![]), expect(Array['isArray'](requiredFilesManifest['ignore']))['toBe'](!![]), expect(requiredFilesManifest['files']['length'])['toBeGreaterThan'](0x399 + 0xc36 + 0x1 * -0xfcf), expect(requiredFilesManifest['ignore']['length'])['toBeGreaterThan'](0x3b * 0x9b + 0x79 * 0xf + -0x2ad0), expect(typeof requiredFilesManifest['config']['configFile'])['toBe']('undefined'), expect(typeof requiredFilesManifest['config']['trailingSlash'])['toBe']('boolean'), expect(typeof requiredFilesManifest['appDir'])['toBe']('string');
        for (const _0x182ec0 of requiredFilesManifest['files']) {
            expect(await _0x25345c['exists'](join(workDir, _0x182ec0)))['toBe'](!![]);
        }
        expect(await _0x25345c['exists'](join(workDir, '.next/server')))['toBe'](!![]);
    }), it('should\x20render\x20SSR\x20page\x20correctly', async () => {
        const _0x447e67 = await renderViaHTTP(appPort, '/'), _0x19dfa0 = _0x3d6b17['load'](_0x447e67), _0x80bd1 = JSON['parse'](_0x19dfa0('#props')['text']());
        expect(_0x19dfa0('#index')['text']())['toBe']('index\x20page'), expect(_0x80bd1['hello'])['toBe']('world');
        const _0x490574 = await renderViaHTTP(appPort, '/'), _0x34f7b9 = _0x3d6b17['load'](_0x490574), _0x1b1979 = JSON['parse'](_0x34f7b9('#props')['text']());
        expect(_0x34f7b9('#index')['text']())['toBe']('index\x20page'), expect(isNaN(_0x1b1979['random']))['toBe'](![]), expect(_0x1b1979['random'])['not']['toBe'](_0x80bd1['random']);
    }), it('should\x20render\x20dynamic\x20SSR\x20page\x20correctly', async () => {
        const _0x2032ce = await renderViaHTTP(appPort, '/dynamic/first'), _0x32788a = _0x3d6b17['load'](_0x2032ce), _0x1b7b7c = JSON['parse'](_0x32788a('#props')['text']());
        expect(_0x32788a('#dynamic')['text']())['toBe']('dynamic\x20page'), expect(_0x32788a('#slug')['text']())['toBe']('first'), expect(_0x1b7b7c['hello'])['toBe']('world');
        const _0x50d739 = await renderViaHTTP(appPort, '/dynamic/second'), _0x502702 = _0x3d6b17['load'](_0x50d739), _0x28acbc = JSON['parse'](_0x502702('#props')['text']());
        expect(_0x502702('#dynamic')['text']())['toBe']('dynamic\x20page'), expect(_0x502702('#slug')['text']())['toBe']('second'), expect(isNaN(_0x28acbc['random']))['toBe'](![]), expect(_0x28acbc['random'])['not']['toBe'](_0x1b7b7c['random']);
    }), it('should\x20render\x20fallback\x20page\x20correctly', async () => {
        const _0x38c41d = await renderViaHTTP(appPort, '/fallback/first'), _0x1d8b32 = _0x3d6b17['load'](_0x38c41d), _0x537c20 = JSON['parse'](_0x1d8b32('#props')['text']());
        expect(_0x1d8b32('#fallback')['text']())['toBe']('fallback\x20page'), expect(_0x1d8b32('#slug')['text']())['toBe']('first'), expect(_0x537c20['hello'])['toBe']('world');
        const _0x10d2e9 = await renderViaHTTP(appPort, '/fallback/first'), _0x47d5a9 = _0x3d6b17['load'](_0x10d2e9), _0x2e2a0c = JSON['parse'](_0x47d5a9('#props')['text']());
        expect(_0x47d5a9('#fallback')['text']())['toBe']('fallback\x20page'), expect(_0x47d5a9('#slug')['text']())['toBe']('first'), expect(isNaN(_0x2e2a0c['random']))['toBe'](![]), expect(_0x2e2a0c['random'])['not']['toBe'](_0x537c20['random']);
        const _0xb2f5bf = await renderViaHTTP(appPort, '/fallback/second'), _0xc4f819 = _0x3d6b17['load'](_0xb2f5bf), _0x2ce6ee = JSON['parse'](_0xc4f819('#props')['text']());
        expect(_0xc4f819('#fallback')['text']())['toBe']('fallback\x20page'), expect(_0xc4f819('#slug')['text']())['toBe']('second'), expect(isNaN(_0x2ce6ee['random']))['toBe'](![]);
        const {pageProps: _0x502272} = JSON['parse'](await renderViaHTTP(appPort, '/_next/data/' + buildId + '/fallback/third.json'));
        expect(_0x502272['hello'])['toBe']('world'), expect(_0x502272['slug'])['toBe']('third');
    }), it('should\x20render\x20SSR\x20page\x20correctly\x20with\x20x-matched-path', async () => {
        const _0x19a04a = await renderViaHTTP(appPort, '/some-other-path', undefined, { 'headers': { 'x-matched-path': '/' } }), _0x3338ff = _0x3d6b17['load'](_0x19a04a), _0x420b37 = JSON['parse'](_0x3338ff('#props')['text']());
        expect(_0x3338ff('#index')['text']())['toBe']('index\x20page'), expect(_0x420b37['hello'])['toBe']('world');
        const _0x12274e = await renderViaHTTP(appPort, '/some-other-path', undefined, { 'headers': { 'x-matched-path': '/' } }), _0x464a7f = _0x3d6b17['load'](_0x12274e), _0x280437 = JSON['parse'](_0x464a7f('#props')['text']());
        expect(_0x464a7f('#index')['text']())['toBe']('index\x20page'), expect(isNaN(_0x280437['random']))['toBe'](![]), expect(_0x280437['random'])['not']['toBe'](_0x420b37['random']);
    }), it('should\x20render\x20dynamic\x20SSR\x20page\x20correctly\x20with\x20x-matched-path', async () => {
        const _0x79345e = await renderViaHTTP(appPort, '/some-other-path', undefined, { 'headers': { 'x-matched-path': '/dynamic/[slug]?slug=first' } }), _0x3768d0 = _0x3d6b17['load'](_0x79345e), _0x4c2ac5 = JSON['parse'](_0x3768d0('#props')['text']());
        expect(_0x3768d0('#dynamic')['text']())['toBe']('dynamic\x20page'), expect(_0x3768d0('#slug')['text']())['toBe']('first'), expect(_0x4c2ac5['hello'])['toBe']('world');
        const _0x4b5063 = await renderViaHTTP(appPort, '/some-other-path', undefined, { 'headers': { 'x-matched-path': '/dynamic/[slug]?slug=second' } }), _0x4fbb04 = _0x3d6b17['load'](_0x4b5063), _0x47a52a = JSON['parse'](_0x4fbb04('#props')['text']());
        expect(_0x4fbb04('#dynamic')['text']())['toBe']('dynamic\x20page'), expect(_0x4fbb04('#slug')['text']())['toBe']('second'), expect(isNaN(_0x47a52a['random']))['toBe'](![]), expect(_0x47a52a['random'])['not']['toBe'](_0x4c2ac5['random']);
        const _0x4c4fcd = await renderViaHTTP(appPort, '/some-other-path', undefined, {
                'headers': {
                    'x-matched-path': '/dynamic/[slug]?slug=%5Bslug%5D.json',
                    'x-now-route-matches': '1=second&slug=second'
                }
            }), _0x278377 = _0x3d6b17['load'](_0x4c4fcd), _0x2173b0 = JSON['parse'](_0x278377('#props')['text']());
        expect(_0x278377('#dynamic')['text']())['toBe']('dynamic\x20page'), expect(_0x278377('#slug')['text']())['toBe']('second'), expect(isNaN(_0x2173b0['random']))['toBe'](![]), expect(_0x2173b0['random'])['not']['toBe'](_0x4c2ac5['random']);
    }), it('should\x20render\x20fallback\x20page\x20correctly\x20with\x20x-matched-path\x20and\x20routes-matches', async () => {
        const _0x14883c = await renderViaHTTP(appPort, '/fallback/first', undefined, {
                'headers': {
                    'x-matched-path': '/fallback/first',
                    'x-now-route-matches': '1=first'
                }
            }), _0x3e38c7 = _0x3d6b17['load'](_0x14883c), _0x448711 = JSON['parse'](_0x3e38c7('#props')['text']());
        expect(_0x3e38c7('#fallback')['text']())['toBe']('fallback\x20page'), expect(_0x3e38c7('#slug')['text']())['toBe']('first'), expect(_0x448711['hello'])['toBe']('world');
        const _0x2363b2 = await renderViaHTTP(appPort, '/fallback/[slug]', undefined, {
                'headers': {
                    'x-matched-path': '/fallback/[slug]',
                    'x-now-route-matches': '1=second'
                }
            }), _0x36b006 = _0x3d6b17['load'](_0x2363b2), _0xb8d7f7 = JSON['parse'](_0x36b006('#props')['text']());
        expect(_0x36b006('#fallback')['text']())['toBe']('fallback\x20page'), expect(_0x36b006('#slug')['text']())['toBe']('second'), expect(isNaN(_0xb8d7f7['random']))['toBe'](![]), expect(_0xb8d7f7['random'])['not']['toBe'](_0x448711['random']);
    }), it('should\x20return\x20data\x20correctly\x20with\x20x-matched-path', async () => {
        const _0x493cd5 = await fetchViaHTTP(appPort, '/_next/data/' + buildId + '/dynamic/first.json', undefined, { 'headers': { 'x-matched-path': '/dynamic/[slug]?slug=first' } }), {pageProps: _0x524041} = await _0x493cd5['json']();
        expect(_0x524041['slug'])['toBe']('first'), expect(_0x524041['hello'])['toBe']('world');
        const _0x59a208 = await fetchViaHTTP(appPort, '/_next/data/' + buildId + '/fallback/[slug].json', undefined, {
                'headers': {
                    'x-matched-path': '/_next/data/' + buildId + '/fallback/[slug].json',
                    'x-now-route-matches': '1=second'
                }
            }), {pageProps: _0x57a519} = await _0x59a208['json']();
        expect(_0x57a519['slug'])['toBe']('second'), expect(_0x57a519['hello'])['toBe']('world');
    }), it('should\x20render\x20fallback\x20optional\x20catch-all\x20route\x20correctly\x20with\x20x-matched-path\x20and\x20routes-matches', async () => {
        const _0x588c40 = await renderViaHTTP(appPort, '/catch-all/[[...rest]]', undefined, {
                'headers': {
                    'x-matched-path': '/catch-all/[[...rest]]',
                    'x-now-route-matches': ''
                }
            }), _0x30d025 = _0x3d6b17['load'](_0x588c40), _0xafe336 = JSON['parse'](_0x30d025('#props')['text']());
        expect(_0x30d025('#catch-all')['text']())['toBe']('optional\x20catch-all\x20page'), expect(_0xafe336['params'])['toEqual']({}), expect(_0xafe336['hello'])['toBe']('world');
        const _0x25dabb = await renderViaHTTP(appPort, '/catch-all/[[...rest]]', undefined, {
                'headers': {
                    'x-matched-path': '/catch-all/[[...rest]]',
                    'x-now-route-matches': '1=hello&catchAll=hello'
                }
            }), _0x37ebc8 = _0x3d6b17['load'](_0x25dabb), _0x49fc67 = JSON['parse'](_0x37ebc8('#props')['text']());
        expect(_0x37ebc8('#catch-all')['text']())['toBe']('optional\x20catch-all\x20page'), expect(_0x49fc67['params'])['toEqual']({ 'rest': ['hello'] }), expect(isNaN(_0x49fc67['random']))['toBe'](![]), expect(_0x49fc67['random'])['not']['toBe'](_0xafe336['random']);
        const _0x4d28a9 = await renderViaHTTP(appPort, '/catch-all/[[..rest]]', undefined, {
                'headers': {
                    'x-matched-path': '/catch-all/[[...rest]]',
                    'x-now-route-matches': '1=hello/world&catchAll=hello/world'
                }
            }), _0x24add7 = _0x3d6b17['load'](_0x4d28a9), _0x349012 = JSON['parse'](_0x24add7('#props')['text']());
        expect(_0x24add7('#catch-all')['text']())['toBe']('optional\x20catch-all\x20page'), expect(_0x349012['params'])['toEqual']({
            'rest': [
                'hello',
                'world'
            ]
        }), expect(isNaN(_0x349012['random']))['toBe'](![]), expect(_0x349012['random'])['not']['toBe'](_0xafe336['random']);
    }), it('should\x20return\x20data\x20correctly\x20with\x20x-matched-path\x20for\x20optional\x20catch-all\x20route', async () => {
        const _0x3cd4f7 = await fetchViaHTTP(appPort, '/_next/data/' + buildId + '/catch-all.json', undefined, { 'headers': { 'x-matched-path': '/catch-all/[[...rest]]' } }), {pageProps: _0x42d3f7} = await _0x3cd4f7['json']();
        expect(_0x42d3f7['params'])['toEqual']({}), expect(_0x42d3f7['hello'])['toBe']('world');
        const _0x37010b = await fetchViaHTTP(appPort, '/_next/data/' + buildId + '/catch-all/[[...rest]].json', undefined, {
                'headers': {
                    'x-matched-path': '/_next/data/' + buildId + '/catch-all/[[...rest]].json',
                    'x-now-route-matches': '1=hello&rest=hello'
                }
            }), {pageProps: _0x1761b7} = await _0x37010b['json']();
        expect(_0x1761b7['params'])['toEqual']({ 'rest': ['hello'] }), expect(_0x1761b7['hello'])['toBe']('world');
        const _0x3ab203 = await fetchViaHTTP(appPort, '/_next/data/' + buildId + '/catch-all/[[...rest]].json', undefined, {
                'headers': {
                    'x-matched-path': '/_next/data/' + buildId + '/catch-all/[[...rest]].json',
                    'x-now-route-matches': '1=hello/world&rest=hello/world'
                }
            }), {pageProps: _0x29320b} = await _0x3ab203['json']();
        expect(_0x29320b['params'])['toEqual']({
            'rest': [
                'hello',
                'world'
            ]
        }), expect(_0x29320b['hello'])['toBe']('world');
    }), it('should\x20not\x20apply\x20trailingSlash\x20redirect', async () => {
        for (const _0x1bb862 of [
                '/',
                '/dynamic/another/',
                '/dynamic/another',
                '/fallback/first/',
                '/fallback/first',
                '/fallback/another/',
                '/fallback/another'
            ]) {
            const _0x1214c8 = await fetchViaHTTP(appPort, _0x1bb862, undefined, { 'redirect': 'manual' });
            expect(_0x1214c8['status'])['toBe'](-0x527 * 0x2 + 0xc01 * -0x3 + 0x2f19);
        }
    }), it('should\x20normalize\x20catch-all\x20rewrite\x20query\x20values\x20correctly', async () => {
        const _0x1b24cb = await renderViaHTTP(appPort, '/some-catch-all/hello/world', { 'path': 'hello/world' }, { 'headers': { 'x-matched-path': '/' } }), _0x50d23d = _0x3d6b17['load'](_0x1b24cb);
        expect(JSON['parse'](_0x50d23d('#router')['text']())['query'])['toEqual']({
            'path': [
                'hello',
                'world'
            ]
        });
    }), it('should\x20bubble\x20error\x20correctly\x20for\x20gip\x20page', async () => {
        errors = [];
        const _0x24677e = await fetchViaHTTP(appPort, '/errors/gip', { 'crash': '1' });
        expect(_0x24677e['status'])['toBe'](-0x9a5 * 0x2 + -0xf14 + 0x2452), expect(await _0x24677e['text']())['toBe']('error'), expect(errors['length'])['toBe'](0x17bd + 0x8b9 * 0x3 + 0x16d * -0x23), expect(errors[-0x40e + 0x1a45 + -0x79 * 0x2f])['toContain']('gip\x20hit\x20an\x20oops');
    }), it('should\x20bubble\x20error\x20correctly\x20for\x20gssp\x20page', async () => {
        errors = [];
        const _0x1c3d5d = await fetchViaHTTP(appPort, '/errors/gssp', { 'crash': '1' });
        expect(_0x1c3d5d['status'])['toBe'](0x2 * 0x472 + -0x49e + -0x252), expect(await _0x1c3d5d['text']())['toBe']('error'), expect(errors['length'])['toBe'](0x6e * 0x2d + 0x2511 + -0x1c33 * 0x2), expect(errors[-0x233e + -0xda3 * 0x1 + -0x1 * -0x30e1])['toContain']('gssp\x20hit\x20an\x20oops');
    }), it('should\x20bubble\x20error\x20correctly\x20for\x20gsp\x20page', async () => {
        errors = [];
        const _0x584c15 = await fetchViaHTTP(appPort, '/errors/gsp/crash');
        expect(_0x584c15['status'])['toBe'](-0x214e + 0x2029 + -0x3d * -0xd), expect(await _0x584c15['text']())['toBe']('error'), expect(errors['length'])['toBe'](0x944 + -0x10c1 + 0x77e), expect(errors[-0x1e75 + -0x1119 + 0x3 * 0xfda])['toContain']('gsp\x20hit\x20an\x20oops');
    }), it('should\x20bubble\x20error\x20correctly\x20for\x20API\x20page', async () => {
        errors = [];
        const _0x531fad = await fetchViaHTTP(appPort, '/api/error');
        expect(_0x531fad['status'])['toBe'](0x1d8f + 0x665 + -0x2200), expect(await _0x531fad['text']())['toBe']('error'), expect(errors['length'])['toBe'](-0x1a5 + -0xc * -0xcd + -0x7f6 * 0x1), expect(errors[0x137b + -0x1 * -0xa2e + 0x3 * -0x9e3])['toContain']('some\x20error\x20from\x20/api/error');
    }), it('should\x20normalize\x20optional\x20values\x20correctly\x20for\x20SSP\x20page', async () => {
        const _0x5eedfb = await fetchViaHTTP(appPort, '/optional-ssp', {
                'rest': '',
                'another': 'value'
            }, { 'headers': { 'x-matched-path': '/optional-ssp/[[...rest]]' } }), _0x507ffd = await _0x5eedfb['text'](), _0x33bf51 = _0x3d6b17['load'](_0x507ffd), _0x2e5c0a = JSON['parse'](_0x33bf51('#props')['text']());
        expect(_0x2e5c0a['params'])['toEqual']({}), expect(_0x2e5c0a['query'])['toEqual']({ 'another': 'value' });
    }), it('should\x20normalize\x20optional\x20values\x20correctly\x20for\x20SSG\x20page', async () => {
        const _0x284296 = await fetchViaHTTP(appPort, '/optional-ssg', {
                'rest': '',
                'another': 'value'
            }, { 'headers': { 'x-matched-path': '/optional-ssg/[[...rest]]' } }), _0x4976e5 = await _0x284296['text'](), _0x460db7 = _0x3d6b17['load'](_0x4976e5), _0x1ed8b4 = JSON['parse'](_0x460db7('#props')['text']());
        expect(_0x1ed8b4['params'])['toEqual']({});
    }), it('should\x20normalize\x20optional\x20values\x20correctly\x20for\x20SSG\x20page\x20with\x20encoded\x20slash', async () => {
        const _0x22667f = await fetchViaHTTP(appPort, '/optional-ssg/[[...rest]]', undefined, {
                'headers': {
                    'x-matched-path': '/optional-ssg/[[...rest]]',
                    'x-now-route-matches': '1=en%2Fes%2Fhello%252Fworld&rest=en%2Fes%2Fhello%252Fworld'
                }
            }), _0x353959 = await _0x22667f['text'](), _0x867669 = _0x3d6b17['load'](_0x353959), _0x4556bc = JSON['parse'](_0x867669('#props')['text']());
        expect(_0x4556bc['params'])['toEqual']({
            'rest': [
                'en',
                'es',
                'hello/world'
            ]
        });
    }), it('should\x20normalize\x20optional\x20values\x20correctly\x20for\x20API\x20page', async () => {
        const _0x3f9375 = await fetchViaHTTP(appPort, '/api/optional', {
                'rest': '',
                'another': 'value'
            }, { 'headers': { 'x-matched-path': '/api/optional/[[...rest]]' } }), _0xd481e7 = await _0x3f9375['json']();
        expect(_0xd481e7['query'])['toEqual']({ 'another': 'value' }), expect(_0xd481e7['url'])['toBe']('/api/optional?another=value');
    }), it('should\x20match\x20the\x20index\x20page\x20correctly', async () => {
        const _0x31549a = await fetchViaHTTP(appPort, '/', undefined, {
                'headers': { 'x-matched-path': '/index' },
                'redirect': 'manual'
            }), _0x1f9c9f = await _0x31549a['text'](), _0x4b2232 = _0x3d6b17['load'](_0x1f9c9f);
        expect(_0x4b2232('#index')['text']())['toBe']('index\x20page');
    }), it('should\x20match\x20the\x20root\x20dyanmic\x20page\x20correctly', async () => {
        const _0x52011c = await fetchViaHTTP(appPort, '/index', undefined, {
                'headers': { 'x-matched-path': '/[slug]' },
                'redirect': 'manual'
            }), _0x2274e1 = await _0x52011c['text'](), _0x123465 = _0x3d6b17['load'](_0x2274e1);
        expect(_0x123465('#slug-page')['text']())['toBe']('[slug]\x20page');
    });
});
