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
    ], createContentTypeSchema = (_0x152209, {
        isEdition: isEdition = ![]
    } = {}) => {
        const _0x4f5ce3 = _['get'](_0x152209, 'contentType.kind', typeKinds['COLLECTION_TYPE']), _0x2083cb = createSchema(VALID_TYPES, VALID_RELATIONS[_0x4f5ce3] || [], { 'modelType': modelTypes['CONTENT_TYPE'] })['shape']({ 'name': yup['string']()['test'](hasPluralName)['test'](alreadyUsedContentTypeName(isEdition))['test'](forbiddenContentTypeNameValidator())['min'](0x4bb * 0x7 + 0x67 * 0x2a + 0x3202 * -0x1)['required']() });
        return yup['object']({
            'contentType': _0x2083cb['required']()['noUnknown'](),
            'components': nestedComponentSchema
        })['noUnknown']();
    }, validateContentTypeInput = _0x48a678 => {
        return createContentTypeSchema(_0x48a678)['validate'](_0x48a678, {
            'strict': !![],
            'abortEarly': ![]
        })['catch'](_0xde8f80 => Promise['reject'](formatYupErrors(_0xde8f80)));
    }, validateUpdateContentTypeInput = _0x40c6b9 => {
        return _['has'](_0x40c6b9, 'contentType') && removeEmptyDefaults(_0x40c6b9['contentType']), _['has'](_0x40c6b9, 'components') && Array['isArray'](_0x40c6b9['components']) && _0x40c6b9['components']['forEach'](_0x3a9ab1 => {
            _['has'](_0x3a9ab1, 'uid') && removeEmptyDefaults(_0x3a9ab1);
        }), removeDeletedUIDTargetFields(_0x40c6b9['contentType']), createContentTypeSchema(_0x40c6b9, { 'isEdition': !![] })['validate'](_0x40c6b9, {
            'strict': !![],
            'abortEarly': ![]
        })['catch'](_0x6a5866 => Promise['reject'](formatYupErrors(_0x6a5866)));
    }, forbiddenContentTypeNameValidator = () => {
        const _0x457509 = strapi['plugins']['content-type-builder']['services']['builder']['getReservedNames']()['models'];
        return {
            'name': 'forbiddenContentTypeName',
            'message': 'Content\x20Type\x20name\x20cannot\x20be\x20one\x20of\x20' + _0x457509['join'](',\x20'),
            'test': _0x5da533 => {
                if (_0x457509['includes'](nameToSlug(_0x5da533)))
                    return ![];
                return !![];
            }
        };
    }, hasPluralName = {
        'name': 'hasPluralName',
        'message': 'Content\x20Type\x20name\x20`${value}`\x20cannot\x20be\x20pluralized.\x20\x0aSuggestion:\x20add\x20Item\x20after\x20the\x20name\x20(e.g\x20News\x20->\x20NewsItem).',
        'test': _0xefa82d => {
            if (pluralize['singular'](_0xefa82d) === pluralize(_0xefa82d))
                return ![];
            return !![];
        }
    }, alreadyUsedContentTypeName = _0x1951e5 => {
        const _0xa42585 = Object['values'](strapi['contentTypes'])['map'](_0x1716d2 => _0x1716d2['modelName']);
        return {
            'name': 'nameAlreadyUsed',
            'message': 'Content\x20Type\x20name\x20`${value}`\x20is\x20already\x20being\x20used.',
            'test': _0x573a18 => {
                if (_0x1951e5)
                    return !![];
                if (_0xa42585['includes'](nameToSlug(_0x573a18)))
                    return ![];
                return !![];
            }
        };
    }, validateKind = _0x5ae4d3 => {
        return yup['string']()['oneOf']([
            typeKinds['SINGLE_TYPE'],
            typeKinds['COLLECTION_TYPE']
        ])['validate'](_0x5ae4d3)['catch'](_0x2ebd80 => Promise['reject'](formatYupErrors(_0x2ebd80)));
    };
module['exports'] = {
    'validateContentTypeInput': validateContentTypeInput,
    'validateUpdateContentTypeInput': validateUpdateContentTypeInput,
    'validateKind': validateKind
};
