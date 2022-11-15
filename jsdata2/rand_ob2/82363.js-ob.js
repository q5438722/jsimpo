const _0x308d = [
    'calledOnce',
    'true',
    'absolute,\x20not\x20secure',
    'absolute',
    'absolute,\x20secure',
    'draft',
    'secure',
    'absolute\x20secure',
    'should\x20return\x20absolute\x20url\x20for\x20a\x20post',
    'absolute\x20post\x20url',
    'should\x20return\x20absolute\x20url\x20for\x20a\x20post\x20and\x20remove\x20/amp/\x20in\x20url',
    '/*/amp/',
    'absolute/*/amp/',
    'absolute/*/',
    'false',
    'should\x20return\x20url\x20for\x20a\x20tag',
    'parent',
    'tag\x20url',
    'should\x20return\x20secure\x20url\x20for\x20a\x20tag',
    'createTag',
    'secure\x20tag\x20url',
    'should\x20return\x20url\x20for\x20a\x20author',
    'createUser',
    'author\x20url',
    'should\x20return\x20secure\x20absolute\x20url\x20for\x20a\x20author',
    'absolute\x20secure\x20author\x20url',
    'nav',
    'nav\x20url',
    'equal',
    'should\x20return\x20absolute\x20url\x20for\x20a\x20nav',
    'About\x20Me',
    '/about-me/',
    'about-me',
    'absolute\x20nav\x20url',
    'should\x20return\x20`relativeUrl`\x20and\x20remove\x20/amp/\x20in\x20url',
    '/*/',
    'called',
    '275873XDZBWE',
    '1SAQUUu',
    '371069SnmrFp',
    '2beVtQo',
    '31isTfRJ',
    '24295kjyfKJ',
    '477384tyOCCS',
    '17buXEuM',
    '38187EEYiTc',
    '1657qjWSlR',
    '319rPlkrI',
    '208141DreTfP',
    '12EdogfJ',
    'sinon',
    '../../utils',
    'getUrl',
    'stub',
    'getUrlByResourceId',
    'urlFor',
    'DataGenerator',
    'forKnex',
    'createPost',
    'withArgs',
    'returns',
    'post\x20url',
    'should',
    'eql',
    'not\x20absolute,\x20not\x20secure',
    '/404/',
    '/p/',
    'uuid',
    'relative'
];
const _0x466438 = _0xa5f3;
(function (_0x54d9a3, _0x2c541e) {
    const _0x4685d9 = _0xa5f3;
    while (!![]) {
        try {
            const _0x2a2028 = parseInt(_0x4685d9(0x1ad)) * -parseInt(_0x4685d9(0x1ae)) + parseInt(_0x4685d9(0x1af)) * parseInt(_0x4685d9(0x1b0)) + parseInt(_0x4685d9(0x1b1)) * parseInt(_0x4685d9(0x1b2)) + parseInt(_0x4685d9(0x1b3)) + parseInt(_0x4685d9(0x1b4)) * parseInt(_0x4685d9(0x1b5)) + -parseInt(_0x4685d9(0x1b6)) * -parseInt(_0x4685d9(0x1b7)) + parseInt(_0x4685d9(0x1b8)) * -parseInt(_0x4685d9(0x1b9));
            if (_0x2a2028 === _0x2c541e)
                break;
            else
                _0x54d9a3['push'](_0x54d9a3['shift']());
        } catch (_0x2290e9) {
            _0x54d9a3['push'](_0x54d9a3['shift']());
        }
    }
}(_0x308d, 0x5c020));
const should = require('should'), sinon = require(_0x466438(0x1ba)), urlUtils = require('../../../core/shared/url-utils'), urlService = require('../../../core/frontend/services/url'), getUrl = require('../../../core/frontend/meta/url'), testUtils = require(_0x466438(0x1bb));
function _0xa5f3(_0x51908a, _0x3070dd) {
    return _0xa5f3 = function (_0x308d6b, _0xa5f377) {
        _0x308d6b = _0x308d6b - 0x1ad;
        let _0x23d956 = _0x308d[_0x308d6b];
        return _0x23d956;
    }, _0xa5f3(_0x51908a, _0x3070dd);
}
describe(_0x466438(0x1bc), function () {
    const _0x26cc90 = _0x466438;
    beforeEach(function () {
        const _0x94cb55 = _0xa5f3;
        sinon[_0x94cb55(0x1bd)](urlService, _0x94cb55(0x1be)), sinon[_0x94cb55(0x1bd)](urlUtils, _0x94cb55(0x1bf));
    }), afterEach(function () {
        sinon['restore']();
    }), it('should\x20return\x20url\x20for\x20a\x20post', function () {
        const _0x2acab2 = _0xa5f3, _0x6a1600 = testUtils[_0x2acab2(0x1c0)][_0x2acab2(0x1c1)][_0x2acab2(0x1c2)]();
        urlService[_0x2acab2(0x1be)][_0x2acab2(0x1c3)](_0x6a1600['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x2acab2(0x1c4)](_0x2acab2(0x1c5)), getUrl(_0x6a1600)[_0x2acab2(0x1c6)][_0x2acab2(0x1c7)](_0x2acab2(0x1c5));
    }), describe('preview\x20url:\x20drafts/scheduled\x20posts', function () {
        const _0x2d4bb0 = _0xa5f3;
        it(_0x2d4bb0(0x1c8), function () {
            const _0x1b795e = _0x2d4bb0, _0xb99709 = testUtils[_0x1b795e(0x1c0)][_0x1b795e(0x1c1)][_0x1b795e(0x1c2)]({ 'status': 'draft' });
            urlService['getUrlByResourceId'][_0x1b795e(0x1c3)](_0xb99709['id'])[_0x1b795e(0x1c4)](_0x1b795e(0x1c9)), urlUtils[_0x1b795e(0x1bf)][_0x1b795e(0x1c3)]({
                'relativeUrl': _0x1b795e(0x1ca) + _0xb99709[_0x1b795e(0x1cb)] + '/',
                'secure': undefined
            }, null, undefined)[_0x1b795e(0x1c4)](_0x1b795e(0x1cc));
            let _0x11f863 = getUrl(_0xb99709);
            urlService[_0x1b795e(0x1be)][_0x1b795e(0x1cd)][_0x1b795e(0x1c6)]['be'][_0x1b795e(0x1ce)](), urlUtils[_0x1b795e(0x1bf)]['withArgs']({
                'relativeUrl': _0x1b795e(0x1ca) + _0xb99709['uuid'] + '/',
                'secure': undefined
            }, null, undefined)[_0x1b795e(0x1cd)][_0x1b795e(0x1c6)]['be']['true'](), _0x11f863[_0x1b795e(0x1c6)][_0x1b795e(0x1c7)](_0x1b795e(0x1cc));
        }), it(_0x2d4bb0(0x1cf), function () {
            const _0x3421d6 = _0x2d4bb0, _0x3d15d1 = testUtils[_0x3421d6(0x1c0)][_0x3421d6(0x1c1)]['createPost']({ 'status': 'draft' });
            urlService[_0x3421d6(0x1be)][_0x3421d6(0x1c3)](_0x3d15d1['id'])['returns'](_0x3421d6(0x1c9)), urlUtils[_0x3421d6(0x1bf)]['withArgs']({
                'relativeUrl': _0x3421d6(0x1ca) + _0x3d15d1['uuid'] + '/',
                'secure': undefined
            }, null, !![])[_0x3421d6(0x1c4)](_0x3421d6(0x1d0));
            let _0x21ebb6 = getUrl(_0x3d15d1, !![]);
            urlService['getUrlByResourceId'][_0x3421d6(0x1cd)]['should']['be'][_0x3421d6(0x1ce)](), urlUtils[_0x3421d6(0x1bf)][_0x3421d6(0x1c3)]({
                'relativeUrl': _0x3421d6(0x1ca) + _0x3d15d1['uuid'] + '/',
                'secure': undefined
            }, null, !![])[_0x3421d6(0x1cd)][_0x3421d6(0x1c6)]['be'][_0x3421d6(0x1ce)](), _0x21ebb6[_0x3421d6(0x1c6)][_0x3421d6(0x1c7)](_0x3421d6(0x1d0));
        }), it(_0x2d4bb0(0x1d1), function () {
            const _0x4144e2 = _0x2d4bb0, _0x41627e = testUtils[_0x4144e2(0x1c0)][_0x4144e2(0x1c1)][_0x4144e2(0x1c2)]({ 'status': _0x4144e2(0x1d2) });
            _0x41627e[_0x4144e2(0x1d3)] = !![], urlService[_0x4144e2(0x1be)][_0x4144e2(0x1c3)](_0x41627e['id'])[_0x4144e2(0x1c4)](_0x4144e2(0x1c9)), urlUtils['urlFor']['withArgs']({
                'relativeUrl': _0x4144e2(0x1ca) + _0x41627e[_0x4144e2(0x1cb)] + '/',
                'secure': !![]
            }, null, !![])['returns'](_0x4144e2(0x1d4));
            let _0x82a534 = getUrl(_0x41627e, !![]);
            urlService[_0x4144e2(0x1be)][_0x4144e2(0x1cd)][_0x4144e2(0x1c6)]['be'][_0x4144e2(0x1ce)](), urlUtils['urlFor'][_0x4144e2(0x1c3)]({
                'relativeUrl': _0x4144e2(0x1ca) + _0x41627e['uuid'] + '/',
                'secure': !![]
            }, null, !![])['calledOnce']['should']['be'][_0x4144e2(0x1ce)](), _0x82a534[_0x4144e2(0x1c6)][_0x4144e2(0x1c7)]('absolute\x20secure');
        });
    }), it(_0x26cc90(0x1d5), function () {
        const _0x264576 = _0x26cc90, _0x103c4d = testUtils['DataGenerator'][_0x264576(0x1c1)][_0x264576(0x1c2)]();
        urlService[_0x264576(0x1be)][_0x264576(0x1c3)](_0x103c4d['id'], {
            'absolute': !![],
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x264576(0x1c4)](_0x264576(0x1d6)), getUrl(_0x103c4d, !![])[_0x264576(0x1c6)][_0x264576(0x1c7)]('absolute\x20post\x20url');
    }), it(_0x26cc90(0x1d7), function () {
        const _0x3673bf = _0x26cc90, _0xf85c5b = { 'relativeUrl': _0x3673bf(0x1d8) };
        urlUtils[_0x3673bf(0x1bf)][_0x3673bf(0x1c3)](_0xf85c5b, {}, !![])['returns'](_0x3673bf(0x1d9)), getUrl(_0xf85c5b, !![])[_0x3673bf(0x1c6)][_0x3673bf(0x1c7)](_0x3673bf(0x1da)), urlService[_0x3673bf(0x1be)]['called'][_0x3673bf(0x1c6)]['be'][_0x3673bf(0x1db)]();
    }), it(_0x26cc90(0x1dc), function () {
        const _0x5bf52c = _0x26cc90, _0x5784ed = testUtils[_0x5bf52c(0x1c0)][_0x5bf52c(0x1c1)]['createTag']();
        _0x5784ed[_0x5bf52c(0x1dd)] = null, urlService[_0x5bf52c(0x1be)][_0x5bf52c(0x1c3)](_0x5784ed['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x5bf52c(0x1c4)](_0x5bf52c(0x1de)), getUrl(_0x5784ed)[_0x5bf52c(0x1c6)][_0x5bf52c(0x1c7)](_0x5bf52c(0x1de));
    }), it(_0x26cc90(0x1df), function () {
        const _0x542aa3 = _0x26cc90, _0x26a380 = testUtils[_0x542aa3(0x1c0)][_0x542aa3(0x1c1)][_0x542aa3(0x1e0)]();
        _0x26a380[_0x542aa3(0x1dd)] = null, _0x26a380[_0x542aa3(0x1d3)] = !![], urlService['getUrlByResourceId'][_0x542aa3(0x1c3)](_0x26a380['id'], {
            'absolute': undefined,
            'secure': !![],
            'withSubdirectory': !![]
        })[_0x542aa3(0x1c4)](_0x542aa3(0x1e1)), getUrl(_0x26a380)[_0x542aa3(0x1c6)][_0x542aa3(0x1c7)](_0x542aa3(0x1e1));
    }), it(_0x26cc90(0x1e2), function () {
        const _0x270289 = _0x26cc90, _0x41e8af = testUtils[_0x270289(0x1c0)][_0x270289(0x1c1)][_0x270289(0x1e3)]();
        urlService['getUrlByResourceId'][_0x270289(0x1c3)](_0x41e8af['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns'](_0x270289(0x1e4)), getUrl(_0x41e8af)[_0x270289(0x1c6)][_0x270289(0x1c7)](_0x270289(0x1e4));
    }), it(_0x26cc90(0x1e5), function () {
        const _0xc1e5c5 = _0x26cc90, _0x13a738 = testUtils['DataGenerator'][_0xc1e5c5(0x1c1)][_0xc1e5c5(0x1e3)]();
        _0x13a738['secure'] = !![], urlService[_0xc1e5c5(0x1be)]['withArgs'](_0x13a738['id'], {
            'absolute': !![],
            'secure': !![],
            'withSubdirectory': !![]
        })[_0xc1e5c5(0x1c4)](_0xc1e5c5(0x1e6)), getUrl(_0x13a738, !![])[_0xc1e5c5(0x1c6)]['eql'](_0xc1e5c5(0x1e6));
    }), it('should\x20return\x20url\x20for\x20a\x20nav', function () {
        const _0x517fff = _0x26cc90, _0x3bf078 = {
                'label': 'About\x20Me',
                'url': '/about-me/',
                'slug': 'about-me',
                'current': !![]
            };
        urlUtils['urlFor']['withArgs'](_0x517fff(0x1e7), {
            'nav': _0x3bf078,
            'secure': _0x3bf078[_0x517fff(0x1d3)]
        }, undefined)[_0x517fff(0x1c4)](_0x517fff(0x1e8)), getUrl(_0x3bf078)['should'][_0x517fff(0x1e9)](_0x517fff(0x1e8));
    }), it(_0x26cc90(0x1ea), function () {
        const _0x300425 = _0x26cc90, _0x55af70 = {
                'label': _0x300425(0x1eb),
                'url': _0x300425(0x1ec),
                'slug': _0x300425(0x1ed),
                'current': !![]
            };
        urlUtils[_0x300425(0x1bf)][_0x300425(0x1c3)]('nav', {
            'nav': _0x55af70,
            'secure': _0x55af70['secure']
        }, !![])['returns']('absolute\x20nav\x20url'), getUrl(_0x55af70, !![])[_0x300425(0x1c6)]['equal'](_0x300425(0x1ee));
    }), it(_0x26cc90(0x1ef), function () {
        const _0x3b1a07 = _0x26cc90, _0x4124f4 = { 'relativeUrl': _0x3b1a07(0x1d8) };
        urlUtils['urlFor'][_0x3b1a07(0x1c3)](_0x4124f4, {}, undefined)[_0x3b1a07(0x1c4)](_0x4124f4['relativeUrl']), getUrl(_0x4124f4)[_0x3b1a07(0x1c6)][_0x3b1a07(0x1c7)](_0x3b1a07(0x1f0)), urlService[_0x3b1a07(0x1be)][_0x3b1a07(0x1f1)][_0x3b1a07(0x1c6)]['be'][_0x3b1a07(0x1db)]();
    });
});
