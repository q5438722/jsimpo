const _0x5875 = [
    'absolute\x20secure\x20author\x20url',
    'should\x20return\x20url\x20for\x20a\x20nav',
    'About\x20Me',
    '/about-me/',
    'nav\x20url',
    'equal',
    'nav',
    'absolute\x20nav\x20url',
    '/*/amp/',
    '/*/',
    '13UHpBbm',
    '6451dMFGXr',
    '1029226wAeekv',
    '19494zTSDTm',
    '47AIfUYg',
    '638309cTNsse',
    '940222iRafjt',
    '205176FYMoFZ',
    '245935mVdWde',
    'should',
    '../../../core/shared/url-utils',
    '../../../core/frontend/services/url',
    'getUrl',
    'getUrlByResourceId',
    'stub',
    'urlFor',
    'restore',
    'should\x20return\x20url\x20for\x20a\x20post',
    'createPost',
    'withArgs',
    'post\x20url',
    'preview\x20url:\x20drafts/scheduled\x20posts',
    'not\x20absolute,\x20not\x20secure',
    'DataGenerator',
    'forKnex',
    'draft',
    'returns',
    '/404/',
    '/p/',
    'uuid',
    'relative',
    'calledOnce',
    'eql',
    'absolute,\x20not\x20secure',
    'absolute',
    'true',
    'absolute,\x20secure',
    'secure',
    'absolute\x20secure',
    'should\x20return\x20absolute\x20url\x20for\x20a\x20post',
    'absolute\x20post\x20url',
    'should\x20return\x20absolute\x20url\x20for\x20a\x20post\x20and\x20remove\x20/amp/\x20in\x20url',
    'absolute/*/amp/',
    'absolute/*/',
    'false',
    'should\x20return\x20url\x20for\x20a\x20tag',
    'createTag',
    'parent',
    'tag\x20url',
    'should\x20return\x20secure\x20url\x20for\x20a\x20tag',
    'secure\x20tag\x20url',
    'should\x20return\x20url\x20for\x20a\x20author',
    'createUser',
    'author\x20url'
];
function _0x272b(_0x52b4ed, _0x34da6b) {
    return _0x272b = function (_0x587574, _0x272b28) {
        _0x587574 = _0x587574 - 0x10d;
        let _0x4be025 = _0x5875[_0x587574];
        return _0x4be025;
    }, _0x272b(_0x52b4ed, _0x34da6b);
}
const _0x18931a = _0x272b;
(function (_0x1cbd49, _0xebc153) {
    const _0x1f4091 = _0x272b;
    while (!![]) {
        try {
            const _0x4051c1 = parseInt(_0x1f4091(0x10d)) * parseInt(_0x1f4091(0x10e)) + parseInt(_0x1f4091(0x10f)) + parseInt(_0x1f4091(0x110)) * -parseInt(_0x1f4091(0x111)) + -parseInt(_0x1f4091(0x112)) + parseInt(_0x1f4091(0x113)) + -parseInt(_0x1f4091(0x114)) + parseInt(_0x1f4091(0x115));
            if (_0x4051c1 === _0xebc153)
                break;
            else
                _0x1cbd49['push'](_0x1cbd49['shift']());
        } catch (_0x5ec8a5) {
            _0x1cbd49['push'](_0x1cbd49['shift']());
        }
    }
}(_0x5875, 0x83b97));
const should = require(_0x18931a(0x116)), sinon = require('sinon'), urlUtils = require(_0x18931a(0x117)), urlService = require(_0x18931a(0x118)), getUrl = require('../../../core/frontend/meta/url'), testUtils = require('../../utils');
describe(_0x18931a(0x119), function () {
    const _0x183640 = _0x18931a;
    beforeEach(function () {
        const _0x3059d3 = _0x272b;
        sinon['stub'](urlService, _0x3059d3(0x11a)), sinon[_0x3059d3(0x11b)](urlUtils, _0x3059d3(0x11c));
    }), afterEach(function () {
        const _0x2923f1 = _0x272b;
        sinon[_0x2923f1(0x11d)]();
    }), it(_0x183640(0x11e), function () {
        const _0x29ad76 = _0x183640, _0x159372 = testUtils['DataGenerator']['forKnex'][_0x29ad76(0x11f)]();
        urlService[_0x29ad76(0x11a)][_0x29ad76(0x120)](_0x159372['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns'](_0x29ad76(0x121)), getUrl(_0x159372)[_0x29ad76(0x116)]['eql'](_0x29ad76(0x121));
    }), describe(_0x183640(0x122), function () {
        const _0x4d66b7 = _0x183640;
        it(_0x4d66b7(0x123), function () {
            const _0x44fd7b = _0x4d66b7, _0x2b5d47 = testUtils[_0x44fd7b(0x124)][_0x44fd7b(0x125)][_0x44fd7b(0x11f)]({ 'status': _0x44fd7b(0x126) });
            urlService[_0x44fd7b(0x11a)][_0x44fd7b(0x120)](_0x2b5d47['id'])[_0x44fd7b(0x127)](_0x44fd7b(0x128)), urlUtils[_0x44fd7b(0x11c)]['withArgs']({
                'relativeUrl': _0x44fd7b(0x129) + _0x2b5d47[_0x44fd7b(0x12a)] + '/',
                'secure': undefined
            }, null, undefined)[_0x44fd7b(0x127)](_0x44fd7b(0x12b));
            let _0x16a25 = getUrl(_0x2b5d47);
            urlService['getUrlByResourceId'][_0x44fd7b(0x12c)][_0x44fd7b(0x116)]['be']['true'](), urlUtils[_0x44fd7b(0x11c)]['withArgs']({
                'relativeUrl': _0x44fd7b(0x129) + _0x2b5d47[_0x44fd7b(0x12a)] + '/',
                'secure': undefined
            }, null, undefined)[_0x44fd7b(0x12c)][_0x44fd7b(0x116)]['be']['true'](), _0x16a25[_0x44fd7b(0x116)][_0x44fd7b(0x12d)](_0x44fd7b(0x12b));
        }), it(_0x4d66b7(0x12e), function () {
            const _0x1ebc20 = _0x4d66b7, _0x3cb695 = testUtils[_0x1ebc20(0x124)][_0x1ebc20(0x125)]['createPost']({ 'status': _0x1ebc20(0x126) });
            urlService[_0x1ebc20(0x11a)][_0x1ebc20(0x120)](_0x3cb695['id'])[_0x1ebc20(0x127)]('/404/'), urlUtils['urlFor'][_0x1ebc20(0x120)]({
                'relativeUrl': _0x1ebc20(0x129) + _0x3cb695[_0x1ebc20(0x12a)] + '/',
                'secure': undefined
            }, null, !![])[_0x1ebc20(0x127)](_0x1ebc20(0x12f));
            let _0x44d3fd = getUrl(_0x3cb695, !![]);
            urlService['getUrlByResourceId']['calledOnce'][_0x1ebc20(0x116)]['be']['true'](), urlUtils[_0x1ebc20(0x11c)][_0x1ebc20(0x120)]({
                'relativeUrl': _0x1ebc20(0x129) + _0x3cb695['uuid'] + '/',
                'secure': undefined
            }, null, !![])[_0x1ebc20(0x12c)]['should']['be'][_0x1ebc20(0x130)](), _0x44d3fd['should']['eql'](_0x1ebc20(0x12f));
        }), it(_0x4d66b7(0x131), function () {
            const _0x443ffe = _0x4d66b7, _0x4732cb = testUtils[_0x443ffe(0x124)][_0x443ffe(0x125)][_0x443ffe(0x11f)]({ 'status': _0x443ffe(0x126) });
            _0x4732cb[_0x443ffe(0x132)] = !![], urlService[_0x443ffe(0x11a)][_0x443ffe(0x120)](_0x4732cb['id'])[_0x443ffe(0x127)](_0x443ffe(0x128)), urlUtils['urlFor'][_0x443ffe(0x120)]({
                'relativeUrl': _0x443ffe(0x129) + _0x4732cb['uuid'] + '/',
                'secure': !![]
            }, null, !![])[_0x443ffe(0x127)]('absolute\x20secure');
            let _0x20331a = getUrl(_0x4732cb, !![]);
            urlService['getUrlByResourceId']['calledOnce'][_0x443ffe(0x116)]['be'][_0x443ffe(0x130)](), urlUtils[_0x443ffe(0x11c)][_0x443ffe(0x120)]({
                'relativeUrl': '/p/' + _0x4732cb['uuid'] + '/',
                'secure': !![]
            }, null, !![])['calledOnce'][_0x443ffe(0x116)]['be']['true'](), _0x20331a[_0x443ffe(0x116)][_0x443ffe(0x12d)](_0x443ffe(0x133));
        });
    }), it(_0x183640(0x134), function () {
        const _0x3c802a = _0x183640, _0x192ac2 = testUtils[_0x3c802a(0x124)][_0x3c802a(0x125)][_0x3c802a(0x11f)]();
        urlService['getUrlByResourceId'][_0x3c802a(0x120)](_0x192ac2['id'], {
            'absolute': !![],
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns']('absolute\x20post\x20url'), getUrl(_0x192ac2, !![])[_0x3c802a(0x116)][_0x3c802a(0x12d)](_0x3c802a(0x135));
    }), it(_0x183640(0x136), function () {
        const _0x3b0b79 = _0x183640, _0x551484 = { 'relativeUrl': '/*/amp/' };
        urlUtils[_0x3b0b79(0x11c)][_0x3b0b79(0x120)](_0x551484, {}, !![])['returns'](_0x3b0b79(0x137)), getUrl(_0x551484, !![])[_0x3b0b79(0x116)][_0x3b0b79(0x12d)](_0x3b0b79(0x138)), urlService[_0x3b0b79(0x11a)]['called']['should']['be'][_0x3b0b79(0x139)]();
    }), it(_0x183640(0x13a), function () {
        const _0x184493 = _0x183640, _0x121f6a = testUtils['DataGenerator'][_0x184493(0x125)][_0x184493(0x13b)]();
        _0x121f6a[_0x184493(0x13c)] = null, urlService['getUrlByResourceId'][_0x184493(0x120)](_0x121f6a['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x184493(0x127)](_0x184493(0x13d)), getUrl(_0x121f6a)[_0x184493(0x116)][_0x184493(0x12d)](_0x184493(0x13d));
    }), it(_0x183640(0x13e), function () {
        const _0x522929 = _0x183640, _0x289954 = testUtils[_0x522929(0x124)][_0x522929(0x125)]['createTag']();
        _0x289954[_0x522929(0x13c)] = null, _0x289954['secure'] = !![], urlService[_0x522929(0x11a)][_0x522929(0x120)](_0x289954['id'], {
            'absolute': undefined,
            'secure': !![],
            'withSubdirectory': !![]
        })[_0x522929(0x127)](_0x522929(0x13f)), getUrl(_0x289954)['should'][_0x522929(0x12d)]('secure\x20tag\x20url');
    }), it(_0x183640(0x140), function () {
        const _0x46fccd = _0x183640, _0x5f6bf3 = testUtils['DataGenerator'][_0x46fccd(0x125)][_0x46fccd(0x141)]();
        urlService['getUrlByResourceId'][_0x46fccd(0x120)](_0x5f6bf3['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x46fccd(0x127)](_0x46fccd(0x142)), getUrl(_0x5f6bf3)[_0x46fccd(0x116)][_0x46fccd(0x12d)]('author\x20url');
    }), it('should\x20return\x20secure\x20absolute\x20url\x20for\x20a\x20author', function () {
        const _0x1fa9b6 = _0x183640, _0x218e1b = testUtils['DataGenerator'][_0x1fa9b6(0x125)][_0x1fa9b6(0x141)]();
        _0x218e1b[_0x1fa9b6(0x132)] = !![], urlService[_0x1fa9b6(0x11a)][_0x1fa9b6(0x120)](_0x218e1b['id'], {
            'absolute': !![],
            'secure': !![],
            'withSubdirectory': !![]
        })[_0x1fa9b6(0x127)]('absolute\x20secure\x20author\x20url'), getUrl(_0x218e1b, !![])[_0x1fa9b6(0x116)]['eql'](_0x1fa9b6(0x143));
    }), it(_0x183640(0x144), function () {
        const _0x347692 = _0x183640, _0x537004 = {
                'label': _0x347692(0x145),
                'url': _0x347692(0x146),
                'slug': 'about-me',
                'current': !![]
            };
        urlUtils[_0x347692(0x11c)][_0x347692(0x120)]('nav', {
            'nav': _0x537004,
            'secure': _0x537004[_0x347692(0x132)]
        }, undefined)[_0x347692(0x127)](_0x347692(0x147)), getUrl(_0x537004)[_0x347692(0x116)][_0x347692(0x148)](_0x347692(0x147));
    }), it('should\x20return\x20absolute\x20url\x20for\x20a\x20nav', function () {
        const _0x229e48 = _0x183640, _0x2c69e9 = {
                'label': _0x229e48(0x145),
                'url': '/about-me/',
                'slug': 'about-me',
                'current': !![]
            };
        urlUtils[_0x229e48(0x11c)][_0x229e48(0x120)](_0x229e48(0x149), {
            'nav': _0x2c69e9,
            'secure': _0x2c69e9[_0x229e48(0x132)]
        }, !![])['returns'](_0x229e48(0x14a)), getUrl(_0x2c69e9, !![])[_0x229e48(0x116)][_0x229e48(0x148)]('absolute\x20nav\x20url');
    }), it('should\x20return\x20`relativeUrl`\x20and\x20remove\x20/amp/\x20in\x20url', function () {
        const _0x1d8dbd = _0x183640, _0x5f0b7c = { 'relativeUrl': _0x1d8dbd(0x14b) };
        urlUtils['urlFor'][_0x1d8dbd(0x120)](_0x5f0b7c, {}, undefined)[_0x1d8dbd(0x127)](_0x5f0b7c['relativeUrl']), getUrl(_0x5f0b7c)[_0x1d8dbd(0x116)]['eql'](_0x1d8dbd(0x14c)), urlService[_0x1d8dbd(0x11a)]['called'][_0x1d8dbd(0x116)]['be'][_0x1d8dbd(0x139)]();
    });
});
