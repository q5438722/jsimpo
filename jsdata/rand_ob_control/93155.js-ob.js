import _0x429df4 from '../../../data-structures/priority-queue/PriorityQueue';
export default function dijkstra(_0x4fa032, _0x9bf3bf) {
    const _0x517b33 = {
            'jvZWE': function (_0x388756, _0x215a00) {
                return _0x388756 + _0x215a00;
            },
            'KinHo': function (_0x4c2a92, _0x32aa12) {
                return _0x4c2a92 < _0x32aa12;
            }
        }, _0x28baf9 = {}, _0x477906 = {}, _0x59999b = {}, _0x409ffa = new _0x429df4();
    _0x4fa032['getAllVertices']()['forEach'](_0x2997b9 => {
        _0x28baf9[_0x2997b9['getKey']()] = Infinity, _0x59999b[_0x2997b9['getKey']()] = null;
    }), _0x28baf9[_0x9bf3bf['getKey']()] = 0x0, _0x409ffa['add'](_0x9bf3bf, _0x28baf9[_0x9bf3bf['getKey']()]);
    while (!_0x409ffa['isEmpty']()) {
        const _0x32d1dc = _0x409ffa['poll']();
        _0x32d1dc['getNeighbors']()['forEach'](_0x2300df => {
            if (!_0x477906[_0x2300df['getKey']()]) {
                const _0x2d3de1 = _0x4fa032['findEdge'](_0x32d1dc, _0x2300df), _0x2c2b7d = _0x28baf9[_0x2300df['getKey']()], _0x51f3e5 = _0x517b33['jvZWE'](_0x28baf9[_0x32d1dc['getKey']()], _0x2d3de1['weight']);
                _0x517b33['KinHo'](_0x51f3e5, _0x2c2b7d) && (_0x28baf9[_0x2300df['getKey']()] = _0x51f3e5, _0x409ffa['hasValue'](_0x2300df) && _0x409ffa['changePriority'](_0x2300df, _0x28baf9[_0x2300df['getKey']()]), _0x59999b[_0x2300df['getKey']()] = _0x32d1dc), !_0x409ffa['hasValue'](_0x2300df) && _0x409ffa['add'](_0x2300df, _0x28baf9[_0x2300df['getKey']()]);
            }
        }), _0x477906[_0x32d1dc['getKey']()] = _0x32d1dc;
    }
    return {
        'distances': _0x28baf9,
        'previousVertices': _0x59999b
    };
}
