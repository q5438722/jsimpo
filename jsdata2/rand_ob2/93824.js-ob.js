const _0x44f6 = [
    'isHTML',
    'isOption',
    'getFirstParentWithTagName',
    'select',
    'length',
    'visible',
    'checkOpacity',
    'getPropertyValue',
    'getClientRects',
    'none',
    'offsetWidth',
    'offsetHeight',
    'css',
    'visibility',
    'display',
    'overflow',
    'overflow-y',
    'overflow-x',
    'position',
    'relative',
    'absolute',
    'includes',
    'offsetParent',
    'isChild',
    'getFirstFixedOrStickyPositionParent',
    'getDocumentFromElement',
    'get',
    'getElementPositioning',
    'fromElViewport',
    'getElementAtPointFromViewport',
    'getAllParents',
    'add',
    'some',
    'test',
    'children',
    'isDescendent',
    'parent',
    'pointer-events',
    'isAncestor',
    'getParent',
    'fromElWindow',
    'left',
    'width',
    'top',
    'height',
    'isUndefinedOrHTMLBodyDoc',
    'isDocument',
    'stringify',
    'short',
    'This\x20element\x20`',
    '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`display:\x20none`',
    '`\x20is\x20not\x20visible\x20because\x20its\x20parent\x20`',
    '`\x20has\x20CSS\x20property:\x20`visibility:\x20hidden`',
    '`\x20has\x20CSS\x20property:\x20`visibility:\x20collapse`',
    'isDetached',
    '`\x20is\x20not\x20visible\x20because\x20it\x20is\x20detached\x20from\x20the\x20DOM',
    '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`visibility:\x20hidden`',
    '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`visibility:\x20collapse`',
    '`\x20has\x20CSS\x20property:\x20`opacity:\x200`',
    '\x20x\x20',
    'detectVisibility',
    'transformed',
    '`\x20is\x20not\x20visible\x20because\x20it\x20is\x20hidden\x20by\x20transform.',
    '`\x20has\x20CSS\x20property:\x20`overflow:\x20hidden`\x20and\x20an\x20effective\x20width\x20and\x20height\x20of:\x20`',
    '`\x20is\x20not\x20visible\x20because\x20its\x20ancestor\x20has\x20`position:\x20fixed`\x20CSS\x20property\x20and\x20it\x20is\x20overflowed\x20by\x20other\x20elements.\x20How\x20about\x20scrolling\x20to\x20the\x20element\x20with\x20`cy.scrollIntoView()`?',
    '`\x20is\x20not\x20visible\x20because\x20its\x20content\x20is\x20being\x20clipped\x20by\x20one\x20of\x20its\x20parent\x20elements,\x20which\x20has\x20a\x20CSS\x20property\x20of\x20overflow:\x20`hidden`,\x20`scroll`\x20or\x20`auto`',
    '`\x20is\x20not\x20visible.',
    '321MEqDDu',
    '295ETQimU',
    '221613VycErl',
    '340119KgpgPG',
    '196320joKoxh',
    '1zwmTOV',
    '353645WmHgFt',
    '6wJyXkR',
    '68546ZVzLkr',
    '1TLOxVi',
    '1044374pXTksS',
    'lodash',
    './document',
    './elements',
    './coordinates',
    'hidden',
    'scroll',
    'auto',
    '`\x20failed\x20because\x20it\x20requires\x20a\x20DOM\x20element.\x20The\x20subject\x20received\x20was:\x20`',
    'wrap',
    'isBody'
];
const _0x26569c = _0x19e4;
function _0x19e4(_0x468d16, _0x2680c1) {
    return _0x19e4 = function (_0x44f6e5, _0x19e4eb) {
        _0x44f6e5 = _0x44f6e5 - 0x98;
        let _0x217987 = _0x44f6[_0x44f6e5];
        return _0x217987;
    }, _0x19e4(_0x468d16, _0x2680c1);
}
(function (_0x89658a, _0x28ca7b) {
    const _0x1eaae5 = _0x19e4;
    while (!![]) {
        try {
            const _0x319082 = -parseInt(_0x1eaae5(0x98)) * parseInt(_0x1eaae5(0x99)) + parseInt(_0x1eaae5(0x9a)) + -parseInt(_0x1eaae5(0x9b)) + parseInt(_0x1eaae5(0x9c)) + -parseInt(_0x1eaae5(0x9d)) * parseInt(_0x1eaae5(0x9e)) + parseInt(_0x1eaae5(0x9f)) * -parseInt(_0x1eaae5(0xa0)) + parseInt(_0x1eaae5(0xa1)) * parseInt(_0x1eaae5(0xa2));
            if (_0x319082 === _0x28ca7b)
                break;
            else
                _0x89658a['push'](_0x89658a['shift']());
        } catch (_0x1b816a) {
            _0x89658a['push'](_0x89658a['shift']());
        }
    }
}(_0x44f6, 0x401ac));
const _ = require(_0x26569c(0xa3)), $jquery = require('./jquery'), $document = require(_0x26569c(0xa4)), $elements = require(_0x26569c(0xa5)), $coordinates = require(_0x26569c(0xa6)), $transform = require('./transform'), fixedOrAbsoluteRe = /(fixed|absolute)/, OVERFLOW_PROPS = [
        _0x26569c(0xa7),
        _0x26569c(0xa8),
        _0x26569c(0xa9)
    ], isVisible = _0x60ff20 => {
        return !isHidden(_0x60ff20, 'isVisible()');
    }, isHidden = (_0x54d82d, _0x597373 = 'isHidden()', _0x1f3227 = { 'checkOpacity': !![] }) => {
        const _0x16bc5f = _0x26569c;
        if (!$elements['isElement'](_0x54d82d))
            throw new Error('`Cypress.dom.' + _0x597373 + _0x16bc5f(0xaa) + _0x54d82d + '`');
        const _0x9ffde8 = $jquery[_0x16bc5f(0xab)](_0x54d82d);
        if ($elements[_0x16bc5f(0xac)](_0x54d82d) || $elements[_0x16bc5f(0xad)](_0x54d82d))
            return ![];
        if ($elements[_0x16bc5f(0xae)](_0x54d82d) || $elements['isOptgroup'](_0x54d82d)) {
            if (elHasDisplayNone(_0x9ffde8))
                return !![];
            const _0x12f78f = $elements[_0x16bc5f(0xaf)](_0x9ffde8, _0x16bc5f(0xb0));
            if (_0x12f78f && _0x12f78f[_0x16bc5f(0xb1)])
                return isHidden(_0x12f78f[0x0], _0x597373);
        }
        if (elHasNoEffectiveWidthOrHeight(_0x9ffde8)) {
            if (elHasDisplayInline(_0x9ffde8))
                return !elHasVisibleChild(_0x9ffde8);
            return !![];
        }
        if (elHasVisibilityHiddenOrCollapse(_0x9ffde8))
            return !![];
        if ($transform['detectVisibility'](_0x9ffde8) !== _0x16bc5f(0xb2))
            return !![];
        if (elHasOpacityZero(_0x9ffde8) && _0x1f3227['checkOpacity'])
            return !![];
        if (elIsHiddenByAncestors(_0x9ffde8, _0x1f3227[_0x16bc5f(0xb3)]))
            return !![];
        if (elOrAncestorIsFixedOrSticky(_0x9ffde8))
            return elIsNotElementFromPoint(_0x9ffde8);
        return elIsOutOfBoundsOfAncestorsOverflow(_0x9ffde8);
    }, elHasNoEffectiveWidthOrHeight = _0x3bc6fa => {
        const _0x43336a = _0x26569c, _0x449e60 = _0x3bc6fa[0x0], _0x399cd4 = getComputedStyle(_0x449e60), _0x507d03 = _0x399cd4[_0x43336a(0xb4)]('transform'), _0x1107e9 = elOffsetWidth(_0x3bc6fa), _0x2b7055 = elOffsetHeight(_0x3bc6fa), _0x1e75c4 = elHasOverflowHidden(_0x3bc6fa);
        return isZeroLengthAndTransformNone(_0x1107e9, _0x2b7055, _0x507d03) || isZeroLengthAndOverflowHidden(_0x1107e9, _0x2b7055, _0x1e75c4) || _0x449e60[_0x43336a(0xb5)]()[_0x43336a(0xb1)] <= 0x0;
    }, isZeroLengthAndTransformNone = (_0x467ab3, _0x4c4140, _0x2c0129) => {
        const _0xdc61dc = _0x26569c;
        return _0x467ab3 <= 0x0 && _0x2c0129 === _0xdc61dc(0xb6) || _0x4c4140 <= 0x0 && _0x2c0129 === _0xdc61dc(0xb6);
    }, isZeroLengthAndOverflowHidden = (_0x2066bd, _0x561912, _0x17ce68) => {
        return _0x2066bd <= 0x0 && _0x17ce68 || _0x561912 <= 0x0 && _0x17ce68;
    }, elHasNoOffsetWidthOrHeight = _0x3eee53 => {
        return elOffsetWidth(_0x3eee53) <= 0x0 || elOffsetHeight(_0x3eee53) <= 0x0;
    }, elOffsetWidth = _0x32f6e9 => {
        const _0x4b0bff = _0x26569c;
        return _0x32f6e9[0x0][_0x4b0bff(0xb7)];
    }, elOffsetHeight = _0x462fe0 => {
        const _0x5be37c = _0x26569c;
        return _0x462fe0[0x0][_0x5be37c(0xb8)];
    }, elHasVisibilityHiddenOrCollapse = _0x154afa => {
        return elHasVisibilityHidden(_0x154afa) || elHasVisibilityCollapse(_0x154afa);
    }, elHasVisibilityHidden = _0x577ebd => {
        const _0x2ff1e5 = _0x26569c;
        return _0x577ebd[_0x2ff1e5(0xb9)](_0x2ff1e5(0xba)) === _0x2ff1e5(0xa7);
    }, elHasVisibilityCollapse = _0x17f8f1 => {
        const _0x4d65e1 = _0x26569c;
        return _0x17f8f1['css'](_0x4d65e1(0xba)) === 'collapse';
    }, elHasOpacityZero = _0x3ada19 => {
        return _0x3ada19['css']('opacity') === '0';
    }, elHasDisplayNone = _0x46b724 => {
        const _0x28aaaf = _0x26569c;
        return _0x46b724[_0x28aaaf(0xb9)](_0x28aaaf(0xbb)) === _0x28aaaf(0xb6);
    }, elHasDisplayInline = _0x3f09e5 => {
        const _0x4bd9b6 = _0x26569c;
        return _0x3f09e5['css'](_0x4bd9b6(0xbb)) === 'inline';
    }, elHasOverflowHidden = function (_0x3ee390) {
        const _0x156e2d = _0x26569c, _0xbadbbd = [
                _0x3ee390['css'](_0x156e2d(0xbc)),
                _0x3ee390[_0x156e2d(0xb9)](_0x156e2d(0xbd)),
                _0x3ee390[_0x156e2d(0xb9)](_0x156e2d(0xbe))
            ];
        return _0xbadbbd['includes'](_0x156e2d(0xa7));
    }, elHasPositionRelative = _0x2f7923 => {
        const _0x3f75ad = _0x26569c;
        return _0x2f7923['css'](_0x3f75ad(0xbf)) === _0x3f75ad(0xc0);
    }, elHasPositionAbsolute = _0x2cce4f => {
        const _0x4d4c58 = _0x26569c;
        return _0x2cce4f[_0x4d4c58(0xb9)]('position') === _0x4d4c58(0xc1);
    }, elHasClippableOverflow = function (_0x1c3141) {
        const _0x5347c2 = _0x26569c;
        return OVERFLOW_PROPS[_0x5347c2(0xc2)](_0x1c3141[_0x5347c2(0xb9)](_0x5347c2(0xbc))) || OVERFLOW_PROPS[_0x5347c2(0xc2)](_0x1c3141['css'](_0x5347c2(0xbd))) || OVERFLOW_PROPS[_0x5347c2(0xc2)](_0x1c3141['css'](_0x5347c2(0xbe)));
    }, canClipContent = function (_0x5d2e8b, _0xbcbe60) {
        const _0xb8ef59 = _0x26569c;
        if (!elHasClippableOverflow(_0xbcbe60))
            return ![];
        const _0x2ca3e6 = _0x5d2e8b[_0xb8ef59(0xc3)]();
        if (!elHasPositionRelative(_0x5d2e8b) && $elements['isAncestor'](_0xbcbe60, _0x2ca3e6))
            return ![];
        if (elHasPositionAbsolute(_0x2ca3e6) && $elements[_0xb8ef59(0xc4)](_0xbcbe60, _0x2ca3e6))
            return ![];
        return !![];
    }, elOrAncestorIsFixedOrSticky = function (_0x2658e3) {
        const _0x1de86c = _0x26569c;
        return !!$elements[_0x1de86c(0xc5)](_0x2658e3);
    }, elAtCenterPoint = function (_0x449924) {
        const _0x4a9a40 = _0x26569c, _0x5152c7 = $document[_0x4a9a40(0xc6)](_0x449924[_0x4a9a40(0xc7)](0x0)), _0x2456b2 = $coordinates[_0x4a9a40(0xc8)](_0x449924), {
                topCenter: _0x37229b,
                leftCenter: _0x49c50d
            } = _0x2456b2[_0x4a9a40(0xc9)], _0xcc9e77 = $coordinates[_0x4a9a40(0xca)](_0x5152c7, _0x49c50d, _0x37229b);
        if (_0xcc9e77)
            return $jquery[_0x4a9a40(0xab)](_0xcc9e77);
    }, elDescendentsHavePositionFixedOrAbsolute = function (_0x5d9e1d, _0x5da71b) {
        const _0x25538b = _0x26569c, _0x41bb7d = $elements[_0x25538b(0xcb)](_0x5da71b[0x0], _0x5d9e1d), _0x1eba3c = $jquery[_0x25538b(0xab)](_0x41bb7d)[_0x25538b(0xcc)](_0x5da71b);
        return _[_0x25538b(0xcd)](_0x1eba3c['get'](), _0x3a6ea1 => {
            const _0x55ea62 = _0x25538b;
            return fixedOrAbsoluteRe[_0x55ea62(0xce)]($jquery[_0x55ea62(0xab)](_0x3a6ea1)[_0x55ea62(0xb9)]('position'));
        });
    }, elHasVisibleChild = function (_0x55c432) {
        const _0x102596 = _0x26569c;
        return _['some'](_0x55c432[_0x102596(0xcf)](), _0x439166 => {
            return isVisible(_0x439166);
        });
    }, elIsNotElementFromPoint = function (_0x364f20) {
        const _0x4a4285 = _0x26569c, _0x11ff3f = elAtCenterPoint(_0x364f20);
        if ($elements[_0x4a4285(0xd0)](_0x364f20, _0x11ff3f))
            return ![];
        if ((_0x364f20[_0x4a4285(0xb9)]('pointer-events') === _0x4a4285(0xb6) || _0x364f20[_0x4a4285(0xd1)]()[_0x4a4285(0xb9)](_0x4a4285(0xd2)) === _0x4a4285(0xb6)) && (_0x11ff3f && $elements[_0x4a4285(0xd3)](_0x364f20, _0x11ff3f)))
            return ![];
        return !![];
    }, elIsOutOfBoundsOfAncestorsOverflow = function (_0xc2b74, _0x2ac616 = $elements[_0x26569c(0xd4)](_0xc2b74)) {
        const _0x44519f = _0x26569c;
        if ($elements['isUndefinedOrHTMLBodyDoc'](_0x2ac616))
            return ![];
        const _0x7dfc0e = $coordinates[_0x44519f(0xc8)](_0xc2b74);
        if (canClipContent(_0xc2b74, _0x2ac616)) {
            const _0x2373aa = $coordinates[_0x44519f(0xc8)](_0x2ac616);
            if (_0x7dfc0e[_0x44519f(0xd5)][_0x44519f(0xd6)] > _0x2373aa[_0x44519f(0xd7)] + _0x2373aa[_0x44519f(0xd5)][_0x44519f(0xd6)] || _0x7dfc0e[_0x44519f(0xd5)]['left'] + _0x7dfc0e[_0x44519f(0xd7)] < _0x2373aa['fromElWindow']['left'] || _0x7dfc0e[_0x44519f(0xd5)][_0x44519f(0xd8)] > _0x2373aa['height'] + _0x2373aa[_0x44519f(0xd5)]['top'] || _0x7dfc0e[_0x44519f(0xd5)][_0x44519f(0xd8)] + _0x7dfc0e[_0x44519f(0xd9)] < _0x2373aa[_0x44519f(0xd5)]['top'])
                return !![];
        }
        return elIsOutOfBoundsOfAncestorsOverflow(_0xc2b74, $elements[_0x44519f(0xd4)](_0x2ac616));
    }, elIsHiddenByAncestors = function (_0xbe5d72, _0x355812, _0x5460d5 = _0xbe5d72) {
        const _0x5499eb = _0x26569c, _0x4baf22 = $elements['getParent'](_0xbe5d72);
        if ($elements[_0x5499eb(0xda)](_0x4baf22))
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
        return parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements[_0x1eada0(0xd4)](_0x5a0fcb));
    }, parentHasDisplayNone = function (_0xd7ee7e) {
        const _0xbc08e3 = _0x26569c;
        if (!_0xd7ee7e[_0xbc08e3(0xb1)] || $document[_0xbc08e3(0xdb)](_0xd7ee7e))
            return ![];
        if (elHasDisplayNone(_0xd7ee7e))
            return _0xd7ee7e;
        return parentHasDisplayNone($elements[_0xbc08e3(0xd4)](_0xd7ee7e));
    }, parentHasVisibilityHidden = function (_0x4ffe9f) {
        const _0x10f641 = _0x26569c;
        if (!_0x4ffe9f[_0x10f641(0xb1)] || $document['isDocument'](_0x4ffe9f))
            return ![];
        if (elHasVisibilityHidden(_0x4ffe9f))
            return _0x4ffe9f;
        return parentHasVisibilityHidden($elements[_0x10f641(0xd4)](_0x4ffe9f));
    }, parentHasVisibilityCollapse = function (_0x34415a) {
        const _0x4565fe = _0x26569c;
        if (!_0x34415a[_0x4565fe(0xb1)] || $document[_0x4565fe(0xdb)](_0x34415a))
            return ![];
        if (elHasVisibilityCollapse(_0x34415a))
            return _0x34415a;
        return parentHasVisibilityCollapse($elements[_0x4565fe(0xd4)](_0x34415a));
    }, parentHasOpacityZero = function (_0x35b2a2) {
        const _0x143951 = _0x26569c;
        if (!_0x35b2a2['length'] || $document[_0x143951(0xdb)](_0x35b2a2))
            return ![];
        if (elHasOpacityZero(_0x35b2a2))
            return _0x35b2a2;
        return parentHasOpacityZero(_0x35b2a2[_0x143951(0xd1)]());
    }, getReasonIsHidden = function (_0x2f25b9, _0x14d988 = { 'checkOpacity': !![] }) {
        const _0x520d98 = _0x26569c, _0x4c5c9a = $elements[_0x520d98(0xdc)](_0x2f25b9, _0x520d98(0xdd));
        let _0x37f9e5 = elOffsetWidth(_0x2f25b9), _0x1e7f66 = elOffsetHeight(_0x2f25b9), _0x5aa891, _0x516b9f;
        if (elHasDisplayNone(_0x2f25b9))
            return _0x520d98(0xde) + _0x4c5c9a + _0x520d98(0xdf);
        if (_0x5aa891 = parentHasDisplayNone($elements[_0x520d98(0xd4)](_0x2f25b9)))
            return _0x516b9f = $elements[_0x520d98(0xdc)](_0x5aa891, _0x520d98(0xdd)), _0x520d98(0xde) + _0x4c5c9a + _0x520d98(0xe0) + _0x516b9f + '`\x20has\x20CSS\x20property:\x20`display:\x20none`';
        if (_0x5aa891 = parentHasVisibilityHidden($elements[_0x520d98(0xd4)](_0x2f25b9)))
            return _0x516b9f = $elements[_0x520d98(0xdc)](_0x5aa891, _0x520d98(0xdd)), _0x520d98(0xde) + _0x4c5c9a + '`\x20is\x20not\x20visible\x20because\x20its\x20parent\x20`' + _0x516b9f + _0x520d98(0xe1);
        if (_0x5aa891 = parentHasVisibilityCollapse($elements[_0x520d98(0xd4)](_0x2f25b9)))
            return _0x516b9f = $elements['stringify'](_0x5aa891, _0x520d98(0xdd)), 'This\x20element\x20`' + _0x4c5c9a + _0x520d98(0xe0) + _0x516b9f + _0x520d98(0xe2);
        if ($elements[_0x520d98(0xe3)](_0x2f25b9))
            return _0x520d98(0xde) + _0x4c5c9a + _0x520d98(0xe4);
        if (elHasVisibilityHidden(_0x2f25b9))
            return _0x520d98(0xde) + _0x4c5c9a + _0x520d98(0xe5);
        if (elHasVisibilityCollapse(_0x2f25b9))
            return _0x520d98(0xde) + _0x4c5c9a + _0x520d98(0xe6);
        if (elHasOpacityZero(_0x2f25b9) && _0x14d988[_0x520d98(0xb3)])
            return 'This\x20element\x20`' + _0x4c5c9a + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`opacity:\x200`';
        if ((_0x5aa891 = parentHasOpacityZero(_0x2f25b9[_0x520d98(0xd1)]())) && _0x14d988[_0x520d98(0xb3)])
            return _0x516b9f = $elements[_0x520d98(0xdc)](_0x5aa891, 'short'), 'This\x20element\x20`' + _0x4c5c9a + _0x520d98(0xe0) + _0x516b9f + _0x520d98(0xe7);
        if (elHasNoOffsetWidthOrHeight(_0x2f25b9))
            return _0x520d98(0xde) + _0x4c5c9a + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20an\x20effective\x20width\x20and\x20height\x20of:\x20`' + _0x37f9e5 + _0x520d98(0xe8) + _0x1e7f66 + '`\x20pixels.';
        const _0x18d5eb = $transform[_0x520d98(0xe9)](_0x2f25b9);
        if (_0x18d5eb === _0x520d98(0xea))
            return _0x520d98(0xde) + _0x4c5c9a + _0x520d98(0xeb);
        if (_0x18d5eb === 'backface')
            return _0x520d98(0xde) + _0x4c5c9a + '`\x20is\x20not\x20visible\x20because\x20it\x20is\x20rotated\x20and\x20its\x20backface\x20is\x20hidden.';
        if (_0x5aa891 = parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements['getParent'](_0x2f25b9)))
            return _0x516b9f = $elements[_0x520d98(0xdc)](_0x5aa891, _0x520d98(0xdd)), _0x37f9e5 = elOffsetWidth(_0x5aa891), _0x1e7f66 = elOffsetHeight(_0x5aa891), _0x520d98(0xde) + _0x4c5c9a + _0x520d98(0xe0) + _0x516b9f + _0x520d98(0xec) + _0x37f9e5 + _0x520d98(0xe8) + _0x1e7f66 + '`\x20pixels.';
        if (elOrAncestorIsFixedOrSticky(_0x2f25b9)) {
            if (elIsNotElementFromPoint(_0x2f25b9)) {
                const _0x2ae3c3 = $elements[_0x520d98(0xdc)](elAtCenterPoint(_0x2f25b9));
                if (_0x2ae3c3)
                    return 'This\x20element\x20`' + _0x4c5c9a + '`\x20is\x20not\x20visible\x20because\x20it\x20has\x20CSS\x20property:\x20`position:\x20fixed`\x20and\x20it\x27s\x20being\x20covered\x20by\x20another\x20element:\x0a\x0a`' + _0x2ae3c3 + '`';
                return _0x520d98(0xde) + _0x4c5c9a + _0x520d98(0xed);
            }
        } else {
            if (elIsOutOfBoundsOfAncestorsOverflow(_0x2f25b9))
                return _0x520d98(0xde) + _0x4c5c9a + _0x520d98(0xee);
        }
        return _0x520d98(0xde) + _0x4c5c9a + _0x520d98(0xef);
    };
module['exports'] = {
    'isVisible': isVisible,
    'isHidden': isHidden,
    'parentHasDisplayNone': parentHasDisplayNone,
    'getReasonIsHidden': getReasonIsHidden
};
