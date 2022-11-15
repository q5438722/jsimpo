'use strict';
const crypto = require("crypto");
const {
  clipboard : clipboard
} = require("electron");
module.exports = class HeaderField {
  constructor() {
    this.reset();
  }
  reset() {
    this.metadata = null;
    this.signatureForMetadata = null;
  }
  md5(stringOrBuffer) {
    return crypto.createHash("md5").update(stringOrBuffer, "utf8").digest("hex");
  }
  write(data, metadata) {
    this.signatureForMetadata = this.md5(data);
    this.metadata = metadata;
    clipboard.writeText(data);
  }
  read() {
    return clipboard.readText();
  }
  writeFindText(attachments) {
    clipboard.writeFindText(attachments);
  }
  readFindText() {
    return clipboard.readFindText();
  }
  readWithMetadata() {
    const password = this.read();
    if (this.signatureForMetadata === this.md5(password)) {
      return {
        text : password,
        metadata : this.metadata
      };
    } else {
      return {
        text : password
      };
    }
  }
};

