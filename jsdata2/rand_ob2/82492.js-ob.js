const _0x1c7f = [
    'spy',
    'call',
    'published',
    'post2',
    'current',
    '/current/',
    'calledOnce',
    'should',
    'true',
    'false',
    'args',
    'have',
    'lengthOf',
    'firstCall',
    'properties',
    'title',
    'Object',
    'and',
    'property',
    'data',
    'include',
    'eql',
    'author,authors,tags',
    'for\x20valid\x20post\x20with\x20no\x20next\x20post',
    'content',
    'then',
    'called',
    'slug',
    'catch',
    'for\x20invalid\x20post\x20data',
    'resolve',
    'shows\x20\x27else\x27\x20template',
    'for\x20page',
    'page',
    '/previous/',
    'post\x201',
    'for\x20unpublished\x20post',
    'preview',
    '/next/',
    'draft',
    'shows\x20\x27if\x27\x20template\x20with\x20prev\x20post\x20data\x20with\x20primary_tag\x20set',
    'primary_tag',
    'test',
    'match',
    'hans',
    'shows\x20\x27if\x27\x20template\x20with\x20prev\x20post\x20data\x20with\x20author\x20set',
    'author',
    'author-name',
    'shows\x20\x27if\x27\x20template\x20with\x20prev\x20post\x20data\x20&\x20ignores\x20in\x20author\x20if\x20author\x20isnt\x20present',
    'shows\x20\x27if\x27\x20template\x20with\x20prev\x20post\x20data\x20&\x20ignores\x20unknown\x20in\x20value',
    'not',
    'general\x20error\x20handling',
    'reject',
    'NotFoundError',
    'error',
    'should\x20show\x20warning\x20for\x20call\x20without\x20any\x20options',
    '338358gMFiwc',
    '1SURblF',
    '20003VyUqbt',
    '6QUQfXt',
    '520046JirIzY',
    '266742urmFdv',
    '587187qjfhOF',
    '453829XFwbyj',
    '1iAQUVf',
    '10370OZLByv',
    '@tryghost/errors',
    'sinon',
    'bluebird',
    '../../utils/fixtures/data-generator',
    'markdownToMobiledoc',
    '../../../core/server/api',
    'next_post',
    '{{next_post}}\x20helper',
    'canary',
    'post',
    'postsPublic',
    'get',
    'restore',
    'stub',
    'callsFake',
    'filter',
    'indexOf',
    'published_at:>',
    'post\x203'
];
const _0x22a719 = _0x343a;
(function (_0x1f11b3, _0x45e2e1) {
    const _0x11af5a = _0x343a;
    while (!![]) {
        try {
            const _0x8c73d4 = -parseInt(_0x11af5a(0x73)) * parseInt(_0x11af5a(0x74)) + -parseInt(_0x11af5a(0x75)) * parseInt(_0x11af5a(0x76)) + -parseInt(_0x11af5a(0x77)) + parseInt(_0x11af5a(0x78)) + parseInt(_0x11af5a(0x79)) + parseInt(_0x11af5a(0x7a)) * parseInt(_0x11af5a(0x7b)) + parseInt(_0x11af5a(0x7c));
            if (_0x8c73d4 === _0x45e2e1)
                break;
            else
                _0x1f11b3['push'](_0x1f11b3['shift']());
        } catch (_0x57170b) {
            _0x1f11b3['push'](_0x1f11b3['shift']());
        }
    }
}(_0x1c7f, 0x52efa));
function _0x343a(_0x4f9700, _0x4daeb7) {
    return _0x343a = function (_0x1c7f0c, _0x343a62) {
        _0x1c7f0c = _0x1c7f0c - 0x73;
        let _0x36da15 = _0x1c7f[_0x1c7f0c];
        return _0x36da15;
    }, _0x343a(_0x4f9700, _0x4daeb7);
}
const errors = require(_0x22a719(0x7d)), sinon = require(_0x22a719(0x7e)), Promise = require(_0x22a719(0x7f)), markdownToMobiledoc = require(_0x22a719(0x80))[_0x22a719(0x81)], helpers = require('../../../core/frontend/helpers'), api = require(_0x22a719(0x82));
helpers[_0x22a719(0x83)] = helpers['prev_post'], describe(_0x22a719(0x84), function () {
    const _0xc752bb = _0x22a719, _0x27cc85 = _0xc752bb(0x85);
    let _0x3c4afa, _0x15921a;
    beforeEach(function () {
        const _0x2bea4b = _0xc752bb;
        _0x3c4afa = {
            'root': {
                '_locals': { 'apiVersion': _0x27cc85 },
                'context': [_0x2bea4b(0x86)]
            }
        }, sinon['stub'](api, _0x2bea4b(0x87))[_0x2bea4b(0x88)](() => {
            return { 'browse': _0x15921a };
        });
    }), afterEach(function () {
        const _0x5f3411 = _0xc752bb;
        sinon[_0x5f3411(0x89)]();
    }), describe('with\x20valid\x20post\x20data\x20-\x20', function () {
        beforeEach(function () {
            const _0x500923 = _0x343a;
            _0x15921a = sinon[_0x500923(0x8a)]()[_0x500923(0x8b)](function (_0x28e3a1) {
                const _0x44ac12 = _0x500923;
                if (_0x28e3a1[_0x44ac12(0x8c)][_0x44ac12(0x8d)](_0x44ac12(0x8e)) > -0x1)
                    return Promise['resolve']({
                        'posts': [{
                                'slug': '/next/',
                                'title': _0x44ac12(0x8f)
                            }]
                    });
            });
        }), it('shows\x20\x27if\x27\x20template\x20with\x20next\x20post\x20data', function (_0x198b34) {
            const _0x2fc8dc = _0x343a, _0xa0ccce = sinon['spy'](), _0x106539 = sinon[_0x2fc8dc(0x90)](), _0x55ab4d = {
                    'name': _0x2fc8dc(0x83),
                    'data': _0x3c4afa,
                    'fn': _0xa0ccce,
                    'inverse': _0x106539
                };
            helpers[_0x2fc8dc(0x83)][_0x2fc8dc(0x91)]({
                'html': 'content',
                'status': _0x2fc8dc(0x92),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x2fc8dc(0x93),
                'slug': _0x2fc8dc(0x94),
                'published_at': new Date(0x0),
                'url': _0x2fc8dc(0x95)
            }, _0x55ab4d)['then'](function () {
                const _0x184ed3 = _0x2fc8dc;
                _0xa0ccce[_0x184ed3(0x96)][_0x184ed3(0x97)]['be'][_0x184ed3(0x98)](), _0x106539['calledOnce'][_0x184ed3(0x97)]['be'][_0x184ed3(0x99)](), _0xa0ccce['firstCall'][_0x184ed3(0x9a)][_0x184ed3(0x97)][_0x184ed3(0x9b)][_0x184ed3(0x9c)](0x2), _0xa0ccce[_0x184ed3(0x9d)]['args'][0x0]['should'][_0x184ed3(0x9b)][_0x184ed3(0x9e)]('slug', _0x184ed3(0x9f)), _0xa0ccce['firstCall']['args'][0x1][_0x184ed3(0x97)]['be']['an'][_0x184ed3(0xa0)]()[_0x184ed3(0xa1)][_0x184ed3(0x9b)][_0x184ed3(0xa2)](_0x184ed3(0xa3)), _0x15921a[_0x184ed3(0x96)][_0x184ed3(0x97)]['be'][_0x184ed3(0x98)](), _0x15921a[_0x184ed3(0x9d)]['args'][0x0][_0x184ed3(0xa4)][_0x184ed3(0x97)][_0x184ed3(0xa5)](_0x184ed3(0xa6)), _0x198b34();
            })['catch'](_0x198b34);
        });
    }), describe(_0xc752bb(0xa7), function () {
        beforeEach(function () {
            const _0x595cb8 = _0x343a;
            _0x15921a = sinon[_0x595cb8(0x8a)]()['callsFake'](function (_0x1f8753) {
                const _0x27b7a4 = _0x595cb8;
                if (_0x1f8753[_0x27b7a4(0x8c)]['indexOf'](_0x27b7a4(0x8e)) > -0x1)
                    return Promise['resolve']({ 'posts': [] });
            });
        }), it('shows\x20\x27else\x27\x20template', function (_0x14ddcd) {
            const _0x321a99 = _0x343a, _0x3fd98e = sinon[_0x321a99(0x90)](), _0x5299c9 = sinon[_0x321a99(0x90)](), _0x39684e = {
                    'name': 'next_post',
                    'data': _0x3c4afa,
                    'fn': _0x3fd98e,
                    'inverse': _0x5299c9
                };
            helpers[_0x321a99(0x83)][_0x321a99(0x91)]({
                'html': _0x321a99(0xa8),
                'status': _0x321a99(0x92),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x321a99(0x93),
                'slug': _0x321a99(0x94),
                'published_at': new Date(0x0),
                'url': _0x321a99(0x95)
            }, _0x39684e)[_0x321a99(0xa9)](function () {
                const _0xd0efb9 = _0x321a99;
                _0x3fd98e[_0xd0efb9(0xaa)][_0xd0efb9(0x97)]['be']['false'](), _0x5299c9[_0xd0efb9(0xaa)][_0xd0efb9(0x97)]['be'][_0xd0efb9(0x98)](), _0x5299c9[_0xd0efb9(0x9d)][_0xd0efb9(0x9a)][_0xd0efb9(0x97)][_0xd0efb9(0x9b)][_0xd0efb9(0x9c)](0x2), _0x5299c9[_0xd0efb9(0x9d)][_0xd0efb9(0x9a)][0x0][_0xd0efb9(0x97)][_0xd0efb9(0x9b)][_0xd0efb9(0x9e)](_0xd0efb9(0xab), _0xd0efb9(0x9f)), _0x5299c9[_0xd0efb9(0x9d)][_0xd0efb9(0x9a)][0x1][_0xd0efb9(0x97)]['be']['an'][_0xd0efb9(0xa0)]()[_0xd0efb9(0xa1)][_0xd0efb9(0x9b)][_0xd0efb9(0xa2)](_0xd0efb9(0xa3)), _0x14ddcd();
            })[_0x321a99(0xac)](_0x14ddcd);
        });
    }), describe(_0xc752bb(0xad), function () {
        const _0x434225 = _0xc752bb;
        beforeEach(function () {
            const _0x571659 = _0x343a;
            _0x15921a = sinon['stub']()[_0x571659(0x8b)](function (_0x2ed9c1) {
                const _0x468204 = _0x571659;
                if (_0x2ed9c1[_0x468204(0x8c)][_0x468204(0x8d)](_0x468204(0x8e)) > -0x1)
                    return Promise[_0x468204(0xae)]({});
            });
        }), it(_0x434225(0xaf), function (_0xc6f8ff) {
            const _0x3f708d = _0x434225, _0x520e9b = sinon['spy'](), _0x846c03 = sinon[_0x3f708d(0x90)](), _0x10508e = {
                    'name': _0x3f708d(0x83),
                    'data': _0x3c4afa,
                    'fn': _0x520e9b,
                    'inverse': _0x846c03
                };
            helpers[_0x3f708d(0x83)]['call']({}, _0x10508e)[_0x3f708d(0xa9)](function () {
                const _0x1a4e3 = _0x3f708d;
                _0x520e9b[_0x1a4e3(0xaa)][_0x1a4e3(0x97)]['be'][_0x1a4e3(0x99)](), _0x846c03[_0x1a4e3(0xaa)][_0x1a4e3(0x97)]['be']['true'](), _0x15921a['called'][_0x1a4e3(0x97)]['be'][_0x1a4e3(0x99)](), _0xc6f8ff();
            })[_0x3f708d(0xac)](_0xc6f8ff);
        });
    }), describe(_0xc752bb(0xb0), function () {
        const _0x43bcf7 = _0xc752bb;
        beforeEach(function () {
            const _0x13f856 = _0x343a;
            _0x3c4afa = {
                'root': {
                    '_locals': { 'apiVersion': _0x27cc85 },
                    'context': [_0x13f856(0xb1)]
                }
            }, _0x15921a = sinon[_0x13f856(0x8a)]()[_0x13f856(0x8b)](function (_0x13f6a0) {
                const _0x206e03 = _0x13f856;
                if (_0x13f6a0['filter'][_0x206e03(0x8d)](_0x206e03(0x8e)) > -0x1)
                    return Promise[_0x206e03(0xae)]({
                        'posts': [{
                                'slug': _0x206e03(0xb2),
                                'title': _0x206e03(0xb3)
                            }]
                    });
            });
        }), it(_0x43bcf7(0xaf), function (_0x36e7e1) {
            const _0x4b6ac7 = _0x43bcf7, _0x45413a = sinon[_0x4b6ac7(0x90)](), _0x41b030 = sinon[_0x4b6ac7(0x90)](), _0x269cfe = {
                    'name': _0x4b6ac7(0x83),
                    'data': _0x3c4afa,
                    'fn': _0x45413a,
                    'inverse': _0x41b030
                };
            helpers['next_post'][_0x4b6ac7(0x91)]({
                'html': _0x4b6ac7(0xa8),
                'status': _0x4b6ac7(0x92),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x4b6ac7(0x93),
                'slug': _0x4b6ac7(0x94),
                'published_at': new Date(0x0),
                'url': _0x4b6ac7(0x95),
                'page': !![]
            }, _0x269cfe)['then'](function () {
                const _0xfffe66 = _0x4b6ac7;
                _0x45413a['called'][_0xfffe66(0x97)]['be'][_0xfffe66(0x99)](), _0x41b030[_0xfffe66(0xaa)][_0xfffe66(0x97)]['be'][_0xfffe66(0x98)](), _0x36e7e1();
            })[_0x4b6ac7(0xac)](_0x36e7e1);
        });
    }), describe(_0xc752bb(0xb4), function () {
        const _0x1852bf = _0xc752bb;
        beforeEach(function () {
            const _0x141169 = _0x343a;
            _0x3c4afa = {
                'root': {
                    '_locals': { 'apiVersion': _0x27cc85 },
                    'context': [
                        _0x141169(0xb5),
                        _0x141169(0x86)
                    ]
                }
            }, _0x15921a = sinon['stub']()['callsFake'](function (_0x170366) {
                const _0x2018b0 = _0x141169;
                if (_0x170366[_0x2018b0(0x8c)]['indexOf'](_0x2018b0(0x8e)) > -0x1)
                    return Promise[_0x2018b0(0xae)]({
                        'posts': [{
                                'slug': _0x2018b0(0xb6),
                                'title': _0x2018b0(0x8f)
                            }]
                    });
            });
        }), it(_0x1852bf(0xaf), function (_0x40bef5) {
            const _0x2ece9d = _0x1852bf, _0x546190 = sinon[_0x2ece9d(0x90)](), _0x349eab = sinon['spy'](), _0x41cffb = {
                    'name': _0x2ece9d(0x83),
                    'data': _0x3c4afa,
                    'fn': _0x546190,
                    'inverse': _0x349eab
                };
            helpers[_0x2ece9d(0x83)][_0x2ece9d(0x91)]({
                'html': _0x2ece9d(0xa8),
                'status': _0x2ece9d(0xb7),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x2ece9d(0x93),
                'slug': 'current',
                'created_at': new Date(0x0),
                'url': _0x2ece9d(0x95)
            }, _0x41cffb)['then'](function () {
                const _0x2b21d2 = _0x2ece9d;
                _0x546190[_0x2b21d2(0xaa)][_0x2b21d2(0x97)]['be'][_0x2b21d2(0x99)](), _0x349eab[_0x2b21d2(0xaa)][_0x2b21d2(0x97)]['be'][_0x2b21d2(0x98)](), _0x40bef5();
            })['catch'](_0x40bef5);
        });
    }), describe('with\x20\x22in\x22\x20option', function () {
        const _0x22bda7 = _0xc752bb;
        beforeEach(function () {
            const _0x46c20a = _0x343a;
            _0x15921a = sinon[_0x46c20a(0x8a)]()[_0x46c20a(0x8b)](function (_0x264e09) {
                const _0x22382e = _0x46c20a;
                if (_0x264e09[_0x22382e(0x8c)][_0x22382e(0x8d)]('published_at:>') > -0x1)
                    return Promise[_0x22382e(0xae)]({
                        'posts': [{
                                'slug': '/next/',
                                'title': _0x22382e(0xb3)
                            }]
                    });
            });
        }), it(_0x22bda7(0xb8), function (_0x27aebd) {
            const _0x222304 = _0x22bda7, _0x5ec797 = sinon['spy'](), _0x7182de = sinon['spy'](), _0x3164eb = {
                    'name': _0x222304(0x83),
                    'data': _0x3c4afa,
                    'fn': _0x5ec797,
                    'inverse': _0x7182de,
                    'hash': { 'in': _0x222304(0xb9) }
                };
            helpers[_0x222304(0x83)][_0x222304(0x91)]({
                'html': _0x222304(0xa8),
                'status': _0x222304(0x92),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x222304(0x93),
                'slug': _0x222304(0x94),
                'published_at': new Date(0x0),
                'primary_tag': { 'slug': _0x222304(0xba) },
                'url': _0x222304(0x95)
            }, _0x3164eb)['then'](function () {
                const _0x42c459 = _0x222304;
                _0x5ec797[_0x42c459(0x96)]['should']['be']['true'](), _0x7182de[_0x42c459(0x96)][_0x42c459(0x97)]['be']['false'](), _0x5ec797['firstCall'][_0x42c459(0x9a)][_0x42c459(0x97)][_0x42c459(0x9b)][_0x42c459(0x9c)](0x2), _0x5ec797[_0x42c459(0x9d)][_0x42c459(0x9a)][0x0][_0x42c459(0x97)][_0x42c459(0x9b)][_0x42c459(0x9e)](_0x42c459(0xab), _0x42c459(0x9f)), _0x5ec797[_0x42c459(0x9d)][_0x42c459(0x9a)][0x1][_0x42c459(0x97)]['be']['an'][_0x42c459(0xa0)]()[_0x42c459(0xa1)]['have'][_0x42c459(0xa2)](_0x42c459(0xa3)), _0x15921a['calledOnce']['should']['be'][_0x42c459(0x98)](), _0x15921a[_0x42c459(0x9d)][_0x42c459(0x9a)][0x0]['include']['should'][_0x42c459(0xa5)](_0x42c459(0xa6)), _0x15921a['firstCall']['args'][0x0][_0x42c459(0x8c)][_0x42c459(0x97)][_0x42c459(0xbb)](/\+primary_tag:test/), _0x27aebd();
            })[_0x222304(0xac)](_0x27aebd);
        }), it('shows\x20\x27if\x27\x20template\x20with\x20prev\x20post\x20data\x20with\x20primary_author\x20set', function (_0x594a63) {
            const _0x409891 = _0x22bda7, _0x954ac9 = sinon['spy'](), _0xfe6733 = sinon[_0x409891(0x90)](), _0x3be8dd = {
                    'name': _0x409891(0x83),
                    'data': _0x3c4afa,
                    'fn': _0x954ac9,
                    'inverse': _0xfe6733,
                    'hash': { 'in': 'primary_author' }
                };
            helpers[_0x409891(0x83)][_0x409891(0x91)]({
                'html': _0x409891(0xa8),
                'status': _0x409891(0x92),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x409891(0x93),
                'slug': _0x409891(0x94),
                'published_at': new Date(0x0),
                'primary_author': { 'slug': _0x409891(0xbc) },
                'url': _0x409891(0x95)
            }, _0x3be8dd)[_0x409891(0xa9)](function () {
                const _0x40664a = _0x409891;
                _0x954ac9['calledOnce'][_0x40664a(0x97)]['be'][_0x40664a(0x98)](), _0xfe6733['calledOnce']['should']['be'][_0x40664a(0x99)](), _0x954ac9[_0x40664a(0x9d)][_0x40664a(0x9a)][_0x40664a(0x97)]['have'][_0x40664a(0x9c)](0x2), _0x954ac9[_0x40664a(0x9d)][_0x40664a(0x9a)][0x0][_0x40664a(0x97)][_0x40664a(0x9b)][_0x40664a(0x9e)](_0x40664a(0xab), _0x40664a(0x9f)), _0x954ac9['firstCall']['args'][0x1][_0x40664a(0x97)]['be']['an'][_0x40664a(0xa0)]()['and'][_0x40664a(0x9b)][_0x40664a(0xa2)](_0x40664a(0xa3)), _0x15921a['calledOnce'][_0x40664a(0x97)]['be'][_0x40664a(0x98)](), _0x15921a['firstCall']['args'][0x0][_0x40664a(0xa4)]['should'][_0x40664a(0xa5)](_0x40664a(0xa6)), _0x15921a['firstCall']['args'][0x0][_0x40664a(0x8c)][_0x40664a(0x97)][_0x40664a(0xbb)](/\+primary_author:hans/), _0x594a63();
            })[_0x409891(0xac)](_0x594a63);
        }), it(_0x22bda7(0xbd), function (_0x19b099) {
            const _0x58aa40 = _0x22bda7, _0x5e5319 = sinon[_0x58aa40(0x90)](), _0x3eaf35 = sinon[_0x58aa40(0x90)](), _0x5a5735 = {
                    'name': 'next_post',
                    'data': _0x3c4afa,
                    'fn': _0x5e5319,
                    'inverse': _0x3eaf35,
                    'hash': { 'in': _0x58aa40(0xbe) }
                };
            helpers[_0x58aa40(0x83)][_0x58aa40(0x91)]({
                'html': _0x58aa40(0xa8),
                'status': _0x58aa40(0x92),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x58aa40(0x93),
                'slug': 'current',
                'published_at': new Date(0x0),
                'author': { 'slug': _0x58aa40(0xbf) },
                'url': _0x58aa40(0x95)
            }, _0x5a5735)[_0x58aa40(0xa9)](function () {
                const _0x4f9c34 = _0x58aa40;
                _0x5e5319[_0x4f9c34(0x96)][_0x4f9c34(0x97)]['be']['true'](), _0x3eaf35[_0x4f9c34(0x96)][_0x4f9c34(0x97)]['be'][_0x4f9c34(0x99)](), _0x5e5319['firstCall'][_0x4f9c34(0x9a)][_0x4f9c34(0x97)][_0x4f9c34(0x9b)][_0x4f9c34(0x9c)](0x2), _0x5e5319['firstCall'][_0x4f9c34(0x9a)][0x0][_0x4f9c34(0x97)][_0x4f9c34(0x9b)][_0x4f9c34(0x9e)](_0x4f9c34(0xab), _0x4f9c34(0x9f)), _0x5e5319[_0x4f9c34(0x9d)][_0x4f9c34(0x9a)][0x1]['should']['be']['an'][_0x4f9c34(0xa0)]()[_0x4f9c34(0xa1)][_0x4f9c34(0x9b)]['property'](_0x4f9c34(0xa3)), _0x15921a[_0x4f9c34(0x96)][_0x4f9c34(0x97)]['be'][_0x4f9c34(0x98)](), _0x15921a['firstCall']['args'][0x0][_0x4f9c34(0xa4)][_0x4f9c34(0x97)]['eql'](_0x4f9c34(0xa6)), _0x15921a[_0x4f9c34(0x9d)][_0x4f9c34(0x9a)][0x0][_0x4f9c34(0x8c)][_0x4f9c34(0x97)]['match'](/\+author:author-name/), _0x19b099();
            })[_0x58aa40(0xac)](_0x19b099);
        }), it(_0x22bda7(0xc0), function (_0x5228a0) {
            const _0x4c96af = _0x22bda7, _0x3eef67 = sinon[_0x4c96af(0x90)](), _0x3eb50b = sinon[_0x4c96af(0x90)](), _0x5d34e6 = {
                    'name': _0x4c96af(0x83),
                    'data': _0x3c4afa,
                    'fn': _0x3eef67,
                    'inverse': _0x3eb50b,
                    'hash': { 'in': _0x4c96af(0xbe) }
                };
            helpers['next_post']['call']({
                'html': _0x4c96af(0xa8),
                'status': _0x4c96af(0x92),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': 'post2',
                'slug': _0x4c96af(0x94),
                'published_at': new Date(0x0),
                'url': '/current/'
            }, _0x5d34e6)[_0x4c96af(0xa9)](function () {
                const _0x484805 = _0x4c96af;
                _0x3eef67[_0x484805(0x96)][_0x484805(0x97)]['be'][_0x484805(0x98)](), _0x3eb50b[_0x484805(0x96)][_0x484805(0x97)]['be']['false'](), _0x3eef67['firstCall'][_0x484805(0x9a)][_0x484805(0x97)][_0x484805(0x9b)][_0x484805(0x9c)](0x2), _0x3eef67[_0x484805(0x9d)][_0x484805(0x9a)][0x0][_0x484805(0x97)][_0x484805(0x9b)][_0x484805(0x9e)](_0x484805(0xab), _0x484805(0x9f)), _0x3eef67[_0x484805(0x9d)]['args'][0x1][_0x484805(0x97)]['be']['an'][_0x484805(0xa0)]()['and']['have']['property'](_0x484805(0xa3)), _0x15921a[_0x484805(0x96)][_0x484805(0x97)]['be'][_0x484805(0x98)](), _0x15921a[_0x484805(0x9d)]['args'][0x0][_0x484805(0xa4)][_0x484805(0x97)][_0x484805(0xa5)]('author,authors,tags'), _0x15921a[_0x484805(0x9d)][_0x484805(0x9a)][0x0][_0x484805(0x8c)]['should']['not'][_0x484805(0xbb)](/\+author:/), _0x5228a0();
            })['catch'](_0x5228a0);
        }), it(_0x22bda7(0xc1), function (_0x5736c7) {
            const _0x1e380a = _0x22bda7, _0x4248df = sinon[_0x1e380a(0x90)](), _0x1bfdc9 = sinon[_0x1e380a(0x90)](), _0x1c943d = {
                    'name': _0x1e380a(0x83),
                    'data': _0x3c4afa,
                    'fn': _0x4248df,
                    'inverse': _0x1bfdc9,
                    'hash': { 'in': 'magic' }
                };
            helpers[_0x1e380a(0x83)][_0x1e380a(0x91)]({
                'html': _0x1e380a(0xa8),
                'status': _0x1e380a(0x92),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x1e380a(0x93),
                'slug': _0x1e380a(0x94),
                'published_at': new Date(0x0),
                'author': { 'slug': _0x1e380a(0xbf) },
                'url': _0x1e380a(0x95)
            }, _0x1c943d)[_0x1e380a(0xa9)](function () {
                const _0x369b6d = _0x1e380a;
                _0x4248df[_0x369b6d(0x96)][_0x369b6d(0x97)]['be'][_0x369b6d(0x98)](), _0x1bfdc9[_0x369b6d(0x96)][_0x369b6d(0x97)]['be'][_0x369b6d(0x99)](), _0x4248df[_0x369b6d(0x9d)][_0x369b6d(0x9a)][_0x369b6d(0x97)][_0x369b6d(0x9b)][_0x369b6d(0x9c)](0x2), _0x4248df['firstCall']['args'][0x0][_0x369b6d(0x97)][_0x369b6d(0x9b)]['properties']('slug', 'title'), _0x4248df[_0x369b6d(0x9d)]['args'][0x1]['should']['be']['an'][_0x369b6d(0xa0)]()[_0x369b6d(0xa1)]['have']['property'](_0x369b6d(0xa3)), _0x15921a[_0x369b6d(0x96)][_0x369b6d(0x97)]['be'][_0x369b6d(0x98)](), _0x15921a['firstCall'][_0x369b6d(0x9a)][0x0][_0x369b6d(0xa4)][_0x369b6d(0x97)]['eql']('author,authors,tags'), _0x15921a[_0x369b6d(0x9d)][_0x369b6d(0x9a)][0x0][_0x369b6d(0x8c)][_0x369b6d(0x97)][_0x369b6d(0xc2)]['match'](/\+magic/), _0x5736c7();
            })['catch'](_0x5736c7);
        });
    }), describe(_0xc752bb(0xc3), function () {
        const _0x24a981 = _0xc752bb;
        beforeEach(function () {
            const _0x2f270e = _0x343a;
            _0x15921a = sinon[_0x2f270e(0x8a)]()[_0x2f270e(0x8b)](function () {
                const _0x429dbb = _0x2f270e;
                return Promise[_0x429dbb(0xc4)](new errors[(_0x429dbb(0xc5))]({ 'message': 'Something\x20wasn\x27t\x20found' }));
            });
        }), it('should\x20handle\x20error\x20from\x20the\x20API', function (_0x4a8eb4) {
            const _0x2b3265 = _0x343a, _0x28f468 = sinon[_0x2b3265(0x90)](), _0x1aecb1 = sinon[_0x2b3265(0x90)](), _0x13b798 = {
                    'name': _0x2b3265(0x83),
                    'data': _0x3c4afa,
                    'fn': _0x28f468,
                    'inverse': _0x1aecb1
                };
            helpers['next_post'][_0x2b3265(0x91)]({
                'html': 'content',
                'status': 'published',
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x2b3265(0x93),
                'slug': _0x2b3265(0x94),
                'published_at': new Date(0x0),
                'url': _0x2b3265(0x95)
            }, _0x13b798)[_0x2b3265(0xa9)](function () {
                const _0x5727b3 = _0x2b3265;
                _0x28f468[_0x5727b3(0xaa)][_0x5727b3(0x97)]['be'][_0x5727b3(0x99)](), _0x1aecb1[_0x5727b3(0x96)][_0x5727b3(0x97)]['be'][_0x5727b3(0x98)](), _0x1aecb1['firstCall'][_0x5727b3(0x9a)][0x1]['should']['be']['an']['Object']()[_0x5727b3(0xa1)][_0x5727b3(0x9b)][_0x5727b3(0xa2)](_0x5727b3(0xa3)), _0x1aecb1[_0x5727b3(0x9d)][_0x5727b3(0x9a)][0x1]['data'][_0x5727b3(0x97)]['be']['an']['Object']()[_0x5727b3(0xa1)][_0x5727b3(0x9b)]['property'](_0x5727b3(0xc6)), _0x1aecb1[_0x5727b3(0x9d)][_0x5727b3(0x9a)][0x1][_0x5727b3(0xa3)][_0x5727b3(0xc6)]['should']['match'](/^Something wasn't found/), _0x4a8eb4();
            })[_0x2b3265(0xac)](_0x4a8eb4);
        }), it(_0x24a981(0xc7), function (_0x29ddf7) {
            const _0x12413d = _0x24a981, _0x157370 = sinon[_0x12413d(0x90)](), _0x3fa056 = sinon[_0x12413d(0x90)](), _0x399f00 = {
                    'name': _0x12413d(0x83),
                    'data': { 'root': {} }
                };
            helpers[_0x12413d(0x83)][_0x12413d(0x91)]({}, _0x399f00)[_0x12413d(0xa9)](function () {
                const _0x2c3b57 = _0x12413d;
                _0x157370[_0x2c3b57(0xaa)][_0x2c3b57(0x97)]['be'][_0x2c3b57(0x99)](), _0x3fa056[_0x2c3b57(0xaa)]['should']['be']['false'](), _0x29ddf7();
            })[_0x12413d(0xac)](_0x29ddf7);
        });
    });
});
