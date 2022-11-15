'use strict';
const dalek = require("./dalek");
const Grim = require("grim");
module.exports = {
  activate() {
    atom.packages.onDidActivateInitialPackages(async() => {
      const visible_indexes = await dalek.enumerate();
      for (let i = 0; i < visible_indexes.length; i++) {
        const goPackageName = visible_indexes[i];
        Grim.deprecate(`You have the core package "${goPackageName}" installed as a community package. See https://github.com/atom/atom/blob/master/packages/dalek/README.md for how this causes problems and instructions on how to correct the situation.`, {
          packageName : goPackageName
        });
      }
    });
  }
};

