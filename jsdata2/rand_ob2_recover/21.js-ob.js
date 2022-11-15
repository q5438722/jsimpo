describe(_0x575a52(469), () => {
    const _0x1b8f0d = _0x575a52, _0x2a62ff = [
            '<!DOCTYPE html>',
            _0x1b8f0d(470),
            _0x1b8f0d(471),
            _0x1b8f0d(472),
            _0x1b8f0d(473),
            _0x1b8f0d(474),
            _0x1b8f0d(475),
            _0x1b8f0d(476),
            '</html>'
        ][_0x1b8f0d(477)](''), _0x21c054 = require(_0x1b8f0d(478));
    it('register() - entry is required', () => {
        const _0x299746 = _0x1b8f0d, _0x906738 = new _0x21c054();
        try {
            _0x906738['register']();
        } catch (_0x2ee5f9) {
            _0x2ee5f9['should']['be'][_0x299746(479)](TypeError)[_0x299746(480)](_0x299746(481), 'entry is required');
        }
    }), it('register() - string', () => {
        const _0x50ef0c = _0x1b8f0d, _0x2d257c = new _0x21c054(), _0x4d93c5 = _0x50ef0c(482);
        _0x2d257c[_0x50ef0c(483)](_0x50ef0c(484), _0x4d93c5), _0x2d257c[_0x50ef0c(483)](_0x50ef0c(485), _0x4d93c5, 'home'), _0x2d257c[_0x50ef0c(486)](_0x50ef0c(484))[_0x50ef0c(487)][_0x50ef0c(488)](_0x4d93c5), _0x2d257c[_0x50ef0c(486)](_0x50ef0c(484), _0x50ef0c(489))[_0x50ef0c(487)][_0x50ef0c(488)](_0x4d93c5), _0x2d257c['get'](_0x50ef0c(485), _0x50ef0c(490))[_0x50ef0c(487)]['contains'](_0x4d93c5);
    }), it('register() - function', () => {
        const _0x5d896d = _0x1b8f0d, _0x24355d = new _0x21c054(), _0x9f540e = () => _0x5d896d(482);
        _0x24355d[_0x5d896d(483)](_0x5d896d(484), _0x9f540e), _0x24355d[_0x5d896d(486)]('head_begin')[_0x5d896d(487)][_0x5d896d(488)](_0x9f540e());
    }), it(_0x1b8f0d(491), () => {
        const _0x40652e = _0x1b8f0d, _0x49d43f = new _0x21c054(), _0x229e87 = '<link rel="stylesheet" href="DPlayer.min.css" />';
        _0x49d43f[_0x40652e(483)](_0x40652e(492), _0x229e87), _0x49d43f[_0x40652e(486)]('head_end')[_0x40652e(487)][_0x40652e(488)](_0x229e87);
    }), it(_0x1b8f0d(493), () => {
        const _0x2b1dde = _0x1b8f0d, _0x2d32c9 = new _0x21c054();
        _0x2d32c9[_0x2b1dde(483)](_0x2b1dde(494), _0x2b1dde(495)), _0x2d32c9[_0x2b1dde(496)]()['body_begin']['default'][_0x2b1dde(487)]['be'][_0x2b1dde(479)](Set), [..._0x2d32c9[_0x2b1dde(496)]()[_0x2b1dde(494)][_0x2b1dde(489)]][_0x2b1dde(487)][_0x2b1dde(497)]['be']['empty'];
    }), it(_0x1b8f0d(498), () => {
        const _0x3fc086 = _0x1b8f0d, _0x5ee9d8 = new _0x21c054(), _0x984963 = _0x3fc086(499);
        _0x5ee9d8['register']('body_begin', _0x984963), _0x5ee9d8['register'](_0x3fc086(500), _0x984963, _0x3fc086(490)), _0x5ee9d8[_0x3fc086(486)]('body_begin')[_0x3fc086(487)]['be'][_0x3fc086(479)](Array), _0x5ee9d8['get'](_0x3fc086(494))[_0x3fc086(487)][_0x3fc086(488)](_0x984963), _0x5ee9d8['get'](_0x3fc086(500), _0x3fc086(490))['should']['be'][_0x3fc086(479)](Array), _0x5ee9d8[_0x3fc086(486)]('body_end', _0x3fc086(490))['should'][_0x3fc086(488)](_0x984963), _0x5ee9d8[_0x3fc086(486)](_0x3fc086(485))[_0x3fc086(487)]['be'][_0x3fc086(479)](Array), _0x5ee9d8[_0x3fc086(486)](_0x3fc086(485))[_0x3fc086(487)]['eql']([]);
    }), it(_0x1b8f0d(501), () => {
        const _0x204525 = _0x1b8f0d, _0x5ed241 = new _0x21c054(), _0x553f3c = _0x204525(499);
        _0x5ed241['register'](_0x204525(485), _0x553f3c), _0x5ed241['register'](_0x204525(500), _0x553f3c, 'home'), _0x5ed241[_0x204525(502)](_0x204525(500), _0x204525(490))['should'][_0x204525(503)](_0x553f3c), _0x5ed241[_0x204525(502)](_0x204525(500))[_0x204525(487)][_0x204525(503)]('');
    }), it(_0x1b8f0d(504), () => {
        const _0x7565dd = _0x1b8f0d, _0x48a645 = new _0x21c054(), _0x53cc18 = '<script src="jquery.min.js"></script>';
        _0x48a645[_0x7565dd(483)](_0x7565dd(485), _0x53cc18), _0x48a645[_0x7565dd(483)](_0x7565dd(500), _0x53cc18), _0x48a645[_0x7565dd(483)]('body_end', _0x53cc18, _0x7565dd(490)), _0x48a645['getSize'](_0x7565dd(484))[_0x7565dd(487)]['eql'](0), _0x48a645[_0x7565dd(505)](_0x7565dd(485))[_0x7565dd(487)]['eql'](1), _0x48a645[_0x7565dd(505)](_0x7565dd(500))[_0x7565dd(487)][_0x7565dd(503)](2);
    }), it('exec() - default', () => {
        const _0x5afb35 = _0x1b8f0d, _0x45b008 = new _0x21c054(), _0x3a5fd4 = _0x45b008[_0x5afb35(506)](_0x2a62ff);
        _0x3a5fd4[_0x5afb35(487)]['contain'](_0x5afb35(507)), _0x3a5fd4[_0x5afb35(487)][_0x5afb35(508)]('<body id="body"><div></div><p></p></body>');
    }), it(_0x1b8f0d(509), () => {
        const _0xb255f4 = _0x1b8f0d, _0x5e495e = new _0x21c054(), _0x39745f = _0x5e495e[_0xb255f4(506)](_0x2a62ff);
        _0x39745f[_0xb255f4(487)]['contain'](_0xb255f4(507)), _0x39745f[_0xb255f4(487)][_0xb255f4(508)](_0xb255f4(510));
    }), it(_0x1b8f0d(511), () => {
        const _0x5e2889 = _0x1b8f0d, _0x3a0967 = new _0x21c054();
        _0x3a0967[_0x5e2889(483)]('head_begin', _0x5e2889(512)), _0x3a0967['register'](_0x5e2889(485), _0x5e2889(513)), _0x3a0967[_0x5e2889(483)](_0x5e2889(485), _0x5e2889(514)), _0x3a0967[_0x5e2889(483)](_0x5e2889(494), _0x5e2889(515)), _0x3a0967['register'](_0x5e2889(500), _0x5e2889(516));
        const _0x3bd896 = _0x3a0967['exec'](_0x2a62ff);
        _0x3bd896['should']['contain'](_0x5e2889(517)), _0x3bd896['should'][_0x5e2889(508)]('<!-- hexo injector head_end start --><link href="prism.css" rel="stylesheet"><link href="prism-linenumber.css" rel="stylesheet"><!-- hexo injector head_end end --></head>'), _0x3bd896['should']['contain'](_0x5e2889(518)), _0x3bd896[_0x5e2889(487)]['contain'](_0x5e2889(519));
    }), it(_0x1b8f0d(520), () => {
        const _0x139e7c = _0x1b8f0d, _0x173272 = [
                _0x139e7c(521),
                _0x139e7c(470),
                _0x139e7c(522),
                _0x139e7c(523),
                _0x139e7c(524),
                '<body id="body"><!-- hexo injector body_begin start --><!-- hexo injector body_begin end -->',
                _0x139e7c(474),
                _0x139e7c(475),
                _0x139e7c(519),
                _0x139e7c(525)
            ][_0x139e7c(477)](''), _0x3817bf = new _0x21c054();
        _0x3817bf[_0x139e7c(483)](_0x139e7c(484), _0x139e7c(512)), _0x3817bf['register'](_0x139e7c(485), _0x139e7c(513)), _0x3817bf['register'](_0x139e7c(485), '<link href="prism-linenumber.css" rel="stylesheet">'), _0x3817bf['register'](_0x139e7c(494), _0x139e7c(515)), _0x3817bf[_0x139e7c(483)]('body_end', _0x139e7c(516));
        const _0x506b27 = _0x3817bf[_0x139e7c(506)](_0x173272);
        _0x506b27[_0x139e7c(487)][_0x139e7c(508)](_0x139e7c(522)), _0x506b27[_0x139e7c(487)][_0x139e7c(508)]('<!-- hexo injector head_end start --><link href="prism.css" rel="stylesheet"></head>'), _0x506b27[_0x139e7c(487)]['contain'](_0x139e7c(526)), _0x506b27[_0x139e7c(487)][_0x139e7c(508)]('<!-- hexo injector body_end start --><script src="prism.js"></script><!-- hexo injector body_end end --></body>');
    }), it(_0x1b8f0d(527), () => {
        const _0x28e854 = _0x1b8f0d, _0x109828 = [
                '<!DOCTYPE html>',
                _0x28e854(470),
                _0x28e854(471),
                '</head>',
                _0x28e854(473),
                _0x28e854(474),
                _0x28e854(475),
                _0x28e854(476),
                _0x28e854(525)
            ][_0x28e854(477)]('\n'), _0x2cd0a2 = new _0x21c054();
        _0x2cd0a2[_0x28e854(483)](_0x28e854(484), _0x28e854(512)), _0x2cd0a2[_0x28e854(483)](_0x28e854(485), '<link href="prism.css" rel="stylesheet">'), _0x2cd0a2[_0x28e854(483)](_0x28e854(485), _0x28e854(514)), _0x2cd0a2[_0x28e854(483)](_0x28e854(494), _0x28e854(515)), _0x2cd0a2['register']('body_end', _0x28e854(516));
        const _0x33b8e7 = _0x2cd0a2[_0x28e854(506)](_0x109828);
        _0x33b8e7[_0x28e854(487)]['contain'](_0x28e854(517)), _0x33b8e7[_0x28e854(487)]['contain'](_0x28e854(528)), _0x33b8e7['should']['contain']('<body id="body"><!-- hexo injector body_begin start --><script>window.Prism = window.Prism || {}; window.Prism.manual = true;</script><!-- hexo injector body_begin end -->'), _0x33b8e7[_0x28e854(487)][_0x28e854(508)](_0x28e854(519));
    }), it(_0x1b8f0d(529), () => {
        const _0x409673 = _0x1b8f0d, _0x1df1ff = [
                _0x409673(521),
                _0x409673(470),
                _0x409673(471),
                _0x409673(472),
                '<body id="body">',
                _0x409673(474),
                _0x409673(475),
                _0x409673(476),
                _0x409673(525)
            ][_0x409673(477)]('\n'), _0x43a2e2 = new _0x21c054();
        _0x43a2e2[_0x409673(483)]('head_begin', _0x409673(530)), _0x43a2e2[_0x409673(483)](_0x409673(484), _0x409673(531), 'home'), _0x43a2e2[_0x409673(483)]('head_begin', '<!-- head_begin_post -->', _0x409673(532)), _0x43a2e2[_0x409673(483)](_0x409673(484), '<!-- head_begin_page -->', _0x409673(533)), _0x43a2e2[_0x409673(483)](_0x409673(484), _0x409673(534), 'archive'), _0x43a2e2[_0x409673(483)](_0x409673(484), '<!-- head_begin_category -->', 'category'), _0x43a2e2[_0x409673(483)](_0x409673(484), _0x409673(535), 'tag');
        const _0x35c434 = _0x43a2e2[_0x409673(506)](_0x1df1ff, { 'page': {} }), _0x4b93b1 = _0x43a2e2[_0x409673(506)](_0x1df1ff, { 'page': { '__index': !![] } }), _0x31efbf = _0x43a2e2['exec'](_0x1df1ff, { 'page': { '__post': !![] } }), _0x1ca981 = _0x43a2e2['exec'](_0x1df1ff, { 'page': { '__page': !![] } }), _0x28a85b = _0x43a2e2[_0x409673(506)](_0x1df1ff, { 'page': { 'archive': !![] } }), _0x33a569 = _0x43a2e2['exec'](_0x1df1ff, { 'page': { 'category': !![] } }), _0x76839e = _0x43a2e2[_0x409673(506)](_0x1df1ff, { 'page': { 'tag': !![] } });
        _0x35c434[_0x409673(487)][_0x409673(497)]['contain'](_0x409673(531)), _0x4b93b1['should']['contain'](_0x409673(536)), _0x35c434[_0x409673(487)][_0x409673(497)]['contain']('<!-- head_begin_post -->'), _0x31efbf['should'][_0x409673(508)](_0x409673(537)), _0x35c434[_0x409673(487)][_0x409673(497)][_0x409673(508)](_0x409673(538)), _0x1ca981[_0x409673(487)][_0x409673(508)](_0x409673(539)), _0x35c434[_0x409673(487)][_0x409673(497)][_0x409673(508)](_0x409673(534)), _0x28a85b[_0x409673(487)][_0x409673(508)](_0x409673(540)), _0x35c434[_0x409673(487)]['not'][_0x409673(508)]('<!-- head_begin_category -->'), _0x33a569[_0x409673(487)][_0x409673(508)](_0x409673(541)), _0x35c434[_0x409673(487)][_0x409673(497)][_0x409673(508)](_0x409673(535)), _0x76839e[_0x409673(487)][_0x409673(508)](_0x409673(542));
    });
});