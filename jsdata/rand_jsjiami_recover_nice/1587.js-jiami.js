'use strict';
const crypto = require("crypto");
const {
  clipboard : clipboard
} = require("electron");
module["exports"] = class Clipboard {
  constructor() {
    this["reset"]();
  }
  ["reset"]() {
    this["metadata"] = null;
    this["signatureForMetadata"] = null;
  }
  ["md5"](data) {
    return crypto["createHash"]("md5")["update"](data, _0x228495["YAgsC"])["digest"](_0x228495["UIGsA"]);
  }
  ["write"](mmCoreSplitViewBlock, metadata) {
    this["signatureForMetadata"] = this["md5"](mmCoreSplitViewBlock);
    this["metadata"] = metadata;
    clipboard["writeText"](mmCoreSplitViewBlock);
  }
  ["read"]() {
    return clipboard["readText"]();
  }
  ["writeFindText"](mmCoreSplitViewBlock) {
    clipboard["writeFindText"](mmCoreSplitViewBlock);
  }
  ["readFindText"]() {
    return clipboard["readFindText"]();
  }
  ["readWithMetadata"]() {
    const unescapedText = this["read"]();
    if (this["signatureForMetadata"] === this["md5"](unescapedText)) {
      return {
        "text" : unescapedText,
        "metadata" : this["metadata"]
      };
    } else {
      return {
        "text" : unescapedText
      };
    }
  }
};

