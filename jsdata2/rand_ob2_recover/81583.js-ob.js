function _0x5b2e(_0x35b400, _0x40a143) {
    return _0x5b2e = function (_0x420c3b, _0x5b2e4d) {
        _0x420c3b = _0x420c3b - 111;
        let _0xedff11 = _0x420c[_0x420c3b];
        return _0xedff11;
    }, _0x5b2e(_0x35b400, _0x40a143);
}
const _ = require(_0x377944(122));
module[_0x377944(123)] = function (_0x1b0197) {
    const _0x7a5bce = _0x377944, _0x483a62 = _0x1b0197[_0x7a5bce(124)];
    _0x1b0197[_0x7a5bce(124)] = _0x1b0197[_0x7a5bce(124)][_0x7a5bce(125)]({
        'sync': function _0x2fa2bf() {
            const _0x59025c = _0x7a5bce, _0x4c5034 = _0x483a62[_0x59025c(126)]['sync'][_0x59025c(127)](this, arguments), _0x274d24 = _0x4c5034['update'], _0x3c6263 = _0x4c5034['insert'], _0x162d8b = this;
            return _0x4c5034[_0x59025c(128)] = function _0x1f5449(_0x46883b) {
                const _0x4a5146 = _0x59025c;
                return _0x46883b = _0x162d8b[_0x4a5146(129)](_[_0x4a5146(130)](_0x46883b)), _0x274d24['apply'](this, [_0x46883b]);
            }, _0x4c5034[_0x59025c(131)] = function _0x239352(_0x28137e) {
                const _0xd27f08 = _0x59025c;
                return _0x28137e = _0x162d8b[_0xd27f08(129)](_['cloneDeep'](_0x28137e)), _0x3c6263[_0xd27f08(127)](this, [_0x28137e]);
            }, _0x4c5034;
        },
        'formatOnWrite': function _0xff20e8(_0x2e1cb1) {
            return _0x2e1cb1;
        },
        'format': function _0x904988(_0x39bb6b) {
            const _0x1ce425 = _0x7a5bce;
            return this[_0x1ce425(132)](_0x39bb6b);
        },
        'parse': function _0x54c0c5(_0x2b7daf) {
            return this['fixBools'](this['fixDatesWhenFetch'](_0x2b7daf));
        },
        'toJSON': function _0x56e4bb(_0x422220) {
            const _0x565d0d = _0x7a5bce, _0x565718 = _0x1b0197[_0x565d0d(124)]['filterOptions'](_0x422220, _0x565d0d(133));
            _0x565718[_0x565d0d(134)] = !![], _[_0x565d0d(135)](this['relations'], (_0x4d8ccd, _0x411df8) => {
                const _0x1bb782 = _0x565d0d;
                _['isEmpty'](_0x4d8ccd) && delete this[_0x1bb782(136)][_0x411df8];
            });
            if (_0x565718[_0x565d0d(137)]) {
                const _0x762eea = _['cloneDeep'](this);
                return _0x762eea[_0x565d0d(138)] = this[_0x565d0d(139)], this['relationships'] && this['relationships'][_0x565d0d(140)](_0x195da5 => {
                    const _0x36a0ce = _0x565d0d;
                    this[_0x36a0ce(141)] && Object['prototype']['hasOwnProperty'][_0x36a0ce(142)](this[_0x36a0ce(141)], _0x195da5) && (_0x762eea['related'](_0x195da5)['models'] = this[_0x36a0ce(141)][_0x195da5]['models']);
                }), _0x483a62['prototype']['toJSON']['call'](_0x762eea, _0x565718);
            }
            return _0x483a62[_0x565d0d(126)][_0x565d0d(133)][_0x565d0d(142)](this, _0x565718);
        }
    });
};