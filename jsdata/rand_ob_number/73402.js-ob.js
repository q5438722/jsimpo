import { navigate } from 'gatsby';
import {
    put,
    takeEvery,
    call
} from 'redux-saga/effects';
import { createFlashMessage } from '../components/Flash/redux';
import { getShowCert } from '../utils/ajax';
import {
    showCertComplete,
    showCertError
} from '.';
function* getShowCertSaga({
    payload: {
        username: _0x411613,
        certSlug: _0x2210e3
    }
}) {
    try {
        const _0x1d80f4 = yield call(getShowCert, _0x411613, _0x2210e3), {messages: _0x2fc602} = _0x1d80f4;
        if (_0x2fc602 && _0x2fc602['length']) {
            for (let _0x56f7ee = 0x73d + -0x16d0 + 0xf93; _0x56f7ee < _0x2fc602['length']; _0x56f7ee++) {
                yield put(createFlashMessage(_0x2fc602[_0x56f7ee]));
            }
            yield call(navigate, '/');
            return;
        }
        yield put(showCertComplete(_0x1d80f4));
    } catch (_0x371e2a) {
        yield put(showCertError(_0x371e2a));
    }
}
export function createShowCertSaga(_0x9a701f) {
    return [takeEvery(_0x9a701f['showCert'], getShowCertSaga)];
}
