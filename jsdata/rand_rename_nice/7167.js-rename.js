'use strict';
module.exports = function t(o, path, opts, name = "app") {
  const settings = Array.isArray(o) ? o[0] : o;
  const context = settings.output.path;
  if (context !== path.resolve(opts.outputDir)) {
    throw new Error(`\n\nConfiguration Error: ` + `Avoid modifying webpack output.path directly. ` + `Use the "outputDir" option instead.\n`);
  }
  if (context === path.service.context) {
    throw new Error(`\n\nConfiguration Error: ` + `Do not set output directory to project root.\n`);
  }
  if (name === "app" && settings.output.publicPath !== opts.publicPath) {
    throw new Error(`\n\nConfiguration Error: ` + `Avoid modifying webpack output.publicPath directly. ` + `Use the "publicPath" option instead.\n`);
  }
};

