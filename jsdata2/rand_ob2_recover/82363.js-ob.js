const should = require('should'), sinon = require(_0x466438(442)), urlUtils = require('../../../core/shared/url-utils'), urlService = require('../../../core/frontend/services/url'), getUrl = require('../../../core/frontend/meta/url'), testUtils = require(_0x466438(443));
function _0xa5f3(_0x51908a, _0x3070dd) {
    return _0xa5f3 = function (_0x308d6b, _0xa5f377) {
        _0x308d6b = _0x308d6b - 429;
        let _0x23d956 = _0x308d[_0x308d6b];
        return _0x23d956;
    }, _0xa5f3(_0x51908a, _0x3070dd);
}
describe(_0x466438(444), function () {
    const _0x26cc90 = _0x466438;
    beforeEach(function () {
        const _0x94cb55 = _0xa5f3;
        sinon[_0x94cb55(445)](urlService, _0x94cb55(446)), sinon[_0x94cb55(445)](urlUtils, _0x94cb55(447));
    }), afterEach(function () {
        sinon['restore']();
    }), it('should return url for a post', function () {
        const _0x2acab2 = _0xa5f3, _0x6a1600 = testUtils[_0x2acab2(448)][_0x2acab2(449)][_0x2acab2(450)]();
        urlService[_0x2acab2(446)][_0x2acab2(451)](_0x6a1600['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x2acab2(452)](_0x2acab2(453)), getUrl(_0x6a1600)[_0x2acab2(454)][_0x2acab2(455)](_0x2acab2(453));
    }), describe('preview url: drafts/scheduled posts', function () {
        const _0x2d4bb0 = _0xa5f3;
        it(_0x2d4bb0(456), function () {
            const _0x1b795e = _0x2d4bb0, _0xb99709 = testUtils[_0x1b795e(448)][_0x1b795e(449)][_0x1b795e(450)]({ 'status': 'draft' });
            urlService['getUrlByResourceId'][_0x1b795e(451)](_0xb99709['id'])[_0x1b795e(452)](_0x1b795e(457)), urlUtils[_0x1b795e(447)][_0x1b795e(451)]({
                'relativeUrl': _0x1b795e(458) + _0xb99709[_0x1b795e(459)] + '/',
                'secure': undefined
            }, null, undefined)[_0x1b795e(452)](_0x1b795e(460));
            let _0x11f863 = getUrl(_0xb99709);
            urlService[_0x1b795e(446)][_0x1b795e(461)][_0x1b795e(454)]['be'][_0x1b795e(462)](), urlUtils[_0x1b795e(447)]['withArgs']({
                'relativeUrl': _0x1b795e(458) + _0xb99709['uuid'] + '/',
                'secure': undefined
            }, null, undefined)[_0x1b795e(461)][_0x1b795e(454)]['be']['true'](), _0x11f863[_0x1b795e(454)][_0x1b795e(455)](_0x1b795e(460));
        }), it(_0x2d4bb0(463), function () {
            const _0x3421d6 = _0x2d4bb0, _0x3d15d1 = testUtils[_0x3421d6(448)][_0x3421d6(449)]['createPost']({ 'status': 'draft' });
            urlService[_0x3421d6(446)][_0x3421d6(451)](_0x3d15d1['id'])['returns'](_0x3421d6(457)), urlUtils[_0x3421d6(447)]['withArgs']({
                'relativeUrl': _0x3421d6(458) + _0x3d15d1['uuid'] + '/',
                'secure': undefined
            }, null, !![])[_0x3421d6(452)](_0x3421d6(464));
            let _0x21ebb6 = getUrl(_0x3d15d1, !![]);
            urlService['getUrlByResourceId'][_0x3421d6(461)]['should']['be'][_0x3421d6(462)](), urlUtils[_0x3421d6(447)][_0x3421d6(451)]({
                'relativeUrl': _0x3421d6(458) + _0x3d15d1['uuid'] + '/',
                'secure': undefined
            }, null, !![])[_0x3421d6(461)][_0x3421d6(454)]['be'][_0x3421d6(462)](), _0x21ebb6[_0x3421d6(454)][_0x3421d6(455)](_0x3421d6(464));
        }), it(_0x2d4bb0(465), function () {
            const _0x4144e2 = _0x2d4bb0, _0x41627e = testUtils[_0x4144e2(448)][_0x4144e2(449)][_0x4144e2(450)]({ 'status': _0x4144e2(466) });
            _0x41627e[_0x4144e2(467)] = !![], urlService[_0x4144e2(446)][_0x4144e2(451)](_0x41627e['id'])[_0x4144e2(452)](_0x4144e2(457)), urlUtils['urlFor']['withArgs']({
                'relativeUrl': _0x4144e2(458) + _0x41627e[_0x4144e2(459)] + '/',
                'secure': !![]
            }, null, !![])['returns'](_0x4144e2(468));
            let _0x82a534 = getUrl(_0x41627e, !![]);
            urlService[_0x4144e2(446)][_0x4144e2(461)][_0x4144e2(454)]['be'][_0x4144e2(462)](), urlUtils['urlFor'][_0x4144e2(451)]({
                'relativeUrl': _0x4144e2(458) + _0x41627e['uuid'] + '/',
                'secure': !![]
            }, null, !![])['calledOnce']['should']['be'][_0x4144e2(462)](), _0x82a534[_0x4144e2(454)][_0x4144e2(455)]('absolute secure');
        });
    }), it(_0x26cc90(469), function () {
        const _0x264576 = _0x26cc90, _0x103c4d = testUtils['DataGenerator'][_0x264576(449)][_0x264576(450)]();
        urlService[_0x264576(446)][_0x264576(451)](_0x103c4d['id'], {
            'absolute': !![],
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x264576(452)](_0x264576(470)), getUrl(_0x103c4d, !![])[_0x264576(454)][_0x264576(455)]('absolute post url');
    }), it(_0x26cc90(471), function () {
        const _0x3673bf = _0x26cc90, _0xf85c5b = { 'relativeUrl': _0x3673bf(472) };
        urlUtils[_0x3673bf(447)][_0x3673bf(451)](_0xf85c5b, {}, !![])['returns'](_0x3673bf(473)), getUrl(_0xf85c5b, !![])[_0x3673bf(454)][_0x3673bf(455)](_0x3673bf(474)), urlService[_0x3673bf(446)]['called'][_0x3673bf(454)]['be'][_0x3673bf(475)]();
    }), it(_0x26cc90(476), function () {
        const _0x5bf52c = _0x26cc90, _0x5784ed = testUtils[_0x5bf52c(448)][_0x5bf52c(449)]['createTag']();
        _0x5784ed[_0x5bf52c(477)] = null, urlService[_0x5bf52c(446)][_0x5bf52c(451)](_0x5784ed['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x5bf52c(452)](_0x5bf52c(478)), getUrl(_0x5784ed)[_0x5bf52c(454)][_0x5bf52c(455)](_0x5bf52c(478));
    }), it(_0x26cc90(479), function () {
        const _0x542aa3 = _0x26cc90, _0x26a380 = testUtils[_0x542aa3(448)][_0x542aa3(449)][_0x542aa3(480)]();
        _0x26a380[_0x542aa3(477)] = null, _0x26a380[_0x542aa3(467)] = !![], urlService['getUrlByResourceId'][_0x542aa3(451)](_0x26a380['id'], {
            'absolute': undefined,
            'secure': !![],
            'withSubdirectory': !![]
        })[_0x542aa3(452)](_0x542aa3(481)), getUrl(_0x26a380)[_0x542aa3(454)][_0x542aa3(455)](_0x542aa3(481));
    }), it(_0x26cc90(482), function () {
        const _0x270289 = _0x26cc90, _0x41e8af = testUtils[_0x270289(448)][_0x270289(449)][_0x270289(483)]();
        urlService['getUrlByResourceId'][_0x270289(451)](_0x41e8af['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns'](_0x270289(484)), getUrl(_0x41e8af)[_0x270289(454)][_0x270289(455)](_0x270289(484));
    }), it(_0x26cc90(485), function () {
        const _0xc1e5c5 = _0x26cc90, _0x13a738 = testUtils['DataGenerator'][_0xc1e5c5(449)][_0xc1e5c5(483)]();
        _0x13a738['secure'] = !![], urlService[_0xc1e5c5(446)]['withArgs'](_0x13a738['id'], {
            'absolute': !![],
            'secure': !![],
            'withSubdirectory': !![]
        })[_0xc1e5c5(452)](_0xc1e5c5(486)), getUrl(_0x13a738, !![])[_0xc1e5c5(454)]['eql'](_0xc1e5c5(486));
    }), it('should return url for a nav', function () {
        const _0x517fff = _0x26cc90, _0x3bf078 = {
                'label': 'About Me',
                'url': '/about-me/',
                'slug': 'about-me',
                'current': !![]
            };
        urlUtils['urlFor']['withArgs'](_0x517fff(487), {
            'nav': _0x3bf078,
            'secure': _0x3bf078[_0x517fff(467)]
        }, undefined)[_0x517fff(452)](_0x517fff(488)), getUrl(_0x3bf078)['should'][_0x517fff(489)](_0x517fff(488));
    }), it(_0x26cc90(490), function () {
        const _0x300425 = _0x26cc90, _0x55af70 = {
                'label': _0x300425(491),
                'url': _0x300425(492),
                'slug': _0x300425(493),
                'current': !![]
            };
        urlUtils[_0x300425(447)][_0x300425(451)]('nav', {
            'nav': _0x55af70,
            'secure': _0x55af70['secure']
        }, !![])['returns']('absolute nav url'), getUrl(_0x55af70, !![])[_0x300425(454)]['equal'](_0x300425(494));
    }), it(_0x26cc90(495), function () {
        const _0x3b1a07 = _0x26cc90, _0x4124f4 = { 'relativeUrl': _0x3b1a07(472) };
        urlUtils['urlFor'][_0x3b1a07(451)](_0x4124f4, {}, undefined)[_0x3b1a07(452)](_0x4124f4['relativeUrl']), getUrl(_0x4124f4)[_0x3b1a07(454)][_0x3b1a07(455)](_0x3b1a07(496)), urlService[_0x3b1a07(446)][_0x3b1a07(497)][_0x3b1a07(454)]['be'][_0x3b1a07(475)]();
    });
});