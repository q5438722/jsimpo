'use strict';
const _ = require('lodash'), yup = require('yup'), {formatYupErrors, nameToSlug} = require('strapi-utils'), pluralize = require('pluralize'), {modelTypes, DEFAULT_TYPES, typeKinds} = require('../../services/constants'), createSchema = require('./model-schema'), {removeEmptyDefaults, removeDeletedUIDTargetFields} = require('./data-transform'), {nestedComponentSchema} = require('./component'), VALID_RELATIONS = {
        [typeKinds['SINGLE_TYPE']]: [
            'oneWay',
            'manyWay'
        ],
        [typeKinds['COLLECTION_TYPE']]: [
            'oneWay',
            'manyWay',
            'oneToOne',
            'oneToMany',
            'manyToOne',
            'manyToMany'
        ]
    }, VALID_TYPES = [
        ...DEFAULT_TYPES,
        'uid',
        'component',
        'dynamiczone'
    ], createContentTypeSchema = (_0x106931, {
        isEdition: isEdition = ![]
    } = {}) => {
        const _0x478617 = {
                'fuilm': 'contentType.kind',
                'oGtFP': function (_0x3a4ee7, _0x4999ce, _0x3256ec, _0x37bf67) {
                    return _0x3a4ee7(_0x4999ce, _0x3256ec, _0x37bf67);
                },
                'szTtk': function (_0x2d72f5, _0x61eb14) {
                    return _0x2d72f5(_0x61eb14);
                },
                'Wgbps': function (_0x582772) {
                    return _0x582772();
                }
            }, _0xb1e8ca = _['get'](_0x106931, _0x478617['fuilm'], typeKinds['COLLECTION_TYPE']), _0x3e2a11 = _0x478617['oGtFP'](createSchema, VALID_TYPES, VALID_RELATIONS[_0xb1e8ca] || [], { 'modelType': modelTypes['CONTENT_TYPE'] })['shape']({ 'name': yup['string']()['test'](hasPluralName)['test'](_0x478617['szTtk'](alreadyUsedContentTypeName, isEdition))['test'](_0x478617['Wgbps'](forbiddenContentTypeNameValidator))['min'](0x1)['required']() });
        return yup['object']({
            'contentType': _0x3e2a11['required']()['noUnknown'](),
            'components': nestedComponentSchema
        })['noUnknown']();
    }, validateContentTypeInput = _0x53e642 => {
        const _0x528d15 = {
            'HQaUK': function (_0x25cee5, _0x30fa93) {
                return _0x25cee5(_0x30fa93);
            }
        };
        return _0x528d15['HQaUK'](createContentTypeSchema, _0x53e642)['validate'](_0x53e642, {
            'strict': !![],
            'abortEarly': ![]
        })['catch'](_0x2b4e0d => Promise['reject'](formatYupErrors(_0x2b4e0d)));
    }, validateUpdateContentTypeInput = _0x5ecdc3 => {
        const _0x4e7a15 = {
            'wQFfX': 'uid',
            'kUrHO': function (_0x4471cf, _0x379a0d) {
                return _0x4471cf(_0x379a0d);
            },
            'tKzvQ': 'contentType',
            'aTSuP': 'components',
            'bGvNA': function (_0x41f0fa, _0x2152f0) {
                return _0x41f0fa(_0x2152f0);
            },
            'XXlDH': function (_0x390334, _0x2a5908, _0x40d0a6) {
                return _0x390334(_0x2a5908, _0x40d0a6);
            }
        };
        return _['has'](_0x5ecdc3, _0x4e7a15['tKzvQ']) && _0x4e7a15['kUrHO'](removeEmptyDefaults, _0x5ecdc3['contentType']), _['has'](_0x5ecdc3, _0x4e7a15['aTSuP']) && Array['isArray'](_0x5ecdc3['components']) && _0x5ecdc3['components']['forEach'](_0x32bb00 => {
            _['has'](_0x32bb00, _0x4e7a15['wQFfX']) && _0x4e7a15['kUrHO'](removeEmptyDefaults, _0x32bb00);
        }), _0x4e7a15['bGvNA'](removeDeletedUIDTargetFields, _0x5ecdc3['contentType']), _0x4e7a15['XXlDH'](createContentTypeSchema, _0x5ecdc3, { 'isEdition': !![] })['validate'](_0x5ecdc3, {
            'strict': !![],
            'abortEarly': ![]
        })['catch'](_0x3dd68a => Promise['reject'](formatYupErrors(_0x3dd68a)));
    }, forbiddenContentTypeNameValidator = () => {
        const _0x1df64b = {
                'JDEYz': function (_0x39677b, _0x54cb18) {
                    return _0x39677b(_0x54cb18);
                },
                'PlZDO': 'content-type-builder',
                'crYrN': 'forbiddenContentTypeName'
            }, _0x2cb58e = strapi['plugins'][_0x1df64b['PlZDO']]['services']['builder']['getReservedNames']()['models'];
        return {
            'name': _0x1df64b['crYrN'],
            'message': 'Content\x20Type\x20name\x20cannot\x20be\x20one\x20of\x20' + _0x2cb58e['join'](',\x20'),
            'test': _0x54e1a8 => {
                if (_0x2cb58e['includes'](_0x1df64b['JDEYz'](nameToSlug, _0x54e1a8)))
                    return ![];
                return !![];
            }
        };
    }, hasPluralName = {
        'name': 'hasPluralName',
        'message': 'Content\x20Type\x20name\x20`${value}`\x20cannot\x20be\x20pluralized.\x20\x0aSuggestion:\x20add\x20Item\x20after\x20the\x20name\x20(e.g\x20News\x20->\x20NewsItem).',
        'test': _0x20a55a => {
            const _0x1ab3d0 = {
                'PajKd': function (_0x392301, _0x59e136) {
                    return _0x392301 === _0x59e136;
                },
                'hsNUk': function (_0x39bced, _0x1dd82b) {
                    return _0x39bced(_0x1dd82b);
                }
            };
            if (_0x1ab3d0['PajKd'](pluralize['singular'](_0x20a55a), _0x1ab3d0['hsNUk'](pluralize, _0x20a55a)))
                return ![];
            return !![];
        }
    }, alreadyUsedContentTypeName = _0x10a1b7 => {
        const _0x282cf9 = {
                'iRBnW': function (_0x4f9940, _0x2de40e) {
                    return _0x4f9940(_0x2de40e);
                },
                'Qpauy': 'nameAlreadyUsed',
                'nRwPL': 'Content\x20Type\x20name\x20`${value}`\x20is\x20already\x20being\x20used.'
            }, _0x137120 = Object['values'](strapi['contentTypes'])['map'](_0x5b41c2 => _0x5b41c2['modelName']);
        return {
            'name': _0x282cf9['Qpauy'],
            'message': _0x282cf9['nRwPL'],
            'test': _0x274370 => {
                if (_0x10a1b7)
                    return !![];
                if (_0x137120['includes'](_0x282cf9['iRBnW'](nameToSlug, _0x274370)))
                    return ![];
                return !![];
            }
        };
    }, validateKind = _0x58a4a5 => {
        return yup['string']()['oneOf']([
            typeKinds['SINGLE_TYPE'],
            typeKinds['COLLECTION_TYPE']
        ])['validate'](_0x58a4a5)['catch'](_0x1d9a64 => Promise['reject'](formatYupErrors(_0x1d9a64)));
    };
module['exports'] = {
    'validateContentTypeInput': validateContentTypeInput,
    'validateUpdateContentTypeInput': validateUpdateContentTypeInput,
    'validateKind': validateKind
};
