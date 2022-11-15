import _0x594cf0 from '../../../data-structures/priority-queue/PriorityQueue';
export default function dijkstra(_0x1a4437, _0x3d988b) {
    const _0x28e154 = {}, _0x4f3114 = {}, _0x1028b6 = {}, _0x55758e = new _0x594cf0();
    _0x1a4437['getAllVertices']()['forEach'](_0x588ec3 => {
        _0x28e154[_0x588ec3['getKey']()] = Infinity, _0x1028b6[_0x588ec3['getKey']()] = null;
    }), _0x28e154[_0x3d988b['getKey']()] = -0x222d + -0xb * -0x233 + -0x3 * -0x354, _0x55758e['add'](_0x3d988b, _0x28e154[_0x3d988b['getKey']()]);
    while (!_0x55758e['isEmpty']()) {
        const _0x473171 = _0x55758e['poll']();
        _0x473171['getNeighbors']()['forEach'](_0x1fe8e5 => {
            if (!_0x4f3114[_0x1fe8e5['getKey']()]) {
                const _0x133400 = _0x1a4437['findEdge'](_0x473171, _0x1fe8e5), _0x394dcb = _0x28e154[_0x1fe8e5['getKey']()], _0x5d1dda = _0x28e154[_0x473171['getKey']()] + _0x133400['weight'];
                _0x5d1dda < _0x394dcb && (_0x28e154[_0x1fe8e5['getKey']()] = _0x5d1dda, _0x55758e['hasValue'](_0x1fe8e5) && _0x55758e['changePriority'](_0x1fe8e5, _0x28e154[_0x1fe8e5['getKey']()]), _0x1028b6[_0x1fe8e5['getKey']()] = _0x473171), !_0x55758e['hasValue'](_0x1fe8e5) && _0x55758e['add'](_0x1fe8e5, _0x28e154[_0x1fe8e5['getKey']()]);
            }
        }), _0x4f3114[_0x473171['getKey']()] = _0x473171;
    }
    return {
        'distances': _0x28e154,
        'previousVertices': _0x1028b6
    };
}
