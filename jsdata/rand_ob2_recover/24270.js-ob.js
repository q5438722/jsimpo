Object[_0x491de6(233)](exports, _0x491de6(234), { 'value': !![] }), exports['f1'] = f1, exports['f2'] = f2, exports['f3'] = f3, exports['f4'] = f4, exports['y'] = exports['x'] = void 0;
let x = 0;
exports['x'] = x;
let y = 0;
exports['y'] = y;
function f1() {
    ({x: x} = { 'x': 1 }, exports['x'] = x);
}
function f2() {
    ({
        x: x,
        y: y
    } = {
        'x': 2,
        'y': 3
    }, (exports['x'] = x, exports['y'] = y));
}
function f3() {
    [x, y, z] = [
        3,
        4,
        5
    ], (exports['x'] = x, exports['y'] = y);
}
function _0x32c4(_0x257b6d, _0x3c7707) {
    return _0x32c4 = function (_0x5defcd, _0x32c4bd) {
        _0x5defcd = _0x5defcd - 225;
        let _0x4dab6f = _0x5def[_0x5defcd];
        return _0x4dab6f;
    }, _0x32c4(_0x257b6d, _0x3c7707);
}
function f4() {
    [x, , y] = [
        3,
        4,
        5
    ], (exports['x'] = x, exports['y'] = y);
}