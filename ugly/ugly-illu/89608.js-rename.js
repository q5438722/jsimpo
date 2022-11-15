const fs = require(`fs-extra`);

const path = require(`path`);

const glob = require(`glob`);

const replaceHtmlCompilationHash = (a, e) => {
  const t = fs.readFileSync(a, `utf-8`);
  const o = /window\.webpackCompilationHash="\w*"/;
  const i = `window.webpackCompilationHash="${e}"`;
  fs.writeFileSync(a, t.replace(o, i), `utf-8`);
};

const replacePageDataCompilationHash = (a, e) => {
  const t = JSON.parse(fs.readFileSync(a, `utf-8`));
  t.webpackCompilationHash = e;fs.writeFileSync(a, JSON.stringify(t), `utf-8`);
};

const overwriteWebpackCompilationHash = e => {
  glob.sync(path.join(__dirname, `../../public/page-data/**/page-data.json`)).forEach(a => replacePageDataCompilationHash(a, e));glob.sync(path.join(__dirname, `../../public/**/*.html`)).forEach(a => {
    if (!a.match(/\/page-data\/[^/.]+\.html/)) replaceHtmlCompilationHash(a, e);
  });return null;
};

module.exports = { overwriteWebpackCompilationHash: overwriteWebpackCompilationHash };
