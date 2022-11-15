'use strict';
const _ = require("lodash");
const yup = require("yup");
const {
  formatYupErrors : formatYupErrors,
  nameToSlug : nameToSlug
} = require("strapi-utils");
const pluralize = require("pluralize");
const {
  modelTypes : modelTypes,
  DEFAULT_TYPES : DEFAULT_TYPES,
  typeKinds : typeKinds
} = require("../../services/constants");
const createSchema = require("./model-schema");
const {
  removeEmptyDefaults : removeEmptyDefaults,
  removeDeletedUIDTargetFields : removeDeletedUIDTargetFields
} = require("./data-transform");
const {
  nestedComponentSchema : nestedComponentSchema
} = require("./component");
const VALID_RELATIONS = {
  [typeKinds.SINGLE_TYPE]:["oneWay", "manyWay"],
  [typeKinds.COLLECTION_TYPE]:["oneWay", "manyWay", "oneToOne", "oneToMany", "manyToOne", "manyToMany"]
};
const VALID_TYPES = [...DEFAULT_TYPES, "uid", "component", "dynamiczone"];
const createContentTypeSchema = (gc_layer, {
  isEdition : rValidbraces = false
} = {}) => {
  const indexLookupKey = _.get(gc_layer, "contentType.kind", typeKinds.COLLECTION_TYPE);
  const argumentModel = createSchema(VALID_TYPES, VALID_RELATIONS[indexLookupKey] || [], {
    modelType : modelTypes.CONTENT_TYPE
  }).shape({
    name : yup.string().test(hasPluralName).test(alreadyUsedContentTypeName(rValidbraces)).test(forbiddenContentTypeNameValidator()).min(1).required()
  });
  return yup.object({
    contentType : argumentModel.required().noUnknown(),
    components : nestedComponentSchema
  }).noUnknown();
};
const validateContentTypeInput = (name) => {
  return createContentTypeSchema(name).validate(name, {
    strict : true,
    abortEarly : false
  }).catch((e) => {
    return Promise.reject(formatYupErrors(e));
  });
};
const validateUpdateContentTypeInput = (name) => {
  if (_.has(name, "contentType")) {
    removeEmptyDefaults(name.contentType);
  }
  if (_.has(name, "components") && Array.isArray(name.components)) {
    name.components.forEach((attributeVal) => {
      if (_.has(attributeVal, "uid")) {
        removeEmptyDefaults(attributeVal);
      }
    });
  }
  removeDeletedUIDTargetFields(name.contentType);
  return createContentTypeSchema(name, {
    isEdition : true
  }).validate(name, {
    strict : true,
    abortEarly : false
  }).catch((e) => {
    return Promise.reject(formatYupErrors(e));
  });
};
const forbiddenContentTypeNameValidator = () => {
  const t = strapi.plugins["content-type-builder"].services.builder.getReservedNames().models;
  return {
    name : "forbiddenContentTypeName",
    message : `Content Type name cannot be one of ${t.join(", ")}`,
    test : (e) => {
      if (t.includes(nameToSlug(e))) {
        return false;
      }
      return true;
    }
  };
};
const hasPluralName = {
  name : "hasPluralName",
  message : "Content Type name `${value}` cannot be pluralized. \nSuggestion: add Item after the name (e.g News -> NewsItem).",
  test : (name) => {
    if (pluralize.singular(name) === pluralize(name)) {
      return false;
    }
    return true;
  }
};
const alreadyUsedContentTypeName = (canCreateDiscussions) => {
  const n = Object.values(strapi.contentTypes).map((MockModel1) => {
    return MockModel1.modelName;
  });
  return {
    name : "nameAlreadyUsed",
    message : "Content Type name `${value}` is already being used.",
    test : (e) => {
      if (canCreateDiscussions) {
        return true;
      }
      if (n.includes(nameToSlug(e))) {
        return false;
      }
      return true;
    }
  };
};
const validateKind = (e) => {
  return yup.string().oneOf([typeKinds.SINGLE_TYPE, typeKinds.COLLECTION_TYPE]).validate(e).catch((e) => {
    return Promise.reject(formatYupErrors(e));
  });
};
module.exports = {
  validateContentTypeInput : validateContentTypeInput,
  validateUpdateContentTypeInput : validateUpdateContentTypeInput,
  validateKind : validateKind
};

