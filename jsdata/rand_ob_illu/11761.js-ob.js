'use strict';

const _0x988e = ['SLtle', '796189KZcBpP', '1OOUvQQ', '994005ZvsHhI', '138464mfORmC', '7nItfNW', '15727zfvEGn', '15dvjWGp', '4216XpaxRM', '192iyMKXb', '151190cjgJnb', '10cDxvzt', '130477JbKkuC', 'path', '../../../../test/helpers/builder', '../../../../test/helpers/request', 'rec.jpg', 'IQxyl', 'POST', 'rmukp', 'vvoBj', 'single-media', 'media', 'with-nested', 'component', 'default.single-media', 'default.multiple-media', 'withdynamiczonemedia', 'default.with-nested', 'each', '/content-manager/collection-types/application::withdynamiczonemedia.withdynamiczonemedia', 'GENERATED API', '/withdynamiczonemedias', '[%s] => Not required dynamiczone', '2|4|1|3|0', 'GET', 'The medias are correctly related to the components on creation', 'The medias are correctly related to the components on edition', 'The medias are correctly related to the nested components on creation', 'Contains components with nested components having medias', 'CYGoD', 'split', 'setURLPrefix', 'singleMedia', 'multipleMedia', 'addComponent', 'withNested', 'addContentType', 'build', 'zqlXB', 'destroy', 'cleanup', 'MQiml', 'ZvbIf', 'TmEUI', 'tGQtO', 'jhNoG', 'toBe', 'body', 'JihXE', 'UYNmE', 'statusCode', 'GDNHl', 'isArray', 'field', 'toMatchObject', 'anything', 'arrayContaining', 'objectContaining', 'any', 'ZjLRM', 'fFceI', 'xazru', 'xAJjm', 'LEhBn', 'FvukK', 'gnhJC', 'wWIRK', 'SGJKL', 'OjOjh', 'PtlHv', 'BJKCq', 'VvljG', 'iimzs', 'jkzOa'];
const _0x3f803c = _0x213d;

(function (_0x4f6f8c, _0x22973a) {
    const _0x15ba44 = _0x213d;

    while (true) {
        try {
            const _0x228f53 = -parseInt(_0x15ba44(0x1d7)) * -parseInt(_0x15ba44(0x1d8)) + parseInt(_0x15ba44(0x1d9)) + -parseInt(_0x15ba44(0x1da)) * parseInt(_0x15ba44(0x1db)) + parseInt(_0x15ba44(0x1dc)) * parseInt(_0x15ba44(0x1dd)) + parseInt(_0x15ba44(0x1de)) * parseInt(_0x15ba44(0x1df)) + parseInt(_0x15ba44(0x1e0)) + -parseInt(_0x15ba44(0x1e1)) * parseInt(_0x15ba44(0x1e2));

            if (_0x228f53 === _0x22973a) break;else _0x4f6f8c.push(_0x4f6f8c.shift());
        } catch (_0x1cf890) {
            _0x4f6f8c.push(_0x4f6f8c.shift());
        }
    }
})(_0x988e, 712743);

const fs = require('fs');

const path = require(_0x3f803c(0x1e3));

var { createTestBuilder } = require(_0x3f803c(0x1e4));

var { createStrapiInstance } = require('../../../../test/helpers/strapi');

var { createAuthRequest } = require(_0x3f803c(0x1e5));

var strapi;
var rq;
var baseRq;

const uploadImg = () => {
    const _0x375482 = _0x3f803c;
    const _0x5a7ec4 = {
        'IQxyl': function (_0x1fd63a, _0xdfd673) {
            return _0x1fd63a(_0xdfd673);
        },
        'rmukp': '/upload',
        'vvoBj': _0x375482(0x1e6)
    };

    return _0x5a7ec4[_0x375482(0x1e7)](baseRq, {
        'method': _0x375482(0x1e8),
        'url': _0x5a7ec4[_0x375482(0x1e9)],
        'formData': { 'files': fs.createReadStream(path.join(__dirname, _0x5a7ec4[_0x375482(0x1ea)])) }
    });
};

const components = {
    'singleMedia': {
        'name': _0x3f803c(0x1eb),
        'attributes': { 'media': { 'type': _0x3f803c(0x1ec) } }
    },
    'multipleMedia': {
        'name': 'multiple-media',
        'attributes': {
            'media': {
                'type': _0x3f803c(0x1ec),
                'multiple': true
            }
        }
    },
    'withNested': {
        'name': _0x3f803c(0x1ed),
        'attributes': {
            'singleMedia': {
                'type': _0x3f803c(0x1ee),
                'component': _0x3f803c(0x1ef)
            },
            'multipleMedia': {
                'type': 'component',
                'component': _0x3f803c(0x1f0)
            }
        }
    }
};
const ct = {
    'name': _0x3f803c(0x1f1),
    'attributes': {
        'field': {
            'type': 'dynamiczone',
            'components': [_0x3f803c(0x1ef), _0x3f803c(0x1f0), _0x3f803c(0x1f2)]
        }
    }
};

function _0x213d(_0x4c42e9, _0x4b556a) {
    return _0x213d = function (_0x4f72e0, _0xb4b07d) {
        _0x4f72e0 = _0x4f72e0 - 471;
        const _0x37e3e5 = _0x988e[_0x4f72e0];

        return _0x37e3e5;
    }, _0x213d(_0x4c42e9, _0x4b556a);
}
describe[_0x3f803c(0x1f3)]([['CONTENT MANAGER', _0x3f803c(0x1f4)], [_0x3f803c(0x1f5), _0x3f803c(0x1f6)]])(_0x3f803c(0x1f7), (_0x3d967e, _0x516e65) => {
    const _0x6f8501 = _0x3f803c;
    const _0x494f87 = {
        'CYGoD': _0x6f8501(0x1f8),
        'jhNoG': function (_0x276012, _0x15d188) {
            return _0x276012(_0x15d188);
        },
        'zqlXB': function (_0x298ef3) {
            return _0x298ef3();
        },
        'tGQtO': function (_0x24de65) {
            return _0x24de65();
        },
        'JihXE': _0x6f8501(0x1f0),
        'UYNmE': function (_0x22cd9c, _0x19f20a) {
            return _0x22cd9c(_0x19f20a);
        },
        'GDNHl': function (_0x3cbb28, _0x13e159) {
            return _0x3cbb28(_0x13e159);
        },
        'fFceI': function (_0x4cacf0, _0x53e020) {
            return _0x4cacf0(_0x53e020);
        },
        'xazru': _0x6f8501(0x1e8),
        'wWIRK': _0x6f8501(0x1ef),
        'hMTfC': function (_0x2821d1, _0x51f56a) {
            return _0x2821d1(_0x51f56a);
        },
        'xAJjm': function (_0x449a3e, _0x440df6) {
            return _0x449a3e(_0x440df6);
        },
        'gnhJC': function (_0xdfa3b0, _0x160b79) {
            return _0xdfa3b0(_0x160b79);
        },
        'SGJKL': function (_0x209718, _0x48cd8e) {
            return _0x209718(_0x48cd8e);
        },
        'OjOjh': function (_0x4bd0f7, _0xde473c) {
            return _0x4bd0f7(_0xde473c);
        },
        'PtlHv': _0x6f8501(0x1f9),
        'ZvbIf': function (_0x210117, _0x129193, _0x5e6c02) {
            return _0x210117(_0x129193, _0x5e6c02);
        },
        'TmEUI': _0x6f8501(0x1fa),
        'ZjLRM': _0x6f8501(0x1fb),
        'LEhBn': function (_0x19764c, _0x1059d9, _0x8c7f53) {
            return _0x19764c(_0x1059d9, _0x8c7f53);
        },
        'FvukK': 'The media are populated on the components',
        'AEtdi': _0x6f8501(0x1f2),
        'iimzs': function (_0x2c6bf3, _0x4497fc, _0x18f052) {
            return _0x2c6bf3(_0x4497fc, _0x18f052);
        },
        'jkzOa': _0x6f8501(0x1fc),
        'oOkLF': function (_0x38b966) {
            return _0x38b966();
        },
        'MQiml': function (_0x468b45, _0x1cc1b9, _0xeddff1) {
            return _0x468b45(_0x1cc1b9, _0xeddff1);
        },
        'gTMGc': 'Contains components with medias',
        'BJKCq': function (_0x1c2681, _0x564a3e, _0x23dde3) {
            return _0x1c2681(_0x564a3e, _0x23dde3);
        },
        'VvljG': _0x6f8501(0x1fd)
    };

    const _0x5cd64e = _0x494f87.oOkLF(createTestBuilder);

    _0x494f87.OjOjh(beforeAll, async () => {
        const _0x44b943 = _0x6f8501;

        const _0x4292b4 = _0x494f87[_0x44b943(0x1fe)][_0x44b943(0x1ff)]('|');

        var _0x462f41 = 0;

        while (true) {
            switch (_0x4292b4[_0x462f41++]) {
                case '0':
                    rq[_0x44b943(0x200)](_0x516e65);
                    continue;
                case '1':
                    baseRq = await _0x494f87.jhNoG(createAuthRequest, { 'strapi': strapi });
                    continue;
                case '2':
                    await _0x5cd64e.addComponent(components[_0x44b943(0x201)]).addComponent(components[_0x44b943(0x202)])[_0x44b943(0x203)](components[_0x44b943(0x204)])[_0x44b943(0x205)](ct)[_0x44b943(0x206)]();
                    continue;
                case '3':
                    rq = await createAuthRequest({ 'strapi': strapi });
                    continue;
                case '4':
                    strapi = await _0x494f87[_0x44b943(0x207)](createStrapiInstance);
                    continue;
            }
            break;
        }
    }), afterAll(async () => {
        const _0x4f5cfa = _0x6f8501;

        await strapi[_0x4f5cfa(0x208)](), await _0x5cd64e[_0x4f5cfa(0x209)]();
    }), _0x494f87[_0x6f8501(0x20a)](describe, _0x494f87.gTMGc, () => {
        const _0x52a1b7 = _0x6f8501;

        _0x494f87[_0x52a1b7(0x20b)](test, _0x494f87[_0x52a1b7(0x20c)], async () => {
            const _0x5b0f63 = _0x52a1b7;

            const _0x82d558 = await _0x494f87[_0x5b0f63(0x20d)](uploadImg);

            _0x494f87[_0x5b0f63(0x20e)](expect, _0x82d558.statusCode)[_0x5b0f63(0x20f)](200);

            const _0x524bbe = _0x82d558[_0x5b0f63(0x210)][0].id;

            const _0x1b38cb = await rq({
                'method': _0x5b0f63(0x1e8),
                'url': '/',
                'body': {
                    'field': [{
                        '__component': 'default.single-media',
                        'media': _0x524bbe
                    }, {
                        '__component': _0x494f87[_0x5b0f63(0x211)],
                        'media': [_0x82d558[_0x5b0f63(0x210)][0].id, _0x82d558[_0x5b0f63(0x210)][0].id]
                    }]
                }
            });

            _0x494f87[_0x5b0f63(0x212)](expect, _0x1b38cb[_0x5b0f63(0x213)])[_0x5b0f63(0x20f)](200), _0x494f87[_0x5b0f63(0x214)](expect, Array[_0x5b0f63(0x215)](_0x1b38cb[_0x5b0f63(0x210)][_0x5b0f63(0x216)])).toBe(true), _0x494f87[_0x5b0f63(0x214)](expect, _0x1b38cb.body)[_0x5b0f63(0x217)]({
                'field': [{
                    'id': expect[_0x5b0f63(0x218)](),
                    '__component': _0x5b0f63(0x1ef),
                    'media': {
                        'id': _0x524bbe,
                        'url': expect.any(String)
                    }
                }, {
                    'id': expect[_0x5b0f63(0x218)](),
                    '__component': _0x494f87[_0x5b0f63(0x211)],
                    'media': expect[_0x5b0f63(0x219)]([expect[_0x5b0f63(0x21a)]({
                        'id': _0x524bbe,
                        'url': expect[_0x5b0f63(0x21b)](String)
                    })])
                }]
            });
        }), _0x494f87[_0x52a1b7(0x20b)](test, _0x494f87[_0x52a1b7(0x21c)], async () => {
            const _0x199690 = _0x52a1b7;

            const _0x13e1ae = await _0x494f87[_0x199690(0x20d)](uploadImg);

            _0x494f87[_0x199690(0x21d)](expect, _0x13e1ae[_0x199690(0x213)])[_0x199690(0x20f)](200);
            const _0x2ced49 = _0x13e1ae.body[0].id;

            const _0x3d566e = await _0x494f87[_0x199690(0x21d)](rq, {
                'method': _0x494f87[_0x199690(0x21e)],
                'url': '/',
                'body': {
                    'field': [{
                        '__component': _0x494f87.wWIRK,
                        'media': _0x2ced49
                    }, {
                        '__component': 'default.multiple-media',
                        'media': [_0x13e1ae.body[0].id, _0x13e1ae.body[0].id]
                    }]
                }
            });

            _0x494f87[_0x199690(0x21d)](expect, _0x3d566e[_0x199690(0x213)])[_0x199690(0x20f)](200), _0x494f87.fFceI(expect, Array[_0x199690(0x215)](_0x3d566e[_0x199690(0x210)][_0x199690(0x216)])).toBe(true);

            const _0x2b96aa = await _0x494f87[_0x199690(0x20d)](uploadImg);

            _0x494f87.hMTfC(expect, _0x2b96aa[_0x199690(0x213)])[_0x199690(0x20f)](200);

            const _0x2d0311 = _0x2b96aa[_0x199690(0x210)][0].id;

            const _0x3d950 = await _0x494f87[_0x199690(0x21f)](rq, {
                'method': 'PUT',
                'url': '/' + _0x3d566e[_0x199690(0x210)].id,
                'body': {
                    'field': [{
                        '__component': 'default.single-media',
                        'media': _0x2d0311
                    }, {
                        '__component': _0x494f87.JihXE,
                        'media': [_0x2b96aa[_0x199690(0x210)][0].id, _0x2b96aa[_0x199690(0x210)][0].id]
                    }]
                }
            });

            _0x494f87[_0x199690(0x21f)](expect, _0x3d950.body)[_0x199690(0x217)]({
                'field': [{
                    'id': expect[_0x199690(0x218)](),
                    '__component': 'default.single-media',
                    'media': {
                        'id': _0x2d0311,
                        'url': expect[_0x199690(0x21b)](String)
                    }
                }, {
                    'id': expect[_0x199690(0x218)](),
                    '__component': _0x494f87[_0x199690(0x211)],
                    'media': expect[_0x199690(0x219)]([expect[_0x199690(0x21a)]({
                        'id': _0x2d0311,
                        'url': expect.any(String)
                    })])
                }]
            });
        }), _0x494f87[_0x52a1b7(0x220)](test, _0x494f87[_0x52a1b7(0x221)], async () => {
            const _0x31582d = _0x52a1b7;

            const _0x2cf593 = await _0x494f87[_0x31582d(0x20d)](uploadImg);

            _0x494f87[_0x31582d(0x222)](expect, _0x2cf593[_0x31582d(0x213)])[_0x31582d(0x20f)](200);

            const _0x46cea4 = _0x2cf593[_0x31582d(0x210)][0].id;

            const _0x5b5003 = await rq({
                'method': _0x494f87[_0x31582d(0x21e)],
                'url': '/',
                'body': {
                    'field': [{
                        '__component': _0x494f87[_0x31582d(0x223)],
                        'media': _0x46cea4
                    }, {
                        '__component': _0x494f87.JihXE,
                        'media': [_0x2cf593[_0x31582d(0x210)][0].id, _0x2cf593[_0x31582d(0x210)][0].id]
                    }]
                }
            });

            _0x494f87[_0x31582d(0x224)](expect, _0x5b5003[_0x31582d(0x213)])[_0x31582d(0x20f)](200);

            const _0x275ff4 = await _0x494f87[_0x31582d(0x225)](rq, {
                'method': _0x494f87[_0x31582d(0x226)],
                'url': '/' + _0x5b5003[_0x31582d(0x210)].id
            });

            _0x494f87[_0x31582d(0x225)](expect, _0x275ff4[_0x31582d(0x210)])[_0x31582d(0x217)]({
                'field': [{
                    'id': expect[_0x31582d(0x218)](),
                    '__component': _0x494f87[_0x31582d(0x223)],
                    'media': {
                        'id': _0x46cea4,
                        'url': expect[_0x31582d(0x21b)](String)
                    }
                }, {
                    'id': expect[_0x31582d(0x218)](),
                    '__component': _0x494f87[_0x31582d(0x211)],
                    'media': expect[_0x31582d(0x219)]([expect[_0x31582d(0x21a)]({
                        'id': _0x46cea4,
                        'url': expect[_0x31582d(0x21b)](String)
                    })])
                }]
            });
        });
    }), _0x494f87[_0x6f8501(0x227)](describe, _0x494f87[_0x6f8501(0x228)], () => {
        const _0x33fe23 = _0x6f8501;
        const _0x2e638c = {
            'SLtle': function (_0x411a70, _0x2a6596) {
                const _0x5094b6 = _0x213d;

                return _0x494f87[_0x5094b6(0x225)](_0x411a70, _0x2a6596);
            },
            'RBpdw': _0x494f87[_0x33fe23(0x21e)],
            'LrOMJ': _0x494f87.AEtdi
        };

        _0x494f87[_0x33fe23(0x229)](test, _0x494f87[_0x33fe23(0x22a)], async () => {
            const _0x54f526 = _0x33fe23;

            const _0x19ab0d = await uploadImg();

            _0x2e638c[_0x54f526(0x22b)](expect, _0x19ab0d[_0x54f526(0x213)])[_0x54f526(0x20f)](200);

            const _0x126a58 = _0x19ab0d[_0x54f526(0x210)][0].id;

            const _0x2df79a = await _0x2e638c.SLtle(rq, {
                'method': _0x2e638c.RBpdw,
                'url': '/',
                'body': {
                    'field': [{
                        '__component': _0x2e638c.LrOMJ,
                        'singleMedia': { 'media': _0x126a58 },
                        'multipleMedia': {
                            'media': [_0x19ab0d[_0x54f526(0x210)][0].id, _0x19ab0d[_0x54f526(0x210)][0].id]
                        }
                    }]
                }
            });

            _0x2e638c[_0x54f526(0x22b)](expect, _0x2df79a[_0x54f526(0x213)])[_0x54f526(0x20f)](200), _0x2e638c[_0x54f526(0x22b)](expect, Array[_0x54f526(0x215)](_0x2df79a[_0x54f526(0x210)].field)).toBe(true), expect(_0x2df79a[_0x54f526(0x210)])[_0x54f526(0x217)]({
                'field': [{
                    'id': expect[_0x54f526(0x218)](),
                    '__component': _0x2e638c.LrOMJ,
                    'singleMedia': {
                        'media': {
                            'id': _0x126a58,
                            'url': expect.any(String)
                        }
                    },
                    'multipleMedia': {
                        'media': expect[_0x54f526(0x219)]([expect[_0x54f526(0x21a)]({
                            'id': _0x126a58,
                            'url': expect[_0x54f526(0x21b)](String)
                        })])
                    }
                }]
            });
        });
    });
});
