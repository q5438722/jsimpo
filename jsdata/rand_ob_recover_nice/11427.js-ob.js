'use strict';
function _0x2f5a(isBgroundImg, stgs) {
  return _0x2f5a = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-3162 + 464 + 2939);
    let _0x47b573 = _0x2daf[isBgroundImg];
    return _0x47b573;
  }, _0x2f5a(isBgroundImg, stgs);
}
const _ = require("lodash");
const yup = require(_0x2c5dd1(250));
const {
  formatYupErrors : formatYupErrors,
  nameToSlug : nameToSlug
} = require(_0x2c5dd1(251));
const pluralize = require(_0x2c5dd1(252));
const {
  modelTypes : modelTypes,
  DEFAULT_TYPES : DEFAULT_TYPES,
  typeKinds : typeKinds
} = require(_0x2c5dd1(253));
const createSchema = require(_0x2c5dd1(254));
const {
  removeEmptyDefaults : removeEmptyDefaults,
  removeDeletedUIDTargetFields : removeDeletedUIDTargetFields
} = require(_0x2c5dd1(255));
const {
  nestedComponentSchema : nestedComponentSchema
} = require(_0x2c5dd1(256));
const VALID_RELATIONS = {
  [typeKinds[_0x2c5dd1(257)]]:[_0x2c5dd1(258), _0x2c5dd1(259)],
  [typeKinds[_0x2c5dd1(260)]]:["oneWay", _0x2c5dd1(259), _0x2c5dd1(261), "oneToMany", _0x2c5dd1(262), _0x2c5dd1(263)]
};
const VALID_TYPES = [...DEFAULT_TYPES, _0x2c5dd1(264), _0x2c5dd1(265), _0x2c5dd1(266)];
const createContentTypeSchema = (trick, {
  isEdition : relationName = ![]
} = {}) => {
  const findMiddlePosition = _0x2c5dd1;
  const leftBranch = {
    "WLqfc" : findMiddlePosition(267),
    "ShDFs" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "wcZin" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  const indexLookupKey = _[findMiddlePosition(268)](trick, leftBranch[findMiddlePosition(269)], typeKinds[findMiddlePosition(260)]);
  const rightBranch = createSchema(VALID_TYPES, VALID_RELATIONS[indexLookupKey] || [], {
    "modelType" : modelTypes["CONTENT_TYPE"]
  })[findMiddlePosition(270)]({
    "name" : yup[findMiddlePosition(271)]()[findMiddlePosition(272)](hasPluralName)[findMiddlePosition(272)](leftBranch[findMiddlePosition(273)](alreadyUsedContentTypeName, relationName))[findMiddlePosition(272)](leftBranch["wcZin"](forbiddenContentTypeNameValidator))[findMiddlePosition(274)](1 * 2000 + -3598 * -1 + -5597)[findMiddlePosition(275)]()
  });
  return yup[findMiddlePosition(276)]({
    "contentType" : rightBranch[findMiddlePosition(275)]()[findMiddlePosition(277)](),
    "components" : nestedComponentSchema
  })[findMiddlePosition(277)]();
};
const validateContentTypeInput = (leftFence) => {
  const now = _0x2c5dd1;
  const rpm_traffic = {
    "jYrae" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  return rpm_traffic[now(278)](createContentTypeSchema, leftFence)[now(279)](leftFence, {
    "strict" : !![],
    "abortEarly" : ![]
  })[now(280)]((mmCoreSplitViewBlock) => {
    return Promise[now(281)](formatYupErrors(mmCoreSplitViewBlock));
  });
};
const validateUpdateContentTypeInput = (args) => {
  const parseInt = _0x2c5dd1;
  const obj = {
    "QzDrZ" : "uid",
    "GyVik" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "bazLG" : parseInt(282),
    "EQyAj" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ejKiO" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  return _[parseInt(283)](args, obj[parseInt(284)]) && obj[parseInt(285)](removeEmptyDefaults, args[parseInt(282)]), _[parseInt(283)](args, parseInt(286)) && Array["isArray"](args[parseInt(286)]) && args[parseInt(286)][parseInt(287)]((tokens) => {
    const getKey = parseInt;
    if (_[getKey(283)](tokens, obj["QzDrZ"])) {
      obj[getKey(288)](removeEmptyDefaults, tokens);
    }
  }), removeDeletedUIDTargetFields(args["contentType"]), obj[parseInt(289)](createContentTypeSchema, args, {
    "isEdition" : !![]
  })[parseInt(279)](args, {
    "strict" : !![],
    "abortEarly" : ![]
  })[parseInt(280)]((mmCoreSplitViewBlock) => {
    return Promise[parseInt(281)](formatYupErrors(mmCoreSplitViewBlock));
  });
};
const forbiddenContentTypeNameValidator = () => {
  const now = _0x2c5dd1;
  const typeEditors = {
    "rZfNr" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  const baseFx = strapi[now(290)][now(291)][now(292)]["builder"]["getReservedNames"]()["models"];
  return {
    "name" : "forbiddenContentTypeName",
    "message" : "Content Type name cannot be one of " + baseFx[now(293)](", "),
    "test" : (args) => {
      const getType = now;
      if (baseFx[getType(294)](typeEditors[getType(295)](nameToSlug, args))) {
        return ![];
      }
      return !![];
    }
  };
};
const hasPluralName = {
  "name" : _0x2c5dd1(296),
  "message" : _0x2c5dd1(297),
  "test" : (type) => {
    const _WidgetClass = _0x2c5dd1;
    const target = {
      "mCTTd" : function(name, initialValue) {
        return name === initialValue;
      }
    };
    if (target["mCTTd"](pluralize[_WidgetClass(298)](type), pluralize(type))) {
      return ![];
    }
    return !![];
  }
};
const alreadyUsedContentTypeName = (canCreateDiscussions) => {
  const zoneSymbol = _0x2c5dd1;
  const a = {
    "wgYvH" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "dBPiV" : zoneSymbol(299),
    "seCyJ" : zoneSymbol(300)
  };
  const premultiplyBlendMode = Object[zoneSymbol(301)](strapi[zoneSymbol(302)])["map"]((Object) => {
    return Object[zoneSymbol(303)];
  });
  return {
    "name" : a[zoneSymbol(304)],
    "message" : a["seCyJ"],
    "test" : (pt) => {
      const Number = zoneSymbol;
      if (canCreateDiscussions) {
        return !![];
      }
      if (premultiplyBlendMode[Number(294)](a[Number(305)](nameToSlug, pt))) {
        return ![];
      }
      return !![];
    }
  };
};
const validateKind = (name) => {
  const getLeaf = _0x2c5dd1;
  return yup[getLeaf(271)]()[getLeaf(306)]([typeKinds[getLeaf(257)], typeKinds[getLeaf(260)]])[getLeaf(279)](name)[getLeaf(280)]((mmCoreSplitViewBlock) => {
    return Promise[getLeaf(281)](formatYupErrors(mmCoreSplitViewBlock));
  });
};
module[_0x2c5dd1(307)] = {
  "validateContentTypeInput" : validateContentTypeInput,
  "validateUpdateContentTypeInput" : validateUpdateContentTypeInput,
  "validateKind" : validateKind
};

