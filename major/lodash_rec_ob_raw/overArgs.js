
function overArgs(_0x3eaefc, _0x1cc66d) {
    const _0x598917 = _0x1cc66d['length'];
    return function (..._0x3d79a2) {
        let _0x4cce57 = -1;
        const _0x37e47f = Math['min'](_0x3d79a2['length'], _0x598917);
        while (++_0x4cce57 < _0x37e47f) {
            _0x3d79a2[_0x4cce57] = _0x1cc66d[_0x4cce57]['call'](this, _0x3d79a2[_0x4cce57]);
        }
        return _0x3eaefc['apply'](this, _0x3d79a2);
    };
}
export default overArgs;