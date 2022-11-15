var _0x57f7 = [
    'clock',
    'useFakeTimers',
    'dispose',
    'restore',
    'test',
    'tech\x20not\x20ready\x20+\x20no\x20source\x20=\x20wait\x20for\x20ready,\x20then\x20loadstart',
    '0|1|10|6|2|7|4|8|5|3|9',
    'loadstart',
    'tech_.play\x20was\x20not\x20called\x20because\x20the\x20tech\x20was\x20not\x20ready',
    'tech_.play\x20was\x20called',
    'triggerReady',
    'trigger',
    'OUFax',
    'strictEqual',
    'tech_.play\x20was\x20not\x20called\x20because\x20there\x20was\x20no\x20source',
    'tick',
    'MePRE',
    'src',
    'xyz.mp4',
    'WJACn',
    'tech\x20not\x20ready\x20+\x20has\x20source\x20=\x20wait\x20for\x20ready',
    '6|4|8|3|5|1|2|7|0',
    'XBCVO',
    'HxazC',
    'HzcmL',
    'tech\x20ready\x20+\x20no\x20source\x20=\x20wait\x20for\x20loadstart',
    'IcgFr',
    'vcgGY',
    'wkXum',
    'tech\x20ready\x20+\x20has\x20source\x20=\x20play\x20immediately!',
    'sNCNU',
    'rxtWJ',
    'FeHYh',
    'tech\x20ready\x20+\x20has\x20source\x20+\x20changing\x20source\x20=\x20wait\x20for\x20loadstart',
    '6|3|2|4|5|1|7|0',
    'FnkAv',
    'qrTJc',
    'gTQhn',
    'gIjnk',
    'lyIan',
    '38146rhGDgK',
    '275424tdilct',
    '4dzevcN',
    '96769GmKrDy',
    '68677gVkUsj',
    '10pmkLrD',
    '8031WnUGdq',
    '1lFExEJ',
    '479031thYOkj',
    '37381GdGAcv',
    '1fhrTIQ',
    'module',
    '6|3|5|1|2|4|0',
    'split',
    'player',
    'tech_',
    'setCurrentTime',
    'techCurrentTimeCallCount',
    'initTime',
    'play',
    'techPlayCallCount'
];
var _0x55ed32 = _0x1ed5;
(function (_0x4ce5a7, _0x26f8e8) {
    var _0x108828 = _0x1ed5;
    while (!![]) {
        try {
            var _0x2afe60 = -parseInt(_0x108828(0x76)) + -parseInt(_0x108828(0x77)) + -parseInt(_0x108828(0x78)) * parseInt(_0x108828(0x79)) + parseInt(_0x108828(0x7a)) * parseInt(_0x108828(0x7b)) + parseInt(_0x108828(0x7c)) * -parseInt(_0x108828(0x7d)) + parseInt(_0x108828(0x7e)) + -parseInt(_0x108828(0x7f)) * parseInt(_0x108828(0x80));
            if (_0x2afe60 === _0x26f8e8)
                break;
            else
                _0x4ce5a7['push'](_0x4ce5a7['shift']());
        } catch (_0xf7dbd7) {
            _0x4ce5a7['push'](_0x4ce5a7['shift']());
        }
    }
}(_0x57f7, -0x2c6a + -0xa6181 * -0x1 + -0x3cd78));
import _0x2a214f from 'sinon';
import { silencePromise } from '../../src/js/utils/promise';
import _0x183f22 from './test-helpers';
function _0x1ed5(_0xc5f487, _0xc55806) {
    return _0x1ed5 = function (_0x28a859, _0x4f5188) {
        _0x28a859 = _0x28a859 - (-0x4 * -0x1be + 0x107f + -0x1701);
        var _0x122acd = _0x57f7[_0x28a859];
        return _0x122acd;
    }, _0x1ed5(_0xc5f487, _0xc55806);
}
QUnit[_0x55ed32(0x81)]('Player#play', {
    'beforeEach'() {
        var _0x18ee3e = _0x55ed32, _0x591d8a = { 'Zbddx': _0x18ee3e(0x82) }, _0x392fb6 = _0x591d8a['Zbddx'][_0x18ee3e(0x83)]('|'), _0x358224 = -0x1 * -0x551 + -0x1b99 + 0x1648;
        while (!![]) {
            switch (_0x392fb6[_0x358224++]) {
            case '0':
                this[_0x18ee3e(0x84)][_0x18ee3e(0x85)][_0x18ee3e(0x86)] = _0x328d34 => {
                    this['techCurrentTimeCallCount']++, this['initTime'] = _0x328d34;
                };
                continue;
            case '1':
                this[_0x18ee3e(0x87)] = 0x1fcf + -0x1e64 + -0x79 * 0x3;
                continue;
            case '2':
                this[_0x18ee3e(0x88)] = 0x15a1 + 0x1ff * 0x8 + 0x23 * -0x113;
                continue;
            case '3':
                this[_0x18ee3e(0x84)] = _0x183f22['makePlayer']({});
                continue;
            case '4':
                this[_0x18ee3e(0x84)][_0x18ee3e(0x85)][_0x18ee3e(0x89)] = () => {
                    this['techPlayCallCount']++;
                };
                continue;
            case '5':
                this[_0x18ee3e(0x8a)] = -0x24a0 + 0x9ed + -0x5 * -0x557;
                continue;
            case '6':
                this[_0x18ee3e(0x8b)] = _0x2a214f[_0x18ee3e(0x8c)]();
                continue;
            }
            break;
        }
    },
    'afterEach'() {
        var _0x1ff1ae = _0x55ed32;
        this['player'][_0x1ff1ae(0x8d)](), this[_0x1ff1ae(0x8b)][_0x1ff1ae(0x8e)]();
    }
}), QUnit[_0x55ed32(0x8f)](_0x55ed32(0x90), function (_0x234d9c) {
    var _0x38ae78 = _0x55ed32, _0x143a10 = {
            'WJkWm': _0x38ae78(0x91),
            'OUFax': _0x38ae78(0x92),
            'MePRE': _0x38ae78(0x93),
            'WJACn': _0x38ae78(0x94)
        }, _0x4a69c1 = _0x143a10['WJkWm'][_0x38ae78(0x83)]('|'), _0x1df377 = -0x1781 + -0x1ee4 + -0x5 * -0xae1;
    while (!![]) {
        switch (_0x4a69c1[_0x1df377++]) {
        case '0':
            this[_0x38ae78(0x84)]['isReady_'] = ![];
            continue;
        case '1':
            this[_0x38ae78(0x84)][_0x38ae78(0x89)]();
            continue;
        case '2':
            this['player'][_0x38ae78(0x95)]();
            continue;
        case '3':
            this[_0x38ae78(0x84)][_0x38ae78(0x96)](_0x143a10[_0x38ae78(0x97)]);
            continue;
        case '4':
            _0x234d9c[_0x38ae78(0x98)](this['techPlayCallCount'], 0x8 * -0x4cb + -0xe54 + -0xd2b * -0x4, _0x38ae78(0x99));
            continue;
        case '5':
            this['clock'][_0x38ae78(0x9a)](0x156 + 0x24cb + -0x25bd);
            continue;
        case '6':
            _0x234d9c[_0x38ae78(0x98)](this[_0x38ae78(0x8a)], 0x41 * 0x6a + 0x1 * 0x160f + -0x3f * 0xc7, _0x143a10[_0x38ae78(0x9b)]);
            continue;
        case '7':
            this[_0x38ae78(0x8b)]['tick'](0x1484 + -0x1038 + 0x2 * -0x1f4);
            continue;
        case '8':
            this['player'][_0x38ae78(0x9c)](_0x38ae78(0x9d));
            continue;
        case '9':
            _0x234d9c[_0x38ae78(0x98)](this[_0x38ae78(0x8a)], 0xfd7 + -0x6a2 + -0x934, _0x143a10[_0x38ae78(0x9e)]);
            continue;
        case '10':
            this[_0x38ae78(0x8b)][_0x38ae78(0x9a)](-0xd1e + -0x1a00 + 0x2 * 0x13c1);
            continue;
        }
        break;
    }
}), QUnit['test'](_0x55ed32(0x9f), function (_0x2f91e9) {
    var _0x4ac131 = _0x55ed32, _0xeb4b42 = {
            'XBCVO': _0x4ac131(0xa0),
            'HxazC': _0x4ac131(0x94),
            'HzcmL': _0x4ac131(0x9d)
        }, _0x2aeecb = _0xeb4b42[_0x4ac131(0xa1)]['split']('|'), _0x23efdf = 0x1056 + -0x21 * 0x122 + 0x1 * 0x150c;
    while (!![]) {
        switch (_0x2aeecb[_0x23efdf++]) {
        case '0':
            _0x2f91e9[_0x4ac131(0x98)](this['techPlayCallCount'], 0x3e7 + -0x546 + -0x16 * -0x10, _0xeb4b42[_0x4ac131(0xa2)]);
            continue;
        case '1':
            _0x2f91e9['strictEqual'](this[_0x4ac131(0x8a)], -0x21ce + 0x2232 + -0x64, _0x4ac131(0x93));
            continue;
        case '2':
            this[_0x4ac131(0x84)]['triggerReady']();
            continue;
        case '3':
            this[_0x4ac131(0x84)][_0x4ac131(0x89)]();
            continue;
        case '4':
            this[_0x4ac131(0x84)][_0x4ac131(0x9c)](_0xeb4b42[_0x4ac131(0xa3)]);
            continue;
        case '5':
            this['clock'][_0x4ac131(0x9a)](-0x2 * 0xb24 + 0x8da + 0x3a * 0x3d);
            continue;
        case '6':
            this['player']['isReady_'] = ![];
            continue;
        case '7':
            this[_0x4ac131(0x8b)][_0x4ac131(0x9a)](-0xa74 + -0x1d * -0x13 + 0x8b1);
            continue;
        case '8':
            this[_0x4ac131(0x8b)]['tick'](0x233 * 0x3 + 0x23 * 0xac + -0x1db9);
            continue;
        }
        break;
    }
}), QUnit['test'](_0x55ed32(0xa4), function (_0x58a5b0) {
    var _0x4a6092 = _0x55ed32, _0x996419 = {
            'IcgFr': '5|1|3|4|0|2|6',
            'CwFFh': _0x4a6092(0x92),
            'vcgGY': _0x4a6092(0x9d),
            'wkXum': _0x4a6092(0x94)
        }, _0x4295b3 = _0x996419[_0x4a6092(0xa5)]['split']('|'), _0x181d07 = -0xbaa + 0x93a * -0x1 + 0x2fc * 0x7;
    while (!![]) {
        switch (_0x4295b3[_0x181d07++]) {
        case '0':
            this[_0x4a6092(0x8b)][_0x4a6092(0x9a)](-0x1 * -0xcdc + -0x27f + -0x9f9);
            continue;
        case '1':
            this[_0x4a6092(0x8b)][_0x4a6092(0x9a)](0x5 + 0x5 * -0x33d + -0x1a8 * -0xa);
            continue;
        case '2':
            this[_0x4a6092(0x84)][_0x4a6092(0x96)](_0x996419['CwFFh']);
            continue;
        case '3':
            _0x58a5b0[_0x4a6092(0x98)](this[_0x4a6092(0x8a)], -0x788 + 0x10d7 * 0x1 + -0x94f * 0x1, _0x4a6092(0x93));
            continue;
        case '4':
            this['player']['src'](_0x996419[_0x4a6092(0xa6)]);
            continue;
        case '5':
            this[_0x4a6092(0x84)][_0x4a6092(0x89)]();
            continue;
        case '6':
            _0x58a5b0[_0x4a6092(0x98)](this[_0x4a6092(0x8a)], 0x43 * -0x4d + 0x12 * 0xaa + 0x834, _0x996419[_0x4a6092(0xa7)]);
            continue;
        }
        break;
    }
}), QUnit[_0x55ed32(0x8f)](_0x55ed32(0xa8), function (_0x20df1d) {
    var _0x4698d9 = _0x55ed32, _0x13dba0 = {
            'sNCNU': _0x4698d9(0x9d),
            'rxtWJ': function (_0x539a98, _0x3515dc) {
                return _0x539a98(_0x3515dc);
            },
            'FeHYh': _0x4698d9(0x94)
        };
    this[_0x4698d9(0x84)][_0x4698d9(0x9c)](_0x13dba0[_0x4698d9(0xa9)]), this[_0x4698d9(0x8b)][_0x4698d9(0x9a)](-0x516 * 0x3 + -0x548 + 0x14ee), _0x13dba0[_0x4698d9(0xaa)](silencePromise, this[_0x4698d9(0x84)][_0x4698d9(0x89)]()), _0x20df1d[_0x4698d9(0x98)](this[_0x4698d9(0x8a)], -0x1121 + -0x509 * 0x2 + 0x1b34 * 0x1, _0x13dba0[_0x4698d9(0xab)]);
}), QUnit[_0x55ed32(0x8f)](_0x55ed32(0xac), function (_0x356a94) {
    var _0x301060 = _0x55ed32, _0x83eac6 = {
            'FnkAv': _0x301060(0xad),
            'qrTJc': _0x301060(0x94),
            'gTQhn': 'tech_.play\x20was\x20not\x20called\x20because\x20the\x20source\x20was\x20changing',
            'gIjnk': 'abc.mp4',
            'lyIan': _0x301060(0x9d),
            'UerMA': _0x301060(0x92)
        }, _0x4cbefa = _0x83eac6[_0x301060(0xae)]['split']('|'), _0x4923fa = 0x630 + 0x7eb * 0x4 + 0x977 * -0x4;
    while (!![]) {
        switch (_0x4cbefa[_0x4923fa++]) {
        case '0':
            _0x356a94[_0x301060(0x98)](this[_0x301060(0x8a)], 0x2 * -0x10c6 + -0x3f8 + 0x2585, _0x83eac6[_0x301060(0xaf)]);
            continue;
        case '1':
            _0x356a94[_0x301060(0x98)](this['techPlayCallCount'], -0x2563 + -0x1e * -0xcd + 0xd5d, _0x83eac6[_0x301060(0xb0)]);
            continue;
        case '2':
            this[_0x301060(0x84)][_0x301060(0x9c)](_0x83eac6[_0x301060(0xb1)]);
            continue;
        case '3':
            this['clock']['tick'](-0x56 * -0x6b + -0x361 + 0x202d * -0x1);
            continue;
        case '4':
            this[_0x301060(0x84)][_0x301060(0x89)]();
            continue;
        case '5':
            this[_0x301060(0x8b)][_0x301060(0x9a)](-0x15aa + -0x1094 + 0x26a2);
            continue;
        case '6':
            this[_0x301060(0x84)]['src'](_0x83eac6[_0x301060(0xb2)]);
            continue;
        case '7':
            this['player'][_0x301060(0x96)](_0x83eac6['UerMA']);
            continue;
        }
        break;
    }
});
