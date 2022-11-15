const {createUrl, resolveFixed, resolveFluid, resolveResize, generateImageSource, getBase64Image} = require('../extend-node-type');
describe('contentful\x20extend\x20node\x20type', () => {
    const _0x379294 = {
        'FFEnn': function (_0x29a71f, _0x40985c) {
            return _0x29a71f(_0x40985c);
        },
        'sWyZk': function (_0x2fa2b9, _0x59aeca, _0x4ce02b) {
            return _0x2fa2b9(_0x59aeca, _0x4ce02b);
        },
        'zMXgB': function (_0x1bed88, _0x195d01, _0x494884, _0x39b193, _0x5e0420, _0x4f92f1, _0x2baf08) {
            return _0x1bed88(_0x195d01, _0x494884, _0x39b193, _0x5e0420, _0x4f92f1, _0x2baf08);
        },
        'YbTSc': function (_0x53b5a7, _0x2d1cb0) {
            return _0x53b5a7(_0x2d1cb0);
        },
        'QRrsb': function (_0x476300, _0x5b46ee) {
            return _0x476300(_0x5b46ee);
        },
        'vcbZC': function (_0xcf0dbd, _0x32fba1) {
            return _0xcf0dbd(_0x32fba1);
        },
        'uvJfj': function (_0x17d1a9, _0x4b6ed9) {
            return _0x17d1a9(_0x4b6ed9);
        },
        'LPWcY': function (_0x1bda0f, _0x1db2e0) {
            return _0x1bda0f(_0x1db2e0);
        },
        'kjMys': function (_0x4b0ada, _0x46c917) {
            return _0x4b0ada(_0x46c917);
        },
        'xxmKK': function (_0x5b7b55, _0x433f57, _0x31e262) {
            return _0x5b7b55(_0x433f57, _0x31e262);
        },
        'MNoCx': function (_0x49f542, _0x319971, _0x704b40) {
            return _0x49f542(_0x319971, _0x704b40);
        },
        'wCrHI': function (_0x431dc5, _0x5b8519) {
            return _0x431dc5(_0x5b8519);
        },
        'INdKs': function (_0x1ca626, _0x1dd5c8, _0x3e20b3) {
            return _0x1ca626(_0x1dd5c8, _0x3e20b3);
        },
        'ZrstD': function (_0x45801b, _0x33817c, _0x4c5ce3) {
            return _0x45801b(_0x33817c, _0x4c5ce3);
        },
        'bSpHx': function (_0xfbb4ce, _0x5f1d9a) {
            return _0xfbb4ce(_0x5f1d9a);
        },
        'iupyK': function (_0x773162, _0x3b766d) {
            return _0x773162(_0x3b766d);
        },
        'AyRdM': function (_0x2ee16e, _0x3b9eab) {
            return _0x2ee16e(_0x3b9eab);
        },
        'ihaRn': function (_0x2d95f4, _0x3025e6, _0x579a2e) {
            return _0x2d95f4(_0x3025e6, _0x579a2e);
        },
        'sqnTP': function (_0x3f8b43, _0x2e3c74) {
            return _0x3f8b43(_0x2e3c74);
        },
        'QAzBa': function (_0x883cbc, _0x45abab) {
            return _0x883cbc(_0x45abab);
        },
        'ZQLTb': function (_0x35149b, _0x419d0d) {
            return _0x35149b(_0x419d0d);
        },
        'DwZUQ': function (_0x29d168, _0x398bfa, _0x2ef0e2) {
            return _0x29d168(_0x398bfa, _0x2ef0e2);
        },
        'sytKC': function (_0x3dbab4, _0x33a847, _0x499d79) {
            return _0x3dbab4(_0x33a847, _0x499d79);
        },
        'PQXco': function (_0x35f80c, _0x3e8fdd) {
            return _0x35f80c(_0x3e8fdd);
        },
        'BMFIe': function (_0x5c04b3, _0x380d6d, _0x39a59f) {
            return _0x5c04b3(_0x380d6d, _0x39a59f);
        },
        'BMXlj': function (_0x20744c, _0xbb10f1) {
            return _0x20744c(_0xbb10f1);
        },
        'dOxqR': function (_0x1faa1f, _0x41ca08, _0x496206) {
            return _0x1faa1f(_0x41ca08, _0x496206);
        },
        'ysLjN': function (_0x147454, _0x5a111a) {
            return _0x147454(_0x5a111a);
        },
        'nUJtZ': function (_0x16cf50, _0x1458b2) {
            return _0x16cf50(_0x1458b2);
        },
        'MrsVR': function (_0x5364c8, _0x543c5e, _0x4dec42) {
            return _0x5364c8(_0x543c5e, _0x4dec42);
        },
        'qSFca': function (_0x6dc09b, _0x26dc61, _0x5f1172) {
            return _0x6dc09b(_0x26dc61, _0x5f1172);
        },
        'hpMqE': function (_0x41e78b, _0x3c62c9, _0x1ecd41) {
            return _0x41e78b(_0x3c62c9, _0x1ecd41);
        },
        'VfpmJ': function (_0x470210, _0x538037, _0x360e12) {
            return _0x470210(_0x538037, _0x360e12);
        },
        'eHUUm': function (_0x1b9774, _0x6f1b5f, _0x222f2a) {
            return _0x1b9774(_0x6f1b5f, _0x222f2a);
        },
        'ShQQB': function (_0x451e60, _0x23f1b6, _0x1d2201) {
            return _0x451e60(_0x23f1b6, _0x1d2201);
        },
        'HlIGf': function (_0x2100c7, _0x17e4e2, _0x211e9c) {
            return _0x2100c7(_0x17e4e2, _0x211e9c);
        },
        'ikINC': function (_0x4c2f2c, _0x11d4e4, _0x3cc645) {
            return _0x4c2f2c(_0x11d4e4, _0x3cc645);
        },
        'KmdqB': function (_0x3c91af, _0x53358b, _0x4c58e6) {
            return _0x3c91af(_0x53358b, _0x4c58e6);
        },
        'vAAbI': function (_0x37999b, _0x49a7e8, _0xc05f16) {
            return _0x37999b(_0x49a7e8, _0xc05f16);
        },
        'ChciY': function (_0x1bc4a5, _0x154737, _0x220b65) {
            return _0x1bc4a5(_0x154737, _0x220b65);
        },
        'qKzIS': function (_0x5b3ea1, _0x29debc) {
            return _0x5b3ea1(_0x29debc);
        },
        'aNrZh': function (_0x1adb4a, _0x492621, _0x5bfbdf) {
            return _0x1adb4a(_0x492621, _0x5bfbdf);
        },
        'QIziE': function (_0x2b8a9a, _0x5c95c0) {
            return _0x2b8a9a(_0x5c95c0);
        },
        'mHuwj': function (_0x41fab3, _0x459419) {
            return _0x41fab3(_0x459419);
        },
        'tZIAD': function (_0x2b16d8, _0x239d29, _0x242ca2) {
            return _0x2b16d8(_0x239d29, _0x242ca2);
        },
        'VXCeE': function (_0x76fe32, _0x4a50d1) {
            return _0x76fe32(_0x4a50d1);
        },
        'uEwHS': function (_0x4cb157, _0x507e8e, _0x35ae68) {
            return _0x4cb157(_0x507e8e, _0x35ae68);
        },
        'QnCaK': function (_0x393214, _0x579121) {
            return _0x393214(_0x579121);
        },
        'lTtCR': function (_0x40d0c8, _0x4e3dd7, _0x53830e) {
            return _0x40d0c8(_0x4e3dd7, _0x53830e);
        },
        'yKeoF': function (_0x4452b2, _0x337734, _0x3e9aaa) {
            return _0x4452b2(_0x337734, _0x3e9aaa);
        },
        'clqxl': function (_0x5108ba, _0x38767b, _0x38557a) {
            return _0x5108ba(_0x38767b, _0x38557a);
        },
        'cXMqy': function (_0xc902, _0x2a5f21, _0xf09a85) {
            return _0xc902(_0x2a5f21, _0xf09a85);
        },
        'jwffR': function (_0x38c65c, _0x322439, _0x540cdd) {
            return _0x38c65c(_0x322439, _0x540cdd);
        },
        'JZSKw': function (_0x5bcb10, _0x3f3072) {
            return _0x5bcb10(_0x3f3072);
        },
        'nRzzK': function (_0x38163e, _0x444bba) {
            return _0x38163e(_0x444bba);
        },
        'ZzoBx': function (_0x47f309, _0x5617d4, _0x319e9f) {
            return _0x47f309(_0x5617d4, _0x319e9f);
        },
        'KrPWe': function (_0x27f200, _0xc88bf2) {
            return _0x27f200(_0xc88bf2);
        },
        'OQuIM': function (_0x32e5f2, _0x462f55) {
            return _0x32e5f2(_0x462f55);
        },
        'YqSPP': function (_0x338d42, _0x52e95d) {
            return _0x338d42(_0x52e95d);
        },
        'hSsYA': function (_0x4aae49, _0x44cfb6) {
            return _0x4aae49(_0x44cfb6);
        },
        'zdJVP': function (_0x5c874d, _0x26cec7) {
            return _0x5c874d(_0x26cec7);
        },
        'sHily': function (_0x52ce2e, _0x1b6d36, _0x15d243) {
            return _0x52ce2e(_0x1b6d36, _0x15d243);
        },
        'SnIkn': function (_0x62e865, _0x1afd5d, _0x1552dc) {
            return _0x62e865(_0x1afd5d, _0x1552dc);
        },
        'bkQum': function (_0x350356, _0xb6c33d, _0x18adf3) {
            return _0x350356(_0xb6c33d, _0x18adf3);
        },
        'VpJyP': function (_0x1d1c01, _0x63dcbc, _0x4e05d1) {
            return _0x1d1c01(_0x63dcbc, _0x4e05d1);
        },
        'fXBmV': function (_0x540c24, _0x120471, _0x2fc1f9) {
            return _0x540c24(_0x120471, _0x2fc1f9);
        },
        'VxuuV': function (_0x1cf745, _0x695ff8, _0x42855f) {
            return _0x1cf745(_0x695ff8, _0x42855f);
        },
        'TWRGB': function (_0x3addfa, _0x4d359d, _0x2fa9ed) {
            return _0x3addfa(_0x4d359d, _0x2fa9ed);
        }
    };
    _0x379294['VpJyP'](describe, 'createUrl', () => {
        _0x379294['sWyZk'](it, 'allows\x20you\x20to\x20create\x20URls', () => {
            _0x379294['FFEnn'](expect, _0x379294['sWyZk'](createUrl, '//images.contentful.com/dsf/bl.jpg', { 'width': 0x64 }))['toMatchSnapshot']();
        }), _0x379294['sWyZk'](it, 'ignores\x20options\x20it\x20doesn\x27t\x20understand', () => {
            _0x379294['FFEnn'](expect, _0x379294['sWyZk'](createUrl, '//images.contentful.com/dsf/bl.jpg', { 'happiness': 0x64 }))['toMatchSnapshot']();
        });
    });
    const _0x2ff493 = {
            'defaultLocale': 'en-US',
            'file': {
                'url': '//images.contentful.com/ubriaw6jfhm1/10TkaLheGeQG6qQGqWYqUI/5421d3108cbb699561acabd594fa2cb0/ryugj83mqwa1asojwtwb.jpg',
                'fileName': 'ryugj83mqwa1asojwtwb.jpg',
                'contentType': 'image/jpeg',
                'details': {
                    'size': 0x6f13,
                    'image': {
                        'width': '4500',
                        'height': '6000'
                    }
                }
            }
        }, _0xfd01f1 = {
            'defaultLocale': 'en-US',
            'file': null
        };
    _0x379294['fXBmV'](describe, 'generateImageSource', () => {
        const _0x275312 = {
            'bUJdm': function (_0x4b72a5, _0x542122, _0x31d234, _0x1bd3aa, _0xcb00db, _0x3ba5b5, _0x4971cf) {
                return _0x379294['zMXgB'](_0x4b72a5, _0x542122, _0x31d234, _0x1bd3aa, _0xcb00db, _0x3ba5b5, _0x4971cf);
            },
            'CHxkY': function (_0x326814, _0x527d8b) {
                return _0x379294['vcbZC'](_0x326814, _0x527d8b);
            },
            'EAPoI': function (_0xb383fe, _0x1adc39) {
                return _0x379294['uvJfj'](_0xb383fe, _0x1adc39);
            },
            'zcrsA': function (_0x5097af, _0x5a645c) {
                return _0x379294['uvJfj'](_0x5097af, _0x5a645c);
            },
            'baUdJ': function (_0x3b9e36, _0x359c36) {
                return _0x379294['uvJfj'](_0x3b9e36, _0x359c36);
            },
            'AYhQe': function (_0x483a2b, _0x498218, _0x3378ab, _0x1aa81e, _0xadcdf7, _0x27a2ca, _0x140275) {
                return _0x379294['zMXgB'](_0x483a2b, _0x498218, _0x3378ab, _0x1aa81e, _0xadcdf7, _0x27a2ca, _0x140275);
            },
            'fnZUv': function (_0x1ca9bc, _0x1957a7) {
                return _0x379294['LPWcY'](_0x1ca9bc, _0x1957a7);
            },
            'PwgKZ': function (_0x57da2b, _0x3b60ff) {
                return _0x379294['kjMys'](_0x57da2b, _0x3b60ff);
            }
        };
        _0x379294['xxmKK'](it, 'default', () => {
            const _0x274dec = _0x379294['zMXgB'](generateImageSource, 'test.png', 0x1a4, 0xd2, 'webp', null, {});
            _0x379294['YbTSc'](expect, _0x274dec['src'])['toContain']('w=420'), _0x379294['QRrsb'](expect, _0x274dec['src'])['toContain']('h=210'), _0x379294['vcbZC'](expect, _0x274dec['src'])['toContain']('fm=webp'), _0x379294['vcbZC'](expect, _0x274dec)['toMatchSnapshot']();
        }), _0x379294['MNoCx'](it, 'supports\x20corner\x20radius', async () => {
            const _0x47ed57 = _0x275312['bUJdm'](generateImageSource, 'test.png', 0x1a4, 0xd2, 'webp', null, { 'cornerRadius': 0xa });
            _0x275312['CHxkY'](expect, _0x47ed57['src'])['toContain']('r=10'), _0x275312['EAPoI'](expect, _0x47ed57)['toMatchSnapshot']();
        }), _0x379294['MNoCx'](it, 'transforms\x20corner\x20radius\x20-1\x20to\x20max', async () => {
            const _0x4d1484 = _0x275312['bUJdm'](generateImageSource, 'test.png', 0x1a4, 0xd2, 'webp', null, { 'cornerRadius': -0x1 });
            _0x275312['zcrsA'](expect, _0x4d1484['src'])['toContain']('r=max'), _0x275312['baUdJ'](expect, _0x4d1484)['toMatchSnapshot']();
        }), _0x379294['MNoCx'](it, 'does\x20not\x20include\x20corner\x20by\x20default', async () => {
            const _0x50acc6 = _0x275312['AYhQe'](generateImageSource, 'test.png', 0x1a4, 0xd2, 'webp', null, {});
            _0x275312['fnZUv'](expect, _0x50acc6['src'])['not']['toContain']('r='), _0x275312['PwgKZ'](expect, _0x50acc6)['toMatchSnapshot']();
        });
    }), _0x379294['fXBmV'](describe, 'getBase64Image', () => {
        const _0x491848 = {
                'LgAkc': function (_0x5e6ec8, _0x261b31) {
                    return _0x379294['kjMys'](_0x5e6ec8, _0x261b31);
                },
                'jlgGf': function (_0x599c58, _0x27111e) {
                    return _0x379294['wCrHI'](_0x599c58, _0x27111e);
                }
            }, _0x408b9a = {
                'aspectRatio': 4.8698224852071,
                'baseUrl': '//images.ctfassets.net/k8iqpp6u0ior/3ljGfnpegOnBTFGhV07iC1/94257340bda15ad4ca8462da3a8afa07/347966-contentful-logo-wordmark-dark__1_-4cd185-original-1582664935__1_.png',
                'width': 0xc8,
                'height': 0x29,
                'image': {
                    'contentful_id': '3ljGfnpegOnBTFGhV07iC1',
                    'spaceId': 'k8iqpp6u0ior',
                    'createdAt': '2021-03-22T10:10:34.647Z',
                    'updatedAt': '2021-03-22T10:10:34.647Z',
                    'file': { 'contentType': 'image/png' },
                    'title': 'Contentful\x20Logo\x20PNG',
                    'description': '',
                    'node_locale': 'en-US'
                },
                'options': {
                    'width': 0xc8,
                    'quality': 0x32,
                    'toFormat': '',
                    'cropFocus': null,
                    'cornerRadius': 0x0,
                    'background': null
                }
            };
        _0x379294['INdKs'](test, 'keeps\x20image\x20format', async () => {
            const _0x1e59d1 = await _0x491848['LgAkc'](getBase64Image, _0x408b9a);
            _0x491848['LgAkc'](expect, _0x1e59d1)['toMatch']('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAMAAAC5ge+kAAAAllBMVEUAAABHl745rOE7tOc7tOcqMDkqMDkqMDkqMDnfzG9Pm7o7tOc7tOcqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDn4wF/eXWDtXGjtXGgqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDnbVmDpWGbtXGjtXGh1tTylAAAAMnRSTlMATd3gVSUjTCDgHRIscF+MeqB8qpqbk4ienYAxr+AeEipyZI9/aW+No4WJeWuuTdzgVnu3oiUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQflCAUMNjFcK/NJAAAAMklEQVQI12NkBII/DCDA+htIsDEy/mBj4WDEBCwiyLwnIpyMjL/ZWASB7PMMMPAZTAIALlUHKTqI1/MAAAAASUVORK5CYII=');
        }), _0x379294['INdKs'](test, 'uses\x20given\x20image\x20format', async () => {
            const _0x28a0f8 = await _0x491848['jlgGf'](getBase64Image, {
                ..._0x408b9a,
                'options': {
                    ..._0x408b9a['options'],
                    'toFormat': 'jpg'
                }
            });
            _0x491848['jlgGf'](expect, _0x28a0f8)['toMatch']('data:image/jpg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAEABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBv/EACQQAAIBAgQHAQAAAAAAAAAAAAECAAMRBBITJAUUFSFBUWHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIx/9oADAMBAAIRAxEAPwDV4NObWqM70dOoVvROUt9Psy7pYud5jO/jWiJM8lsDSFB+Do+Xe4xQosAtW35ERFC//9k=');
        });
    }), _0x379294['VxuuV'](describe, 'resolveFixed', () => {
        const _0x3799c2 = {
            'AmHtC': function (_0x340e0e, _0x553bba, _0x4b6a41) {
                return _0x379294['MrsVR'](_0x340e0e, _0x553bba, _0x4b6a41);
            },
            'ZSqVU': function (_0x4f0b97, _0x5a22ae) {
                return _0x379294['nUJtZ'](_0x4f0b97, _0x5a22ae);
            },
            'HUCpt': function (_0x5aa4b4, _0x55bb4b) {
                return _0x379294['nUJtZ'](_0x5aa4b4, _0x55bb4b);
            },
            'Ryoti': function (_0x2cf5f9, _0x6042bd, _0x36684f) {
                return _0x379294['MrsVR'](_0x2cf5f9, _0x6042bd, _0x36684f);
            },
            'bBifh': function (_0x4c36f4, _0x3348cb) {
                return _0x379294['nUJtZ'](_0x4c36f4, _0x3348cb);
            }
        };
        _0x379294['qSFca'](it, 'generates\x20responsive\x20resolution\x20data\x20for\x20images\x20using\x20width\x20option', async () => {
            const _0x4fc829 = await _0x3799c2['AmHtC'](resolveFixed, _0x2ff493, { 'width': 0x190 });
            _0x3799c2['ZSqVU'](expect, _0x4fc829['srcSet']['length'])['toBeGreaterThan'](0x1), _0x3799c2['HUCpt'](expect, _0x4fc829)['toMatchSnapshot']();
        }), _0x379294['hpMqE'](it, 'generates\x20responsive\x20resolution\x20data\x20for\x20images\x20using\x20height\x20option', async () => {
            const _0x1b9730 = await _0x379294['ZrstD'](resolveFixed, _0x2ff493, { 'height': 0x190 });
            _0x379294['wCrHI'](expect, _0x1b9730['srcSet']['length'])['toBeGreaterThan'](0x1), _0x379294['wCrHI'](expect, _0x1b9730)['toMatchSnapshot']();
        }), _0x379294['hpMqE'](it, 'generates\x20responsive\x20resolution\x20data\x20for\x20images\x20using\x20all\x20options', async () => {
            const _0x38c4b1 = await _0x379294['ZrstD'](resolveFixed, _0x2ff493, {
                'width': 0x1c2,
                'height': 0x18f,
                'quality': 0x32,
                'background': 'rgb:000000'
            });
            _0x379294['bSpHx'](expect, _0x38c4b1['srcSet']['length'])['toBeGreaterThan'](0x1), _0x379294['bSpHx'](expect, _0x38c4b1)['toMatchSnapshot']();
        }), _0x379294['VfpmJ'](it, 'resorts\x20to\x20a\x20default\x20width\x20if\x20no\x20arguments\x20are\x20given', async () => {
            const _0x4197b4 = await _0x3799c2['Ryoti'](resolveFixed, _0x2ff493, {});
            _0x3799c2['HUCpt'](expect, _0x4197b4['width'])['toBe'](0x190), _0x3799c2['bBifh'](expect, _0x4197b4['height'])['toBe'](0x215);
        }), _0x379294['eHUUm'](it, 'resolves\x20the\x20height\x20if\x20only\x20a\x20width\x20is\x20given', async () => {
            const _0x467235 = await _0x379294['ZrstD'](resolveFixed, _0x2ff493, { 'width': 0x1c2 });
            _0x379294['iupyK'](expect, _0x467235['width'])['toBe'](0x1c2), _0x379294['AyRdM'](expect, _0x467235['height'])['toBe'](0x258);
        }), _0x379294['ShQQB'](it, 'resolves\x20the\x20width\x20if\x20only\x20a\x20height\x20is\x20given', async () => {
            const _0x4085e1 = await _0x379294['ihaRn'](resolveFixed, _0x2ff493, { 'height': 0x258 });
            _0x379294['sqnTP'](expect, _0x4085e1['width'])['toBe'](0x1c2), _0x379294['QAzBa'](expect, _0x4085e1['height'])['toBe'](0x258);
        }), _0x379294['HlIGf'](it, 'returns\x20the\x20correct\x20width\x20and\x20height\x20when\x20both\x20are\x20supplied', async () => {
            const _0x35ac01 = await _0x379294['ihaRn'](resolveFixed, _0x2ff493, {
                'width': 0x1c2,
                'height': 0x18f
            });
            _0x379294['ZQLTb'](expect, _0x35ac01['width'])['toBe'](0x1c2), _0x379294['ZQLTb'](expect, _0x35ac01['height'])['toBe'](0x18f);
        }), _0x379294['ikINC'](it, 'always\x20outputs\x20ints', async () => {
            const _0x162f72 = await _0x379294['DwZUQ'](resolveFixed, _0x2ff493, {
                'width': 450.1,
                'height': 399.1
            });
            _0x379294['ZQLTb'](expect, _0x162f72['width'])['toBe'](0x1c2), _0x379294['ZQLTb'](expect, _0x162f72['height'])['toBe'](0x18f);
        }), _0x379294['ikINC'](it, 'handles\x20null', async () => {
            const _0x5e2dcf = await _0x379294['sytKC'](resolveFixed, _0xfd01f1, { 'width': 0x190 });
            _0x379294['PQXco'](expect, _0x5e2dcf)['toBe'](null);
        }), _0x379294['KmdqB'](it, 'filters\x20out\x20sizes\x20larger\x20than\x20the\x20image\x27s\x20width', async () => {
            const _0x344030 = await _0x379294['BMFIe'](resolveFixed, _0x2ff493, { 'width': 0x8ca });
            _0x379294['BMXlj'](expect, _0x344030['srcSet']['split'](',')['length'])['toBe'](0x1), _0x379294['BMXlj'](expect, _0x344030)['toMatchSnapshot']();
        }), _0x379294['vAAbI'](it, 'supports\x20corner\x20radius', async () => {
            const _0x2db8c7 = await _0x3799c2['Ryoti'](resolveFixed, _0x2ff493, { 'cornerRadius': 0xa });
            _0x3799c2['bBifh'](expect, _0x2db8c7['srcSet'])['toContain']('r=10'), _0x3799c2['bBifh'](expect, _0x2db8c7)['toMatchSnapshot']();
        }), _0x379294['ChciY'](it, 'transforms\x20corner\x20radius\x20-1\x20to\x20max', async () => {
            const _0x306350 = await _0x379294['dOxqR'](resolveFixed, _0x2ff493, { 'cornerRadius': -0x1 });
            _0x379294['BMXlj'](expect, _0x306350['srcSet'])['toContain']('r=max'), _0x379294['BMXlj'](expect, _0x306350)['toMatchSnapshot']();
        }), _0x379294['ChciY'](it, 'does\x20not\x20include\x20corner\x20by\x20default', async () => {
            const _0x46508f = await _0x379294['dOxqR'](resolveFixed, _0x2ff493, {});
            _0x379294['ysLjN'](expect, _0x46508f['srcSet'])['not']['toContain']('r='), _0x379294['nUJtZ'](expect, _0x46508f)['toMatchSnapshot']();
        });
    }), _0x379294['TWRGB'](describe, 'resolveFluid', () => {
        const _0x1abe73 = {
            'rHCDo': function (_0x1b6741, _0x15503f, _0x489022) {
                return _0x379294['tZIAD'](_0x1b6741, _0x15503f, _0x489022);
            },
            'GzqOy': function (_0x42ed65, _0x538da9) {
                return _0x379294['VXCeE'](_0x42ed65, _0x538da9);
            },
            'rPcvJ': function (_0x46d162, _0x5abd13) {
                return _0x379294['VXCeE'](_0x46d162, _0x5abd13);
            },
            'hWLQw': function (_0x3a8bc9, _0x20ae71, _0x2dee5e) {
                return _0x379294['uEwHS'](_0x3a8bc9, _0x20ae71, _0x2dee5e);
            },
            'wHgMd': function (_0x11aa8a, _0x399e59) {
                return _0x379294['QnCaK'](_0x11aa8a, _0x399e59);
            },
            'sivur': function (_0x547c68, _0x12ab67) {
                return _0x379294['QnCaK'](_0x547c68, _0x12ab67);
            },
            'sckVg': function (_0x5713f6, _0x314989, _0x9633dd) {
                return _0x379294['lTtCR'](_0x5713f6, _0x314989, _0x9633dd);
            },
            'sVCEo': function (_0x43ca24, _0x5e68ac) {
                return _0x379294['QnCaK'](_0x43ca24, _0x5e68ac);
            },
            'nVRQu': function (_0x1dee99, _0x5cca8f, _0xff810b) {
                return _0x379294['yKeoF'](_0x1dee99, _0x5cca8f, _0xff810b);
            },
            'hJfmH': function (_0x41c93c, _0x122eb9) {
                return _0x379294['QnCaK'](_0x41c93c, _0x122eb9);
            }
        };
        _0x379294['yKeoF'](it, 'generates\x20responsive\x20size\x20data\x20for\x20images\x20using\x20a\x20default\x20maxWidth', async () => {
            const _0x14bd92 = await _0x1abe73['rHCDo'](resolveFluid, _0x2ff493, {});
            _0x1abe73['GzqOy'](expect, _0x14bd92['srcSet']['length'])['toBeGreaterThan'](0x1), _0x1abe73['GzqOy'](expect, _0x14bd92)['toMatchSnapshot']();
        }), _0x379294['clqxl'](it, 'generates\x20responsive\x20size\x20data\x20for\x20images\x20given\x20a\x20maxWidth', async () => {
            const _0x1e96a9 = await _0x1abe73['rHCDo'](resolveFluid, _0x2ff493, { 'maxWidth': 0x190 });
            _0x1abe73['rPcvJ'](expect, _0x1e96a9['srcSet']['length'])['toBeGreaterThan'](0x1), _0x1abe73['rPcvJ'](expect, _0x1e96a9)['toMatchSnapshot']();
        }), _0x379294['clqxl'](it, 'generates\x20responsive\x20size\x20data\x20for\x20images\x20given\x20a\x20maxHeight', async () => {
            const _0x4bd01a = await _0x379294['ChciY'](resolveFluid, _0x2ff493, { 'maxHeight': 0x190 });
            _0x379294['qKzIS'](expect, _0x4bd01a['srcSet']['length'])['toBeGreaterThan'](0x1), _0x379294['qKzIS'](expect, _0x4bd01a)['toMatchSnapshot']();
        }), _0x379294['clqxl'](it, 'generates\x20fluid\x20sizes\x20data\x20for\x20images\x20using\x20all\x20options', async () => {
            const _0x2d3982 = await _0x1abe73['hWLQw'](resolveFluid, _0x2ff493, {
                'maxWidth': 0x1c2,
                'maxHeight': 0x18f,
                'quality': 0x32,
                'background': 'rgb:000000'
            });
            _0x1abe73['wHgMd'](expect, _0x2d3982['srcSet']['length'])['toBeGreaterThan'](0x1), _0x1abe73['sivur'](expect, _0x2d3982)['toMatchSnapshot']();
        }), _0x379294['cXMqy'](it, 'handles\x20null', async () => {
            const _0x559ba7 = await _0x1abe73['sckVg'](resolveFluid, _0xfd01f1, { 'maxWidth': 0x190 });
            _0x1abe73['sVCEo'](expect, _0x559ba7)['toBe'](null);
        }), _0x379294['cXMqy'](it, 'filters\x20out\x20sizes\x20larger\x20than\x20the\x20image\x27s\x20width', async () => {
            const _0xa64217 = await _0x379294['ChciY'](resolveFluid, _0x2ff493, { 'maxWidth': 0x8ca });
            _0x379294['qKzIS'](expect, _0xa64217['srcSet']['split'](',')['length'])['toBe'](0x3), _0x379294['qKzIS'](expect, _0xa64217)['toMatchSnapshot']();
        }), _0x379294['cXMqy'](it, 'supports\x20corner\x20radius', async () => {
            const _0x3f817a = await _0x1abe73['nVRQu'](resolveFluid, _0x2ff493, { 'cornerRadius': 0xa });
            _0x1abe73['sVCEo'](expect, _0x3f817a['srcSet'])['toContain']('r=10'), _0x1abe73['hJfmH'](expect, _0x3f817a)['toMatchSnapshot']();
        }), _0x379294['cXMqy'](it, 'transforms\x20corner\x20radius\x20-1\x20to\x20max', async () => {
            const _0x5b9627 = await _0x379294['aNrZh'](resolveFluid, _0x2ff493, { 'cornerRadius': -0x1 });
            _0x379294['QIziE'](expect, _0x5b9627['srcSet'])['toContain']('r=max'), _0x379294['mHuwj'](expect, _0x5b9627)['toMatchSnapshot']();
        }), _0x379294['cXMqy'](it, 'does\x20not\x20include\x20corner\x20by\x20default', async () => {
            const _0x192967 = await _0x379294['aNrZh'](resolveFluid, _0x2ff493, {});
            _0x379294['mHuwj'](expect, _0x192967['srcSet'])['not']['toContain']('r='), _0x379294['mHuwj'](expect, _0x192967)['toMatchSnapshot']();
        });
    }), _0x379294['TWRGB'](describe, 'resolveResize', () => {
        const _0x229f1a = {
            'WNXUY': function (_0x1811c7, _0x3261b2, _0x528529) {
                return _0x379294['ZzoBx'](_0x1811c7, _0x3261b2, _0x528529);
            },
            'XzKMU': function (_0x464f05, _0x4ff683) {
                return _0x379294['KrPWe'](_0x464f05, _0x4ff683);
            },
            'EZYeN': function (_0x87dbfc, _0x34a8e1, _0x290b47) {
                return _0x379294['ZzoBx'](_0x87dbfc, _0x34a8e1, _0x290b47);
            },
            'VcTus': function (_0x13c342, _0x4ab898) {
                return _0x379294['OQuIM'](_0x13c342, _0x4ab898);
            },
            'KeZXI': function (_0x5785c1, _0x5d9d60, _0x1c6acb) {
                return _0x379294['ZzoBx'](_0x5785c1, _0x5d9d60, _0x1c6acb);
            },
            'tIzHU': function (_0xb712b9, _0x3290cc) {
                return _0x379294['OQuIM'](_0xb712b9, _0x3290cc);
            },
            'tvMAH': function (_0x47a5dc, _0x30525b) {
                return _0x379294['YqSPP'](_0x47a5dc, _0x30525b);
            },
            'XsLji': function (_0x3c9cfe, _0x60363f, _0x2c241a) {
                return _0x379294['ZzoBx'](_0x3c9cfe, _0x60363f, _0x2c241a);
            },
            'coRJz': function (_0x8d71cd, _0x58ba0b) {
                return _0x379294['hSsYA'](_0x8d71cd, _0x58ba0b);
            },
            'BkBKg': function (_0x44014c, _0x40099e) {
                return _0x379294['zdJVP'](_0x44014c, _0x40099e);
            }
        };
        _0x379294['sHily'](it, 'generates\x20resized\x20images\x20using\x20a\x20default\x20width', async () => {
            const _0x3025f1 = await _0x229f1a['WNXUY'](resolveResize, _0x2ff493, {});
            _0x229f1a['XzKMU'](expect, _0x3025f1)['toMatchSnapshot']();
        }), _0x379294['SnIkn'](it, 'generates\x20resized\x20images\x20given\x20a\x20certain\x20width', async () => {
            const _0x59408e = await _0x229f1a['WNXUY'](resolveResize, _0x2ff493, { 'width': 0x190 });
            _0x229f1a['XzKMU'](expect, _0x59408e)['toMatchSnapshot']();
        }), _0x379294['bkQum'](it, 'generates\x20resized\x20images\x20given\x20a\x20certain\x20height', async () => {
            const _0x520d97 = await _0x379294['jwffR'](resolveResize, _0x2ff493, { 'height': 0x258 });
            _0x379294['JZSKw'](expect, _0x520d97)['toMatchSnapshot']();
        }), _0x379294['bkQum'](it, 'generates\x20resized\x20images\x20using\x20all\x20options', async () => {
            const _0x3d2266 = await _0x379294['jwffR'](resolveResize, _0x2ff493, {
                'width': 0x1c2,
                'height': 0x18f,
                'quality': 0x32,
                'background': 'rgb:000000'
            });
            _0x379294['JZSKw'](expect, _0x3d2266)['toMatchSnapshot']();
        }), _0x379294['VpJyP'](it, 'handles\x20null', async () => {
            const _0xb07c96 = await _0x229f1a['EZYeN'](resolveResize, _0xfd01f1, { 'width': 0x190 });
            _0x229f1a['VcTus'](expect, _0xb07c96)['toBe'](null);
        }), _0x379294['VpJyP'](it, 'supports\x20corner\x20radius', async () => {
            const _0x3f1076 = await _0x379294['jwffR'](resolveResize, _0x2ff493, { 'cornerRadius': 0xa });
            _0x379294['nRzzK'](expect, _0x3f1076['src'])['toContain']('r=10'), _0x379294['nRzzK'](expect, _0x3f1076)['toMatchSnapshot']();
        }), _0x379294['VpJyP'](it, 'transforms\x20corner\x20radius\x20-1\x20to\x20max', async () => {
            const _0x496b87 = await _0x229f1a['KeZXI'](resolveResize, _0x2ff493, { 'cornerRadius': -0x1 });
            _0x229f1a['tIzHU'](expect, _0x496b87['src'])['toContain']('r=max'), _0x229f1a['tvMAH'](expect, _0x496b87)['toMatchSnapshot']();
        }), _0x379294['VpJyP'](it, 'does\x20not\x20include\x20corner\x20by\x20default', async () => {
            const _0x3fe7b5 = await _0x229f1a['XsLji'](resolveResize, _0x2ff493, {});
            _0x229f1a['coRJz'](expect, _0x3fe7b5['src'])['not']['toContain']('r='), _0x229f1a['BkBKg'](expect, _0x3fe7b5)['toMatchSnapshot']();
        });
    });
});
