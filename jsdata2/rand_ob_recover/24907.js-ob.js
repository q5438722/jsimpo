const assert = require('assert'), _ = require('lodash'), request = require(_0x3cba81(346)), jsonServer = require(_0x3cba81(347));
describe(_0x3cba81(348), () => {
    const _0x2bbfd2 = _0x3cba81, _0x470394 = {
            'eKPwQ': '0|13|3|14|11|9|4|1|2|7|15|6|10|12|8|5',
            'bPPFG': 'Photography',
            'CBWSD': 'photo',
            'fRODZ': _0x2bbfd2(349),
            'bXgPl': 'dewey',
            'YfXfV': _0x2bbfd2(350),
            'TRNyM': _0x2bbfd2(351),
            'AzbNs': _0x2bbfd2(352),
            'HGSOG': _0x2bbfd2(353),
            'irCoF': _0x2bbfd2(354),
            'nCToa': 'Frank',
            'sHxSz': 'Grace',
            'gClrv': 'Argentina',
            'fQpsC': _0x2bbfd2(355),
            'Uklwh': _0x2bbfd2(356),
            'fXnPJ': _0x2bbfd2(357),
            'kEGYk': _0x2bbfd2(358),
            'sgBpm': _0x2bbfd2(359),
            'EVqvR': _0x2bbfd2(360),
            'mXINo': _0x2bbfd2(361),
            'bUbJN': _0x2bbfd2(362),
            'Uimzs': _0x2bbfd2(363),
            'HxwKz': _0x2bbfd2(364),
            'aNakc': function (_0x369b96, _0x1d8b1f, _0x378ff3) {
                return _0x369b96(_0x1d8b1f, _0x378ff3);
            },
            'dxyce': _0x2bbfd2(365),
            'EOTeB': function (_0x431040, _0x1a0c93, _0x3c9ede) {
                return _0x431040(_0x1a0c93, _0x3c9ede);
            },
            'JmFYE': function (_0x4c0f79, _0x1c03fd) {
                return _0x4c0f79(_0x1c03fd);
            },
            'JbniD': _0x2bbfd2(366),
            'CJmCu': _0x2bbfd2(367),
            'qfEeh': '2|3|1|4|5|0|6',
            'sfRnP': function (_0x2e07c5, _0x245507, _0x5e5988) {
                return _0x2e07c5(_0x245507, _0x5e5988);
            },
            'kZtFq': _0x2bbfd2(368),
            'SDNCV': function (_0x4494f6, _0x5a2e18, _0x120ba9) {
                return _0x4494f6(_0x5a2e18, _0x120ba9);
            },
            'vLGnW': _0x2bbfd2(369),
            'dQLub': function (_0x1e3e2b, _0x431498, _0x4804c2) {
                return _0x1e3e2b(_0x431498, _0x4804c2);
            },
            'xSrsj': _0x2bbfd2(370),
            'JAfEO': _0x2bbfd2(371),
            'bBcLx': function (_0x334d2f, _0x5218d9, _0x5d72b8) {
                return _0x334d2f(_0x5218d9, _0x5d72b8);
            },
            'WISVy': _0x2bbfd2(372),
            'QEkZx': 'should not fail with null value',
            'EYvYc': _0x2bbfd2(373),
            'MOcGj': function (_0xd48e22, _0x26dc86, _0x49f536) {
                return _0xd48e22(_0x26dc86, _0x49f536);
            },
            'VeIUx': _0x2bbfd2(374),
            'HarpM': function (_0x35b608, _0x2e06d6, _0x1d05a4) {
                return _0x35b608(_0x2e06d6, _0x1d05a4);
            },
            'HREmR': function (_0x51dc6b, _0x2f51ed, _0xa77a76) {
                return _0x51dc6b(_0x2f51ed, _0xa77a76);
            },
            'lyXvG': _0x2bbfd2(375),
            'OIWfP': function (_0x4b90b9, _0x373604, _0x353fcd) {
                return _0x4b90b9(_0x373604, _0x353fcd);
            },
            'vsCyz': _0x2bbfd2(376),
            'waLjf': function (_0x5d6fe0, _0x317c4c, _0x12bef0) {
                return _0x5d6fe0(_0x317c4c, _0x12bef0);
            },
            'TqFIc': _0x2bbfd2(377),
            'QdCQu': _0x2bbfd2(378),
            'YBeTO': 'should sort on numerical field',
            'oedLu': _0x2bbfd2(379),
            'ViFWv': function (_0x152da7, _0x26c410, _0x1db31d) {
                return _0x152da7(_0x26c410, _0x1db31d);
            },
            'QRYKh': 'should respond with json and sort on a field',
            'hTwJT': _0x2bbfd2(380),
            'eekBw': function (_0x29f120, _0x585f89, _0x83ace3) {
                return _0x29f120(_0x585f89, _0x83ace3);
            },
            'oYprF': function (_0x27649f, _0x1d3c6a, _0x261198) {
                return _0x27649f(_0x1d3c6a, _0x261198);
            },
            'IPdAa': '<http://localhost/list?_page=1&_limit=1>; rel="first"',
            'IGBnA': '<http://localhost/list?_page=1&_limit=1>; rel="prev"',
            'iImQR': '<http://localhost/list?_page=3&_limit=1>; rel="next"',
            'MStlk': _0x2bbfd2(381),
            'xqxSe': function (_0x419d2e, _0x2a27f9) {
                return _0x419d2e(_0x2a27f9);
            },
            'sOlzR': _0x2bbfd2(382),
            'aXVdQ': 'host',
            'gOOdz': _0x2bbfd2(383),
            'FqgvQ': _0x2bbfd2(384),
            'IbOyy': _0x2bbfd2(385),
            'IfXXS': _0x2bbfd2(386),
            'pbWQN': _0x2bbfd2(387),
            'UtfpE': _0x2bbfd2(388),
            'jOyOy': function (_0x3d4765, _0x440c38, _0x5c9b73) {
                return _0x3d4765(_0x440c38, _0x5c9b73);
            },
            'zVFdj': _0x2bbfd2(389),
            'HGamI': _0x2bbfd2(390),
            'gNbJn': function (_0xab98e8, _0x273146, _0x39af78) {
                return _0xab98e8(_0x273146, _0x39af78);
            },
            'Ylvqh': _0x2bbfd2(391),
            'vhfYQ': 'should support string id, respond with json and corresponding resource',
            'GEjME': _0x2bbfd2(392),
            'qAJCD': function (_0x2100ec, _0x35ee73, _0x41cb7c) {
                return _0x2100ec(_0x35ee73, _0x41cb7c);
            },
            'uhKFm': _0x2bbfd2(393),
            'PmoRj': function (_0x2c293f, _0x253776) {
                return _0x2c293f(_0x253776);
            },
            'uopmw': function (_0x2e96b9, _0x40664c, _0x4a7aed) {
                return _0x2e96b9(_0x40664c, _0x4a7aed);
            },
            'GvPEm': _0x2bbfd2(394),
            'zVkNs': function (_0x45824d, _0x21304f) {
                return _0x45824d(_0x21304f);
            },
            'HisQe': _0x2bbfd2(395),
            'pKMlz': _0x2bbfd2(396),
            'pWbjf': function (_0x36dbe3, _0x3cdaf0, _0x2cbfca) {
                return _0x36dbe3(_0x3cdaf0, _0x2cbfca);
            },
            'nCFkO': _0x2bbfd2(397),
            'YgDPN': function (_0x2abb54, _0x551914) {
                return _0x2abb54(_0x551914);
            },
            'wszrw': _0x2bbfd2(398),
            'IDHgx': _0x2bbfd2(399),
            'scfSq': function (_0x32574c, _0x2815bb, _0x1721b0) {
                return _0x32574c(_0x2815bb, _0x1721b0);
            },
            'MUFCI': 'should respond with corresponding resource and expanded inner resources',
            'Ojzmv': function (_0x2673d6, _0x2b3a99) {
                return _0x2673d6(_0x2b3a99);
            },
            'IyduO': function (_0x1352f1, _0x15b8fd) {
                return _0x1352f1 > _0x15b8fd;
            },
            'hoUPh': function (_0x1f1e81, _0x4efa8b) {
                return _0x1f1e81 - _0x4efa8b;
            },
            'SpJBg': _0x2bbfd2(400),
            'MPXBa': 'should delay response',
            'eJXXW': _0x2bbfd2(401),
            'PSTQd': 'Access-Control-Expose-Headers',
            'iGewf': _0x2bbfd2(402),
            'EAbrE': function (_0x15976f, _0x21bb98) {
                return _0x15976f(_0x21bb98);
            },
            'LLVAY': _0x2bbfd2(403),
            'lVQBj': _0x2bbfd2(404),
            'OHRWm': 'should respond with json, create a resource and increment id',
            'ENSXb': 'should respond with json, create a resource and generate string id',
            'GvoUs': _0x2bbfd2(405),
            'LinCN': _0x2bbfd2(406),
            'nrZDz': _0x2bbfd2(407),
            'WHpqI': function (_0x1b8e3c, _0x388ca0, _0x423d01) {
                return _0x1b8e3c(_0x388ca0, _0x423d01);
            },
            'GVljv': 'should respond with json and replace resource',
            'AuWKU': function (_0x15600b, _0x31548c) {
                return _0x15600b > _0x31548c;
            },
            'rgtVd': function (_0x4df671, _0xadae67) {
                return _0x4df671 - _0xadae67;
            },
            'rfWQK': function (_0x3a6fe0, _0x59bf34) {
                return _0x3a6fe0(_0x59bf34);
            },
            'liame': _0x2bbfd2(408),
            'ZAePl': _0x2bbfd2(409),
            'TEteE': function (_0x2e4fc3, _0x3167a9) {
                return _0x2e4fc3(_0x3167a9);
            },
            'EcXUF': function (_0x3835d6, _0x4697c2, _0x39f7f1) {
                return _0x3835d6(_0x4697c2, _0x39f7f1);
            },
            'muQSz': function (_0xe647d9, _0x4fd2b9) {
                return _0xe647d9(_0x4fd2b9);
            },
            'VPDJd': _0x2bbfd2(410),
            'xxapH': function (_0xec4017, _0x1e953d, _0x3151ab) {
                return _0xec4017(_0x1e953d, _0x3151ab);
            },
            'WrjUV': function (_0x5baac7, _0x17c007, _0x1ff032) {
                return _0x5baac7(_0x17c007, _0x1ff032);
            },
            'Ublkk': _0x2bbfd2(411),
            'orInG': function (_0x3b479d, _0xf8cd9a, _0x299df9) {
                return _0x3b479d(_0xf8cd9a, _0x299df9);
            },
            'xpVkX': _0x2bbfd2(412),
            'CdMve': _0x2bbfd2(413),
            'wtluu': _0x2bbfd2(414),
            'MeEIG': 'GET /style.css',
            'ebcMc': function (_0x5ced36, _0x130018) {
                return _0x5ced36(_0x130018);
            },
            'Fcbug': function (_0x5e2104, _0x463d92, _0x1df84d) {
                return _0x5e2104(_0x463d92, _0x1df84d);
            },
            'oWSVo': _0x2bbfd2(415),
            'yEfCQ': _0x2bbfd2(416),
            'XYVtA': function (_0x4b9463, _0x1cc962, _0x27fb6b) {
                return _0x4b9463(_0x1cc962, _0x27fb6b);
            },
            'wCRgN': 'should rewrite using prefix',
            'JMOwb': _0x2bbfd2(417),
            'yGgkz': function (_0x3b0074, _0x23bbca, _0x4e9511) {
                return _0x3b0074(_0x23bbca, _0x4e9511);
            },
            'iZlTz': _0x2bbfd2(418),
            'XzWeb': function (_0x1d89a0, _0x5f3be6, _0xbd4b0e) {
                return _0x1d89a0(_0x5f3be6, _0xbd4b0e);
            },
            'KyKIy': _0x2bbfd2(419),
            'FHJtf': function (_0x50ecf2, _0x2a7a03, _0x5476f2) {
                return _0x50ecf2(_0x2a7a03, _0x5476f2);
            },
            'VLIMX': 'should expose routes',
            'RLwCW': _0x2bbfd2(420),
            'WZFjU': function (_0x1ffe2b, _0x4faf04) {
                return _0x1ffe2b(_0x4faf04);
            },
            'mnOxq': function (_0x543ac6, _0xd5838e, _0x77746b) {
                return _0x543ac6(_0xd5838e, _0x77746b);
            },
            'EDsOI': _0x2bbfd2(421),
            'bOSYy': _0x2bbfd2(422),
            'VsgSP': _0x2bbfd2(423),
            'eGpQb': _0x2bbfd2(424),
            'hVBSS': function (_0x4b7210, _0x2efac3) {
                return _0x4b7210(_0x2efac3);
            },
            'Ljmqf': _0x2bbfd2(425),
            'xTOEx': _0x2bbfd2(426),
            'qGtlV': function (_0x4255ac, _0x4ea08d, _0x3815df) {
                return _0x4255ac(_0x4ea08d, _0x3815df);
            },
            'ywwuF': 'GET /:resource?q=',
            'FvDDC': function (_0x3b9888, _0x215105, _0x173046) {
                return _0x3b9888(_0x215105, _0x173046);
            },
            'kHTWZ': _0x2bbfd2(427),
            'PwHPS': _0x2bbfd2(428),
            'wSzRa': _0x2bbfd2(429),
            'OmybT': function (_0x11a159, _0x1f5086, _0x541dca) {
                return _0x11a159(_0x1f5086, _0x541dca);
            },
            'GSnEo': 'GET /:resource?_page=',
            'XoQWY': function (_0xabefb8, _0x1aecea, _0x427704) {
                return _0xabefb8(_0x1aecea, _0x427704);
            },
            'cJgAj': 'GET /:resource?_page=&_limit=',
            'ZtqKf': _0x2bbfd2(430),
            'ekzWS': 'GET /:resource?attr_ne=',
            'oCqAz': function (_0x5e3a90, _0x3f2ed9, _0x7a7e20) {
                return _0x5e3a90(_0x3f2ed9, _0x7a7e20);
            },
            'mZgut': _0x2bbfd2(431),
            'GAyfE': _0x2bbfd2(432),
            'gQvCO': function (_0x2e1b5f, _0x437913, _0x171e62) {
                return _0x2e1b5f(_0x437913, _0x171e62);
            },
            'PpHYV': function (_0x52a4a1, _0xbc2324, _0x4a09c2) {
                return _0x52a4a1(_0xbc2324, _0x4a09c2);
            },
            'skkhw': 'GET /:resource/:id?_embed=',
            'DORHv': 'GET /:resource/:id?_embed=&_embed=',
            'RqzyT': 'GET /:resource/:id?_expand=',
            'cGOmo': function (_0x20fdaf, _0x557eb1, _0x198fb7) {
                return _0x20fdaf(_0x557eb1, _0x198fb7);
            },
            'hslwS': _0x2bbfd2(433),
            'EDuJG': 'GET /:resource/:id?_expand=&_expand=',
            'uTFGK': _0x2bbfd2(434),
            'bnyUD': _0x2bbfd2(435),
            'SEuuY': function (_0x509549, _0x2d8934, _0x115758) {
                return _0x509549(_0x2d8934, _0x115758);
            },
            'KRoKn': _0x2bbfd2(436),
            'mmMoj': _0x2bbfd2(437),
            'dntPu': _0x2bbfd2(438),
            'ZRWtw': _0x2bbfd2(439),
            'woVaH': _0x2bbfd2(440),
            'MCnCI': function (_0x339f73, _0x38ac8f, _0x3b5edb) {
                return _0x339f73(_0x38ac8f, _0x3b5edb);
            },
            'qnbEY': function (_0x2a04e6, _0x564e7c, _0x53488c) {
                return _0x2a04e6(_0x564e7c, _0x53488c);
            },
            'CxyZw': 'Static routes',
            'JofSM': _0x2bbfd2(441),
            'iANLL': _0x2bbfd2(442),
            'uBbxX': _0x2bbfd2(443),
            'lSeYw': function (_0x594141, _0x29155e, _0x3c3c62) {
                return _0x594141(_0x29155e, _0x3c3c62);
            },
            'iBEyu': 'router.render',
            'udimx': _0x2bbfd2(444)
        };
    let _0x50a97b, _0x9c01c2, _0x470806;
    const _0x3fd971 = {
        '/api/*': _0x2bbfd2(445),
        '/blog/posts/:id/show': _0x2bbfd2(424),
        '/comments/special/:userId-:body': _0x470394[_0x2bbfd2(446)],
        '/firstpostwithcomments': _0x2bbfd2(396),
        '/articles\\?_id=:id': _0x470394['eGpQb']
    };
    _0x470394[_0x2bbfd2(447)](beforeEach, () => {
        const _0x434a62 = _0x2bbfd2, _0xe02e8a = _0x470394[_0x434a62(448)]['split']('|');
        let _0x1c97e5 = -4722 + 2 * -1781 + -2071 * -4;
        while (!![]) {
            switch (_0xe02e8a[_0x1c97e5++]) {
            case '0':
                _0x470806 = {};
                continue;
            case '1':
                _0x470806[_0x434a62(449)] = [{ 'id': _0x434a62(450) }];
                continue;
            case '2':
                _0x470806[_0x434a62(451)] = [
                    { 'a': { 'b': 1 } },
                    { 'a': 1 }
                ];
                continue;
            case '3':
                _0x470806[_0x434a62(452)] = [
                    {
                        'id': 1,
                        'body': _0x434a62(453)
                    },
                    {
                        'id': 2,
                        'body': _0x470394['bPPFG']
                    },
                    {
                        'id': 3,
                        'body': _0x470394[_0x434a62(454)]
                    }
                ];
                continue;
            case '4':
                _0x470806[_0x434a62(455)] = [{
                        'id': _0x434a62(456),
                        'url': _0x470394['fRODZ'],
                        'postId': 1,
                        'userId': 1
                    }];
                continue;
            case '5':
                _0x50a97b[_0x434a62(457)](_0x9c01c2);
                continue;
            case '6':
                _0x50a97b = jsonServer['create']();
                continue;
            case '7':
                _0x470806['nested'] = [
                    { 'resource': { 'name': _0x470394[_0x434a62(458)] } },
                    { 'resource': { 'name': _0x434a62(459) } },
                    { 'resource': { 'name': _0x470394[_0x434a62(460)] } }
                ];
                continue;
            case '8':
                _0x50a97b[_0x434a62(457)](jsonServer[_0x434a62(461)](_0x3fd971));
                continue;
            case '9':
                _0x470806[_0x434a62(462)] = [
                    {
                        'id': 1,
                        'name': _0x434a62(463),
                        'country': _0x470394[_0x434a62(464)],
                        'total': 100
                    },
                    {
                        'id': 2,
                        'name': _0x470394[_0x434a62(465)],
                        'country': _0x470394[_0x434a62(464)],
                        'total': 200
                    },
                    {
                        'id': 3,
                        'name': 'Carley',
                        'country': _0x470394[_0x434a62(464)],
                        'total': 300
                    },
                    {
                        'id': 4,
                        'name': _0x470394[_0x434a62(466)],
                        'country': _0x470394[_0x434a62(467)],
                        'total': 30
                    },
                    {
                        'id': 5,
                        'name': _0x434a62(468),
                        'country': _0x470394[_0x434a62(467)],
                        'total': 20
                    },
                    {
                        'id': 6,
                        'name': _0x470394[_0x434a62(469)],
                        'country': _0x470394[_0x434a62(467)],
                        'total': 10
                    },
                    {
                        'id': 7,
                        'name': _0x470394[_0x434a62(470)],
                        'country': _0x470394[_0x434a62(471)],
                        'total': 1
                    },
                    {
                        'id': 8,
                        'name': _0x434a62(472),
                        'country': _0x434a62(473),
                        'total': 2
                    },
                    {
                        'id': 9,
                        'name': _0x470394[_0x434a62(474)],
                        'country': _0x470394[_0x434a62(471)],
                        'total': 3
                    }
                ];
                continue;
            case '10':
                _0x9c01c2 = jsonServer['router'](_0x470806);
                continue;
            case '11':
                _0x470806[_0x434a62(475)] = [
                    {
                        'id': 1,
                        'body': _0x470394[_0x434a62(476)],
                        'published': !![],
                        'postId': 1,
                        'userId': 1
                    },
                    {
                        'id': 2,
                        'body': _0x470394[_0x434a62(477)],
                        'published': ![],
                        'postId': 1,
                        'userId': 2
                    },
                    {
                        'id': 3,
                        'body': _0x470394[_0x434a62(478)],
                        'published': ![],
                        'postId': 2,
                        'userId': 1
                    },
                    {
                        'id': 4,
                        'body': _0x470394[_0x434a62(479)],
                        'published': !![],
                        'postId': 2,
                        'userId': 2
                    },
                    {
                        'id': 5,
                        'body': _0x470394[_0x434a62(480)],
                        'published': ![],
                        'postId': 2,
                        'userId': 1
                    }
                ];
                continue;
            case '12':
                _0x50a97b[_0x434a62(457)](jsonServer[_0x434a62(481)]());
                continue;
            case '13':
                _0x470806['posts'] = [
                    {
                        'id': 1,
                        'body': _0x470394[_0x434a62(476)]
                    },
                    {
                        'id': 2,
                        'body': _0x470394['fXnPJ']
                    }
                ];
                continue;
            case '14':
                _0x470806['users'] = [
                    {
                        'id': 1,
                        'username': _0x470394['mXINo'],
                        'tel': _0x470394[_0x434a62(482)]
                    },
                    {
                        'id': 2,
                        'username': _0x470394[_0x434a62(483)],
                        'tel': _0x434a62(484)
                    }
                ];
                continue;
            case '15':
                _0x470806[_0x434a62(485)] = [
                    { 'id': 1 },
                    { 'id': 2 },
                    { 'id': 3 },
                    { 'id': 4 },
                    { 'id': 5 },
                    { 'id': 6 },
                    { 'id': 7 },
                    { 'id': 8 },
                    { 'id': 9 },
                    { 'id': 10 },
                    { 'id': 11 },
                    { 'id': 12 },
                    { 'id': 13 },
                    { 'id': 14 },
                    { 'id': 15 }
                ];
                continue;
            }
            break;
        }
    }), _0x470394[_0x2bbfd2(486)](describe, _0x470394[_0x2bbfd2(487)], () => {
        const _0x39d60 = _0x2bbfd2;
        test(_0x470394[_0x39d60(488)], () => request(_0x50a97b)[_0x39d60(489)](_0x39d60(490))[_0x39d60(491)](_0x39d60(367), /json/)[_0x39d60(491)](-4074 + 5 * 1038 + -229 * 4, _0x470806));
    }), describe('GET /:resource', () => {
        const _0xeb4769 = _0x2bbfd2;
        _0x470394[_0xeb4769(492)](test, _0x470394[_0xeb4769(493)], () => request(_0x50a97b)['get'](_0xeb4769(401))[_0xeb4769(494)]('Origin', _0xeb4769(349))[_0xeb4769(491)]('Content-Type', /json/)[_0xeb4769(491)](_0xeb4769(495), _0xeb4769(496))[_0xeb4769(491)](_0xeb4769(497), _0xeb4769(349))[_0xeb4769(491)](-6705 + -3375 + 10280, _0x470806[_0xeb4769(498)])), _0x470394[_0xeb4769(499)](test, _0xeb4769(393), () => request(_0x50a97b)[_0xeb4769(489)](_0xeb4769(500))[_0xeb4769(491)](-516 * 3 + 1280 + 672));
    }), describe(_0x470394['xTOEx'], () => {
        const _0x4af7ed = _0x2bbfd2, _0x24beaa = _0x470394['qfEeh']['split']('|');
        let _0x358a40 = -8228 + 2796 + -56 * -97;
        while (!![]) {
            switch (_0x24beaa[_0x358a40++]) {
            case '0':
                _0x470394[_0x4af7ed(501)](test, _0x470394[_0x4af7ed(502)], () => request(_0x50a97b)['get'](_0x4af7ed(503))[_0x4af7ed(491)](_0x4af7ed(367), /json/)[_0x4af7ed(491)](5926 * 1 + 9064 + -14790, _0x470806[_0x4af7ed(475)]));
                continue;
            case '1':
                _0x470394[_0x4af7ed(504)](test, _0x4af7ed(505), () => request(_0x50a97b)[_0x4af7ed(489)](_0x4af7ed(506))['expect'](_0x4af7ed(367), /json/)[_0x4af7ed(491)](-5379 + 4313 + 1266, [
                    _0x470806[_0x4af7ed(475)][10 * -501 + 1512 + -3 * -1166],
                    _0x470806[_0x4af7ed(475)][1364 * -4 + 7793 + 2336 * -1]
                ]));
                continue;
            case '2':
                _0x470394[_0x4af7ed(504)](test, _0x470394[_0x4af7ed(507)], () => request(_0x50a97b)['get'](_0x4af7ed(508))['expect'](_0x4af7ed(367), /json/)[_0x4af7ed(491)](-2716 + -3331 * -1 + -83 * 5, [_0x470806[_0x4af7ed(475)][6626 + 6 * 6 + -2 * 3331]]));
                continue;
            case '3':
                _0x470394['dQLub'](test, _0x470394[_0x4af7ed(509)], () => request(_0x50a97b)[_0x4af7ed(489)](_0x4af7ed(510))[_0x4af7ed(491)]('Content-Type', /json/)[_0x4af7ed(491)](4873 * -1 + -3699 + 8772, [_0x470806[_0x4af7ed(511)][-174 * 5 + -8 * 1031 + 9119]]));
                continue;
            case '4':
                _0x470394[_0x4af7ed(512)](test, _0x470394[_0x4af7ed(513)], () => request(_0x50a97b)[_0x4af7ed(489)](_0x4af7ed(514))[_0x4af7ed(491)]('Content-Type', /json/)[_0x4af7ed(491)](-17 * 190 + -7221 + -10651 * -1, [_0x470806[_0x4af7ed(451)][-8964 + -1 * 973 + 9937]]));
                continue;
            case '5':
                _0x470394['bBcLx'](test, _0x470394[_0x4af7ed(515)], () => request(_0x50a97b)[_0x4af7ed(489)](_0x4af7ed(516))[_0x4af7ed(491)](_0x4af7ed(367), /text/)[_0x4af7ed(491)](new RegExp(_0x470806[_0x4af7ed(475)][5244 + -9691 + 4447][_0x4af7ed(517)]))[_0x4af7ed(491)](-5984 + 381 + -829 * -7));
                continue;
            case '6':
                _0x470394['bBcLx'](test, _0x470394[_0x4af7ed(518)], () => {
                    const _0x42ae00 = _0x4af7ed;
                    return _0x470806[_0x42ae00(498)][_0x42ae00(519)]({
                        'id': 99,
                        'body': null
                    }), _0x470394[_0x42ae00(520)](request, _0x50a97b)[_0x42ae00(489)](_0x470394[_0x42ae00(521)])['expect'](_0x470394[_0x42ae00(522)], /json/)[_0x42ae00(491)](-2773 + -755 + 3728, [_0x470806['posts'][-235 * -41 + 6579 + -16214]]);
                });
                continue;
            }
            break;
        }
    }), _0x470394['qGtlV'](describe, _0x470394[_0x2bbfd2(523)], () => {
        const _0x4937f8 = _0x2bbfd2, _0x2aa2ce = _0x470394[_0x4937f8(524)]['split']('|');
        let _0x5ed7c3 = -2 * 1853 + 451 * 9 + -353;
        while (!![]) {
            switch (_0x2aa2ce[_0x5ed7c3++]) {
            case '0':
                _0x470394['MOcGj'](test, _0x470394[_0x4937f8(525)], () => request(_0x50a97b)[_0x4937f8(489)](_0x4937f8(526))[_0x4937f8(491)]('Content-Type', /json/)[_0x4937f8(491)](2623 + -3242 + 819, [_0x470806[_0x4937f8(475)][3 * -2065 + 1 * -5791 + 11986]]));
                continue;
            case '1':
                _0x470394['HarpM'](test, _0x4937f8(527), () => request(_0x50a97b)[_0x4937f8(489)](_0x4937f8(528))[_0x4937f8(491)](_0x4937f8(367), /json/)[_0x4937f8(491)](-1088 + -22 * -13 + 3 * 334, [
                    _0x470806[_0x4937f8(475)][3204 + 1 * 4943 + 1 * -8146],
                    _0x470806[_0x4937f8(475)][-1495 + 474 * 4 + -57 * 7],
                    _0x470806[_0x4937f8(475)][-9457 + 5981 + 3480]
                ]));
                continue;
            case '2':
                _0x470394[_0x4937f8(529)](test, _0x470394[_0x4937f8(530)], () => request(_0x50a97b)['get']('/deep?q=1')[_0x4937f8(491)]('Content-Type', /json/)[_0x4937f8(491)](1837 + -196 + -1441, _0x470806[_0x4937f8(451)]));
                continue;
            case '3':
                _0x470394[_0x4937f8(531)](test, _0x470394[_0x4937f8(532)], () => request(_0x50a97b)[_0x4937f8(489)](_0x4937f8(533))[_0x4937f8(491)](_0x4937f8(367), /json/)[_0x4937f8(491)](-1 * 3163 + 8658 + -5295, [_0x470806['comments'][-1795 * 3 + 14 * 273 + -9 * -174]]));
                continue;
            case '4':
                _0x470394['OIWfP'](test, _0x4937f8(534), () => request(_0x50a97b)[_0x4937f8(489)](_0x4937f8(535))[_0x4937f8(491)](_0x4937f8(367), /json/)[_0x4937f8(491)](-4110 + -137 * 46 + 10612, []));
                continue;
            case '5':
                _0x470394[_0x4937f8(531)](test, _0x4937f8(536), () => request(_0x50a97b)[_0x4937f8(489)]('/tags?q=pho')[_0x4937f8(491)](_0x4937f8(367), /json/)['expect'](-2736 + -4505 + 7441, [
                    _0x470806[_0x4937f8(452)][-27 * -73 + 2 * 4942 + -11854],
                    _0x470806[_0x4937f8(452)][9451 * -1 + 9387 + -11 * -6]
                ]));
                continue;
            }
            break;
        }
    }), _0x470394[_0x2bbfd2(537)](describe, _0x470394[_0x2bbfd2(538)], () => {
        const _0xef1122 = _0x2bbfd2;
        _0x470394['waLjf'](test, _0x470394['TqFIc'], () => request(_0x50a97b)[_0xef1122(489)](_0xef1122(539))[_0xef1122(491)](_0xef1122(367), /json/)['expect'](_0xef1122(384), _0x470806['comments']['length'][_0xef1122(540)]())['expect'](_0xef1122(541), 'X-Total-Count')[_0xef1122(491)](8056 + 1 * -5550 + -2306, _0x470806[_0xef1122(475)][_0xef1122(542)](16 * 107 + -4797 + 3085, -223 * 22 + 7 * 309 + 2745)));
    }), _0x470394[_0x2bbfd2(537)](describe, _0x2bbfd2(543), () => {
        const _0xf1c204 = _0x2bbfd2, _0x5d0987 = _0x470394['QdCQu'][_0xf1c204(544)]('|');
        let _0x3abb33 = -5 * -389 + 3 * 3282 + -11791;
        while (!![]) {
            switch (_0x5d0987[_0x3abb33++]) {
            case '0':
                _0x470394['waLjf'](test, _0xf1c204(545), () => request(_0x50a97b)['get'](_0xf1c204(546))['expect']('Content-Type', /json/)[_0xf1c204(491)](1355 + 4602 + -1919 * 3, [
                    _0x470806[_0xf1c204(462)][-3278 + -2 * -1453 + -19 * -20],
                    _0x470806[_0xf1c204(462)][3 * -501 + 8451 + -6941 * 1],
                    _0x470806[_0xf1c204(462)][1498 * -2 + 103 * -23 + 5371],
                    _0x470806['buyers'][31 * -183 + -1609 + 7285],
                    _0x470806[_0xf1c204(462)][6149 * -1 + 382 * 17 + -31 * 11],
                    _0x470806['buyers'][7460 * 1 + 7717 + 1 * -15172],
                    _0x470806['buyers'][1 * 7591 + 9085 + -16674],
                    _0x470806[_0xf1c204(462)][-1357 * 3 + -1 * 1381 + 5453],
                    _0x470806[_0xf1c204(462)][-7107 + -5784 + 12891]
                ]));
                continue;
            case '1':
                _0x470394['waLjf'](test, _0x470394['YBeTO'], () => request(_0x50a97b)['get'](_0xf1c204(547))['expect'](_0xf1c204(367), /json/)[_0xf1c204(491)](-1 * -3947 + -39 * -117 + -8310, _0x470806['posts'][_0xf1c204(548)]()));
                continue;
            case '2':
                _0x470394[_0xf1c204(549)](test, _0x470394[_0xf1c204(550)], () => request(_0x50a97b)[_0xf1c204(489)]('/nested?_sort=resource.name')['expect'](_0xf1c204(367), /json/)[_0xf1c204(491)](3 * -2673 + -381 * 7 + 10886, [
                    _0x470806[_0xf1c204(551)][3323 * -2 + -9256 + -57 * -279],
                    _0x470806[_0xf1c204(551)][-1664 + -9226 + 5 * 2178],
                    _0x470806[_0xf1c204(551)][908 * -2 + -3334 + 5152]
                ]));
                continue;
            case '3':
                test(_0xf1c204(552), () => request(_0x50a97b)[_0xf1c204(489)](_0xf1c204(553))[_0xf1c204(491)](_0xf1c204(367), /json/)[_0xf1c204(491)](-1 * 9089 + -2924 + -12213 * -1, [
                    _0x470806[_0xf1c204(452)][-9016 + -1 * 7874 + 16892],
                    _0x470806[_0xf1c204(452)][-8433 * -1 + -9967 * 1 + 1534],
                    _0x470806[_0xf1c204(452)][-7156 * -1 + 1 * -4707 + -72 * 34]
                ]));
                continue;
            case '4':
                _0x470394[_0xf1c204(554)](test, _0x470394['QRYKh'], () => request(_0x50a97b)[_0xf1c204(489)](_0xf1c204(555))[_0xf1c204(491)](_0xf1c204(367), /json/)['expect'](2124 + 6677 + 183 * -47, [
                    _0x470806[_0xf1c204(452)][7504 + -7 * -7 + 4 * -1888],
                    _0x470806[_0xf1c204(452)][121 + 5946 + -6067],
                    _0x470806['tags'][10 * 390 + 1 * 1384 + -5282]
                ]));
                continue;
            case '5':
                _0x470394['ViFWv'](test, _0x470394['hTwJT'], () => request(_0x50a97b)['get']('/tags?_sort=body&_order=desc')['expect']('Content-Type', /json/)[_0xf1c204(491)](17 * -306 + 1497 + 3905, [
                    _0x470806[_0xf1c204(452)][875 * 9 + -6527 + 673 * -2],
                    _0x470806[_0xf1c204(452)][-8939 + -117 * 2 + 9173],
                    _0x470806['tags'][-1 * -8324 + 2097 + -10420]
                ]));
                continue;
            }
            break;
        }
    }), _0x470394[_0x2bbfd2(537)](describe, _0x470394['PwHPS'], () => {
        const _0x1d8f80 = _0x2bbfd2;
        _0x470394['eekBw'](test, _0x1d8f80(377), () => request(_0x50a97b)['get']('/comments?_start=1&_end=2')[_0x1d8f80(491)](_0x1d8f80(367), /json/)['expect']('X-Total-Count', _0x470806[_0x1d8f80(475)]['length'][_0x1d8f80(540)]())[_0x1d8f80(491)](_0x1d8f80(541), 'X-Total-Count')['expect'](9 * 927 + -9389 * 1 + 1246, _0x470806[_0x1d8f80(475)][_0x1d8f80(542)](-1147 * 2 + -1 * 358 + 1 * 2653, -1 * -8191 + 6399 + -7 * 2084)));
    }), describe(_0x470394['wSzRa'], () => {
        const _0x23ff54 = _0x2bbfd2;
        _0x470394[_0x23ff54(556)](test, _0x23ff54(387), () => request(_0x50a97b)[_0x23ff54(489)](_0x23ff54(557))[_0x23ff54(491)](_0x23ff54(367), /json/)[_0x23ff54(491)](_0x23ff54(558), _0x470806[_0x23ff54(475)][_0x23ff54(559)]['toString']())[_0x23ff54(491)](_0x23ff54(541), 'X-Total-Count')[_0x23ff54(491)](1 * 6077 + -3599 + -2 * 1139, _0x470806['comments']['slice'](1703 + -3 * 74 + -1480, 4034 * -2 + 1735 * -5 + 16745)));
    }), _0x470394[_0x2bbfd2(560)](describe, _0x470394[_0x2bbfd2(561)], () => {
        const _0x1b44ea = _0x2bbfd2;
        _0x470394['oYprF'](test, _0x1b44ea(562), () => request(_0x50a97b)[_0x1b44ea(489)](_0x1b44ea(563))[_0x1b44ea(491)](_0x1b44ea(367), /json/)['expect'](_0x1b44ea(384), _0x470806[_0x1b44ea(485)][_0x1b44ea(559)][_0x1b44ea(540)]())[_0x1b44ea(491)](_0x1b44ea(541), _0x1b44ea(564))['expect'](886 + -12 * -311 + -4418 * 1, _0x470806['list'][_0x1b44ea(542)](549 * 17 + -5 * -436 + -11503 * 1, -11 * -571 + -2 * -1895 + -437 * 23)));
    }), _0x470394[_0x2bbfd2(565)](describe, _0x470394[_0x2bbfd2(566)], () => {
        const _0x2a5ce1 = _0x2bbfd2;
        _0x470394[_0x2a5ce1(567)](test, _0x470394['IfXXS'], () => {
            const _0x73bc14 = _0x2a5ce1, _0x48ea9c = [
                    _0x470394[_0x73bc14(568)],
                    _0x470394[_0x73bc14(569)],
                    _0x470394['iImQR'],
                    _0x470394['MStlk']
                ]['join'](', ');
            return _0x470394[_0x73bc14(570)](request, _0x50a97b)[_0x73bc14(489)](_0x470394[_0x73bc14(571)])[_0x73bc14(494)](_0x470394['aXVdQ'], _0x470394['gOOdz'])[_0x73bc14(491)](_0x470394[_0x73bc14(522)], /json/)[_0x73bc14(491)](_0x470394['FqgvQ'], _0x470806[_0x73bc14(485)]['length'][_0x73bc14(540)]())['expect'](_0x470394['IbOyy'], _0x48ea9c)[_0x73bc14(491)]('Access-Control-Expose-Headers', _0x73bc14(564))['expect'](-1791 + 24 * 26 + 1367, _0x470806[_0x73bc14(485)][_0x73bc14(542)](-4405 * -1 + 6631 + -11035, -8598 + -755 * 9 + -1 * -15395));
        });
    }), _0x470394['XoQWY'](describe, _0x470394[_0x2bbfd2(572)], () => {
        const _0x14d227 = _0x2bbfd2;
        _0x470394[_0x14d227(567)](test, _0x14d227(387), () => request(_0x50a97b)[_0x14d227(489)](_0x14d227(573))[_0x14d227(491)](_0x14d227(367), /json/)[_0x14d227(491)](-1 * 6221 + -8594 + -455 * -33, _0x470806[_0x14d227(475)][_0x14d227(542)](-19 * -97 + -2 * 439 + 964 * -1, -156 * -49 + -1845 + -966 * 6)));
    }), _0x470394['XoQWY'](describe, _0x470394['ekzWS'], () => {
        const _0x487bb0 = _0x2bbfd2;
        _0x470394[_0x487bb0(567)](test, _0x470394[_0x487bb0(574)], () => request(_0x50a97b)['get'](_0x487bb0(575))['expect'](_0x487bb0(367), /json/)['expect'](-3158 * -3 + 2709 + -1 * 11983, _0x470806[_0x487bb0(475)][_0x487bb0(542)](-473 + -6434 * -1 + -2980 * 2))), test(_0x470394[_0x487bb0(576)], () => request(_0x50a97b)[_0x487bb0(489)](_0x487bb0(577))[_0x487bb0(491)](_0x487bb0(367), /json/)[_0x487bb0(491)](5 * -1684 + 9417 + 1 * -797, _0x470806[_0x487bb0(475)]['slice'](466 * 14 + 9346 + -15868)));
    }), _0x470394['oCqAz'](describe, _0x470394[_0x2bbfd2(578)], () => {
        const _0x3f4808 = _0x2bbfd2;
        _0x470394[_0x3f4808(579)](test, _0x470394['zVFdj'], () => request(_0x50a97b)[_0x3f4808(489)](_0x3f4808(580))[_0x3f4808(491)]('Content-Type', /json/)[_0x3f4808(491)](-9721 * -1 + 1528 + 87 * -127, [
            _0x470806[_0x3f4808(452)][2227 + -3563 + 1337],
            _0x470806['tags'][47 * -18 + 465 * -19 + -421 * -23]
        ])), _0x470394['jOyOy'](test, _0x470394[_0x3f4808(576)], () => request(_0x50a97b)[_0x3f4808(489)](_0x3f4808(581))[_0x3f4808(491)](_0x3f4808(367), /json/)[_0x3f4808(491)](3952 + -3985 * 2 + 4218, _0x470806[_0x3f4808(452)]));
    }), describe(_0x470394[_0x2bbfd2(582)], () => {
        const _0x21302b = _0x2bbfd2;
        test(_0x470394[_0x21302b(583)], () => request(_0x50a97b)['get'](_0x21302b(584))[_0x21302b(491)]('Content-Type', /json/)[_0x21302b(491)](-112 * 73 + 1990 * 2 + -2198 * -2, [
            _0x470806[_0x21302b(475)][-2485 * -4 + 8337 + 1 * -18277],
            _0x470806['comments'][-536 * -11 + 3438 + -9333]
        ]));
    }), _0x470394['gQvCO'](describe, _0x2bbfd2(585), () => {
        const _0x4799b3 = _0x2bbfd2;
        _0x470394['gNbJn'](test, _0x470394[_0x4799b3(586)], () => request(_0x50a97b)[_0x4799b3(489)]('/posts/1')[_0x4799b3(491)](_0x4799b3(367), /json/)['expect'](-8305 + 7543 * 1 + -2 * -481, _0x470806[_0x4799b3(498)][1217 * 1 + -7070 + 5853 * 1])), _0x470394['gNbJn'](test, _0x470394[_0x4799b3(587)], () => request(_0x50a97b)[_0x4799b3(489)](_0x4799b3(588))['expect'](_0x4799b3(367), /json/)['expect'](4609 + 2 * -4758 + 5107, _0x470806[_0x4799b3(455)][129 + 1 * 8744 + 19 * -467])), test(_0x470394[_0x4799b3(589)], () => request(_0x50a97b)[_0x4799b3(489)]('/stringIds/1234')[_0x4799b3(491)](_0x4799b3(367), /json/)[_0x4799b3(491)](-8 * -1011 + 1784 + -9672, _0x470806[_0x4799b3(449)][761 + -8396 + 7635])), _0x470394[_0x4799b3(590)](test, _0x470394[_0x4799b3(591)], () => request(_0x50a97b)[_0x4799b3(489)](_0x4799b3(592))[_0x4799b3(491)](_0x4799b3(367), /json/)[_0x4799b3(491)](5020 + 5401 + -159 * 63, {}));
    }), _0x470394[_0x2bbfd2(593)](describe, _0x2bbfd2(594), () => {
        const _0x480705 = _0x2bbfd2, _0x2124ff = {
                'QYWQV': function (_0x4e08b2, _0xb04404) {
                    const _0x4a80b0 = _0x3758;
                    return _0x470394[_0x4a80b0(595)](_0x4e08b2, _0xb04404);
                },
                'OXkUb': _0x470394[_0x480705(522)]
            };
        _0x470394[_0x480705(596)](test, _0x470394[_0x480705(597)], () => {
            const _0x2d0e8d = _0x480705, _0x45f1ce = _[_0x2d0e8d(598)](_0x470806['posts']);
            return _0x45f1ce[3202 + 7755 + -10957][_0x2d0e8d(475)] = [
                _0x470806[_0x2d0e8d(475)][-2364 + 1066 * 4 + 76 * -25],
                _0x470806[_0x2d0e8d(475)][-1 * 5906 + -149 * 1 + 6056]
            ], _0x45f1ce[-3179 + 9012 + -5832][_0x2d0e8d(475)] = [
                _0x470806[_0x2d0e8d(475)][4772 + 5000 * -2 + 5230],
                _0x470806[_0x2d0e8d(475)][25 * -147 + 1721 + 103 * 19],
                _0x470806['comments'][-6724 + -3061 + -251 * -39]
            ], _0x2124ff[_0x2d0e8d(599)](request, _0x50a97b)['get'](_0x2d0e8d(600))[_0x2d0e8d(491)](_0x2124ff['OXkUb'], /json/)[_0x2d0e8d(491)](22 * -18 + -2887 * 1 + -43 * -81, _0x45f1ce);
        });
    }), _0x470394['PpHYV'](describe, _0x2bbfd2(601), () => {
        const _0x12c3d1 = _0x2bbfd2;
        test(_0x470394[_0x12c3d1(597)], () => {
            const _0x38a04d = _0x12c3d1, _0x5f68fb = _[_0x38a04d(598)](_0x470806['posts']);
            return _0x5f68fb[-824 * 5 + -7326 + 11446][_0x38a04d(475)] = [
                _0x470806[_0x38a04d(475)][20 * 250 + -1477 * 1 + -3523],
                _0x470806['comments'][-1 * 5717 + -11 * 483 + 3677 * 3]
            ], _0x5f68fb[-1053 + -3874 + 13 * 379][_0x38a04d(455)] = [_0x470806[_0x38a04d(455)][1 * -1787 + 3 * 1923 + -3982]], _0x5f68fb[-797 * -6 + -7100 + -2319 * -1][_0x38a04d(475)] = [
                _0x470806['comments'][5 * 1385 + 1 * 9751 + -16674],
                _0x470806['comments'][304 * 26 + -5994 + -1907],
                _0x470806[_0x38a04d(475)][-8678 + -9627 + -1077 * -17]
            ], _0x5f68fb[1917 + -4858 + 2942][_0x38a04d(455)] = [], _0x470394[_0x38a04d(602)](request, _0x50a97b)[_0x38a04d(489)](_0x470394[_0x38a04d(603)])[_0x38a04d(491)](_0x470394['CJmCu'], /json/)[_0x38a04d(491)](-1 * 4725 + -73 * -109 + 3032 * -1, _0x5f68fb);
        });
    }), _0x470394[_0x2bbfd2(604)](describe, _0x470394[_0x2bbfd2(605)], () => {
        const _0x9195ad = _0x2bbfd2, _0x2d47f7 = {
                'zcujA': function (_0x35bb0b, _0x4bb1d6) {
                    return _0x35bb0b(_0x4bb1d6);
                },
                'IagUW': _0x470394[_0x9195ad(606)],
                'qWXmF': _0x470394[_0x9195ad(522)]
            };
        _0x470394['uopmw'](test, _0x470394[_0x9195ad(597)], () => {
            const _0x38f5ce = _0x9195ad, _0x4ef2f6 = _[_0x38f5ce(598)](_0x470806[_0x38f5ce(498)][-727 * 11 + 6924 + 1073]);
            return _0x4ef2f6[_0x38f5ce(475)] = [
                _0x470806['comments'][1763 + -5 * -1219 + -7858],
                _0x470806[_0x38f5ce(475)][2511 + 1 * -4331 + -1821 * -1]
            ], _0x2d47f7[_0x38f5ce(607)](request, _0x50a97b)['get'](_0x2d47f7['IagUW'])[_0x38f5ce(491)](_0x2d47f7[_0x38f5ce(608)], /json/)[_0x38f5ce(491)](-1 * -3367 + -13 * -318 + -7301, _0x4ef2f6);
        });
    }), _0x470394[_0x2bbfd2(604)](describe, _0x470394[_0x2bbfd2(609)], () => {
        const _0x5693ab = _0x2bbfd2, _0x5b8141 = {
                'lJolx': function (_0x1e198a, _0x710871) {
                    return _0x470394['zVkNs'](_0x1e198a, _0x710871);
                },
                'iKaFL': _0x5693ab(610),
                'HtrmQ': _0x5693ab(367)
            };
        _0x470394[_0x5693ab(611)](test, _0x470394[_0x5693ab(612)], () => {
            const _0x231055 = _0x5693ab, _0x521100 = _[_0x231055(598)](_0x470806[_0x231055(498)][3006 + 3329 + -7 * 905]);
            return _0x521100['comments'] = [
                _0x470806[_0x231055(475)][-2692 * 1 + -9248 + -6 * -1990],
                _0x470806[_0x231055(475)][-8968 + 4537 * -2 + 18043]
            ], _0x521100['refs'] = [_0x470806[_0x231055(455)][19 * -160 + -2661 * 1 + 5701]], _0x5b8141['lJolx'](request, _0x50a97b)[_0x231055(489)](_0x5b8141[_0x231055(613)])[_0x231055(491)](_0x5b8141[_0x231055(614)], /json/)[_0x231055(491)](7653 + -7343 * -1 + -14796, _0x521100);
        });
    }), describe(_0x2bbfd2(615), () => {
        test('should respond with corresponding resource and expanded inner resources', () => {
            const _0x49aa05 = _0x3758, _0x449db6 = _['cloneDeep'](_0x470806[_0x49aa05(455)]);
            return _0x449db6[2 * -179 + -2531 + -3 * -963][_0x49aa05(616)] = _0x470806['posts'][-1913 * 3 + 3799 * -1 + 9538], _0x470394[_0x49aa05(617)](request, _0x50a97b)['get'](_0x49aa05(618))[_0x49aa05(491)](_0x470394[_0x49aa05(522)], /json/)[_0x49aa05(491)](1 * -8971 + 573 * -7 + -338 * -39, _0x449db6);
        });
    }), _0x470394['PpHYV'](describe, _0x470394['RqzyT'], () => {
        const _0x2c9b73 = _0x2bbfd2;
        _0x470394[_0x2c9b73(611)](test, _0x2c9b73(619), () => {
            const _0x150ed3 = _0x2c9b73, _0x571ab7 = _[_0x150ed3(598)](_0x470806['comments'][1353 + 9 * -678 + 3 * 1583]);
            return _0x571ab7[_0x150ed3(616)] = _0x470806[_0x150ed3(498)][-4 * -116 + -3118 * -1 + 199 * -18], _0x470394[_0x150ed3(617)](request, _0x50a97b)['get']('/comments/1?_expand=post')['expect'](_0x150ed3(367), /json/)[_0x150ed3(491)](-1289 * 6 + -9664 + 17598, _0x571ab7);
        });
    }), _0x470394[_0x2bbfd2(620)](describe, _0x470394[_0x2bbfd2(621)], () => {
        const _0x574afd = _0x2bbfd2;
        _0x470394[_0x574afd(611)](test, _0x574afd(619), () => {
            const _0x476fef = _0x574afd, _0x289aa1 = _[_0x476fef(598)](_0x470806[_0x476fef(455)]);
            return _0x289aa1[8589 + -5021 * -1 + -13610][_0x476fef(616)] = _0x470806[_0x476fef(498)][6184 + 1 * -4931 + 1 * -1253], _0x289aa1[879 * 2 + -23 * -268 + 233 * -34][_0x476fef(622)] = _0x470806[_0x476fef(511)][4 * 1909 + 24 * 296 + -14740], request(_0x50a97b)[_0x476fef(489)](_0x470394[_0x476fef(623)])[_0x476fef(491)](_0x470394[_0x476fef(522)], /json/)[_0x476fef(491)](-8442 + 1 * -1187 + 1 * 9829, _0x289aa1);
        });
    }), _0x470394[_0x2bbfd2(620)](describe, _0x470394[_0x2bbfd2(624)], () => {
        const _0x239742 = _0x2bbfd2, _0x3ce1a0 = {
                'uzgtR': _0x470394[_0x239742(625)],
                'bSDbR': _0x470394[_0x239742(522)]
            };
        _0x470394[_0x239742(626)](test, _0x470394[_0x239742(627)], () => {
            const _0x54bcb1 = _0x239742, _0x21d0a4 = _0x470806[_0x54bcb1(475)][6078 + -1340 + -2 * 2369];
            return _0x21d0a4[_0x54bcb1(616)] = _0x470806[_0x54bcb1(498)][1 * 1214 + 11 * 853 + -10597], _0x21d0a4['user'] = _0x470806[_0x54bcb1(511)][7 * 817 + 4 * 337 + -7067], request(_0x50a97b)[_0x54bcb1(489)](_0x3ce1a0[_0x54bcb1(628)])[_0x54bcb1(491)](_0x3ce1a0[_0x54bcb1(629)], /json/)[_0x54bcb1(491)](-2190 + -1 * 1117 + 167 * 21, _0x21d0a4);
        });
    }), describe(_0x470394[_0x2bbfd2(630)], () => {
        const _0x3cbd71 = _0x2bbfd2, _0x4a6ef3 = {
                'eGXlC': function (_0x13da6c, _0xfe9288) {
                    const _0x2e366f = _0x3758;
                    return _0x470394[_0x2e366f(631)](_0x13da6c, _0xfe9288);
                },
                'uydEH': function (_0x41f274, _0x3e6087) {
                    const _0x50cbbd = _0x3758;
                    return _0x470394[_0x50cbbd(632)](_0x41f274, _0x3e6087);
                },
                'mHEjY': function (_0x51aaef, _0x16768a) {
                    return _0x470394['hoUPh'](_0x51aaef, _0x16768a);
                },
                'Fvqee': _0x3cbd71(405),
                'xaJEU': _0x470394[_0x3cbd71(633)]
            };
        test(_0x470394[_0x3cbd71(634)], _0x2e0a63 => {
            const _0x244dee = _0x3cbd71, _0x3db92a = new Date();
            _0x4a6ef3[_0x244dee(635)](request, _0x50a97b)[_0x244dee(489)](_0x4a6ef3[_0x244dee(636)])[_0x244dee(491)](-11 * -802 + 1 * 6274 + -14896, function (_0x1eab7c) {
                const _0x27f45e = _0x244dee, _0x19024a = new Date();
                _0x4a6ef3[_0x27f45e(635)](_0x2e0a63, _0x4a6ef3[_0x27f45e(637)](_0x4a6ef3[_0x27f45e(638)](_0x19024a, _0x3db92a), 8482 + -2897 + 35 * -131) ? _0x1eab7c : new Error(_0x4a6ef3[_0x27f45e(639)]));
            });
        });
    }), describe(_0x470394[_0x2bbfd2(640)], () => {
        const _0x2a9c7e = _0x2bbfd2, _0x3e4c89 = {
                'TbjgW': function (_0x4732ee, _0x530449) {
                    const _0x64280e = _0x3758;
                    return _0x470394[_0x64280e(641)](_0x4732ee, _0x530449);
                },
                'Upqxv': _0x470394[_0x2a9c7e(642)],
                'edOYN': _0x2a9c7e(643),
                'DRfVE': _0x2a9c7e(356),
                'SdKyd': _0x470394['CJmCu'],
                'xobGc': 'true',
                'AkOTC': _0x470394['LLVAY'],
                'ueyob': _0x470394['lVQBj']
            };
        _0x470394[_0x2a9c7e(626)](test, _0x470394[_0x2a9c7e(644)], async () => {
            const _0x496b64 = _0x2a9c7e;
            await request(_0x50a97b)['post'](_0x470394['eJXXW'])['send']({
                'body': _0x470394[_0x496b64(476)],
                'booleanValue': !![],
                'integerValue': 1
            })[_0x496b64(491)](_0x470394[_0x496b64(645)], _0x470394[_0x496b64(646)])[_0x496b64(491)](_0x470394[_0x496b64(646)], /posts\/3$/)[_0x496b64(491)](_0x496b64(367), /json/)[_0x496b64(491)](227 * -37 + 9506 + -906, {
                'id': 3,
                'body': _0x470394['Uklwh'],
                'booleanValue': !![],
                'integerValue': 1
            }), assert[_0x496b64(647)](_0x470806[_0x496b64(498)]['length'], 5114 * -1 + 9569 + -318 * 14);
        }), _0x470394[_0x2a9c7e(626)](test, _0x2a9c7e(648), async () => {
            const _0x43fd24 = _0x2a9c7e;
            await _0x3e4c89[_0x43fd24(649)](request, _0x50a97b)[_0x43fd24(616)](_0x3e4c89[_0x43fd24(650)])[_0x43fd24(651)](_0x3e4c89[_0x43fd24(652)])[_0x43fd24(653)]({
                'body': _0x3e4c89[_0x43fd24(654)],
                'booleanValue': !![],
                'integerValue': 1
            })[_0x43fd24(491)](_0x3e4c89['SdKyd'], /json/)[_0x43fd24(491)](7586 + -1 * -446 + 1 * -7831, {
                'id': 3,
                'body': _0x43fd24(356),
                'booleanValue': _0x3e4c89[_0x43fd24(655)],
                'integerValue': '1'
            }), assert[_0x43fd24(647)](_0x470806[_0x43fd24(498)][_0x43fd24(559)], -5073 + 6187 + 11 * -101);
        }), _0x470394[_0x2a9c7e(626)](test, _0x470394[_0x2a9c7e(656)], async () => {
            const _0x4cc15b = _0x2a9c7e;
            await request(_0x50a97b)[_0x4cc15b(616)](_0x3e4c89['AkOTC'])[_0x4cc15b(653)]({
                'url': _0x3e4c89[_0x4cc15b(657)],
                'postId': 1
            })[_0x4cc15b(491)]('Content-Type', /json/)[_0x4cc15b(491)](-7051 + -5869 * 1 + 13121), assert['strictEqual'](_0x470806[_0x4cc15b(455)][_0x4cc15b(559)], 2993 * 1 + -1 * -2792 + 5783 * -1);
        });
    }), _0x470394[_0x2bbfd2(658)](describe, _0x470394[_0x2bbfd2(659)], () => {
        const _0x4fdb0f = _0x2bbfd2;
        test(_0x4fdb0f(660), () => request(_0x50a97b)[_0x4fdb0f(616)](_0x4fdb0f(584))[_0x4fdb0f(653)]({ 'body': _0x4fdb0f(356) })[_0x4fdb0f(491)]('Content-Type', /json/)[_0x4fdb0f(491)](-4721 * -1 + -1 * -9813 + -14333, {
            'id': 6,
            'postId': '1',
            'body': _0x4fdb0f(356)
        }));
    }), _0x470394['SEuuY'](describe, _0x470394['mmMoj'], () => {
        const _0x48e23e = _0x2bbfd2, _0x4cd10d = {
                'vlFgs': function (_0x40d7f8, _0x213472) {
                    const _0x1ecab3 = _0x3758;
                    return _0x470394[_0x1ecab3(641)](_0x40d7f8, _0x213472);
                },
                'bOrTI': function (_0x41eecb, _0x49857e) {
                    const _0x59c152 = _0x3758;
                    return _0x470394[_0x59c152(632)](_0x41eecb, _0x49857e);
                },
                'RPuyX': function (_0x551553, _0x15f5b0) {
                    return _0x470394['hoUPh'](_0x551553, _0x15f5b0);
                },
                'xjecU': _0x470394[_0x48e23e(661)]
            };
        _0x470394[_0x48e23e(626)](test, _0x470394['MPXBa'], _0x302f40 => {
            const _0x4ee002 = _0x48e23e, _0x586a4d = new Date();
            _0x470394['EAbrE'](request, _0x50a97b)['post'](_0x4ee002(400))[_0x4ee002(653)]({
                'body': _0x470394[_0x4ee002(476)],
                'booleanValue': !![],
                'integerValue': 1
            })[_0x4ee002(491)](-47 * 151 + -9717 + 17015, function (_0x34dca1) {
                const _0x366512 = _0x4ee002, _0xdde741 = new Date();
                _0x4cd10d['vlFgs'](_0x302f40, _0x4cd10d[_0x366512(662)](_0x4cd10d['RPuyX'](_0xdde741, _0x586a4d), 5493 * -1 + 1 * 11 + 6482) ? _0x34dca1 : new Error(_0x4cd10d['xjecU']));
            });
        });
    }), _0x470394[_0x2bbfd2(658)](describe, _0x2bbfd2(663), () => {
        const _0x19d29b = _0x2bbfd2;
        _0x470394[_0x19d29b(664)](test, _0x470394[_0x19d29b(665)], async () => {
            const _0x5ede49 = _0x19d29b, _0xf58dd1 = {
                    'id': 1,
                    'booleanValue': !![],
                    'integerValue': 1
                }, _0x50b8ef = await request(_0x50a97b)[_0x5ede49(666)](_0x470394[_0x5ede49(667)])[_0x5ede49(494)](_0x470394[_0x5ede49(668)], _0x5ede49(669))[_0x5ede49(653)](_0xf58dd1)['expect'](_0x470394[_0x5ede49(522)], /json/)['expect'](-1003 + 9948 + -8745, _0xf58dd1);
            assert[_0x5ede49(670)](_0x50b8ef[_0x5ede49(517)], _0xf58dd1), assert['deepStrictEqual'](_0x470806[_0x5ede49(498)][-3 * -3095 + 250 * 6 + -10785], _0xf58dd1);
        }), test('should respond with 404 if resource is not found', () => request(_0x50a97b)['put']('/posts/9001')[_0x19d29b(653)]({
            'id': 1,
            'body': _0x19d29b(357)
        })['expect'](_0x19d29b(367), /json/)['expect'](378 * 11 + 4 * 668 + -6426, {}));
    }), _0x470394[_0x2bbfd2(658)](describe, _0x470394[_0x2bbfd2(671)], () => {
        const _0x52a3d9 = _0x2bbfd2, _0x294387 = {
                'QtYvX': function (_0x2c7792, _0x207b33) {
                    const _0x57c968 = _0x3758;
                    return _0x470394[_0x57c968(672)](_0x2c7792, _0x207b33);
                },
                'VhMZd': function (_0x54628a, _0x232d89) {
                    const _0x2dbb04 = _0x3758;
                    return _0x470394[_0x2dbb04(673)](_0x54628a, _0x232d89);
                },
                'aVRHE': _0x470394[_0x52a3d9(661)],
                'eTZSe': function (_0x471607, _0x2ce1bc) {
                    const _0x1adc0c = _0x52a3d9;
                    return _0x470394[_0x1adc0c(674)](_0x471607, _0x2ce1bc);
                },
                'UjMWk': _0x470394['liame']
            };
        _0x470394[_0x52a3d9(664)](test, _0x470394[_0x52a3d9(634)], _0x3ab62f => {
            const _0x26d06b = _0x52a3d9, _0x2e8b90 = {
                    'qsgwy': function (_0x1e05b5, _0x3c8c87) {
                        const _0x20db99 = _0x3758;
                        return _0x294387[_0x20db99(675)](_0x1e05b5, _0x3c8c87);
                    },
                    'anfKR': function (_0x1ad370, _0x3d0b61) {
                        const _0x2a9bb2 = _0x3758;
                        return _0x294387[_0x2a9bb2(676)](_0x1ad370, _0x3d0b61);
                    },
                    'RWgel': _0x294387['aVRHE']
                }, _0x505d19 = new Date();
            _0x294387['eTZSe'](request, _0x50a97b)[_0x26d06b(666)](_0x294387['UjMWk'])['set']('Accept', 'application/json')['send']({
                'id': 1,
                'booleanValue': !![],
                'integerValue': 1
            })[_0x26d06b(491)](-1291 * 3 + -14 * -191 + 1399, function (_0x4da35a) {
                const _0x2a0421 = _0x26d06b, _0x4f47c2 = new Date();
                _0x3ab62f(_0x2e8b90[_0x2a0421(677)](_0x2e8b90['anfKR'](_0x4f47c2, _0x505d19), 68 * 61 + -6623 + 3475) ? _0x4da35a : new Error(_0x2e8b90[_0x2a0421(678)]));
            });
        });
    }), describe(_0x470394[_0x2bbfd2(679)], () => {
        const _0x40282e = _0x2bbfd2, _0x838b9a = { 'MiOje': 'bar' };
        _0x470394[_0x40282e(664)](test, _0x470394['ZAePl'], async () => {
            const _0x123af1 = _0x40282e, _0x3babfa = { 'body': _0x123af1(357) }, _0x345f51 = {
                    'id': 1,
                    'body': _0x838b9a[_0x123af1(680)]
                }, _0xfb1ace = await request(_0x50a97b)[_0x123af1(681)](_0x123af1(406))[_0x123af1(653)](_0x3babfa)[_0x123af1(491)](_0x123af1(367), /json/)[_0x123af1(491)](-9309 + -1 * 314 + 9823, _0x345f51);
            assert[_0x123af1(670)](_0xfb1ace['body'], _0x345f51), assert[_0x123af1(670)](_0x470806[_0x123af1(498)][-5567 + -7585 + 3 * 4384], _0x345f51);
        }), test(_0x40282e(393), () => request(_0x50a97b)[_0x40282e(681)](_0x40282e(592))[_0x40282e(653)]({ 'body': _0x40282e(357) })[_0x40282e(491)](_0x40282e(367), /json/)['expect'](2783 + -4401 + -337 * -6, {}));
    }), describe(_0x470394[_0x2bbfd2(682)], () => {
        const _0x399e62 = _0x2bbfd2;
        _0x470394['EcXUF'](test, _0x470394[_0x399e62(634)], _0x4e1a94 => {
            const _0x4a1318 = _0x399e62, _0x49372d = {
                    'kCxoO': function (_0x3d6ea5, _0x24072f) {
                        const _0x59de05 = _0x3758;
                        return _0x470394[_0x59de05(683)](_0x3d6ea5, _0x24072f);
                    },
                    'OVHAx': function (_0x228006, _0x5ba51d) {
                        const _0x56c68f = _0x3758;
                        return _0x470394[_0x56c68f(672)](_0x228006, _0x5ba51d);
                    },
                    'McZpj': function (_0x43307a, _0xdc70fe) {
                        const _0x1914df = _0x3758;
                        return _0x470394[_0x1914df(673)](_0x43307a, _0xdc70fe);
                    }
                }, _0x3e7a7d = new Date();
            _0x470394[_0x4a1318(683)](request, _0x50a97b)['patch'](_0x4a1318(408))[_0x4a1318(653)]({ 'body': _0x470394['fXnPJ'] })[_0x4a1318(653)]({
                'id': 1,
                'booleanValue': !![],
                'integerValue': 1
            })[_0x4a1318(491)](-1 * -5099 + 3 * -1237 + -1188, function (_0x80bb87) {
                const _0x2865d6 = _0x4a1318, _0x4069dc = new Date();
                _0x49372d[_0x2865d6(684)](_0x4e1a94, _0x49372d[_0x2865d6(685)](_0x49372d[_0x2865d6(686)](_0x4069dc, _0x3e7a7d), -1176 * -2 + 2364 + -3716) ? _0x80bb87 : new Error('Request wasn\'t delayed'));
            });
        });
    }), _0x470394['MCnCI'](describe, 'DELETE /:resource/:id', () => {
        const _0x13610c = _0x2bbfd2;
        test(_0x470394[_0x13610c(687)], async () => {
            const _0x3e0b65 = _0x13610c;
            await _0x470394[_0x3e0b65(688)](request, _0x50a97b)[_0x3e0b65(689)](_0x470394[_0x3e0b65(667)])[_0x3e0b65(491)](8668 + -6109 * -1 + -14577, {}), assert['strictEqual'](_0x470806['posts'][_0x3e0b65(559)], 715 + -121 * 23 + -2069 * -1), assert[_0x3e0b65(647)](_0x470806[_0x3e0b65(475)][_0x3e0b65(559)], 653 + 6436 + 2362 * -3);
        }), test('should respond with 404 if resource is not found', () => request(_0x50a97b)[_0x13610c(689)](_0x13610c(592))[_0x13610c(491)](_0x13610c(367), /json/)[_0x13610c(491)](1 * 1077 + 8719 + -9392, {}));
    }), _0x470394[_0x2bbfd2(690)](describe, 'DELETE /:resource:id?_delay=', () => {
        const _0x372d80 = _0x2bbfd2, _0x22e326 = {
                'YBNho': function (_0x8232ab, _0x595f2f) {
                    return _0x8232ab(_0x595f2f);
                },
                'jttSy': function (_0x530e92, _0x3e6995) {
                    const _0x4391f8 = _0x3758;
                    return _0x470394[_0x4391f8(672)](_0x530e92, _0x3e6995);
                },
                'NbkHT': function (_0xb9f939, _0x182ea7) {
                    return _0xb9f939 - _0x182ea7;
                },
                'mtclQ': _0x470394[_0x372d80(661)],
                'PgElY': _0x470394['liame']
            };
        _0x470394['xxapH'](test, _0x372d80(691), _0x49afe5 => {
            const _0x3af9b0 = _0x372d80, _0x9791c7 = new Date();
            _0x22e326[_0x3af9b0(692)](request, _0x50a97b)[_0x3af9b0(689)](_0x22e326[_0x3af9b0(693)])['send']({
                'id': 1,
                'booleanValue': !![],
                'integerValue': 1
            })[_0x3af9b0(491)](195 * 3 + -21 * 43 + 14 * 37, function (_0x193694) {
                const _0xe966c0 = _0x3af9b0, _0x519815 = new Date();
                _0x22e326[_0xe966c0(692)](_0x49afe5, _0x22e326[_0xe966c0(694)](_0x22e326[_0xe966c0(695)](_0x519815, _0x9791c7), 3 * -2731 + 4378 + -535 * -9) ? _0x193694 : new Error(_0x22e326[_0xe966c0(696)]));
            });
        });
    }), _0x470394['qnbEY'](describe, _0x470394['CxyZw'], () => {
        const _0x3f6ec2 = _0x2bbfd2, _0x474669 = {
                'oYpdR': function (_0x527316, _0x5d3084, _0x217a80) {
                    const _0x1d4971 = _0x3758;
                    return _0x470394[_0x1d4971(697)](_0x527316, _0x5d3084, _0x217a80);
                },
                'JIqYP': _0x470394[_0x3f6ec2(698)]
            };
        describe(_0x470394['CdMve'], () => {
            const _0x55671f = _0x3f6ec2;
            _0x474669[_0x55671f(699)](test, _0x474669[_0x55671f(700)], () => request(_0x50a97b)[_0x55671f(489)]('/')[_0x55671f(491)](/You're successfully running JSON Server/)[_0x55671f(491)](-3371 + 57 * 107 + -2528));
        }), _0x470394[_0x3f6ec2(697)](describe, _0x470394[_0x3f6ec2(701)], () => {
            const _0x475265 = _0x3f6ec2;
            _0x474669[_0x475265(699)](test, _0x475265(702), () => request(_0x50a97b)['get'](_0x475265(703))[_0x475265(491)](_0x475265(367), /javascript/)['expect'](3791 + -7229 * -1 + -10820));
        }), _0x470394[_0x3f6ec2(697)](describe, _0x470394[_0x3f6ec2(704)], () => {
            const _0x597efa = _0x3f6ec2;
            _0x470394['WrjUV'](test, _0x470394[_0x597efa(705)], () => request(_0x50a97b)[_0x597efa(489)](_0x597efa(706))[_0x597efa(491)](_0x597efa(367), /css/)['expect'](3737 + -5081 + 1544));
        });
    }), describe(_0x470394[_0x2bbfd2(707)], () => {
        const _0x46ef61 = _0x2bbfd2, _0x363153 = {
                'uMnQc': function (_0x1c187f, _0x3ddaac) {
                    const _0xbffda3 = _0x3758;
                    return _0x470394[_0xbffda3(708)](_0x1c187f, _0x3ddaac);
                }
            };
        _0x470394[_0x46ef61(709)](test, _0x470394[_0x46ef61(710)], () => {
            const _0x5cd5a1 = _0x46ef61;
            _0x363153[_0x5cd5a1(711)](assert, _0x9c01c2['db'][_0x5cd5a1(712)]());
        });
    }), _0x470394['qnbEY'](describe, _0x470394[_0x2bbfd2(713)], () => {
        const _0x22d5f9 = _0x2bbfd2;
        _0x470394[_0x22d5f9(709)](test, _0x470394[_0x22d5f9(714)], () => request(_0x50a97b)[_0x22d5f9(489)](_0x22d5f9(490))[_0x22d5f9(491)](_0x22d5f9(715), _0x22d5f9(716))[_0x22d5f9(491)](_0x22d5f9(717), 'no-cache')[_0x22d5f9(491)](_0x22d5f9(718), '-1'));
    }), describe(_0x470394[_0x2bbfd2(719)], () => {
        const _0x181e0a = _0x2bbfd2;
        _0x470394[_0x181e0a(720)](test, _0x470394['wCRgN'], () => request(_0x50a97b)[_0x181e0a(489)](_0x181e0a(721))['expect'](_0x470806[_0x181e0a(498)][4599 + 9263 + -13862])), _0x470394[_0x181e0a(720)](test, _0x181e0a(722), () => request(_0x50a97b)[_0x181e0a(489)](_0x181e0a(723))[_0x181e0a(491)](_0x470806[_0x181e0a(498)][2 * 2029 + -338 + -3720])), _0x470394['XYVtA'](test, _0x470394[_0x181e0a(724)], () => {
            const _0x3249e3 = _0x181e0a, _0x2c7bfc = _[_0x3249e3(598)](_0x470806['posts'][8032 + -683 * 13 + 847]);
            return _0x2c7bfc['comments'] = [
                _0x470806[_0x3249e3(475)][-9573 + 223 * 1 + 9350],
                _0x470806[_0x3249e3(475)][-29 * -173 + 1 * 67 + -13 * 391]
            ], _0x470394[_0x3249e3(708)](request, _0x50a97b)[_0x3249e3(489)](_0x3249e3(725))['expect'](_0x2c7bfc);
        }), _0x470394[_0x181e0a(726)](test, _0x470394[_0x181e0a(727)], () => request(_0x50a97b)[_0x181e0a(489)](_0x181e0a(728))['expect'](-8 * -526 + 8816 + -12824, [_0x470806['comments'][-4954 + 6985 + 1 * -2027]])), _0x470394[_0x181e0a(729)](test, _0x470394['KyKIy'], () => request(_0x50a97b)[_0x181e0a(489)]('/articles?_id=1')['expect'](_0x470806[_0x181e0a(498)][-3393 + 75 * -67 + 8418])), _0x470394[_0x181e0a(730)](test, _0x470394[_0x181e0a(731)], () => request(_0x50a97b)[_0x181e0a(489)]('/__rules')[_0x181e0a(491)](_0x3fd971));
    }), _0x470394[_0x2bbfd2(732)](describe, _0x470394[_0x2bbfd2(733)], () => {
        const _0x1cb7ef = _0x2bbfd2;
        _0x470394[_0x1cb7ef(708)](beforeEach, () => {
            const _0x254620 = _0x1cb7ef;
            _0x9c01c2[_0x254620(734)] = (_0x5e1ae5, _0x58c807) => {
                const _0x17a64c = _0x254620;
                _0x58c807[_0x17a64c(735)]({ 'data': _0x58c807[_0x17a64c(736)]['data'] });
            };
        }), _0x470394[_0x1cb7ef(730)](test, _0x470394['RLwCW'], () => request(_0x50a97b)[_0x1cb7ef(489)](_0x1cb7ef(406))[_0x1cb7ef(491)](_0x1cb7ef(367), /json/)[_0x1cb7ef(491)](137 * -4 + 2831 * -3 + 9241, { 'data': _0x470806[_0x1cb7ef(498)][42 * -194 + -2 * -3338 + -184 * -8] }));
    }), describe(_0x470394[_0x2bbfd2(737)], () => {
        const _0x4a82ff = _0x2bbfd2, _0x3827fb = { 'SgcDQ': _0x4a82ff(738) };
        _0x470394[_0x4a82ff(739)](beforeEach, () => {
            const _0x16f850 = _0x4a82ff;
            _0x9c01c2['db'][_0x16f850(740)]({ 'posts': [{ '_id': 1 }] }), _0x9c01c2['db']['_']['id'] = _0x3827fb[_0x16f850(741)];
        }), _0x470394[_0x4a82ff(486)](test, _0x470394['EDsOI'], () => request(_0x50a97b)[_0x4a82ff(489)](_0x4a82ff(406))[_0x4a82ff(491)]('Content-Type', /json/)[_0x4a82ff(491)](4493 * -1 + 25 * -53 + 6018, _0x9c01c2['db']['getState']()[_0x4a82ff(498)][4870 + 17 * -376 + 1522])), _0x470394[_0x4a82ff(486)](test, _0x470394[_0x4a82ff(742)], () => request(_0x50a97b)[_0x4a82ff(616)]('/posts')[_0x4a82ff(653)]({ 'body': _0x4a82ff(743) })['expect'](_0x4a82ff(367), /json/)[_0x4a82ff(491)](12 * -751 + -4205 + 13418, {
            '_id': 2,
            'body': _0x4a82ff(743)
        }));
    });
});