'use strict';
const semver = require(_0x137568(358));
const url = require("url");
const path = require(_0x137568(359));
const log = require(_0x137568(360));
const headersTarballRange = _0x137568(361);
const bitsre = /\/win-(x86|x64|arm64)\//;
const bitsreV3 = /\/win-(x86|ia32|x64)\//;
function _0x1319(recursionLevel, primaryTxHex) {
  return _0x1319 = function(level, primaryTxHex) {
    level = level - (-125 * 37 + -6716 + 1 * 11689);
    var rowsOfColumns = _0x408c[level];
    return rowsOfColumns;
  }, _0x1319(recursionLevel, primaryTxHex);
}
function processRelease(fn, map, repo, obj) {
  var parseInt = _0x137568;
  var msg = {
    "SYkgA" : parseInt(362),
    "ZZEMd" : function(name, initialValue) {
      return name === initialValue;
    },
    "wYqdH" : parseInt(363),
    "IMhVP" : function(nTilesLoaded, nTilesToLoad) {
      return nTilesLoaded >= nTilesToLoad;
    },
    "AXRkY" : parseInt(364),
    "oKJmr" : "download",
    "gpbFP" : parseInt(365),
    "OvPce" : parseInt(366),
    "ylhRl" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "HuudA" : "2|3|0|4|1",
    "sFdIk" : function(cb, TextureClass, callback, gzipped, external_b) {
      return cb(TextureClass, callback, gzipped, external_b);
    },
    "ZgBSS" : "x64",
    "XbZvk" : function(cb, TextureClass, callback, gzipped, external_b) {
      return cb(TextureClass, callback, gzipped, external_b);
    },
    "gOLcP" : parseInt(367),
    "rbJSF" : parseInt(368),
    "flxQd" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "ztnMm" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "RlBQe" : parseInt(369),
    "QFNhK" : parseInt(370),
    "rzILC" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "xJLPj" : function(value, joiner) {
      return value !== joiner;
    },
    "aGNxD" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "RKHMA" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  var options = semver["valid"](fn[723 * -11 + -3883 + 11 * 1076]) && fn[9406 + 461 * 2 + -10328] || map[parseInt(371)]["target"] || repo;
  var value = semver[parseInt(372)](options);
  var webColor = map[parseInt(371)][msg[parseInt(373)]] || map[parseInt(371)][parseInt(374)];
  var $Handles;
  var type;
  var name;
  var distBaseUrl;
  var baseUrl;
  var result;
  var buf;
  var winObj;
  var schema;
  var colors;
  if (!value) {
    return {
      "version" : options
    };
  }
  options = value[parseInt(375)];
  $Handles = msg[parseInt(376)](options, semver["parse"](repo)["version"]);
  if (!$Handles) {
    obj = null;
  }
  if (obj) {
    name = obj[parseInt(377)][parseInt(378)](/io\.js/, msg[parseInt(379)]);
  } else {
    type = msg[parseInt(380)](value[parseInt(381)], 3 * -2791 + -1123 + 1 * 9497) && value[parseInt(381)] < -8415 + 7146 + 1273;
    name = type ? msg[parseInt(379)] : msg["AXRkY"];
  }
  if (!webColor && process["env"]["NODEJS_ORG_MIRROR"]) {
    webColor = process["env"][parseInt(382)];
  }
  if (webColor) {
    log["verbose"](msg[parseInt(383)], msg[parseInt(384)], webColor);
  }
  if (webColor) {
    distBaseUrl = webColor["replace"](/\/+$/, "");
  } else {
    distBaseUrl = msg["OvPce"];
  }
  distBaseUrl = distBaseUrl + (msg["ylhRl"]("/v", options) + "/");
  if (obj && obj[parseInt(385)] && !webColor) {
    var callbackVals = msg[parseInt(386)][parseInt(387)]("|");
    var callbackCount = -1 * -890 + 9662 + -10552;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          buf = msg["sFdIk"](resolveLibUrl, name, obj[parseInt(388)] || baseUrl || distBaseUrl, msg[parseInt(389)], value["major"]);
          continue;
        case "1":
          schema = obj[parseInt(385)];
          continue;
        case "2":
          baseUrl = url["resolve"](obj["headersUrl"], "./");
          continue;
        case "3":
          result = msg["XbZvk"](resolveLibUrl, name, obj[parseInt(388)] || baseUrl || distBaseUrl, msg[parseInt(390)], value["major"]);
          continue;
        case "4":
          winObj = msg["XbZvk"](resolveLibUrl, name, obj[parseInt(388)] || baseUrl || distBaseUrl, msg[parseInt(391)], value[parseInt(381)]);
          continue;
      }
      break;
    }
  } else {
    baseUrl = distBaseUrl;
    result = resolveLibUrl(name, baseUrl, msg["gOLcP"], value[parseInt(381)]);
    buf = msg["XbZvk"](resolveLibUrl, name, baseUrl, msg[parseInt(389)], value["major"]);
    winObj = msg["XbZvk"](resolveLibUrl, name, baseUrl, msg[parseInt(391)], value[parseInt(381)]);
    colors = semver[parseInt(392)](value, headersTarballRange);
    schema = url[parseInt(393)](baseUrl, msg[parseInt(394)](msg[parseInt(394)](msg[parseInt(395)](msg["ztnMm"](name, "-v"), options), colors ? msg[parseInt(396)] : ""), parseInt(397)));
  }
  return {
    "version" : options,
    "semver" : value,
    "name" : name,
    "baseUrl" : baseUrl,
    "tarballUrl" : schema,
    "shasumsUrl" : url[parseInt(393)](baseUrl, msg[parseInt(398)]),
    "versionDir" : msg[parseInt(399)](msg["xJLPj"](name, msg[parseInt(400)]) ? name + "-" : "", options),
    "ia32" : {
      "libUrl" : result,
      "libPath" : msg[parseInt(401)](normalizePath, path[parseInt(402)](url[parseInt(372)](baseUrl)[parseInt(359)], url[parseInt(372)](result)["path"]))
    },
    "x64" : {
      "libUrl" : buf,
      "libPath" : msg[parseInt(403)](normalizePath, path[parseInt(402)](url[parseInt(372)](baseUrl)["path"], url["parse"](buf)[parseInt(359)]))
    },
    "arm64" : {
      "libUrl" : winObj,
      "libPath" : normalizePath(path[parseInt(402)](url[parseInt(372)](baseUrl)["path"], url[parseInt(372)](winObj)[parseInt(359)]))
    }
  };
}
function normalizePath(url) {
  var flatten = _0x137568;
  return path[flatten(404)](url)[flatten(378)](/\\/g, "/");
}
function resolveLibUrl(res, name, i, versionMajor) {
  var min = _0x137568;
  var c = {
    "SHFEB" : function(nTilesLoaded, nTilesToLoad) {
      return nTilesLoaded >= nTilesToLoad;
    },
    "YjtSi" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "vuPxb" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "nAUlq" : "win-",
    "fcDNS" : min(405),
    "Xaraf" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "ubXkU" : "x86",
    "FbAbG" : min(406)
  };
  var target = url[min(393)](name, "./");
  var _0x470c72 = bitsre[min(407)](name) || versionMajor === 1617 + -5385 + 3771 && bitsreV3[min(407)](name);
  if (!_0x470c72) {
    if (c[min(408)](versionMajor, -30 * 242 + -1 * 5923 + 13184)) {
      return url[min(393)](target, c[min(409)](c[min(410)](c[min(411)], i) + "/" + res, c["fcDNS"]));
    }
    return url["resolve"](target, c[min(412)](c[min(412)](i === c[min(413)] ? "" : i + "/", res), c[min(414)]));
  }
  return name[min(378)](versionMajor === -9927 + 3966 * -1 + -9 * -1544 ? bitsreV3 : bitsre, c[min(412)](c[min(415)], i) + "/");
}
module[_0x137568(416)] = processRelease;

