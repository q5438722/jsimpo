'use strict';
const fs = require(`fs-extra`);
const path = require(`path`);
const glob = require(`glob`);
const replaceHtmlCompilationHash = (f, forceClassBase) => {
  const dockerfile = fs.readFileSync(f, `utf-8`);
  const o = /window\.webpackCompilationHash="\w*"/;
  const strippedVersion = `window.webpackCompilationHash="${forceClassBase}"`;
  fs.writeFileSync(f, dockerfile.replace(o, strippedVersion), `utf-8`);
};
const replacePageDataCompilationHash = (f, forceClassBase) => {
  const npm_package = JSON.parse(fs.readFileSync(f, `utf-8`));
  npm_package.webpackCompilationHash = forceClassBase;
  fs.writeFileSync(f, JSON.stringify(npm_package), `utf-8`);
};
const overwriteWebpackCompilationHash = (e) => {
  glob.sync(path.join(__dirname, `../../public/page-data/**/page-data.json`)).forEach((a) => {
    return replacePageDataCompilationHash(a, e);
  });
  glob.sync(path.join(__dirname, `../../public/**/*.html`)).forEach((a) => {
    if (!a.match(/\/page-data\/[^/.]+\.html/)) {
      replaceHtmlCompilationHash(a, e);
    }
  });
  return null;
};
module.exports = {
  overwriteWebpackCompilationHash : overwriteWebpackCompilationHash
};

