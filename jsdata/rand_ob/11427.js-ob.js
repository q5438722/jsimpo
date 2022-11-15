'use strict';
const _0x2daf = [
    './model-schema',
    './data-transform',
    './component',
    'SINGLE_TYPE',
    'oneWay',
    'manyWay',
    'COLLECTION_TYPE',
    'oneToOne',
    'manyToOne',
    'manyToMany',
    'uid',
    'component',
    'dynamiczone',
    'contentType.kind',
    'get',
    'WLqfc',
    'shape',
    'string',
    'test',
    'ShDFs',
    'min',
    'required',
    'object',
    'noUnknown',
    'jYrae',
    'validate',
    'catch',
    'reject',
    'contentType',
    'has',
    'bazLG',
    'EQyAj',
    'components',
    'forEach',
    'GyVik',
    'ejKiO',
    'plugins',
    'content-type-builder',
    'services',
    'join',
    'includes',
    'rZfNr',
    'hasPluralName',
    'Content\x20Type\x20name\x20`${value}`\x20cannot\x20be\x20pluralized.\x20\x0aSuggestion:\x20add\x20Item\x20after\x20the\x20name\x20(e.g\x20News\x20->\x20NewsItem).',
    'singular',
    'nameAlreadyUsed',
    'Content\x20Type\x20name\x20`${value}`\x20is\x20already\x20being\x20used.',
    'values',
    'contentTypes',
    'modelName',
    'dBPiV',
    'wgYvH',
    'oneOf',
    'exports',
    '1520788cGiebz',
    '1617456kcWdBI',
    '1HVAABA',
    '239079Beinlk',
    '1757226sRBSWk',
    '737256DPUPHI',
    '1610845RTKBze',
    '1426302DDUGKr',
    '1bXfEEJ',
    'yup',
    'strapi-utils',
    'pluralize',
    '../../services/constants'
];
const _0x2c5dd1 = _0x2f5a;
(function (_0x49d2ca, _0x100031) {
    const _0x20ead5 = _0x2f5a;
    while (!![]) {
        try {
            const _0x15b389 = parseInt(_0x20ead5(0xf1)) + parseInt(_0x20ead5(0xf2)) + parseInt(_0x20ead5(0xf3)) * -parseInt(_0x20ead5(0xf4)) + parseInt(_0x20ead5(0xf5)) + -parseInt(_0x20ead5(0xf6)) + -parseInt(_0x20ead5(0xf7)) + -parseInt(_0x20ead5(0xf8)) * parseInt(_0x20ead5(0xf9));
            if (_0x15b389 === _0x100031)
                break;
            else
                _0x49d2ca['push'](_0x49d2ca['shift']());
        } catch (_0x5e52b7) {
            _0x49d2ca['push'](_0x49d2ca['shift']());
        }
    }
}(_0x2daf, 0x6 * -0x2119 + 0xbef71 + 0x24c69));
function _0x2f5a(_0x44b775, _0x1f81a4) {
    return _0x2f5a = function (_0x7ca28, _0x2b3d1c) {
        _0x7ca28 = _0x7ca28 - (-0xc5a + 0x1d0 + 0xb7b);
        let _0x47b573 = _0x2daf[_0x7ca28];
        return _0x47b573;
    }, _0x2f5a(_0x44b775, _0x1f81a4);
}
const _ = require('lodash'), yup = require(_0x2c5dd1(0xfa)), {formatYupErrors, nameToSlug} = require(_0x2c5dd1(0xfb)), pluralize = require(_0x2c5dd1(0xfc)), {modelTypes, DEFAULT_TYPES, typeKinds} = require(_0x2c5dd1(0xfd)), createSchema = require(_0x2c5dd1(0xfe)), {removeEmptyDefaults, removeDeletedUIDTargetFields} = require(_0x2c5dd1(0xff)), {nestedComponentSchema} = require(_0x2c5dd1(0x100)), VALID_RELATIONS = {
        [typeKinds[_0x2c5dd1(0x101)]]: [
            _0x2c5dd1(0x102),
            _0x2c5dd1(0x103)
        ],
        [typeKinds[_0x2c5dd1(0x104)]]: [
            'oneWay',
            _0x2c5dd1(0x103),
            _0x2c5dd1(0x105),
            'oneToMany',
            _0x2c5dd1(0x106),
            _0x2c5dd1(0x107)
        ]
    }, VALID_TYPES = [
        ...DEFAULT_TYPES,
        _0x2c5dd1(0x108),
        _0x2c5dd1(0x109),
        _0x2c5dd1(0x10a)
    ], createContentTypeSchema = (_0x5b5a1b, {
        isEdition: isEdition = ![]
    } = {}) => {
        const _0x330392 = _0x2c5dd1, _0x86b4d8 = {
                'WLqfc': _0x330392(0x10b),
                'ShDFs': function (_0x58c2dd, _0x4082db) {
                    return _0x58c2dd(_0x4082db);
                },
                'wcZin': function (_0x505cd4) {
                    return _0x505cd4();
                }
            }, _0x3f176c = _[_0x330392(0x10c)](_0x5b5a1b, _0x86b4d8[_0x330392(0x10d)], typeKinds[_0x330392(0x104)]), _0x100374 = createSchema(VALID_TYPES, VALID_RELATIONS[_0x3f176c] || [], { 'modelType': modelTypes['CONTENT_TYPE'] })[_0x330392(0x10e)]({ 'name': yup[_0x330392(0x10f)]()[_0x330392(0x110)](hasPluralName)[_0x330392(0x110)](_0x86b4d8[_0x330392(0x111)](alreadyUsedContentTypeName, isEdition))[_0x330392(0x110)](_0x86b4d8['wcZin'](forbiddenContentTypeNameValidator))[_0x330392(0x112)](0x1 * 0x7d0 + -0xe0e * -0x1 + -0x15dd)[_0x330392(0x113)]() });
        return yup[_0x330392(0x114)]({
            'contentType': _0x100374[_0x330392(0x113)]()[_0x330392(0x115)](),
            'components': nestedComponentSchema
        })[_0x330392(0x115)]();
    }, validateContentTypeInput = _0xa86c95 => {
        const _0x50f2b1 = _0x2c5dd1, _0x499a7c = {
                'jYrae': function (_0x18f8a6, _0x46d8d1) {
                    return _0x18f8a6(_0x46d8d1);
                }
            };
        return _0x499a7c[_0x50f2b1(0x116)](createContentTypeSchema, _0xa86c95)[_0x50f2b1(0x117)](_0xa86c95, {
            'strict': !![],
            'abortEarly': ![]
        })[_0x50f2b1(0x118)](_0x5c4a3a => Promise[_0x50f2b1(0x119)](formatYupErrors(_0x5c4a3a)));
    }, validateUpdateContentTypeInput = _0x71645f => {
        const _0x32b3ac = _0x2c5dd1, _0x54be6a = {
                'QzDrZ': 'uid',
                'GyVik': function (_0x272c4c, _0x3f43f6) {
                    return _0x272c4c(_0x3f43f6);
                },
                'bazLG': _0x32b3ac(0x11a),
                'EQyAj': function (_0x2a9225, _0x279df9) {
                    return _0x2a9225(_0x279df9);
                },
                'ejKiO': function (_0x234a9c, _0x4db890, _0x241c67) {
                    return _0x234a9c(_0x4db890, _0x241c67);
                }
            };
        return _[_0x32b3ac(0x11b)](_0x71645f, _0x54be6a[_0x32b3ac(0x11c)]) && _0x54be6a[_0x32b3ac(0x11d)](removeEmptyDefaults, _0x71645f[_0x32b3ac(0x11a)]), _[_0x32b3ac(0x11b)](_0x71645f, _0x32b3ac(0x11e)) && Array['isArray'](_0x71645f[_0x32b3ac(0x11e)]) && _0x71645f[_0x32b3ac(0x11e)][_0x32b3ac(0x11f)](_0x431e9b => {
            const _0xc47502 = _0x32b3ac;
            _[_0xc47502(0x11b)](_0x431e9b, _0x54be6a['QzDrZ']) && _0x54be6a[_0xc47502(0x120)](removeEmptyDefaults, _0x431e9b);
        }), removeDeletedUIDTargetFields(_0x71645f['contentType']), _0x54be6a[_0x32b3ac(0x121)](createContentTypeSchema, _0x71645f, { 'isEdition': !![] })[_0x32b3ac(0x117)](_0x71645f, {
            'strict': !![],
            'abortEarly': ![]
        })[_0x32b3ac(0x118)](_0x1d7bcb => Promise[_0x32b3ac(0x119)](formatYupErrors(_0x1d7bcb)));
    }, forbiddenContentTypeNameValidator = () => {
        const _0x1e4d9d = _0x2c5dd1, _0x2f5109 = {
                'rZfNr': function (_0x2db555, _0x283a51) {
                    return _0x2db555(_0x283a51);
                }
            }, _0x3e3603 = strapi[_0x1e4d9d(0x122)][_0x1e4d9d(0x123)][_0x1e4d9d(0x124)]['builder']['getReservedNames']()['models'];
        return {
            'name': 'forbiddenContentTypeName',
            'message': 'Content\x20Type\x20name\x20cannot\x20be\x20one\x20of\x20' + _0x3e3603[_0x1e4d9d(0x125)](',\x20'),
            'test': _0x1c59ba => {
                const _0x4dd6ed = _0x1e4d9d;
                if (_0x3e3603[_0x4dd6ed(0x126)](_0x2f5109[_0x4dd6ed(0x127)](nameToSlug, _0x1c59ba)))
                    return ![];
                return !![];
            }
        };
    }, hasPluralName = {
        'name': _0x2c5dd1(0x128),
        'message': _0x2c5dd1(0x129),
        'test': _0x44e6a7 => {
            const _0x3cc85e = _0x2c5dd1, _0x31ce42 = {
                    'mCTTd': function (_0x3713cb, _0x44ca1f) {
                        return _0x3713cb === _0x44ca1f;
                    }
                };
            if (_0x31ce42['mCTTd'](pluralize[_0x3cc85e(0x12a)](_0x44e6a7), pluralize(_0x44e6a7)))
                return ![];
            return !![];
        }
    }, alreadyUsedContentTypeName = _0x37a023 => {
        const _0x3caed9 = _0x2c5dd1, _0x30ab8e = {
                'wgYvH': function (_0x412399, _0x1882e6) {
                    return _0x412399(_0x1882e6);
                },
                'dBPiV': _0x3caed9(0x12b),
                'seCyJ': _0x3caed9(0x12c)
            }, _0xffeffb = Object[_0x3caed9(0x12d)](strapi[_0x3caed9(0x12e)])['map'](_0x4c93f8 => _0x4c93f8[_0x3caed9(0x12f)]);
        return {
            'name': _0x30ab8e[_0x3caed9(0x130)],
            'message': _0x30ab8e['seCyJ'],
            'test': _0x20e279 => {
                const _0x31ea0a = _0x3caed9;
                if (_0x37a023)
                    return !![];
                if (_0xffeffb[_0x31ea0a(0x126)](_0x30ab8e[_0x31ea0a(0x131)](nameToSlug, _0x20e279)))
                    return ![];
                return !![];
            }
        };
    }, validateKind = _0xa954bd => {
        const _0x23d92d = _0x2c5dd1;
        return yup[_0x23d92d(0x10f)]()[_0x23d92d(0x132)]([
            typeKinds[_0x23d92d(0x101)],
            typeKinds[_0x23d92d(0x104)]
        ])[_0x23d92d(0x117)](_0xa954bd)[_0x23d92d(0x118)](_0x5920ff => Promise[_0x23d92d(0x119)](formatYupErrors(_0x5920ff)));
    };
module[_0x2c5dd1(0x133)] = {
    'validateContentTypeInput': validateContentTypeInput,
    'validateUpdateContentTypeInput': validateUpdateContentTypeInput,
    'validateKind': validateKind
};
