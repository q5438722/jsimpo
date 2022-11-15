const locations = {
    'chalSuper': '/challenges/responsive-web-design/',
    'chalBlock': '/challenges/responsive-web-design/basic-html-and-html5',
    'chalChallenge': '/challenges/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements',
    'learnSuper': '/learn/responsive-web-design/',
    'learnBlock': '/learn/responsive-web-design/basic-html-and-html5/',
    'learnChallenge': '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements'
};
describe('challenges/superblock\x20redirect', function () {
    const _0x160253 = {
        'MHIfr': function (_0x477314, _0x574c0f) {
            return _0x477314(_0x574c0f);
        },
        'VCdHU': 'Responsive\x20Web\x20Design\x20Certification\x20|\x20freeCodeCamp.org',
        'vFFew': function (_0x2e66de, _0x2049da, _0x381923) {
            return _0x2e66de(_0x2049da, _0x381923);
        },
        'cxNvJ': 'redirects\x20to\x20learn/superblock'
    };
    _0x160253['vFFew'](it, _0x160253['cxNvJ'], () => {
        const _0xbe4469 = {
            'YoIaH': function (_0x1ea960, _0x1fe8a3) {
                return _0x160253['MHIfr'](_0x1ea960, _0x1fe8a3);
            }
        };
        cy['visit'](locations['chalSuper']), cy['title']()['should']('eq', _0x160253['VCdHU']), cy['location']()['should'](_0x4ad873 => {
            _0xbe4469['YoIaH'](expect, _0x4ad873['pathname'])['to']['eq'](locations['learnSuper']);
        });
    });
}), describe('challenges/superblock/block\x20redirect', function () {
    const _0x504a66 = {
        'mfRdh': function (_0x27f1e6, _0x4c30ce) {
            return _0x27f1e6(_0x4c30ce);
        },
        'XJJvD': 'Basic\x20HTML\x20and\x20HTML5\x20|\x20freeCodeCamp.org',
        'yPIAu': function (_0x1d8636, _0x25cd4a, _0x48ec07) {
            return _0x1d8636(_0x25cd4a, _0x48ec07);
        },
        'fdSYe': 'redirects\x20to\x20learn/superblock/block'
    };
    _0x504a66['yPIAu'](it, _0x504a66['fdSYe'], () => {
        const _0x2ed53d = {
            'sWQNB': function (_0xadc7b4, _0x2d40e6) {
                return _0x504a66['mfRdh'](_0xadc7b4, _0x2d40e6);
            }
        };
        cy['visit'](locations['chalBlock']), cy['title']()['should']('eq', _0x504a66['XJJvD']), cy['location']()['should'](_0x2d3430 => {
            _0x2ed53d['sWQNB'](expect, _0x2d3430['pathname'])['to']['eq'](locations['learnBlock']);
        });
    });
}), describe('challenges/superblock/block/challenge\x20redirect', function () {
    const _0x335882 = {
        'OYJnR': function (_0x190c43, _0x28e585) {
            return _0x190c43(_0x28e585);
        },
        'LJFGw': 'Learn\x20Basic\x20HTML\x20and\x20HTML5:\x20Say\x20Hello\x20to\x20HTML\x20Elements\x20|\x20freeCodeCamp.org',
        'NEiyS': function (_0x4fde8c, _0x12e2eb, _0x355af4) {
            return _0x4fde8c(_0x12e2eb, _0x355af4);
        },
        'uDpKi': 'redirects\x20to\x20learn/superblock/block/challenge'
    };
    _0x335882['NEiyS'](it, _0x335882['uDpKi'], () => {
        const _0x3894a9 = {
            'YAheM': function (_0x5e0658, _0x5d5950) {
                return _0x335882['OYJnR'](_0x5e0658, _0x5d5950);
            }
        };
        cy['visit'](locations['chalChallenge']), cy['title']()['should']('eq', _0x335882['LJFGw']), cy['location']()['should'](_0x1ef624 => {
            _0x3894a9['YAheM'](expect, _0x1ef624['pathname'])['to']['eq'](locations['learnChallenge']);
        });
    });
});
