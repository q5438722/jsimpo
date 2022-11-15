const fs = require('fs'), path = require(_0x47806a(245)), color = require(_0x47806a(246)), {promisify} = require('util'), glob = promisify(require(_0x47806a(247))), readFile = promisify(fs['readFile']), BaseCommand = require(_0x47806a(248));
class HelpSearch extends BaseCommand {
    static get [_0x47806a(249)]() {
        const _0x5ed599 = _0x47806a;
        return _0x5ed599(250);
    }
    static get ['name']() {
        const _0x1f4ae1 = _0x47806a;
        return _0x1f4ae1(251);
    }
    static get ['usage']() {
        const _0x28c330 = _0x47806a;
        return [_0x28c330(252)];
    }
    static get [_0x47806a(253)]() {
        const _0x96ccec = _0x47806a;
        return [_0x96ccec(254)];
    }
    ['exec'](_0x481844, _0x45cfd0) {
        const _0x9ef557 = _0x47806a;
        this[_0x9ef557(255)](_0x481844)[_0x9ef557(256)](() => _0x45cfd0())['catch'](_0x45cfd0);
    }
    async _0x47806a(255)(_0x39da9d) {
        const _0x559e07 = _0x47806a;
        if (!_0x39da9d[_0x559e07(257)])
            return this['npm'][_0x559e07(258)](this[_0x559e07(259)]);
        const _0x5347c2 = path[_0x559e07(260)](__dirname, '..', 'docs/content'), _0x141a85 = await glob(_0x5347c2 + _0x559e07(261)), _0x1a690a = await this[_0x559e07(262)](_0x141a85), _0x3880c1 = await this[_0x559e07(263)](_0x39da9d, _0x1a690a, _0x141a85), _0x5a96ce = this[_0x559e07(264)](_0x39da9d, _0x3880c1);
        if (!_0x5a96ce['trim']())
            this[_0x559e07(265)][_0x559e07(258)](_0x559e07(266) + _0x39da9d[_0x559e07(267)](' ') + '\n');
        else
            this[_0x559e07(265)][_0x559e07(258)](_0x5a96ce);
    }
    async _0x47806a(262)(_0x227305) {
        const _0x362d75 = _0x47806a, _0x27bb96 = {};
        return await Promise[_0x362d75(268)](_0x227305[_0x362d75(269)](async _0x745734 => {
            _0x27bb96[_0x745734] = (await readFile(_0x745734, 'utf8'))['replace'](/^---\n(.*\n)*?---\n/, '')['trim']();
        })), _0x27bb96;
    }
    async 'searchFiles'(_0x33ae2e, _0x6306c1, _0x4e081b) {
        const _0x2a03ad = _0x47806a, _0x5d4d4b = [];
        for (const [_0x3d4ced, _0xb52b0f] of Object[_0x2a03ad(270)](_0x6306c1)) {
            const _0x38dba8 = _0xb52b0f[_0x2a03ad(271)]();
            if (!_0x33ae2e['some'](_0x4a9980 => _0x38dba8[_0x2a03ad(272)](_0x4a9980[_0x2a03ad(271)]())))
                continue;
            const _0x198fc1 = _0xb52b0f[_0x2a03ad(273)](/\n+/);
            for (let _0x449de6 = 0; _0x449de6 < _0x198fc1[_0x2a03ad(257)]; _0x449de6++) {
                const _0xce9556 = _0x198fc1[_0x449de6], _0x284bfd = _0x198fc1[_0x449de6 + 1];
                let _0x5c3ed8 = ![];
                if (_0x284bfd) {
                    _0x5c3ed8 = _0x33ae2e[_0x2a03ad(274)](_0x214f08 => _0x284bfd[_0x2a03ad(271)]()['includes'](_0x214f08['toLowerCase']()));
                    if (_0x5c3ed8) {
                        _0x449de6 += 2;
                        continue;
                    }
                }
                _0x5c3ed8 = _0x33ae2e[_0x2a03ad(274)](_0x2c178e => _0xce9556[_0x2a03ad(271)]()[_0x2a03ad(272)](_0x2c178e['toLowerCase']()));
                if (_0x5c3ed8) {
                    _0x449de6++;
                    continue;
                }
                _0x198fc1[_0x449de6] = null;
            }
            const _0x51cbfb = _0x198fc1['reduce']((_0xc70dbf, _0x47fc53) => {
                const _0x64f43c = _0x2a03ad;
                if (!(_0x47fc53 === null && _0xc70dbf[_0xc70dbf[_0x64f43c(257)] - 1] === null))
                    _0xc70dbf[_0x64f43c(275)](_0x47fc53);
                return _0xc70dbf;
            }, []);
            if (_0x51cbfb[_0x51cbfb[_0x2a03ad(257)] - 1] === null)
                _0x51cbfb[_0x2a03ad(276)]();
            if (_0x51cbfb[0] === null)
                _0x51cbfb[_0x2a03ad(277)]();
            const _0x361648 = {};
            let _0xfc2045 = 0;
            for (const _0x277110 of _0x51cbfb) {
                for (const _0x5447fb of _0x33ae2e) {
                    const _0x5759d4 = (_0x277110 || '')[_0x2a03ad(271)]()['split'](_0x5447fb['toLowerCase']())['length'] - 1;
                    _0x5759d4 > 0 && (_0x361648[_0x5447fb] = (_0x361648[_0x5447fb] || 0) + _0x5759d4, _0xfc2045 += _0x5759d4);
                }
            }
            const _0x2ff8d0 = _0x2a03ad(278) + path[_0x2a03ad(279)](_0x3d4ced, '.md')['replace'](/^npm-/, '');
            _0x5d4d4b['push']({
                'file': _0x3d4ced,
                'cmd': _0x2ff8d0,
                'lines': _0x51cbfb,
                'found': Object[_0x2a03ad(280)](_0x361648),
                'hits': _0x361648,
                'totalHits': _0xfc2045
            });
        }
        return _0x5d4d4b[_0x2a03ad(281)]((_0x428d3b, _0x2006ea) => _0x428d3b[_0x2a03ad(282)][_0x2a03ad(257)] > _0x2006ea[_0x2a03ad(282)][_0x2a03ad(257)] ? -1 : _0x428d3b[_0x2a03ad(282)][_0x2a03ad(257)] < _0x2006ea[_0x2a03ad(282)][_0x2a03ad(257)] ? 1 : _0x428d3b[_0x2a03ad(283)] > _0x2006ea['totalHits'] ? -1 : _0x428d3b[_0x2a03ad(283)] < _0x2006ea[_0x2a03ad(283)] ? 1 : _0x428d3b[_0x2a03ad(284)][_0x2a03ad(257)] > _0x2006ea['lines'][_0x2a03ad(257)] ? -1 : _0x428d3b[_0x2a03ad(284)][_0x2a03ad(257)] < _0x2006ea['lines']['length'] ? 1 : 0)[_0x2a03ad(285)](0, 10);
    }
    ['formatResults'](_0x2686ab, _0x404862) {
        const _0x5da684 = _0x47806a, _0x5270c0 = Math[_0x5da684(286)](process[_0x5da684(287)][_0x5da684(288)] || Infinity, 80) + 1, _0x47578f = _0x404862[_0x5da684(269)](_0x4e035b => {
                const _0x813319 = _0x5da684, _0x4b73c5 = [_0x4e035b[_0x813319(289)]], _0x9df02 = Object[_0x813319(280)](_0x4e035b[_0x813319(290)])[_0x813319(269)](_0x512337 => _0x512337 + ':' + _0x4e035b[_0x813319(290)][_0x512337])[_0x813319(281)]((_0x34244b, _0x522ddc) => _0x34244b > _0x522ddc ? 1 : -1)['join'](' ');
                _0x4b73c5['push'](' '[_0x813319(291)](Math[_0x813319(292)](1, _0x5270c0 - _0x4b73c5[_0x813319(267)](' ')['length'] - _0x9df02[_0x813319(257)] - 1))), _0x4b73c5[_0x813319(275)](_0x9df02);
                if (!this['npm'][_0x813319(293)][_0x813319(294)](_0x813319(254)))
                    return _0x4b73c5[_0x813319(267)]('');
                return _0x4b73c5[_0x813319(295)]('\n\n'), _0x4b73c5[_0x813319(275)]('\n'), _0x4b73c5[_0x813319(275)]('-'[_0x813319(291)](_0x5270c0 - 1) + '\n'), _0x4e035b[_0x813319(284)][_0x813319(296)]((_0x24acb1, _0x33c96e) => {
                    const _0x2f5a75 = _0x813319;
                    if (_0x24acb1 === null || _0x33c96e > 3)
                        return;
                    if (!this[_0x2f5a75(265)]['color']) {
                        _0x4b73c5['push'](_0x24acb1 + '\n');
                        return;
                    }
                    const _0x5b1ae0 = [];
                    for (const _0x2c0e1d of _0x2686ab) {
                        const _0x43028b = _0x24acb1['toLowerCase']()[_0x2f5a75(273)](_0x2c0e1d[_0x2f5a75(271)]());
                        let _0x55efb8 = 0;
                        for (const _0x20964d of _0x43028b) {
                            _0x5b1ae0[_0x2f5a75(275)](_0x24acb1[_0x2f5a75(297)](_0x55efb8, _0x20964d['length']));
                            const _0x16b25d = _0x24acb1['substr'](_0x55efb8 + _0x20964d['length'], _0x2c0e1d['length']), _0x4cfdc3 = color[_0x2f5a75(298)](color[_0x2f5a75(299)](_0x16b25d));
                            _0x5b1ae0['push'](_0x4cfdc3), _0x55efb8 += _0x20964d['length'] + _0x2c0e1d[_0x2f5a75(257)];
                        }
                    }
                    _0x4b73c5[_0x2f5a75(275)](_0x5b1ae0['join']('') + '\n');
                }), _0x4b73c5['join']('');
            })['join']('\n'), _0x2aeaf7 = _0x404862[_0x5da684(257)] && !this[_0x5da684(265)][_0x5da684(293)][_0x5da684(294)](_0x5da684(254)) ? _0x5da684(300) + _0x2686ab[_0x5da684(269)](JSON[_0x5da684(301)])['join'](' ') + '\n' + '\u2014'['repeat'](_0x5270c0 - 1) + '\n' + _0x47578f + '\n' + '\u2014'[_0x5da684(291)](_0x5270c0 - 1) + '\n' + _0x5da684(302) : _0x47578f;
        return _0x2aeaf7[_0x5da684(303)]();
    }
}
module[_0x47806a(304)] = HelpSearch;