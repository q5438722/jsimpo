'use strict';
const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");
const replaceHtmlCompilationHash = (path, singleContents) => {
  const B537 = fs["readFileSync"](path, "utf-8");
  const B538 = /window\.webpackCompilationHash="\w*"/;
  const B539 = 'window.webpackCompilationHash="' + singleContents + '"';
  fs["writeFileSync"](path, B537["replace"](B538, B539), "utf-8");
};
const replacePageDataCompilationHash = (path, data) => {
  const message = JSON["parse"](fs["readFileSync"](path, "utf-8"));
  message["webpackCompilationHash"] = data;
  fs["writeFileSync"](path, JSON["stringify"](message), "utf-8");
};
const overwriteWebpackCompilationHash = (mmCoreSplitViewBlock) => {
  glob["sync"](path["join"](__dirname, "../../public/page-data/**/page-data.json"))["forEach"]((mmaPushNotificationsComponent) => {
    return replacePageDataCompilationHash(mmaPushNotificationsComponent, mmCoreSplitViewBlock);
  });
  glob["sync"](path["join"](__dirname, "../../public/**/*.html"))["forEach"]((icons) => {
    if (!icons["match"](/\/page-data\/[^\/.]+\.html/)) {
      replaceHtmlCompilationHash(icons, mmCoreSplitViewBlock);
    }
  });
  return null;
};
module["exports"] = {
  "overwriteWebpackCompilationHash" : overwriteWebpackCompilationHash
};

