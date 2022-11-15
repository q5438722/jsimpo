'use strict';
module["exports"] = function() {
  const captureShapes = this["getOptions"]();
  return 'import thing from "./module";\nexport default [' + Array["from"]({
    "length" : +captureShapes["count"]
  }, () => {
    return "thing";
  })["join"](", ") + "].reduce((a, b) => a + b);";
};

