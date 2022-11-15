const _0x103d = [
    '10231gTcBCw',
    '114sqTAJw',
    '1rHqTYq',
    '441590lqdJuE',
    '379005UtKjRA',
    '1637807aDHEQp',
    'getKey',
    'value',
    'edges',
    'addEdge',
    'append',
    'delete',
    'getNeighbors',
    'startVertex',
    'getEdges',
    'toArray',
    'map',
    'getDegree',
    'hasEdge',
    'find',
    'hasNeighbor',
    'findEdge',
    'forEach',
    'deleteEdge',
    'toString',
    '818327fukdDs',
    '1wcpSIa',
    '160535OIVgaG',
    '748462bOnfiS'
];
const _0x4006c8 = _0x1572;
(function (_0x21406e, _0x4ab6b3) {
    const _0x2b853b = _0x1572;
    while (!![]) {
        try {
            const _0x4866c4 = parseInt(_0x2b853b(0x1d6)) * parseInt(_0x2b853b(0x1d7)) + parseInt(_0x2b853b(0x1d8)) + -parseInt(_0x2b853b(0x1d9)) + parseInt(_0x2b853b(0x1da)) * -parseInt(_0x2b853b(0x1db)) + parseInt(_0x2b853b(0x1dc)) * -parseInt(_0x2b853b(0x1dd)) + parseInt(_0x2b853b(0x1de)) + parseInt(_0x2b853b(0x1df));
            if (_0x4866c4 === _0x4ab6b3)
                break;
            else
                _0x21406e['push'](_0x21406e['shift']());
        } catch (_0xc029f7) {
            _0x21406e['push'](_0x21406e['shift']());
        }
    }
}(_0x103d, 0x9c138));
import _0x3ef48d from '../linked-list/LinkedList';
function _0x1572(_0x233a7b, _0x9cf6f5) {
    return _0x1572 = function (_0x103d73, _0x1572b3) {
        _0x103d73 = _0x103d73 - 0x1d6;
        let _0x96a1e0 = _0x103d[_0x103d73];
        return _0x96a1e0;
    }, _0x1572(_0x233a7b, _0x9cf6f5);
}
export default class GraphVertex {
    constructor(_0x61ccf7) {
        const _0x1c69f3 = _0x1572;
        if (_0x61ccf7 === undefined)
            throw new Error('Graph\x20vertex\x20must\x20have\x20a\x20value');
        const _0x23910f = (_0x11a3f0, _0x174433) => {
            const _0x1b3436 = _0x1572;
            if (_0x11a3f0[_0x1b3436(0x1e0)]() === _0x174433['getKey']())
                return 0x0;
            return _0x11a3f0[_0x1b3436(0x1e0)]() < _0x174433[_0x1b3436(0x1e0)]() ? -0x1 : 0x1;
        };
        this[_0x1c69f3(0x1e1)] = _0x61ccf7, this[_0x1c69f3(0x1e2)] = new _0x3ef48d(_0x23910f);
    }
    [_0x4006c8(0x1e3)](_0x36afba) {
        const _0x1baf01 = _0x4006c8;
        return this[_0x1baf01(0x1e2)][_0x1baf01(0x1e4)](_0x36afba), this;
    }
    ['deleteEdge'](_0x50ef7a) {
        const _0x5079bb = _0x4006c8;
        this[_0x5079bb(0x1e2)][_0x5079bb(0x1e5)](_0x50ef7a);
    }
    [_0x4006c8(0x1e6)]() {
        const _0x224ead = _0x4006c8, _0x2fdf85 = this[_0x224ead(0x1e2)]['toArray'](), _0x513180 = _0x2f865c => {
                const _0x108f65 = _0x224ead;
                return _0x2f865c[_0x108f65(0x1e1)][_0x108f65(0x1e7)] === this ? _0x2f865c[_0x108f65(0x1e1)]['endVertex'] : _0x2f865c['value'][_0x108f65(0x1e7)];
            };
        return _0x2fdf85['map'](_0x513180);
    }
    [_0x4006c8(0x1e8)]() {
        const _0x49a533 = _0x4006c8;
        return this['edges'][_0x49a533(0x1e9)]()[_0x49a533(0x1ea)](_0x1940c0 => _0x1940c0[_0x49a533(0x1e1)]);
    }
    [_0x4006c8(0x1eb)]() {
        const _0x2f2213 = _0x4006c8;
        return this[_0x2f2213(0x1e2)]['toArray']()['length'];
    }
    [_0x4006c8(0x1ec)](_0x1af340) {
        const _0x31a3cc = _0x4006c8, _0x3dd112 = this[_0x31a3cc(0x1e2)][_0x31a3cc(0x1ed)]({ 'callback': _0x294b06 => _0x294b06 === _0x1af340 });
        return !!_0x3dd112;
    }
    [_0x4006c8(0x1ee)](_0x3d6bcf) {
        const _0x46c1bb = _0x4006c8, _0x542b3e = this['edges'][_0x46c1bb(0x1ed)]({ 'callback': _0x2e6908 => _0x2e6908[_0x46c1bb(0x1e7)] === _0x3d6bcf || _0x2e6908['endVertex'] === _0x3d6bcf });
        return !!_0x542b3e;
    }
    [_0x4006c8(0x1ef)](_0x4c12ed) {
        const _0xe7c0a6 = _0x4006c8, _0x3cc31d = _0x770b09 => {
                return _0x770b09['startVertex'] === _0x4c12ed || _0x770b09['endVertex'] === _0x4c12ed;
            }, _0x32d344 = this[_0xe7c0a6(0x1e2)][_0xe7c0a6(0x1ed)]({ 'callback': _0x3cc31d });
        return _0x32d344 ? _0x32d344[_0xe7c0a6(0x1e1)] : null;
    }
    [_0x4006c8(0x1e0)]() {
        const _0x4113d5 = _0x4006c8;
        return this[_0x4113d5(0x1e1)];
    }
    ['deleteAllEdges']() {
        const _0x285d29 = _0x4006c8;
        return this[_0x285d29(0x1e8)]()[_0x285d29(0x1f0)](_0x29722f => this[_0x285d29(0x1f1)](_0x29722f)), this;
    }
    [_0x4006c8(0x1f2)](_0x420129) {
        const _0x9a739c = _0x4006c8;
        return _0x420129 ? _0x420129(this['value']) : '' + this[_0x9a739c(0x1e1)];
    }
}
