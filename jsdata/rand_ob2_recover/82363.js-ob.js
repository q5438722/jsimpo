const should = require(_0x18931a(278)), sinon = require('sinon'), urlUtils = require(_0x18931a(279)), urlService = require(_0x18931a(280)), getUrl = require('../../../core/frontend/meta/url'), testUtils = require('../../utils');
describe(_0x18931a(281), function () {
    const _0x183640 = _0x18931a;
    beforeEach(function () {
        const _0x3059d3 = _0x272b;
        sinon['stub'](urlService, _0x3059d3(282)), sinon[_0x3059d3(283)](urlUtils, _0x3059d3(284));
    }), afterEach(function () {
        const _0x2923f1 = _0x272b;
        sinon[_0x2923f1(285)]();
    }), it(_0x183640(286), function () {
        const _0x29ad76 = _0x183640, _0x159372 = testUtils['DataGenerator']['forKnex'][_0x29ad76(287)]();
        urlService[_0x29ad76(282)][_0x29ad76(288)](_0x159372['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns'](_0x29ad76(289)), getUrl(_0x159372)[_0x29ad76(278)]['eql'](_0x29ad76(289));
    }), describe(_0x183640(290), function () {
        const _0x4d66b7 = _0x183640;
        it(_0x4d66b7(291), function () {
            const _0x44fd7b = _0x4d66b7, _0x2b5d47 = testUtils[_0x44fd7b(292)][_0x44fd7b(293)][_0x44fd7b(287)]({ 'status': _0x44fd7b(294) });
            urlService[_0x44fd7b(282)][_0x44fd7b(288)](_0x2b5d47['id'])[_0x44fd7b(295)](_0x44fd7b(296)), urlUtils[_0x44fd7b(284)]['withArgs']({
                'relativeUrl': _0x44fd7b(297) + _0x2b5d47[_0x44fd7b(298)] + '/',
                'secure': undefined
            }, null, undefined)[_0x44fd7b(295)](_0x44fd7b(299));
            let _0x16a25 = getUrl(_0x2b5d47);
            urlService['getUrlByResourceId'][_0x44fd7b(300)][_0x44fd7b(278)]['be']['true'](), urlUtils[_0x44fd7b(284)]['withArgs']({
                'relativeUrl': _0x44fd7b(297) + _0x2b5d47[_0x44fd7b(298)] + '/',
                'secure': undefined
            }, null, undefined)[_0x44fd7b(300)][_0x44fd7b(278)]['be']['true'](), _0x16a25[_0x44fd7b(278)][_0x44fd7b(301)](_0x44fd7b(299));
        }), it(_0x4d66b7(302), function () {
            const _0x1ebc20 = _0x4d66b7, _0x3cb695 = testUtils[_0x1ebc20(292)][_0x1ebc20(293)]['createPost']({ 'status': _0x1ebc20(294) });
            urlService[_0x1ebc20(282)][_0x1ebc20(288)](_0x3cb695['id'])[_0x1ebc20(295)]('/404/'), urlUtils['urlFor'][_0x1ebc20(288)]({
                'relativeUrl': _0x1ebc20(297) + _0x3cb695[_0x1ebc20(298)] + '/',
                'secure': undefined
            }, null, !![])[_0x1ebc20(295)](_0x1ebc20(303));
            let _0x44d3fd = getUrl(_0x3cb695, !![]);
            urlService['getUrlByResourceId']['calledOnce'][_0x1ebc20(278)]['be']['true'](), urlUtils[_0x1ebc20(284)][_0x1ebc20(288)]({
                'relativeUrl': _0x1ebc20(297) + _0x3cb695['uuid'] + '/',
                'secure': undefined
            }, null, !![])[_0x1ebc20(300)]['should']['be'][_0x1ebc20(304)](), _0x44d3fd['should']['eql'](_0x1ebc20(303));
        }), it(_0x4d66b7(305), function () {
            const _0x443ffe = _0x4d66b7, _0x4732cb = testUtils[_0x443ffe(292)][_0x443ffe(293)][_0x443ffe(287)]({ 'status': _0x443ffe(294) });
            _0x4732cb[_0x443ffe(306)] = !![], urlService[_0x443ffe(282)][_0x443ffe(288)](_0x4732cb['id'])[_0x443ffe(295)](_0x443ffe(296)), urlUtils['urlFor'][_0x443ffe(288)]({
                'relativeUrl': _0x443ffe(297) + _0x4732cb['uuid'] + '/',
                'secure': !![]
            }, null, !![])[_0x443ffe(295)]('absolute secure');
            let _0x20331a = getUrl(_0x4732cb, !![]);
            urlService['getUrlByResourceId']['calledOnce'][_0x443ffe(278)]['be'][_0x443ffe(304)](), urlUtils[_0x443ffe(284)][_0x443ffe(288)]({
                'relativeUrl': '/p/' + _0x4732cb['uuid'] + '/',
                'secure': !![]
            }, null, !![])['calledOnce'][_0x443ffe(278)]['be']['true'](), _0x20331a[_0x443ffe(278)][_0x443ffe(301)](_0x443ffe(307));
        });
    }), it(_0x183640(308), function () {
        const _0x3c802a = _0x183640, _0x192ac2 = testUtils[_0x3c802a(292)][_0x3c802a(293)][_0x3c802a(287)]();
        urlService['getUrlByResourceId'][_0x3c802a(288)](_0x192ac2['id'], {
            'absolute': !![],
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns']('absolute post url'), getUrl(_0x192ac2, !![])[_0x3c802a(278)][_0x3c802a(301)](_0x3c802a(309));
    }), it(_0x183640(310), function () {
        const _0x3b0b79 = _0x183640, _0x551484 = { 'relativeUrl': '/*/amp/' };
        urlUtils[_0x3b0b79(284)][_0x3b0b79(288)](_0x551484, {}, !![])['returns'](_0x3b0b79(311)), getUrl(_0x551484, !![])[_0x3b0b79(278)][_0x3b0b79(301)](_0x3b0b79(312)), urlService[_0x3b0b79(282)]['called']['should']['be'][_0x3b0b79(313)]();
    }), it(_0x183640(314), function () {
        const _0x184493 = _0x183640, _0x121f6a = testUtils['DataGenerator'][_0x184493(293)][_0x184493(315)]();
        _0x121f6a[_0x184493(316)] = null, urlService['getUrlByResourceId'][_0x184493(288)](_0x121f6a['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x184493(295)](_0x184493(317)), getUrl(_0x121f6a)[_0x184493(278)][_0x184493(301)](_0x184493(317));
    }), it(_0x183640(318), function () {
        const _0x522929 = _0x183640, _0x289954 = testUtils[_0x522929(292)][_0x522929(293)]['createTag']();
        _0x289954[_0x522929(316)] = null, _0x289954['secure'] = !![], urlService[_0x522929(282)][_0x522929(288)](_0x289954['id'], {
            'absolute': undefined,
            'secure': !![],
            'withSubdirectory': !![]
        })[_0x522929(295)](_0x522929(319)), getUrl(_0x289954)['should'][_0x522929(301)]('secure tag url');
    }), it(_0x183640(320), function () {
        const _0x46fccd = _0x183640, _0x5f6bf3 = testUtils['DataGenerator'][_0x46fccd(293)][_0x46fccd(321)]();
        urlService['getUrlByResourceId'][_0x46fccd(288)](_0x5f6bf3['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x46fccd(295)](_0x46fccd(322)), getUrl(_0x5f6bf3)[_0x46fccd(278)][_0x46fccd(301)]('author url');
    }), it('should return secure absolute url for a author', function () {
        const _0x1fa9b6 = _0x183640, _0x218e1b = testUtils['DataGenerator'][_0x1fa9b6(293)][_0x1fa9b6(321)]();
        _0x218e1b[_0x1fa9b6(306)] = !![], urlService[_0x1fa9b6(282)][_0x1fa9b6(288)](_0x218e1b['id'], {
            'absolute': !![],
            'secure': !![],
            'withSubdirectory': !![]
        })[_0x1fa9b6(295)]('absolute secure author url'), getUrl(_0x218e1b, !![])[_0x1fa9b6(278)]['eql'](_0x1fa9b6(323));
    }), it(_0x183640(324), function () {
        const _0x347692 = _0x183640, _0x537004 = {
                'label': _0x347692(325),
                'url': _0x347692(326),
                'slug': 'about-me',
                'current': !![]
            };
        urlUtils[_0x347692(284)][_0x347692(288)]('nav', {
            'nav': _0x537004,
            'secure': _0x537004[_0x347692(306)]
        }, undefined)[_0x347692(295)](_0x347692(327)), getUrl(_0x537004)[_0x347692(278)][_0x347692(328)](_0x347692(327));
    }), it('should return absolute url for a nav', function () {
        const _0x229e48 = _0x183640, _0x2c69e9 = {
                'label': _0x229e48(325),
                'url': '/about-me/',
                'slug': 'about-me',
                'current': !![]
            };
        urlUtils[_0x229e48(284)][_0x229e48(288)](_0x229e48(329), {
            'nav': _0x2c69e9,
            'secure': _0x2c69e9[_0x229e48(306)]
        }, !![])['returns'](_0x229e48(330)), getUrl(_0x2c69e9, !![])[_0x229e48(278)][_0x229e48(328)]('absolute nav url');
    }), it('should return `relativeUrl` and remove /amp/ in url', function () {
        const _0x1d8dbd = _0x183640, _0x5f0b7c = { 'relativeUrl': _0x1d8dbd(331) };
        urlUtils['urlFor'][_0x1d8dbd(288)](_0x5f0b7c, {}, undefined)[_0x1d8dbd(295)](_0x5f0b7c['relativeUrl']), getUrl(_0x5f0b7c)[_0x1d8dbd(278)]['eql'](_0x1d8dbd(332)), urlService[_0x1d8dbd(282)]['called'][_0x1d8dbd(278)]['be'][_0x1d8dbd(313)]();
    });
});