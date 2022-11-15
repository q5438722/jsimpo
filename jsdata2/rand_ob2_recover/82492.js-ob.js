function _0x343a(_0x4f9700, _0x4daeb7) {
    return _0x343a = function (_0x1c7f0c, _0x343a62) {
        _0x1c7f0c = _0x1c7f0c - 115;
        let _0x36da15 = _0x1c7f[_0x1c7f0c];
        return _0x36da15;
    }, _0x343a(_0x4f9700, _0x4daeb7);
}
const errors = require(_0x22a719(125)), sinon = require(_0x22a719(126)), Promise = require(_0x22a719(127)), markdownToMobiledoc = require(_0x22a719(128))[_0x22a719(129)], helpers = require('../../../core/frontend/helpers'), api = require(_0x22a719(130));
helpers[_0x22a719(131)] = helpers['prev_post'], describe(_0x22a719(132), function () {
    const _0xc752bb = _0x22a719, _0x27cc85 = _0xc752bb(133);
    let _0x3c4afa, _0x15921a;
    beforeEach(function () {
        const _0x2bea4b = _0xc752bb;
        _0x3c4afa = {
            'root': {
                '_locals': { 'apiVersion': _0x27cc85 },
                'context': [_0x2bea4b(134)]
            }
        }, sinon['stub'](api, _0x2bea4b(135))[_0x2bea4b(136)](() => {
            return { 'browse': _0x15921a };
        });
    }), afterEach(function () {
        const _0x5f3411 = _0xc752bb;
        sinon[_0x5f3411(137)]();
    }), describe('with valid post data - ', function () {
        beforeEach(function () {
            const _0x500923 = _0x343a;
            _0x15921a = sinon[_0x500923(138)]()[_0x500923(139)](function (_0x28e3a1) {
                const _0x44ac12 = _0x500923;
                if (_0x28e3a1[_0x44ac12(140)][_0x44ac12(141)](_0x44ac12(142)) > -1)
                    return Promise['resolve']({
                        'posts': [{
                                'slug': '/next/',
                                'title': _0x44ac12(143)
                            }]
                    });
            });
        }), it('shows \'if\' template with next post data', function (_0x198b34) {
            const _0x2fc8dc = _0x343a, _0xa0ccce = sinon['spy'](), _0x106539 = sinon[_0x2fc8dc(144)](), _0x55ab4d = {
                    'name': _0x2fc8dc(131),
                    'data': _0x3c4afa,
                    'fn': _0xa0ccce,
                    'inverse': _0x106539
                };
            helpers[_0x2fc8dc(131)][_0x2fc8dc(145)]({
                'html': 'content',
                'status': _0x2fc8dc(146),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x2fc8dc(147),
                'slug': _0x2fc8dc(148),
                'published_at': new Date(0),
                'url': _0x2fc8dc(149)
            }, _0x55ab4d)['then'](function () {
                const _0x184ed3 = _0x2fc8dc;
                _0xa0ccce[_0x184ed3(150)][_0x184ed3(151)]['be'][_0x184ed3(152)](), _0x106539['calledOnce'][_0x184ed3(151)]['be'][_0x184ed3(153)](), _0xa0ccce['firstCall'][_0x184ed3(154)][_0x184ed3(151)][_0x184ed3(155)][_0x184ed3(156)](2), _0xa0ccce[_0x184ed3(157)]['args'][0]['should'][_0x184ed3(155)][_0x184ed3(158)]('slug', _0x184ed3(159)), _0xa0ccce['firstCall']['args'][1][_0x184ed3(151)]['be']['an'][_0x184ed3(160)]()[_0x184ed3(161)][_0x184ed3(155)][_0x184ed3(162)](_0x184ed3(163)), _0x15921a[_0x184ed3(150)][_0x184ed3(151)]['be'][_0x184ed3(152)](), _0x15921a[_0x184ed3(157)]['args'][0][_0x184ed3(164)][_0x184ed3(151)][_0x184ed3(165)](_0x184ed3(166)), _0x198b34();
            })['catch'](_0x198b34);
        });
    }), describe(_0xc752bb(167), function () {
        beforeEach(function () {
            const _0x595cb8 = _0x343a;
            _0x15921a = sinon[_0x595cb8(138)]()['callsFake'](function (_0x1f8753) {
                const _0x27b7a4 = _0x595cb8;
                if (_0x1f8753[_0x27b7a4(140)]['indexOf'](_0x27b7a4(142)) > -1)
                    return Promise['resolve']({ 'posts': [] });
            });
        }), it('shows \'else\' template', function (_0x14ddcd) {
            const _0x321a99 = _0x343a, _0x3fd98e = sinon[_0x321a99(144)](), _0x5299c9 = sinon[_0x321a99(144)](), _0x39684e = {
                    'name': 'next_post',
                    'data': _0x3c4afa,
                    'fn': _0x3fd98e,
                    'inverse': _0x5299c9
                };
            helpers[_0x321a99(131)][_0x321a99(145)]({
                'html': _0x321a99(168),
                'status': _0x321a99(146),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x321a99(147),
                'slug': _0x321a99(148),
                'published_at': new Date(0),
                'url': _0x321a99(149)
            }, _0x39684e)[_0x321a99(169)](function () {
                const _0xd0efb9 = _0x321a99;
                _0x3fd98e[_0xd0efb9(170)][_0xd0efb9(151)]['be']['false'](), _0x5299c9[_0xd0efb9(170)][_0xd0efb9(151)]['be'][_0xd0efb9(152)](), _0x5299c9[_0xd0efb9(157)][_0xd0efb9(154)][_0xd0efb9(151)][_0xd0efb9(155)][_0xd0efb9(156)](2), _0x5299c9[_0xd0efb9(157)][_0xd0efb9(154)][0][_0xd0efb9(151)][_0xd0efb9(155)][_0xd0efb9(158)](_0xd0efb9(171), _0xd0efb9(159)), _0x5299c9[_0xd0efb9(157)][_0xd0efb9(154)][1][_0xd0efb9(151)]['be']['an'][_0xd0efb9(160)]()[_0xd0efb9(161)][_0xd0efb9(155)][_0xd0efb9(162)](_0xd0efb9(163)), _0x14ddcd();
            })[_0x321a99(172)](_0x14ddcd);
        });
    }), describe(_0xc752bb(173), function () {
        const _0x434225 = _0xc752bb;
        beforeEach(function () {
            const _0x571659 = _0x343a;
            _0x15921a = sinon['stub']()[_0x571659(139)](function (_0x2ed9c1) {
                const _0x468204 = _0x571659;
                if (_0x2ed9c1[_0x468204(140)][_0x468204(141)](_0x468204(142)) > -1)
                    return Promise[_0x468204(174)]({});
            });
        }), it(_0x434225(175), function (_0xc6f8ff) {
            const _0x3f708d = _0x434225, _0x520e9b = sinon['spy'](), _0x846c03 = sinon[_0x3f708d(144)](), _0x10508e = {
                    'name': _0x3f708d(131),
                    'data': _0x3c4afa,
                    'fn': _0x520e9b,
                    'inverse': _0x846c03
                };
            helpers[_0x3f708d(131)]['call']({}, _0x10508e)[_0x3f708d(169)](function () {
                const _0x1a4e3 = _0x3f708d;
                _0x520e9b[_0x1a4e3(170)][_0x1a4e3(151)]['be'][_0x1a4e3(153)](), _0x846c03[_0x1a4e3(170)][_0x1a4e3(151)]['be']['true'](), _0x15921a['called'][_0x1a4e3(151)]['be'][_0x1a4e3(153)](), _0xc6f8ff();
            })[_0x3f708d(172)](_0xc6f8ff);
        });
    }), describe(_0xc752bb(176), function () {
        const _0x43bcf7 = _0xc752bb;
        beforeEach(function () {
            const _0x13f856 = _0x343a;
            _0x3c4afa = {
                'root': {
                    '_locals': { 'apiVersion': _0x27cc85 },
                    'context': [_0x13f856(177)]
                }
            }, _0x15921a = sinon[_0x13f856(138)]()[_0x13f856(139)](function (_0x13f6a0) {
                const _0x206e03 = _0x13f856;
                if (_0x13f6a0['filter'][_0x206e03(141)](_0x206e03(142)) > -1)
                    return Promise[_0x206e03(174)]({
                        'posts': [{
                                'slug': _0x206e03(178),
                                'title': _0x206e03(179)
                            }]
                    });
            });
        }), it(_0x43bcf7(175), function (_0x36e7e1) {
            const _0x4b6ac7 = _0x43bcf7, _0x45413a = sinon[_0x4b6ac7(144)](), _0x41b030 = sinon[_0x4b6ac7(144)](), _0x269cfe = {
                    'name': _0x4b6ac7(131),
                    'data': _0x3c4afa,
                    'fn': _0x45413a,
                    'inverse': _0x41b030
                };
            helpers['next_post'][_0x4b6ac7(145)]({
                'html': _0x4b6ac7(168),
                'status': _0x4b6ac7(146),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x4b6ac7(147),
                'slug': _0x4b6ac7(148),
                'published_at': new Date(0),
                'url': _0x4b6ac7(149),
                'page': !![]
            }, _0x269cfe)['then'](function () {
                const _0xfffe66 = _0x4b6ac7;
                _0x45413a['called'][_0xfffe66(151)]['be'][_0xfffe66(153)](), _0x41b030[_0xfffe66(170)][_0xfffe66(151)]['be'][_0xfffe66(152)](), _0x36e7e1();
            })[_0x4b6ac7(172)](_0x36e7e1);
        });
    }), describe(_0xc752bb(180), function () {
        const _0x1852bf = _0xc752bb;
        beforeEach(function () {
            const _0x141169 = _0x343a;
            _0x3c4afa = {
                'root': {
                    '_locals': { 'apiVersion': _0x27cc85 },
                    'context': [
                        _0x141169(181),
                        _0x141169(134)
                    ]
                }
            }, _0x15921a = sinon['stub']()['callsFake'](function (_0x170366) {
                const _0x2018b0 = _0x141169;
                if (_0x170366[_0x2018b0(140)]['indexOf'](_0x2018b0(142)) > -1)
                    return Promise[_0x2018b0(174)]({
                        'posts': [{
                                'slug': _0x2018b0(182),
                                'title': _0x2018b0(143)
                            }]
                    });
            });
        }), it(_0x1852bf(175), function (_0x40bef5) {
            const _0x2ece9d = _0x1852bf, _0x546190 = sinon[_0x2ece9d(144)](), _0x349eab = sinon['spy'](), _0x41cffb = {
                    'name': _0x2ece9d(131),
                    'data': _0x3c4afa,
                    'fn': _0x546190,
                    'inverse': _0x349eab
                };
            helpers[_0x2ece9d(131)][_0x2ece9d(145)]({
                'html': _0x2ece9d(168),
                'status': _0x2ece9d(183),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x2ece9d(147),
                'slug': 'current',
                'created_at': new Date(0),
                'url': _0x2ece9d(149)
            }, _0x41cffb)['then'](function () {
                const _0x2b21d2 = _0x2ece9d;
                _0x546190[_0x2b21d2(170)][_0x2b21d2(151)]['be'][_0x2b21d2(153)](), _0x349eab[_0x2b21d2(170)][_0x2b21d2(151)]['be'][_0x2b21d2(152)](), _0x40bef5();
            })['catch'](_0x40bef5);
        });
    }), describe('with "in" option', function () {
        const _0x22bda7 = _0xc752bb;
        beforeEach(function () {
            const _0x46c20a = _0x343a;
            _0x15921a = sinon[_0x46c20a(138)]()[_0x46c20a(139)](function (_0x264e09) {
                const _0x22382e = _0x46c20a;
                if (_0x264e09[_0x22382e(140)][_0x22382e(141)]('published_at:>') > -1)
                    return Promise[_0x22382e(174)]({
                        'posts': [{
                                'slug': '/next/',
                                'title': _0x22382e(179)
                            }]
                    });
            });
        }), it(_0x22bda7(184), function (_0x27aebd) {
            const _0x222304 = _0x22bda7, _0x5ec797 = sinon['spy'](), _0x7182de = sinon['spy'](), _0x3164eb = {
                    'name': _0x222304(131),
                    'data': _0x3c4afa,
                    'fn': _0x5ec797,
                    'inverse': _0x7182de,
                    'hash': { 'in': _0x222304(185) }
                };
            helpers[_0x222304(131)][_0x222304(145)]({
                'html': _0x222304(168),
                'status': _0x222304(146),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x222304(147),
                'slug': _0x222304(148),
                'published_at': new Date(0),
                'primary_tag': { 'slug': _0x222304(186) },
                'url': _0x222304(149)
            }, _0x3164eb)['then'](function () {
                const _0x42c459 = _0x222304;
                _0x5ec797[_0x42c459(150)]['should']['be']['true'](), _0x7182de[_0x42c459(150)][_0x42c459(151)]['be']['false'](), _0x5ec797['firstCall'][_0x42c459(154)][_0x42c459(151)][_0x42c459(155)][_0x42c459(156)](2), _0x5ec797[_0x42c459(157)][_0x42c459(154)][0][_0x42c459(151)][_0x42c459(155)][_0x42c459(158)](_0x42c459(171), _0x42c459(159)), _0x5ec797[_0x42c459(157)][_0x42c459(154)][1][_0x42c459(151)]['be']['an'][_0x42c459(160)]()[_0x42c459(161)]['have'][_0x42c459(162)](_0x42c459(163)), _0x15921a['calledOnce']['should']['be'][_0x42c459(152)](), _0x15921a[_0x42c459(157)][_0x42c459(154)][0]['include']['should'][_0x42c459(165)](_0x42c459(166)), _0x15921a['firstCall']['args'][0][_0x42c459(140)][_0x42c459(151)][_0x42c459(187)](/\+primary_tag:test/), _0x27aebd();
            })[_0x222304(172)](_0x27aebd);
        }), it('shows \'if\' template with prev post data with primary_author set', function (_0x594a63) {
            const _0x409891 = _0x22bda7, _0x954ac9 = sinon['spy'](), _0xfe6733 = sinon[_0x409891(144)](), _0x3be8dd = {
                    'name': _0x409891(131),
                    'data': _0x3c4afa,
                    'fn': _0x954ac9,
                    'inverse': _0xfe6733,
                    'hash': { 'in': 'primary_author' }
                };
            helpers[_0x409891(131)][_0x409891(145)]({
                'html': _0x409891(168),
                'status': _0x409891(146),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x409891(147),
                'slug': _0x409891(148),
                'published_at': new Date(0),
                'primary_author': { 'slug': _0x409891(188) },
                'url': _0x409891(149)
            }, _0x3be8dd)[_0x409891(169)](function () {
                const _0x40664a = _0x409891;
                _0x954ac9['calledOnce'][_0x40664a(151)]['be'][_0x40664a(152)](), _0xfe6733['calledOnce']['should']['be'][_0x40664a(153)](), _0x954ac9[_0x40664a(157)][_0x40664a(154)][_0x40664a(151)]['have'][_0x40664a(156)](2), _0x954ac9[_0x40664a(157)][_0x40664a(154)][0][_0x40664a(151)][_0x40664a(155)][_0x40664a(158)](_0x40664a(171), _0x40664a(159)), _0x954ac9['firstCall']['args'][1][_0x40664a(151)]['be']['an'][_0x40664a(160)]()['and'][_0x40664a(155)][_0x40664a(162)](_0x40664a(163)), _0x15921a['calledOnce'][_0x40664a(151)]['be'][_0x40664a(152)](), _0x15921a['firstCall']['args'][0][_0x40664a(164)]['should'][_0x40664a(165)](_0x40664a(166)), _0x15921a['firstCall']['args'][0][_0x40664a(140)][_0x40664a(151)][_0x40664a(187)](/\+primary_author:hans/), _0x594a63();
            })[_0x409891(172)](_0x594a63);
        }), it(_0x22bda7(189), function (_0x19b099) {
            const _0x58aa40 = _0x22bda7, _0x5e5319 = sinon[_0x58aa40(144)](), _0x3eaf35 = sinon[_0x58aa40(144)](), _0x5a5735 = {
                    'name': 'next_post',
                    'data': _0x3c4afa,
                    'fn': _0x5e5319,
                    'inverse': _0x3eaf35,
                    'hash': { 'in': _0x58aa40(190) }
                };
            helpers[_0x58aa40(131)][_0x58aa40(145)]({
                'html': _0x58aa40(168),
                'status': _0x58aa40(146),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x58aa40(147),
                'slug': 'current',
                'published_at': new Date(0),
                'author': { 'slug': _0x58aa40(191) },
                'url': _0x58aa40(149)
            }, _0x5a5735)[_0x58aa40(169)](function () {
                const _0x4f9c34 = _0x58aa40;
                _0x5e5319[_0x4f9c34(150)][_0x4f9c34(151)]['be']['true'](), _0x3eaf35[_0x4f9c34(150)][_0x4f9c34(151)]['be'][_0x4f9c34(153)](), _0x5e5319['firstCall'][_0x4f9c34(154)][_0x4f9c34(151)][_0x4f9c34(155)][_0x4f9c34(156)](2), _0x5e5319['firstCall'][_0x4f9c34(154)][0][_0x4f9c34(151)][_0x4f9c34(155)][_0x4f9c34(158)](_0x4f9c34(171), _0x4f9c34(159)), _0x5e5319[_0x4f9c34(157)][_0x4f9c34(154)][1]['should']['be']['an'][_0x4f9c34(160)]()[_0x4f9c34(161)][_0x4f9c34(155)]['property'](_0x4f9c34(163)), _0x15921a[_0x4f9c34(150)][_0x4f9c34(151)]['be'][_0x4f9c34(152)](), _0x15921a['firstCall']['args'][0][_0x4f9c34(164)][_0x4f9c34(151)]['eql'](_0x4f9c34(166)), _0x15921a[_0x4f9c34(157)][_0x4f9c34(154)][0][_0x4f9c34(140)][_0x4f9c34(151)]['match'](/\+author:author-name/), _0x19b099();
            })[_0x58aa40(172)](_0x19b099);
        }), it(_0x22bda7(192), function (_0x5228a0) {
            const _0x4c96af = _0x22bda7, _0x3eef67 = sinon[_0x4c96af(144)](), _0x3eb50b = sinon[_0x4c96af(144)](), _0x5d34e6 = {
                    'name': _0x4c96af(131),
                    'data': _0x3c4afa,
                    'fn': _0x3eef67,
                    'inverse': _0x3eb50b,
                    'hash': { 'in': _0x4c96af(190) }
                };
            helpers['next_post']['call']({
                'html': _0x4c96af(168),
                'status': _0x4c96af(146),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': 'post2',
                'slug': _0x4c96af(148),
                'published_at': new Date(0),
                'url': '/current/'
            }, _0x5d34e6)[_0x4c96af(169)](function () {
                const _0x484805 = _0x4c96af;
                _0x3eef67[_0x484805(150)][_0x484805(151)]['be'][_0x484805(152)](), _0x3eb50b[_0x484805(150)][_0x484805(151)]['be']['false'](), _0x3eef67['firstCall'][_0x484805(154)][_0x484805(151)][_0x484805(155)][_0x484805(156)](2), _0x3eef67[_0x484805(157)][_0x484805(154)][0][_0x484805(151)][_0x484805(155)][_0x484805(158)](_0x484805(171), _0x484805(159)), _0x3eef67[_0x484805(157)]['args'][1][_0x484805(151)]['be']['an'][_0x484805(160)]()['and']['have']['property'](_0x484805(163)), _0x15921a[_0x484805(150)][_0x484805(151)]['be'][_0x484805(152)](), _0x15921a[_0x484805(157)]['args'][0][_0x484805(164)][_0x484805(151)][_0x484805(165)]('author,authors,tags'), _0x15921a[_0x484805(157)][_0x484805(154)][0][_0x484805(140)]['should']['not'][_0x484805(187)](/\+author:/), _0x5228a0();
            })['catch'](_0x5228a0);
        }), it(_0x22bda7(193), function (_0x5736c7) {
            const _0x1e380a = _0x22bda7, _0x4248df = sinon[_0x1e380a(144)](), _0x1bfdc9 = sinon[_0x1e380a(144)](), _0x1c943d = {
                    'name': _0x1e380a(131),
                    'data': _0x3c4afa,
                    'fn': _0x4248df,
                    'inverse': _0x1bfdc9,
                    'hash': { 'in': 'magic' }
                };
            helpers[_0x1e380a(131)][_0x1e380a(145)]({
                'html': _0x1e380a(168),
                'status': _0x1e380a(146),
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x1e380a(147),
                'slug': _0x1e380a(148),
                'published_at': new Date(0),
                'author': { 'slug': _0x1e380a(191) },
                'url': _0x1e380a(149)
            }, _0x1c943d)[_0x1e380a(169)](function () {
                const _0x369b6d = _0x1e380a;
                _0x4248df[_0x369b6d(150)][_0x369b6d(151)]['be'][_0x369b6d(152)](), _0x1bfdc9[_0x369b6d(150)][_0x369b6d(151)]['be'][_0x369b6d(153)](), _0x4248df[_0x369b6d(157)][_0x369b6d(154)][_0x369b6d(151)][_0x369b6d(155)][_0x369b6d(156)](2), _0x4248df['firstCall']['args'][0][_0x369b6d(151)][_0x369b6d(155)]['properties']('slug', 'title'), _0x4248df[_0x369b6d(157)]['args'][1]['should']['be']['an'][_0x369b6d(160)]()[_0x369b6d(161)]['have']['property'](_0x369b6d(163)), _0x15921a[_0x369b6d(150)][_0x369b6d(151)]['be'][_0x369b6d(152)](), _0x15921a['firstCall'][_0x369b6d(154)][0][_0x369b6d(164)][_0x369b6d(151)]['eql']('author,authors,tags'), _0x15921a[_0x369b6d(157)][_0x369b6d(154)][0][_0x369b6d(140)][_0x369b6d(151)][_0x369b6d(194)]['match'](/\+magic/), _0x5736c7();
            })['catch'](_0x5736c7);
        });
    }), describe(_0xc752bb(195), function () {
        const _0x24a981 = _0xc752bb;
        beforeEach(function () {
            const _0x2f270e = _0x343a;
            _0x15921a = sinon[_0x2f270e(138)]()[_0x2f270e(139)](function () {
                const _0x429dbb = _0x2f270e;
                return Promise[_0x429dbb(196)](new errors[(_0x429dbb(197))]({ 'message': 'Something wasn\'t found' }));
            });
        }), it('should handle error from the API', function (_0x4a8eb4) {
            const _0x2b3265 = _0x343a, _0x28f468 = sinon[_0x2b3265(144)](), _0x1aecb1 = sinon[_0x2b3265(144)](), _0x13b798 = {
                    'name': _0x2b3265(131),
                    'data': _0x3c4afa,
                    'fn': _0x28f468,
                    'inverse': _0x1aecb1
                };
            helpers['next_post'][_0x2b3265(145)]({
                'html': 'content',
                'status': 'published',
                'mobiledoc': markdownToMobiledoc('ff'),
                'title': _0x2b3265(147),
                'slug': _0x2b3265(148),
                'published_at': new Date(0),
                'url': _0x2b3265(149)
            }, _0x13b798)[_0x2b3265(169)](function () {
                const _0x5727b3 = _0x2b3265;
                _0x28f468[_0x5727b3(170)][_0x5727b3(151)]['be'][_0x5727b3(153)](), _0x1aecb1[_0x5727b3(150)][_0x5727b3(151)]['be'][_0x5727b3(152)](), _0x1aecb1['firstCall'][_0x5727b3(154)][1]['should']['be']['an']['Object']()[_0x5727b3(161)][_0x5727b3(155)][_0x5727b3(162)](_0x5727b3(163)), _0x1aecb1[_0x5727b3(157)][_0x5727b3(154)][1]['data'][_0x5727b3(151)]['be']['an']['Object']()[_0x5727b3(161)][_0x5727b3(155)]['property'](_0x5727b3(198)), _0x1aecb1[_0x5727b3(157)][_0x5727b3(154)][1][_0x5727b3(163)][_0x5727b3(198)]['should']['match'](/^Something wasn't found/), _0x4a8eb4();
            })[_0x2b3265(172)](_0x4a8eb4);
        }), it(_0x24a981(199), function (_0x29ddf7) {
            const _0x12413d = _0x24a981, _0x157370 = sinon[_0x12413d(144)](), _0x3fa056 = sinon[_0x12413d(144)](), _0x399f00 = {
                    'name': _0x12413d(131),
                    'data': { 'root': {} }
                };
            helpers[_0x12413d(131)][_0x12413d(145)]({}, _0x399f00)[_0x12413d(169)](function () {
                const _0x2c3b57 = _0x12413d;
                _0x157370[_0x2c3b57(170)][_0x2c3b57(151)]['be'][_0x2c3b57(153)](), _0x3fa056[_0x2c3b57(170)]['should']['be']['false'](), _0x29ddf7();
            })[_0x12413d(172)](_0x29ddf7);
        });
    });
});