'use strict';
const yup = require("yup");
const {
  formatYupErrors : formatYupErrors
} = require("strapi-utils");
const {
  isValidCategoryName : isValidCategoryName
} = require("./common");
module.exports = (e) => {
  return componentCategorySchema.validate(e, {
    strict : true,
    abortEarly : false
  }).catch((e) => {
    return Promise.reject(formatYupErrors(e));
  });
};
const componentCategorySchema = yup.object({
  name : yup.string().min(3).test(isValidCategoryName).required("name.required")
}).noUnknown();

