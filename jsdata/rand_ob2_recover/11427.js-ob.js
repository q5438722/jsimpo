const _ = require(_0x307e14(331)), yup = require('yup'), {formatYupErrors, nameToSlug} = require('strapi-utils'), pluralize = require(_0x307e14(332)), {modelTypes, DEFAULT_TYPES, typeKinds} = require(_0x307e14(333)), createSchema = require('./model-schema'), {removeEmptyDefaults, removeDeletedUIDTargetFields} = require('./data-transform'), {nestedComponentSchema} = require('./component'), VALID_RELATIONS = {
        [typeKinds[_0x307e14(334)]]: [
            _0x307e14(335),
            _0x307e14(336)
        ],
        [typeKinds['COLLECTION_TYPE']]: [
            _0x307e14(335),
            'manyWay',
            _0x307e14(337),
            _0x307e14(338),
            _0x307e14(339),
            _0x307e14(340)
        ]
    }, VALID_TYPES = [
        ...DEFAULT_TYPES,
        _0x307e14(341),
        _0x307e14(342),
        _0x307e14(343)
    ], createContentTypeSchema = (_0x594cbf, {
        isEdition: isEdition = ![]
    } = {}) => {
        const _0x778fb9 = _0x307e14, _0x25d883 = _['get'](_0x594cbf, 'contentType.kind', typeKinds['COLLECTION_TYPE']), _0x915762 = createSchema(VALID_TYPES, VALID_RELATIONS[_0x25d883] || [], { 'modelType': modelTypes['CONTENT_TYPE'] })['shape']({ 'name': yup[_0x778fb9(344)]()[_0x778fb9(345)](hasPluralName)[_0x778fb9(345)](alreadyUsedContentTypeName(isEdition))['test'](forbiddenContentTypeNameValidator())[_0x778fb9(346)](1)['required']() });
        return yup['object']({
            'contentType': _0x915762['required']()[_0x778fb9(347)](),
            'components': nestedComponentSchema
        })[_0x778fb9(347)]();
    }, validateContentTypeInput = _0x1c84b9 => {
        const _0x3bf2ee = _0x307e14;
        return createContentTypeSchema(_0x1c84b9)[_0x3bf2ee(348)](_0x1c84b9, {
            'strict': !![],
            'abortEarly': ![]
        })[_0x3bf2ee(349)](_0x3f39cf => Promise[_0x3bf2ee(350)](formatYupErrors(_0x3f39cf)));
    }, validateUpdateContentTypeInput = _0x3a29a0 => {
        const _0x2d3019 = _0x307e14;
        return _[_0x2d3019(351)](_0x3a29a0, _0x2d3019(352)) && removeEmptyDefaults(_0x3a29a0[_0x2d3019(352)]), _[_0x2d3019(351)](_0x3a29a0, _0x2d3019(353)) && Array[_0x2d3019(354)](_0x3a29a0[_0x2d3019(353)]) && _0x3a29a0['components'][_0x2d3019(355)](_0x554050 => {
            const _0x16700f = _0x2d3019;
            _[_0x16700f(351)](_0x554050, 'uid') && removeEmptyDefaults(_0x554050);
        }), removeDeletedUIDTargetFields(_0x3a29a0[_0x2d3019(352)]), createContentTypeSchema(_0x3a29a0, { 'isEdition': !![] })[_0x2d3019(348)](_0x3a29a0, {
            'strict': !![],
            'abortEarly': ![]
        })['catch'](_0x5e7b58 => Promise[_0x2d3019(350)](formatYupErrors(_0x5e7b58)));
    }, forbiddenContentTypeNameValidator = () => {
        const _0x79bd19 = _0x307e14, _0x1469c7 = strapi[_0x79bd19(356)][_0x79bd19(357)]['services']['builder'][_0x79bd19(358)]()['models'];
        return {
            'name': _0x79bd19(359),
            'message': _0x79bd19(360) + _0x1469c7['join'](', '),
            'test': _0x2737dc => {
                const _0x7c2120 = _0x79bd19;
                if (_0x1469c7[_0x7c2120(361)](nameToSlug(_0x2737dc)))
                    return ![];
                return !![];
            }
        };
    }, hasPluralName = {
        'name': 'hasPluralName',
        'message': _0x307e14(362),
        'test': _0xae70de => {
            const _0x435cf3 = _0x307e14;
            if (pluralize[_0x435cf3(363)](_0xae70de) === pluralize(_0xae70de))
                return ![];
            return !![];
        }
    }, alreadyUsedContentTypeName = _0x2825ae => {
        const _0x27a404 = _0x307e14, _0x50a5dd = Object['values'](strapi[_0x27a404(364)])['map'](_0x1b1913 => _0x1b1913[_0x27a404(365)]);
        return {
            'name': _0x27a404(366),
            'message': _0x27a404(367),
            'test': _0x511147 => {
                const _0x3d034a = _0x27a404;
                if (_0x2825ae)
                    return !![];
                if (_0x50a5dd[_0x3d034a(361)](nameToSlug(_0x511147)))
                    return ![];
                return !![];
            }
        };
    }, validateKind = _0x1e4191 => {
        const _0x205729 = _0x307e14;
        return yup['string']()['oneOf']([
            typeKinds[_0x205729(334)],
            typeKinds[_0x205729(368)]
        ])[_0x205729(348)](_0x1e4191)['catch'](_0x132a64 => Promise['reject'](formatYupErrors(_0x132a64)));
    };
module[_0x307e14(369)] = {
    'validateContentTypeInput': validateContentTypeInput,
    'validateUpdateContentTypeInput': validateUpdateContentTypeInput,
    'validateKind': validateKind
};