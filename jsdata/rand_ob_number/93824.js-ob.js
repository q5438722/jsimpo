const _ = require('lodash'), $jquery = require('./jquery'), $document = require('./document'), $elements = require('./elements'), $coordinates = require('./coordinates'), $transform = require('./transform'), fixedOrAbsoluteRe = /(fixed|absolute)/, OVERFLOW_PROPS = [
        'hidden',
        'scroll',
        'auto'
    ], isVisible = _0x3ee92c => {
        return !isHidden(_0x3ee92c, 'isVisible()');
    }, isHidden = (_0x3646d6, _0x1ec96e = 'isHidden()', _0xbd38c5 = { 'checkOpacity': !![] }) => {
        if (!$elements['isElement'](_0x3646d6))
            throw new Error('`Cypress.dom.' + _0x1ec96e + '`\x20failed\x20because\x20it\x20requires\x20a\x20DOM\x20element.\x20The\x20subject\x20received\x20was:\x20`' + _0x3646d6 + '`');
        const _0x17d014 = $jquery['wrap'](_0x3646d6);
        if ($elements['isBody'](_0x3646d6) || $elements['isHTML'](_0x3646d6))
            return ![];
        if ($elements['isOption'](_0x3646d6) || $elements['isOptgroup'](_0x3646d6)) {
            if (elHasDisplayNone(_0x17d014))
                return !![];
            const _0x5a86c3 = $elements['getFirstParentWithTagName'](_0x17d014, 'select');
            if (_0x5a86c3 && _0x5a86c3['length'])
                return isHidden(_0x5a86c3[0x7 * 0xdb + 0x13bf + -0x12 * 0x16e], _0x1ec96e);
        }
        if (elHasNoEffectiveWidthOrHeight(_0x17d014)) {
            if (elHasDisplayInline(_0x17d014))
                return !elHasVisibleChild(_0x17d014);
            return !![];
        }
        if (elHasVisibilityHiddenOrCollapse(_0x17d014))
            return !![];
        if ($transform['detectVisibility'](_0x17d014) !== 'visible')
            return !![];
        if (elHasOpacityZero(_0x17d014) && _0xbd38c5['checkOpacity'])
            return !![];
        if (elIsHiddenByAncestors(_0x17d014, _0xbd38c5['checkOpacity']))
            return !![];
        if (elOrAncestorIsFixedOrSticky(_0x17d014))
            return elIsNotElementFromPoint(_0x17d014);
        return elIsOutOfBoundsOfAncestorsOverflow(_0x17d014);
    }, elHasNoEffectiveWidthOrHeight = _0x540061 => {
        const _0x6c81c9 = _0x540061[-0x39 * -0xd + 0x3 * 0x52 + 0x15 * -0x2f], _0x1b0132 = getComputedStyle(_0x6c81c9), _0x1f8563 = _0x1b0132['getPropertyValue']('transform'), _0x4a7f24 = elOffsetWidth(_0x540061), _0x26e0a4 = elOffsetHeight(_0x540061), _0x3d9e17 = elHasOverflowHidden(_0x540061);
        return isZeroLengthAndTransformNone(_0x4a7f24, _0x26e0a4, _0x1f8563) || isZeroLengthAndOverflowHidden(_0x4a7f24, _0x26e0a4, _0x3d9e17) || _0x6c81c9['getClientRects']()['length'] <= -0x2 * -0xb7f + 0x650 + 0x2 * -0xea7;
    }, isZeroLengthAndTransformNone = (_0x34d571, _0x59fddb, _0x11c0d4) => {
        return _0x34d571 <= -0x9b + -0xe9 * 0x29 + -0x97b * -0x4 && _0x11c0d4 === 'none' || _0x59fddb <= -0x1535 + 0x23 * -0xfa + 0xb * 0x509 && _0x11c0d4 === 'none';
    }, isZeroLengthAndOverflowHidden = (_0x26dba6, _0x26375a, _0x3bbe5b) => {
        return _0x26dba6 <= -0x13ae + -0x56e * -0x3 + 0x364 && _0x3bbe5b || _0x26375a <= 0x1d3c + 0x3 * 0x4a1 + 0x2b1f * -0x1 && _0x3bbe5b;
    }, elHasNoOffsetWidthOrHeight = _0x22ea06 => {
        return elOffsetWidth(_0x22ea06) <= 0x1c * -0x108 + -0x1 * 0x173b + 0x341b * 0x1 || elOffsetHeight(_0x22ea06) <= -0x3 * 0xafd + -0x69 * -0xe + -0x45 * -0x65;
    }, elOffsetWidth = _0x1d0202 => {
        return _0x1d0202[0x8b * -0x28 + 0x32 * 0x3b + 0x9 * 0x122]['offsetWidth'];
    }, elOffsetHeight = _0x3597d3 => {
        return _0x3597d3[-0x13b6 + -0x5 * 0x3d + 0x14e7 * 0x1]['offsetHeight'];
    }, elHasVisibilityHiddenOrCollapse = _0x4cac56 => {
        return elHasVisibilityHidden(_0x4cac56) || elHasVisibilityCollapse(_0x4cac56);
    }, elHasVisibilityHidden = _0x103d3f => {
        return _0x103d3f['css']('visibility') === 'hidden';
    }, elHasVisibilityCollapse = _0x22e4a0 => {
        return _0x22e4a0['css']('visibility') === 'collapse';
    }, elHasOpacityZero = _0x16aeb7 => {
        return _0x16aeb7['css']('opacity') === '0';
    }, elHasDisplayNone = _0x488869 => {
        return _0x488869['css']('display') === 'none';
    }, elHasDisplayInline = _0x338081 => {
        return _0x338081['css']('display') === 'inline';
    }, elHasOverflowHidden = function (_0x21d158) {
        const _0x2b7223 = [
            _0x21d158['css']('overflow'),
            _0x21d158['css']('overflow-y'),
            _0x21d158['css']('overflow-x')
        ];
        return _0x2b7223['includes']('hidden');
    }, elHasPositionRelative = _0xeed521 => {
        return _0xeed521['css']('position') === 'relative';
    }, elHasPositionAbsolute = _0x1703ec => {
        return _0x1703ec['css']('position') === 'absolute';
    }, elHasClippableOverflow = function (_0x572a17) {
        return OVERFLOW_PROPS['includes'](_0x572a17['css']('overflow')) || OVERFLOW_PROPS['includes'](_0x572a17['css']('overflow-y')) || OVERFLOW_PROPS['includes'](_0x572a17['css']('overflow-x'));
    }, canClipContent = function (_0x127c6c, _0x26a224) {
        if (!elHasClippableOverflow(_0x26a224))
            return ![];
        const _0x2d9b78 = _0x127c6c['offsetParent']();
        if (!elHasPositionRelative(_0x127c6c) && $elements['isAncestor'](_0x26a224, _0x2d9b78))
            return ![];
        if (elHasPositionAbsolute(_0x2d9b78) && $elements['isChild'](_0x26a224, _0x2d9b78))
            return ![];
        return !![];
    }, elOrAncestorIsFixedOrSticky = function (_0xe22f45) {
        return !!$elements['getFirstFixedOrStickyPositionParent'](_0xe22f45);
    }, elAtCenterPoint = function (_0x55aeff) {
        const _0x2f8df0 = $document['getDocumentFromElement'](_0x55aeff['get'](0x87d + 0x12 * 0x62 + 0x1f * -0x7f)), _0x505315 = $coordinates['getElementPositioning'](_0x55aeff), {
                topCenter: _0x52e187,
                leftCenter: _0x2dc25f
            } = _0x505315['fromElViewport'], _0x4a1e56 = $coordinates['getElementAtPointFromViewport'](_0x2f8df0, _0x2dc25f, _0x52e187);
        if (_0x4a1e56)
            return $jquery['wrap'](_0x4a1e56);
    }, elDescendentsHavePositionFixedOrAbsolute = function (_0x422268, _0x21324e) {
        const _0x32276d = $elements['getAllParents'](_0x21324e[-0x1079 * -0x1 + -0x1 * -0x647 + 0x40 * -0x5b], _0x422268), _0xa3a683 = $jquery['wrap'](_0x32276d)['add'](_0x21324e);
        return _['some'](_0xa3a683['get'](), _0x45dfb2 => {
            return fixedOrAbsoluteRe['test']($jquery['wrap'](_0x45dfb2)['css']('position'));
        });
    }, elHasVisibleChild = function (_0x5d715a) {
        return _['some'](_0x5d715a['children'](), _0x256ba9 => {
            return isVisible(_0x256ba9);
        });
    }, elIsNotElementFromPoint = function (_0x32d46f) {
        const _0x6eaa94 = elAtCenterPoint(_0x32d46f);
        if ($elements['isDescendent'](_0x32d46f, _0x6eaa94))
            return ![];
        if ((_0x32d46f['css']('pointer-events') === 'none' || _0x32d46f['parent']()['css']('pointer-events') === 'none') && (_0x6eaa94 && $elements['isAncestor'](_0x32d46f, _0x6eaa94)))
            return ![];
        return !![];
    }, elIsOutOfBoundsOfAncestorsOverflow = function (_0x53a3ae, _0x4e857c = $elements['getParent'](_0x53a3ae)) {
        if ($elements['isUndefinedOrHTMLBodyDoc'](_0x4e857c))
            return ![];
        const _0x44f0fe = $coordinates['getElementPositioning'](_0x53a3ae);
        if (canClipContent(_0x53a3ae, _0x4e857c)) {
            const _0x5d88af = $coordinates['getElementPositioning'](_0x4e857c);
            if (_0x44f0fe['fromElWindow']['left'] > _0x5d88af['width'] + _0x5d88af['fromElWindow']['left'] || _0x44f0fe['fromElWindow']['left'] + _0x44f0fe['width'] < _0x5d88af['fromElWindow']['left'] || _0x44f0fe['fromElWindow']['top'] > _0x5d88af['height'] + _0x5d88af['fromElWindow']['top'] || _0x44f0fe['fromElWindow']['top'] + _0x44f0fe['height'] < _0x5d88af['fromElWindow']['top'])
                return !![];
        }
        return elIsOutOfBoundsOfAncestorsOverflow(_0x53a3ae, $elements['getParent'](_0x4e857c));
    }, elIsHiddenByAncestors = function (_0x441459, _0x5d99c3, _0x12f7ce = _0x441459) {
        const _0x5ecc5c = $elements['getParent'](_0x441459);
        if ($elements['isUndefinedOrHTMLBodyDoc'](_0x5ecc5c))
            return ![];
        if (elHasOpacityZero(_0x5ecc5c) && _0x5d99c3)
            return !![];
        if (elHasOverflowHidden(_0x5ecc5c) && elHasNoEffectiveWidthOrHeight(_0x5ecc5c))
            return !elDescendentsHavePositionFixedOrAbsolute(_0x5ecc5c, _0x12f7ce);
        return elIsHiddenByAncestors(_0x5ecc5c, _0x5d99c3, _0x12f7ce);
    }, parentHasNoOffsetWidthOrHeightAndOverflowHidden = function (_0xff6782) {
        if ($elements['isUndefinedOrHTMLBodyDoc'](_0xff6782))
            return ![];
        if (elHasOverflowHidden(_0xff6782) && elHasNoEffectiveWidthOrHeight(_0xff6782))
            return _0xff6782;
        return parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements['getParent'](_0xff6782));
    }, parentHasDisplayNone = function (_0x4b2bd2) {
        if (!_0x4b2bd2['length'] || $document['isDocument'](_0x4b2bd2))
            return ![];
        if (elHasDisplayNone(_0x4b2bd2))
            return _0x4b2bd2;
        return parentHasDisplayNone($elements['getParent'](_0x4b2bd2));
    }, parentHasVisibilityHidden = function (_0x4e89ec) {
        if (!_0x4e89ec['length'] || $document['isDocument'](_0x4e89ec))
            return ![];
        if (elHasVisibilityHidden(_0x4e89ec))
            return _0x4e89ec;
        return parentHasVisibilityHidden($elements['getParent'](_0x4e89ec));
    }, parentHasVisibilityCollapse = function (_0x417035) {
        if (!_0x417035['length'] || $document['isDocument'](_0x417035))
            return ![];
        if (elHasVisibilityCollapse(_0x417035))
            return _0x417035;
        return parentHasVisibilityCollapse($elements['getParent'](_0x417035));
    }, parentHasOpacityZero = function (_0x5ca738) {
        if (!_0x5ca738['length'] || $document['isDocument'](_0x5ca738))
            return ![];
        if (elHasOpacityZero(_0x5ca738))
            return _0x5ca738;
        return parentHasOpacityZero(_0x5ca738['parent']());
    }, getReasonIsHidden = function (_0x23da4e, _0x4d6800 = { 'checkOpacity': !![] }) {
        const _0x96d5d3 = $elements['stringify'](_0x23da4e, 'short');
        let _0xdb13e1 = elOffsetWidth(_0x23da4e), _0x1f9c14 = elOffsetHeight(_0x23da4e), _0x444095, _0x132bd3;
        if (elHasDisplayNone(_0x23da4e))
            return 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`display:\x20none`';
        if (_0x444095 = parentHasDisplayNone($elements['getParent'](_0x23da4e)))
            return _0x132bd3 = $elements['stringify'](_0x444095, 'short'), 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20its\x20parent\x20`' + _0x132bd3 + '`\x20has\x20CSS\x20property:\x20`display:\x20none`';
        if (_0x444095 = parentHasVisibilityHidden($elements['getParent'](_0x23da4e)))
            return _0x132bd3 = $elements['stringify'](_0x444095, 'short'), 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20its\x20parent\x20`' + _0x132bd3 + '`\x20has\x20CSS\x20property:\x20`visibility:\x20hidden`';
        if (_0x444095 = parentHasVisibilityCollapse($elements['getParent'](_0x23da4e)))
            return _0x132bd3 = $elements['stringify'](_0x444095, 'short'), 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20its\x20parent\x20`' + _0x132bd3 + '`\x20has\x20CSS\x20property:\x20`visibility:\x20collapse`';
        if ($elements['isDetached'](_0x23da4e))
            return 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20it\x20is\x20detached\x20from\x20the\x20DOM';
        if (elHasVisibilityHidden(_0x23da4e))
            return 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`visibility:\x20hidden`';
        if (elHasVisibilityCollapse(_0x23da4e))
            return 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`visibility:\x20collapse`';
        if (elHasOpacityZero(_0x23da4e) && _0x4d6800['checkOpacity'])
            return 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`opacity:\x200`';
        if ((_0x444095 = parentHasOpacityZero(_0x23da4e['parent']())) && _0x4d6800['checkOpacity'])
            return _0x132bd3 = $elements['stringify'](_0x444095, 'short'), 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20its\x20parent\x20`' + _0x132bd3 + '`\x20has\x20CSS\x20property:\x20`opacity:\x200`';
        if (elHasNoOffsetWidthOrHeight(_0x23da4e))
            return 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20an\x20effective\x20width\x20and\x20height\x20of:\x20`' + _0xdb13e1 + '\x20x\x20' + _0x1f9c14 + '`\x20pixels.';
        const _0x195ca5 = $transform['detectVisibility'](_0x23da4e);
        if (_0x195ca5 === 'transformed')
            return 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20it\x20is\x20hidden\x20by\x20transform.';
        if (_0x195ca5 === 'backface')
            return 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20it\x20is\x20rotated\x20and\x20its\x20backface\x20is\x20hidden.';
        if (_0x444095 = parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements['getParent'](_0x23da4e)))
            return _0x132bd3 = $elements['stringify'](_0x444095, 'short'), _0xdb13e1 = elOffsetWidth(_0x444095), _0x1f9c14 = elOffsetHeight(_0x444095), 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20its\x20parent\x20`' + _0x132bd3 + '`\x20has\x20CSS\x20property:\x20`overflow:\x20hidden`\x20and\x20an\x20effective\x20width\x20and\x20height\x20of:\x20`' + _0xdb13e1 + '\x20x\x20' + _0x1f9c14 + '`\x20pixels.';
        if (elOrAncestorIsFixedOrSticky(_0x23da4e)) {
            if (elIsNotElementFromPoint(_0x23da4e)) {
                const _0x59fe30 = $elements['stringify'](elAtCenterPoint(_0x23da4e));
                if (_0x59fe30)
                    return 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`position:\x20fixed`\x20and\x20it\x27s\x20being\x20covered\x20by\x20another\x20element:\x0a\x0a`' + _0x59fe30 + '`';
                return 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20its\x20ancestor\x20has\x20`position:\x20fixed`\x20CSS\x20property\x20and\x20it\x20is\x20overflowed\x20by\x20other\x20elements.\x20How\x20about\x20scrolling\x20to\x20the\x20element\x20with\x20`cy.scrollIntoView()`?';
            }
        } else {
            if (elIsOutOfBoundsOfAncestorsOverflow(_0x23da4e))
                return 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible\x20because\x20its\x20content\x20is\x20being\x20clipped\x20by\x20one\x20of\x20its\x20parent\x20elements,\x20which\x20has\x20a\x20CSS\x20property\x20of\x20overflow:\x20`hidden`,\x20`scroll`\x20or\x20`auto`';
        }
        return 'This\x20element\x20`' + _0x96d5d3 + '`\x20is\x20not\x20visible.';
    };
module['exports'] = {
    'isVisible': isVisible,
    'isHidden': isHidden,
    'parentHasDisplayNone': parentHasDisplayNone,
    'getReasonIsHidden': getReasonIsHidden
};
