const path = require(_0x5b289f(396)), {parseMD} = require('.');
describe(_0x5b289f(397), () => {
    const _0x51f0a5 = _0x5b289f, _0x44d080 = {
            'ZVAjZ': _0x51f0a5(398),
            'QCQFP': function (_0x3d25fb, _0x1ae4c2) {
                return _0x3d25fb(_0x1ae4c2);
            },
            'VyhIO': _0x51f0a5(399),
            'cxEWE': function (_0x2ded3b, _0x3e97dc) {
                return _0x2ded3b(_0x3e97dc);
            },
            'EYtvA': function (_0x1a166f, _0x4ed22a) {
                return _0x1a166f(_0x4ed22a);
            },
            'fYcxm': _0x51f0a5(400),
            'KCshJ': function (_0x29f70f, _0x1052ac) {
                return _0x29f70f(_0x1052ac);
            },
            'IKbHP': function (_0xaf9826, _0x236c1f) {
                return _0xaf9826(_0x236c1f);
            },
            'RqURE': function (_0x36074a, _0x2e0ab0) {
                return _0x36074a(_0x2e0ab0);
            },
            'xfmja': _0x51f0a5(401),
            'AhTEj': function (_0x3c4c9f, _0x593398) {
                return _0x3c4c9f(_0x593398);
            },
            'tpQdd': '__fixtures__/with-video-question.md',
            'SoFyn': function (_0x2a5eba, _0xf97419) {
                return _0x2a5eba(_0xf97419);
            },
            'iioEO': _0x51f0a5(402),
            'awZKh': function (_0x21285a, _0x4e9d43, _0xe8472e) {
                return _0x21285a(_0x4e9d43, _0xe8472e);
            },
            'UWBwZ': 'should parse a more realistic md file',
            'KgShe': 'should import md from other files',
            'DTrrn': _0x51f0a5(403),
            'Ayppz': _0x51f0a5(404),
            'VzRlA': function (_0x17a3d8, _0x576ae4, _0x1de1b1) {
                return _0x17a3d8(_0x576ae4, _0x1de1b1);
            },
            'HUJJQ': 'it should not parse directives we do not use'
        };
    _0x44d080[_0x51f0a5(405)](it, _0x51f0a5(406), async () => {
        const _0x42b9ee = _0x51f0a5, _0x32894e = await parseMD(path['resolve'](__dirname, _0x44d080[_0x42b9ee(407)]));
        expect(_0x32894e)[_0x42b9ee(408)]();
    }), it(_0x44d080['UWBwZ'], async () => {
        const _0x961915 = _0x51f0a5, _0x7d931d = await _0x44d080[_0x961915(409)](parseMD, path[_0x961915(410)](__dirname, _0x44d080[_0x961915(411)]));
        _0x44d080['cxEWE'](expect, _0x7d931d)[_0x961915(408)]();
    }), _0x44d080['awZKh'](it, _0x44d080[_0x51f0a5(412)], async () => {
        const _0x8c38f6 = _0x51f0a5, _0x50c308 = await _0x44d080[_0x8c38f6(413)](parseMD, path[_0x8c38f6(410)](__dirname, _0x44d080['fYcxm']));
        _0x44d080[_0x8c38f6(414)](expect, _0x50c308)[_0x8c38f6(408)]();
    }), _0x44d080[_0x51f0a5(405)](it, _0x51f0a5(415), async () => {
        const _0x4267cd = _0x51f0a5, _0x34a603 = await parseMD(path[_0x4267cd(410)](__dirname, '__fixtures__/with-frontmatter.md'));
        expect(_0x34a603)['toMatchSnapshot']();
    }), it(_0x44d080[_0x51f0a5(416)], async () => {
        const _0x3b9767 = _0x51f0a5, _0x2532bf = await _0x44d080[_0x3b9767(417)](parseMD, path[_0x3b9767(410)](__dirname, _0x3b9767(418)));
        _0x44d080[_0x3b9767(419)](expect, _0x2532bf)[_0x3b9767(408)]();
    }), _0x44d080[_0x51f0a5(405)](it, _0x44d080[_0x51f0a5(420)], async () => {
        const _0xe07fd4 = _0x51f0a5, _0x14c861 = await parseMD(path[_0xe07fd4(410)](__dirname, _0x44d080[_0xe07fd4(421)]));
        _0x44d080[_0xe07fd4(422)](expect, _0x14c861)[_0xe07fd4(408)]();
    }), _0x44d080[_0x51f0a5(423)](it, _0x51f0a5(424), async () => {
        const _0x214232 = _0x51f0a5, _0x450630 = await parseMD(path[_0x214232(410)](__dirname, _0x44d080[_0x214232(425)]));
        _0x44d080[_0x214232(426)](expect, _0x450630)['toMatchSnapshot']();
    }), it(_0x44d080[_0x51f0a5(427)], async () => {
        const _0x3d0e82 = _0x51f0a5, _0x419b24 = await _0x44d080[_0x3d0e82(426)](parseMD, path[_0x3d0e82(410)](__dirname, _0x44d080[_0x3d0e82(428)]));
        expect(_0x419b24)['toMatchSnapshot']();
    });
});