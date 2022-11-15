'use strict';
description('Test\x20whether\x20Promise\x20treats\x20thenable\x20correctly.');
var thisValue, result, value = {
        'then': function (_0x30fd11, _0x5726e5) {
            var _0x5ee5fb = {
                'qxDSB': function (_0x58677f, _0x2dc1ae) {
                    return _0x58677f(_0x2dc1ae);
                },
                'vigFz': 'value.then\x20is\x20called.',
                'dHzXG': function (_0x896a79, _0x3670a2, _0x1f5684) {
                    return _0x896a79(_0x3670a2, _0x1f5684);
                },
                'qZjDl': 'thisValue',
                'JTFfv': 'value',
                'tzBdo': 'hello'
            };
            _0x5ee5fb['qxDSB'](testPassed, _0x5ee5fb['vigFz']), thisValue = this, _0x5ee5fb['dHzXG'](shouldBe, _0x5ee5fb['qZjDl'], _0x5ee5fb['JTFfv']), _0x5ee5fb['qxDSB'](_0x5726e5, _0x5ee5fb['tzBdo']);
        }
    };
new Promise(function (_0x19dcea) {
    var _0x57a244 = {
        'NDari': function (_0x1a5c79, _0x200ea9) {
            return _0x1a5c79(_0x200ea9);
        }
    };
    _0x57a244['NDari'](_0x19dcea, value);
})['then'](function () {
    var _0x383bd8 = {
        'PIhEn': function (_0x4a937f, _0x4c9572) {
            return _0x4a937f(_0x4c9572);
        },
        'FnsfV': 'fulfilled',
        'Fmgmd': function (_0x2d19bd) {
            return _0x2d19bd();
        }
    };
    _0x383bd8['PIhEn'](testFailed, _0x383bd8['FnsfV']), _0x383bd8['Fmgmd'](finishJSTest);
}, function (_0x4d858f) {
    var _0x128f96 = {
        'FlVRo': function (_0x2f2184, _0x504f66) {
            return _0x2f2184(_0x504f66);
        },
        'AkDAl': 'rejected',
        'Iwory': function (_0x35c6cf, _0x174b83, _0x2e745f) {
            return _0x35c6cf(_0x174b83, _0x2e745f);
        },
        'VVYPr': 'result',
        'uMdCH': 'hello',
        'XCHjL': function (_0x5c5422) {
            return _0x5c5422();
        }
    };
    _0x128f96['FlVRo'](testPassed, _0x128f96['AkDAl']), result = _0x4d858f, _0x128f96['Iwory'](shouldBeEqualToString, _0x128f96['VVYPr'], _0x128f96['uMdCH']), _0x128f96['XCHjL'](finishJSTest);
}), debug('The\x20promise\x20is\x20not\x20rejected\x20now.');
