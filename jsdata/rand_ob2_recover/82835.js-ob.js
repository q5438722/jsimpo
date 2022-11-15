function _0x1002(_0x57d571, _0x115ea8) {
    return _0x1002 = function (_0x35c608, _0x100254) {
        _0x35c608 = _0x35c608 - 231;
        var _0x261eb4 = _0x35c6[_0x35c608];
        return _0x261eb4;
    }, _0x1002(_0x57d571, _0x115ea8);
}
describe(_0x5e4622(241), function () {
    var _0x3d78d3 = _0x5e4622, _0x5e5e76;
    function _0x2ebe91(_0x2cb0c0, _0x26e71f) {
        return jqLite(_0x2cb0c0[0]['childNodes'][_0x26e71f]);
    }
    beforeEach(function () {
        var _0x4ebe46 = _0x1002;
        this[_0x4ebe46(242)] = function (_0x539af9) {
            var _0xe2d879;
            return inject(function (_0x54e55a, _0x5be0de) {
                _0x539af9 = jqLite(_0x539af9), _0x5be0de(_0x539af9)(_0x54e55a), _0xe2d879 = sortedHtml(_0x539af9);
            }), _0xe2d879;
        };
    }), afterEach(function () {
        var _0x192d27 = _0x1002;
        dealoc(_0x5e5e76), dealoc(this[_0x192d27(243)]);
    }), it(_0x3d78d3(244), inject(function (_0x277b51, _0x336496) {
        var _0x12cd12 = _0x3d78d3;
        _0x336496(_0x12cd12(245))(_0x277b51), _0x277b51[_0x12cd12(246)](), expect(_0x277b51['a'])['toBe'](123);
    })), it(_0x3d78d3(247), inject(function (_0x413a5f, _0x11c832) {
        var _0x57f374 = _0x3d78d3;
        _0x11c832('<div ng-init="a=123">')(_0x413a5f), expect(_0x413a5f['a'])[_0x57f374(248)](123);
    })), it(_0x3d78d3(249), inject(function (_0x16f450, _0x3a1373) {
        var _0x30b156 = _0x3d78d3;
        _0x3a1373('<div ng-init="a=123;b=345">')(_0x16f450), expect(_0x16f450['a'])[_0x30b156(248)](123), expect(_0x16f450['b'])[_0x30b156(248)](345);
    })), it(_0x3d78d3(250), inject(function (_0x450495, _0x466c0c) {
        var _0x39f72f = _0x3d78d3;
        _0x5e5e76 = _0x466c0c(_0x39f72f(251))(_0x450495), _0x450495[_0x39f72f(252)] = { 'a': 123 }, _0x450495[_0x39f72f(253)](), expect(_0x5e5e76['text']())[_0x39f72f(248)]('123');
    })), it('InputTypeButtonActionExecutesInScope', inject(function (_0x2ebe02, _0x358b79) {
        var _0x1d49bb = _0x3d78d3, _0x317e77 = ![];
        _0x5e5e76 = _0x358b79(_0x1d49bb(254))(_0x2ebe02), _0x2ebe02[_0x1d49bb(255)] = {}, _0x2ebe02[_0x1d49bb(255)][_0x1d49bb(256)] = function () {
            _0x317e77 = !![];
        }, browserTrigger(_0x5e5e76, _0x1d49bb(257)), expect(_0x317e77)[_0x1d49bb(248)](!![]);
    })), it(_0x3d78d3(258), inject(function (_0x3cea7b, _0x9c45cf) {
        var _0x486c48 = _0x3d78d3, _0x555acb = '';
        _0x5e5e76 = _0x9c45cf(_0x486c48(259))(_0x3cea7b), _0x3cea7b[_0x486c48(260)] = function () {
            _0x555acb += 'click;';
        }, expect(_0x555acb)[_0x486c48(261)](''), browserTrigger(_0x5e5e76, _0x486c48(257)), expect(_0x555acb)[_0x486c48(261)](_0x486c48(262));
    })), it('ButtonElementActionExecutesInScope', inject(function (_0x12842c, _0x10a499) {
        var _0x1492aa = _0x3d78d3, _0x3681c9 = ![];
        _0x5e5e76 = _0x10a499(_0x1492aa(263))(_0x12842c), _0x12842c[_0x1492aa(255)] = {}, _0x12842c[_0x1492aa(255)]['save'] = function () {
            _0x3681c9 = !![];
        }, browserTrigger(_0x5e5e76, 'click'), expect(_0x3681c9)[_0x1492aa(248)](!![]);
    })), it(_0x3d78d3(264), inject(function (_0x39328d, _0x40a05) {
        var _0x27a927 = _0x3d78d3, _0x1adbaf = _0x40a05('<ul>' + _0x27a927(265) + _0x27a927(266))(_0x39328d), _0x1d0364 = [
                { 'a': 'A' },
                { 'a': 'B' }
            ];
        _0x39328d['model'] = { 'items': _0x1d0364 }, _0x39328d[_0x27a927(253)](), expect(sortedHtml(_0x1adbaf))[_0x27a927(248)](_0x27a927(267) + _0x27a927(268) + _0x27a927(269) + '<!-- end ngRepeat: item in model.items -->' + _0x27a927(270) + _0x27a927(271) + _0x27a927(266)), _0x1d0364[_0x27a927(272)]({ 'a': 'C' }), _0x39328d['$apply'](), expect(sortedHtml(_0x1adbaf))[_0x27a927(248)](_0x27a927(267) + _0x27a927(268) + _0x27a927(273) + '<!-- end ngRepeat: item in model.items -->' + _0x27a927(269) + _0x27a927(271) + '<li ng-bind="item.a" ng-repeat="item in model.items">B</li>' + _0x27a927(271) + _0x27a927(266)), _0x1d0364[_0x27a927(274)](), _0x39328d['$apply'](), expect(sortedHtml(_0x1adbaf))['toBe'](_0x27a927(267) + '<!-- ngRepeat: item in model.items -->' + _0x27a927(269) + '<!-- end ngRepeat: item in model.items -->' + '<li ng-bind="item.a" ng-repeat="item in model.items">B</li>' + _0x27a927(271) + '</ul>'), _0x1d0364[_0x27a927(274)](), _0x1d0364[_0x27a927(274)](), _0x39328d['$apply']();
    })), it('RepeaterContentDoesNotBind', inject(function (_0x41138c, _0x595b90) {
        var _0xc90c1e = _0x3d78d3;
        _0x5e5e76 = _0x595b90(_0xc90c1e(267) + '<LI ng-repeat="item in model.items"><span ng-bind="item.a"></span></li>' + _0xc90c1e(266))(_0x41138c), _0x41138c['model'] = { 'items': [{ 'a': 'A' }] }, _0x41138c['$apply'](), expect(sortedHtml(_0x5e5e76))[_0xc90c1e(248)](_0xc90c1e(267) + _0xc90c1e(268) + _0xc90c1e(275) + '<!-- end ngRepeat: item in model.items -->' + _0xc90c1e(266));
    })), it(_0x3d78d3(276), function () {
        var _0x5d137e = _0x3d78d3, _0x11912 = this[_0x5d137e(242)](_0x5d137e(277));
        expect(_0x11912[_0x5d137e(278)](_0x5d137e(279)))[_0x5d137e(280)](0);
    }), it(_0x3d78d3(281), inject(function (_0xac9438, _0x485716) {
        var _0xcd1fd5 = _0x3d78d3;
        _0x5e5e76 = _0x485716(_0xcd1fd5(282))(_0xac9438);
        var _0x2219e1 = {};
        _0xac9438[_0xcd1fd5(283)] = _0x2219e1, _0xac9438[_0xcd1fd5(253)](), expect(_0x5e5e76[0][_0xcd1fd5(284)]['length'])['toEqual'](1), _0x2219e1['name'] = _0xcd1fd5(285), _0xac9438[_0xcd1fd5(253)](), expect(_0x5e5e76[0][_0xcd1fd5(284)][_0xcd1fd5(286)])[_0xcd1fd5(261)](3), delete _0x2219e1[_0xcd1fd5(287)], _0xac9438[_0xcd1fd5(253)](), expect(_0x5e5e76[0][_0xcd1fd5(284)][_0xcd1fd5(286)])[_0xcd1fd5(261)](1);
    })), it(_0x3d78d3(288), function () {
        module(function (_0x27b596) {
            var _0x555246 = _0x1002;
            _0x27b596[_0x555246(289)](_0x555246(290));
        }), inject(function (_0x4a6b20, _0x5d0ea8, _0x27ba68) {
            var _0x31b8ad = _0x1002;
            _0x27ba68('<div attr="before {{error.throw()}} after"></div>', null, !![])(_0x4a6b20);
            var _0x44aab1 = _0x5d0ea8[_0x31b8ad(291)], _0x3f87d2 = 0;
            _0x4a6b20[_0x31b8ad(292)] = {
                'throw': function () {
                    var _0x51f8f7 = _0x31b8ad;
                    throw new Error(_0x51f8f7(293) + ++_0x3f87d2);
                }
            }, _0x4a6b20[_0x31b8ad(253)](), expect(_0x44aab1[_0x31b8ad(286)])[_0x31b8ad(294)][_0x31b8ad(261)](0), expect(_0x44aab1[_0x31b8ad(274)]())[_0x31b8ad(295)](/ErrorMsg1/), _0x44aab1[_0x31b8ad(286)] = 0, _0x4a6b20[_0x31b8ad(292)][_0x31b8ad(296)] = function () {
                return 'X';
            }, _0x4a6b20[_0x31b8ad(253)](), expect(_0x44aab1[_0x31b8ad(286)])[_0x31b8ad(295)]('0');
        });
    }), it('NestedRepeater', inject(function (_0x4a65bd, _0x5bb766) {
        var _0x2f89d8 = _0x3d78d3;
        _0x5e5e76 = _0x5bb766(_0x2f89d8(297) + _0x2f89d8(298) + _0x2f89d8(299) + '</div>' + _0x2f89d8(300))(_0x4a65bd), _0x4a65bd[_0x2f89d8(252)] = [
            {
                'name': 'a',
                'item': [
                    'a1',
                    'a2'
                ]
            },
            {
                'name': 'b',
                'item': [
                    'b1',
                    'b2'
                ]
            }
        ], _0x4a65bd['$apply'](), expect(sortedHtml(_0x5e5e76))[_0x2f89d8(248)](_0x2f89d8(297) + _0x2f89d8(301) + _0x2f89d8(302) + _0x2f89d8(303) + _0x2f89d8(304) + _0x2f89d8(305) + _0x2f89d8(306) + _0x2f89d8(305) + _0x2f89d8(300) + _0x2f89d8(307) + '<div name="b" ng-repeat="m in model">' + _0x2f89d8(303) + _0x2f89d8(308) + _0x2f89d8(305) + _0x2f89d8(309) + _0x2f89d8(305) + _0x2f89d8(300) + _0x2f89d8(307) + _0x2f89d8(300));
    })), it(_0x3d78d3(310), inject(function (_0x14587f, _0x330334) {
        var _0x6248cb = _0x3d78d3;
        _0x5e5e76 = _0x330334('<div ng-hide="hidden === 3"/>')(_0x14587f), _0x14587f[_0x6248cb(311)] = 3, _0x14587f[_0x6248cb(253)](), assertHidden(_0x5e5e76), _0x14587f[_0x6248cb(311)] = 2, _0x14587f[_0x6248cb(253)](), assertVisible(_0x5e5e76);
    })), it(_0x3d78d3(312), inject(function (_0x4db396, _0x16248b) {
        var _0xb8bc67 = _0x3d78d3;
        _0x5e5e76 = _0x16248b(_0xb8bc67(313))(_0x4db396), _0x4db396[_0xb8bc67(311)] = _0xb8bc67(314), _0x4db396['$apply'](), assertHidden(_0x5e5e76), _0x4db396[_0xb8bc67(311)] = _0xb8bc67(315), _0x4db396[_0xb8bc67(253)](), assertHidden(_0x5e5e76), _0x4db396[_0xb8bc67(311)] = 0, _0x4db396['$apply'](), assertVisible(_0x5e5e76), _0x4db396[_0xb8bc67(311)] = ![], _0x4db396[_0xb8bc67(253)](), assertVisible(_0x5e5e76), _0x4db396[_0xb8bc67(311)] = '', _0x4db396[_0xb8bc67(253)](), assertVisible(_0x5e5e76);
    })), it('ShowBinding', inject(function (_0x47a124, _0x100427) {
        var _0x55d298 = _0x3d78d3;
        _0x5e5e76 = _0x100427(_0x55d298(316))(_0x47a124), _0x47a124['show'] = _0x55d298(314), _0x47a124[_0x55d298(253)](), assertVisible(_0x5e5e76), _0x47a124[_0x55d298(317)] = 'false', _0x47a124[_0x55d298(253)](), assertVisible(_0x5e5e76), _0x47a124[_0x55d298(317)] = ![], _0x47a124[_0x55d298(253)](), assertHidden(_0x5e5e76), _0x47a124[_0x55d298(317)] = ![], _0x47a124['$apply'](), assertHidden(_0x5e5e76), _0x47a124[_0x55d298(317)] = '', _0x47a124[_0x55d298(253)](), assertHidden(_0x5e5e76);
    })), it(_0x3d78d3(318), inject(function (_0x51d839, _0x24419e) {
        var _0x17ed26 = _0x3d78d3;
        _0x5e5e76 = _0x24419e(_0x17ed26(319))(_0x51d839), _0x51d839[_0x17ed26(320)] = _0x17ed26(321), _0x51d839[_0x17ed26(253)](), expect(sortedHtml(_0x5e5e76))[_0x17ed26(248)](_0x17ed26(322)), _0x51d839[_0x17ed26(320)] = [
            'a',
            'b'
        ], _0x51d839['$apply'](), expect(sortedHtml(_0x5e5e76))['toBe'](_0x17ed26(323));
    })), it(_0x3d78d3(324), inject(function (_0x392451, _0x1233a6) {
        var _0x4f552f = _0x3d78d3;
        _0x5e5e76 = _0x1233a6(_0x4f552f(297) + _0x4f552f(325) + '</div>')(_0x392451), _0x392451['$apply']();
        var _0x296e33 = jqLite(_0x5e5e76[0]['childNodes'][1]), _0x305b1b = jqLite(_0x5e5e76[0][_0x4f552f(284)][3]);
        expect(_0x296e33['hasClass']('o'))[_0x4f552f(326)](), expect(_0x305b1b[_0x4f552f(327)]('e'))[_0x4f552f(326)](), expect(sortedHtml(_0x5e5e76))[_0x4f552f(248)](_0x4f552f(297) + '<!-- ngRepeat: i in [0,1] -->' + _0x4f552f(328) + _0x4f552f(329) + _0x4f552f(330) + _0x4f552f(329) + '</div>');
    })), it('BindStyle', inject(function (_0x2c01ed, _0x5ab4a1) {
        var _0x5e0e48 = _0x3d78d3;
        _0x5e5e76 = _0x5ab4a1(_0x5e0e48(331))(_0x2c01ed), _0x2c01ed[_0x5e0e48(332)](_0x5e0e48(333)), _0x2c01ed['$apply'](), expect(_0x5e5e76[_0x5e0e48(334)](_0x5e0e48(335)))[_0x5e0e48(248)](_0x5e0e48(336)), _0x2c01ed[_0x5e0e48(332)](_0x5e0e48(337)), _0x2c01ed[_0x5e0e48(253)]();
    })), it(_0x3d78d3(338), function () {
        module(function (_0x5b5c08) {
            var _0x3b4b06 = _0x1002;
            _0x5b5c08[_0x3b4b06(289)](_0x3b4b06(290));
        }), inject(function (_0x56fca6, _0x42c958, _0x55d072) {
            var _0x34234d = _0x1002, _0x7149f = _0x55d072('<a ng-click="action()">Add Phone</a>')(_0x56fca6);
            _0x56fca6['action'] = function () {
                var _0x126399 = _0x1002;
                throw new Error(_0x126399(339));
            }, browserTrigger(_0x7149f, _0x34234d(257)), expect(_0x42c958['errors'][0])['toMatch'](/MyError/);
        });
    }), it(_0x3d78d3(340), inject(function (_0x2d7863, _0x1b5e1e) {
        var _0x2ba1e3 = _0x3d78d3;
        _0x5e5e76 = _0x1b5e1e('<div>{{a}}' + _0x2ba1e3(341) + _0x2ba1e3(342) + '<div ng-non-bindable=\'true\'>{{c}}</div>' + _0x2ba1e3(300))(_0x2d7863), _0x2d7863['a'] = 123, _0x2d7863[_0x2ba1e3(253)](), expect(_0x5e5e76[_0x2ba1e3(343)]())[_0x2ba1e3(248)]('123{{a}}{{b}}{{c}}');
    })), it('ShouldTemplateBindPreElements', inject(function (_0x4bd208, _0x4b6e82) {
        var _0x4b69de = _0x3d78d3;
        _0x5e5e76 = _0x4b6e82(_0x4b69de(344))(_0x4bd208), _0x4bd208[_0x4b69de(287)] = 'World', _0x4bd208[_0x4b69de(253)](), expect(sortedHtml(_0x5e5e76))[_0x4b69de(248)](_0x4b69de(345));
    })), it(_0x3d78d3(346), inject(function (_0x46436e, _0x1d4b56) {
        var _0x3b05fc = _0x3d78d3;
        _0x5e5e76 = _0x1d4b56('<select ng-model="foo">' + _0x3b05fc(347) + _0x3b05fc(348) + _0x3b05fc(349) + _0x3b05fc(350))(_0x46436e), _0x46436e['a'] = 'A', _0x46436e['b'] = 'B', _0x46436e[_0x3b05fc(253)]();
        var _0x505d82 = _0x2ebe91(_0x5e5e76, 0), _0x1a8ae1 = _0x2ebe91(_0x5e5e76, 1), _0x114323 = _0x2ebe91(_0x5e5e76, 2);
        expect(_0x505d82[_0x3b05fc(351)]('value'))['toEqual']('A'), expect(_0x505d82['text']())['toEqual']('A'), expect(_0x1a8ae1[_0x3b05fc(351)](_0x3b05fc(352)))[_0x3b05fc(261)](''), expect(_0x1a8ae1[_0x3b05fc(343)]())[_0x3b05fc(261)]('B'), expect(_0x114323[_0x3b05fc(351)](_0x3b05fc(352)))[_0x3b05fc(261)]('C'), expect(_0x114323['text']())[_0x3b05fc(261)]('C');
    })), it(_0x3d78d3(353), inject(function (_0x5ccb63, _0x12b936, _0x819c48, _0x3df3f4) {
        var _0x20501a = _0x3d78d3;
        _0x5e5e76 = _0x12b936(_0x20501a(297) + _0x20501a(354) + _0x20501a(355) + _0x20501a(300))(_0x5ccb63), jqLite(_0x3df3f4[0]['body'])['append'](_0x819c48['append'](_0x5e5e76));
        var _0xcaf9fc = jqLite(_0x5e5e76[0]['childNodes'][0]), _0x590848 = jqLite(_0x5e5e76[0][_0x20501a(284)][1]);
        browserTrigger(_0xcaf9fc), expect(_0x5ccb63[_0x20501a(356)])['toBe'](_0x20501a(357)), expect(_0xcaf9fc[0][_0x20501a(358)])[_0x20501a(248)](!![]), expect(_0x590848[0][_0x20501a(358)])[_0x20501a(248)](![]), expect(_0xcaf9fc[_0x20501a(359)]())[_0x20501a(248)](_0x20501a(357)), browserTrigger(_0x590848), expect(_0x5ccb63['sex'])[_0x20501a(248)](_0x20501a(360)), expect(_0xcaf9fc[0][_0x20501a(358)])[_0x20501a(248)](![]), expect(_0x590848[0]['checked'])[_0x20501a(248)](!![]), expect(_0x590848[_0x20501a(359)]())[_0x20501a(248)](_0x20501a(360));
    })), it(_0x3d78d3(361), inject(function (_0x49d7e5, _0x5034e7) {
        var _0x56259d = _0x3d78d3;
        _0x5e5e76 = _0x5034e7(_0x56259d(267) + _0x56259d(362) + _0x56259d(266))(_0x49d7e5), _0x49d7e5[_0x56259d(253)](), expect(sortedHtml(_0x5e5e76))['toBe'](_0x56259d(267) + '<!-- ngRepeat: (k,v) in {a:0,b:1} -->' + '<li ng-bind="k + v" ng-repeat="(k,v) in {a:0,b:1}">a0</li>' + _0x56259d(363) + _0x56259d(364) + _0x56259d(363) + _0x56259d(266));
    })), it(_0x3d78d3(365), inject(function (_0x2d56fd, _0x23857e) {
        var _0x34f4d5 = _0x3d78d3;
        _0x5e5e76 = _0x23857e(_0x34f4d5(366))(_0x2d56fd), _0x2d56fd[_0x34f4d5(287)] = '', _0x2d56fd[_0x34f4d5(367)](_0x34f4d5(368), function () {
            var _0x3a4f0b = _0x34f4d5;
            _0x2d56fd[_0x3a4f0b(287)] = 123;
        }), _0x2d56fd[_0x34f4d5(368)] = _0x34f4d5(369), _0x2d56fd['$apply'](), expect(_0x2d56fd['name'])[_0x34f4d5(248)](123), expect(sortedHtml(_0x5e5e76))[_0x34f4d5(248)]('<div ng-bind="name">123</div>');
    })), it(_0x3d78d3(370), inject(function (_0x252412, _0x438fbf) {
        var _0xf4481b = _0x3d78d3;
        _0x5e5e76 = _0x438fbf('<div>{{\n 1 \n + \n 2 \n}}</div>')(_0x252412), _0x252412[_0xf4481b(253)](), expect(_0x5e5e76[_0xf4481b(343)]())[_0xf4481b(248)]('3');
    }));
});