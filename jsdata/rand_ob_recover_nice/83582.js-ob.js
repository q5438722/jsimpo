'use strict';
function _0x3f78(recursionLevel, primaryTxHex) {
  return _0x3f78 = function(level, primaryTxHex) {
    level = level - (8880 + -4436 * -1 + -12878);
    var rowsOfColumns = _0x16ea[level];
    return rowsOfColumns;
  }, _0x3f78(recursionLevel, primaryTxHex);
}
angular[_0x1c2659(449)](_0x1c2659(450), [], [_0x1c2659(451), function(properties) {
  var get = _0x1c2659;
  var item = {
    "gzXao" : function(leftDiags, columns) {
      return leftDiags | columns;
    },
    "QVGuf" : function(text, contextClosing) {
      return text == contextClosing;
    },
    "KHqcY" : get(452),
    "YYquF" : get(453),
    "EdCUU" : get(454),
    "ueuEg" : "dimanche",
    "UeiWd" : "lundi",
    "hSWkt" : "mercredi",
    "peHVT" : get(455),
    "xwWeB" : get(456),
    "btvxE" : get(457),
    "WHbzK" : "apr\u00e8s J\u00e9sus-Christ",
    "cgcKa" : "av. J.-C.",
    "fiiSg" : get(458),
    "FllWK" : get(459),
    "AVdFb" : get(460),
    "QolGd" : get(461),
    "AYyDu" : get(462),
    "lYLVH" : get(463),
    "jnCJk" : get(464),
    "LoxbC" : get(465),
    "zZhYW" : get(466),
    "TIbXi" : get(467),
    "fIcXo" : get(468),
    "gnXkm" : get(469),
    "lkBpD" : "lun.",
    "cGyxr" : get(470),
    "NLZiP" : get(471),
    "nZWNi" : "jeu.",
    "pYJVj" : get(472),
    "fOgEc" : get(473),
    "mRBdT" : "janv.",
    "eUiri" : get(474),
    "eWuLA" : get(475),
    "LRFIc" : get(476),
    "QmsZr" : get(477),
    "ifJCS" : get(478),
    "ywzho" : "d MMMM y",
    "bKeJj" : get(479),
    "lXmiJ" : get(480),
    "PGFNp" : get(481),
    "qbRls" : get(482),
    "AOKYf" : "dd/MM/y",
    "qvtJN" : get(483),
    "FmNto" : get(484)
  };
  var PLURAL_CATEGORY = {
    "ZERO" : get(485),
    "ONE" : "one",
    "TWO" : item[get(486)],
    "FEW" : item["YYquF"],
    "MANY" : "many",
    "OTHER" : get(487)
  };
  properties[get(488)](item[get(489)], {
    "DATETIME_FORMATS" : {
      "AMPMS" : ["AM", "PM"],
      "DAY" : [item[get(490)], item[get(491)], get(492), item[get(493)], item[get(494)], item[get(495)], "samedi"],
      "ERANAMES" : [item[get(496)], item["WHbzK"]],
      "ERAS" : [item[get(497)], get(498)],
      "FIRSTDAYOFWEEK" : 0,
      "MONTH" : [item[get(499)], item[get(500)], item["AVdFb"], item[get(501)], item["AYyDu"], item[get(502)], item["jnCJk"], item[get(503)], item[get(504)], item["TIbXi"], get(505), item[get(506)]],
      "SHORTDAY" : [item["gnXkm"], item[get(507)], item[get(508)], item[get(509)], item[get(510)], item[get(511)], item[get(512)]],
      "SHORTMONTH" : [item[get(513)], item[get(514)], item[get(515)], item[get(516)], item[get(517)], "juin", item["LRFIc"], item[get(503)], get(518), get(519), item[get(520)], item[get(521)]],
      "STANDALONEMONTH" : [get(458), item[get(500)], "mars", item[get(501)], item[get(517)], item[get(502)], item[get(522)], item[get(503)], item[get(504)], get(467), get(505), item["fIcXo"]],
      "WEEKENDRANGE" : [1 * 2499 + 6718 * 1 + -9212, -2185 + 3 * 3208 + -7433 * 1],
      "fullDate" : get(523),
      "longDate" : item[get(524)],
      "medium" : item[get(525)],
      "mediumDate" : item[get(526)],
      "mediumTime" : item[get(527)],
      "short" : item[get(528)],
      "shortDate" : item[get(529)],
      "shortTime" : get(530)
    },
    "NUMBER_FORMATS" : {
      "CURRENCY_SYM" : item[get(531)],
      "DECIMAL_SEP" : ",",
      "GROUP_SEP" : "\u00a0",
      "PATTERNS" : [{
        "gSize" : 3,
        "lgSize" : 3,
        "maxFrac" : 3,
        "minFrac" : 0,
        "minInt" : 1,
        "negPre" : "-",
        "negSuf" : "",
        "posPre" : "",
        "posSuf" : ""
      }, {
        "gSize" : 3,
        "lgSize" : 3,
        "maxFrac" : 0,
        "minFrac" : 0,
        "minInt" : 1,
        "negPre" : "-",
        "negSuf" : "\u00a0\u00a4",
        "posPre" : "",
        "posSuf" : "\u00a0\u00a4"
      }]
    },
    "id" : get(532),
    "localeID" : item[get(533)],
    "pluralCat" : function(event, n) {
      var GET = get;
      var child = item[GET(534)](event, -4 * -29 + 9412 + -9528);
      if (item[GET(535)](child, -1 * -115 + 7397 * -1 + 7282) || item[GET(535)](child, -3337 + 9087 + -5749)) {
        return PLURAL_CATEGORY[GET(536)];
      }
      return PLURAL_CATEGORY["OTHER"];
    }
  });
}]);

