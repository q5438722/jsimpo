function _0x57e0(_0x2b3c12, _0xc06597) {
    return _0x57e0 = function (_0x2435e3, _0x57e024) {
        _0x2435e3 = _0x2435e3 - 303;
        var _0x23dcd9 = _0x2435[_0x2435e3];
        return _0x23dcd9;
    }, _0x57e0(_0x2b3c12, _0xc06597);
}
describe(_0x463759(313), function () {
    var _0xbca7f7 = _0x463759, _0x1d0dd6;
    afterEach(function () {
        dealoc(_0x1d0dd6);
    }), describe('ngBind', function () {
        var _0x5eccfa = _0x57e0;
        it(_0x5eccfa(314), inject(function (_0x57ea84, _0x5d1ef9) {
            var _0x19c7cd = _0x5eccfa;
            _0x1d0dd6 = _0x5d1ef9(_0x19c7cd(315))(_0x57ea84), expect(_0x1d0dd6[_0x19c7cd(316)]())[_0x19c7cd(317)](''), _0x57ea84['a'] = _0x19c7cd(318), _0x57ea84[_0x19c7cd(319)](), expect(_0x1d0dd6[_0x19c7cd(320)]('ng-binding'))[_0x19c7cd(317)](!![]), expect(_0x1d0dd6[_0x19c7cd(316)]())[_0x19c7cd(317)](_0x19c7cd(318));
        })), it(_0x5eccfa(321), inject(function (_0x12c680, _0x414be1) {
            var _0x24bc6c = _0x5eccfa;
            _0x1d0dd6 = _0x414be1(_0x24bc6c(315))(_0x12c680), _0x12c680['a'] = _0x24bc6c(318), _0x12c680[_0x24bc6c(319)](), expect(_0x1d0dd6[_0x24bc6c(316)]())[_0x24bc6c(317)](_0x24bc6c(318)), _0x12c680['a'] = undefined, _0x12c680[_0x24bc6c(319)](), expect(_0x1d0dd6[_0x24bc6c(316)]())[_0x24bc6c(317)](''), _0x12c680['a'] = null, _0x12c680[_0x24bc6c(319)](), expect(_0x1d0dd6['text']())['toEqual']('');
        })), it('should suppress rendering of falsy values', inject(function (_0x5a7cdf, _0x139a1d) {
            var _0x29757d = _0x5eccfa;
            _0x1d0dd6 = _0x139a1d(_0x29757d(322) + _0x29757d(323) + '<span ng-bind="\'\'"></span>-' + '<span ng-bind="0"></span>' + _0x29757d(324) + _0x29757d(325))(_0x5a7cdf), _0x5a7cdf['$digest'](), expect(_0x1d0dd6[_0x29757d(316)]())[_0x29757d(317)](_0x29757d(326));
        })), they(_0x5eccfa(327), [
            [
                { 'a': 1 },
                _0x5eccfa(328)
            ],
            [
                !![],
                'true'
            ],
            [
                ![],
                _0x5eccfa(329)
            ]
        ], function (_0xdff1fc) {
            inject(function (_0x55cd6b, _0xa902fb) {
                var _0x316fcb = _0x57e0;
                _0x55cd6b[_0x316fcb(330)] = _0xdff1fc[0], _0x1d0dd6 = _0xa902fb(_0x316fcb(331))(_0x55cd6b), _0x55cd6b[_0x316fcb(319)](), expect(_0x1d0dd6[_0x316fcb(316)]())[_0x316fcb(317)](_0xdff1fc[1]);
            });
        }), it('should use custom toString when present', inject(function (_0x335052, _0x4d6f81) {
            var _0x3e8c53 = _0x5eccfa;
            _0x335052['value'] = {
                'toString': function () {
                    return 'foo';
                }
            }, _0x1d0dd6 = _0x4d6f81(_0x3e8c53(331))(_0x335052), _0x335052[_0x3e8c53(319)](), expect(_0x1d0dd6[_0x3e8c53(316)]())['toEqual'](_0x3e8c53(332));
        })), it(_0x5eccfa(333), inject(function (_0xf527bb, _0x5b19a6) {
            var _0x5d71d5 = _0x5eccfa;
            _0xf527bb[_0x5d71d5(330)] = [], _0x1d0dd6 = _0x5b19a6(_0x5d71d5(331))(_0xf527bb), _0xf527bb[_0x5d71d5(319)](), expect(_0x1d0dd6['text']())[_0x5d71d5(317)]('[]');
        })), it(_0x5eccfa(334), inject(function (_0x1e8bd9, _0x493d75) {
            var _0x277fc0 = _0x5eccfa;
            _0x1e8bd9[_0x277fc0(330)] = new Date(2014, 10, 10, 0, 0, 0), _0x1d0dd6 = _0x493d75(_0x277fc0(331))(_0x1e8bd9), _0x1e8bd9['$digest'](), expect(_0x1d0dd6[_0x277fc0(316)]())[_0x277fc0(335)](JSON['stringify'](_0x1e8bd9[_0x277fc0(330)])), expect(_0x1d0dd6['text']())[_0x277fc0(336)][_0x277fc0(317)](_0x1e8bd9['value'][_0x277fc0(337)]());
        })), it(_0x5eccfa(338), inject(function (_0x3fcf66, _0x16443b) {
            var _0x3b6c9b = _0x5eccfa;
            _0x1d0dd6 = _0x16443b(_0x3b6c9b(339))(_0x3fcf66), _0x3fcf66['a'] = _0x3b6c9b(340), expect(_0x3fcf66[_0x3b6c9b(341)][_0x3b6c9b(342)])[_0x3b6c9b(317)](1), _0x3fcf66['$digest'](), expect(_0x1d0dd6[_0x3b6c9b(316)]())[_0x3b6c9b(317)](_0x3b6c9b(340)), expect(_0x3fcf66[_0x3b6c9b(341)][_0x3b6c9b(342)])[_0x3b6c9b(317)](0), _0x3fcf66['a'] = undefined, _0x3fcf66[_0x3b6c9b(319)](), expect(_0x1d0dd6[_0x3b6c9b(316)]())[_0x3b6c9b(317)](_0x3b6c9b(340));
        })), it(_0x5eccfa(343), inject(function (_0x1111ce, _0x425323) {
            var _0x2749ba = _0x5eccfa;
            _0x1d0dd6 = _0x425323(_0x2749ba(339))(_0x1111ce), _0x1111ce[_0x2749ba(344)]('a', function (_0x44c3cc) {
                var _0x440f35 = _0x2749ba;
                _0x44c3cc === _0x440f35(332) && (_0x1111ce['a'] = _0x440f35(345));
            }), _0x1111ce['a'] = _0x2749ba(332), _0x1111ce[_0x2749ba(319)](), expect(_0x1d0dd6['text']())['toEqual'](_0x2749ba(345)), _0x1111ce['a'] = undefined, _0x1111ce[_0x2749ba(319)](), expect(_0x1d0dd6[_0x2749ba(316)]())[_0x2749ba(317)](_0x2749ba(345));
        })), it('should remove the binding if the value is defined at the end of a $digest loop', inject(function (_0x37c117, _0x5b01ce) {
            var _0x34a68c = _0x5eccfa;
            _0x1d0dd6 = _0x5b01ce(_0x34a68c(339))(_0x37c117), _0x37c117[_0x34a68c(344)]('a', function (_0x32f46c) {
                var _0x21585f = _0x34a68c;
                _0x32f46c === _0x21585f(332) && (_0x37c117['a'] = undefined);
            }), _0x37c117['a'] = _0x34a68c(332), _0x37c117[_0x34a68c(319)](), expect(_0x1d0dd6[_0x34a68c(316)]())[_0x34a68c(317)](''), _0x37c117['a'] = _0x34a68c(345), _0x37c117[_0x34a68c(319)](), expect(_0x1d0dd6[_0x34a68c(316)]())[_0x34a68c(317)](_0x34a68c(345)), _0x37c117['a'] = 'man', _0x37c117['$digest'](), expect(_0x1d0dd6[_0x34a68c(316)]())[_0x34a68c(317)]('bar');
        }));
    }), describe('ngBindTemplate', function () {
        var _0x10af45 = _0x57e0;
        it('should ngBindTemplate', inject(function (_0x2cfad1, _0x50d87f) {
            var _0x266bb6 = _0x57e0;
            _0x1d0dd6 = _0x50d87f('<div ng-bind-template="Hello {{name}}!"></div>')(_0x2cfad1), _0x2cfad1[_0x266bb6(346)] = 'Misko', _0x2cfad1[_0x266bb6(319)](), expect(_0x1d0dd6['hasClass'](_0x266bb6(347)))['toEqual'](!![]), expect(_0x1d0dd6[_0x266bb6(316)]())['toEqual'](_0x266bb6(348));
        })), it(_0x10af45(349), inject(function (_0x510384, _0x381be5) {
            var _0x4e42b5 = _0x10af45;
            _0x1d0dd6 = _0x381be5(_0x4e42b5(350))(_0x510384), _0x510384[_0x4e42b5(346)] = _0x4e42b5(351), expect(_0x510384[_0x4e42b5(341)][_0x4e42b5(342)])['toEqual'](2), _0x510384[_0x4e42b5(319)](), expect(_0x1d0dd6[_0x4e42b5(320)](_0x4e42b5(347)))[_0x4e42b5(317)](!![]), expect(_0x1d0dd6[_0x4e42b5(316)]())['toEqual'](' Misko!'), expect(_0x510384[_0x4e42b5(341)][_0x4e42b5(342)])[_0x4e42b5(317)](1), _0x510384[_0x4e42b5(352)] = _0x4e42b5(353), _0x510384[_0x4e42b5(346)] = _0x4e42b5(354), _0x510384[_0x4e42b5(319)](), expect(_0x1d0dd6[_0x4e42b5(316)]())['toEqual'](_0x4e42b5(348)), expect(_0x510384[_0x4e42b5(341)]['length'])[_0x4e42b5(317)](0);
        })), it(_0x10af45(355), inject(function (_0x3af949, _0x1ddb6) {
            var _0x3a95a1 = _0x10af45;
            _0x1d0dd6 = _0x1ddb6('<pre>{{ {key:"value", $$key:"hide"}  }}</pre>')(_0x3af949), _0x3af949[_0x3a95a1(319)](), expect(fromJson(_0x1d0dd6[_0x3a95a1(316)]()))[_0x3a95a1(317)]({ 'key': 'value' });
        }));
    }), describe(_0xbca7f7(356), function () {
        var _0x2d3337 = _0xbca7f7;
        it(_0x2d3337(357), inject(function (_0x23075f) {
            var _0x31132e = _0x2d3337;
            expect(function () {
                var _0x421995 = _0x57e0;
                _0x23075f(_0x421995(358));
            })['toThrowMinErr'](_0x31132e(359), _0x31132e(360), _0x31132e(361));
        })), describe(_0x2d3337(362), function () {
            var _0xde13b0 = _0x2d3337;
            beforeEach(function () {
                module(function (_0x1e09a8) {
                    var _0x48a7ee = _0x57e0;
                    _0x1e09a8[_0x48a7ee(363)](![]);
                });
            }), it('should set html', inject(function (_0x155cd4, _0x378621) {
                var _0x5c7660 = _0x57e0;
                _0x1d0dd6 = _0x378621(_0x5c7660(364))(_0x155cd4), _0x155cd4[_0x5c7660(365)] = _0x5c7660(366), _0x155cd4[_0x5c7660(319)](), expect(lowercase(_0x1d0dd6[_0x5c7660(365)]()))[_0x5c7660(317)]('<div onclick="">hello</div>');
            })), it(_0xde13b0(367), inject(function (_0x35e83f, _0xbffca2, _0x3b1162) {
                var _0x1b9eed = _0xde13b0;
                _0x1d0dd6 = _0xbffca2('<div ng-bind-html="html"></div>')(_0x35e83f), _0x35e83f[_0x1b9eed(365)] = _0x1b9eed(352), _0x35e83f[_0x1b9eed(319)](), expect(lowercase(_0x1d0dd6[_0x1b9eed(365)]()))['toEqual']('hello'), _0x35e83f[_0x1b9eed(365)] = _0x1b9eed(368), _0x35e83f[_0x1b9eed(319)](), expect(lowercase(_0x1d0dd6[_0x1b9eed(365)]()))[_0x1b9eed(317)](_0x1b9eed(368));
            })), it(_0xde13b0(338), inject(function (_0x1c8dda, _0x4ce40c) {
                var _0xbf6fa1 = _0xde13b0;
                _0x1d0dd6 = _0x4ce40c(_0xbf6fa1(369))(_0x1c8dda), _0x1c8dda[_0xbf6fa1(365)] = _0xbf6fa1(366), expect(_0x1c8dda[_0xbf6fa1(341)]['length'])[_0xbf6fa1(317)](1), _0x1c8dda[_0xbf6fa1(319)](), expect(_0x1d0dd6[_0xbf6fa1(316)]())['toEqual']('hello'), expect(_0x1c8dda['$$watchers']['length'])[_0xbf6fa1(317)](0), _0x1c8dda[_0xbf6fa1(365)] = '<div onclick="">hello</div>', _0x1c8dda[_0xbf6fa1(319)](), expect(_0x1d0dd6[_0xbf6fa1(316)]())['toEqual']('hello');
            }));
        }), describe(_0x2d3337(370), function () {
            var _0x40e83d = _0x2d3337;
            it('should NOT set html for untrusted values', inject(function (_0x491345, _0x2a1974) {
                var _0x34b539 = _0x57e0;
                _0x1d0dd6 = _0x2a1974(_0x34b539(364))(_0x491345), _0x491345['html'] = _0x34b539(366), expect(function () {
                    _0x491345['$digest']();
                })['toThrow']();
            })), it(_0x40e83d(371), inject(function (_0x2689a7, _0x40f115, _0x120e9d) {
                var _0x257af6 = _0x40e83d;
                _0x1d0dd6 = _0x40f115(_0x257af6(364))(_0x2689a7), _0x2689a7[_0x257af6(365)] = _0x120e9d[_0x257af6(372)](_0x257af6(366)), expect(function () {
                    _0x2689a7['$digest']();
                })['toThrow']();
            })), it(_0x40e83d(373), inject(function (_0x40de34, _0x2c1d1b, _0x5605a7) {
                var _0x5c9646 = _0x40e83d;
                _0x1d0dd6 = _0x2c1d1b('<div ng-bind-html="html"></div>')(_0x40de34), _0x40de34['html'] = _0x5605a7[_0x5c9646(374)]('<div onclick="">hello</div>'), _0x40de34['$digest'](), expect(lowercase(_0x1d0dd6[_0x5c9646(365)]()))[_0x5c9646(317)](_0x5c9646(366));
            })), it('should update html', inject(function (_0x57f802, _0x1b4305, _0x19c416) {
                var _0x1024da = _0x40e83d;
                _0x1d0dd6 = _0x1b4305(_0x1024da(364))(_0x57f802), _0x57f802[_0x1024da(365)] = _0x19c416[_0x1024da(374)]('hello'), _0x57f802[_0x1024da(319)](), expect(lowercase(_0x1d0dd6['html']()))[_0x1024da(317)](_0x1024da(352)), _0x57f802[_0x1024da(365)] = _0x19c416[_0x1024da(374)](_0x1024da(368)), _0x57f802[_0x1024da(319)](), expect(lowercase(_0x1d0dd6[_0x1024da(365)]()))['toEqual']('goodbye');
            })), it(_0x40e83d(375), inject(function (_0x40b789, _0x2e1fad, _0x52097f) {
                var _0x175f36 = _0x40e83d;
                _0x1d0dd6 = _0x2e1fad(_0x175f36(376))(_0x40b789), _0x40b789[_0x175f36(377)] = function () {
                    var _0x50ec59 = _0x175f36;
                    return _0x52097f[_0x50ec59(374)](_0x50ec59(366));
                }, _0x40b789[_0x175f36(319)](), expect(lowercase(_0x1d0dd6['html']()))[_0x175f36(317)](_0x175f36(366));
            })), it(_0x40e83d(378), function () {
                function _0x2929e2(_0x228c06) {
                    var _0x31b95c = _0x57e0;
                    this[_0x31b95c(379)] = _0x228c06;
                }
                module(function (_0x1dcc80) {
                    var _0x5bf6c2 = _0x57e0;
                    _0x1dcc80[_0x5bf6c2(380)](_0x5bf6c2(381), function (_0x448e04) {
                        var _0x1f1794 = _0x5bf6c2;
                        return _0x448e04[_0x1f1794(374)] = function (_0x138b3a) {
                            return new _0x2929e2(_0x138b3a);
                        }, _0x448e04[_0x1f1794(382)] = function (_0x68d30b) {
                            var _0x588a9a = _0x1f1794;
                            return _0x68d30b[_0x588a9a(379)];
                        }, _0x448e04[_0x1f1794(383)] = function (_0x4015f4) {
                            var _0x58e62a = _0x1f1794;
                            return _0x4015f4 instanceof _0x2929e2 ? _0x4015f4[_0x58e62a(379)] : _0x4015f4;
                        }, _0x448e04;
                    });
                }), inject(function (_0x2cf9f4, _0x326e56, _0x5e718a) {
                    var _0x5a6efb = _0x57e0;
                    _0x1d0dd6 = _0x326e56(_0x5a6efb(376))(_0x2cf9f4);
                    var _0x346a12 = 'hello';
                    _0x2cf9f4[_0x5a6efb(377)] = function () {
                        var _0x361cb8 = _0x5a6efb;
                        return _0x5e718a[_0x361cb8(374)](_0x346a12);
                    }, _0x2cf9f4[_0x5a6efb(319)](), expect(lowercase(_0x1d0dd6[_0x5a6efb(365)]()))['toEqual'](_0x5a6efb(352)), _0x346a12 = _0x5a6efb(368), _0x2cf9f4['$digest'](), expect(lowercase(_0x1d0dd6[_0x5a6efb(365)]()))[_0x5a6efb(317)](_0x5a6efb(368));
                });
            }), describe('when $sanitize is available', function () {
                beforeEach(function () {
                    var _0x2008a1 = _0x57e0;
                    module(_0x2008a1(384));
                }), it('should sanitize untrusted html', inject(function (_0x38ab6c, _0x3bf164) {
                    var _0x3f0122 = _0x57e0;
                    _0x1d0dd6 = _0x3bf164(_0x3f0122(364))(_0x38ab6c), _0x38ab6c[_0x3f0122(365)] = _0x3f0122(366), _0x38ab6c[_0x3f0122(319)](), expect(lowercase(_0x1d0dd6[_0x3f0122(365)]()))['toEqual'](_0x3f0122(385));
                }));
            });
        });
    });
});