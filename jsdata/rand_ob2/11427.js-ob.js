'use strict';
const _0x1942 = [
    '85dxodTl',
    '10315mKRsHI',
    '471623vVuzBk',
    '10LNWiWl',
    '58831nNXdGn',
    '1407134aJiems',
    'lodash',
    'pluralize',
    '../../services/constants',
    'SINGLE_TYPE',
    'oneWay',
    'manyWay',
    'oneToOne',
    'oneToMany',
    'manyToOne',
    'manyToMany',
    'uid',
    'component',
    'dynamiczone',
    'string',
    'test',
    'min',
    'noUnknown',
    'validate',
    'catch',
    'reject',
    'has',
    'contentType',
    'components',
    'isArray',
    'forEach',
    'plugins',
    'content-type-builder',
    'getReservedNames',
    'forbiddenContentTypeName',
    'Content\x20Type\x20name\x20cannot\x20be\x20one\x20of\x20',
    'includes',
    'Content\x20Type\x20name\x20`${value}`\x20cannot\x20be\x20pluralized.\x20\x0aSuggestion:\x20add\x20Item\x20after\x20the\x20name\x20(e.g\x20News\x20->\x20NewsItem).',
    'singular',
    'contentTypes',
    'modelName',
    'nameAlreadyUsed',
    'Content\x20Type\x20name\x20`${value}`\x20is\x20already\x20being\x20used.',
    'COLLECTION_TYPE',
    'exports',
    '855683AkBFOQ',
    '1faHOqo',
    '463214OwxCyz',
    '627100hwTPDf'
];
const _0x307e14 = _0x311a;
function _0x311a(_0xc1b0de, _0x166e75) {
    return _0x311a = function (_0x194261, _0x311ac4) {
        _0x194261 = _0x194261 - 0x141;
        let _0x467041 = _0x1942[_0x194261];
        return _0x467041;
    }, _0x311a(_0xc1b0de, _0x166e75);
}
(function (_0x4eaa6a, _0x5055c1) {
    const _0x477515 = _0x311a;
    while (!![]) {
        try {
            const _0xb5866e = parseInt(_0x477515(0x141)) + parseInt(_0x477515(0x142)) * -parseInt(_0x477515(0x143)) + parseInt(_0x477515(0x144)) + -parseInt(_0x477515(0x145)) * parseInt(_0x477515(0x146)) + -parseInt(_0x477515(0x147)) + -parseInt(_0x477515(0x148)) * parseInt(_0x477515(0x149)) + parseInt(_0x477515(0x14a));
            if (_0xb5866e === _0x5055c1)
                break;
            else
                _0x4eaa6a['push'](_0x4eaa6a['shift']());
        } catch (_0xb22ed8) {
            _0x4eaa6a['push'](_0x4eaa6a['shift']());
        }
    }
}(_0x1942, 0x77a0b));
const _ = require(_0x307e14(0x14b)), yup = require('yup'), {formatYupErrors, nameToSlug} = require('strapi-utils'), pluralize = require(_0x307e14(0x14c)), {modelTypes, DEFAULT_TYPES, typeKinds} = require(_0x307e14(0x14d)), createSchema = require('./model-schema'), {removeEmptyDefaults, removeDeletedUIDTargetFields} = require('./data-transform'), {nestedComponentSchema} = require('./component'), VALID_RELATIONS = {
        [typeKinds[_0x307e14(0x14e)]]: [
            _0x307e14(0x14f),
            _0x307e14(0x150)
        ],
        [typeKinds['COLLECTION_TYPE']]: [
            _0x307e14(0x14f),
            'manyWay',
            _0x307e14(0x151),
            _0x307e14(0x152),
            _0x307e14(0x153),
            _0x307e14(0x154)
        ]
    }, VALID_TYPES = [
        ...DEFAULT_TYPES,
        _0x307e14(0x155),
        _0x307e14(0x156),
        _0x307e14(0x157)
    ], createContentTypeSchema = (_0x594cbf, {
        isEdition: isEdition = ![]
    } = {}) => {
        const _0x778fb9 = _0x307e14, _0x25d883 = _['get'](_0x594cbf, 'contentType.kind', typeKinds['COLLECTION_TYPE']), _0x915762 = createSchema(VALID_TYPES, VALID_RELATIONS[_0x25d883] || [], { 'modelType': modelTypes['CONTENT_TYPE'] })['shape']({ 'name': yup[_0x778fb9(0x158)]()[_0x778fb9(0x159)](hasPluralName)[_0x778fb9(0x159)](alreadyUsedContentTypeName(isEdition))['test'](forbiddenContentTypeNameValidator())[_0x778fb9(0x15a)](0x1)['required']() });
        return yup['object']({
            'contentType': _0x915762['required']()[_0x778fb9(0x15b)](),
            'components': nestedComponentSchema
        })[_0x778fb9(0x15b)]();
    }, validateContentTypeInput = _0x1c84b9 => {
        const _0x3bf2ee = _0x307e14;
        return createContentTypeSchema(_0x1c84b9)[_0x3bf2ee(0x15c)](_0x1c84b9, {
            'strict': !![],
            'abortEarly': ![]
        })[_0x3bf2ee(0x15d)](_0x3f39cf => Promise[_0x3bf2ee(0x15e)](formatYupErrors(_0x3f39cf)));
    }, validateUpdateContentTypeInput = _0x3a29a0 => {
        const _0x2d3019 = _0x307e14;
        return _[_0x2d3019(0x15f)](_0x3a29a0, _0x2d3019(0x160)) && removeEmptyDefaults(_0x3a29a0[_0x2d3019(0x160)]), _[_0x2d3019(0x15f)](_0x3a29a0, _0x2d3019(0x161)) && Array[_0x2d3019(0x162)](_0x3a29a0[_0x2d3019(0x161)]) && _0x3a29a0['components'][_0x2d3019(0x163)](_0x554050 => {
            const _0x16700f = _0x2d3019;
            _[_0x16700f(0x15f)](_0x554050, 'uid') && removeEmptyDefaults(_0x554050);
        }), removeDeletedUIDTargetFields(_0x3a29a0[_0x2d3019(0x160)]), createContentTypeSchema(_0x3a29a0, { 'isEdition': !![] })[_0x2d3019(0x15c)](_0x3a29a0, {
            'strict': !![],
            'abortEarly': ![]
        })['catch'](_0x5e7b58 => Promise[_0x2d3019(0x15e)](formatYupErrors(_0x5e7b58)));
    }, forbiddenContentTypeNameValidator = () => {
        const _0x79bd19 = _0x307e14, _0x1469c7 = strapi[_0x79bd19(0x164)][_0x79bd19(0x165)]['services']['builder'][_0x79bd19(0x166)]()['models'];
        return {
            'name': _0x79bd19(0x167),
            'message': _0x79bd19(0x168) + _0x1469c7['join'](',\x20'),
            'test': _0x2737dc => {
                const _0x7c2120 = _0x79bd19;
                if (_0x1469c7[_0x7c2120(0x169)](nameToSlug(_0x2737dc)))
                    return ![];
                return !![];
            }
        };
    }, hasPluralName = {
        'name': 'hasPluralName',
        'message': _0x307e14(0x16a),
        'test': _0xae70de => {
            const _0x435cf3 = _0x307e14;
            if (pluralize[_0x435cf3(0x16b)](_0xae70de) === pluralize(_0xae70de))
                return ![];
            return !![];
        }
    }, alreadyUsedContentTypeName = _0x2825ae => {
        const _0x27a404 = _0x307e14, _0x50a5dd = Object['values'](strapi[_0x27a404(0x16c)])['map'](_0x1b1913 => _0x1b1913[_0x27a404(0x16d)]);
        return {
            'name': _0x27a404(0x16e),
            'message': _0x27a404(0x16f),
            'test': _0x511147 => {
                const _0x3d034a = _0x27a404;
                if (_0x2825ae)
                    return !![];
                if (_0x50a5dd[_0x3d034a(0x169)](nameToSlug(_0x511147)))
                    return ![];
                return !![];
            }
        };
    }, validateKind = _0x1e4191 => {
        const _0x205729 = _0x307e14;
        return yup['string']()['oneOf']([
            typeKinds[_0x205729(0x14e)],
            typeKinds[_0x205729(0x170)]
        ])[_0x205729(0x15c)](_0x1e4191)['catch'](_0x132a64 => Promise['reject'](formatYupErrors(_0x132a64)));
    };
module[_0x307e14(0x171)] = {
    'validateContentTypeInput': validateContentTypeInput,
    'validateUpdateContentTypeInput': validateUpdateContentTypeInput,
    'validateKind': validateKind
};
