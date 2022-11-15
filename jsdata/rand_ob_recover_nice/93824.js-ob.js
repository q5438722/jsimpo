'use strict';
const _ = require("lodash");
const $jquery = require(_0x3e7447(259));
const $document = require("./document");
const $elements = require(_0x3e7447(260));
const $coordinates = require(_0x3e7447(261));
const $transform = require("./transform");
const fixedOrAbsoluteRe = /(fixed|absolute)/;
const OVERFLOW_PROPS = ["hidden", _0x3e7447(262), _0x3e7447(263)];
const isVisible = (allowOpacity) => {
  const parseInt = _0x3e7447;
  const frontpageItems = {
    "pfyvS" : function(require, load, callback) {
      return require(load, callback);
    },
    "vWWvi" : parseInt(264)
  };
  return !frontpageItems[parseInt(265)](isHidden, allowOpacity, frontpageItems[parseInt(266)]);
};
const isHidden = (elem, disabled = _0x3e7447(267), domains = {
  "checkOpacity" : !![]
}) => {
  const parseInt = _0x3e7447;
  const item = {
    "gjpKZ" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "EpVkg" : parseInt(268),
    "AFEXr" : function(require, load, callback) {
      return require(load, callback);
    },
    "aOoMu" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "gMtkI" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Dcgwu" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "oIjIh" : function(value, joiner) {
      return value !== joiner;
    },
    "dMCIR" : parseInt(269)
  };
  if (!$elements[parseInt(270)](elem)) {
    throw new Error("`Cypress.dom." + disabled + parseInt(271) + elem + "`");
  }
  const i = $jquery["wrap"](elem);
  if ($elements[parseInt(272)](elem) || $elements[parseInt(273)](elem)) {
    return ![];
  }
  if ($elements[parseInt(274)](elem) || $elements["isOptgroup"](elem)) {
    if (item["gjpKZ"](elHasDisplayNone, i)) {
      return !![];
    }
    const value = $elements["getFirstParentWithTagName"](i, item["EpVkg"]);
    if (value && value[parseInt(275)]) {
      return item[parseInt(276)](isHidden, value[1819 + 157 * -46 + 5403], disabled);
    }
  }
  if (item[parseInt(277)](elHasNoEffectiveWidthOrHeight, i)) {
    if (item[parseInt(278)](elHasDisplayInline, i)) {
      return !item["gMtkI"](elHasVisibleChild, i);
    }
    return !![];
  }
  if (item["Dcgwu"](elHasVisibilityHiddenOrCollapse, i)) {
    return !![];
  }
  if (item["oIjIh"]($transform[parseInt(279)](i), item[parseInt(280)])) {
    return !![];
  }
  if (item[parseInt(281)](elHasOpacityZero, i) && domains[parseInt(282)]) {
    return !![];
  }
  if (elIsHiddenByAncestors(i, domains["checkOpacity"])) {
    return !![];
  }
  if (elOrAncestorIsFixedOrSticky(i)) {
    return item[parseInt(281)](elIsNotElementFromPoint, i);
  }
  return item[parseInt(281)](elIsOutOfBoundsOfAncestorsOverflow, i);
};
const elHasNoEffectiveWidthOrHeight = (value) => {
  const now = _0x3e7447;
  const opfilter = {
    "KTJFu" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "tmwfA" : now(283),
    "OFytU" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "rswFm" : function(mid_OR_high, high_OR_null) {
      return mid_OR_high <= high_OR_null;
    }
  };
  const range = value[-1 * -977 + -1046 * -2 + -3069];
  const _CSSStyleDeclaration_prototype_methods = opfilter[now(284)](getComputedStyle, range);
  const t3 = _CSSStyleDeclaration_prototype_methods["getPropertyValue"](opfilter[now(285)]);
  const t1 = opfilter["KTJFu"](elOffsetWidth, value);
  const t2 = opfilter[now(284)](elOffsetHeight, value);
  const center = elHasOverflowHidden(value);
  return opfilter["OFytU"](isZeroLengthAndTransformNone, t1, t2, t3) || isZeroLengthAndOverflowHidden(t1, t2, center) || opfilter[now(286)](range["getClientRects"]()[now(275)], -5638 * 1 + -923 + 3 * 2187);
};
const isZeroLengthAndTransformNone = (args, node, name) => {
  const token_dash__gt_exp = _0x3e7447;
  const ast = {
    "AMxWo" : function(mid_OR_high, high_OR_null) {
      return mid_OR_high <= high_OR_null;
    },
    "qkilx" : token_dash__gt_exp(287),
    "NQQbb" : function(mid_OR_high, high_OR_null) {
      return mid_OR_high <= high_OR_null;
    },
    "pTvcf" : function(name, initialValue) {
      return name === initialValue;
    }
  };
  return ast[token_dash__gt_exp(288)](args, 332 + -1149 + 817) && name === ast[token_dash__gt_exp(289)] || ast["NQQbb"](node, -7492 + 2973 + -1 * -4519) && ast[token_dash__gt_exp(290)](name, token_dash__gt_exp(287));
};
const isZeroLengthAndOverflowHidden = (maxAttempts, attempts, err) => {
  const now = _0x3e7447;
  const rpm_traffic = {
    "kRYML" : function(mid_OR_high, high_OR_null) {
      return mid_OR_high <= high_OR_null;
    }
  };
  return rpm_traffic[now(291)](maxAttempts, -7 * -14 + 5848 + 6 * -991) && err || attempts <= -3435 * 1 + -3 * -2389 + -1866 * 2 && err;
};
const elHasNoOffsetWidthOrHeight = (value__1873) => {
  const now = _0x3e7447;
  const B1755 = {
    "sgPRN" : function(mid_OR_high, high_OR_null) {
      return mid_OR_high <= high_OR_null;
    },
    "OIRGb" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  return B1755[now(292)](B1755[now(293)](elOffsetWidth, value__1873), -32 * -168 + 7326 + -87 * 146) || B1755[now(292)](elOffsetHeight(value__1873), -3930 + -2468 * -4 + 2 * -2971);
};
const elOffsetWidth = (data) => {
  const getAttr = _0x3e7447;
  return data[3113 + -1556 + -1557][getAttr(294)];
};
const elOffsetHeight = (data) => {
  const getAttr = _0x3e7447;
  return data[-5272 + -106 * 53 + 10890][getAttr(295)];
};
const elHasVisibilityHiddenOrCollapse = (buffer) => {
  const now = _0x3e7447;
  const rpm_traffic = {
    "BuAKS" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "BPuiy" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  return rpm_traffic[now(296)](elHasVisibilityHidden, buffer) || rpm_traffic[now(297)](elHasVisibilityCollapse, buffer);
};
const elHasVisibilityHidden = (PL$103) => {
  const now = _0x3e7447;
  const rpm_traffic = {
    "wjXfv" : now(298),
    "uIdiC" : now(299)
  };
  return PL$103[now(300)](rpm_traffic[now(301)]) === rpm_traffic[now(302)];
};
const elHasVisibilityCollapse = (selection) => {
  const now = _0x3e7447;
  const rpm_traffic = {
    "BtlpU" : now(303)
  };
  return selection[now(300)]("visibility") === rpm_traffic[now(304)];
};
const elHasOpacityZero = (myPreferences) => {
  const getPreferenceKey = _0x3e7447;
  const _0x2e7581 = {
    "zpOvP" : function(name, initialValue) {
      return name === initialValue;
    }
  };
  return _0x2e7581["zpOvP"](myPreferences[getPreferenceKey(300)]("opacity"), "0");
};
const elHasDisplayNone = ($) => {
  const propFunc = _0x3e7447;
  const el = {
    "VANmp" : function(name, initialValue) {
      return name === initialValue;
    },
    "HWyAy" : "display"
  };
  return el[propFunc(305)]($["css"](el[propFunc(306)]), propFunc(287));
};
const elHasDisplayInline = (dict) => {
  const now = _0x3e7447;
  const rpm_traffic = {
    "ilFwH" : function(name, initialValue) {
      return name === initialValue;
    },
    "HpTWY" : now(307)
  };
  return rpm_traffic[now(308)](dict["css"](now(309)), rpm_traffic[now(310)]);
};
const elHasOverflowHidden = function($) {
  const propFunc = _0x3e7447;
  const el = {
    "jaxQG" : propFunc(311),
    "JCxZo" : propFunc(312),
    "bWLun" : propFunc(313)
  };
  const rotateMsg = [$["css"](el[propFunc(314)]), $[propFunc(300)](el["JCxZo"]), $[propFunc(300)](el[propFunc(315)])];
  return rotateMsg[propFunc(316)]("hidden");
};
const elHasPositionRelative = (tween) => {
  const now = _0x3e7447;
  const rpm_traffic = {
    "glLOb" : function(name, initialValue) {
      return name === initialValue;
    }
  };
  return rpm_traffic[now(317)](tween[now(300)]("position"), now(318));
};
const elHasPositionAbsolute = (dict) => {
  const now = _0x3e7447;
  const rpm_traffic = {
    "jYslv" : now(319)
  };
  return dict["css"](now(320)) === rpm_traffic[now(321)];
};
const elHasClippableOverflow = function(dict) {
  const now = _0x3e7447;
  const rpm_traffic = {
    "wRHuK" : now(311),
    "dAWjd" : "overflow-x"
  };
  return OVERFLOW_PROPS[now(316)](dict[now(300)](rpm_traffic[now(322)])) || OVERFLOW_PROPS[now(316)](dict[now(300)](now(312))) || OVERFLOW_PROPS[now(316)](dict["css"](rpm_traffic[now(323)]));
};
const canClipContent = function(leftFence, rightFence) {
  const now = _0x3e7447;
  const rpm_traffic = {
    "dKPbw" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  if (!rpm_traffic["dKPbw"](elHasClippableOverflow, rightFence)) {
    return ![];
  }
  const lastviewmatrix = leftFence[now(324)]();
  if (!rpm_traffic[now(325)](elHasPositionRelative, leftFence) && $elements["isAncestor"](rightFence, lastviewmatrix)) {
    return ![];
  }
  if (elHasPositionAbsolute(lastviewmatrix) && $elements[now(326)](rightFence, lastviewmatrix)) {
    return ![];
  }
  return !![];
};
const elOrAncestorIsFixedOrSticky = function(mmCoreSplitViewBlock) {
  const gotoNewOfflinePage = _0x3e7447;
  return !!$elements[gotoNewOfflinePage(327)](mmCoreSplitViewBlock);
};
const elAtCenterPoint = function(leftFence) {
  const now = _0x3e7447;
  const GET_AUTH_URL_TIMEOUT = $document[now(328)](leftFence[now(329)](4273 + -1 * 8382 + 4109 * 1));
  const rpm_traffic = $coordinates[now(330)](leftFence);
  const {
    topCenter : TOGGLE_LICENSE_MODAL,
    leftCenter : TOGGLE_ABOUT_MODAL
  } = rpm_traffic[now(331)];
  const numKeysDeleted = $coordinates[now(332)](GET_AUTH_URL_TIMEOUT, TOGGLE_ABOUT_MODAL, TOGGLE_LICENSE_MODAL);
  if (numKeysDeleted) {
    return $jquery[now(333)](numKeysDeleted);
  }
};
const elDescendentsHavePositionFixedOrAbsolute = function(mmCoreSplitViewBlock, $state) {
  const getField = _0x3e7447;
  const dayNamesShort = $elements[getField(334)]($state[7058 + 5272 + -12330], mmCoreSplitViewBlock);
  const valueProvider = $jquery[getField(333)](dayNamesShort)[getField(335)]($state);
  return _["some"](valueProvider["get"](), (name) => {
    const getLeaf = getField;
    return fixedOrAbsoluteRe[getLeaf(336)]($jquery[getLeaf(333)](name)[getLeaf(300)](getLeaf(320)));
  });
};
const elHasVisibleChild = function(myPreferences) {
  const getPreferenceKey = _0x3e7447;
  return _[getPreferenceKey(337)](myPreferences[getPreferenceKey(338)](), (a) => {
    return isVisible(a);
  });
};
const elIsNotElementFromPoint = function(allGroupNames) {
  const now = _0x3e7447;
  const rpm_traffic = {
    "gOnzq" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ZrDoL" : function(name, initialValue) {
      return name === initialValue;
    },
    "OxVwS" : now(339),
    "QJrOq" : now(287)
  };
  const dep = rpm_traffic["gOnzq"](elAtCenterPoint, allGroupNames);
  if ($elements["isDescendent"](allGroupNames, dep)) {
    return ![];
  }
  if ((rpm_traffic[now(340)](allGroupNames[now(300)](rpm_traffic[now(341)]), rpm_traffic[now(342)]) || rpm_traffic[now(340)](allGroupNames["parent"]()[now(300)](rpm_traffic[now(341)]), now(287))) && (dep && $elements[now(343)](allGroupNames, dep))) {
    return ![];
  }
  return !![];
};
const elIsOutOfBoundsOfAncestorsOverflow = function(n__1269, end__1301 = $elements["getParent"](n__1269)) {
  const rel2Mstr = _0x3e7447;
  const B1238 = {
    "kwKdj" : function(require, load, callback) {
      return require(load, callback);
    },
    "gaETD" : function(_num1, _num2) {
      return _num1 > _num2;
    },
    "Bhhwd" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "QqBmm" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "nmOdH" : function(_num1, _num2) {
      return _num1 > _num2;
    }
  };
  if ($elements[rel2Mstr(344)](end__1301)) {
    return ![];
  }
  const same = $coordinates[rel2Mstr(330)](n__1269);
  if (B1238[rel2Mstr(345)](canClipContent, n__1269, end__1301)) {
    const qrepo = $coordinates[rel2Mstr(330)](end__1301);
    if (B1238[rel2Mstr(346)](same[rel2Mstr(347)][rel2Mstr(348)], B1238[rel2Mstr(349)](qrepo[rel2Mstr(350)], qrepo[rel2Mstr(347)][rel2Mstr(348)])) || B1238["QqBmm"](same[rel2Mstr(347)][rel2Mstr(348)] + same[rel2Mstr(350)], qrepo[rel2Mstr(347)][rel2Mstr(348)]) || B1238[rel2Mstr(351)](same["fromElWindow"][rel2Mstr(352)], B1238[rel2Mstr(349)](qrepo[rel2Mstr(353)], qrepo[rel2Mstr(347)][rel2Mstr(352)])) || B1238[rel2Mstr(354)](same[rel2Mstr(347)]["top"] + same["height"], qrepo[rel2Mstr(347)][rel2Mstr(352)])) {
      return !![];
    }
  }
  return B1238[rel2Mstr(345)](elIsOutOfBoundsOfAncestorsOverflow, n__1269, $elements["getParent"](end__1301));
};
const elIsHiddenByAncestors = function(Model, data, base = Model) {
  const now = _0x3e7447;
  const compiledMatchers = {
    "exeHt" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "QLAzf" : function(require, load, callback, id) {
      return require(load, callback, id);
    }
  };
  const snap = $elements[now(355)](Model);
  if ($elements[now(344)](snap)) {
    return ![];
  }
  if (compiledMatchers[now(356)](elHasOpacityZero, snap) && data) {
    return !![];
  }
  if (elHasOverflowHidden(snap) && elHasNoEffectiveWidthOrHeight(snap)) {
    return !elDescendentsHavePositionFixedOrAbsolute(snap, base);
  }
  return compiledMatchers[now(357)](elIsHiddenByAncestors, snap, data, base);
};
const parentHasNoOffsetWidthOrHeightAndOverflowHidden = function(name__3501) {
  const now = _0x3e7447;
  const B3494 = {
    "zitiO" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "BvBmc" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  if ($elements[now(344)](name__3501)) {
    return ![];
  }
  if (B3494["zitiO"](elHasOverflowHidden, name__3501) && elHasNoEffectiveWidthOrHeight(name__3501)) {
    return name__3501;
  }
  return B3494[now(358)](parentHasNoOffsetWidthOrHeightAndOverflowHidden, $elements[now(355)](name__3501));
};
const parentHasDisplayNone = function(click) {
  const now = _0x3e7447;
  const rpm_traffic = {
    "PVUjL" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "zHciL" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  if (!click[now(275)] || $document[now(359)](click)) {
    return ![];
  }
  if (rpm_traffic[now(360)](elHasDisplayNone, click)) {
    return click;
  }
  return rpm_traffic["zHciL"](parentHasDisplayNone, $elements["getParent"](click));
};
const parentHasVisibilityHidden = function(click) {
  const now = _0x3e7447;
  const rpm_traffic = {
    "bUWRf" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  if (!click[now(275)] || $document[now(359)](click)) {
    return ![];
  }
  if (rpm_traffic[now(361)](elHasVisibilityHidden, click)) {
    return click;
  }
  return parentHasVisibilityHidden($elements[now(355)](click));
};
const parentHasVisibilityCollapse = function(click) {
  const now = _0x3e7447;
  const rpm_traffic = {
    "zJRKE" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  if (!click[now(275)] || $document["isDocument"](click)) {
    return ![];
  }
  if (rpm_traffic[now(362)](elHasVisibilityCollapse, click)) {
    return click;
  }
  return rpm_traffic["zJRKE"](parentHasVisibilityCollapse, $elements[now(355)](click));
};
const parentHasOpacityZero = function(click) {
  const now = _0x3e7447;
  const rpm_traffic = {
    "kklmw" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  if (!click[now(275)] || $document[now(359)](click)) {
    return ![];
  }
  if (rpm_traffic[now(363)](elHasOpacityZero, click)) {
    return click;
  }
  return parentHasOpacityZero(click[now(364)]());
};
const getReasonIsHidden = function(name__3501, match = {
  "checkOpacity" : !![]
}) {
  const _char = _0x3e7447;
  const B3494 = {
    "yiVGR" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "uPVdP" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "lycIC" : _char(365),
    "jztqi" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "MmFax" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "EwUdV" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "bdsxp" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "OECZj" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ogxrI" : "transformed",
    "SVbHW" : _char(366),
    "kyQmJ" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "QHoBI" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  const _FOO_ = $elements[_char(367)](name__3501, "short");
  let str = B3494["yiVGR"](elOffsetWidth, name__3501);
  let _iso8859Str = B3494[_char(368)](elOffsetHeight, name__3501);
  let value;
  let num;
  if (B3494[_char(368)](elHasDisplayNone, name__3501)) {
    return _char(369) + _FOO_ + _char(370);
  }
  if (value = parentHasDisplayNone($elements[_char(355)](name__3501))) {
    return num = $elements[_char(367)](value, B3494["lycIC"]), _char(369) + _FOO_ + _char(371) + num + _char(372);
  }
  if (value = B3494["jztqi"](parentHasVisibilityHidden, $elements[_char(355)](name__3501))) {
    return num = $elements["stringify"](value, "short"), _char(369) + _FOO_ + _char(371) + num + _char(373);
  }
  if (value = B3494["MmFax"](parentHasVisibilityCollapse, $elements[_char(355)](name__3501))) {
    return num = $elements[_char(367)](value, B3494[_char(374)]), _char(369) + _FOO_ + _char(371) + num + "` has CSS property: `visibility: collapse`";
  }
  if ($elements[_char(375)](name__3501)) {
    return _char(369) + _FOO_ + _char(376);
  }
  if (B3494[_char(377)](elHasVisibilityHidden, name__3501)) {
    return _char(369) + _FOO_ + _char(378);
  }
  if (B3494[_char(379)](elHasVisibilityCollapse, name__3501)) {
    return "This element `" + _FOO_ + _char(380);
  }
  if (B3494["OECZj"](elHasOpacityZero, name__3501) && match["checkOpacity"]) {
    return "This element `" + _FOO_ + _char(381);
  }
  if ((value = parentHasOpacityZero(name__3501[_char(364)]())) && match[_char(282)]) {
    return num = $elements[_char(367)](value, B3494[_char(374)]), _char(369) + _FOO_ + "` is not visible because its parent `" + num + "` has CSS property: `opacity: 0`";
  }
  if (elHasNoOffsetWidthOrHeight(name__3501)) {
    return _char(369) + _FOO_ + _char(382) + str + " x " + _iso8859Str + _char(383);
  }
  const $definitionBase = $transform[_char(279)](name__3501);
  if ($definitionBase === B3494[_char(384)]) {
    return _char(369) + _FOO_ + "` is not visible because it is hidden by transform.";
  }
  if ($definitionBase === B3494[_char(385)]) {
    return "This element `" + _FOO_ + _char(386);
  }
  if (value = B3494["OECZj"](parentHasNoOffsetWidthOrHeightAndOverflowHidden, $elements["getParent"](name__3501))) {
    return num = $elements[_char(367)](value, B3494[_char(374)]), str = B3494[_char(387)](elOffsetWidth, value), _iso8859Str = B3494[_char(388)](elOffsetHeight, value), _char(369) + _FOO_ + _char(371) + num + _char(389) + str + _char(390) + _iso8859Str + _char(383);
  }
  if (B3494["QHoBI"](elOrAncestorIsFixedOrSticky, name__3501)) {
    if (B3494[_char(391)](elIsNotElementFromPoint, name__3501)) {
      const _0x1375ea = $elements[_char(367)](B3494[_char(391)](elAtCenterPoint, name__3501));
      if (_0x1375ea) {
        return _char(369) + _FOO_ + "` is not visible because it has CSS property: `position: fixed` and it's being covered by another element:\n\n`" + _0x1375ea + "`";
      }
      return _char(369) + _FOO_ + _char(392);
    }
  } else {
    if (B3494[_char(391)](elIsOutOfBoundsOfAncestorsOverflow, name__3501)) {
      return _char(369) + _FOO_ + _char(393);
    }
  }
  return "This element `" + _FOO_ + _char(394);
};
function _0x1587(isBgroundImg, stgs) {
  return _0x1587 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (4695 + -7550 + 3104);
    let _0xe26576 = _0x20d3[isBgroundImg];
    return _0xe26576;
  }, _0x1587(isBgroundImg, stgs);
}
module[_0x3e7447(395)] = {
  "isVisible" : isVisible,
  "isHidden" : isHidden,
  "parentHasDisplayNone" : parentHasDisplayNone,
  "getReasonIsHidden" : getReasonIsHidden
};

