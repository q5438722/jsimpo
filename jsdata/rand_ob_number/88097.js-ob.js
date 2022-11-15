import { ensureOnlyValidVersions } from '../utils/utils.js';
import _0x482e0c from '../utils/buildmessage.js';
import _0x5089ce from './npm-discards';
const nodeRequire = require;
export class PackageNpm {
    constructor() {
        this['_discards'] = new _0x5089ce(), this['_dependencies'] = null;
    }
    ['depends'](_0x4c8e65) {
        if (this['_dependencies']) {
            _0x482e0c['error']('Npm.depends\x20may\x20only\x20be\x20called\x20once\x20per\x20package', { 'useMyCaller': !![] });
            return;
        }
        if (typeof _0x4c8e65 !== 'object') {
            _0x482e0c['error']('the\x20argument\x20to\x20Npm.depends\x20should\x20be\x20an\x20' + 'object,\x20like\x20this:\x20{gcd:\x20\x270.0.0\x27}', { 'useMyCaller': !![] });
            return;
        }
        try {
            ensureOnlyValidVersions(_0x4c8e65, { 'forCordova': ![] });
        } catch (_0x3800d7) {
            _0x482e0c['error'](_0x3800d7['message'], {
                'useMyCaller': !![],
                'downcase': !![]
            });
            return;
        }
        this['_dependencies'] = _0x4c8e65;
    }
    ['strip'](_0xf28283) {
        this['_discards']['merge'](_0xf28283);
    }
    ['require'](_0x5d60fe) {
        try {
            return nodeRequire(_0x5d60fe);
        } catch (_0x35dc0d) {
            _0x482e0c['error']('can\x27t\x20find\x20npm\x20module\x20\x27' + _0x5d60fe + '\x27.\x20In\x20package.js,\x20Npm.require\x20can\x20only\x20find\x20built-in\x20modules.', { 'useMyCaller': !![] });
        }
    }
}
