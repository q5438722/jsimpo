const _0x203e = ['271487QKSquW', '177987LbSbdO', '1AobjAN', '1249159zsklwE', 'type', 'username', '317437LCbkMj', '214867HvCssY', '1AfBaBl', '286162RFRMpg', '241725blPvNO'];

(function (_0x4590ae, _0x5f0d82) {
    const _0x14644e = _0x554c;

    while (true) {
        try {
            const _0x549f20 = -parseInt(_0x14644e(0x175)) + -parseInt(_0x14644e(0x176)) * -parseInt(_0x14644e(0x177)) + -parseInt(_0x14644e(0x178)) + -parseInt(_0x14644e(0x179)) + -parseInt(_0x14644e(0x17a)) + -parseInt(_0x14644e(0x17b)) + -parseInt(_0x14644e(0x17c)) * -parseInt(_0x14644e(0x17d));

            if (_0x549f20 === _0x5f0d82) break;else _0x4590ae.push(_0x4590ae.shift());
        } catch (_0x532cd4) {
            _0x4590ae.push(_0x4590ae.shift());
        }
    }
})(_0x203e, 169228);
import _0x401229 from 'immer';
import { CHANGE_USERNAME } from './constants';
export const initialState = { 'username': '' };
function _0x554c(_0xf42ad3, _0x312255) {
    return _0x554c = function (_0x27fc70, _0x35f49d) {
        _0x27fc70 = _0x27fc70 - 373;
        const _0x54514e = _0x203e[_0x27fc70];

        return _0x54514e;
    }, _0x554c(_0xf42ad3, _0x312255);
}

const homeReducer = (_0xcce77a = initialState, _0x574f1e) => _0x401229(_0xcce77a, _0x288c8d => {
    const _0x2640b3 = _0x554c;

    switch (_0x574f1e[_0x2640b3(0x17e)]) {
        case CHANGE_USERNAME:
            _0x288c8d[_0x2640b3(0x17f)] = _0x574f1e[_0x2640b3(0x17f)].replace(/@/gi, '');
            break;
    }
});

export default homeReducer;
