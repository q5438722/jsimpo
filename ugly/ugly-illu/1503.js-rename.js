const dalek = require("./dalek");

const Grim = require("grim");

module.exports = { activate() {
    atom.packages.onDidActivateInitialPackages(async () => {
      const a = await dalek.enumerate();
      for (let e = 0; e < a.length; e++) {
        const t = a[e];
        Grim.deprecate(`You have the core package "${t}" installed as a community package. See https://github.com/atom/atom/blob/master/packages/dalek/README.md for how this causes problems and instructions on how to correct the situation.`, { packageName: t });
      }
    });
  } };
