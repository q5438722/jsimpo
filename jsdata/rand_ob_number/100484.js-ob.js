import '../external/webL10n/l10n.js';
import {
    fixupLangCode,
    getL10nFallback
} from './l10n_utils.js';
const webL10n = document['webL10n'];
class GenericL10n {
    constructor(_0x2f9e85) {
        this['_lang'] = _0x2f9e85, this['_ready'] = new Promise((_0x3c48f8, _0x3b308c) => {
            webL10n['setLanguage'](fixupLangCode(_0x2f9e85), () => {
                _0x3c48f8(webL10n);
            });
        });
    }
    async ['getLanguage']() {
        const _0x19c478 = await this['_ready'];
        return _0x19c478['getLanguage']();
    }
    async ['getDirection']() {
        const _0x4651fa = await this['_ready'];
        return _0x4651fa['getDirection']();
    }
    async ['get'](_0x1c34ae, _0x103376 = null, _0x2ebdd9 = getL10nFallback(_0x1c34ae, _0x103376)) {
        const _0x3a34d = await this['_ready'];
        return _0x3a34d['get'](_0x1c34ae, _0x103376, _0x2ebdd9);
    }
    async ['translate'](_0x406a37) {
        const _0xb2599d = await this['_ready'];
        return _0xb2599d['translate'](_0x406a37);
    }
}
export {
    GenericL10n
};
