const _0x3997 = ['QCQFP', 'resolve', 'VyhIO', 'KgShe', 'EYtvA', 'KCshJ', 'should parse frontmatter', 'DTrrn', 'IKbHP', '__fixtures__/with-gfm.md', 'RqURE', 'Ayppz', 'xfmja', 'AhTEj', 'VzRlA', 'it should parse video questions', 'tpQdd', 'SoFyn', 'HUJJQ', 'iioEO', '437060DBJqWc', '27mvQonA', '13043AyFZbQ', '1sYwQmB', '1014842Dtoapi', '1104200jJbKxk', '50625Rjdulc', '152830vmjFxQ', '2815870iFFznC', 'path', 'challenge parser', '__fixtures__/simple.md', '__fixtures__/realistic.md', '__fixtures__/with-imports.md', '__fixtures__/with-yaml.md', '__fixtures__/with-directives.md', 'should parse gfm strikethrough and frontmatter', 'should not mix other YAML with the frontmatter', 'awZKh', 'should parse a simple md file', 'ZVAjZ', 'toMatchSnapshot'];

function _0x1891(_0x138737, _0x327bba) {
    return _0x1891 = function (_0xb97145, _0x317e05) {
        _0xb97145 = _0xb97145 - 387;
        const _0x3f9228 = _0x3997[_0xb97145];

        return _0x3f9228;
    }, _0x1891(_0x138737, _0x327bba);
}
const _0x5b289f = _0x1891;

(function (_0x3e3381, _0x37ab95) {
    const _0x130bef = _0x1891;

    while (true) {
        try {
            const _0x487707 = parseInt(_0x130bef(0x183)) + -parseInt(_0x130bef(0x184)) * parseInt(_0x130bef(0x185)) + parseInt(_0x130bef(0x186)) * -parseInt(_0x130bef(0x187)) + -parseInt(_0x130bef(0x188)) + -parseInt(_0x130bef(0x189)) + -parseInt(_0x130bef(0x18a)) + parseInt(_0x130bef(0x18b));

            if (_0x487707 === _0x37ab95) break;else _0x3e3381.push(_0x3e3381.shift());
        } catch (_0x431648) {
            _0x3e3381.push(_0x3e3381.shift());
        }
    }
})(_0x3997, 578272);

const path = require(_0x5b289f(0x18c));

var { parseMD } = require('.');

describe(_0x5b289f(0x18d), () => {
    const _0x51f0a5 = _0x5b289f;
    const _0x44d080 = {
        'ZVAjZ': _0x51f0a5(0x18e),
        'QCQFP': function (_0x3d25fb, _0x1ae4c2) {
            return _0x3d25fb(_0x1ae4c2);
        },
        'VyhIO': _0x51f0a5(0x18f),
        'cxEWE': function (_0x2ded3b, _0x3e97dc) {
            return _0x2ded3b(_0x3e97dc);
        },
        'EYtvA': function (_0x1a166f, _0x4ed22a) {
            return _0x1a166f(_0x4ed22a);
        },
        'fYcxm': _0x51f0a5(0x190),
        'KCshJ': function (_0x29f70f, _0x1052ac) {
            return _0x29f70f(_0x1052ac);
        },
        'IKbHP': function (_0xaf9826, _0x236c1f) {
            return _0xaf9826(_0x236c1f);
        },
        'RqURE': function (_0x36074a, _0x2e0ab0) {
            return _0x36074a(_0x2e0ab0);
        },
        'xfmja': _0x51f0a5(0x191),
        'AhTEj': function (_0x3c4c9f, _0x593398) {
            return _0x3c4c9f(_0x593398);
        },
        'tpQdd': '__fixtures__/with-video-question.md',
        'SoFyn': function (_0x2a5eba, _0xf97419) {
            return _0x2a5eba(_0xf97419);
        },
        'iioEO': _0x51f0a5(0x192),
        'awZKh': function (_0x21285a, _0x4e9d43, _0xe8472e) {
            return _0x21285a(_0x4e9d43, _0xe8472e);
        },
        'UWBwZ': 'should parse a more realistic md file',
        'KgShe': 'should import md from other files',
        'DTrrn': _0x51f0a5(0x193),
        'Ayppz': _0x51f0a5(0x194),
        'VzRlA': function (_0x17a3d8, _0x576ae4, _0x1de1b1) {
            return _0x17a3d8(_0x576ae4, _0x1de1b1);
        },
        'HUJJQ': 'it should not parse directives we do not use'
    };

    _0x44d080[_0x51f0a5(0x195)](it, _0x51f0a5(0x196), async () => {
        const _0x42b9ee = _0x51f0a5;

        const _0x32894e = await parseMD(path.resolve(__dirname, _0x44d080[_0x42b9ee(0x197)]));

        expect(_0x32894e)[_0x42b9ee(0x198)]();
    }), it(_0x44d080.UWBwZ, async () => {
        const _0x961915 = _0x51f0a5;

        const _0x7d931d = await _0x44d080[_0x961915(0x199)](parseMD, path[_0x961915(0x19a)](__dirname, _0x44d080[_0x961915(0x19b)]));

        _0x44d080.cxEWE(expect, _0x7d931d)[_0x961915(0x198)]();
    }), _0x44d080.awZKh(it, _0x44d080[_0x51f0a5(0x19c)], async () => {
        const _0x8c38f6 = _0x51f0a5;

        const _0x50c308 = await _0x44d080[_0x8c38f6(0x19d)](parseMD, path[_0x8c38f6(0x19a)](__dirname, _0x44d080.fYcxm));

        _0x44d080[_0x8c38f6(0x19e)](expect, _0x50c308)[_0x8c38f6(0x198)]();
    }), _0x44d080[_0x51f0a5(0x195)](it, _0x51f0a5(0x19f), async () => {
        const _0x4267cd = _0x51f0a5;

        const _0x34a603 = await parseMD(path[_0x4267cd(0x19a)](__dirname, '__fixtures__/with-frontmatter.md'));

        expect(_0x34a603).toMatchSnapshot();
    }), it(_0x44d080[_0x51f0a5(0x1a0)], async () => {
        const _0x3b9767 = _0x51f0a5;

        const _0x2532bf = await _0x44d080[_0x3b9767(0x1a1)](parseMD, path[_0x3b9767(0x19a)](__dirname, _0x3b9767(0x1a2)));

        _0x44d080[_0x3b9767(0x1a3)](expect, _0x2532bf)[_0x3b9767(0x198)]();
    }), _0x44d080[_0x51f0a5(0x195)](it, _0x44d080[_0x51f0a5(0x1a4)], async () => {
        const _0xe07fd4 = _0x51f0a5;

        const _0x14c861 = await parseMD(path[_0xe07fd4(0x19a)](__dirname, _0x44d080[_0xe07fd4(0x1a5)]));

        _0x44d080[_0xe07fd4(0x1a6)](expect, _0x14c861)[_0xe07fd4(0x198)]();
    }), _0x44d080[_0x51f0a5(0x1a7)](it, _0x51f0a5(0x1a8), async () => {
        const _0x214232 = _0x51f0a5;

        const _0x450630 = await parseMD(path[_0x214232(0x19a)](__dirname, _0x44d080[_0x214232(0x1a9)]));

        _0x44d080[_0x214232(0x1aa)](expect, _0x450630).toMatchSnapshot();
    }), it(_0x44d080[_0x51f0a5(0x1ab)], async () => {
        const _0x3d0e82 = _0x51f0a5;

        const _0x419b24 = await _0x44d080[_0x3d0e82(0x1aa)](parseMD, path[_0x3d0e82(0x19a)](__dirname, _0x44d080[_0x3d0e82(0x1ac)]));

        expect(_0x419b24).toMatchSnapshot();
    });
});
