'use strict';
const crypto = require(_0x2ad5e1(374));
const {
  clipboard : clipboard
} = require(_0x2ad5e1(375));
module[_0x2ad5e1(376)] = class Clipboard {
  constructor() {
    this["reset"]();
  }
  [_0x2ad5e1(377)]() {
    const gotoNewOfflinePage = _0x2ad5e1;
    this[gotoNewOfflinePage(378)] = null;
    this["signatureForMetadata"] = null;
  }
  [_0x2ad5e1(379)](received_data) {
    const parseInt = _0x2ad5e1;
    const frontpageItems = {
      "KFgTw" : parseInt(379),
      "sYaWl" : parseInt(380)
    };
    return crypto[parseInt(381)](frontpageItems["KFgTw"])["update"](received_data, frontpageItems[parseInt(382)])[parseInt(383)](parseInt(384));
  }
  [_0x2ad5e1(385)](mmCoreSplitViewBlock, metadata) {
    const gotoNewOfflinePage = _0x2ad5e1;
    this["signatureForMetadata"] = this["md5"](mmCoreSplitViewBlock);
    this["metadata"] = metadata;
    clipboard[gotoNewOfflinePage(386)](mmCoreSplitViewBlock);
  }
  [_0x2ad5e1(387)]() {
    const gotoNewOfflinePage = _0x2ad5e1;
    return clipboard[gotoNewOfflinePage(388)]();
  }
  [_0x2ad5e1(389)](mmCoreSplitViewBlock) {
    const gotoNewOfflinePage = _0x2ad5e1;
    clipboard[gotoNewOfflinePage(389)](mmCoreSplitViewBlock);
  }
  [_0x2ad5e1(390)]() {
    const gotoNewOfflinePage = _0x2ad5e1;
    return clipboard[gotoNewOfflinePage(390)]();
  }
  [_0x2ad5e1(391)]() {
    const gotoNewOfflinePage = _0x2ad5e1;
    const cursorText = this[gotoNewOfflinePage(387)]();
    return this[gotoNewOfflinePage(392)] === this["md5"](cursorText) ? {
      "text" : cursorText,
      "metadata" : this[gotoNewOfflinePage(378)]
    } : {
      "text" : cursorText
    };
  }
};

