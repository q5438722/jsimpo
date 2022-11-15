'use strict';
const _ = require("lodash");
const $jquery = require("./jquery");
const $document = require("./document");
const $elements = require("./elements");
const $coordinates = require("./coordinates");
const $transform = require("./transform");
const fixedOrAbsoluteRe = /(fixed|absolute)/;
const OVERFLOW_PROPS = ["hidden", "scroll", "auto"];
const isVisible = (elem) => {
  return !isHidden(elem, "isVisible()");
};
const isHidden = (node, path = "isHidden()", $clickedItem = {
  checkOpacity : true
}) => {
  if (!$elements.isElement(node)) {
    throw new Error(`\`Cypress.dom.${path}\` failed because it requires a DOM element. The subject received was: \`${node}\``);
  }
  const $element = $jquery.wrap(node);
  if ($elements.isBody(node) || $elements.isHTML(node)) {
    return false;
  }
  if ($elements.isOption(node) || $elements.isOptgroup(node)) {
    if (elHasDisplayNone($element)) {
      return true;
    }
    const parents = $elements.getFirstParentWithTagName($element, "select");
    if (parents && parents.length) {
      return isHidden(parents[0], path);
    }
  }
  if (elHasNoEffectiveWidthOrHeight($element)) {
    if (elHasDisplayInline($element)) {
      return !elHasVisibleChild($element);
    }
    return true;
  }
  if (elHasVisibilityHiddenOrCollapse($element)) {
    return true;
  }
  if ($transform.detectVisibility($element) !== "visible") {
    return true;
  }
  if (elHasOpacityZero($element) && $clickedItem.checkOpacity) {
    return true;
  }
  if (elIsHiddenByAncestors($element, $clickedItem.checkOpacity)) {
    return true;
  }
  if (elOrAncestorIsFixedOrSticky($element)) {
    return elIsNotElementFromPoint($element);
  }
  return elIsOutOfBoundsOfAncestorsOverflow($element);
};
const elHasNoEffectiveWidthOrHeight = (e) => {
  const elem = e[0];
  const computedStyle = getComputedStyle(elem);
  const startRangeDate = computedStyle.getPropertyValue("transform");
  const startDate = elOffsetWidth(e);
  const endDate = elOffsetHeight(e);
  const endRangeDate = elHasOverflowHidden(e);
  return isZeroLengthAndTransformNone(startDate, endDate, startRangeDate) || isZeroLengthAndOverflowHidden(startDate, endDate, endRangeDate) || elem.getClientRects().length <= 0;
};
const isZeroLengthAndTransformNone = (formatters, initialValue, type) => {
  return formatters <= 0 && type === "none" || initialValue <= 0 && type === "none";
};
const isZeroLengthAndOverflowHidden = (size, N, callback) => {
  return size <= 0 && callback || N <= 0 && callback;
};
const elHasNoOffsetWidthOrHeight = (e) => {
  return elOffsetWidth(e) <= 0 || elOffsetHeight(e) <= 0;
};
const elOffsetWidth = ($table) => {
  return $table[0].offsetWidth;
};
const elOffsetHeight = (all_items) => {
  return all_items[0].offsetHeight;
};
const elHasVisibilityHiddenOrCollapse = (e) => {
  return elHasVisibilityHidden(e) || elHasVisibilityCollapse(e);
};
const elHasVisibilityHidden = (fileElem) => {
  return fileElem.css("visibility") === "hidden";
};
const elHasVisibilityCollapse = (fileElem) => {
  return fileElem.css("visibility") === "collapse";
};
const elHasOpacityZero = (tagElem) => {
  return tagElem.css("opacity") === "0";
};
const elHasDisplayNone = (e) => {
  return e.css("display") === "none";
};
const elHasDisplayInline = (e) => {
  return e.css("display") === "inline";
};
const elHasOverflowHidden = function($container) {
  const inventoryKeys = [$container.css("overflow"), $container.css("overflow-y"), $container.css("overflow-x")];
  return inventoryKeys.includes("hidden");
};
const elHasPositionRelative = ($scrollerElement) => {
  return $scrollerElement.css("position") === "relative";
};
const elHasPositionAbsolute = ($scrollerElement) => {
  return $scrollerElement.css("position") === "absolute";
};
const elHasClippableOverflow = function($container) {
  return OVERFLOW_PROPS.includes($container.css("overflow")) || OVERFLOW_PROPS.includes($container.css("overflow-y")) || OVERFLOW_PROPS.includes($container.css("overflow-x"));
};
const canClipContent = function(elem, i) {
  if (!elHasClippableOverflow(i)) {
    return false;
  }
  const child = elem.offsetParent();
  if (!elHasPositionRelative(elem) && $elements.isAncestor(i, child)) {
    return false;
  }
  if (elHasPositionAbsolute(child) && $elements.isChild(i, child)) {
    return false;
  }
  return true;
};
const elOrAncestorIsFixedOrSticky = function(selector) {
  return !!$elements.getFirstFixedOrStickyPositionParent(selector);
};
const elAtCenterPoint = function(deploymentsVersions) {
  const artistTrack = $document.getDocumentFromElement(deploymentsVersions.get(0));
  const i = $coordinates.getElementPositioning(deploymentsVersions);
  const {
    topCenter : TOGGLE_LICENSE_MODAL,
    leftCenter : TOGGLE_ABOUT_MODAL
  } = i.fromElViewport;
  const lnktxt = $coordinates.getElementAtPointFromViewport(artistTrack, TOGGLE_ABOUT_MODAL, TOGGLE_LICENSE_MODAL);
  if (lnktxt) {
    return $jquery.wrap(lnktxt);
  }
};
const elDescendentsHavePositionFixedOrAbsolute = function(viewName, $element) {
  const i = $elements.getAllParents($element[0], viewName);
  const leadModel = $jquery.wrap(i).add($element);
  return _.some(leadModel.get(), (e) => {
    return fixedOrAbsoluteRe.test($jquery.wrap(e).css("position"));
  });
};
const elHasVisibleChild = function(postboard) {
  return _.some(postboard.children(), (a) => {
    return isVisible(a);
  });
};
const elIsNotElementFromPoint = function(path) {
  const node = elAtCenterPoint(path);
  if ($elements.isDescendent(path, node)) {
    return false;
  }
  if ((path.css("pointer-events") === "none" || path.parent().css("pointer-events") === "none") && (node && $elements.isAncestor(path, node))) {
    return false;
  }
  return true;
};
const elIsOutOfBoundsOfAncestorsOverflow = function(selector, item = $elements.getParent(selector)) {
  if ($elements.isUndefinedOrHTMLBodyDoc(item)) {
    return false;
  }
  const container = $coordinates.getElementPositioning(selector);
  if (canClipContent(selector, item)) {
    const _sprite = $coordinates.getElementPositioning(item);
    if (container.fromElWindow.left > _sprite.width + _sprite.fromElWindow.left || container.fromElWindow.left + container.width < _sprite.fromElWindow.left || container.fromElWindow.top > _sprite.height + _sprite.fromElWindow.top || container.fromElWindow.top + container.height < _sprite.fromElWindow.top) {
      return true;
    }
  }
  return elIsOutOfBoundsOfAncestorsOverflow(selector, $elements.getParent(item));
};
const elIsHiddenByAncestors = function(i, a, nodeType = i) {
  const selector = $elements.getParent(i);
  if ($elements.isUndefinedOrHTMLBodyDoc(selector)) {
    return false;
  }
  if (elHasOpacityZero(selector) && a) {
    return true;
  }
  if (elHasOverflowHidden(selector) && elHasNoEffectiveWidthOrHeight(selector)) {
    return !elDescendentsHavePositionFixedOrAbsolute(selector, nodeType);
  }
  return elIsHiddenByAncestors(selector, a, nodeType);
};
const parentHasNoOffsetWidthOrHeightAndOverflowHidden = function(item) {
  if ($elements.isUndefinedOrHTMLBodyDoc(item)) {
    return false;
  }
  if (elHasOverflowHidden(item) && elHasNoEffectiveWidthOrHeight(item)) {
    return item;
  }
  return parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements.getParent(item));
};
const parentHasDisplayNone = function(selector) {
  if (!selector.length || $document.isDocument(selector)) {
    return false;
  }
  if (elHasDisplayNone(selector)) {
    return selector;
  }
  return parentHasDisplayNone($elements.getParent(selector));
};
const parentHasVisibilityHidden = function(selector) {
  if (!selector.length || $document.isDocument(selector)) {
    return false;
  }
  if (elHasVisibilityHidden(selector)) {
    return selector;
  }
  return parentHasVisibilityHidden($elements.getParent(selector));
};
const parentHasVisibilityCollapse = function(selector) {
  if (!selector.length || $document.isDocument(selector)) {
    return false;
  }
  if (elHasVisibilityCollapse(selector)) {
    return selector;
  }
  return parentHasVisibilityCollapse($elements.getParent(selector));
};
const parentHasOpacityZero = function(data) {
  if (!data.length || $document.isDocument(data)) {
    return false;
  }
  if (elHasOpacityZero(data)) {
    return data;
  }
  return parentHasOpacityZero(data.parent());
};
const getReasonIsHidden = function(e, object = {
  checkOpacity : true
}) {
  const i = $elements.stringify(e, "short");
  let root_matches = elOffsetWidth(e);
  let rawDescriptor = elOffsetHeight(e);
  let selector;
  let code;
  if (elHasDisplayNone(e)) {
    return `This element \`${i}\` is not visible because it has CSS property: \`display: none\``;
  }
  if (selector = parentHasDisplayNone($elements.getParent(e))) {
    code = $elements.stringify(selector, "short");
    return `This element \`${i}\` is not visible because its parent \`${code}\` has CSS property: \`display: none\``;
  }
  if (selector = parentHasVisibilityHidden($elements.getParent(e))) {
    code = $elements.stringify(selector, "short");
    return `This element \`${i}\` is not visible because its parent \`${code}\` has CSS property: \`visibility: hidden\``;
  }
  if (selector = parentHasVisibilityCollapse($elements.getParent(e))) {
    code = $elements.stringify(selector, "short");
    return `This element \`${i}\` is not visible because its parent \`${code}\` has CSS property: \`visibility: collapse\``;
  }
  if ($elements.isDetached(e)) {
    return `This element \`${i}\` is not visible because it is detached from the DOM`;
  }
  if (elHasVisibilityHidden(e)) {
    return `This element \`${i}\` is not visible because it has CSS property: \`visibility: hidden\``;
  }
  if (elHasVisibilityCollapse(e)) {
    return `This element \`${i}\` is not visible because it has CSS property: \`visibility: collapse\``;
  }
  if (elHasOpacityZero(e) && object.checkOpacity) {
    return `This element \`${i}\` is not visible because it has CSS property: \`opacity: 0\``;
  }
  if ((selector = parentHasOpacityZero(e.parent())) && object.checkOpacity) {
    code = $elements.stringify(selector, "short");
    return `This element \`${i}\` is not visible because its parent \`${code}\` has CSS property: \`opacity: 0\``;
  }
  if (elHasNoOffsetWidthOrHeight(e)) {
    return `This element \`${i}\` is not visible because it has an effective width and height of: \`${root_matches} x ${rawDescriptor}\` pixels.`;
  }
  const textToTransform = $transform.detectVisibility(e);
  if (textToTransform === "transformed") {
    return `This element \`${i}\` is not visible because it is hidden by transform.`;
  }
  if (textToTransform === "backface") {
    return `This element \`${i}\` is not visible because it is rotated and its backface is hidden.`;
  }
  if (selector = parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements.getParent(e))) {
    code = $elements.stringify(selector, "short");
    root_matches = elOffsetWidth(selector);
    rawDescriptor = elOffsetHeight(selector);
    return `This element \`${i}\` is not visible because its parent \`${code}\` has CSS property: \`overflow: hidden\` and an effective width and height of: \`${root_matches} x ${rawDescriptor}\` pixels.`;
  }
  if (elOrAncestorIsFixedOrSticky(e)) {
    if (elIsNotElementFromPoint(e)) {
      const a = $elements.stringify(elAtCenterPoint(e));
      if (a) {
        return `This element \`${i}\` is not visible because it has CSS property: \`position: fixed\` and it's being covered by another element:\n\n\`${a}\``;
      }
      return `This element \`${i}\` is not visible because its ancestor has \`position: fixed\` CSS property and it is overflowed by other elements. How about scrolling to the element with \`cy.scrollIntoView()\`?`;
    }
  } else {
    if (elIsOutOfBoundsOfAncestorsOverflow(e)) {
      return `This element \`${i}\` is not visible because its content is being clipped by one of its parent elements, which has a CSS property of overflow: \`hidden\`, \`scroll\` or \`auto\``;
    }
  }
  return `This element \`${i}\` is not visible.`;
};
module.exports = {
  isVisible : isVisible,
  isHidden : isHidden,
  parentHasDisplayNone : parentHasDisplayNone,
  getReasonIsHidden : getReasonIsHidden
};

