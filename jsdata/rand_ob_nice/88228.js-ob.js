'use strict';
const tOutResp = ['@import "other.css"; body { color: "blue"; }', "test.css", "import", '@import "custom.css"; body { color: "red"; }', "jAOvr", "buZJr", "mergeCssAsts", "name", "IChnw", "DPHiK", "minifier-css - hoist imports after comments from merged CSS AST's", "comment", "ZjVcZ", "NhoFY", "OwVDt", "Fzagc", "QiLvb", "877807hqwfeg", "1059361ZxGpCz", "1NgTAKj", "319343YmvAAs", "1385SIhnIE", "531IonYFa", "779616jUubxA", "1BapCUR", "1574161gRJwNy", "4QZXOBy", "709666maIZTv", "add", "minifier-css - CSS can be parsed properly into an AST", 
"root", "body", '"red"', "type", "LByof", "nodes", "length", "rule", "equal", "selector", "value", "AvOzv", "minifier-css - CSS AST can be converted back into a string", 'body { color: "red"}', "stringifyCss", "isNotNull", "minifier-css - simple CSS minification", "a \t\n{ color: red } \n", "a \t\n{ color: red; margin: 1; } \n", "a{color:red;margin:1}", "a , p \t\n{ color: red; } \n", "a,p{color:red}", "removing empty rules", "*.my-class { color: #fff; }", "removing universal selector", "p+.my-class{color:#fff}", 
'removing optional whitespace around "+" in selector', "a {\n    font:12px 'Helvetica',\"Arial\",'Nautica';\n    background:url(\"/some/nice/picture.png\");\n}", "removing quotes in font and url (if possible)", "a{color:red}", "minifyCss", "UlrsB", "PrKjy", "only last one loses semicolon", "LDbsD", "EIcGz", "more semicolons than needed", "FYMkN", "multiple selectors", "bLBla", "PLyRp", ".my-class{color:#fff}", "bUumD", "p>.my-class{color:#fff}", "henYc", "lMLoP", "uvwcM", "qKEEF", "rNMYS", "gpVTT", 
"LOxUI", "qoBgR", "minifier-css - Multiple CSS AST's can be merged into a single CSS AST", 'body { color: "blue"; }', "test2.css", "ILJeg", "yVCZW", "parseCss", "fFbvp", "map", "sources", "minifier-css - hoist imports from merged CSS AST's"];
const fromNumber = test;
function test(type, n) {
  return test = function(value, i) {
    value = value - (-2 * 2909 + 5690 + 14 * 26);
    let command = tOutResp[value];
    return command;
  }, test(type, n);
}
(function(data, val) {
  const toMonths = test;
  for (; !![];) {
    try {
      const nodeval = parseInt(toMonths(236)) + -parseInt(toMonths(237)) * parseInt(toMonths(238)) + -parseInt(toMonths(239)) + -parseInt(toMonths(240)) * parseInt(toMonths(241)) + parseInt(toMonths(242)) + parseInt(toMonths(243)) * -parseInt(toMonths(244)) + parseInt(toMonths(245)) * parseInt(toMonths(246));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x2d5f0c) {
      data["push"](data["shift"]());
    }
  }
})(tOutResp, 190961 * -2 + -2 * 524891 + 2239491 * 1);
import{
  CssTools as CssTools
}from "./minifier";
Tinytest[fromNumber(247)](fromNumber(248), (formats) => {
  const parseInt = fromNumber;
  const frontpageItems = {
    "LByof" : parseInt(249),
    "hiHZe" : parseInt(250),
    "IfuJh" : "decl",
    "AvOzv" : parseInt(251)
  };
  const map = CssTools["parseCss"]('body { color: "red"}');
  formats["equal"](map[parseInt(252)], frontpageItems[parseInt(253)]);
  formats["equal"](map[parseInt(254)][parseInt(255)], 1 * -5111 + -9404 * -1 + -2 * 2146);
  const colData = map[parseInt(254)][1 * -9886 + 2486 + 7400];
  formats["equal"](colData[parseInt(252)], parseInt(256));
  formats[parseInt(257)](colData[parseInt(258)], frontpageItems["hiHZe"]);
  formats[parseInt(257)](colData[parseInt(254)][parseInt(255)], 1791 + -23 * -181 + -5953);
  const data = colData[parseInt(254)][-3907 * 1 + -5 * 1049 + 64 * 143];
  formats["equal"](data[parseInt(252)], frontpageItems["IfuJh"]);
  formats[parseInt(257)](data["prop"], "color");
  formats[parseInt(257)](data[parseInt(259)], frontpageItems[parseInt(260)]);
}), Tinytest[fromNumber(247)](fromNumber(261), (options) => {
  const plural = fromNumber;
  const datum = plural(262);
  const GET_AUTH_URL_TIMEOUT = CssTools["parseCss"](datum);
  const a = CssTools[plural(263)](GET_AUTH_URL_TIMEOUT, {
    "sourcemap" : !![]
  });
  options[plural(257)](datum, a["code"]);
  options[plural(264)](a["map"]);
}), Tinytest[fromNumber(247)](fromNumber(265), (KUTE) => {
  const normalizeNumber = fromNumber;
  const vertices2 = {
    "UlrsB" : normalizeNumber(266),
    "RLNTE" : "whitespace check",
    "XCmjb" : normalizeNumber(267),
    "PrKjy" : normalizeNumber(268),
    "LDbsD" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "EIcGz" : "a \t\n{ color: red;;; margin: 1;;; } \n",
    "lEoeu" : normalizeNumber(269),
    "FYMkN" : normalizeNumber(270),
    "xwORR" : "body {}",
    "bLBla" : normalizeNumber(271),
    "PLyRp" : normalizeNumber(272),
    "ByWqL" : normalizeNumber(273),
    "bUumD" : "p > *.my-class { color: #fff; }",
    "henYc" : 'removing optional whitespace around ">" in selector',
    "lMLoP" : normalizeNumber(274),
    "uvwcM" : normalizeNumber(275),
    "qKEEF" : normalizeNumber(276),
    "rNMYS" : normalizeNumber(277),
    "gpVTT" : "/* no comments */ a { color: red; }",
    "LOxUI" : normalizeNumber(278),
    "qoBgR" : "remove comments"
  };
  const divideTriangle = (count, from, to) => {
    const getPreferenceKey = normalizeNumber;
    KUTE[getPreferenceKey(257)](CssTools[getPreferenceKey(279)](count)[4 * 997 + -18 * -357 + 82 * -127], from, to);
  };
  divideTriangle(vertices2[normalizeNumber(280)], normalizeNumber(278), vertices2["RLNTE"]);
  divideTriangle(vertices2["XCmjb"], vertices2[normalizeNumber(281)], normalizeNumber(282));
  vertices2[normalizeNumber(283)](divideTriangle, vertices2[normalizeNumber(284)], vertices2["PrKjy"], normalizeNumber(285));
  vertices2[normalizeNumber(283)](divideTriangle, vertices2["lEoeu"], vertices2[normalizeNumber(286)], normalizeNumber(287));
  divideTriangle(vertices2["xwORR"], "", vertices2[normalizeNumber(288)]);
  divideTriangle(vertices2[normalizeNumber(289)], normalizeNumber(290), vertices2["ByWqL"]);
  vertices2[normalizeNumber(283)](divideTriangle, vertices2[normalizeNumber(291)], normalizeNumber(292), vertices2[normalizeNumber(293)]);
  vertices2["LDbsD"](divideTriangle, "p +  *.my-class { color: #fff; }", vertices2[normalizeNumber(294)], vertices2[normalizeNumber(295)]);
  vertices2["LDbsD"](divideTriangle, vertices2[normalizeNumber(296)], "a{font:12px Helvetica,Arial,Nautica;background:url(/some/nice/picture.png)}", vertices2[normalizeNumber(297)]);
  divideTriangle(vertices2[normalizeNumber(298)], vertices2[normalizeNumber(299)], vertices2[normalizeNumber(300)]);
}), Tinytest[fromNumber(247)](fromNumber(301), (options) => {
  const parseInt = fromNumber;
  const a = {
    "yfuci" : '@import "custom.css"; body { color: "red"; }',
    "ILJeg" : parseInt(302),
    "yVCZW" : "test.css",
    "fFbvp" : parseInt(303)
  };
  const GET_AUTH_URL_TIMEOUT = a["yfuci"];
  const numKeysDeleted = a[parseInt(304)];
  const _0x1d32aa = CssTools["parseCss"](GET_AUTH_URL_TIMEOUT, {
    "from" : a[parseInt(305)]
  });
  const _0x154a1d = CssTools[parseInt(306)](numKeysDeleted, {
    "from" : a[parseInt(307)]
  });
  const colData = CssTools["mergeCssAsts"]([_0x1d32aa, _0x154a1d]);
  const values = CssTools[parseInt(263)](colData, {
    "sourcemap" : !![],
    "inputSourcemaps" : ![]
  });
  options[parseInt(257)](colData[parseInt(254)][parseInt(255)], -1286 + -3571 + 4860);
  options[parseInt(257)](values[parseInt(308)]["sources"][parseInt(255)], 1 * -6557 + 6940 + -381);
  options[parseInt(257)](values["map"][parseInt(309)][-7 * -289 + 8349 + -10372], a[parseInt(305)]);
}), Tinytest["add"](fromNumber(310), (el) => {
  const rel2Mstr = fromNumber;
  const a = {
    "jAOvr" : rel2Mstr(311),
    "wrsWo" : rel2Mstr(312),
    "buZJr" : rel2Mstr(303),
    "IChnw" : rel2Mstr(313),
    "DPHiK" : rel2Mstr(256)
  };
  const artistTrack = rel2Mstr(314);
  const GET_AUTH_URL_TIMEOUT = a[rel2Mstr(315)];
  const _0x58f411 = CssTools["parseCss"](artistTrack, {
    "from" : a["wrsWo"]
  });
  const _0x38cf9a = CssTools[rel2Mstr(306)](GET_AUTH_URL_TIMEOUT, {
    "from" : a[rel2Mstr(316)]
  });
  const same = CssTools[rel2Mstr(317)]([_0x58f411, _0x38cf9a]);
  const qrepo = CssTools[rel2Mstr(263)](same, {
    "sourcemap" : !![],
    "inputSourcemaps" : ![]
  });
  el[rel2Mstr(257)](same["nodes"][rel2Mstr(255)], 18 * -15 + -246 + 520);
  el[rel2Mstr(257)](same[rel2Mstr(254)][-9080 + 1660 + 7420][rel2Mstr(318)], a[rel2Mstr(319)]);
  el[rel2Mstr(257)](same[rel2Mstr(254)][-1042 * 9 + 1283 * 7 + -1 * -398][rel2Mstr(318)], rel2Mstr(313));
  el[rel2Mstr(257)](same[rel2Mstr(254)][8131 + 3279 + -11408][rel2Mstr(252)], a[rel2Mstr(320)]);
  el[rel2Mstr(257)](same[rel2Mstr(254)][-6861 + -1841 + -1 * -8705]["type"], a["DPHiK"]);
  el[rel2Mstr(257)](qrepo["map"]["sources"][rel2Mstr(255)], -1189 * 1 + -3829 + -1 * -5020);
  el[rel2Mstr(257)](qrepo["map"][rel2Mstr(309)][1 * 1724 + -1560 + -164], rel2Mstr(312));
}), Tinytest[fromNumber(247)](fromNumber(321), (currentItems) => {
  const parseInt = fromNumber;
  const match = {
    "VRsUg" : '@import "custom.css"; body { color: "red"; }',
    "ZjVcZ" : '/* comment */ @import "other.css"; body { color: "blue"; }',
    "NhoFY" : parseInt(303),
    "OwVDt" : parseInt(322),
    "Fzagc" : "rule",
    "QiLvb" : "test.css"
  };
  const artistTrack = match["VRsUg"];
  const GET_AUTH_URL_TIMEOUT = match[parseInt(323)];
  const _0xc010fb = CssTools[parseInt(306)](artistTrack, {
    "from" : parseInt(312)
  });
  const _0x4b40b5 = CssTools[parseInt(306)](GET_AUTH_URL_TIMEOUT, {
    "from" : match[parseInt(324)]
  });
  const values = CssTools["mergeCssAsts"]([_0xc010fb, _0x4b40b5]);
  const colData = CssTools[parseInt(263)](values, {
    "sourcemap" : !![],
    "inputSourcemaps" : ![]
  });
  currentItems[parseInt(257)](values[parseInt(254)][parseInt(255)], 4654 * 2 + 4319 + -278 * 49);
  currentItems[parseInt(257)](values["nodes"][-1 * 5204 + -9411 + 14615][parseInt(318)], parseInt(313));
  currentItems[parseInt(257)](values[parseInt(254)][-3431 + 447 * 9 + -591][parseInt(252)], match[parseInt(325)]);
  currentItems[parseInt(257)](values[parseInt(254)][1 * -1356 + -6180 + 7538][parseInt(318)], "import");
  currentItems[parseInt(257)](values["nodes"][-3 * 1212 + 8242 + -4603][parseInt(252)], match["Fzagc"]);
  currentItems[parseInt(257)](values["nodes"][1 * 6062 + -238 + 1 * -5820]["type"], match[parseInt(326)]);
  currentItems["equal"](colData[parseInt(308)][parseInt(309)][parseInt(255)], -9422 + -1 * 2969 + 12393);
  currentItems[parseInt(257)](colData[parseInt(308)][parseInt(309)][-118 * 4 + 1 * -476 + -2 * -474], match[parseInt(327)]);
});

