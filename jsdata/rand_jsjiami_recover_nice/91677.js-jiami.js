'use strict';
const Prism = require("prismjs");
const prismComponents = require("prismjs/components");
const getBaseLanguageName = (index, self = prismComponents) => {
  if (self["languages"][index]) {
    return index;
  }
  return Object["keys"](self["languages"])["find"]((i) => {
    if ("nEtkr" === _0x23ca44["zcemJ"]) {
      const {
        alias : alias
      } = self["languages"][i];
      if (!alias) {
        return ![];
      }
      if (Array["isArray"](alias)) {
        if ("qCPcU" === _0x23ca44["ddVSZ"]) {
          return;
        } else {
          return alias["includes"](index);
        }
      } else {
        if (_0x23ca44["rMAIV"] === "fKQIp") {
          return alias === index;
        } else {
          loadPrismLanguage(languageData["require"]);
        }
      }
    } else {
      return alias === index;
    }
  });
};
module["exports"] = function wrap(genf) {
  const i = getBaseLanguageName(genf);
  if (!i) {
    throw new Error("Prism doesn't support language '" + genf + "'.");
  }
  if (Prism["languages"][i]) {
    return;
  }
  const list = prismComponents["languages"][i];
  if (list["option"] === "default") {
    if (_0x201001["yxYlh"] === "RQqdB") {
      throw new Error("Prism doesn't support language '" + genf + "'.");
    } else {
      return;
    }
  }
  if (list["require"]) {
    if (Array["isArray"](list["require"])) {
      list["require"]["forEach"](wrap);
    } else {
      if (_0x201001["bZMMT"] !== _0x201001["bZMMT"]) {
        return alias["includes"](nameOrAlias);
      } else {
        wrap(list["require"]);
      }
    }
  }
  require("prismjs/components/prism-" + i + ".js");
};
module["exports"]["getBaseLanguageName"] = getBaseLanguageName;

