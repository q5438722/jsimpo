'use strict';
module.exports = function() {
  const exportedAssets = this.getOptions();
  return `import thing from "./module";\nexport default [${Array.from({
    length : +exportedAssets.count
  }, () => {
    return "thing";
  }).join(", ")}].reduce((a, b) => a + b);`;
};

