const _0x57f7 = ['clock', 'useFakeTimers', 'dispose', 'restore', 'test', 'tech not ready + no source = wait for ready, then loadstart', '0|1|10|6|2|7|4|8|5|3|9', 'loadstart', 'tech_.play was not called because the tech was not ready', 'tech_.play was called', 'triggerReady', 'trigger', 'OUFax', 'strictEqual', 'tech_.play was not called because there was no source', 'tick', 'MePRE', 'src', 'xyz.mp4', 'WJACn', 'tech not ready + has source = wait for ready', '6|4|8|3|5|1|2|7|0', 'XBCVO', 'HxazC', 'HzcmL', 'tech ready + no source = wait for loadstart', 'IcgFr', 'vcgGY', 'wkXum', 'tech ready + has source = play immediately!', 'sNCNU', 'rxtWJ', 'FeHYh', 'tech ready + has source + changing source = wait for loadstart', '6|3|2|4|5|1|7|0', 'FnkAv', 'qrTJc', 'gTQhn', 'gIjnk', 'lyIan', '38146rhGDgK', '275424tdilct', '4dzevcN', '96769GmKrDy', '68677gVkUsj', '10pmkLrD', '8031WnUGdq', '1lFExEJ', '479031thYOkj', '37381GdGAcv', '1fhrTIQ', 'module', '6|3|5|1|2|4|0', 'split', 'player', 'tech_', 'setCurrentTime', 'techCurrentTimeCallCount', 'initTime', 'play', 'techPlayCallCount'];
const _0x55ed32 = _0x1ed5;

(function (_0x4ce5a7, _0x26f8e8) {
    const _0x108828 = _0x1ed5;

    while (true) {
        try {
            const _0x2afe60 = -parseInt(_0x108828(0x76)) + -parseInt(_0x108828(0x77)) + -parseInt(_0x108828(0x78)) * parseInt(_0x108828(0x79)) + parseInt(_0x108828(0x7a)) * parseInt(_0x108828(0x7b)) + parseInt(_0x108828(0x7c)) * -parseInt(_0x108828(0x7d)) + parseInt(_0x108828(0x7e)) + -parseInt(_0x108828(0x7f)) * parseInt(_0x108828(0x80));

            if (_0x2afe60 === _0x26f8e8) break;else _0x4ce5a7.push(_0x4ce5a7.shift());
        } catch (_0xf7dbd7) {
            _0x4ce5a7.push(_0x4ce5a7.shift());
        }
    }
})(_0x57f7, 419743);
import _0x2a214f from 'sinon';
import { silencePromise } from '../../src/js/utils/promise';
import _0x183f22 from './test-helpers';
function _0x1ed5(_0xc5f487, _0xc55806) {
    return _0x1ed5 = function (_0x28a859, _0x4f5188) {
        _0x28a859 = _0x28a859 - 118;
        const _0x122acd = _0x57f7[_0x28a859];

        return _0x122acd;
    }, _0x1ed5(_0xc5f487, _0xc55806);
}
QUnit[_0x55ed32(0x81)]('Player#play', {
    'beforeEach'() {
        const _0x18ee3e = _0x55ed32;
        const _0x591d8a = { 'Zbddx': _0x18ee3e(0x82) };

        const _0x392fb6 = _0x591d8a.Zbddx[_0x18ee3e(0x83)]('|');

        var _0x358224 = 0;

        while (true) {
            switch (_0x392fb6[_0x358224++]) {
                case '0':
                    this[_0x18ee3e(0x84)][_0x18ee3e(0x85)][_0x18ee3e(0x86)] = _0x328d34 => {
                        this.techCurrentTimeCallCount++, this['initTime'] = _0x328d34;
                    };
                    continue;
                case '1':
                    this[_0x18ee3e(0x87)] = 0;
                    continue;
                case '2':
                    this[_0x18ee3e(0x88)] = 0;
                    continue;
                case '3':
                    this[_0x18ee3e(0x84)] = _0x183f22.makePlayer({});
                    continue;
                case '4':
                    this[_0x18ee3e(0x84)][_0x18ee3e(0x85)][_0x18ee3e(0x89)] = () => {
                        this.techPlayCallCount++;
                    };
                    continue;
                case '5':
                    this[_0x18ee3e(0x8a)] = 0;
                    continue;
                case '6':
                    this[_0x18ee3e(0x8b)] = _0x2a214f[_0x18ee3e(0x8c)]();
                    continue;
            }
            break;
        }
    },
    'afterEach'() {
        const _0x1ff1ae = _0x55ed32;

        this.player[_0x1ff1ae(0x8d)](), this[_0x1ff1ae(0x8b)][_0x1ff1ae(0x8e)]();
    }
}), QUnit[_0x55ed32(0x8f)](_0x55ed32(0x90), function (_0x234d9c) {
    const _0x38ae78 = _0x55ed32;
    const _0x143a10 = {
        'WJkWm': _0x38ae78(0x91),
        'OUFax': _0x38ae78(0x92),
        'MePRE': _0x38ae78(0x93),
        'WJACn': _0x38ae78(0x94)
    };

    const _0x4a69c1 = _0x143a10.WJkWm[_0x38ae78(0x83)]('|');

    var _0x1df377 = 0;

    while (true) {
        switch (_0x4a69c1[_0x1df377++]) {
            case '0':
                this[_0x38ae78(0x84)]['isReady_'] = false;
                continue;
            case '1':
                this[_0x38ae78(0x84)][_0x38ae78(0x89)]();
                continue;
            case '2':
                this.player[_0x38ae78(0x95)]();
                continue;
            case '3':
                this[_0x38ae78(0x84)][_0x38ae78(0x96)](_0x143a10[_0x38ae78(0x97)]);
                continue;
            case '4':
                _0x234d9c[_0x38ae78(0x98)](this.techPlayCallCount, 0, _0x38ae78(0x99));
                continue;
            case '5':
                this.clock[_0x38ae78(0x9a)](100);
                continue;
            case '6':
                _0x234d9c[_0x38ae78(0x98)](this[_0x38ae78(0x8a)], 0, _0x143a10[_0x38ae78(0x9b)]);
                continue;
            case '7':
                this[_0x38ae78(0x8b)].tick(100);
                continue;
            case '8':
                this.player[_0x38ae78(0x9c)](_0x38ae78(0x9d));
                continue;
            case '9':
                _0x234d9c[_0x38ae78(0x98)](this[_0x38ae78(0x8a)], 1, _0x143a10[_0x38ae78(0x9e)]);
                continue;
            case '10':
                this[_0x38ae78(0x8b)][_0x38ae78(0x9a)](100);
                continue;
        }
        break;
    }
}), QUnit.test(_0x55ed32(0x9f), function (_0x2f91e9) {
    const _0x4ac131 = _0x55ed32;
    const _0xeb4b42 = {
        'XBCVO': _0x4ac131(0xa0),
        'HxazC': _0x4ac131(0x94),
        'HzcmL': _0x4ac131(0x9d)
    };

    const _0x2aeecb = _0xeb4b42[_0x4ac131(0xa1)].split('|');

    var _0x23efdf = 0;

    while (true) {
        switch (_0x2aeecb[_0x23efdf++]) {
            case '0':
                _0x2f91e9[_0x4ac131(0x98)](this.techPlayCallCount, 1, _0xeb4b42[_0x4ac131(0xa2)]);
                continue;
            case '1':
                _0x2f91e9.strictEqual(this[_0x4ac131(0x8a)], 0, _0x4ac131(0x93));
                continue;
            case '2':
                this[_0x4ac131(0x84)].triggerReady();
                continue;
            case '3':
                this[_0x4ac131(0x84)][_0x4ac131(0x89)]();
                continue;
            case '4':
                this[_0x4ac131(0x84)][_0x4ac131(0x9c)](_0xeb4b42[_0x4ac131(0xa3)]);
                continue;
            case '5':
                this.clock[_0x4ac131(0x9a)](100);
                continue;
            case '6':
                this.player['isReady_'] = false;
                continue;
            case '7':
                this[_0x4ac131(0x8b)][_0x4ac131(0x9a)](100);
                continue;
            case '8':
                this[_0x4ac131(0x8b)].tick(100);
                continue;
        }
        break;
    }
}), QUnit.test(_0x55ed32(0xa4), function (_0x58a5b0) {
    const _0x4a6092 = _0x55ed32;
    const _0x996419 = {
        'IcgFr': '5|1|3|4|0|2|6',
        'CwFFh': _0x4a6092(0x92),
        'vcgGY': _0x4a6092(0x9d),
        'wkXum': _0x4a6092(0x94)
    };

    const _0x4295b3 = _0x996419[_0x4a6092(0xa5)].split('|');

    var _0x181d07 = 0;

    while (true) {
        switch (_0x4295b3[_0x181d07++]) {
            case '0':
                this[_0x4a6092(0x8b)][_0x4a6092(0x9a)](100);
                continue;
            case '1':
                this[_0x4a6092(0x8b)][_0x4a6092(0x9a)](100);
                continue;
            case '2':
                this[_0x4a6092(0x84)][_0x4a6092(0x96)](_0x996419.CwFFh);
                continue;
            case '3':
                _0x58a5b0[_0x4a6092(0x98)](this[_0x4a6092(0x8a)], 0, _0x4a6092(0x93));
                continue;
            case '4':
                this.player.src(_0x996419[_0x4a6092(0xa6)]);
                continue;
            case '5':
                this[_0x4a6092(0x84)][_0x4a6092(0x89)]();
                continue;
            case '6':
                _0x58a5b0[_0x4a6092(0x98)](this[_0x4a6092(0x8a)], 1, _0x996419[_0x4a6092(0xa7)]);
                continue;
        }
        break;
    }
}), QUnit[_0x55ed32(0x8f)](_0x55ed32(0xa8), function (_0x20df1d) {
    const _0x4698d9 = _0x55ed32;
    const _0x13dba0 = {
        'sNCNU': _0x4698d9(0x9d),
        'rxtWJ': function (_0x539a98, _0x3515dc) {
            return _0x539a98(_0x3515dc);
        },
        'FeHYh': _0x4698d9(0x94)
    };

    this[_0x4698d9(0x84)][_0x4698d9(0x9c)](_0x13dba0[_0x4698d9(0xa9)]), this[_0x4698d9(0x8b)][_0x4698d9(0x9a)](100), _0x13dba0[_0x4698d9(0xaa)](silencePromise, this[_0x4698d9(0x84)][_0x4698d9(0x89)]()), _0x20df1d[_0x4698d9(0x98)](this[_0x4698d9(0x8a)], 1, _0x13dba0[_0x4698d9(0xab)]);
}), QUnit[_0x55ed32(0x8f)](_0x55ed32(0xac), function (_0x356a94) {
    const _0x301060 = _0x55ed32;
    const _0x83eac6 = {
        'FnkAv': _0x301060(0xad),
        'qrTJc': _0x301060(0x94),
        'gTQhn': 'tech_.play was not called because the source was changing',
        'gIjnk': 'abc.mp4',
        'lyIan': _0x301060(0x9d),
        'UerMA': _0x301060(0x92)
    };

    const _0x4cbefa = _0x83eac6[_0x301060(0xae)].split('|');

    var _0x4923fa = 0;

    while (true) {
        switch (_0x4cbefa[_0x4923fa++]) {
            case '0':
                _0x356a94[_0x301060(0x98)](this[_0x301060(0x8a)], 1, _0x83eac6[_0x301060(0xaf)]);
                continue;
            case '1':
                _0x356a94[_0x301060(0x98)](this.techPlayCallCount, 0, _0x83eac6[_0x301060(0xb0)]);
                continue;
            case '2':
                this[_0x301060(0x84)][_0x301060(0x9c)](_0x83eac6[_0x301060(0xb1)]);
                continue;
            case '3':
                this.clock.tick(100);
                continue;
            case '4':
                this[_0x301060(0x84)][_0x301060(0x89)]();
                continue;
            case '5':
                this[_0x301060(0x8b)][_0x301060(0x9a)](100);
                continue;
            case '6':
                this[_0x301060(0x84)].src(_0x83eac6[_0x301060(0xb2)]);
                continue;
            case '7':
                this.player[_0x301060(0x96)](_0x83eac6.UerMA);
                continue;
        }
        break;
    }
});
