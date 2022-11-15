import _0x51c58c from 'cheerio';
import _0x1b93d4 from 'fs-extra';
import {
    findPort,
    killApp,
    launchApp,
    nextBuild,
    nextStart,
    renderViaHTTP
} from 'next-test-utils';
import { join } from 'path';
jest['setTimeout']((-0x3e * 0x6d + -0x1d9 + 0x2027) * (0x25bd + -0x1af0 + 0x21d * -0x5) * (-0x2361 + -0xb46 + 0x2ea9));
const appDir = join(__dirname, '..'), appPage = join(appDir, 'pages/_app.js'), indexPage = join(appDir, 'pages/index.js');
let app, appPort, indexPageContent;
const runTests = _0x4aed2c => {
    const _0x2465ab = async () => {
        if (_0x4aed2c)
            appPort = await findPort(), app = await launchApp(appDir, appPort);
        else {
            const {code: _0x1c845c} = await nextBuild(appDir);
            if (_0x1c845c !== -0x6a * 0x4 + 0x4 * -0x7a0 + 0x2028)
                throw new Error('build\x20faild,\x20exit\x20code:\x20' + _0x1c845c);
            appPort = await findPort(), app = await nextStart(appDir, appPort);
        }
        const _0x4401ba = await renderViaHTTP(appPort, '/');
        await killApp(app);
        const _0x4ae300 = _0x51c58c['load'](_0x4401ba);
        return JSON['parse'](_0x4ae300('#__NEXT_DATA__')['text']());
    };
    it('should\x20not\x20have\x20gip\x20or\x20appGip\x20in\x20NEXT_DATA\x20for\x20page\x20without\x20getInitialProps', async () => {
        const _0x4d8995 = await _0x2465ab();
        expect(_0x4d8995['gip'])['toBe'](undefined), expect(_0x4d8995['appGip'])['toBe'](undefined);
    }), it('should\x20have\x20gip\x20in\x20NEXT_DATA\x20for\x20page\x20with\x20getInitialProps', async () => {
        indexPageContent = await _0x1b93d4['readFile'](indexPage, 'utf8'), await _0x1b93d4['writeFile'](indexPage, '\x0a\x20\x20\x20\x20\x20\x20const\x20Page\x20=\x20()\x20=>\x20\x27hi\x27\x0a\x20\x20\x20\x20\x20\x20Page.getInitialProps\x20=\x20()\x20=>\x20({\x20hello:\x20\x27world\x27\x20})\x0a\x20\x20\x20\x20\x20\x20export\x20default\x20Page\x0a\x20\x20\x20\x20');
        const _0x299f43 = await _0x2465ab();
        expect(_0x299f43['gip'])['toBe'](!![]);
    }), it('should\x20have\x20gip\x20and\x20appGip\x20in\x20NEXT_DATA\x20for\x20page\x20with\x20getInitialProps\x20and\x20_app\x20with\x20getInitialProps', async () => {
        await _0x1b93d4['writeFile'](appPage, '\x0a\x20\x20\x20\x20\x20\x20const\x20App\x20=\x20({\x20Component,\x20pageProps\x20})\x20=>\x20<Component\x20{...pageProps}\x20/>\x0a\x20\x20\x20\x20\x20\x20App.getInitialProps\x20=\x20async\x20(ctx)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20pageProps\x20=\x20{}\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(ctx.Component.getInitialProps)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pageProps\x20=\x20await\x20ctx.Component.getInitialProps(ctx.ctx)\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20{\x20pageProps\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20export\x20default\x20App\x0a\x20\x20\x20\x20');
        const _0x3c1c31 = await _0x2465ab();
        expect(_0x3c1c31['gip'])['toBe'](!![]), expect(_0x3c1c31['appGip'])['toBe'](!![]);
    }), it('should\x20only\x20have\x20appGip\x20in\x20NEXT_DATA\x20for\x20page\x20without\x20getInitialProps\x20and\x20_app\x20with\x20getInitialProps', async () => {
        await _0x1b93d4['writeFile'](indexPage, indexPageContent);
        const _0x50184a = await _0x2465ab();
        await _0x1b93d4['remove'](appPage), expect(_0x50184a['gip'])['toBe'](undefined), expect(_0x50184a['appGip'])['toBe'](!![]);
    });
};
describe('gip\x20identifiers', () => {
    describe('dev\x20mode', () => {
        runTests(!![]);
    }), describe('production\x20mode', () => {
        runTests();
    });
});
