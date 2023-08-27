
;
function overArgs(_0x2d5b8c, _0x5b9583) {
    const _0x34456d = _0x5b9583['length'];
    return function (..._0x494bbf) {
        let _0x2dfae6 = -1;
        const _0x3b7b28 = Math['min'](_0x494bbf['length'], _0x34456d);
        while (++_0x2dfae6 < _0x3b7b28) {
            _0x494bbf[_0x2dfae6] = _0x5b9583[_0x2dfae6]['call'](this, _0x494bbf[_0x2dfae6]);
        }
        return _0x2d5b8c['apply'](this, _0x494bbf);
    };
}
export default overArgs;