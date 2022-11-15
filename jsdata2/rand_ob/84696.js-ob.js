const _0x1aaa = [
    '89048Msqocs',
    '917377CpZyIW',
    '1kVwLrX',
    '2990155NqGqnc',
    'module',
    'Audio\x20Track',
    'English',
    'main',
    'can\x20create\x20an\x20enabled\x20propert\x20on\x20an\x20AudioTrack',
    'enabled\x20value\x20matches\x20what\x20we\x20passed\x20in',
    'enabled',
    'RUNBc',
    'test',
    'defaults\x20when\x20items\x20not\x20provided',
    'kind\x20defaulted\x20to\x20empty\x20string',
    'enabled\x20defaulted\x20to\x20true\x20since\x20there\x20is\x20one\x20track',
    'language\x20defaults\x20to\x20empty\x20string',
    'id\x20defaults\x20to\x20vjs_track_GUID',
    'equal',
    'qDUMC',
    'nOnwX',
    'label',
    'label\x20defaults\x20to\x20empty\x20string',
    'language',
    'match',
    'HjlJb',
    'the\x20kind\x20is\x20set\x20to\x20empty\x20string,\x20not\x20foo',
    'the\x20kind\x20is\x20set\x20to\x20',
    'qAgUc',
    'kind',
    'wUTLt',
    'notEqual',
    'enabled\x20can\x20only\x20be\x20instantiated\x20to\x20true\x20or\x20false,\x20defaults\x20to\x20false',
    'foo',
    'the\x20enabled\x20value\x20is\x20set\x20to\x20true',
    'zFWbz',
    'swLzN',
    'the\x20enabled\x20value\x20is\x20not\x20set\x20to\x20foo',
    'zVRkL',
    'enabled\x20was\x20set\x20to\x20true',
    'enabled\x20not\x20set\x20to\x20invalid\x20value,\x20baz',
    'enabled\x20remains\x20on\x20the\x20old\x20value,\x20true',
    'enabled\x20was\x20set\x20to\x20false',
    'EHTVK',
    'enabled\x20not\x20set\x20to\x20invalid\x20value,\x20foo',
    'dVIBz',
    'ddgrh',
    'baz',
    'muFoL',
    'DBbrf',
    'ueLea',
    'when\x20enabled\x20is\x20changed\x20enabledchange\x20event\x20is\x20fired',
    'still\x20two\x20enabled\x20changes',
    'still\x20three\x20enabled\x20changes',
    'tech',
    'dMpvj',
    'three\x20enabled\x20changes',
    'oiwQT',
    'off',
    '323qkUaaJ',
    '3261oabRqS',
    '1332026vhiKKJ',
    '1428803AwlDlE',
    '236191KXIDHS'
];
const _0x5979b7 = _0xab0c;
function _0xab0c(_0x1010e1, _0x121043) {
    return _0xab0c = function (_0x55ce69, _0x58b628) {
        _0x55ce69 = _0x55ce69 - (0xdec + 0x867 + 0x8a * -0x27);
        let _0x223272 = _0x1aaa[_0x55ce69];
        return _0x223272;
    }, _0xab0c(_0x1010e1, _0x121043);
}
(function (_0x582061, _0x335684) {
    const _0x61c4e2 = _0xab0c;
    while (!![]) {
        try {
            const _0x2f16c8 = parseInt(_0x61c4e2(0x14d)) * -parseInt(_0x61c4e2(0x14e)) + -parseInt(_0x61c4e2(0x14f)) + parseInt(_0x61c4e2(0x150)) + -parseInt(_0x61c4e2(0x151)) + -parseInt(_0x61c4e2(0x152)) + -parseInt(_0x61c4e2(0x153)) + -parseInt(_0x61c4e2(0x154)) * -parseInt(_0x61c4e2(0x155));
            if (_0x2f16c8 === _0x335684)
                break;
            else
                _0x582061['push'](_0x582061['shift']());
        } catch (_0x4fed53) {
            _0x582061['push'](_0x582061['shift']());
        }
    }
}(_0x1aaa, -0x3ae99 + 0x24c3 + 0xf9bbb));
import _0x4d73b6 from '../../../src/js/tracks/audio-track.js';
import { AudioTrackKind } from '../../../src/js/tracks/track-enums.js';
import _0xbc8216 from './track-baseline';
QUnit[_0x5979b7(0x156)](_0x5979b7(0x157)), _0xbc8216(_0x4d73b6, {
    'id': '1',
    'language': 'en',
    'label': _0x5979b7(0x158),
    'kind': _0x5979b7(0x159)
}), QUnit['test'](_0x5979b7(0x15a), function (_0x24bc47) {
    const _0x1ba94f = _0x5979b7, _0x1c5109 = { 'RUNBc': _0x1ba94f(0x15b) }, _0x525eb0 = !![], _0x5cb2f6 = new _0x4d73b6({ 'enabled': _0x525eb0 });
    _0x24bc47['equal'](_0x5cb2f6[_0x1ba94f(0x15c)], _0x525eb0, _0x1c5109[_0x1ba94f(0x15d)]);
}), QUnit[_0x5979b7(0x15e)](_0x5979b7(0x15f), function (_0x17824a) {
    const _0x140787 = _0x5979b7, _0x656d11 = {
            'qDUMC': _0x140787(0x160),
            'nOnwX': _0x140787(0x161),
            'prTai': _0x140787(0x162),
            'HjlJb': _0x140787(0x163)
        }, _0x41f0b1 = new _0x4d73b6();
    _0x17824a[_0x140787(0x164)](_0x41f0b1['kind'], '', _0x656d11[_0x140787(0x165)]), _0x17824a['equal'](_0x41f0b1[_0x140787(0x15c)], ![], _0x656d11[_0x140787(0x166)]), _0x17824a[_0x140787(0x164)](_0x41f0b1[_0x140787(0x167)], '', _0x140787(0x168)), _0x17824a[_0x140787(0x164)](_0x41f0b1[_0x140787(0x169)], '', _0x656d11['prTai']), _0x17824a['ok'](_0x41f0b1['id'][_0x140787(0x16a)](/vjs_track_\d+/), _0x656d11[_0x140787(0x16b)]);
}), QUnit[_0x5979b7(0x15e)]('kind\x20can\x20only\x20be\x20one\x20of\x20several\x20options,\x20defaults\x20to\x20empty\x20string', function (_0x34b399) {
    const _0x5a1d3f = _0x5979b7, _0x2c7896 = {
            'qAgUc': 'foo',
            'wUTLt': _0x5a1d3f(0x16c),
            'DLCgb': _0x5a1d3f(0x16d)
        }, _0xa7c22b = new _0x4d73b6({ 'kind': _0x2c7896[_0x5a1d3f(0x16e)] });
    _0x34b399[_0x5a1d3f(0x164)](_0xa7c22b[_0x5a1d3f(0x16f)], '', _0x2c7896[_0x5a1d3f(0x170)]), _0x34b399[_0x5a1d3f(0x171)](_0xa7c22b['kind'], _0x2c7896[_0x5a1d3f(0x16e)], _0x2c7896[_0x5a1d3f(0x170)]);
    for (const _0x57dfa3 in AudioTrackKind) {
        const _0x39522a = AudioTrackKind[_0x57dfa3], _0x1d0314 = new _0x4d73b6({ 'kind': _0x39522a });
        _0x34b399[_0x5a1d3f(0x164)](_0x1d0314['kind'], _0x39522a, _0x2c7896['DLCgb'] + _0x39522a);
    }
}), QUnit[_0x5979b7(0x15e)](_0x5979b7(0x172), function (_0x2dd638) {
    const _0xfd6543 = _0x5979b7, _0x343712 = {
            'zFWbz': _0xfd6543(0x173),
            'swLzN': 'the\x20enabled\x20value\x20is\x20set\x20to\x20false,\x20not\x20foo',
            'zVRkL': _0xfd6543(0x174)
        };
    let _0x358cd2 = new _0x4d73b6({ 'enabled': _0x343712[_0xfd6543(0x175)] });
    _0x2dd638[_0xfd6543(0x164)](_0x358cd2['enabled'], ![], _0x343712[_0xfd6543(0x176)]), _0x2dd638[_0xfd6543(0x171)](_0x358cd2['enabled'], _0x343712[_0xfd6543(0x175)], _0xfd6543(0x177)), _0x358cd2 = new _0x4d73b6({ 'enabled': !![] }), _0x2dd638[_0xfd6543(0x164)](_0x358cd2['enabled'], !![], _0x343712[_0xfd6543(0x178)]), _0x358cd2 = new _0x4d73b6({ 'enabled': ![] }), _0x2dd638[_0xfd6543(0x164)](_0x358cd2[_0xfd6543(0x15c)], ![], 'the\x20enabled\x20value\x20is\x20set\x20to\x20false');
}), QUnit[_0x5979b7(0x15e)]('enabled\x20can\x20only\x20be\x20changed\x20to\x20true\x20or\x20false', function (_0xf88926) {
    const _0x4c3b4c = _0x5979b7, _0xb6a2a1 = {
            'EHTVK': _0x4c3b4c(0x173),
            'dVIBz': 'enabled\x20remains\x20on\x20the\x20old\x20value,\x20false',
            'ddgrh': _0x4c3b4c(0x179),
            'muFoL': _0x4c3b4c(0x17a),
            'DBbrf': _0x4c3b4c(0x17b),
            'ueLea': _0x4c3b4c(0x17c)
        }, _0x488ac0 = new _0x4d73b6();
    _0x488ac0[_0x4c3b4c(0x15c)] = _0xb6a2a1[_0x4c3b4c(0x17d)], _0xf88926[_0x4c3b4c(0x171)](_0x488ac0[_0x4c3b4c(0x15c)], _0xb6a2a1[_0x4c3b4c(0x17d)], _0x4c3b4c(0x17e)), _0xf88926['equal'](_0x488ac0[_0x4c3b4c(0x15c)], ![], _0xb6a2a1[_0x4c3b4c(0x17f)]), _0x488ac0['enabled'] = !![], _0xf88926[_0x4c3b4c(0x164)](_0x488ac0[_0x4c3b4c(0x15c)], !![], _0xb6a2a1[_0x4c3b4c(0x180)]), _0x488ac0['enabled'] = _0x4c3b4c(0x181), _0xf88926['notEqual'](_0x488ac0[_0x4c3b4c(0x15c)], _0x4c3b4c(0x181), _0xb6a2a1[_0x4c3b4c(0x182)]), _0xf88926[_0x4c3b4c(0x164)](_0x488ac0[_0x4c3b4c(0x15c)], !![], _0xb6a2a1[_0x4c3b4c(0x183)]), _0x488ac0[_0x4c3b4c(0x15c)] = ![], _0xf88926['equal'](_0x488ac0[_0x4c3b4c(0x15c)], ![], _0xb6a2a1[_0x4c3b4c(0x184)]);
}), QUnit[_0x5979b7(0x15e)](_0x5979b7(0x185), function (_0x221aed) {
    const _0x333ca8 = _0x5979b7, _0x49bd72 = {
            'dMpvj': 'two\x20enabled\x20changes',
            'uTNWt': _0x333ca8(0x186),
            'oiwQT': _0x333ca8(0x187)
        }, _0x380a88 = new _0x4d73b6({
            'tech': this[_0x333ca8(0x188)],
            'enabled': ![]
        });
    let _0x2e13f6 = 0x423 * 0x8 + 0x20ae + -0x1 * 0x41c6;
    _0x380a88['addEventListener']('enabledchange', () => {
        _0x2e13f6++;
    }), _0x380a88[_0x333ca8(0x15c)] = !![], _0x380a88['enabled'] = ![], _0x221aed[_0x333ca8(0x164)](_0x2e13f6, -0x2051 + 0x180 + 0x1ed3, _0x49bd72[_0x333ca8(0x189)]), _0x380a88[_0x333ca8(0x15c)] = ![], _0x380a88['enabled'] = ![], _0x221aed[_0x333ca8(0x164)](_0x2e13f6, 0xc9b + -0x26ae + 0x1a15, _0x49bd72['uTNWt']), _0x380a88[_0x333ca8(0x15c)] = !![], _0x221aed[_0x333ca8(0x164)](_0x2e13f6, -0x6 * 0xed + -0x14b6 + 0x1a47, _0x333ca8(0x18a)), _0x380a88['enabled'] = !![], _0x380a88[_0x333ca8(0x15c)] = !![], _0x221aed[_0x333ca8(0x164)](_0x2e13f6, -0x234f + 0x106e + 0x12e4, _0x49bd72[_0x333ca8(0x18b)]), _0x380a88[_0x333ca8(0x18c)]();
});
