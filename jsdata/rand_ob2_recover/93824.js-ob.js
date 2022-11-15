const _ = require(_0xe40738(435)), $jquery = require(_0xe40738(436)), $document = require(_0xe40738(437)), $elements = require(_0xe40738(438)), $coordinates = require(_0xe40738(439)), $transform = require('./transform'), fixedOrAbsoluteRe = /(fixed|absolute)/, OVERFLOW_PROPS = [
        _0xe40738(440),
        _0xe40738(441),
        'auto'
    ], isVisible = _0x239328 => {
        const _0x3024e7 = _0xe40738;
        return !isHidden(_0x239328, _0x3024e7(442));
    }, isHidden = (_0x52b484, _0xf90cbf = _0xe40738(443), _0x1e85cd = { 'checkOpacity': !![] }) => {
        const _0x27f10b = _0xe40738;
        if (!$elements[_0x27f10b(444)](_0x52b484))
            throw new Error('`Cypress.dom.' + _0xf90cbf + _0x27f10b(445) + _0x52b484 + '`');
        const _0x10a894 = $jquery[_0x27f10b(446)](_0x52b484);
        if ($elements[_0x27f10b(447)](_0x52b484) || $elements[_0x27f10b(448)](_0x52b484))
            return ![];
        if ($elements[_0x27f10b(449)](_0x52b484) || $elements[_0x27f10b(450)](_0x52b484)) {
            if (elHasDisplayNone(_0x10a894))
                return !![];
            const _0x5214c8 = $elements[_0x27f10b(451)](_0x10a894, _0x27f10b(452));
            if (_0x5214c8 && _0x5214c8[_0x27f10b(453)])
                return isHidden(_0x5214c8[0], _0xf90cbf);
        }
        if (elHasNoEffectiveWidthOrHeight(_0x10a894)) {
            if (elHasDisplayInline(_0x10a894))
                return !elHasVisibleChild(_0x10a894);
            return !![];
        }
        if (elHasVisibilityHiddenOrCollapse(_0x10a894))
            return !![];
        if ($transform[_0x27f10b(454)](_0x10a894) !== _0x27f10b(455))
            return !![];
        if (elHasOpacityZero(_0x10a894) && _0x1e85cd[_0x27f10b(456)])
            return !![];
        if (elIsHiddenByAncestors(_0x10a894, _0x1e85cd[_0x27f10b(456)]))
            return !![];
        if (elOrAncestorIsFixedOrSticky(_0x10a894))
            return elIsNotElementFromPoint(_0x10a894);
        return elIsOutOfBoundsOfAncestorsOverflow(_0x10a894);
    }, elHasNoEffectiveWidthOrHeight = _0x41dc42 => {
        const _0x235139 = _0xe40738, _0xd22367 = _0x41dc42[0], _0x3aef2 = getComputedStyle(_0xd22367), _0x12f806 = _0x3aef2[_0x235139(457)](_0x235139(458)), _0x2bdfd6 = elOffsetWidth(_0x41dc42), _0xefbb32 = elOffsetHeight(_0x41dc42), _0x2325bc = elHasOverflowHidden(_0x41dc42);
        return isZeroLengthAndTransformNone(_0x2bdfd6, _0xefbb32, _0x12f806) || isZeroLengthAndOverflowHidden(_0x2bdfd6, _0xefbb32, _0x2325bc) || _0xd22367[_0x235139(459)]()['length'] <= 0;
    }, isZeroLengthAndTransformNone = (_0x45ba53, _0x2818bd, _0x2bbc86) => {
        const _0x588cea = _0xe40738;
        return _0x45ba53 <= 0 && _0x2bbc86 === _0x588cea(460) || _0x2818bd <= 0 && _0x2bbc86 === _0x588cea(460);
    }, isZeroLengthAndOverflowHidden = (_0x4a6153, _0x19bf0f, _0x17022f) => {
        return _0x4a6153 <= 0 && _0x17022f || _0x19bf0f <= 0 && _0x17022f;
    }, elHasNoOffsetWidthOrHeight = _0x1b0a17 => {
        return elOffsetWidth(_0x1b0a17) <= 0 || elOffsetHeight(_0x1b0a17) <= 0;
    }, elOffsetWidth = _0x2e0ee3 => {
        const _0x4aea2f = _0xe40738;
        return _0x2e0ee3[0][_0x4aea2f(461)];
    }, elOffsetHeight = _0x17a56e => {
        const _0x13a2db = _0xe40738;
        return _0x17a56e[0][_0x13a2db(462)];
    }, elHasVisibilityHiddenOrCollapse = _0x24927f => {
        return elHasVisibilityHidden(_0x24927f) || elHasVisibilityCollapse(_0x24927f);
    }, elHasVisibilityHidden = _0x35b864 => {
        const _0x3dbf18 = _0xe40738;
        return _0x35b864[_0x3dbf18(463)](_0x3dbf18(464)) === _0x3dbf18(440);
    }, elHasVisibilityCollapse = _0x1d576e => {
        const _0x29db9b = _0xe40738;
        return _0x1d576e[_0x29db9b(463)](_0x29db9b(464)) === _0x29db9b(465);
    }, elHasOpacityZero = _0xc746a6 => {
        const _0x26aaec = _0xe40738;
        return _0xc746a6[_0x26aaec(463)](_0x26aaec(466)) === '0';
    }, elHasDisplayNone = _0x306264 => {
        const _0x38adb3 = _0xe40738;
        return _0x306264[_0x38adb3(463)]('display') === 'none';
    }, elHasDisplayInline = _0x3f41c4 => {
        const _0x220ee7 = _0xe40738;
        return _0x3f41c4[_0x220ee7(463)](_0x220ee7(467)) === _0x220ee7(468);
    }, elHasOverflowHidden = function (_0x4bee58) {
        const _0x22e76e = _0xe40738, _0x263c0c = [
                _0x4bee58[_0x22e76e(463)](_0x22e76e(469)),
                _0x4bee58[_0x22e76e(463)](_0x22e76e(470)),
                _0x4bee58[_0x22e76e(463)](_0x22e76e(471))
            ];
        return _0x263c0c[_0x22e76e(472)](_0x22e76e(440));
    }, elHasPositionRelative = _0xb06a96 => {
        const _0xd0ba1a = _0xe40738;
        return _0xb06a96[_0xd0ba1a(463)](_0xd0ba1a(473)) === _0xd0ba1a(474);
    }, elHasPositionAbsolute = _0x2dff79 => {
        const _0x4f56bf = _0xe40738;
        return _0x2dff79['css'](_0x4f56bf(473)) === _0x4f56bf(475);
    }, elHasClippableOverflow = function (_0x192683) {
        const _0x87b8d7 = _0xe40738;
        return OVERFLOW_PROPS[_0x87b8d7(472)](_0x192683[_0x87b8d7(463)](_0x87b8d7(469))) || OVERFLOW_PROPS[_0x87b8d7(472)](_0x192683['css'](_0x87b8d7(470))) || OVERFLOW_PROPS[_0x87b8d7(472)](_0x192683[_0x87b8d7(463)](_0x87b8d7(471)));
    }, canClipContent = function (_0x37ae99, _0x1ecf18) {
        const _0x27b911 = _0xe40738;
        if (!elHasClippableOverflow(_0x1ecf18))
            return ![];
        const _0x565204 = _0x37ae99['offsetParent']();
        if (!elHasPositionRelative(_0x37ae99) && $elements[_0x27b911(476)](_0x1ecf18, _0x565204))
            return ![];
        if (elHasPositionAbsolute(_0x565204) && $elements['isChild'](_0x1ecf18, _0x565204))
            return ![];
        return !![];
    }, elOrAncestorIsFixedOrSticky = function (_0x4e1ad1) {
        return !!$elements['getFirstFixedOrStickyPositionParent'](_0x4e1ad1);
    }, elAtCenterPoint = function (_0x55c169) {
        const _0x1c62e5 = _0xe40738, _0x1994e8 = $document[_0x1c62e5(477)](_0x55c169['get'](0)), _0x9875c4 = $coordinates[_0x1c62e5(478)](_0x55c169), {
                topCenter: _0x30b7c3,
                leftCenter: _0x5a2486
            } = _0x9875c4[_0x1c62e5(479)], _0x176568 = $coordinates[_0x1c62e5(480)](_0x1994e8, _0x5a2486, _0x30b7c3);
        if (_0x176568)
            return $jquery[_0x1c62e5(446)](_0x176568);
    }, elDescendentsHavePositionFixedOrAbsolute = function (_0x43472b, _0x20fed6) {
        const _0x393256 = _0xe40738, _0x3e745c = $elements[_0x393256(481)](_0x20fed6[0], _0x43472b), _0x1cc903 = $jquery[_0x393256(446)](_0x3e745c)[_0x393256(482)](_0x20fed6);
        return _[_0x393256(483)](_0x1cc903['get'](), _0x7b8adf => {
            const _0x109562 = _0x393256;
            return fixedOrAbsoluteRe[_0x109562(484)]($jquery[_0x109562(446)](_0x7b8adf)[_0x109562(463)](_0x109562(473)));
        });
    }, elHasVisibleChild = function (_0x34d0f2) {
        const _0x311f92 = _0xe40738;
        return _[_0x311f92(483)](_0x34d0f2[_0x311f92(485)](), _0x594717 => {
            return isVisible(_0x594717);
        });
    }, elIsNotElementFromPoint = function (_0x17133c) {
        const _0x535062 = _0xe40738, _0x2a62f8 = elAtCenterPoint(_0x17133c);
        if ($elements['isDescendent'](_0x17133c, _0x2a62f8))
            return ![];
        if ((_0x17133c[_0x535062(463)](_0x535062(486)) === 'none' || _0x17133c[_0x535062(487)]()[_0x535062(463)](_0x535062(486)) === 'none') && (_0x2a62f8 && $elements[_0x535062(476)](_0x17133c, _0x2a62f8)))
            return ![];
        return !![];
    }, elIsOutOfBoundsOfAncestorsOverflow = function (_0xfc2b1a, _0x466cad = $elements['getParent'](_0xfc2b1a)) {
        const _0x1f9a5e = _0xe40738;
        if ($elements[_0x1f9a5e(488)](_0x466cad))
            return ![];
        const _0x4bdc98 = $coordinates[_0x1f9a5e(478)](_0xfc2b1a);
        if (canClipContent(_0xfc2b1a, _0x466cad)) {
            const _0x12ff19 = $coordinates['getElementPositioning'](_0x466cad);
            if (_0x4bdc98[_0x1f9a5e(489)][_0x1f9a5e(490)] > _0x12ff19[_0x1f9a5e(491)] + _0x12ff19[_0x1f9a5e(489)][_0x1f9a5e(490)] || _0x4bdc98['fromElWindow'][_0x1f9a5e(490)] + _0x4bdc98[_0x1f9a5e(491)] < _0x12ff19['fromElWindow']['left'] || _0x4bdc98['fromElWindow'][_0x1f9a5e(492)] > _0x12ff19['height'] + _0x12ff19[_0x1f9a5e(489)]['top'] || _0x4bdc98[_0x1f9a5e(489)]['top'] + _0x4bdc98[_0x1f9a5e(493)] < _0x12ff19['fromElWindow']['top'])
                return !![];
        }
        return elIsOutOfBoundsOfAncestorsOverflow(_0xfc2b1a, $elements[_0x1f9a5e(494)](_0x466cad));
    }, elIsHiddenByAncestors = function (_0x525a5d, _0x4a1785, _0x49202a = _0x525a5d) {
        const _0x179f49 = _0xe40738, _0x547180 = $elements[_0x179f49(494)](_0x525a5d);
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
        if (!_0x22c5e5[_0x58b564(453)] || $document['isDocument'](_0x22c5e5))
            return ![];
        if (elHasDisplayNone(_0x22c5e5))
            return _0x22c5e5;
        return parentHasDisplayNone($elements[_0x58b564(494)](_0x22c5e5));
    }, parentHasVisibilityHidden = function (_0x185f80) {
        const _0x19423a = _0xe40738;
        if (!_0x185f80[_0x19423a(453)] || $document[_0x19423a(495)](_0x185f80))
            return ![];
        if (elHasVisibilityHidden(_0x185f80))
            return _0x185f80;
        return parentHasVisibilityHidden($elements[_0x19423a(494)](_0x185f80));
    }, parentHasVisibilityCollapse = function (_0x1e82c9) {
        const _0x5f44f2 = _0xe40738;
        if (!_0x1e82c9[_0x5f44f2(453)] || $document[_0x5f44f2(495)](_0x1e82c9))
            return ![];
        if (elHasVisibilityCollapse(_0x1e82c9))
            return _0x1e82c9;
        return parentHasVisibilityCollapse($elements[_0x5f44f2(494)](_0x1e82c9));
    }, parentHasOpacityZero = function (_0xf929ad) {
        const _0x5e567f = _0xe40738;
        if (!_0xf929ad['length'] || $document['isDocument'](_0xf929ad))
            return ![];
        if (elHasOpacityZero(_0xf929ad))
            return _0xf929ad;
        return parentHasOpacityZero(_0xf929ad[_0x5e567f(487)]());
    }, getReasonIsHidden = function (_0x51d58c, _0x10a139 = { 'checkOpacity': !![] }) {
        const _0xd43b2 = _0xe40738, _0x3a9429 = $elements[_0xd43b2(496)](_0x51d58c, _0xd43b2(497));
        let _0x5a73bf = elOffsetWidth(_0x51d58c), _0x53a771 = elOffsetHeight(_0x51d58c), _0x11977f, _0x1ed9bf;
        if (elHasDisplayNone(_0x51d58c))
            return _0xd43b2(498) + _0x3a9429 + '` is not visible because it has CSS property: `display: none`';
        if (_0x11977f = parentHasDisplayNone($elements[_0xd43b2(494)](_0x51d58c)))
            return _0x1ed9bf = $elements[_0xd43b2(496)](_0x11977f, _0xd43b2(497)), _0xd43b2(498) + _0x3a9429 + '` is not visible because its parent `' + _0x1ed9bf + '` has CSS property: `display: none`';
        if (_0x11977f = parentHasVisibilityHidden($elements[_0xd43b2(494)](_0x51d58c)))
            return _0x1ed9bf = $elements[_0xd43b2(496)](_0x11977f, _0xd43b2(497)), 'This element `' + _0x3a9429 + _0xd43b2(499) + _0x1ed9bf + _0xd43b2(500);
        if (_0x11977f = parentHasVisibilityCollapse($elements[_0xd43b2(494)](_0x51d58c)))
            return _0x1ed9bf = $elements[_0xd43b2(496)](_0x11977f, 'short'), _0xd43b2(498) + _0x3a9429 + _0xd43b2(499) + _0x1ed9bf + _0xd43b2(501);
        if ($elements[_0xd43b2(502)](_0x51d58c))
            return 'This element `' + _0x3a9429 + _0xd43b2(503);
        if (elHasVisibilityHidden(_0x51d58c))
            return _0xd43b2(498) + _0x3a9429 + '` is not visible because it has CSS property: `visibility: hidden`';
        if (elHasVisibilityCollapse(_0x51d58c))
            return 'This element `' + _0x3a9429 + _0xd43b2(504);
        if (elHasOpacityZero(_0x51d58c) && _0x10a139[_0xd43b2(456)])
            return _0xd43b2(498) + _0x3a9429 + _0xd43b2(505);
        if ((_0x11977f = parentHasOpacityZero(_0x51d58c[_0xd43b2(487)]())) && _0x10a139['checkOpacity'])
            return _0x1ed9bf = $elements[_0xd43b2(496)](_0x11977f, _0xd43b2(497)), _0xd43b2(498) + _0x3a9429 + _0xd43b2(499) + _0x1ed9bf + '` has CSS property: `opacity: 0`';
        if (elHasNoOffsetWidthOrHeight(_0x51d58c))
            return 'This element `' + _0x3a9429 + _0xd43b2(506) + _0x5a73bf + ' x ' + _0x53a771 + _0xd43b2(507);
        const _0xf51560 = $transform[_0xd43b2(454)](_0x51d58c);
        if (_0xf51560 === _0xd43b2(508))
            return _0xd43b2(498) + _0x3a9429 + _0xd43b2(509);
        if (_0xf51560 === 'backface')
            return _0xd43b2(498) + _0x3a9429 + _0xd43b2(510);
        if (_0x11977f = parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements[_0xd43b2(494)](_0x51d58c)))
            return _0x1ed9bf = $elements[_0xd43b2(496)](_0x11977f, _0xd43b2(497)), _0x5a73bf = elOffsetWidth(_0x11977f), _0x53a771 = elOffsetHeight(_0x11977f), _0xd43b2(498) + _0x3a9429 + _0xd43b2(499) + _0x1ed9bf + '` has CSS property: `overflow: hidden` and an effective width and height of: `' + _0x5a73bf + ' x ' + _0x53a771 + _0xd43b2(507);
        if (elOrAncestorIsFixedOrSticky(_0x51d58c)) {
            if (elIsNotElementFromPoint(_0x51d58c)) {
                const _0x5e0736 = $elements[_0xd43b2(496)](elAtCenterPoint(_0x51d58c));
                if (_0x5e0736)
                    return _0xd43b2(498) + _0x3a9429 + '` is not visible because it has CSS property: `position: fixed` and it\'s being covered by another element:\n\n`' + _0x5e0736 + '`';
                return _0xd43b2(498) + _0x3a9429 + _0xd43b2(511);
            }
        } else {
            if (elIsOutOfBoundsOfAncestorsOverflow(_0x51d58c))
                return _0xd43b2(498) + _0x3a9429 + _0xd43b2(512);
        }
        return _0xd43b2(498) + _0x3a9429 + _0xd43b2(513);
    };
function _0x295e(_0x1bafca, _0x2c58c8) {
    return _0x295e = function (_0x5d0632, _0x295ef4) {
        _0x5d0632 = _0x5d0632 - 424;
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