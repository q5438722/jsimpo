'use strict';
const _0x330b = ["exports", "556819CKBXNj", "508192DxeRMd", "594533iuYeLw", "1EoUFWh", "7QyRHWN", "124377zjpbzx", "701729tYVvrr", "1wAFAqw", "586949PazWCv", "956429JXoFKP", "fs-extra", "glob", "utf-8", "writeFileSync", "parse", "stringify", "sync", "join", "forEach", "match", "OLqqc"];
const _0x5088ce = _0x515f;
function _0x515f(isBgroundImg, stgs) {
  return _0x515f = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (248 * 13 + -1013 * -7 + -10101);
    let _0x44e024 = _0x330b[isBgroundImg];
    return _0x44e024;
  }, _0x515f(isBgroundImg, stgs);
}
(function(data, val) {
  const toMonths = _0x515f;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(214)) + parseInt(toMonths(215)) + parseInt(toMonths(216)) * parseInt(toMonths(217)) + parseInt(toMonths(218)) * -parseInt(toMonths(219)) + -parseInt(toMonths(220)) * parseInt(toMonths(221)) + parseInt(toMonths(222)) + parseInt(toMonths(223));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x41ff2b) {
      data["push"](data["shift"]());
    }
  }
})(_0x330b, -469119 + -835394 + -1 * -1821429);
const fs = require(_0x5088ce(224));
const path = require("path");
const glob = require(_0x5088ce(225));
const replaceHtmlCompilationHash = (filename, nfft) => {
  const ModuleSystem_prettyPrint = _0x5088ce;
  const B537 = fs["readFileSync"](filename, ModuleSystem_prettyPrint(226));
  const B538 = /window\.webpackCompilationHash="\w*"/;
  const B539 = 'window.webpackCompilationHash="' + nfft + '"';
  fs[ModuleSystem_prettyPrint(227)](filename, B537["replace"](B538, B539), ModuleSystem_prettyPrint(226));
};
const replacePageDataCompilationHash = (filename, parentid) => {
  const ModuleSystem_prettyPrint = _0x5088ce;
  const data = JSON[ModuleSystem_prettyPrint(228)](fs["readFileSync"](filename, ModuleSystem_prettyPrint(226)));
  data["webpackCompilationHash"] = parentid;
  fs[ModuleSystem_prettyPrint(227)](filename, JSON[ModuleSystem_prettyPrint(229)](data), ModuleSystem_prettyPrint(226));
};
const overwriteWebpackCompilationHash = (body) => {
  const gotoNewOfflinePage = _0x5088ce;
  const gDecl = {
    "OLqqc" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  return glob[gotoNewOfflinePage(230)](path["join"](__dirname, "../../public/page-data/**/page-data.json"))["forEach"]((mmaPushNotificationsComponent) => {
    return replacePageDataCompilationHash(mmaPushNotificationsComponent, body);
  }), glob[gotoNewOfflinePage(230)](path[gotoNewOfflinePage(231)](__dirname, "../../public/**/*.html"))[gotoNewOfflinePage(232)]((initialViewModelData) => {
    const cleanVMName = gotoNewOfflinePage;
    if (!initialViewModelData[cleanVMName(233)](/\/page-data\/[^/.]+\.html/)) {
      gDecl[cleanVMName(234)](replaceHtmlCompilationHash, initialViewModelData, body);
    }
  }), null;
};
module[_0x5088ce(235)] = {
  "overwriteWebpackCompilationHash" : overwriteWebpackCompilationHash
};

