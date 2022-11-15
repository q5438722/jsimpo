function _0x2f5a(_0x44b775, _0x1f81a4) {
    return _0x2f5a = function (_0x7ca28, _0x2b3d1c) {
        _0x7ca28 = _0x7ca28 - (-3162 + 464 + 2939);
        let _0x47b573 = _0x2daf[_0x7ca28];
        return _0x47b573;
    }, _0x2f5a(_0x44b775, _0x1f81a4);
}
const _ = require('lodash'), yup = require(_0x2c5dd1(250)), {formatYupErrors, nameToSlug} = require(_0x2c5dd1(251)), pluralize = require(_0x2c5dd1(252)), {modelTypes, DEFAULT_TYPES, typeKinds} = require(_0x2c5dd1(253)), createSchema = require(_0x2c5dd1(254)), {removeEmptyDefaults, removeDeletedUIDTargetFields} = require(_0x2c5dd1(255)), {nestedComponentSchema} = require(_0x2c5dd1(256)), VALID_RELATIONS = {
        [typeKinds[_0x2c5dd1(257)]]: [
            _0x2c5dd1(258),
            _0x2c5dd1(259)
        ],
        [typeKinds[_0x2c5dd1(260)]]: [
            'oneWay',
            _0x2c5dd1(259),
            _0x2c5dd1(261),
            'oneToMany',
            _0x2c5dd1(262),
            _0x2c5dd1(263)
        ]
    }, VALID_TYPES = [
        ...DEFAULT_TYPES,
        _0x2c5dd1(264),
        _0x2c5dd1(265),
        _0x2c5dd1(266)
    ], createContentTypeSchema = (_0x5b5a1b, {
        isEdition: isEdition = ![]
    } = {}) => {
        const _0x330392 = _0x2c5dd1, _0x86b4d8 = {
                'WLqfc': _0x330392(267),
                'ShDFs': function (_0x58c2dd, _0x4082db) {
                    return _0x58c2dd(_0x4082db);
                },
                'wcZin': function (_0x505cd4) {
                    return _0x505cd4();
                }
            }, _0x3f176c = _[_0x330392(268)](_0x5b5a1b, _0x86b4d8[_0x330392(269)], typeKinds[_0x330392(260)]), _0x100374 = createSchema(VALID_TYPES, VALID_RELATIONS[_0x3f176c] || [], { 'modelType': modelTypes['CONTENT_TYPE'] })[_0x330392(270)]({ 'name': yup[_0x330392(271)]()[_0x330392(272)](hasPluralName)[_0x330392(272)](_0x86b4d8[_0x330392(273)](alreadyUsedContentTypeName, isEdition))[_0x330392(272)](_0x86b4d8['wcZin'](forbiddenContentTypeNameValidator))[_0x330392(274)](1 * 2000 + -3598 * -1 + -5597)[_0x330392(275)]() });
        return yup[_0x330392(276)]({
            'contentType': _0x100374[_0x330392(275)]()[_0x330392(277)](),
            'components': nestedComponentSchema
        })[_0x330392(277)]();
    }, validateContentTypeInput = _0xa86c95 => {
        const _0x50f2b1 = _0x2c5dd1, _0x499a7c = {
                'jYrae': function (_0x18f8a6, _0x46d8d1) {
                    return _0x18f8a6(_0x46d8d1);
                }
            };
        return _0x499a7c[_0x50f2b1(278)](createContentTypeSchema, _0xa86c95)[_0x50f2b1(279)](_0xa86c95, {
            'strict': !![],
            'abortEarly': ![]
        })[_0x50f2b1(280)](_0x5c4a3a => Promise[_0x50f2b1(281)](formatYupErrors(_0x5c4a3a)));
    }, validateUpdateContentTypeInput = _0x71645f => {
        const _0x32b3ac = _0x2c5dd1, _0x54be6a = {
                'QzDrZ': 'uid',
                'GyVik': function (_0x272c4c, _0x3f43f6) {
                    return _0x272c4c(_0x3f43f6);
                },
                'bazLG': _0x32b3ac(282),
                'EQyAj': function (_0x2a9225, _0x279df9) {
                    return _0x2a9225(_0x279df9);
                },
                'ejKiO': function (_0x234a9c, _0x4db890, _0x241c67) {
                    return _0x234a9c(_0x4db890, _0x241c67);
                }
            };
        return _[_0x32b3ac(283)](_0x71645f, _0x54be6a[_0x32b3ac(284)]) && _0x54be6a[_0x32b3ac(285)](removeEmptyDefaults, _0x71645f[_0x32b3ac(282)]), _[_0x32b3ac(283)](_0x71645f, _0x32b3ac(286)) && Array['isArray'](_0x71645f[_0x32b3ac(286)]) && _0x71645f[_0x32b3ac(286)][_0x32b3ac(287)](_0x431e9b => {
            const _0xc47502 = _0x32b3ac;
            _[_0xc47502(283)](_0x431e9b, _0x54be6a['QzDrZ']) && _0x54be6a[_0xc47502(288)](removeEmptyDefaults, _0x431e9b);
        }), removeDeletedUIDTargetFields(_0x71645f['contentType']), _0x54be6a[_0x32b3ac(289)](createContentTypeSchema, _0x71645f, { 'isEdition': !![] })[_0x32b3ac(279)](_0x71645f, {
            'strict': !![],
            'abortEarly': ![]
        })[_0x32b3ac(280)](_0x1d7bcb => Promise[_0x32b3ac(281)](formatYupErrors(_0x1d7bcb)));
    }, forbiddenContentTypeNameValidator = () => {
        const _0x1e4d9d = _0x2c5dd1, _0x2f5109 = {
                'rZfNr': function (_0x2db555, _0x283a51) {
                    return _0x2db555(_0x283a51);
                }
            }, _0x3e3603 = strapi[_0x1e4d9d(290)][_0x1e4d9d(291)][_0x1e4d9d(292)]['builder']['getReservedNames']()['models'];
        return {
            'name': 'forbiddenContentTypeName',
            'message': 'Content Type name cannot be one of ' + _0x3e3603[_0x1e4d9d(293)](', '),
            'test': _0x1c59ba => {
                const _0x4dd6ed = _0x1e4d9d;
                if (_0x3e3603[_0x4dd6ed(294)](_0x2f5109[_0x4dd6ed(295)](nameToSlug, _0x1c59ba)))
                    return ![];
                return !![];
            }
        };
    }, hasPluralName = {
        'name': _0x2c5dd1(296),
        'message': _0x2c5dd1(297),
        'test': _0x44e6a7 => {
            const _0x3cc85e = _0x2c5dd1, _0x31ce42 = {
                    'mCTTd': function (_0x3713cb, _0x44ca1f) {
                        return _0x3713cb === _0x44ca1f;
                    }
                };
            if (_0x31ce42['mCTTd'](pluralize[_0x3cc85e(298)](_0x44e6a7), pluralize(_0x44e6a7)))
                return ![];
            return !![];
        }
    }, alreadyUsedContentTypeName = _0x37a023 => {
        const _0x3caed9 = _0x2c5dd1, _0x30ab8e = {
                'wgYvH': function (_0x412399, _0x1882e6) {
                    return _0x412399(_0x1882e6);
                },
                'dBPiV': _0x3caed9(299),
                'seCyJ': _0x3caed9(300)
            }, _0xffeffb = Object[_0x3caed9(301)](strapi[_0x3caed9(302)])['map'](_0x4c93f8 => _0x4c93f8[_0x3caed9(303)]);
        return {
            'name': _0x30ab8e[_0x3caed9(304)],
            'message': _0x30ab8e['seCyJ'],
            'test': _0x20e279 => {
                const _0x31ea0a = _0x3caed9;
                if (_0x37a023)
                    return !![];
                if (_0xffeffb[_0x31ea0a(294)](_0x30ab8e[_0x31ea0a(305)](nameToSlug, _0x20e279)))
                    return ![];
                return !![];
            }
        };
    }, validateKind = _0xa954bd => {
        const _0x23d92d = _0x2c5dd1;
        return yup[_0x23d92d(271)]()[_0x23d92d(306)]([
            typeKinds[_0x23d92d(257)],
            typeKinds[_0x23d92d(260)]
        ])[_0x23d92d(279)](_0xa954bd)[_0x23d92d(280)](_0x5920ff => Promise[_0x23d92d(281)](formatYupErrors(_0x5920ff)));
    };
module[_0x2c5dd1(307)] = {
    'validateContentTypeInput': validateContentTypeInput,
    'validateUpdateContentTypeInput': validateUpdateContentTypeInput,
    'validateKind': validateKind
};