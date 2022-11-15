const should = require('should'), sinon = require('sinon'), urlUtils = require('../../../core/shared/url-utils'), urlService = require('../../../core/frontend/services/url'), getUrl = require('../../../core/frontend/meta/url'), testUtils = require('../../utils');
describe('getUrl', function () {
    beforeEach(function () {
        sinon['stub'](urlService, 'getUrlByResourceId'), sinon['stub'](urlUtils, 'urlFor');
    }), afterEach(function () {
        sinon['restore']();
    }), it('should\x20return\x20url\x20for\x20a\x20post', function () {
        const _0x25497e = testUtils['DataGenerator']['forKnex']['createPost']();
        urlService['getUrlByResourceId']['withArgs'](_0x25497e['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns']('post\x20url'), getUrl(_0x25497e)['should']['eql']('post\x20url');
    }), describe('preview\x20url:\x20drafts/scheduled\x20posts', function () {
        it('not\x20absolute,\x20not\x20secure', function () {
            const _0x3f02ba = testUtils['DataGenerator']['forKnex']['createPost']({ 'status': 'draft' });
            urlService['getUrlByResourceId']['withArgs'](_0x3f02ba['id'])['returns']('/404/'), urlUtils['urlFor']['withArgs']({
                'relativeUrl': '/p/' + _0x3f02ba['uuid'] + '/',
                'secure': undefined
            }, null, undefined)['returns']('relative');
            let _0x5ed6ac = getUrl(_0x3f02ba);
            urlService['getUrlByResourceId']['calledOnce']['should']['be']['true'](), urlUtils['urlFor']['withArgs']({
                'relativeUrl': '/p/' + _0x3f02ba['uuid'] + '/',
                'secure': undefined
            }, null, undefined)['calledOnce']['should']['be']['true'](), _0x5ed6ac['should']['eql']('relative');
        }), it('absolute,\x20not\x20secure', function () {
            const _0x381a67 = testUtils['DataGenerator']['forKnex']['createPost']({ 'status': 'draft' });
            urlService['getUrlByResourceId']['withArgs'](_0x381a67['id'])['returns']('/404/'), urlUtils['urlFor']['withArgs']({
                'relativeUrl': '/p/' + _0x381a67['uuid'] + '/',
                'secure': undefined
            }, null, !![])['returns']('absolute');
            let _0xb38223 = getUrl(_0x381a67, !![]);
            urlService['getUrlByResourceId']['calledOnce']['should']['be']['true'](), urlUtils['urlFor']['withArgs']({
                'relativeUrl': '/p/' + _0x381a67['uuid'] + '/',
                'secure': undefined
            }, null, !![])['calledOnce']['should']['be']['true'](), _0xb38223['should']['eql']('absolute');
        }), it('absolute,\x20secure', function () {
            const _0x4244de = testUtils['DataGenerator']['forKnex']['createPost']({ 'status': 'draft' });
            _0x4244de['secure'] = !![], urlService['getUrlByResourceId']['withArgs'](_0x4244de['id'])['returns']('/404/'), urlUtils['urlFor']['withArgs']({
                'relativeUrl': '/p/' + _0x4244de['uuid'] + '/',
                'secure': !![]
            }, null, !![])['returns']('absolute\x20secure');
            let _0x450294 = getUrl(_0x4244de, !![]);
            urlService['getUrlByResourceId']['calledOnce']['should']['be']['true'](), urlUtils['urlFor']['withArgs']({
                'relativeUrl': '/p/' + _0x4244de['uuid'] + '/',
                'secure': !![]
            }, null, !![])['calledOnce']['should']['be']['true'](), _0x450294['should']['eql']('absolute\x20secure');
        });
    }), it('should\x20return\x20absolute\x20url\x20for\x20a\x20post', function () {
        const _0x338adf = testUtils['DataGenerator']['forKnex']['createPost']();
        urlService['getUrlByResourceId']['withArgs'](_0x338adf['id'], {
            'absolute': !![],
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns']('absolute\x20post\x20url'), getUrl(_0x338adf, !![])['should']['eql']('absolute\x20post\x20url');
    }), it('should\x20return\x20absolute\x20url\x20for\x20a\x20post\x20and\x20remove\x20/amp/\x20in\x20url', function () {
        const _0x1e2342 = { 'relativeUrl': '/*/amp/' };
        urlUtils['urlFor']['withArgs'](_0x1e2342, {}, !![])['returns']('absolute/*/amp/'), getUrl(_0x1e2342, !![])['should']['eql']('absolute/*/'), urlService['getUrlByResourceId']['called']['should']['be']['false']();
    }), it('should\x20return\x20url\x20for\x20a\x20tag', function () {
        const _0x22924f = testUtils['DataGenerator']['forKnex']['createTag']();
        _0x22924f['parent'] = null, urlService['getUrlByResourceId']['withArgs'](_0x22924f['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns']('tag\x20url'), getUrl(_0x22924f)['should']['eql']('tag\x20url');
    }), it('should\x20return\x20secure\x20url\x20for\x20a\x20tag', function () {
        const _0x57cb09 = testUtils['DataGenerator']['forKnex']['createTag']();
        _0x57cb09['parent'] = null, _0x57cb09['secure'] = !![], urlService['getUrlByResourceId']['withArgs'](_0x57cb09['id'], {
            'absolute': undefined,
            'secure': !![],
            'withSubdirectory': !![]
        })['returns']('secure\x20tag\x20url'), getUrl(_0x57cb09)['should']['eql']('secure\x20tag\x20url');
    }), it('should\x20return\x20url\x20for\x20a\x20author', function () {
        const _0xe94509 = testUtils['DataGenerator']['forKnex']['createUser']();
        urlService['getUrlByResourceId']['withArgs'](_0xe94509['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns']('author\x20url'), getUrl(_0xe94509)['should']['eql']('author\x20url');
    }), it('should\x20return\x20secure\x20absolute\x20url\x20for\x20a\x20author', function () {
        const _0x1e1a37 = testUtils['DataGenerator']['forKnex']['createUser']();
        _0x1e1a37['secure'] = !![], urlService['getUrlByResourceId']['withArgs'](_0x1e1a37['id'], {
            'absolute': !![],
            'secure': !![],
            'withSubdirectory': !![]
        })['returns']('absolute\x20secure\x20author\x20url'), getUrl(_0x1e1a37, !![])['should']['eql']('absolute\x20secure\x20author\x20url');
    }), it('should\x20return\x20url\x20for\x20a\x20nav', function () {
        const _0x502419 = {
            'label': 'About\x20Me',
            'url': '/about-me/',
            'slug': 'about-me',
            'current': !![]
        };
        urlUtils['urlFor']['withArgs']('nav', {
            'nav': _0x502419,
            'secure': _0x502419['secure']
        }, undefined)['returns']('nav\x20url'), getUrl(_0x502419)['should']['equal']('nav\x20url');
    }), it('should\x20return\x20absolute\x20url\x20for\x20a\x20nav', function () {
        const _0x4f60e2 = {
            'label': 'About\x20Me',
            'url': '/about-me/',
            'slug': 'about-me',
            'current': !![]
        };
        urlUtils['urlFor']['withArgs']('nav', {
            'nav': _0x4f60e2,
            'secure': _0x4f60e2['secure']
        }, !![])['returns']('absolute\x20nav\x20url'), getUrl(_0x4f60e2, !![])['should']['equal']('absolute\x20nav\x20url');
    }), it('should\x20return\x20`relativeUrl`\x20and\x20remove\x20/amp/\x20in\x20url', function () {
        const _0x380177 = { 'relativeUrl': '/*/amp/' };
        urlUtils['urlFor']['withArgs'](_0x380177, {}, undefined)['returns'](_0x380177['relativeUrl']), getUrl(_0x380177)['should']['eql']('/*/'), urlService['getUrlByResourceId']['called']['should']['be']['false']();
    });
});
