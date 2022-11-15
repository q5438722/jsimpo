const _ = require("lodash");

const $jquery = require("./jquery");

const $document = require("./document");

const $elements = require("./elements");

const $coordinates = require("./coordinates");

const $transform = require("./transform");

const fixedOrAbsoluteRe = /(fixed|absolute)/;
const OVERFLOW_PROPS = ["hidden", "scroll", "auto"];

const isVisible = e => {
  return !isHidden(e, "isVisible()");
};

const isHidden = (e, t = "isHidden()", i = { checkOpacity: true }) => {
  if (!$elements.isElement(e)) {
    throw new Error(`\`Cypress.dom.${t}\` failed because it requires a DOM element. The subject received was: \`${e}\``);
  }const s = $jquery.wrap(e);
  if ($elements.isBody(e) || $elements.isHTML(e)) {
    return false;
  }if ($elements.isOption(e) || $elements.isOptgroup(e)) {
    if (elHasDisplayNone(s)) {
      return true;
    }const n = $elements.getFirstParentWithTagName(s, "select");
    if (n && n.length) {
      return isHidden(n[0], t);
    }
  }if (elHasNoEffectiveWidthOrHeight(s)) {
    if (elHasDisplayInline(s)) {
      return !elHasVisibleChild(s);
    }return true;
  }if (elHasVisibilityHiddenOrCollapse(s)) {
    return true;
  }if ($transform.detectVisibility(s) !== "visible") {
    return true;
  }if (elHasOpacityZero(s) && i.checkOpacity) {
    return true;
  }if (elIsHiddenByAncestors(s, i.checkOpacity)) {
    return true;
  }if (elOrAncestorIsFixedOrSticky(s)) {
    return elIsNotElementFromPoint(s);
  }return elIsOutOfBoundsOfAncestorsOverflow(s);
};

const elHasNoEffectiveWidthOrHeight = e => {
  const t = e[0];
  const i = getComputedStyle(t);
  const s = i.getPropertyValue("transform");
  const n = elOffsetWidth(e);
  const r = elOffsetHeight(e);
  const o = elHasOverflowHidden(e);
  return isZeroLengthAndTransformNone(n, r, s) || isZeroLengthAndOverflowHidden(n, r, o) || t.getClientRects().length <= 0;
};

const isZeroLengthAndTransformNone = (e, t, i) => {
  return e <= 0 && i === "none" || t <= 0 && i === "none";
};

const isZeroLengthAndOverflowHidden = (e, t, i) => {
  return e <= 0 && i || t <= 0 && i;
};

const elHasNoOffsetWidthOrHeight = e => {
  return elOffsetWidth(e) <= 0 || elOffsetHeight(e) <= 0;
};

const elOffsetWidth = e => {
  return e[0].offsetWidth;
};

const elOffsetHeight = e => {
  return e[0].offsetHeight;
};

const elHasVisibilityHiddenOrCollapse = e => {
  return elHasVisibilityHidden(e) || elHasVisibilityCollapse(e);
};

const elHasVisibilityHidden = e => {
  return e.css("visibility") === "hidden";
};

const elHasVisibilityCollapse = e => {
  return e.css("visibility") === "collapse";
};

const elHasOpacityZero = e => {
  return e.css("opacity") === "0";
};

const elHasDisplayNone = e => {
  return e.css("display") === "none";
};

const elHasDisplayInline = e => {
  return e.css("display") === "inline";
};

const elHasOverflowHidden = function (e) {
  const t = [e.css("overflow"), e.css("overflow-y"), e.css("overflow-x")];
  return t.includes("hidden");
};

const elHasPositionRelative = e => {
  return e.css("position") === "relative";
};

const elHasPositionAbsolute = e => {
  return e.css("position") === "absolute";
};

const elHasClippableOverflow = function (e) {
  return OVERFLOW_PROPS.includes(e.css("overflow")) || OVERFLOW_PROPS.includes(e.css("overflow-y")) || OVERFLOW_PROPS.includes(e.css("overflow-x"));
};

const canClipContent = function (e, t) {
  if (!elHasClippableOverflow(t)) {
    return false;
  }const i = e.offsetParent();
  if (!elHasPositionRelative(e) && $elements.isAncestor(t, i)) {
    return false;
  }if (elHasPositionAbsolute(i) && $elements.isChild(t, i)) {
    return false;
  }return true;
};

const elOrAncestorIsFixedOrSticky = function (e) {
  return !!$elements.getFirstFixedOrStickyPositionParent(e);
};

const elAtCenterPoint = function (e) {
  const t = $document.getDocumentFromElement(e.get(0));
  const i = $coordinates.getElementPositioning(e);
  var { topCenter: s, leftCenter: n } = i.fromElViewport;
  const r = $coordinates.getElementAtPointFromViewport(t, n, s);
  if (r) {
    return $jquery.wrap(r);
  }
};

const elDescendentsHavePositionFixedOrAbsolute = function (e, t) {
  const i = $elements.getAllParents(t[0], e);
  const s = $jquery.wrap(i).add(t);
  return _.some(s.get(), e => {
    return fixedOrAbsoluteRe.test($jquery.wrap(e).css("position"));
  });
};

const elHasVisibleChild = function (e) {
  return _.some(e.children(), e => {
    return isVisible(e);
  });
};

const elIsNotElementFromPoint = function (e) {
  const t = elAtCenterPoint(e);
  if ($elements.isDescendent(e, t)) {
    return false;
  }if ((e.css("pointer-events") === "none" || e.parent().css("pointer-events") === "none") && t && $elements.isAncestor(e, t)) {
    return false;
  }return true;
};

const elIsOutOfBoundsOfAncestorsOverflow = function (e, t = $elements.getParent(e)) {
  if ($elements.isUndefinedOrHTMLBodyDoc(t)) {
    return false;
  }const i = $coordinates.getElementPositioning(e);
  if (canClipContent(e, t)) {
    const s = $coordinates.getElementPositioning(t);
    if (i.fromElWindow.left > s.width + s.fromElWindow.left || i.fromElWindow.left + i.width < s.fromElWindow.left || i.fromElWindow.top > s.height + s.fromElWindow.top || i.fromElWindow.top + i.height < s.fromElWindow.top) {
      return true;
    }
  }return elIsOutOfBoundsOfAncestorsOverflow(e, $elements.getParent(t));
};

const elIsHiddenByAncestors = function (e, t, i = e) {
  const s = $elements.getParent(e);
  if ($elements.isUndefinedOrHTMLBodyDoc(s)) {
    return false;
  }if (elHasOpacityZero(s) && t) {
    return true;
  }if (elHasOverflowHidden(s) && elHasNoEffectiveWidthOrHeight(s)) {
    return !elDescendentsHavePositionFixedOrAbsolute(s, i);
  }return elIsHiddenByAncestors(s, t, i);
};

const parentHasNoOffsetWidthOrHeightAndOverflowHidden = function (e) {
  if ($elements.isUndefinedOrHTMLBodyDoc(e)) {
    return false;
  }if (elHasOverflowHidden(e) && elHasNoEffectiveWidthOrHeight(e)) {
    return e;
  }return parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements.getParent(e));
};

const parentHasDisplayNone = function (e) {
  if (!e.length || $document.isDocument(e)) {
    return false;
  }if (elHasDisplayNone(e)) {
    return e;
  }return parentHasDisplayNone($elements.getParent(e));
};

const parentHasVisibilityHidden = function (e) {
  if (!e.length || $document.isDocument(e)) {
    return false;
  }if (elHasVisibilityHidden(e)) {
    return e;
  }return parentHasVisibilityHidden($elements.getParent(e));
};

const parentHasVisibilityCollapse = function (e) {
  if (!e.length || $document.isDocument(e)) {
    return false;
  }if (elHasVisibilityCollapse(e)) {
    return e;
  }return parentHasVisibilityCollapse($elements.getParent(e));
};

const parentHasOpacityZero = function (e) {
  if (!e.length || $document.isDocument(e)) {
    return false;
  }if (elHasOpacityZero(e)) {
    return e;
  }return parentHasOpacityZero(e.parent());
};

const getReasonIsHidden = function (e, t = { checkOpacity: true }) {
  const i = $elements.stringify(e, "short");
  var s = elOffsetWidth(e);
  var n = elOffsetHeight(e);
  var r;
  var o;
  if (elHasDisplayNone(e)) {
    return `This element \`${i}\` is not visible because it has CSS property: \`display: none\``;
  }if (r = parentHasDisplayNone($elements.getParent(e))) {
    o = $elements.stringify(r, "short");return `This element \`${i}\` is not visible because its parent \`${o}\` has CSS property: \`display: none\``;
  }if (r = parentHasVisibilityHidden($elements.getParent(e))) {
    o = $elements.stringify(r, "short");return `This element \`${i}\` is not visible because its parent \`${o}\` has CSS property: \`visibility: hidden\``;
  }if (r = parentHasVisibilityCollapse($elements.getParent(e))) {
    o = $elements.stringify(r, "short");return `This element \`${i}\` is not visible because its parent \`${o}\` has CSS property: \`visibility: collapse\``;
  }if ($elements.isDetached(e)) {
    return `This element \`${i}\` is not visible because it is detached from the DOM`;
  }if (elHasVisibilityHidden(e)) {
    return `This element \`${i}\` is not visible because it has CSS property: \`visibility: hidden\``;
  }if (elHasVisibilityCollapse(e)) {
    return `This element \`${i}\` is not visible because it has CSS property: \`visibility: collapse\``;
  }if (elHasOpacityZero(e) && t.checkOpacity) {
    return `This element \`${i}\` is not visible because it has CSS property: \`opacity: 0\``;
  }if ((r = parentHasOpacityZero(e.parent())) && t.checkOpacity) {
    o = $elements.stringify(r, "short");return `This element \`${i}\` is not visible because its parent \`${o}\` has CSS property: \`opacity: 0\``;
  }if (elHasNoOffsetWidthOrHeight(e)) {
    return `This element \`${i}\` is not visible because it has an effective width and height of: \`${s} x ${n}\` pixels.`;
  }const l = $transform.detectVisibility(e);
  if (l === "transformed") {
    return `This element \`${i}\` is not visible because it is hidden by transform.`;
  }if (l === "backface") {
    return `This element \`${i}\` is not visible because it is rotated and its backface is hidden.`;
  }if (r = parentHasNoOffsetWidthOrHeightAndOverflowHidden($elements.getParent(e))) {
    o = $elements.stringify(r, "short");s = elOffsetWidth(r);n = elOffsetHeight(r);return `This element \`${i}\` is not visible because its parent \`${o}\` has CSS property: \`overflow: hidden\` and an effective width and height of: \`${s} x ${n}\` pixels.`;
  }if (elOrAncestorIsFixedOrSticky(e)) {
    if (elIsNotElementFromPoint(e)) {
      const a = $elements.stringify(elAtCenterPoint(e));
      if (a) {
        return `This element \`${i}\` is not visible because it has CSS property: \`position: fixed\` and it's being covered by another element:\n\n\`${a}\``;
      }return `This element \`${i}\` is not visible because its ancestor has \`position: fixed\` CSS property and it is overflowed by other elements. How about scrolling to the element with \`cy.scrollIntoView()\`?`;
    }
  } else {
    if (elIsOutOfBoundsOfAncestorsOverflow(e)) {
      return `This element \`${i}\` is not visible because its content is being clipped by one of its parent elements, which has a CSS property of overflow: \`hidden\`, \`scroll\` or \`auto\``;
    }
  }return `This element \`${i}\` is not visible.`;
};

module.exports = { isVisible: isVisible, isHidden: isHidden, parentHasDisplayNone: parentHasDisplayNone, getReasonIsHidden: getReasonIsHidden };
