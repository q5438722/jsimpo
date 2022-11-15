'use strict';
Object.defineProperty(exports, "__esModule", {
  value : true
});
exports.dynamicRef = void 0;
const codegen_1 = require("../../compile/codegen");
const names_1 = require("../../compile/names");
const ref_1 = require("../core/ref");
const def = {
  keyword : "$dynamicRef",
  schemaType : "string",
  code : (statusCode) => {
    return dynamicRef(statusCode, statusCode.schema);
  }
};
function dynamicRef(_, val) {
  function parse(options) {
    if (step.schemaEnv.root.dynamicAnchors[dpName]) {
      const order = self.let("_v", codegen_1._`${names_1.default.dynamicAnchors}${codegen_1.getProperty(dpName)}`);
      self.if(order, $(order, options), $(step.validateName, options));
    } else {
      $(step.validateName, options)();
    }
  }
  function $(callback, selector) {
    return selector ? () => {
      return self.block(() => {
        ref_1.callRef(_, callback);
        self.let(selector, true);
      });
    } : () => {
      return ref_1.callRef(_, callback);
    };
  }
  const {
    gen : self,
    keyword : keyword,
    it : step
  } = _;
  if (val[0] !== "#") {
    throw new Error(`"${keyword}" only supports hash fragment reference`);
  }
  const dpName = val.slice(1);
  if (step.allErrors) {
    parse();
  } else {
    const l = self.let("valid", false);
    parse(l);
    _.ok(l);
  }
}
exports.dynamicRef = dynamicRef;
exports.default = def;

