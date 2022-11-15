const _0x1ced = [
    'appGip',
    'toBe',
    'should\x20have\x20gip\x20in\x20NEXT_DATA\x20for\x20page\x20with\x20getInitialProps',
    'utf8',
    'should\x20have\x20gip\x20and\x20appGip\x20in\x20NEXT_DATA\x20for\x20page\x20with\x20getInitialProps\x20and\x20_app\x20with\x20getInitialProps',
    'writeFile',
    '\x0a\x20\x20\x20\x20\x20\x20const\x20App\x20=\x20({\x20Component,\x20pageProps\x20})\x20=>\x20<Component\x20{...pageProps}\x20/>\x0a\x20\x20\x20\x20\x20\x20App.getInitialProps\x20=\x20async\x20(ctx)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20let\x20pageProps\x20=\x20{}\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(ctx.Component.getInitialProps)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pageProps\x20=\x20await\x20ctx.Component.getInitialProps(ctx.ctx)\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20return\x20{\x20pageProps\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20export\x20default\x20App\x0a\x20\x20\x20\x20',
    'should\x20only\x20have\x20appGip\x20in\x20NEXT_DATA\x20for\x20page\x20without\x20getInitialProps\x20and\x20_app\x20with\x20getInitialProps',
    'remove',
    'gip\x20identifiers',
    '653644Dhpukb',
    '11mGBNHO',
    '44087aodXgt',
    '558975bGGebe',
    '79859fcskdX',
    '23770nvuXli',
    '912052qWulwh',
    '1099TxVVsL',
    '1801DANrjf',
    'setTimeout',
    'pages/_app.js',
    'pages/index.js',
    'load',
    '#__NEXT_DATA__',
    'text',
    'should\x20not\x20have\x20gip\x20or\x20appGip\x20in\x20NEXT_DATA\x20for\x20page\x20without\x20getInitialProps',
    'gip'
];
const _0x39549d = _0x42e5;
(function (_0x5392ec, _0x431277) {
    const _0x1c430d = _0x42e5;
    while (!![]) {
        try {
            const _0x85610d = parseInt(_0x1c430d(0x120)) + parseInt(_0x1c430d(0x121)) * -parseInt(_0x1c430d(0x122)) + -parseInt(_0x1c430d(0x123)) + -parseInt(_0x1c430d(0x124)) + parseInt(_0x1c430d(0x125)) + -parseInt(_0x1c430d(0x126)) + parseInt(_0x1c430d(0x127)) * parseInt(_0x1c430d(0x128));
            if (_0x85610d === _0x431277)
                break;
            else
                _0x5392ec['push'](_0x5392ec['shift']());
        } catch (_0x15ab4a) {
            _0x5392ec['push'](_0x5392ec['shift']());
        }
    }
}(_0x1ced, 0x97946));
import _0x43ee1d from 'cheerio';
import _0x327b07 from 'fs-extra';
import {
    findPort,
    killApp,
    launchApp,
    nextBuild,
    nextStart,
    renderViaHTTP
} from 'next-test-utils';
import { join } from 'path';
jest[_0x39549d(0x129)](0x3e8 * 0x3c * 0x2);
const appDir = join(__dirname, '..'), appPage = join(appDir, _0x39549d(0x12a)), indexPage = join(appDir, _0x39549d(0x12b));
let app, appPort, indexPageContent;
function _0x42e5(_0x250f20, _0x4761c8) {
    return _0x42e5 = function (_0x1cedb7, _0x42e5e5) {
        _0x1cedb7 = _0x1cedb7 - 0x120;
        let _0x11b584 = _0x1ced[_0x1cedb7];
        return _0x11b584;
    }, _0x42e5(_0x250f20, _0x4761c8);
}
const runTests = _0x215ae5 => {
    const _0x2878eb = _0x39549d, _0x4806f8 = async () => {
            const _0x895a89 = _0x42e5;
            if (_0x215ae5)
                appPort = await findPort(), app = await launchApp(appDir, appPort);
            else {
                const {code: _0x1d1a0d} = await nextBuild(appDir);
                if (_0x1d1a0d !== 0x0)
                    throw new Error('build\x20faild,\x20exit\x20code:\x20' + _0x1d1a0d);
                appPort = await findPort(), app = await nextStart(appDir, appPort);
            }
            const _0x462c2f = await renderViaHTTP(appPort, '/');
            await killApp(app);
            const _0x46a16f = _0x43ee1d[_0x895a89(0x12c)](_0x462c2f);
            return JSON['parse'](_0x46a16f(_0x895a89(0x12d))[_0x895a89(0x12e)]());
        };
    it(_0x2878eb(0x12f), async () => {
        const _0x2618ac = _0x2878eb, _0x255335 = await _0x4806f8();
        expect(_0x255335[_0x2618ac(0x130)])['toBe'](undefined), expect(_0x255335[_0x2618ac(0x131)])[_0x2618ac(0x132)](undefined);
    }), it(_0x2878eb(0x133), async () => {
        const _0x4ec693 = _0x2878eb;
        indexPageContent = await _0x327b07['readFile'](indexPage, _0x4ec693(0x134)), await _0x327b07['writeFile'](indexPage, '\x0a\x20\x20\x20\x20\x20\x20const\x20Page\x20=\x20()\x20=>\x20\x27hi\x27\x0a\x20\x20\x20\x20\x20\x20Page.getInitialProps\x20=\x20()\x20=>\x20({\x20hello:\x20\x27world\x27\x20})\x0a\x20\x20\x20\x20\x20\x20export\x20default\x20Page\x0a\x20\x20\x20\x20');
        const _0x1741f8 = await _0x4806f8();
        expect(_0x1741f8['gip'])[_0x4ec693(0x132)](!![]);
    }), it(_0x2878eb(0x135), async () => {
        const _0x359fcc = _0x2878eb;
        await _0x327b07[_0x359fcc(0x136)](appPage, _0x359fcc(0x137));
        const _0xc4c3a0 = await _0x4806f8();
        expect(_0xc4c3a0[_0x359fcc(0x130)])[_0x359fcc(0x132)](!![]), expect(_0xc4c3a0[_0x359fcc(0x131)])['toBe'](!![]);
    }), it(_0x2878eb(0x138), async () => {
        const _0x5f46a9 = _0x2878eb;
        await _0x327b07[_0x5f46a9(0x136)](indexPage, indexPageContent);
        const _0x1d63a6 = await _0x4806f8();
        await _0x327b07[_0x5f46a9(0x139)](appPage), expect(_0x1d63a6['gip'])[_0x5f46a9(0x132)](undefined), expect(_0x1d63a6[_0x5f46a9(0x131)])[_0x5f46a9(0x132)](!![]);
    });
};
describe(_0x39549d(0x13a), () => {
    describe('dev\x20mode', () => {
        runTests(!![]);
    }), describe('production\x20mode', () => {
        runTests();
    });
});
