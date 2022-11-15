const _ = require(_0x26569c(163)), $jquery = require('./jquery'), $document = require(_0x26569c(164)), $elements = require(_0x26569c(165)), $coordinates = require(_0x26569c(166)), $transform = require('./transform'), fixedOrAbsoluteRe = /(fixed|absolute)/, OVERFLOW_PROPS = [
        _0x26569c(167),
        _0x26569c(168),
        _0x26569c(169)
    ], isVisible = _0x60ff20 => {
        return !isHidden(_0x60ff20, 'isVisible()');
    }, isHidden = (_0x54d82d, _0x597373 = 'isHidden()', _0x1f3227 = { 'checkOpacity': !![] }) => {
        const _0x16bc5f = _0x26569c;
        if (!$elements['isElement'](_0x54d82d))
            throw new Error('`Cypress.dom.' + _0x597373 + _0x16bc5f(170) + _0x54d82d + '`');
        const _0x9ffde8 = $jquery[_0x16bc5f(171)](_0x54d82d);
        if ($elements[_0x16bc5f(172)](_0x54d82d) || $elements[_0x16bc5f(173)](_0x54d82d))
            return ![];
        if ($elements[_0x16bc5f(174)](_0x54d82d) || $elements['isOptgroup'](_0x54d82d)) {
            if (elHasDisplayNone(_0x9ffde8))
                return !![];
            const _0x12f78f = $elements[_0x16bc5f(175)](_0x9ffde8, _0x16bc5f(176));
            if (_0x12f78f && _0x12f78f[_0x16bc5f(177)])
                return isHidden(_0x12f78f[0], _0x597373);
        }
        if (elHasNoEffectiveWidthOrHeight(_0x9ffde8)) {
            if (elHasDisplayInline(_0x9ffde8))
                return !elHasVisibleChild(_0x9ffde8);
            return !![];
        }
        if (elHasVisibilityHiddenOrCollapse(_0x9ffde8))
            return !![];
        if ($transform['detectVisibility'](_0x9ffde8) !== _0x16bc5f(178))
            return !![];
        if (elHasOpacityZero(_0x9ffde8) && _0x1f3227['checkOpacity'])
            return !![];
        if (elIsHiddenByAncestors(_0x9ffde8, _0x1f3227[_0x16bc5f(179)]))
            return !![];
        if (elOrAncestorIsFixedOrSticky(_0x9ffde8))
            return elIsNotElementFromPoint(_0x9ffde8);
        return elIsOutOfBoundsOfAncestorsOverflow(_0x9ffde8);
    }, elHasNoEffectiveWidthOrHeight = _0x3bc6fa => {
        const _0x43336a = _0x26569c, _0x449e60 = _0x3bc6fa[0], _0x399cd4 = getComputedStyle(_0x449e60), _0x507d03 = _0x399cd4[_0x43336a(180)]('transform'), _0x1107e9 = elOffsetWidth(_0x3bc6fa), _0x2b7055 = elOffsetHeight(_0x3bc6fa), _0x1e75c4 = elHasOverflowHidden(_0x3bc6fa);
        return isZeroLengthAndTransformNone(_0x1107e9, _0x2b7055, _0x507d03) || isZeroLengthAndOverflowHidden(_0x1107e9, _0x2b7055, _0x1e75c4) || _0x449e60[_0x43336a(181)]()[_0x43336a(177)] <= 0;
    }, isZeroLengthAndTransformNone = (_0x467ab3, _0x4c4140, _0x2c0129) => {
        const _0xdc61dc = _0x26569c;
        return _0x467ab3 <= 0 && _0x2c0129 === _0xdc61dc(182) || _0x4c4140 <= 0 && _0x2c0129 === _0xdc61dc(182);
    }, isZeroLengthAndOverflowHidden = (_0x2066bd, _0x561912, _0x17ce68) => {
        return _0x2066bd <= 0 && _0x17ce68 || _0x561912 <= 0 && _0x17ce68;
    }, elHasNoOffsetWidthOrHeight = _0x3eee53 => {
        return elOffsetWidth(_0x3eee53) <= 0 || elOffsetHeight(_0x3eee53) <= 0;
    }, elOffsetWidth = _0x32f6e9 => {
        const _0x4b0bff = _0x26569c;
        return _0x32f6e9[0][_0x4b0bff(183)];
    }, elOffsetHeight = _0x462fe0 => {
        const _0x5be37c = _0x26569c;
        return _0x462fe0[0][_0x5be37c(184)];
    }, elHasVisibilityHiddenOrCollapse = _0x154afa => {
        return elHasVisibilityHidden(_0x154afa) || elHasVisibilityCollapse(_0x154afa);
    }, elHasVisibilityHidden = _0x577ebd => {
        const _0x2ff1e5 = _0x26569c;
        return _0x577ebd[_0x2ff1e5(185)](_0x2ff1e5(186)) === _0x2ff1e5(167);
    }, elHasVisibilityCollapse = _0x17f8f1 => {
        const _0x4d65e1 = _0x26569c;
        return _0x17f8f1['css'](_0x4d65e1(186)) === 'collapse';
    }, elHasOpacityZero = _0x3ada19 => {
        return _0x3ada19['css']('opacity') === '0';
    }, elHasDisplayNone = _0x46b724 => {
        const _0x28aaaf = _0x26569c;
        return _0x46b724[_0x28aaaf(185)](_0x28aaaf(187)) === _0x28aaaf(182);
    }, elHasDisplayInline = _0x3f09e5 => {
        const _0x4bd9b6 = _0x26569c;
        return _0x3f09e5['css'](_0x4bd9b6(187)) === 'inline';
    }, elHasOverflowHidden = function (_0x3ee390) {
        const _0x156e2d = _0x26569c, _0xbadbbd = [
                _0x3ee390['css'](_0x156e2d(188)),
                _0x3ee390[_0x156e2d(185)](_0x156e2d(189)),
                _0x3ee390[_0x156e2d(185)](_0x156e2d(190))
            ];
        return _0xbadbbd['includes'](_0x156e2d(167));
    }, elHasPositionRelative = _0x2f7923 => {
        const _0x3f75ad = _0x26569c;
        return _0x2f7923['css'](_0x3f75ad(191)) === _0x3f75ad(192);
    }, elHasPositionAbsolute = _0x2cce4f => {
        const _0x4d4c58 = _0x26569c;
        return _0x2cce4f[_0x4d4c58(185)]('position') === _0x4d4c58(193);
    }, elHasClippableOverflow = function (_0x1c3141) {
        const _0x5347c2 = _0x26569c;
        return OVERFLOW_PROPS[_0x5347c2(194)](_0x1c3141[_0x5347c2(185)](_0x5347c2(188))) || OVERFLOW_PROPS[_0x5347c2(194)](_0x1c3141['css'](_0x5347c2(189))) || OVERFLOW_PROPS[_0x5347c2(194)](_0x1c3141['css'](_0x5347c2(190)));
    }, canClipContent = function (_0x5d2e8b, _0xbcbe60) {
        const _0xb8ef59 = _0x26569c;
        if (!elHasClippableOverflow(_0xbcbe60))
            return ![];
        const _0x2ca3e6 = _0x5d2e8b[_0xb8ef59(195)]();
        if (!elHasPositionRelative(_0x5d2e8b) && $elements['isAncestor'](_0xbcbe60, _0x2ca3e6))
            return ![];
        if (elHasPositionAbsolute(_0x2ca3e6) && $elements[_0xb8ef59(196)](_0xbcbe60, _0x2ca3e6))
            return ![];
        return !![];
    }, elOrAncestorIsFixedOrSticky = function (_0x2658e3) {
        const _0x1de86c = _0x26569c;
        return !!$elements[_0x1de86c(197)](_0x2658e3);
    }, elAtCenterPoint = function (_0x449924) {
        const _0x4a9a40 = _0x26569c, _0x5152c7 = $document[_0x4a9a40(198)](_0x449924[_0x4a9a40(199)](0)), _0x2456b2 = $coordinates[_0x4a9a40(200)](_0x449924), {
                topCenter: _0x37229b,
                leftCenter: _0x49c50d
            } = _0x2456b2[_0x4a9a40(201)], _0xcc9e77 = $coordinates[_0x4a9a40(202)](_0x5152c7, _0x49c50d, _0x37229b);
        if (_0xcc9e77)
            return $jquery[_0x4a9a40(171)](_0xcc9e77);
    }, elDescendentsHavePositionFixedOrAbsolute = function (_0x5d9e1d, _0x5da71b) {
        const _0x25538b = _0x26569c, _0x41bb7d = $elements[_0x25538b(203)](_0x5da71b[0], _0x5d9e1d), _0x1eba3c = $jquery[_0x25538b(171)](_0x41bb7d)[_0x25538b(204)](_0x5da71b);
        return _[_0x25538b(205)](_0x1eba3c['get'](), _0x3a6ea1 => {
            const _0x55ea62 = _0x25538b;
            return fixedOrAbsoluteRe[_0x55ea62(206)]($jquery[_0x55ea62(171)](_0x3a6ea1)[_0x55ea62(185)]('position'));
        });
    }, elHasVisibleChild = function (_0x55c432) {
        const _0x102596 = _0x26569c;
        return _['some'](_0x55c432[_0x102596(207)](), _0x439166 => {
            return isVisible(_0x439166);
        });
    }, elIsNotElementFromPoint = function (_0x364f20) {
        const _0x4a4285 = _0x26569c, _0x11ff3f = elAtCenterPoint(_0x364f20);
        if ($elements[_0x4a4285(208)](_0x364f20, _0x11ff3f))
            return ![];
        if ((_0x364f20[_0x4a4285(185)]('pointer-events') === _0x4a4285(182) || _0x364f20[_0x4a4285(209)]()[_0x4a4285(185)](_0x4a4285(210)) === _0x4a4285(182)) && (_0x11ff3f && $elements[_0x4a4285(211)](_0x364f20, _0x11ff3f)))
            return ![];
        return !![];
    }, elIsOutOfBoundsOfAncestorsOverflow = function (_0xc2b74, _0x2ac616 = $elements[_0x26569c(212)](_0xc2b74)) {
        const _0x44519f = _0x26569c;
        if ($elements['isUndefinedOrHTMLBodyDoc'](_0x2ac616))
            return ![];
        const _0x7dfc0e = $coordinates[_0x44519f(200)](_0xc2b74);
        if (canClipContent(_0xc2b74, _0x2ac616)) {
            const _0x2373aa = $coordinates[_0x44519f(200)](_0x2ac616);
            if (_0x7dfc0e[_0x44519f(213)][_0x44519f(214)] > _0x2373aa[_0x44519f(215)] + _0x2373aa[_0x44519f(213)][_0x44519f(214)] || _0x7dfc0e[_0x44519f(213)]['left'] + _0x7dfc0e[_0x44519f(215)] < _0x2373aa['fromElWindow']['left'] || _0x7dfc0e[_0x44519f(213)][_0x44519f(216)] > _0x2373aa['height'] + _0x2373aa[_0x44519f(213)]['top'] || _0x7dfc0e[_0x44519f(213)][_0x44519f(216)] + _0x7dfc0e[_0x44519f(217)] < _0x2373aa[_0x44519f(213)]['top'])
                return !![];
        }
        return elIsOutOfBoundsOfAncestorsOverflow(_0xc2b74, $elements[_0x44519f(212)](_0x2ac616));
    }, elIsHiddenByAncestors = function (_0xbe5d72, _0x355812, _0x5460d5 = _0xbe5d72) {
        const _0x5499eb = _0x26569c, _0x4baf22 = $elements['getParent'](_0xbe5d72);
        if ($elements[_0x5499eb(218)](_0x4baf22))
            return ![];
        if (elHasOpacityZero(_0x4baf22) && _0x355812)
            return !![];
        if (elHasOverflowHidden(_0x4baf22) && elHasNoEffectiveWidthOrHeight(_0x4baf22))
            return !elDescendentsHavePositionFixedOrAbsolute(_0x4baf22, _0x5460d5);
        return elIsHiddenByAncestors(_0x4baf22, _0x355812, _0x5460d5);
    }, parentHasNoOffsetWidthOrHeightAndOverflowHidden = function (_0x5a0fcb) {
        const _0x1eada0 = _0x26569c;
        if ($elements['isUndefinedOrHTMLBodyDoc'](_0x5a0fcb))
            return ![];
        if (elHasOverflowHidden(_0x5a0fcb) && elHasNoEffectiveWidthOrHeight(_0x5a0fcb))
            return _0x5a0fcb;
        return parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements[_0x1eada0(212)](_0x5a0fcb));
    }, parentHasDisplayNone = function (_0xd7ee7e) {
        const _0xbc08e3 = _0x26569c;
        if (!_0xd7ee7e[_0xbc08e3(177)] || $document[_0xbc08e3(219)](_0xd7ee7e))
            return ![];
        if (elHasDisplayNone(_0xd7ee7e))
            return _0xd7ee7e;
        return parentHasDisplayNone($elements[_0xbc08e3(212)](_0xd7ee7e));
    }, parentHasVisibilityHidden = function (_0x4ffe9f) {
        const _0x10f641 = _0x26569c;
        if (!_0x4ffe9f[_0x10f641(177)] || $document['isDocument'](_0x4ffe9f))
            return ![];
        if (elHasVisibilityHidden(_0x4ffe9f))
            return _0x4ffe9f;
        return parentHasVisibilityHidden($elements[_0x10f641(212)](_0x4ffe9f));
    }, parentHasVisibilityCollapse = function (_0x34415a) {
        const _0x4565fe = _0x26569c;
        if (!_0x34415a[_0x4565fe(177)] || $document[_0x4565fe(219)](_0x34415a))
            return ![];
        if (elHasVisibilityCollapse(_0x34415a))
            return _0x34415a;
        return parentHasVisibilityCollapse($elements[_0x4565fe(212)](_0x34415a));
    }, parentHasOpacityZero = function (_0x35b2a2) {
        const _0x143951 = _0x26569c;
        if (!_0x35b2a2['length'] || $document[_0x143951(219)](_0x35b2a2))
            return ![];
        if (elHasOpacityZero(_0x35b2a2))
            return _0x35b2a2;
        return parentHasOpacityZero(_0x35b2a2[_0x143951(209)]());
    }, getReasonIsHidden = function (_0x2f25b9, _0x14d988 = { 'checkOpacity': !![] }) {
        const _0x520d98 = _0x26569c, _0x4c5c9a = $elements[_0x520d98(220)](_0x2f25b9, _0x520d98(221));
        let _0x37f9e5 = elOffsetWidth(_0x2f25b9), _0x1e7f66 = elOffsetHeight(_0x2f25b9), _0x5aa891, _0x516b9f;
        if (elHasDisplayNone(_0x2f25b9))
            return _0x520d98(222) + _0x4c5c9a + _0x520d98(223);
        if (_0x5aa891 = parentHasDisplayNone($elements[_0x520d98(212)](_0x2f25b9)))
            return _0x516b9f = $elements[_0x520d98(220)](_0x5aa891, _0x520d98(221)), _0x520d98(222) + _0x4c5c9a + _0x520d98(224) + _0x516b9f + '` has CSS property: `display: none`';
        if (_0x5aa891 = parentHasVisibilityHidden($elements[_0x520d98(212)](_0x2f25b9)))
            return _0x516b9f = $elements[_0x520d98(220)](_0x5aa891, _0x520d98(221)), _0x520d98(222) + _0x4c5c9a + '` is not visible because its parent `' + _0x516b9f + _0x520d98(225);
        if (_0x5aa891 = parentHasVisibilityCollapse($elements[_0x520d98(212)](_0x2f25b9)))
            return _0x516b9f = $elements['stringify'](_0x5aa891, _0x520d98(221)), 'This element `' + _0x4c5c9a + _0x520d98(224) + _0x516b9f + _0x520d98(226);
        if ($elements[_0x520d98(227)](_0x2f25b9))
            return _0x520d98(222) + _0x4c5c9a + _0x520d98(228);
        if (elHasVisibilityHidden(_0x2f25b9))
            return _0x520d98(222) + _0x4c5c9a + _0x520d98(229);
        if (elHasVisibilityCollapse(_0x2f25b9))
            return _0x520d98(222) + _0x4c5c9a + _0x520d98(230);
        if (elHasOpacityZero(_0x2f25b9) && _0x14d988[_0x520d98(179)])
            return 'This element `' + _0x4c5c9a + '` is not visible because it has CSS property: `opacity: 0`';
        if ((_0x5aa891 = parentHasOpacityZero(_0x2f25b9[_0x520d98(209)]())) && _0x14d988[_0x520d98(179)])
            return _0x516b9f = $elements[_0x520d98(220)](_0x5aa891, 'short'), 'This element `' + _0x4c5c9a + _0x520d98(224) + _0x516b9f + _0x520d98(231);
        if (elHasNoOffsetWidthOrHeight(_0x2f25b9))
            return _0x520d98(222) + _0x4c5c9a + '` is not visible because it has an effective width and height of: `' + _0x37f9e5 + _0x520d98(232) + _0x1e7f66 + '` pixels.';
        const _0x18d5eb = $transform[_0x520d98(233)](_0x2f25b9);
        if (_0x18d5eb === _0x520d98(234))
            return _0x520d98(222) + _0x4c5c9a + _0x520d98(235);
        if (_0x18d5eb === 'backface')
            return _0x520d98(222) + _0x4c5c9a + '` is not visible because it is rotated and its backface is hidden.';
        if (_0x5aa891 = parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements['getParent'](_0x2f25b9)))
            return _0x516b9f = $elements[_0x520d98(220)](_0x5aa891, _0x520d98(221)), _0x37f9e5 = elOffsetWidth(_0x5aa891), _0x1e7f66 = elOffsetHeight(_0x5aa891), _0x520d98(222) + _0x4c5c9a + _0x520d98(224) + _0x516b9f + _0x520d98(236) + _0x37f9e5 + _0x520d98(232) + _0x1e7f66 + '` pixels.';
        if (elOrAncestorIsFixedOrSticky(_0x2f25b9)) {
            if (elIsNotElementFromPoint(_0x2f25b9)) {
                const _0x2ae3c3 = $elements[_0x520d98(220)](elAtCenterPoint(_0x2f25b9));
                if (_0x2ae3c3)
                    return 'This element `' + _0x4c5c9a + '` is not visible because it has CSS property: `position: fixed` and it\'s being covered by another element:\n\n`' + _0x2ae3c3 + '`';
                return _0x520d98(222) + _0x4c5c9a + _0x520d98(237);
            }
        } else {
            if (elIsOutOfBoundsOfAncestorsOverflow(_0x2f25b9))
                return _0x520d98(222) + _0x4c5c9a + _0x520d98(238);
        }
        return _0x520d98(222) + _0x4c5c9a + _0x520d98(239);
    };
module['exports'] = {
    'isVisible': isVisible,
    'isHidden': isHidden,
    'parentHasDisplayNone': parentHasDisplayNone,
    'getReasonIsHidden': getReasonIsHidden
};