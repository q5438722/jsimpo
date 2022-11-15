import _0x298b6f from '../Sort';
export default class BubbleSort extends _0x298b6f {
    ['sort'](_0x196b53) {
        const _0x1aefa8 = {
            'wsrsk': function (_0x45b52c, _0x48e3db) {
                return _0x45b52c < _0x48e3db;
            },
            'XsIjm': function (_0x4f64d6, _0x52ac48) {
                return _0x4f64d6 - _0x52ac48;
            },
            'NBHBK': function (_0x51339d, _0x221c5a) {
                return _0x51339d + _0x221c5a;
            }
        };
        let _0x4baa0f = ![];
        const _0x57c421 = [..._0x196b53];
        for (let _0x4822d1 = 0x1; _0x1aefa8['wsrsk'](_0x4822d1, _0x57c421['length']); _0x4822d1 += 0x1) {
            _0x4baa0f = ![], this['callbacks']['visitingCallback'](_0x57c421[_0x4822d1]);
            for (let _0x586cff = 0x0; _0x1aefa8['wsrsk'](_0x586cff, _0x1aefa8['XsIjm'](_0x57c421['length'], _0x4822d1)); _0x586cff += 0x1) {
                this['callbacks']['visitingCallback'](_0x57c421[_0x586cff]), this['comparator']['lessThan'](_0x57c421[_0x1aefa8['NBHBK'](_0x586cff, 0x1)], _0x57c421[_0x586cff]) && ([_0x57c421[_0x586cff], _0x57c421[_0x1aefa8['NBHBK'](_0x586cff, 0x1)]] = [
                    _0x57c421[_0x1aefa8['NBHBK'](_0x586cff, 0x1)],
                    _0x57c421[_0x586cff]
                ], _0x4baa0f = !![]);
            }
            if (!_0x4baa0f)
                return _0x57c421;
        }
        return _0x57c421;
    }
}
