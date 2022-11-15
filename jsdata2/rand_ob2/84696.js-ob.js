const _0x47af = [
    '137ZNJlFx',
    '952019GGgagi',
    '34chMeDv',
    '2399nhbRNb',
    '530365DFonFG',
    '2SpVzyU',
    '66321LxIHUv',
    '1sxBKRF',
    '413nIGcgS',
    '2539jdAmyl',
    'module',
    'Audio\x20Track',
    'English',
    'main',
    'test',
    'can\x20create\x20an\x20enabled\x20propert\x20on\x20an\x20AudioTrack',
    'enabled',
    'enabled\x20value\x20matches\x20what\x20we\x20passed\x20in',
    'defaults\x20when\x20items\x20not\x20provided',
    'equal',
    'kind',
    'kind\x20defaulted\x20to\x20empty\x20string',
    'language',
    'match',
    'kind\x20can\x20only\x20be\x20one\x20of\x20several\x20options,\x20defaults\x20to\x20empty\x20string',
    'the\x20kind\x20is\x20set\x20to\x20empty\x20string,\x20not\x20foo',
    'notEqual',
    'the\x20kind\x20is\x20set\x20to\x20',
    'foo',
    'the\x20enabled\x20value\x20is\x20set\x20to\x20false,\x20not\x20foo',
    'the\x20enabled\x20value\x20is\x20not\x20set\x20to\x20foo',
    'the\x20enabled\x20value\x20is\x20set\x20to\x20true',
    'enabled\x20can\x20only\x20be\x20changed\x20to\x20true\x20or\x20false',
    'enabled\x20not\x20set\x20to\x20invalid\x20value,\x20foo',
    'enabled\x20remains\x20on\x20the\x20old\x20value,\x20false',
    'enabled\x20was\x20set\x20to\x20true',
    'baz',
    'enabled\x20not\x20set\x20to\x20invalid\x20value,\x20baz',
    'when\x20enabled\x20is\x20changed\x20enabledchange\x20event\x20is\x20fired',
    'tech',
    'addEventListener',
    'two\x20enabled\x20changes',
    'three\x20enabled\x20changes',
    'still\x20three\x20enabled\x20changes',
    'off',
    '149nEGDPw',
    '7033XJinXU',
    '5077DXspKb'
];
const _0x466655 = _0x2f90;
(function (_0x31a2bf, _0x1678f6) {
    const _0x1a025b = _0x2f90;
    while (!![]) {
        try {
            const _0x318a45 = parseInt(_0x1a025b(0x1b0)) * -parseInt(_0x1a025b(0x1b1)) + parseInt(_0x1a025b(0x1b2)) * parseInt(_0x1a025b(0x1b3)) + parseInt(_0x1a025b(0x1b4)) + -parseInt(_0x1a025b(0x1b5)) * -parseInt(_0x1a025b(0x1b6)) + parseInt(_0x1a025b(0x1b7)) * -parseInt(_0x1a025b(0x1b8)) + -parseInt(_0x1a025b(0x1b9)) * parseInt(_0x1a025b(0x1ba)) + parseInt(_0x1a025b(0x1bb)) * parseInt(_0x1a025b(0x1bc));
            if (_0x318a45 === _0x1678f6)
                break;
            else
                _0x31a2bf['push'](_0x31a2bf['shift']());
        } catch (_0x52d57e) {
            _0x31a2bf['push'](_0x31a2bf['shift']());
        }
    }
}(_0x47af, 0x93295));
import _0x35da86 from '../../../src/js/tracks/audio-track.js';
import { AudioTrackKind } from '../../../src/js/tracks/track-enums.js';
import _0x1ebebc from './track-baseline';
function _0x2f90(_0xe10b84, _0x8c5af4) {
    return _0x2f90 = function (_0x47af91, _0x2f9057) {
        _0x47af91 = _0x47af91 - 0x1b0;
        let _0x20f927 = _0x47af[_0x47af91];
        return _0x20f927;
    }, _0x2f90(_0xe10b84, _0x8c5af4);
}
QUnit[_0x466655(0x1bd)](_0x466655(0x1be)), _0x1ebebc(_0x35da86, {
    'id': '1',
    'language': 'en',
    'label': _0x466655(0x1bf),
    'kind': _0x466655(0x1c0)
}), QUnit[_0x466655(0x1c1)](_0x466655(0x1c2), function (_0x3e5a52) {
    const _0x54ee58 = _0x466655, _0x246608 = !![], _0x3f41d8 = new _0x35da86({ 'enabled': _0x246608 });
    _0x3e5a52['equal'](_0x3f41d8[_0x54ee58(0x1c3)], _0x246608, _0x54ee58(0x1c4));
}), QUnit[_0x466655(0x1c1)](_0x466655(0x1c5), function (_0x545763) {
    const _0x398cff = _0x466655, _0x1946b3 = new _0x35da86();
    _0x545763[_0x398cff(0x1c6)](_0x1946b3[_0x398cff(0x1c7)], '', _0x398cff(0x1c8)), _0x545763[_0x398cff(0x1c6)](_0x1946b3['enabled'], ![], 'enabled\x20defaulted\x20to\x20true\x20since\x20there\x20is\x20one\x20track'), _0x545763['equal'](_0x1946b3['label'], '', 'label\x20defaults\x20to\x20empty\x20string'), _0x545763[_0x398cff(0x1c6)](_0x1946b3[_0x398cff(0x1c9)], '', 'language\x20defaults\x20to\x20empty\x20string'), _0x545763['ok'](_0x1946b3['id'][_0x398cff(0x1ca)](/vjs_track_\d+/), 'id\x20defaults\x20to\x20vjs_track_GUID');
}), QUnit['test'](_0x466655(0x1cb), function (_0x4c5421) {
    const _0x1383df = _0x466655, _0x47cbd7 = new _0x35da86({ 'kind': 'foo' });
    _0x4c5421[_0x1383df(0x1c6)](_0x47cbd7[_0x1383df(0x1c7)], '', _0x1383df(0x1cc)), _0x4c5421[_0x1383df(0x1cd)](_0x47cbd7[_0x1383df(0x1c7)], 'foo', _0x1383df(0x1cc));
    for (const _0x4c140a in AudioTrackKind) {
        const _0x599f85 = AudioTrackKind[_0x4c140a], _0xf4f2ba = new _0x35da86({ 'kind': _0x599f85 });
        _0x4c5421[_0x1383df(0x1c6)](_0xf4f2ba[_0x1383df(0x1c7)], _0x599f85, _0x1383df(0x1ce) + _0x599f85);
    }
}), QUnit[_0x466655(0x1c1)]('enabled\x20can\x20only\x20be\x20instantiated\x20to\x20true\x20or\x20false,\x20defaults\x20to\x20false', function (_0x2d5f39) {
    const _0x1b432c = _0x466655;
    let _0x75701c = new _0x35da86({ 'enabled': _0x1b432c(0x1cf) });
    _0x2d5f39[_0x1b432c(0x1c6)](_0x75701c['enabled'], ![], _0x1b432c(0x1d0)), _0x2d5f39[_0x1b432c(0x1cd)](_0x75701c[_0x1b432c(0x1c3)], _0x1b432c(0x1cf), _0x1b432c(0x1d1)), _0x75701c = new _0x35da86({ 'enabled': !![] }), _0x2d5f39[_0x1b432c(0x1c6)](_0x75701c[_0x1b432c(0x1c3)], !![], _0x1b432c(0x1d2)), _0x75701c = new _0x35da86({ 'enabled': ![] }), _0x2d5f39[_0x1b432c(0x1c6)](_0x75701c[_0x1b432c(0x1c3)], ![], 'the\x20enabled\x20value\x20is\x20set\x20to\x20false');
}), QUnit['test'](_0x466655(0x1d3), function (_0xa4daa3) {
    const _0x2d3706 = _0x466655, _0xe38a41 = new _0x35da86();
    _0xe38a41['enabled'] = _0x2d3706(0x1cf), _0xa4daa3[_0x2d3706(0x1cd)](_0xe38a41[_0x2d3706(0x1c3)], _0x2d3706(0x1cf), _0x2d3706(0x1d4)), _0xa4daa3[_0x2d3706(0x1c6)](_0xe38a41[_0x2d3706(0x1c3)], ![], _0x2d3706(0x1d5)), _0xe38a41[_0x2d3706(0x1c3)] = !![], _0xa4daa3[_0x2d3706(0x1c6)](_0xe38a41[_0x2d3706(0x1c3)], !![], _0x2d3706(0x1d6)), _0xe38a41['enabled'] = _0x2d3706(0x1d7), _0xa4daa3[_0x2d3706(0x1cd)](_0xe38a41['enabled'], _0x2d3706(0x1d7), _0x2d3706(0x1d8)), _0xa4daa3[_0x2d3706(0x1c6)](_0xe38a41[_0x2d3706(0x1c3)], !![], 'enabled\x20remains\x20on\x20the\x20old\x20value,\x20true'), _0xe38a41[_0x2d3706(0x1c3)] = ![], _0xa4daa3['equal'](_0xe38a41[_0x2d3706(0x1c3)], ![], 'enabled\x20was\x20set\x20to\x20false');
}), QUnit[_0x466655(0x1c1)](_0x466655(0x1d9), function (_0x479187) {
    const _0x536f41 = _0x466655, _0x573ffd = new _0x35da86({
            'tech': this[_0x536f41(0x1da)],
            'enabled': ![]
        });
    let _0x585ac6 = 0x0;
    _0x573ffd[_0x536f41(0x1db)]('enabledchange', () => {
        _0x585ac6++;
    }), _0x573ffd['enabled'] = !![], _0x573ffd[_0x536f41(0x1c3)] = ![], _0x479187[_0x536f41(0x1c6)](_0x585ac6, 0x2, _0x536f41(0x1dc)), _0x573ffd[_0x536f41(0x1c3)] = ![], _0x573ffd[_0x536f41(0x1c3)] = ![], _0x479187[_0x536f41(0x1c6)](_0x585ac6, 0x2, 'still\x20two\x20enabled\x20changes'), _0x573ffd[_0x536f41(0x1c3)] = !![], _0x479187[_0x536f41(0x1c6)](_0x585ac6, 0x3, _0x536f41(0x1dd)), _0x573ffd[_0x536f41(0x1c3)] = !![], _0x573ffd[_0x536f41(0x1c3)] = !![], _0x479187[_0x536f41(0x1c6)](_0x585ac6, 0x3, _0x536f41(0x1de)), _0x573ffd[_0x536f41(0x1df)]();
});
