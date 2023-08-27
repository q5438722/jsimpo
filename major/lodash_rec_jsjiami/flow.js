
;
function flow(..._0x16e365) {
    const _0x527396 = _0x16e365['length'];
    let _0xc23b90 = _0x527396;
    while (_0xc23b90--) {
        if (typeof _0x16e365[_0xc23b90] !== 'function') {
            throw new TypeError('Expected a function');
        }
    }
    return function (..._0x3cd03e) {
        let _0xc23b90 = 0;
        let _0x5d2949 = _0x527396 ? _0x16e365[_0xc23b90]['apply'](this, _0x3cd03e) : _0x3cd03e[0];
        while (++_0xc23b90 < _0x527396) {
            _0x5d2949 = _0x16e365[_0xc23b90]['call'](this, _0x5d2949);
        }
        return _0x5d2949;
    };
}
export default flow;