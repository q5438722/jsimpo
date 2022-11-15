import _0x3a6a8f from 'cheerio';
import _0xc2a21b from 'fs-extra';
import {
    findPort,
    killApp,
    launchApp,
    nextBuild,
    nextStart,
    renderViaHTTP
} from 'next-test-utils';
import { join } from 'path';
jest['setTimeout'](0x3e8 * 0x3c * 0x2);
const appDir = join(__dirname, '..'), appPage = join(appDir, 'pages/_app.js'), indexPage = join(appDir, 'pages/index.js');
let app, appPort, indexPageContent;
const runTests = _0x5512ea => {
    const _0x42938f = {
            'mIzlw': function (_0x5a3953) {
                return _0x5a3953();
            },
            'rbBIZ': function (_0x3b9603, _0x5598d2, _0x2923d1) {
                return _0x3b9603(_0x5598d2, _0x2923d1);
            },
            'JNevF': function (_0x17bd2e, _0x590c51) {
                return _0x17bd2e(_0x590c51);
            },
            'DuEzJ': function (_0x2de4e7, _0x21d663) {
                return _0x2de4e7 !== _0x21d663;
            },
            'PIQAX': function (_0x4ce9fb) {
                return _0x4ce9fb();
            },
            'DQgmw': '#__NEXT_DATA__',
            'pDxuB': function (_0x13f10d) {
                return _0x13f10d();
            },
            'SzVbf': 'utf8',
            'HEmKy': function (_0x3e10ee) {
                return _0x3e10ee();
            },
            'xHedR': function (_0x310d0d, _0x2d6c87) {
                return _0x310d0d(_0x2d6c87);
            },
            'fHJGl': function (_0x20a2a2, _0x217362) {
                return _0x20a2a2(_0x217362);
            },
            'ylVOX': 'should\x20not\x20have\x20gip\x20or\x20appGip\x20in\x20NEXT_DATA\x20for\x20page\x20without\x20getInitialProps',
            'HgCJF': 'should\x20have\x20gip\x20in\x20NEXT_DATA\x20for\x20page\x20with\x20getInitialProps',
            'fXHBy': 'should\x20have\x20gip\x20and\x20appGip\x20in\x20NEXT_DATA\x20for\x20page\x20with\x20getInitialProps\x20and\x20_app\x20with\x20getInitialProps',
            'MLmti': 'should\x20only\x20have\x20appGip\x20in\x20NEXT_DATA\x20for\x20page\x20without\x20getInitialProps\x20and\x20_app\x20with\x20getInitialProps'
        }, _0x37c7c5 = async () => {
            if (_0x5512ea)
                appPort = await _0x42938f['mIzlw'](findPort), app = await _0x42938f['rbBIZ'](launchApp, appDir, appPort);
            else {
                const {code: _0x1435ca} = await _0x42938f['JNevF'](nextBuild, appDir);
                if (_0x42938f['DuEzJ'](_0x1435ca, 0x0))
                    throw new Error('build\x20faild,\x20exit\x20code:\x20' + _0x1435ca);
                appPort = await _0x42938f['PIQAX'](findPort), app = await _0x42938f['rbBIZ'](nextStart, appDir, appPort);
            }
            const _0x1e2b8e = await _0x42938f['rbBIZ'](renderViaHTTP, appPort, '/');
            await _0x42938f['JNevF'](killApp, app);
            const _0x20842e = _0x3a6a8f['load'](_0x1e2b8e);
            return JSON['parse'](_0x42938f['JNevF'](_0x20842e, _0x42938f['DQgmw'])['text']());
        };
    _0x42938f['rbBIZ'](it, _0x42938f['ylVOX'], async () => {
        const _0x40185f = await _0x42938f['pDxuB'](_0x37c7c5);
        _0x42938f['JNevF'](expect, _0x40185f['gip'])['toBe'](undefined), _0x42938f['JNevF'](expect, _0x40185f['appGip'])['toBe'](undefined);
    }), _0x42938f['rbBIZ'](it, _0x42938f['HgCJF'], async () => {
        indexPageContent = await _0xc2a21b['readFile'](indexPage, _0x42938f['SzVbf']), await _0xc2a21b['writeFile'](indexPage, '\x0a\x20\x20\x20\x20\x20\x20const\x20Page\x20=\x20()\x20=>\x20\x27hi\x27\x0a\x20\x20\x20\x20\x20\x20Page.getInitialProps\x20=\x20()\x20=>\x20({\x20hello:\x20\x27world\x27\x20})\x0a\x20\x20\x20\x20\x20\x20export\x20default\x20Page\x0a\x20\x20\x20\x20');
        const _0x5ba04d = await _0x42938f['pDxuB'](_0x37c7c5);
        _0x42938f['JNevF'](expect, _0x5ba04d['gip'])['toBe'](!![]);
    }), _0x42938f['rbBIZ'](it, _0x42938f['fXHBy'], async () => {
        await _0xc2a21b['writeFile'](appPage, '\x0a\x20\x20\x20\x20\x20\x20const\x20App\x20=\x20({\x20Component,\x20pageProps\x20})\x20=>\x20<Component\x20{...pageProps}\x20/>\x0a\x20\x20\x20\x20\x20\x20App.getInitialProps\x20=\x20async\x20(ctx)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20pageProps\x20=\x20{}\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(ctx.Component.getInitialProps)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pageProps\x20=\x20await\x20ctx.Component.getInitialProps(ctx.ctx)\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20{\x20pageProps\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20export\x20default\x20App\x0a\x20\x20\x20\x20');
        const _0xdc8718 = await _0x42938f['HEmKy'](_0x37c7c5);
        _0x42938f['xHedR'](expect, _0xdc8718['gip'])['toBe'](!![]), _0x42938f['xHedR'](expect, _0xdc8718['appGip'])['toBe'](!![]);
    }), _0x42938f['rbBIZ'](it, _0x42938f['MLmti'], async () => {
        await _0xc2a21b['writeFile'](indexPage, indexPageContent);
        const _0x518edb = await _0x42938f['HEmKy'](_0x37c7c5);
        await _0xc2a21b['remove'](appPage), _0x42938f['fHJGl'](expect, _0x518edb['gip'])['toBe'](undefined), _0x42938f['fHJGl'](expect, _0x518edb['appGip'])['toBe'](!![]);
    });
};
describe('gip\x20identifiers', () => {
    const _0x37f0a9 = {
        'TVsmj': function (_0x29af37, _0x353793) {
            return _0x29af37(_0x353793);
        },
        'LeWSM': function (_0x47ab7a) {
            return _0x47ab7a();
        },
        'dUTRV': function (_0x2dc34d, _0x1ed3e9, _0x2e754e) {
            return _0x2dc34d(_0x1ed3e9, _0x2e754e);
        },
        'mbGVo': 'dev\x20mode',
        'kifCg': 'production\x20mode'
    };
    _0x37f0a9['dUTRV'](describe, _0x37f0a9['mbGVo'], () => {
        _0x37f0a9['TVsmj'](runTests, !![]);
    }), _0x37f0a9['dUTRV'](describe, _0x37f0a9['kifCg'], () => {
        _0x37f0a9['LeWSM'](runTests);
    });
});
