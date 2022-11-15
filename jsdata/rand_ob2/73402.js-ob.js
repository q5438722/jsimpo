const _0xd49f = [
    '153aiRBol',
    '8853kWNNee',
    '1197557SDdlEj',
    '2iiAHRd',
    '750009dpUTGW',
    '85159jdYebu',
    '2aJzOHc',
    '1RKbmUE',
    '4740929IrCpbe',
    'length',
    'showCert',
    '4DVGtyN',
    '39482CTmrAH',
    '1436147lNHDKC'
];
(function (_0x35cfa3, _0x3311cd) {
    const _0xdaa5a3 = _0x5d9e;
    while (!![]) {
        try {
            const _0x48709d = -parseInt(_0xdaa5a3(0x193)) * parseInt(_0xdaa5a3(0x194)) + parseInt(_0xdaa5a3(0x195)) + -parseInt(_0xdaa5a3(0x196)) * -parseInt(_0xdaa5a3(0x197)) + parseInt(_0xdaa5a3(0x198)) + -parseInt(_0xdaa5a3(0x199)) * -parseInt(_0xdaa5a3(0x19a)) + -parseInt(_0xdaa5a3(0x19b)) * -parseInt(_0xdaa5a3(0x19c)) + parseInt(_0xdaa5a3(0x19d)) * -parseInt(_0xdaa5a3(0x19e));
            if (_0x48709d === _0x3311cd)
                break;
            else
                _0x35cfa3['push'](_0x35cfa3['shift']());
        } catch (_0x5e5318) {
            _0x35cfa3['push'](_0x35cfa3['shift']());
        }
    }
}(_0xd49f, 0xb978c));
import { navigate } from 'gatsby';
import {
    put,
    takeEvery,
    call
} from 'redux-saga/effects';
import { createFlashMessage } from '../components/Flash/redux';
function _0x5d9e(_0x2327d5, _0x3ddcb0) {
    return _0x5d9e = function (_0xd49fde, _0x5d9e1b) {
        _0xd49fde = _0xd49fde - 0x193;
        let _0x39dfa6 = _0xd49f[_0xd49fde];
        return _0x39dfa6;
    }, _0x5d9e(_0x2327d5, _0x3ddcb0);
}
import { getShowCert } from '../utils/ajax';
import {
    showCertComplete,
    showCertError
} from '.';
function* getShowCertSaga({
    payload: {
        username: _0x4cc965,
        certSlug: _0x4d1715
    }
}) {
    const _0x24a22c = _0x5d9e;
    try {
        const _0x588114 = yield call(getShowCert, _0x4cc965, _0x4d1715), {messages: _0xe0f563} = _0x588114;
        if (_0xe0f563 && _0xe0f563[_0x24a22c(0x19f)]) {
            for (let _0x1ed38a = 0x0; _0x1ed38a < _0xe0f563['length']; _0x1ed38a++) {
                yield put(createFlashMessage(_0xe0f563[_0x1ed38a]));
            }
            yield call(navigate, '/');
            return;
        }
        yield put(showCertComplete(_0x588114));
    } catch (_0x4d56c0) {
        yield put(showCertError(_0x4d56c0));
    }
}
export function createShowCertSaga(_0x35c651) {
    const _0xcf6f08 = _0x5d9e;
    return [takeEvery(_0x35c651[_0xcf6f08(0x1a0)], getShowCertSaga)];
}
