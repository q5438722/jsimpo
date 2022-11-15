const _0x2fc7 = ['663095rHZwwG', '398262fOMFic', '253345SWGgQl', '298391OCsHCY', '3054xmclEE', '83vLctKz', 'webL10n', '_lang', '_ready', 'wtild', 'setLanguage', 'NxmNS', 'XcpQM', 'getLanguage', 'get', 'translate', '3UYbAOX', '74999AkHRRu', '116702JJqzfk'];
const _0x272cd1 = _0x1546;

(function (_0x3b2d2b, _0x166974) {
    const _0xf6d6d8 = _0x1546;

    while (true) {
        try {
            const _0x3d0c0f = -parseInt(_0xf6d6d8(0x106)) * -parseInt(_0xf6d6d8(0x107)) + parseInt(_0xf6d6d8(0x108)) + parseInt(_0xf6d6d8(0x109)) + -parseInt(_0xf6d6d8(0x10a)) + -parseInt(_0xf6d6d8(0x10b)) + parseInt(_0xf6d6d8(0x10c)) + -parseInt(_0xf6d6d8(0x10d)) * parseInt(_0xf6d6d8(0x10e));

            if (_0x3d0c0f === _0x166974) break;else _0x3b2d2b.push(_0x3b2d2b.shift());
        } catch (_0x43cb11) {
            _0x3b2d2b.push(_0x3b2d2b.shift());
        }
    }
})(_0x2fc7, 398096);
function _0x1546(_0x51bc75, _0x2512f7) {
    return _0x1546 = function (_0x4d5146, _0x344cf4) {
        _0x4d5146 = _0x4d5146 - 262;
        const _0xb92e2e = _0x2fc7[_0x4d5146];

        return _0xb92e2e;
    }, _0x1546(_0x51bc75, _0x2512f7);
}
import '../external/webL10n/l10n.js';
import { fixupLangCode, getL10nFallback } from './l10n_utils.js';

const webL10n = document[_0x272cd1(0x10f)];

class GenericL10n {
    constructor(_0x43c8dd) {
        const _0x58ecc4 = _0x272cd1;
        const _0x1b562a = {
            'wtild': function (_0x5260a2, _0x2039ad) {
                return _0x5260a2(_0x2039ad);
            },
            'NxmNS': function (_0x2ceffb, _0x1334af) {
                return _0x2ceffb(_0x1334af);
            }
        };

        this[_0x58ecc4(0x110)] = _0x43c8dd, this[_0x58ecc4(0x111)] = new Promise((_0x5c6f81, _0x1d58c8) => {
            const _0x5369ba = _0x58ecc4;
            const _0x5ae896 = {
                'XcpQM': function (_0x1d45f9, _0x39ce9a) {
                    const _0x44e1c1 = _0x1546;

                    return _0x1b562a[_0x44e1c1(0x112)](_0x1d45f9, _0x39ce9a);
                }
            };

            webL10n[_0x5369ba(0x113)](_0x1b562a[_0x5369ba(0x114)](fixupLangCode, _0x43c8dd), () => {
                const _0x493380 = _0x5369ba;

                _0x5ae896[_0x493380(0x115)](_0x5c6f81, webL10n);
            });
        });
    }
    async [_0x272cd1(0x116)]() {
        const _0x5d1e03 = _0x272cd1;

        const _0x3ff2c6 = await this[_0x5d1e03(0x111)];

        return _0x3ff2c6[_0x5d1e03(0x116)]();
    }
    async ['getDirection']() {
        const _0x18de6f = _0x272cd1;

        const _0x398c6e = await this[_0x18de6f(0x111)];

        return _0x398c6e.getDirection();
    }
    async [_0x272cd1(0x117)](_0x27160f, _0x1c3ac7 = null, _0x414d73 = getL10nFallback(_0x27160f, _0x1c3ac7)) {
        const _0x22792f = _0x272cd1;

        const _0x322584 = await this[_0x22792f(0x111)];

        return _0x322584[_0x22792f(0x117)](_0x27160f, _0x1c3ac7, _0x414d73);
    }
    async ['translate'](_0x2c44ee) {
        const _0x2b72b1 = _0x272cd1;

        const _0x3a0811 = await this[_0x2b72b1(0x111)];

        return _0x3a0811[_0x2b72b1(0x118)](_0x2c44ee);
    }
}
export { GenericL10n };
