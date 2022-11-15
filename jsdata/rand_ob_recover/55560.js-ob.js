function _0x5718(_0x1b3cda, _0x19d879) {
    return _0x5718 = function (_0x5b4391, _0x34c5ac) {
        _0x5b4391 = _0x5b4391 - (7731 + -190 * -39 + -14955);
        let _0x16ef54 = _0xdb9d[_0x5b4391];
        return _0x16ef54;
    }, _0x5718(_0x1b3cda, _0x19d879);
}
const common = require(_0x36f003(195));
if (!common['hasCrypto'])
    common[_0x36f003(196)](_0x36f003(197));
const assert = require(_0x36f003(198)), tls = require(_0x36f003(199)), fixtures = require(_0x36f003(200)), options = {
        'key': fixtures[_0x36f003(201)](_0x36f003(202)),
        'cert': fixtures[_0x36f003(201)](_0x36f003(203))
    }, messageUtf8 = _0x36f003(204), messageAscii = _0x36f003(205), server = tls[_0x36f003(206)](options, common['mustCall'](function (_0x24f955) {
        const _0x5df62a = _0x36f003;
        console[_0x5df62a(207)](_0x5df62a(208), _0x24f955[_0x5df62a(209)]()), _0x24f955[_0x5df62a(210)](messageUtf8);
    }));
server[_0x36f003(211)](-6696 + -5 * 1829 + 15841, function () {
    const _0x4203a2 = _0x36f003, _0x19393b = {
            'VRtqj': _0x4203a2(212),
            'otiJI': _0x4203a2(213),
            'feWtO': _0x4203a2(214),
            'xZaLg': _0x4203a2(215),
            'rqENu': 'closed',
            'kfgPd': 'client: on close',
            'MwvTt': _0x4203a2(216),
            'RsOLp': _0x4203a2(217),
            'JOnXo': _0x4203a2(218)
        }, _0x4b5a9d = tls[_0x4203a2(219)]({
            'port': this[_0x4203a2(220)]()[_0x4203a2(221)],
            'rejectUnauthorized': ![]
        });
    let _0x427891 = '';
    _0x4b5a9d[_0x4203a2(222)](_0x19393b[_0x4203a2(223)]), _0x4b5a9d['on'](_0x19393b[_0x4203a2(224)], function (_0x203833) {
        const _0x3a34f2 = _0x4203a2;
        console['log'](_0x19393b[_0x3a34f2(225)], _0x203833), assert['ok'](typeof _0x203833 === _0x19393b[_0x3a34f2(226)]), _0x427891 += _0x203833;
    }), _0x4b5a9d['on'](_0x19393b[_0x4203a2(227)], common[_0x4203a2(228)](() => {
        const _0x555fa3 = _0x4203a2;
        console[_0x555fa3(207)](_0x19393b['feWtO']);
    })), _0x4b5a9d['on'](_0x4203a2(229), common['mustCall'](function () {
        const _0x362f2d = _0x4203a2, _0xb43b4a = _0x19393b['xZaLg'][_0x362f2d(230)]('|');
        let _0x35c1d3 = 9572 + -1 * 751 + 8821 * -1;
        while (!![]) {
            switch (_0xb43b4a[_0x35c1d3++]) {
            case '0':
                assert[_0x362f2d(231)](messageAscii, _0x427891);
                continue;
            case '1':
                assert[_0x362f2d(232)](messageUtf8, _0x427891);
                continue;
            case '2':
                assert[_0x362f2d(231)](_0x4b5a9d[_0x362f2d(233)], _0x19393b[_0x362f2d(234)]);
                continue;
            case '3':
                console[_0x362f2d(207)](_0x19393b[_0x362f2d(235)]);
                continue;
            case '4':
                server[_0x362f2d(229)]();
                continue;
            }
            break;
        }
    }));
});