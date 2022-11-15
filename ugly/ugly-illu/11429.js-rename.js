"use strict";

const yup = require("yup");

var { formatYupErrors } = require("strapi-utils");

var { isValidCategoryName } = require("./common");

module.exports = e => {
  return componentCategorySchema.validate(e, { strict: true, abortEarly: false }).catch(e => Promise.reject(formatYupErrors(e)));
};const componentCategorySchema = yup.object({ name: yup.string().min(3).test(isValidCategoryName).required("name.required") }).noUnknown();
