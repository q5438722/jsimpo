const _0x5d06 = [
    'add',
    'some',
    'test',
    'children',
    'pointer-events',
    'parent',
    'isUndefinedOrHTMLBodyDoc',
    'fromElWindow',
    'left',
    'width',
    'top',
    'height',
    'getParent',
    'isDocument',
    'stringify',
    'short',
    'This\x20element\x20`',
    '`\x20is\x20not\x20visible\x20because\x20its\x20parent\x20`',
    '`\x20has\x20CSS\x20property:\x20`visibility:\x20hidden`',
    '`\x20has\x20CSS\x20property:\x20`visibility:\x20collapse`',
    'isDetached',
    '`\x20is\x20not\x20visible\x20because\x20it\x20is\x20detached\x20from\x20the\x20DOM',
    '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`visibility:\x20collapse`',
    '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`opacity:\x200`',
    '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20an\x20effective\x20width\x20and\x20height\x20of:\x20`',
    '`\x20pixels.',
    'transformed',
    '`\x20is\x20not\x20visible\x20because\x20it\x20is\x20hidden\x20by\x20transform.',
    '`\x20is\x20not\x20visible\x20because\x20it\x20is\x20rotated\x20and\x20its\x20backface\x20is\x20hidden.',
    '`\x20is\x20not\x20visible\x20because\x20its\x20ancestor\x20has\x20`position:\x20fixed`\x20CSS\x20property\x20and\x20it\x20is\x20overflowed\x20by\x20other\x20elements.\x20How\x20about\x20scrolling\x20to\x20the\x20element\x20with\x20`cy.scrollIntoView()`?',
    '`\x20is\x20not\x20visible\x20because\x20its\x20content\x20is\x20being\x20clipped\x20by\x20one\x20of\x20its\x20parent\x20elements,\x20which\x20has\x20a\x20CSS\x20property\x20of\x20overflow:\x20`hidden`,\x20`scroll`\x20or\x20`auto`',
    '`\x20is\x20not\x20visible.',
    '1TQFUDg',
    '300119wXGMOQ',
    '39409mfNYBD',
    '51339SVnEIF',
    '1ayXeYh',
    '167498GHNctM',
    '96731ckSass',
    '3bavYMN',
    '166623HFdQws',
    '293nxqixA',
    '181liXBZG',
    'lodash',
    './jquery',
    './document',
    './elements',
    './coordinates',
    'hidden',
    'scroll',
    'isVisible()',
    'isHidden()',
    'isElement',
    '`\x20failed\x20because\x20it\x20requires\x20a\x20DOM\x20element.\x20The\x20subject\x20received\x20was:\x20`',
    'wrap',
    'isBody',
    'isHTML',
    'isOption',
    'isOptgroup',
    'getFirstParentWithTagName',
    'select',
    'length',
    'detectVisibility',
    'visible',
    'checkOpacity',
    'getPropertyValue',
    'transform',
    'getClientRects',
    'none',
    'offsetWidth',
    'offsetHeight',
    'css',
    'visibility',
    'collapse',
    'opacity',
    'display',
    'inline',
    'overflow',
    'overflow-y',
    'overflow-x',
    'includes',
    'position',
    'relative',
    'absolute',
    'isAncestor',
    'getDocumentFromElement',
    'getElementPositioning',
    'fromElViewport',
    'getElementAtPointFromViewport',
    'getAllParents'
];
const _0xe40738 = _0x295e;
(function (_0xbb2067, _0x542451) {
    const _0x1fca23 = _0x295e;
    while (!![]) {
        try {
            const _0x36733b = -parseInt(_0x1fca23(0x1a8)) * -parseInt(_0x1fca23(0x1a9)) + -parseInt(_0x1fca23(0x1aa)) + parseInt(_0x1fca23(0x1ab)) * -parseInt(_0x1fca23(0x1ac)) + -parseInt(_0x1fca23(0x1ad)) + parseInt(_0x1fca23(0x1ae)) * parseInt(_0x1fca23(0x1af)) + -parseInt(_0x1fca23(0x1b0)) + parseInt(_0x1fca23(0x1b1)) * parseInt(_0x1fca23(0x1b2));
            if (_0x36733b === _0x542451)
                break;
            else
                _0xbb2067['push'](_0xbb2067['shift']());
        } catch (_0x44fa59) {
            _0xbb2067['push'](_0xbb2067['shift']());
        }
    }
}(_0x5d06, 0x3556c));
const _ = require(_0xe40738(0x1b3)), $jquery = require(_0xe40738(0x1b4)), $document = require(_0xe40738(0x1b5)), $elements = require(_0xe40738(0x1b6)), $coordinates = require(_0xe40738(0x1b7)), $transform = require('./transform'), fixedOrAbsoluteRe = /(fixed|absolute)/, OVERFLOW_PROPS = [
        _0xe40738(0x1b8),
        _0xe40738(0x1b9),
        'auto'
    ], isVisible = _0x239328 => {
        const _0x3024e7 = _0xe40738;
        return !isHidden(_0x239328, _0x3024e7(0x1ba));
    }, isHidden = (_0x52b484, _0xf90cbf = _0xe40738(0x1bb), _0x1e85cd = { 'checkOpacity': !![] }) => {
        const _0x27f10b = _0xe40738;
        if (!$elements[_0x27f10b(0x1bc)](_0x52b484))
            throw new Error('`Cypress.dom.' + _0xf90cbf + _0x27f10b(0x1bd) + _0x52b484 + '`');
        const _0x10a894 = $jquery[_0x27f10b(0x1be)](_0x52b484);
        if ($elements[_0x27f10b(0x1bf)](_0x52b484) || $elements[_0x27f10b(0x1c0)](_0x52b484))
            return ![];
        if ($elements[_0x27f10b(0x1c1)](_0x52b484) || $elements[_0x27f10b(0x1c2)](_0x52b484)) {
            if (elHasDisplayNone(_0x10a894))
                return !![];
            const _0x5214c8 = $elements[_0x27f10b(0x1c3)](_0x10a894, _0x27f10b(0x1c4));
            if (_0x5214c8 && _0x5214c8[_0x27f10b(0x1c5)])
                return isHidden(_0x5214c8[0x0], _0xf90cbf);
        }
        if (elHasNoEffectiveWidthOrHeight(_0x10a894)) {
            if (elHasDisplayInline(_0x10a894))
                return !elHasVisibleChild(_0x10a894);
            return !![];
        }
        if (elHasVisibilityHiddenOrCollapse(_0x10a894))
            return !![];
        if ($transform[_0x27f10b(0x1c6)](_0x10a894) !== _0x27f10b(0x1c7))
            return !![];
        if (elHasOpacityZero(_0x10a894) && _0x1e85cd[_0x27f10b(0x1c8)])
            return !![];
        if (elIsHiddenByAncestors(_0x10a894, _0x1e85cd[_0x27f10b(0x1c8)]))
            return !![];
        if (elOrAncestorIsFixedOrSticky(_0x10a894))
            return elIsNotElementFromPoint(_0x10a894);
        return elIsOutOfBoundsOfAncestorsOverflow(_0x10a894);
    }, elHasNoEffectiveWidthOrHeight = _0x41dc42 => {
        const _0x235139 = _0xe40738, _0xd22367 = _0x41dc42[0x0], _0x3aef2 = getComputedStyle(_0xd22367), _0x12f806 = _0x3aef2[_0x235139(0x1c9)](_0x235139(0x1ca)), _0x2bdfd6 = elOffsetWidth(_0x41dc42), _0xefbb32 = elOffsetHeight(_0x41dc42), _0x2325bc = elHasOverflowHidden(_0x41dc42);
        return isZeroLengthAndTransformNone(_0x2bdfd6, _0xefbb32, _0x12f806) || isZeroLengthAndOverflowHidden(_0x2bdfd6, _0xefbb32, _0x2325bc) || _0xd22367[_0x235139(0x1cb)]()['length'] <= 0x0;
    }, isZeroLengthAndTransformNone = (_0x45ba53, _0x2818bd, _0x2bbc86) => {
        const _0x588cea = _0xe40738;
        return _0x45ba53 <= 0x0 && _0x2bbc86 === _0x588cea(0x1cc) || _0x2818bd <= 0x0 && _0x2bbc86 === _0x588cea(0x1cc);
    }, isZeroLengthAndOverflowHidden = (_0x4a6153, _0x19bf0f, _0x17022f) => {
        return _0x4a6153 <= 0x0 && _0x17022f || _0x19bf0f <= 0x0 && _0x17022f;
    }, elHasNoOffsetWidthOrHeight = _0x1b0a17 => {
        return elOffsetWidth(_0x1b0a17) <= 0x0 || elOffsetHeight(_0x1b0a17) <= 0x0;
    }, elOffsetWidth = _0x2e0ee3 => {
        const _0x4aea2f = _0xe40738;
        return _0x2e0ee3[0x0][_0x4aea2f(0x1cd)];
    }, elOffsetHeight = _0x17a56e => {
        const _0x13a2db = _0xe40738;
        return _0x17a56e[0x0][_0x13a2db(0x1ce)];
    }, elHasVisibilityHiddenOrCollapse = _0x24927f => {
        return elHasVisibilityHidden(_0x24927f) || elHasVisibilityCollapse(_0x24927f);
    }, elHasVisibilityHidden = _0x35b864 => {
        const _0x3dbf18 = _0xe40738;
        return _0x35b864[_0x3dbf18(0x1cf)](_0x3dbf18(0x1d0)) === _0x3dbf18(0x1b8);
    }, elHasVisibilityCollapse = _0x1d576e => {
        const _0x29db9b = _0xe40738;
        return _0x1d576e[_0x29db9b(0x1cf)](_0x29db9b(0x1d0)) === _0x29db9b(0x1d1);
    }, elHasOpacityZero = _0xc746a6 => {
        const _0x26aaec = _0xe40738;
        return _0xc746a6[_0x26aaec(0x1cf)](_0x26aaec(0x1d2)) === '0';
    }, elHasDisplayNone = _0x306264 => {
        const _0x38adb3 = _0xe40738;
        return _0x306264[_0x38adb3(0x1cf)]('display') === 'none';
    }, elHasDisplayInline = _0x3f41c4 => {
        const _0x220ee7 = _0xe40738;
        return _0x3f41c4[_0x220ee7(0x1cf)](_0x220ee7(0x1d3)) === _0x220ee7(0x1d4);
    }, elHasOverflowHidden = function (_0x4bee58) {
        const _0x22e76e = _0xe40738, _0x263c0c = [
                _0x4bee58[_0x22e76e(0x1cf)](_0x22e76e(0x1d5)),
                _0x4bee58[_0x22e76e(0x1cf)](_0x22e76e(0x1d6)),
                _0x4bee58[_0x22e76e(0x1cf)](_0x22e76e(0x1d7))
            ];
        return _0x263c0c[_0x22e76e(0x1d8)](_0x22e76e(0x1b8));
    }, elHasPositionRelative = _0xb06a96 => {
        const _0xd0ba1a = _0xe40738;
        return _0xb06a96[_0xd0ba1a(0x1cf)](_0xd0ba1a(0x1d9)) === _0xd0ba1a(0x1da);
    }, elHasPositionAbsolute = _0x2dff79 => {
        const _0x4f56bf = _0xe40738;
        return _0x2dff79['css'](_0x4f56bf(0x1d9)) === _0x4f56bf(0x1db);
    }, elHasClippableOverflow = function (_0x192683) {
        const _0x87b8d7 = _0xe40738;
        return OVERFLOW_PROPS[_0x87b8d7(0x1d8)](_0x192683[_0x87b8d7(0x1cf)](_0x87b8d7(0x1d5))) || OVERFLOW_PROPS[_0x87b8d7(0x1d8)](_0x192683['css'](_0x87b8d7(0x1d6))) || OVERFLOW_PROPS[_0x87b8d7(0x1d8)](_0x192683[_0x87b8d7(0x1cf)](_0x87b8d7(0x1d7)));
    }, canClipContent = function (_0x37ae99, _0x1ecf18) {
        const _0x27b911 = _0xe40738;
        if (!elHasClippableOverflow(_0x1ecf18))
            return ![];
        const _0x565204 = _0x37ae99['offsetParent']();
        if (!elHasPositionRelative(_0x37ae99) && $elements[_0x27b911(0x1dc)](_0x1ecf18, _0x565204))
            return ![];
        if (elHasPositionAbsolute(_0x565204) && $elements['isChild'](_0x1ecf18, _0x565204))
            return ![];
        return !![];
    }, elOrAncestorIsFixedOrSticky = function (_0x4e1ad1) {
        return !!$elements['getFirstFixedOrStickyPositionParent'](_0x4e1ad1);
    }, elAtCenterPoint = function (_0x55c169) {
        const _0x1c62e5 = _0xe40738, _0x1994e8 = $document[_0x1c62e5(0x1dd)](_0x55c169['get'](0x0)), _0x9875c4 = $coordinates[_0x1c62e5(0x1de)](_0x55c169), {
                topCenter: _0x30b7c3,
                leftCenter: _0x5a2486
            } = _0x9875c4[_0x1c62e5(0x1df)], _0x176568 = $coordinates[_0x1c62e5(0x1e0)](_0x1994e8, _0x5a2486, _0x30b7c3);
        if (_0x176568)
            return $jquery[_0x1c62e5(0x1be)](_0x176568);
    }, elDescendentsHavePositionFixedOrAbsolute = function (_0x43472b, _0x20fed6) {
        const _0x393256 = _0xe40738, _0x3e745c = $elements[_0x393256(0x1e1)](_0x20fed6[0x0], _0x43472b), _0x1cc903 = $jquery[_0x393256(0x1be)](_0x3e745c)[_0x393256(0x1e2)](_0x20fed6);
        return _[_0x393256(0x1e3)](_0x1cc903['get'](), _0x7b8adf => {
            const _0x109562 = _0x393256;
            return fixedOrAbsoluteRe[_0x109562(0x1e4)]($jquery[_0x109562(0x1be)](_0x7b8adf)[_0x109562(0x1cf)](_0x109562(0x1d9)));
        });
    }, elHasVisibleChild = function (_0x34d0f2) {
        const _0x311f92 = _0xe40738;
        return _[_0x311f92(0x1e3)](_0x34d0f2[_0x311f92(0x1e5)](), _0x594717 => {
            return isVisible(_0x594717);
        });
    }, elIsNotElementFromPoint = function (_0x17133c) {
        const _0x535062 = _0xe40738, _0x2a62f8 = elAtCenterPoint(_0x17133c);
        if ($elements['isDescendent'](_0x17133c, _0x2a62f8))
            return ![];
        if ((_0x17133c[_0x535062(0x1cf)](_0x535062(0x1e6)) === 'none' || _0x17133c[_0x535062(0x1e7)]()[_0x535062(0x1cf)](_0x535062(0x1e6)) === 'none') && (_0x2a62f8 && $elements[_0x535062(0x1dc)](_0x17133c, _0x2a62f8)))
            return ![];
        return !![];
    }, elIsOutOfBoundsOfAncestorsOverflow = function (_0xfc2b1a, _0x466cad = $elements['getParent'](_0xfc2b1a)) {
        const _0x1f9a5e = _0xe40738;
        if ($elements[_0x1f9a5e(0x1e8)](_0x466cad))
            return ![];
        const _0x4bdc98 = $coordinates[_0x1f9a5e(0x1de)](_0xfc2b1a);
        if (canClipContent(_0xfc2b1a, _0x466cad)) {
            const _0x12ff19 = $coordinates['getElementPositioning'](_0x466cad);
            if (_0x4bdc98[_0x1f9a5e(0x1e9)][_0x1f9a5e(0x1ea)] > _0x12ff19[_0x1f9a5e(0x1eb)] + _0x12ff19[_0x1f9a5e(0x1e9)][_0x1f9a5e(0x1ea)] || _0x4bdc98['fromElWindow'][_0x1f9a5e(0x1ea)] + _0x4bdc98[_0x1f9a5e(0x1eb)] < _0x12ff19['fromElWindow']['left'] || _0x4bdc98['fromElWindow'][_0x1f9a5e(0x1ec)] > _0x12ff19['height'] + _0x12ff19[_0x1f9a5e(0x1e9)]['top'] || _0x4bdc98[_0x1f9a5e(0x1e9)]['top'] + _0x4bdc98[_0x1f9a5e(0x1ed)] < _0x12ff19['fromElWindow']['top'])
                return !![];
        }
        return elIsOutOfBoundsOfAncestorsOverflow(_0xfc2b1a, $elements[_0x1f9a5e(0x1ee)](_0x466cad));
    }, elIsHiddenByAncestors = function (_0x525a5d, _0x4a1785, _0x49202a = _0x525a5d) {
        const _0x179f49 = _0xe40738, _0x547180 = $elements[_0x179f49(0x1ee)](_0x525a5d);
        if ($elements['isUndefinedOrHTMLBodyDoc'](_0x547180))
            return ![];
        if (elHasOpacityZero(_0x547180) && _0x4a1785)
            return !![];
        if (elHasOverflowHidden(_0x547180) && elHasNoEffectiveWidthOrHeight(_0x547180))
            return !elDescendentsHavePositionFixedOrAbsolute(_0x547180, _0x49202a);
        return elIsHiddenByAncestors(_0x547180, _0x4a1785, _0x49202a);
    }, parentHasNoOffsetWidthOrHeightAndOverflowHidden = function (_0x4f4daf) {
        if ($elements['isUndefinedOrHTMLBodyDoc'](_0x4f4daf))
            return ![];
        if (elHasOverflowHidden(_0x4f4daf) && elHasNoEffectiveWidthOrHeight(_0x4f4daf))
            return _0x4f4daf;
        return parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements['getParent'](_0x4f4daf));
    }, parentHasDisplayNone = function (_0x22c5e5) {
        const _0x58b564 = _0xe40738;
        if (!_0x22c5e5[_0x58b564(0x1c5)] || $document['isDocument'](_0x22c5e5))
            return ![];
        if (elHasDisplayNone(_0x22c5e5))
            return _0x22c5e5;
        return parentHasDisplayNone($elements[_0x58b564(0x1ee)](_0x22c5e5));
    }, parentHasVisibilityHidden = function (_0x185f80) {
        const _0x19423a = _0xe40738;
        if (!_0x185f80[_0x19423a(0x1c5)] || $document[_0x19423a(0x1ef)](_0x185f80))
            return ![];
        if (elHasVisibilityHidden(_0x185f80))
            return _0x185f80;
        return parentHasVisibilityHidden($elements[_0x19423a(0x1ee)](_0x185f80));
    }, parentHasVisibilityCollapse = function (_0x1e82c9) {
        const _0x5f44f2 = _0xe40738;
        if (!_0x1e82c9[_0x5f44f2(0x1c5)] || $document[_0x5f44f2(0x1ef)](_0x1e82c9))
            return ![];
        if (elHasVisibilityCollapse(_0x1e82c9))
            return _0x1e82c9;
        return parentHasVisibilityCollapse($elements[_0x5f44f2(0x1ee)](_0x1e82c9));
    }, parentHasOpacityZero = function (_0xf929ad) {
        const _0x5e567f = _0xe40738;
        if (!_0xf929ad['length'] || $document['isDocument'](_0xf929ad))
            return ![];
        if (elHasOpacityZero(_0xf929ad))
            return _0xf929ad;
        return parentHasOpacityZero(_0xf929ad[_0x5e567f(0x1e7)]());
    }, getReasonIsHidden = function (_0x51d58c, _0x10a139 = { 'checkOpacity': !![] }) {
        const _0xd43b2 = _0xe40738, _0x3a9429 = $elements[_0xd43b2(0x1f0)](_0x51d58c, _0xd43b2(0x1f1));
        let _0x5a73bf = elOffsetWidth(_0x51d58c), _0x53a771 = elOffsetHeight(_0x51d58c), _0x11977f, _0x1ed9bf;
        if (elHasDisplayNone(_0x51d58c))
            return _0xd43b2(0x1f2) + _0x3a9429 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`display:\x20none`';
        if (_0x11977f = parentHasDisplayNone($elements[_0xd43b2(0x1ee)](_0x51d58c)))
            return _0x1ed9bf = $elements[_0xd43b2(0x1f0)](_0x11977f, _0xd43b2(0x1f1)), _0xd43b2(0x1f2) + _0x3a9429 + '`\x20is\x20not\x20visible\x20because\x20its\x20parent\x20`' + _0x1ed9bf + '`\x20has\x20CSS\x20property:\x20`display:\x20none`';
        if (_0x11977f = parentHasVisibilityHidden($elements[_0xd43b2(0x1ee)](_0x51d58c)))
            return _0x1ed9bf = $elements[_0xd43b2(0x1f0)](_0x11977f, _0xd43b2(0x1f1)), 'This\x20element\x20`' + _0x3a9429 + _0xd43b2(0x1f3) + _0x1ed9bf + _0xd43b2(0x1f4);
        if (_0x11977f = parentHasVisibilityCollapse($elements[_0xd43b2(0x1ee)](_0x51d58c)))
            return _0x1ed9bf = $elements[_0xd43b2(0x1f0)](_0x11977f, 'short'), _0xd43b2(0x1f2) + _0x3a9429 + _0xd43b2(0x1f3) + _0x1ed9bf + _0xd43b2(0x1f5);
        if ($elements[_0xd43b2(0x1f6)](_0x51d58c))
            return 'This\x20element\x20`' + _0x3a9429 + _0xd43b2(0x1f7);
        if (elHasVisibilityHidden(_0x51d58c))
            return _0xd43b2(0x1f2) + _0x3a9429 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`visibility:\x20hidden`';
        if (elHasVisibilityCollapse(_0x51d58c))
            return 'This\x20element\x20`' + _0x3a9429 + _0xd43b2(0x1f8);
        if (elHasOpacityZero(_0x51d58c) && _0x10a139[_0xd43b2(0x1c8)])
            return _0xd43b2(0x1f2) + _0x3a9429 + _0xd43b2(0x1f9);
        if ((_0x11977f = parentHasOpacityZero(_0x51d58c[_0xd43b2(0x1e7)]())) && _0x10a139['checkOpacity'])
            return _0x1ed9bf = $elements[_0xd43b2(0x1f0)](_0x11977f, _0xd43b2(0x1f1)), _0xd43b2(0x1f2) + _0x3a9429 + _0xd43b2(0x1f3) + _0x1ed9bf + '`\x20has\x20CSS\x20property:\x20`opacity:\x200`';
        if (elHasNoOffsetWidthOrHeight(_0x51d58c))
            return 'This\x20element\x20`' + _0x3a9429 + _0xd43b2(0x1fa) + _0x5a73bf + '\x20x\x20' + _0x53a771 + _0xd43b2(0x1fb);
        const _0xf51560 = $transform[_0xd43b2(0x1c6)](_0x51d58c);
        if (_0xf51560 === _0xd43b2(0x1fc))
            return _0xd43b2(0x1f2) + _0x3a9429 + _0xd43b2(0x1fd);
        if (_0xf51560 === 'backface')
            return _0xd43b2(0x1f2) + _0x3a9429 + _0xd43b2(0x1fe);
        if (_0x11977f = parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements[_0xd43b2(0x1ee)](_0x51d58c)))
            return _0x1ed9bf = $elements[_0xd43b2(0x1f0)](_0x11977f, _0xd43b2(0x1f1)), _0x5a73bf = elOffsetWidth(_0x11977f), _0x53a771 = elOffsetHeight(_0x11977f), _0xd43b2(0x1f2) + _0x3a9429 + _0xd43b2(0x1f3) + _0x1ed9bf + '`\x20has\x20CSS\x20property:\x20`overflow:\x20hidden`\x20and\x20an\x20effective\x20width\x20and\x20height\x20of:\x20`' + _0x5a73bf + '\x20x\x20' + _0x53a771 + _0xd43b2(0x1fb);
        if (elOrAncestorIsFixedOrSticky(_0x51d58c)) {
            if (elIsNotElementFromPoint(_0x51d58c)) {
                const _0x5e0736 = $elements[_0xd43b2(0x1f0)](elAtCenterPoint(_0x51d58c));
                if (_0x5e0736)
                    return _0xd43b2(0x1f2) + _0x3a9429 + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`position:\x20fixed`\x20and\x20it\x27s\x20being\x20covered\x20by\x20another\x20element:\x0a\x0a`' + _0x5e0736 + '`';
                return _0xd43b2(0x1f2) + _0x3a9429 + _0xd43b2(0x1ff);
            }
        } else {
            if (elIsOutOfBoundsOfAncestorsOverflow(_0x51d58c))
                return _0xd43b2(0x1f2) + _0x3a9429 + _0xd43b2(0x200);
        }
        return _0xd43b2(0x1f2) + _0x3a9429 + _0xd43b2(0x201);
    };
function _0x295e(_0x1bafca, _0x2c58c8) {
    return _0x295e = function (_0x5d0632, _0x295ef4) {
        _0x5d0632 = _0x5d0632 - 0x1a8;
        let _0x45bcb7 = _0x5d06[_0x5d0632];
        return _0x45bcb7;
    }, _0x295e(_0x1bafca, _0x2c58c8);
}
module['exports'] = {
    'isVisible': isVisible,
    'isHidden': isHidden,
    'parentHasDisplayNone': parentHasDisplayNone,
    'getReasonIsHidden': getReasonIsHidden
};
