const express = require(_0x121ac7(171)), api = require('../../../../api')['v2'], mw = require('./middleware'), apiMw = require('../../middleware'), shared = require('../../../shared');
module[_0x121ac7(172)] = function apiRoutes() {
    const _0x2d1ee8 = _0x121ac7, _0x453c15 = {
            'UodFQ': _0x2d1ee8(173),
            'nTyic': function (_0x1a78aa, _0x4c0857) {
                return _0x1a78aa(_0x4c0857);
            },
            'ySdAs': _0x2d1ee8(174),
            'BCJxR': function (_0x1a4241, _0x5779bf) {
                return _0x1a4241(_0x5779bf);
            },
            'JUhKE': '/posts/slug/:slug',
            'pYVcB': _0x2d1ee8(175),
            'KpZMl': function (_0x59835d, _0x57ce1e) {
                return _0x59835d(_0x57ce1e);
            },
            'UOMQi': _0x2d1ee8(176),
            'spymM': function (_0x20cf95, _0x547c67) {
                return _0x20cf95(_0x547c67);
            },
            'UrlLF': _0x2d1ee8(177),
            'qiDDn': function (_0x51ad59, _0x44160d) {
                return _0x51ad59(_0x44160d);
            },
            'kPMYg': _0x2d1ee8(178),
            'Sijsn': function (_0x50f903, _0x47ae03) {
                return _0x50f903(_0x47ae03);
            },
            'MUUer': function (_0x24558a, _0x1fe097) {
                return _0x24558a(_0x1fe097);
            },
            'xzDhB': _0x2d1ee8(179),
            'wZSel': _0x2d1ee8(180),
            'cGGnj': function (_0xaa96e4, _0x2bedef) {
                return _0xaa96e4(_0x2bedef);
            },
            'lKBlP': _0x2d1ee8(181),
            'dTsxG': '/settings/routes/yaml',
            'lxrwZ': function (_0x54dabe, _0x311f3b) {
                return _0x54dabe(_0x311f3b);
            },
            'OTNfr': 'routes',
            'eHLjD': _0x2d1ee8(182),
            'oMIaj': _0x2d1ee8(183),
            'dwMAC': _0x2d1ee8(184),
            'sBlHj': function (_0x5571aa, _0x304541) {
                return _0x5571aa(_0x304541);
            },
            'orxma': _0x2d1ee8(185),
            'EXLFi': _0x2d1ee8(186),
            'Thtxw': _0x2d1ee8(187),
            'TUGwz': _0x2d1ee8(188),
            'UTkOa': _0x2d1ee8(189),
            'ACtAb': _0x2d1ee8(190),
            'sfaty': _0x2d1ee8(191),
            'bXqQy': function (_0x56451c, _0x8f254e) {
                return _0x56451c(_0x8f254e);
            },
            'aLaPn': function (_0x5a9ebc, _0x127a5b) {
                return _0x5a9ebc(_0x127a5b);
            },
            'Tzgav': function (_0x3eb3dc, _0x553985) {
                return _0x3eb3dc(_0x553985);
            },
            'xJFWt': function (_0x2a9e16, _0x3411f7) {
                return _0x2a9e16(_0x3411f7);
            },
            'wAHLd': _0x2d1ee8(192),
            'XQNeF': _0x2d1ee8(193),
            'nnyXN': _0x2d1ee8(194),
            'oLaUV': _0x2d1ee8(195),
            'NkGMs': 'file',
            'hYBec': '/themes/:name/activate',
            'syEQH': function (_0x11f8dc, _0x505e75) {
                return _0x11f8dc(_0x505e75);
            },
            'DiXwx': _0x2d1ee8(196),
            'UfMUP': function (_0xe5e09f, _0x5c10bc) {
                return _0xe5e09f(_0x5c10bc);
            },
            'zaDmv': _0x2d1ee8(197),
            'wNlTV': function (_0x3a0874, _0x2a4f0d) {
                return _0x3a0874(_0x2a4f0d);
            },
            'MaWmm': _0x2d1ee8(198),
            'DhHTm': function (_0x5eb1e2, _0x5e6f35) {
                return _0x5eb1e2(_0x5e6f35);
            },
            'zYURS': _0x2d1ee8(199),
            'LdlCh': _0x2d1ee8(200),
            'kRbqP': _0x2d1ee8(201),
            'FShPJ': function (_0x48e666, _0xf4d19d) {
                return _0x48e666(_0xf4d19d);
            },
            'FSZZY': _0x2d1ee8(202),
            'Tefbq': _0x2d1ee8(203),
            'hzJXN': function (_0x4371ad, _0x127461) {
                return _0x4371ad(_0x127461);
            },
            'kvuWn': _0x2d1ee8(204),
            'PJFQE': function (_0x53cce1, _0x36ab9c) {
                return _0x53cce1(_0x36ab9c);
            },
            'PLqPP': _0x2d1ee8(205),
            'DyKWj': _0x2d1ee8(206),
            'Ssdqh': function (_0x22aa89, _0x168bb5) {
                return _0x22aa89(_0x168bb5);
            },
            'yeHsO': '/authentication/setup',
            'RKYhh': function (_0x286069, _0x15a335) {
                return _0x286069(_0x15a335);
            },
            'vmZMp': _0x2d1ee8(207),
            'beUEw': 'images',
            'vFwRm': '/invites',
            'mKQDd': _0x2d1ee8(208),
            'JpCqN': '/redirects/json',
            'GzmHA': function (_0x1deae8, _0x212cc1) {
                return _0x1deae8(_0x212cc1);
            },
            'XPiUr': function (_0x4eb6e6, _0x1f58c5) {
                return _0x4eb6e6(_0x1f58c5);
            },
            'NyznP': '/webhooks',
            'IvdgN': '/webhooks/:id',
            'mhAAm': function (_0x3cf1dd, _0x53985c) {
                return _0x3cf1dd(_0x53985c);
            },
            'pZrRe': _0x2d1ee8(209),
            'uwaUW': function (_0x57e623, _0x5f098c) {
                return _0x57e623(_0x5f098c);
            },
            'DOnEc': '/actions/:type/:id'
        }, _0x28c685 = express[_0x2d1ee8(210)](_0x2d1ee8(211));
    _0x28c685[_0x2d1ee8(212)] = _0x28c685[_0x2d1ee8(213)], _0x28c685[_0x2d1ee8(214)](apiMw[_0x2d1ee8(215)]);
    const _0x57f95f = api['http'];
    return _0x28c685['get'](_0x453c15[_0x2d1ee8(216)], mw[_0x2d1ee8(217)], _0x453c15[_0x2d1ee8(218)](_0x57f95f, api['site'][_0x2d1ee8(219)])), _0x28c685[_0x2d1ee8(220)](_0x2d1ee8(221), mw[_0x2d1ee8(222)], _0x57f95f(api[_0x2d1ee8(223)][_0x2d1ee8(219)])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(224)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(218)](_0x57f95f, api[_0x2d1ee8(225)][_0x2d1ee8(226)])), _0x28c685[_0x2d1ee8(227)](_0x453c15[_0x2d1ee8(224)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(228)](_0x57f95f, api[_0x2d1ee8(225)][_0x2d1ee8(229)])), _0x28c685[_0x2d1ee8(220)](_0x2d1ee8(175), mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(228)](_0x57f95f, api[_0x2d1ee8(225)][_0x2d1ee8(219)])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(230)], mw['authAdminApi'], _0x453c15['BCJxR'](_0x57f95f, api[_0x2d1ee8(225)]['read'])), _0x28c685[_0x2d1ee8(231)](_0x453c15[_0x2d1ee8(232)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(233)](_0x57f95f, api[_0x2d1ee8(225)][_0x2d1ee8(234)])), _0x28c685['del']('/posts/:id', mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(233)](_0x57f95f, api['posts'][_0x2d1ee8(235)])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(236)], mw['authAdminApi'], _0x57f95f(api[_0x2d1ee8(237)]['browse'])), _0x28c685['post'](_0x453c15[_0x2d1ee8(236)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(238)](_0x57f95f, api[_0x2d1ee8(237)][_0x2d1ee8(229)])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(239)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(240)](_0x57f95f, api['pages'][_0x2d1ee8(219)])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(241)], mw[_0x2d1ee8(222)], _0x453c15['Sijsn'](_0x57f95f, api[_0x2d1ee8(237)]['read'])), _0x28c685[_0x2d1ee8(231)]('/pages/:id', mw['authAdminApi'], _0x453c15[_0x2d1ee8(242)](_0x57f95f, api[_0x2d1ee8(237)][_0x2d1ee8(234)])), _0x28c685[_0x2d1ee8(212)](_0x453c15[_0x2d1ee8(239)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(242)](_0x57f95f, api['pages'][_0x2d1ee8(235)])), _0x28c685['get'](_0x2d1ee8(179), mw[_0x2d1ee8(222)], _0x453c15['MUUer'](_0x57f95f, api['integrations'][_0x2d1ee8(226)])), _0x28c685['get'](_0x2d1ee8(180), mw[_0x2d1ee8(222)], _0x453c15['MUUer'](_0x57f95f, api[_0x2d1ee8(243)][_0x2d1ee8(219)])), _0x28c685[_0x2d1ee8(227)](_0x453c15[_0x2d1ee8(244)], mw[_0x2d1ee8(222)], _0x453c15['MUUer'](_0x57f95f, api[_0x2d1ee8(243)]['add'])), _0x28c685[_0x2d1ee8(231)](_0x2d1ee8(180), mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(245)](_0x57f95f, api[_0x2d1ee8(243)][_0x2d1ee8(234)])), _0x28c685['del'](_0x453c15[_0x2d1ee8(246)], mw['authAdminApi'], _0x453c15[_0x2d1ee8(247)](_0x57f95f, api['integrations'][_0x2d1ee8(235)])), _0x28c685[_0x2d1ee8(231)](_0x453c15[_0x2d1ee8(248)], mw[_0x2d1ee8(249)], _0x57f95f(api['schedules'][_0x2d1ee8(250)])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(251)], mw['authAdminApi'], _0x453c15['lxrwZ'](_0x57f95f, api['settings'][_0x2d1ee8(252)])), _0x28c685['post'](_0x453c15['dTsxG'], mw['authAdminApi'], apiMw[_0x2d1ee8(253)][_0x2d1ee8(254)](_0x453c15[_0x2d1ee8(255)]), apiMw[_0x2d1ee8(253)][_0x2d1ee8(256)]({ 'type': _0x453c15[_0x2d1ee8(255)] }), _0x453c15[_0x2d1ee8(257)](_0x57f95f, api[_0x2d1ee8(258)][_0x2d1ee8(253)])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(259)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(257)](_0x57f95f, api['settings'][_0x2d1ee8(226)])), _0x28c685['get'](_0x453c15[_0x2d1ee8(260)], mw[_0x2d1ee8(222)], _0x57f95f(api[_0x2d1ee8(258)]['read'])), _0x28c685['put'](_0x453c15[_0x2d1ee8(259)], mw['authAdminApi'], _0x57f95f(api[_0x2d1ee8(258)][_0x2d1ee8(234)])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(261)], mw[_0x2d1ee8(222)], _0x453c15['sBlHj'](_0x57f95f, api['users'][_0x2d1ee8(226)])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(262)], mw[_0x2d1ee8(222)], _0x57f95f(api[_0x2d1ee8(263)]['read'])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(264)], mw[_0x2d1ee8(222)], _0x57f95f(api[_0x2d1ee8(263)]['read'])), _0x28c685['get'](_0x453c15[_0x2d1ee8(265)], mw[_0x2d1ee8(222)], _0x57f95f(api[_0x2d1ee8(263)][_0x2d1ee8(219)])), _0x28c685[_0x2d1ee8(231)](_0x453c15[_0x2d1ee8(266)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(267)](_0x57f95f, api[_0x2d1ee8(263)][_0x2d1ee8(268)])), _0x28c685[_0x2d1ee8(231)](_0x453c15[_0x2d1ee8(269)], mw[_0x2d1ee8(222)], _0x57f95f(api['users']['transferOwnership'])), _0x28c685['put'](_0x453c15['orxma'], mw[_0x2d1ee8(222)], _0x57f95f(api[_0x2d1ee8(263)][_0x2d1ee8(234)])), _0x28c685[_0x2d1ee8(212)](_0x453c15[_0x2d1ee8(262)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(267)](_0x57f95f, api['users']['destroy'])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(270)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(267)](_0x57f95f, api['tags']['browse'])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(271)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(272)](_0x57f95f, api[_0x2d1ee8(273)]['read'])), _0x28c685[_0x2d1ee8(220)]('/tags/slug/:slug', mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(274)](_0x57f95f, api[_0x2d1ee8(273)][_0x2d1ee8(219)])), _0x28c685[_0x2d1ee8(227)](_0x453c15[_0x2d1ee8(270)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(274)](_0x57f95f, api[_0x2d1ee8(273)][_0x2d1ee8(229)])), _0x28c685['put'](_0x453c15[_0x2d1ee8(271)], mw['authAdminApi'], _0x453c15['Tzgav'](_0x57f95f, api[_0x2d1ee8(273)][_0x2d1ee8(234)])), _0x28c685[_0x2d1ee8(212)](_0x453c15[_0x2d1ee8(271)], mw['authAdminApi'], _0x57f95f(api[_0x2d1ee8(273)][_0x2d1ee8(235)])), _0x28c685['get'](_0x2d1ee8(275), mw[_0x2d1ee8(222)], _0x453c15['xJFWt'](_0x57f95f, api[_0x2d1ee8(276)]['browse'])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(277)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(278)](_0x57f95f, api['slugs'][_0x2d1ee8(279)])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(280)], mw[_0x2d1ee8(222)], _0x453c15['xJFWt'](_0x57f95f, api['themes'][_0x2d1ee8(226)])), _0x28c685['get'](_0x453c15[_0x2d1ee8(281)], mw[_0x2d1ee8(222)], _0x57f95f(api[_0x2d1ee8(282)][_0x2d1ee8(252)])), _0x28c685[_0x2d1ee8(227)](_0x453c15[_0x2d1ee8(283)], mw['authAdminApi'], apiMw[_0x2d1ee8(253)]['single'](_0x453c15['NkGMs']), apiMw[_0x2d1ee8(253)][_0x2d1ee8(256)]({ 'type': _0x2d1ee8(282) }), _0x453c15[_0x2d1ee8(278)](_0x57f95f, api[_0x2d1ee8(282)][_0x2d1ee8(253)])), _0x28c685[_0x2d1ee8(231)](_0x453c15['hYBec'], mw['authAdminApi'], _0x453c15[_0x2d1ee8(284)](_0x57f95f, api[_0x2d1ee8(282)][_0x2d1ee8(285)])), _0x28c685['del'](_0x453c15[_0x2d1ee8(286)], mw[_0x2d1ee8(222)], _0x57f95f(api[_0x2d1ee8(282)][_0x2d1ee8(235)])), _0x28c685[_0x2d1ee8(220)]('/notifications', mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(287)](_0x57f95f, api[_0x2d1ee8(288)][_0x2d1ee8(226)])), _0x28c685[_0x2d1ee8(227)](_0x453c15[_0x2d1ee8(289)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(290)](_0x57f95f, api[_0x2d1ee8(288)][_0x2d1ee8(229)])), _0x28c685[_0x2d1ee8(212)](_0x453c15[_0x2d1ee8(291)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(292)](_0x57f95f, api[_0x2d1ee8(288)][_0x2d1ee8(235)])), _0x28c685['get'](_0x2d1ee8(199), mw[_0x2d1ee8(222)], _0x57f95f(api['db'][_0x2d1ee8(293)])), _0x28c685[_0x2d1ee8(227)](_0x453c15[_0x2d1ee8(294)], mw[_0x2d1ee8(222)], apiMw[_0x2d1ee8(253)][_0x2d1ee8(254)](_0x453c15[_0x2d1ee8(295)]), apiMw[_0x2d1ee8(253)][_0x2d1ee8(256)]({ 'type': 'db' }), _0x57f95f(api['db'][_0x2d1ee8(296)])), _0x28c685[_0x2d1ee8(212)](_0x2d1ee8(199), mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(292)](_0x57f95f, api['db'][_0x2d1ee8(297)])), _0x28c685[_0x2d1ee8(227)](_0x453c15[_0x2d1ee8(298)], mw['authAdminApi'], _0x453c15[_0x2d1ee8(299)](_0x57f95f, api['db'][_0x2d1ee8(300)])), _0x28c685[_0x2d1ee8(227)](_0x453c15['FSZZY'], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(299)](_0x57f95f, api['mail'][_0x2d1ee8(301)])), _0x28c685[_0x2d1ee8(227)](_0x453c15[_0x2d1ee8(302)], mw[_0x2d1ee8(222)], _0x57f95f(api[_0x2d1ee8(303)]['sendTest'])), _0x28c685[_0x2d1ee8(227)](_0x2d1ee8(304), mw['authAdminApi'], _0x453c15[_0x2d1ee8(305)](_0x57f95f, api[_0x2d1ee8(306)][_0x2d1ee8(307)])), _0x28c685['get'](_0x453c15[_0x2d1ee8(308)], mw[_0x2d1ee8(222)], _0x453c15['PJFQE'](_0x57f95f, api[_0x2d1ee8(309)][_0x2d1ee8(219)])), _0x28c685[_0x2d1ee8(227)](_0x453c15[_0x2d1ee8(308)], shared[_0x2d1ee8(310)][_0x2d1ee8(311)][_0x2d1ee8(312)], shared[_0x2d1ee8(310)][_0x2d1ee8(311)]['userLogin'], _0x453c15[_0x2d1ee8(313)](_0x57f95f, api['session'][_0x2d1ee8(229)])), _0x28c685['del'](_0x453c15[_0x2d1ee8(308)], mw['authAdminApi'], _0x453c15[_0x2d1ee8(313)](_0x57f95f, api[_0x2d1ee8(309)][_0x2d1ee8(213)])), _0x28c685[_0x2d1ee8(227)](_0x453c15[_0x2d1ee8(314)], shared[_0x2d1ee8(310)][_0x2d1ee8(311)]['globalReset'], shared[_0x2d1ee8(310)][_0x2d1ee8(311)][_0x2d1ee8(315)], _0x57f95f(api[_0x2d1ee8(316)][_0x2d1ee8(317)])), _0x28c685[_0x2d1ee8(231)](_0x453c15[_0x2d1ee8(314)], shared['middlewares']['brute'][_0x2d1ee8(312)], _0x57f95f(api[_0x2d1ee8(316)][_0x2d1ee8(318)])), _0x28c685[_0x2d1ee8(227)](_0x453c15['DyKWj'], _0x57f95f(api[_0x2d1ee8(316)][_0x2d1ee8(319)])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(320)], _0x453c15['Ssdqh'](_0x57f95f, api[_0x2d1ee8(316)]['isInvitation'])), _0x28c685[_0x2d1ee8(227)](_0x453c15[_0x2d1ee8(321)], _0x453c15[_0x2d1ee8(322)](_0x57f95f, api[_0x2d1ee8(316)][_0x2d1ee8(323)])), _0x28c685[_0x2d1ee8(231)](_0x453c15[_0x2d1ee8(321)], mw[_0x2d1ee8(222)], _0x57f95f(api[_0x2d1ee8(316)][_0x2d1ee8(324)])), _0x28c685[_0x2d1ee8(220)](_0x453c15[_0x2d1ee8(321)], _0x57f95f(api[_0x2d1ee8(316)][_0x2d1ee8(325)])), _0x28c685['post'](_0x453c15['vmZMp'], mw[_0x2d1ee8(222)], apiMw[_0x2d1ee8(253)][_0x2d1ee8(254)](_0x453c15[_0x2d1ee8(326)]), apiMw['upload'][_0x2d1ee8(256)]({ 'type': _0x453c15[_0x2d1ee8(327)] }), apiMw[_0x2d1ee8(328)], _0x453c15['RKYhh'](_0x57f95f, api['images'][_0x2d1ee8(253)])), _0x28c685[_0x2d1ee8(220)](_0x453c15['vFwRm'], mw[_0x2d1ee8(222)], _0x57f95f(api['invites']['browse'])), _0x28c685[_0x2d1ee8(220)](_0x453c15['mKQDd'], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(322)](_0x57f95f, api['invites'][_0x2d1ee8(219)])), _0x28c685[_0x2d1ee8(227)](_0x453c15[_0x2d1ee8(329)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(322)](_0x57f95f, api[_0x2d1ee8(330)][_0x2d1ee8(229)])), _0x28c685[_0x2d1ee8(212)]('/invites/:id', mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(322)](_0x57f95f, api['invites'][_0x2d1ee8(235)])), _0x28c685[_0x2d1ee8(220)](_0x453c15['JpCqN'], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(331)](_0x57f95f, api[_0x2d1ee8(332)][_0x2d1ee8(252)])), _0x28c685[_0x2d1ee8(227)](_0x2d1ee8(333), mw[_0x2d1ee8(222)], apiMw[_0x2d1ee8(253)][_0x2d1ee8(254)](_0x2d1ee8(332)), apiMw[_0x2d1ee8(253)]['validation']({ 'type': _0x2d1ee8(332) }), _0x453c15[_0x2d1ee8(334)](_0x57f95f, api[_0x2d1ee8(332)][_0x2d1ee8(253)])), _0x28c685[_0x2d1ee8(227)](_0x453c15[_0x2d1ee8(335)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(334)](_0x57f95f, api[_0x2d1ee8(336)][_0x2d1ee8(229)])), _0x28c685[_0x2d1ee8(231)]('/webhooks/:id', mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(334)](_0x57f95f, api[_0x2d1ee8(336)][_0x2d1ee8(234)])), _0x28c685[_0x2d1ee8(212)](_0x453c15['IvdgN'], mw['authAdminApi'], _0x453c15[_0x2d1ee8(337)](_0x57f95f, api[_0x2d1ee8(336)]['destroy'])), _0x28c685['get'](_0x453c15[_0x2d1ee8(338)], mw[_0x2d1ee8(222)], _0x453c15[_0x2d1ee8(339)](_0x57f95f, api[_0x2d1ee8(340)][_0x2d1ee8(219)])), _0x28c685['get'](_0x453c15[_0x2d1ee8(341)], mw[_0x2d1ee8(222)], _0x453c15['uwaUW'](_0x57f95f, api[_0x2d1ee8(342)][_0x2d1ee8(226)])), _0x28c685;
};