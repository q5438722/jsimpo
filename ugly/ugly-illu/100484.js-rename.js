import "../external/webL10n/l10n.js";import { fixupLangCode, getL10nFallback } from "./l10n_utils.js";const webL10n = document.webL10n;
class GenericL10n {
  constructor(n) {
    this._lang = n;this._ready = new Promise((e, t) => {
      webL10n.setLanguage(fixupLangCode(n), () => {
        e(webL10n);
      });
    });
  }async getLanguage() {
    const e = await this._ready;
    return e.getLanguage();
  }async getDirection() {
    const e = await this._ready;
    return e.getDirection();
  }async get(e, t = null, n = getL10nFallback(e, t)) {
    const a = await this._ready;
    return a.get(e, t, n);
  }async translate(e) {
    const t = await this._ready;
    return t.translate(e);
  }
}export { GenericL10n };