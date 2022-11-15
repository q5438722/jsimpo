'use strict';
const yup = require("yup");
const {
  formatYupErrors : formatYupErrors
} = require("strapi-utils");
const {
  isValidCategoryName : isValidCategoryName
} = require("./common");
module["exports"] = (pool) => {
  return componentCategorySchema["validate"](pool, {
    "strict" : !![],
    "abortEarly" : ![]
  })["catch"]((mmCoreSplitViewBlock) => {
    return Promise["reject"](formatYupErrors(mmCoreSplitViewBlock));
  });
};
const componentCategorySchema = yup["object"]({
  "name" : yup["string"]()["min"](3)["test"](isValidCategoryName)["required"]("name.required")
})["noUnknown"]();

