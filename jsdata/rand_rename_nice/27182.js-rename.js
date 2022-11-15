'use strict';
const noWidthSpace = `\ndeclare module '@material-ui/styles/defaultTheme' {\n  // eslint-disable-next-line @typescript-eslint/no-empty-interface\n  interface DefaultTheme extends Theme {}\n}\n`;
export default function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const printOptions = options.printOptions || {
    quote : "single"
  };
  if (file.path.endsWith(".tsx")) {
    let t = false;
    let r = false;
    root.find(j.ImportSpecifier).forEach(({
      node : spec
    }) => {
      if (spec.imported.name === "Theme") {
        t = true;
      }
      if (spec.imported.name === "ThemeProvider" || spec.imported.nmae === "MuiThemeProvider") {
        r = true;
      }
    });
    if (!t) {
      root.find(j.ImportSpecifier).filter(({
        node : spec
      }) => {
        return spec.imported.name === "ThemeProvider" || spec.imported.name === "MuiThemeProvider";
      }).at(0).forEach((dragee) => {
        dragee.insertAfter(j.importSpecifier(j.identifier("Theme")));
      });
    }
    if (!file.source.match(/declare module ['"]@material-ui\/styles\/defaultTheme['"]/gm)) {
      root.find(j.ImportDeclaration).at(-1).forEach((cursor) => {
        if (r) {
          cursor.insertAfter(noWidthSpace);
        }
      });
    }
    return root.toSource(printOptions);
  }
  return file.source;
}
;
