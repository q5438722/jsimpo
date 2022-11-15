'use strict';
const semver = require("semver");
const url = require("url");
const path = require("path");
const log = require("npmlog");
const headersTarballRange = ">= 3.0.0 || ~0.12.10 || ~0.10.42";
const bitsre = /\/win-(x86|x64|arm64)\//;
const bitsreV3 = /\/win-(x86|ia32|x64)\//;
function processRelease(tag, context, file, fn) {
  var version = semver["valid"](tag[0]) && tag[0] || context["opts"]["target"] || file;
  var versions = semver["parse"](version);
  var webColor = context["opts"][_0x51fccd["kTOZE"]] || context["opts"]["disturl"];
  var isDefaultVersion;
  var lc;
  var name;
  var distBaseUrl;
  var baseUrl;
  var libUrl32;
  var libUrl64;
  var result;
  var tarballUrl;
  var canGetHeaders;
  if (!versions) {
    return {
      "version" : version
    };
  }
  version = versions["version"];
  isDefaultVersion = version === semver["parse"](file)["version"];
  if (!isDefaultVersion) {
    if ("VcLOM" !== _0x51fccd["rEmmJ"]) {
      webColor = process["env"]["NODEJS_ORG_MIRROR"];
    } else {
      fn = null;
    }
  }
  if (fn) {
    name = fn["name"]["replace"](/io\.js/, _0x51fccd["uUywM"]);
  } else {
    if (_0x51fccd["DyIMa"] === _0x51fccd["DyIMa"]) {
      lc = versions["major"] >= 1 && versions["major"] < 4;
      name = lc ? _0x51fccd["uUywM"] : _0x51fccd["GdAcm"];
    } else {
      distBaseUrl = _0x51fccd["ZyvrW"];
    }
  }
  if (!webColor && process["env"]["NODEJS_ORG_MIRROR"]) {
    webColor = process["env"]["NODEJS_ORG_MIRROR"];
  }
  if (webColor) {
    if (_0x51fccd["hUWGD"] === _0x51fccd["hUWGD"]) {
      log["verbose"](_0x51fccd["IlOLI"], _0x51fccd["iYZNK"], webColor);
    } else {
      return {
        "version" : version
      };
    }
  }
  if (webColor) {
    distBaseUrl = webColor["replace"](/\/+$/, "");
  } else {
    if (_0x51fccd["BVTOB"] === _0x51fccd["BVTOB"]) {
      distBaseUrl = _0x51fccd["ZyvrW"];
    } else {
      name = fn["name"]["replace"](/io\.js/, _0x51fccd["uUywM"]);
    }
  }
  distBaseUrl = distBaseUrl + ("/v" + version + "/");
  if (fn && fn["headersUrl"] && !webColor) {
    var callbackVals = "3|2|1|0|4"["split"]("|");
    var callbackCount = 0;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          result = resolveLibUrl(name, fn["libUrl"] || baseUrl || distBaseUrl, _0x51fccd["rYwWe"], versions["major"]);
          continue;
        case "1":
          libUrl64 = resolveLibUrl(name, fn["libUrl"] || baseUrl || distBaseUrl, _0x51fccd["gaWyn"], versions["major"]);
          continue;
        case "2":
          libUrl32 = resolveLibUrl(name, fn["libUrl"] || baseUrl || distBaseUrl, "x86", versions["major"]);
          continue;
        case "3":
          baseUrl = url["resolve"](fn["headersUrl"], "./");
          continue;
        case "4":
          tarballUrl = fn["headersUrl"];
          continue;
      }
      break;
    }
  } else {
    var callbackVals = _0x51fccd["lJiuW"]["split"]("|");
    var callbackCount = 0;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          canGetHeaders = semver["satisfies"](versions, headersTarballRange);
          continue;
        case "1":
          result = resolveLibUrl(name, baseUrl, _0x51fccd["rYwWe"], versions["major"]);
          continue;
        case "2":
          libUrl32 = resolveLibUrl(name, baseUrl, _0x51fccd["zmXcC"], versions["major"]);
          continue;
        case "3":
          baseUrl = distBaseUrl;
          continue;
        case "4":
          tarballUrl = url["resolve"](baseUrl, name + "-v" + version + (canGetHeaders ? _0x51fccd["xqGsR"] : "") + _0x51fccd["gMSWC"]);
          continue;
        case "5":
          libUrl64 = resolveLibUrl(name, baseUrl, _0x51fccd["gaWyn"], versions["major"]);
          continue;
      }
      break;
    }
  }
  return {
    "version" : version,
    "semver" : versions,
    "name" : name,
    "baseUrl" : baseUrl,
    "tarballUrl" : tarballUrl,
    "shasumsUrl" : url["resolve"](baseUrl, "SHASUMS256.txt"),
    "versionDir" : (name !== _0x51fccd["GdAcm"] ? name + "-" : "") + version,
    "ia32" : {
      "libUrl" : libUrl32,
      "libPath" : normalizePath(path["relative"](url["parse"](baseUrl)["path"], url["parse"](libUrl32)["path"]))
    },
    "x64" : {
      "libUrl" : libUrl64,
      "libPath" : normalizePath(path["relative"](url["parse"](baseUrl)["path"], url["parse"](libUrl64)["path"]))
    },
    "arm64" : {
      "libUrl" : result,
      "libPath" : normalizePath(path["relative"](url["parse"](baseUrl)["path"], url["parse"](result)["path"]))
    }
  };
}
function normalizePath(filename) {
  return path["normalize"](filename)["replace"](/\\/g, "/");
}
function resolveLibUrl(tagName, name, arch, versionMajor) {
  var target = url["resolve"](name, "./");
  var _0x23ea77 = bitsre["test"](name) || versionMajor === 3 && bitsreV3["test"](name);
  if (!_0x23ea77) {
    if (versionMajor >= 1) {
      return url["resolve"](target, _0x4e1f91["gOfQY"] + arch + "/" + tagName + _0x4e1f91["QdwXs"]);
    }
    return url["resolve"](target, (arch === _0x4e1f91["KQdHR"] ? "" : arch + "/") + tagName + _0x4e1f91["QdwXs"]);
  }
  return name["replace"](versionMajor === 3 ? bitsreV3 : bitsre, "/win-" + arch + "/");
}
module["exports"] = processRelease;

