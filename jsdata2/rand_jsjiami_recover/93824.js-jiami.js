const _ = require('lodash');
const $jquery = require('./jquery');
const $document = require('./document');
const $elements = require('./elements');
const $coordinates = require('./coordinates');
const $transform = require('./transform');
const fixedOrAbsoluteRe = /(fixed|absolute)/;
const OVERFLOW_PROPS = [
    'hidden',
    'scroll',
    'auto'
];
const isVisible = _0x431e84 => {
    return !isHidden(_0x431e84, 'isVisible()');
};
const isHidden = (_0x33e829, _0x22dafd = 'isHidden()', _0x16edb8 = { 'checkOpacity': !![] }) => {
    if (!$elements['isElement'](_0x33e829)) {
        throw new Error('`Cypress.dom.' + _0x22dafd + '` failed because it requires a DOM element. The subject received was: `' + _0x33e829 + '`');
    }
    const _0x3ae4c6 = $jquery['wrap'](_0x33e829);
    if ($elements['isBody'](_0x33e829) || $elements['isHTML'](_0x33e829)) {
        return ![];
    }
    if ($elements['isOption'](_0x33e829) || $elements['isOptgroup'](_0x33e829)) {
        if (elHasDisplayNone(_0x3ae4c6)) {
            return !![];
        }
        const _0x28f9b3 = $elements['getFirstParentWithTagName'](_0x3ae4c6, 'select');
        if (_0x28f9b3 && _0x28f9b3['length']) {
            return isHidden(_0x28f9b3[0], _0x22dafd);
        }
    }
    if (elHasNoEffectiveWidthOrHeight(_0x3ae4c6)) {
        if (elHasDisplayInline(_0x3ae4c6)) {
            return !elHasVisibleChild(_0x3ae4c6);
        }
        return !![];
    }
    if (elHasVisibilityHiddenOrCollapse(_0x3ae4c6)) {
        if ('ygHci' !== 'vmkwm') {
            return !![];
        } else {
            return isVisible(_0x33e829);
        }
    }
    if ($transform['detectVisibility'](_0x3ae4c6) !== 'visible') {
        return !![];
    }
    if (elHasOpacityZero(_0x3ae4c6) && _0x16edb8['checkOpacity']) {
        return !![];
    }
    if (elIsHiddenByAncestors(_0x3ae4c6, _0x16edb8['checkOpacity'])) {
        if ('VjIrk' === 'xMMJi') {
            return ![];
        } else {
            return !![];
        }
    }
    if (elOrAncestorIsFixedOrSticky(_0x3ae4c6)) {
        if ('YiKAZ' === 'YiKAZ') {
            return elIsNotElementFromPoint(_0x3ae4c6);
        } else {
            throw new Error('`Cypress.dom.' + _0x22dafd + '` failed because it requires a DOM element. The subject received was: `' + _0x33e829 + '`');
        }
    }
    return elIsOutOfBoundsOfAncestorsOverflow(_0x3ae4c6);
};
const elHasNoEffectiveWidthOrHeight = _0x3caf30 => {
    const _0x155c95 = _0x3caf30[0];
    const _0x2d9d50 = getComputedStyle(_0x155c95);
    const _0xd57492 = _0x2d9d50['getPropertyValue']('transform');
    const _0x21161a = elOffsetWidth(_0x3caf30);
    const _0x1a4ed3 = elOffsetHeight(_0x3caf30);
    const _0x504e06 = elHasOverflowHidden(_0x3caf30);
    return isZeroLengthAndTransformNone(_0x21161a, _0x1a4ed3, _0xd57492) || isZeroLengthAndOverflowHidden(_0x21161a, _0x1a4ed3, _0x504e06) || _0x155c95['getClientRects']()['length'] <= 0;
};
const isZeroLengthAndTransformNone = (_0x182822, _0x17b11a, _0x5cf721) => {
    return _0x182822 <= 0 && _0x5cf721 === 'none' || _0x17b11a <= 0 && _0x5cf721 === 'none';
};
const isZeroLengthAndOverflowHidden = (_0x32ff40, _0x5c3070, _0x53daa2) => {
    return _0x32ff40 <= 0 && _0x53daa2 || _0x5c3070 <= 0 && _0x53daa2;
};
const elHasNoOffsetWidthOrHeight = _0x27da04 => {
    return elOffsetWidth(_0x27da04) <= 0 || elOffsetHeight(_0x27da04) <= 0;
};
const elOffsetWidth = _0x333e20 => {
    return _0x333e20[0]['offsetWidth'];
};
const elOffsetHeight = _0x2e64a3 => {
    return _0x2e64a3[0]['offsetHeight'];
};
const elHasVisibilityHiddenOrCollapse = _0x1bdf8e => {
    return elHasVisibilityHidden(_0x1bdf8e) || elHasVisibilityCollapse(_0x1bdf8e);
};
const elHasVisibilityHidden = _0x3efbb9 => {
    return _0x3efbb9['css']('visibility') === 'hidden';
};
const elHasVisibilityCollapse = _0x2613bb => {
    return _0x2613bb['css']('visibility') === 'collapse';
};
const elHasOpacityZero = _0x551343 => {
    return _0x551343['css']('opacity') === '0';
};
const elHasDisplayNone = _0x5bd084 => {
    return _0x5bd084['css']('display') === 'none';
};
const elHasDisplayInline = _0x23cbcc => {
    return _0x23cbcc['css']('display') === 'inline';
};
const elHasOverflowHidden = function (_0x2f6331) {
    const _0x5011f8 = [
        _0x2f6331['css']('overflow'),
        _0x2f6331['css']('overflow-y'),
        _0x2f6331['css']('overflow-x')
    ];
    return _0x5011f8['includes']('hidden');
};
const elHasPositionRelative = _0x138c76 => {
    return _0x138c76['css']('position') === 'relative';
};
const elHasPositionAbsolute = _0x4d2399 => {
    return _0x4d2399['css']('position') === 'absolute';
};
const elHasClippableOverflow = function (_0x32ed38) {
    return OVERFLOW_PROPS['includes'](_0x32ed38['css']('overflow')) || OVERFLOW_PROPS['includes'](_0x32ed38['css']('overflow-y')) || OVERFLOW_PROPS['includes'](_0x32ed38['css']('overflow-x'));
};
const canClipContent = function (_0xe69f7d, _0x14fbf8) {
    if (!elHasClippableOverflow(_0x14fbf8)) {
        if ('ttrvA' !== 'ttrvA') {
            return _0xe69f7d;
        } else {
            return ![];
        }
    }
    const _0x237e98 = _0xe69f7d['offsetParent']();
    if (!elHasPositionRelative(_0xe69f7d) && $elements['isAncestor'](_0x14fbf8, _0x237e98)) {
        return ![];
    }
    if (elHasPositionAbsolute(_0x237e98) && $elements['isChild'](_0x14fbf8, _0x237e98)) {
        return ![];
    }
    return !![];
};
const elOrAncestorIsFixedOrSticky = function (_0x1db7df) {
    return !!$elements['getFirstFixedOrStickyPositionParent'](_0x1db7df);
};
const elAtCenterPoint = function (_0x22e22d) {
    const _0x3dd866 = $document['getDocumentFromElement'](_0x22e22d['get'](0));
    const _0x474e97 = $coordinates['getElementPositioning'](_0x22e22d);
    const {topCenter, leftCenter} = _0x474e97['fromElViewport'];
    const _0xa3405c = $coordinates['getElementAtPointFromViewport'](_0x3dd866, leftCenter, topCenter);
    if (_0xa3405c) {
        if ('iqHXy' !== 'NDPFP') {
            return $jquery['wrap'](_0xa3405c);
        } else {
            return !!$elements['getFirstFixedOrStickyPositionParent'](_0x22e22d);
        }
    }
};
const elDescendentsHavePositionFixedOrAbsolute = function (_0x2e5474, _0x22b467) {
    const _0x5c4964 = $elements['getAllParents'](_0x22b467[0], _0x2e5474);
    const _0x42bd35 = $jquery['wrap'](_0x5c4964)['add'](_0x22b467);
    return _['some'](_0x42bd35['get'](), _0x25cade => {
        return fixedOrAbsoluteRe['test']($jquery['wrap'](_0x25cade)['css']('position'));
    });
};
const elHasVisibleChild = function (_0x11b3be) {
    return _['some'](_0x11b3be['children'](), _0x1f014c => {
        return isVisible(_0x1f014c);
    });
};
const elIsNotElementFromPoint = function (_0x2f0a3e) {
    const _0x512860 = elAtCenterPoint(_0x2f0a3e);
    if ($elements['isDescendent'](_0x2f0a3e, _0x512860)) {
        return ![];
    }
    if ((_0x2f0a3e['css']('pointer-events') === 'none' || _0x2f0a3e['parent']()['css']('pointer-events') === 'none') && (_0x512860 && $elements['isAncestor'](_0x2f0a3e, _0x512860))) {
        return ![];
    }
    return !![];
};
const elIsOutOfBoundsOfAncestorsOverflow = function (_0xeb850a, _0x3827b0 = $elements['getParent'](_0xeb850a)) {
    if ($elements['isUndefinedOrHTMLBodyDoc'](_0x3827b0)) {
        if ('prmRo' === 'nYQnB') {
            return !elHasVisibleChild(_0xeb850a);
        } else {
            return ![];
        }
    }
    const _0x405d96 = $coordinates['getElementPositioning'](_0xeb850a);
    if (canClipContent(_0xeb850a, _0x3827b0)) {
        const _0x52c191 = $coordinates['getElementPositioning'](_0x3827b0);
        if (_0x405d96['fromElWindow']['left'] > _0x52c191['width'] + _0x52c191['fromElWindow']['left'] || _0x405d96['fromElWindow']['left'] + _0x405d96['width'] < _0x52c191['fromElWindow']['left'] || _0x405d96['fromElWindow']['top'] > _0x52c191['height'] + _0x52c191['fromElWindow']['top'] || _0x405d96['fromElWindow']['top'] + _0x405d96['height'] < _0x52c191['fromElWindow']['top']) {
            return !![];
        }
    }
    return elIsOutOfBoundsOfAncestorsOverflow(_0xeb850a, $elements['getParent'](_0x3827b0));
};
const elIsHiddenByAncestors = function (_0x9ebf06, _0x43a4e5, _0x3776fd = _0x9ebf06) {
    const _0x1f49b4 = $elements['getParent'](_0x9ebf06);
    if ($elements['isUndefinedOrHTMLBodyDoc'](_0x1f49b4)) {
        if ('JklCg' !== 'JklCg') {
            return width <= 0 && transform === 'none' || height <= 0 && transform === 'none';
        } else {
            return ![];
        }
    }
    if (elHasOpacityZero(_0x1f49b4) && _0x43a4e5) {
        return !![];
    }
    if (elHasOverflowHidden(_0x1f49b4) && elHasNoEffectiveWidthOrHeight(_0x1f49b4)) {
        if ('zysjt' !== 'NIBci') {
            return !elDescendentsHavePositionFixedOrAbsolute(_0x1f49b4, _0x3776fd);
        } else {
            return ![];
        }
    }
    return elIsHiddenByAncestors(_0x1f49b4, _0x43a4e5, _0x3776fd);
};
const parentHasNoOffsetWidthOrHeightAndOverflowHidden = function (_0x504148) {
    if ($elements['isUndefinedOrHTMLBodyDoc'](_0x504148)) {
        if ('gKMGr' !== 'gKMGr') {
            return 'This element `' + node + '` is not visible because it is detached from the DOM';
        } else {
            return ![];
        }
    }
    if (elHasOverflowHidden(_0x504148) && elHasNoEffectiveWidthOrHeight(_0x504148)) {
        if ('wqrWA' !== 'SOThY') {
            return _0x504148;
        } else {
            return !elDescendentsHavePositionFixedOrAbsolute($parent, $origEl);
        }
    }
    return parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements['getParent'](_0x504148));
};
const parentHasDisplayNone = function (_0x1b27c6) {
    if (!_0x1b27c6['length'] || $document['isDocument'](_0x1b27c6)) {
        return ![];
    }
    if (elHasDisplayNone(_0x1b27c6)) {
        return _0x1b27c6;
    }
    return parentHasDisplayNone($elements['getParent'](_0x1b27c6));
};
const parentHasVisibilityHidden = function (_0x1a866e) {
    if (!_0x1a866e['length'] || $document['isDocument'](_0x1a866e)) {
        return ![];
    }
    if (elHasVisibilityHidden(_0x1a866e)) {
        if ('HOrhw' !== 'HOrhw') {
            return 'This element `' + node + '` is not visible because it has an effective width and height of: `' + width + ' x ' + height + '` pixels.';
        } else {
            return _0x1a866e;
        }
    }
    return parentHasVisibilityHidden($elements['getParent'](_0x1a866e));
};
const parentHasVisibilityCollapse = function (_0x4bc4f5) {
    if (!_0x4bc4f5['length'] || $document['isDocument'](_0x4bc4f5)) {
        return ![];
    }
    if (elHasVisibilityCollapse(_0x4bc4f5)) {
        if ('YseeV' !== 'YseeV') {
            const _0x54d811 = $elements['getParent'](_0x4bc4f5);
            if ($elements['isUndefinedOrHTMLBodyDoc'](_0x54d811)) {
                return ![];
            }
            if (elHasOpacityZero(_0x54d811) && checkOpacity) {
                return !![];
            }
            if (elHasOverflowHidden(_0x54d811) && elHasNoEffectiveWidthOrHeight(_0x54d811)) {
                return !elDescendentsHavePositionFixedOrAbsolute(_0x54d811, $origEl);
            }
            return elIsHiddenByAncestors(_0x54d811, checkOpacity, $origEl);
        } else {
            return _0x4bc4f5;
        }
    }
    return parentHasVisibilityCollapse($elements['getParent'](_0x4bc4f5));
};
const parentHasOpacityZero = function (_0x33ec8f) {
    if (!_0x33ec8f['length'] || $document['isDocument'](_0x33ec8f)) {
        return ![];
    }
    if (elHasOpacityZero(_0x33ec8f)) {
        return _0x33ec8f;
    }
    return parentHasOpacityZero(_0x33ec8f['parent']());
};
const getReasonIsHidden = function (_0x571eeb, _0x418711 = { 'checkOpacity': !![] }) {
    const _0x2d3b22 = $elements['stringify'](_0x571eeb, 'short');
    let _0x4d2971 = elOffsetWidth(_0x571eeb);
    let _0x45f668 = elOffsetHeight(_0x571eeb);
    let _0x2d015c;
    let _0x13978f;
    if (elHasDisplayNone(_0x571eeb)) {
        if ('Zzivm' !== 'Zzivm') {
            return $jquery['wrap'](el);
        } else {
            return 'This element `' + _0x2d3b22 + '` is not visible because it has CSS property: `display: none`';
        }
    }
    if (_0x2d015c = parentHasDisplayNone($elements['getParent'](_0x571eeb))) {
        _0x13978f = $elements['stringify'](_0x2d015c, 'short');
        return 'This element `' + _0x2d3b22 + '` is not visible because its parent `' + _0x13978f + '` has CSS property: `display: none`';
    }
    if (_0x2d015c = parentHasVisibilityHidden($elements['getParent'](_0x571eeb))) {
        if ('thPOl' !== 'wNlNE') {
            _0x13978f = $elements['stringify'](_0x2d015c, 'short');
            return 'This element `' + _0x2d3b22 + '` is not visible because its parent `' + _0x13978f + '` has CSS property: `visibility: hidden`';
        } else {
            if (elHasDisplayInline(_0x571eeb)) {
                return !elHasVisibleChild(_0x571eeb);
            }
            return !![];
        }
    }
    if (_0x2d015c = parentHasVisibilityCollapse($elements['getParent'](_0x571eeb))) {
        if ('pcEyP' !== 'RytsD') {
            _0x13978f = $elements['stringify'](_0x2d015c, 'short');
            return 'This element `' + _0x2d3b22 + '` is not visible because its parent `' + _0x13978f + '` has CSS property: `visibility: collapse`';
        } else {
            const _0x29d2a5 = $document['getDocumentFromElement'](_0x571eeb['get'](0));
            const _0x161ea0 = $coordinates['getElementPositioning'](_0x571eeb);
            const {topCenter, leftCenter} = _0x161ea0['fromElViewport'];
            const _0x1b2f4c = $coordinates['getElementAtPointFromViewport'](_0x29d2a5, leftCenter, topCenter);
            if (_0x1b2f4c) {
                return $jquery['wrap'](_0x1b2f4c);
            }
        }
    }
    if ($elements['isDetached'](_0x571eeb)) {
        return 'This element `' + _0x2d3b22 + '` is not visible because it is detached from the DOM';
    }
    if (elHasVisibilityHidden(_0x571eeb)) {
        return 'This element `' + _0x2d3b22 + '` is not visible because it has CSS property: `visibility: hidden`';
    }
    if (elHasVisibilityCollapse(_0x571eeb)) {
        if ('UXIVZ' !== 'sJxRD') {
            return 'This element `' + _0x2d3b22 + '` is not visible because it has CSS property: `visibility: collapse`';
        } else {
            const _0x3a0910 = elAtCenterPoint(_0x571eeb);
            if ($elements['isDescendent'](_0x571eeb, _0x3a0910)) {
                return ![];
            }
            if ((_0x571eeb['css']('pointer-events') === 'none' || _0x571eeb['parent']()['css']('pointer-events') === 'none') && (_0x3a0910 && $elements['isAncestor'](_0x571eeb, _0x3a0910))) {
                return ![];
            }
            return !![];
        }
    }
    if (elHasOpacityZero(_0x571eeb) && _0x418711['checkOpacity']) {
        return 'This element `' + _0x2d3b22 + '` is not visible because it has CSS property: `opacity: 0`';
    }
    if ((_0x2d015c = parentHasOpacityZero(_0x571eeb['parent']())) && _0x418711['checkOpacity']) {
        if ('DMtxi' !== 'DMtxi') {
            return OVERFLOW_PROPS['includes'](_0x571eeb['css']('overflow')) || OVERFLOW_PROPS['includes'](_0x571eeb['css']('overflow-y')) || OVERFLOW_PROPS['includes'](_0x571eeb['css']('overflow-x'));
        } else {
            _0x13978f = $elements['stringify'](_0x2d015c, 'short');
            return 'This element `' + _0x2d3b22 + '` is not visible because its parent `' + _0x13978f + '` has CSS property: `opacity: 0`';
        }
    }
    if (elHasNoOffsetWidthOrHeight(_0x571eeb)) {
        if ('hEkiV' === 'hEkiV') {
            return 'This element `' + _0x2d3b22 + '` is not visible because it has an effective width and height of: `' + _0x4d2971 + ' x ' + _0x45f668 + '` pixels.';
        } else {
            return elOffsetWidth(_0x571eeb) <= 0 || elOffsetHeight(_0x571eeb) <= 0;
        }
    }
    const _0x2117f5 = $transform['detectVisibility'](_0x571eeb);
    if (_0x2117f5 === 'transformed') {
        return 'This element `' + _0x2d3b22 + '` is not visible because it is hidden by transform.';
    }
    if (_0x2117f5 === 'backface') {
        return 'This element `' + _0x2d3b22 + '` is not visible because it is rotated and its backface is hidden.';
    }
    if (_0x2d015c = parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements['getParent'](_0x571eeb))) {
        _0x13978f = $elements['stringify'](_0x2d015c, 'short');
        _0x4d2971 = elOffsetWidth(_0x2d015c);
        _0x45f668 = elOffsetHeight(_0x2d015c);
        return 'This element `' + _0x2d3b22 + '` is not visible because its parent `' + _0x13978f + '` has CSS property: `overflow: hidden` and an effective width and height of: `' + _0x4d2971 + ' x ' + _0x45f668 + '` pixels.';
    }
    if (elOrAncestorIsFixedOrSticky(_0x571eeb)) {
        if ('GRsOw' !== 'GRsOw') {
            return 'This element `' + _0x2d3b22 + '` is not visible because it has CSS property: `visibility: collapse`';
        } else {
            if (elIsNotElementFromPoint(_0x571eeb)) {
                const _0xd39fbb = $elements['stringify'](elAtCenterPoint(_0x571eeb));
                if (_0xd39fbb) {
                    return 'This element `' + _0x2d3b22 + '` is not visible because it has CSS property: `position: fixed` and it\'s being covered by another element:\n\n`' + _0xd39fbb + '`';
                }
                return 'This element `' + _0x2d3b22 + '` is not visible because its ancestor has `position: fixed` CSS property and it is overflowed by other elements. How about scrolling to the element with `cy.scrollIntoView()`?';
            }
        }
    } else {
        if (elIsOutOfBoundsOfAncestorsOverflow(_0x571eeb)) {
            if ('Vteqx' !== 'MmJTO') {
                return 'This element `' + _0x2d3b22 + '` is not visible because its content is being clipped by one of its parent elements, which has a CSS property of overflow: `hidden`, `scroll` or `auto`';
            } else {
                const _0x1b0bd6 = [
                    _0x571eeb['css']('overflow'),
                    _0x571eeb['css']('overflow-y'),
                    _0x571eeb['css']('overflow-x')
                ];
                return _0x1b0bd6['includes']('hidden');
            }
        }
    }
    return 'This element `' + _0x2d3b22 + '` is not visible.';
};
module['exports'] = {
    'isVisible': isVisible,
    'isHidden': isHidden,
    'parentHasDisplayNone': parentHasDisplayNone,
    'getReasonIsHidden': getReasonIsHidden
};