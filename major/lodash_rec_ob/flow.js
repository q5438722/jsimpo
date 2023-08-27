
function flow(..._0x77eb31) {
    const _0x524413 = _0x77eb31['length'];
    let _0xf68094 = _0x524413;
    while (_0xf68094--) {
        if (typeof _0x77eb31[_0xf68094] !== 'function')
            throw new TypeError('Expected a function');
    }
    return function (..._0x43528d) {
        let _0x380e23 = 0, _0x94f43e = _0x524413 ? _0x77eb31[_0x380e23]['apply'](this, _0x43528d) : _0x43528d[0];
        while (++_0x380e23 < _0x524413) {
            _0x94f43e = _0x77eb31[_0x380e23]['call'](this, _0x94f43e);
        }
        return _0x94f43e;
    };
}
export default flow;