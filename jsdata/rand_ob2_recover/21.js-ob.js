function _0xa12e(_0x16fe62, _0x20cb58) {
    return _0xa12e = function (_0x14e773, _0xa12e7f) {
        _0x14e773 = _0x14e773 - 411;
        let _0x343fc9 = _0x14e7[_0x14e773];
        return _0x343fc9;
    }, _0xa12e(_0x16fe62, _0x20cb58);
}
describe(_0x334319(421), () => {
    const _0x2b5828 = _0x334319, _0x36cafe = [
            _0x2b5828(422),
            _0x2b5828(423),
            _0x2b5828(424),
            _0x2b5828(425),
            '<body id="body">',
            _0x2b5828(426),
            '<p></p>',
            _0x2b5828(427),
            _0x2b5828(428)
        ][_0x2b5828(429)](''), _0x1b3cd5 = require(_0x2b5828(430));
    it(_0x2b5828(431), () => {
        const _0x5a25d1 = _0x2b5828, _0x3a84f2 = new _0x1b3cd5();
        try {
            _0x3a84f2[_0x5a25d1(432)]();
        } catch (_0x1c001c) {
            _0x1c001c['should']['be']['instanceOf'](TypeError)[_0x5a25d1(433)](_0x5a25d1(434), _0x5a25d1(435));
        }
    }), it(_0x2b5828(436), () => {
        const _0x2221a0 = _0x2b5828, _0x532470 = new _0x1b3cd5(), _0x331c2c = _0x2221a0(437);
        _0x532470[_0x2221a0(432)](_0x2221a0(438), _0x331c2c), _0x532470['register'](_0x2221a0(439), _0x331c2c, _0x2221a0(440)), _0x532470['get'](_0x2221a0(438))['should'][_0x2221a0(441)](_0x331c2c), _0x532470[_0x2221a0(442)](_0x2221a0(438), _0x2221a0(443))[_0x2221a0(444)][_0x2221a0(441)](_0x331c2c), _0x532470['get']('head_end', _0x2221a0(440))[_0x2221a0(444)]['contains'](_0x331c2c);
    }), it('register() - function', () => {
        const _0x1b6fbb = _0x2b5828, _0x3835fd = new _0x1b3cd5(), _0x1ae003 = () => '<link rel="stylesheet" href="DPlayer.min.css" />';
        _0x3835fd[_0x1b6fbb(432)]('head_begin', _0x1ae003), _0x3835fd[_0x1b6fbb(442)]('head_begin')['should'][_0x1b6fbb(441)](_0x1ae003());
    }), it(_0x2b5828(445), () => {
        const _0x52bf11 = _0x2b5828, _0x34e2da = new _0x1b3cd5(), _0x25cca3 = _0x52bf11(437);
        _0x34e2da[_0x52bf11(432)](_0x52bf11(446), _0x25cca3), _0x34e2da[_0x52bf11(442)](_0x52bf11(439))[_0x52bf11(444)]['contains'](_0x25cca3);
    }), it(_0x2b5828(447), () => {
        const _0x1341cc = _0x2b5828, _0x15f722 = new _0x1b3cd5();
        _0x15f722['register'](_0x1341cc(448), _0x1341cc(449)), _0x15f722['list']()['body_begin'][_0x1341cc(443)]['should']['be'][_0x1341cc(450)](Set), [..._0x15f722[_0x1341cc(451)]()[_0x1341cc(448)][_0x1341cc(443)]]['should'][_0x1341cc(452)]['be'][_0x1341cc(453)];
    }), it(_0x2b5828(454), () => {
        const _0x28aa6c = _0x2b5828, _0x23777c = new _0x1b3cd5(), _0x529f25 = _0x28aa6c(455);
        _0x23777c[_0x28aa6c(432)]('body_begin', _0x529f25), _0x23777c[_0x28aa6c(432)]('body_end', _0x529f25, 'home'), _0x23777c[_0x28aa6c(442)]('body_begin')['should']['be'][_0x28aa6c(450)](Array), _0x23777c[_0x28aa6c(442)](_0x28aa6c(448))[_0x28aa6c(444)][_0x28aa6c(441)](_0x529f25), _0x23777c[_0x28aa6c(442)](_0x28aa6c(456), 'home')[_0x28aa6c(444)]['be'][_0x28aa6c(450)](Array), _0x23777c['get'](_0x28aa6c(456), 'home')['should'][_0x28aa6c(441)](_0x529f25), _0x23777c[_0x28aa6c(442)](_0x28aa6c(439))[_0x28aa6c(444)]['be'][_0x28aa6c(450)](Array), _0x23777c['get']('head_end')[_0x28aa6c(444)][_0x28aa6c(457)]([]);
    }), it(_0x2b5828(458), () => {
        const _0xbb9084 = _0x2b5828, _0x41d15d = new _0x1b3cd5(), _0x2dd23e = _0xbb9084(455);
        _0x41d15d[_0xbb9084(432)]('head_end', _0x2dd23e), _0x41d15d[_0xbb9084(432)](_0xbb9084(456), _0x2dd23e, _0xbb9084(440)), _0x41d15d['getText'](_0xbb9084(456), _0xbb9084(440))[_0xbb9084(444)][_0xbb9084(457)](_0x2dd23e), _0x41d15d[_0xbb9084(459)](_0xbb9084(456))['should'][_0xbb9084(457)]('');
    }), it(_0x2b5828(460), () => {
        const _0x51e88d = _0x2b5828, _0x58c803 = new _0x1b3cd5(), _0x11b051 = _0x51e88d(455);
        _0x58c803['register'](_0x51e88d(439), _0x11b051), _0x58c803[_0x51e88d(432)]('body_end', _0x11b051), _0x58c803[_0x51e88d(432)](_0x51e88d(456), _0x11b051, _0x51e88d(440)), _0x58c803[_0x51e88d(461)]('head_begin')['should']['eql'](0), _0x58c803[_0x51e88d(461)](_0x51e88d(439))[_0x51e88d(444)][_0x51e88d(457)](1), _0x58c803[_0x51e88d(461)]('body_end')[_0x51e88d(444)][_0x51e88d(457)](2);
    }), it(_0x2b5828(462), () => {
        const _0x259563 = _0x2b5828, _0x25bca3 = new _0x1b3cd5(), _0x16c888 = _0x25bca3[_0x259563(463)](_0x36cafe);
        _0x16c888[_0x259563(444)][_0x259563(464)](_0x259563(465)), _0x16c888['should']['contain'](_0x259563(466));
    }), it(_0x2b5828(462), () => {
        const _0x5da9b4 = _0x2b5828, _0x21c994 = new _0x1b3cd5(), _0x1765bd = _0x21c994[_0x5da9b4(463)](_0x36cafe);
        _0x1765bd[_0x5da9b4(444)][_0x5da9b4(464)](_0x5da9b4(465)), _0x1765bd['should']['contain'](_0x5da9b4(466));
    }), it(_0x2b5828(467), () => {
        const _0x3d6e2e = _0x2b5828, _0xef1fb5 = new _0x1b3cd5();
        _0xef1fb5[_0x3d6e2e(432)]('head_begin', '<!-- Powered by Hexo -->'), _0xef1fb5['register']('head_end', '<link href="prism.css" rel="stylesheet">'), _0xef1fb5[_0x3d6e2e(432)](_0x3d6e2e(439), _0x3d6e2e(468)), _0xef1fb5[_0x3d6e2e(432)](_0x3d6e2e(448), _0x3d6e2e(469)), _0xef1fb5[_0x3d6e2e(432)]('body_end', '<script src="prism.js"></script>');
        const _0x3596de = _0xef1fb5[_0x3d6e2e(463)](_0x36cafe);
        _0x3596de[_0x3d6e2e(444)][_0x3d6e2e(464)](_0x3d6e2e(470)), _0x3596de[_0x3d6e2e(444)][_0x3d6e2e(464)](_0x3d6e2e(471)), _0x3596de[_0x3d6e2e(444)][_0x3d6e2e(464)](_0x3d6e2e(472)), _0x3596de[_0x3d6e2e(444)][_0x3d6e2e(464)](_0x3d6e2e(473));
    }), it(_0x2b5828(474), () => {
        const _0x36d890 = _0x2b5828, _0x380eb9 = [
                _0x36d890(422),
                '<html lang="en">',
                _0x36d890(475),
                _0x36d890(476),
                _0x36d890(477),
                _0x36d890(478),
                '<div></div>',
                _0x36d890(479),
                '<!-- hexo injector body_end start --><script src="prism.js"></script><!-- hexo injector body_end end --></body>',
                _0x36d890(428)
            ][_0x36d890(429)](''), _0x381d08 = new _0x1b3cd5();
        _0x381d08[_0x36d890(432)]('head_begin', _0x36d890(480)), _0x381d08['register'](_0x36d890(439), _0x36d890(481)), _0x381d08[_0x36d890(432)]('head_end', _0x36d890(468)), _0x381d08['register']('body_begin', _0x36d890(469)), _0x381d08[_0x36d890(432)](_0x36d890(456), _0x36d890(482));
        const _0x35a1b1 = _0x381d08[_0x36d890(463)](_0x380eb9);
        _0x35a1b1[_0x36d890(444)][_0x36d890(464)](_0x36d890(475)), _0x35a1b1['should'][_0x36d890(464)](_0x36d890(477)), _0x35a1b1[_0x36d890(444)][_0x36d890(464)]('<body id="body"><!-- hexo injector body_begin start --><!-- hexo injector body_begin end -->'), _0x35a1b1[_0x36d890(444)][_0x36d890(464)]('<!-- hexo injector body_end start --><script src="prism.js"></script><!-- hexo injector body_end end --></body>');
    }), it(_0x2b5828(483), () => {
        const _0xe43455 = _0x2b5828, _0x3c8276 = [
                _0xe43455(422),
                _0xe43455(423),
                _0xe43455(424),
                _0xe43455(425),
                _0xe43455(484),
                _0xe43455(426),
                _0xe43455(479),
                _0xe43455(427),
                '</html>'
            ][_0xe43455(429)]('\n'), _0x2143a3 = new _0x1b3cd5();
        _0x2143a3[_0xe43455(432)](_0xe43455(438), '<!-- Powered by Hexo -->'), _0x2143a3[_0xe43455(432)](_0xe43455(439), _0xe43455(481)), _0x2143a3[_0xe43455(432)](_0xe43455(439), _0xe43455(468)), _0x2143a3[_0xe43455(432)](_0xe43455(448), _0xe43455(469)), _0x2143a3[_0xe43455(432)]('body_end', '<script src="prism.js"></script>');
        const _0x49809c = _0x2143a3[_0xe43455(463)](_0x3c8276);
        _0x49809c[_0xe43455(444)][_0xe43455(464)](_0xe43455(470)), _0x49809c['should'][_0xe43455(464)](_0xe43455(471)), _0x49809c['should'][_0xe43455(464)](_0xe43455(472)), _0x49809c['should'][_0xe43455(464)]('<!-- hexo injector body_end start --><script src="prism.js"></script><!-- hexo injector body_end end --></body>');
    }), it(_0x2b5828(485), () => {
        const _0x1f8141 = _0x2b5828, _0x1f20d5 = [
                _0x1f8141(422),
                _0x1f8141(423),
                _0x1f8141(424),
                _0x1f8141(425),
                '<body id="body">',
                _0x1f8141(426),
                _0x1f8141(479),
                _0x1f8141(427),
                '</html>'
            ][_0x1f8141(429)]('\n'), _0x4f9de9 = new _0x1b3cd5();
        _0x4f9de9[_0x1f8141(432)](_0x1f8141(438), '<!-- head_begin_default -->'), _0x4f9de9[_0x1f8141(432)](_0x1f8141(438), _0x1f8141(486), _0x1f8141(440)), _0x4f9de9[_0x1f8141(432)](_0x1f8141(438), '<!-- head_begin_post -->', _0x1f8141(487)), _0x4f9de9[_0x1f8141(432)](_0x1f8141(438), _0x1f8141(488), _0x1f8141(489)), _0x4f9de9['register'](_0x1f8141(438), _0x1f8141(490), _0x1f8141(491)), _0x4f9de9[_0x1f8141(432)]('head_begin', _0x1f8141(492), 'category'), _0x4f9de9[_0x1f8141(432)](_0x1f8141(438), '<!-- head_begin_tag -->', _0x1f8141(493));
        const _0x24beb9 = _0x4f9de9[_0x1f8141(463)](_0x1f20d5, { 'page': {} }), _0xcbe969 = _0x4f9de9['exec'](_0x1f20d5, { 'page': { '__index': !![] } }), _0x560ea0 = _0x4f9de9[_0x1f8141(463)](_0x1f20d5, { 'page': { '__post': !![] } }), _0x3a6482 = _0x4f9de9[_0x1f8141(463)](_0x1f20d5, { 'page': { '__page': !![] } }), _0x48e698 = _0x4f9de9[_0x1f8141(463)](_0x1f20d5, { 'page': { 'archive': !![] } }), _0x2c182f = _0x4f9de9['exec'](_0x1f20d5, { 'page': { 'category': !![] } }), _0x5a75e2 = _0x4f9de9[_0x1f8141(463)](_0x1f20d5, { 'page': { 'tag': !![] } });
        _0x24beb9[_0x1f8141(444)][_0x1f8141(452)][_0x1f8141(464)](_0x1f8141(486)), _0xcbe969[_0x1f8141(444)][_0x1f8141(464)](_0x1f8141(494)), _0x24beb9[_0x1f8141(444)][_0x1f8141(452)][_0x1f8141(464)](_0x1f8141(495)), _0x560ea0['should'][_0x1f8141(464)]('<!-- head_begin_post --><!-- head_begin_default -->'), _0x24beb9['should']['not'][_0x1f8141(464)]('<!-- head_begin_page -->'), _0x3a6482[_0x1f8141(444)][_0x1f8141(464)](_0x1f8141(496)), _0x24beb9['should'][_0x1f8141(452)]['contain'](_0x1f8141(490)), _0x48e698[_0x1f8141(444)]['contain'](_0x1f8141(497)), _0x24beb9[_0x1f8141(444)][_0x1f8141(452)][_0x1f8141(464)](_0x1f8141(492)), _0x2c182f['should']['contain'](_0x1f8141(498)), _0x24beb9['should']['not'][_0x1f8141(464)](_0x1f8141(499)), _0x5a75e2[_0x1f8141(444)][_0x1f8141(464)](_0x1f8141(500));
    });
});