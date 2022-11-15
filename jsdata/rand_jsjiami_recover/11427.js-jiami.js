'use strict';
const _ = require('lodash');
const yup = require('yup');
const {formatYupErrors, nameToSlug} = require('strapi-utils');
const pluralize = require('pluralize');
const {modelTypes, DEFAULT_TYPES, typeKinds} = require('../../services/constants');
const createSchema = require('./model-schema');
const {removeEmptyDefaults, removeDeletedUIDTargetFields} = require('./data-transform');
const {nestedComponentSchema} = require('./component');
const VALID_RELATIONS = {
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
};
const VALID_TYPES = [
    ...DEFAULT_TYPES,
    'uid',
    'component',
    'dynamiczone'
];
const createContentTypeSchema = (_0x26fa22, {
    isEdition = ![]
} = {}) => {
    const _0x2de05d = _['get'](_0x26fa22, 'contentType.kind', typeKinds['COLLECTION_TYPE']);
    const _0x2c919a = createSchema(VALID_TYPES, VALID_RELATIONS[_0x2de05d] || [], { 'modelType': modelTypes['CONTENT_TYPE'] })['shape']({ 'name': yup['string']()['test'](hasPluralName)['test'](alreadyUsedContentTypeName(isEdition))['test'](forbiddenContentTypeNameValidator())['min'](1)['required']() });
    return yup['object']({
        'contentType': _0x2c919a['required']()['noUnknown'](),
        'components': nestedComponentSchema
    })['noUnknown']();
};
const validateContentTypeInput = _0x4afa86 => {
    return createContentTypeSchema(_0x4afa86)['validate'](_0x4afa86, {
        'strict': !![],
        'abortEarly': ![]
    })['catch'](_0x478894 => Promise['reject'](formatYupErrors(_0x478894)));
};
const validateUpdateContentTypeInput = _0x5bfd57 => {
    if (_['has'](_0x5bfd57, 'contentType')) {
        if ('QWVtA' === 'kjLva') {
            _0x5bfd57['components']['forEach'](_0x3ac1cb => {
                if (_['has'](_0x3ac1cb, 'uid')) {
                    removeEmptyDefaults(_0x3ac1cb);
                }
            });
        } else {
            removeEmptyDefaults(_0x5bfd57['contentType']);
        }
    }
    if (_['has'](_0x5bfd57, 'components') && Array['isArray'](_0x5bfd57['components'])) {
        if ('pqrMp' === 'pqrMp') {
            _0x5bfd57['components']['forEach'](_0x5bfd57 => {
                if (_['has'](_0x5bfd57, 'uid')) {
                    removeEmptyDefaults(_0x5bfd57);
                }
            });
        } else {
            if (isEdition)
                return !![];
            if (usedNames['includes'](nameToSlug(value))) {
                return ![];
            }
            return !![];
        }
    }
    removeDeletedUIDTargetFields(_0x5bfd57['contentType']);
    return createContentTypeSchema(_0x5bfd57, { 'isEdition': !![] })['validate'](_0x5bfd57, {
        'strict': !![],
        'abortEarly': ![]
    })['catch'](_0x5b5292 => Promise['reject'](formatYupErrors(_0x5b5292)));
};
const forbiddenContentTypeNameValidator = () => {
    const _0x24b05e = strapi['plugins']['content-type-builder']['services']['builder']['getReservedNames']()['models'];
    return {
        'name': 'forbiddenContentTypeName',
        'message': 'Content Type name cannot be one of ' + _0x24b05e['join'](', '),
        'test': _0x3c2e12 => {
            if (_0x24b05e['includes'](nameToSlug(_0x3c2e12))) {
                return ![];
            }
            return !![];
        }
    };
};
const hasPluralName = {
    'test': _0x4080b2 => {
        if (pluralize['singular'](_0x4080b2) === pluralize(_0x4080b2)) {
            if ('Vfmgm' === 'Vfmgm') {
                return ![];
            } else {
                return ![];
            }
        }
        return !![];
    }
};
const alreadyUsedContentTypeName = _0xf252b9 => {
    const _0x270938 = Object['values'](strapi['contentTypes'])['map'](_0x4635cb => _0x4635cb['modelName']);
    return {
        'name': 'nameAlreadyUsed',
        'message': 'Content Type name `${value}` is already being used.',
        'test': _0x289f53 => {
            if ('woneK' === 'npqJj') {
                return ![];
            } else {
                if (_0xf252b9)
                    return !![];
                if (_0x270938['includes'](nameToSlug(_0x289f53))) {
                    return ![];
                }
                return !![];
            }
        }
    };
};
const validateKind = _0x1d9292 => {
    return yup['string']()['oneOf']([
        typeKinds['SINGLE_TYPE'],
        typeKinds['COLLECTION_TYPE']
    ])['validate'](_0x1d9292)['catch'](_0x47ebcd => Promise['reject'](formatYupErrors(_0x47ebcd)));
};
module['exports'] = {
    'validateContentTypeInput': validateContentTypeInput,
    'validateUpdateContentTypeInput': validateUpdateContentTypeInput,
    'validateKind': validateKind
};