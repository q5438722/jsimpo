'use strict';
import "../external/webL10n/l10n.js";
import{
  fixupLangCode as fixupLangCode,
  getL10nFallback as getL10nFallback
}from "./l10n_utils.js";
const treeNames = document.webL10n;
class Languages {
  constructor(lang) {
    this._lang = lang;
    this._ready = new Promise((uniqueRandomArray, canCreateDiscussions) => {
      treeNames.setLanguage(fixupLangCode(lang), () => {
        uniqueRandomArray(treeNames);
      });
    });
  }
  async getLanguage() {
    const gameManager = await this._ready;
    return gameManager.getLanguage();
  }
  async getDirection() {
    const bidiService = await this._ready;
    return bidiService.getDirection();
  }
  async get(lang, symlinkd = null, reactRouterController = getL10nFallback(lang, symlinkd)) {
    const app = await this._ready;
    return app.get(lang, symlinkd, reactRouterController);
  }
  async translate(lang) {
    const t = await this._ready;
    return t.translate(lang);
  }
}
export{
  Languages as GenericL10n
};

