'use strict';
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

