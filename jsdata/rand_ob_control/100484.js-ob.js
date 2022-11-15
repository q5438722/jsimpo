import '../external/webL10n/l10n.js';
import {
    fixupLangCode,
    getL10nFallback
} from './l10n_utils.js';
const webL10n = document['webL10n'];
class GenericL10n {
    constructor(_0x2958e9) {
        const _0x2544f1 = {
            'MshOy': function (_0x59d242, _0x2f39a3) {
                return _0x59d242(_0x2f39a3);
            }
        };
        this['_lang'] = _0x2958e9, this['_ready'] = new Promise((_0x46267a, _0x101cd7) => {
            const _0x4c1cc6 = {
                'GBcIK': function (_0x5ee768, _0x173cb5) {
                    return _0x2544f1['MshOy'](_0x5ee768, _0x173cb5);
                }
            };
            webL10n['setLanguage'](_0x2544f1['MshOy'](fixupLangCode, _0x2958e9), () => {
                _0x4c1cc6['GBcIK'](_0x46267a, webL10n);
            });
        });
    }
    async ['getLanguage']() {
        const _0x361fe6 = await this['_ready'];
        return _0x361fe6['getLanguage']();
    }
    async ['getDirection']() {
        const _0x1f2bb6 = await this['_ready'];
        return _0x1f2bb6['getDirection']();
    }
    async ['get'](_0x19fded, _0x2621b0 = null, _0x2de956 = getL10nFallback(_0x19fded, _0x2621b0)) {
        const _0x4a1b6e = await this['_ready'];
        return _0x4a1b6e['get'](_0x19fded, _0x2621b0, _0x2de956);
    }
    async ['translate'](_0x8cecb1) {
        const _0x5cceb7 = await this['_ready'];
        return _0x5cceb7['translate'](_0x8cecb1);
    }
}
export {
    GenericL10n
};
