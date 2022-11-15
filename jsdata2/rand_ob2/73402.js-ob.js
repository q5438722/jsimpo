const _0x82cd = [
    '216271DDtDKP',
    '600807TLaSgT',
    '608662kUGcbE',
    '3591391MbYcku',
    '1lfufkA',
    'length',
    'showCert',
    '4deahLs',
    '113888DFbfFr',
    '594062DnyzQe',
    '43695yklQHp',
    '17VqUDiu',
    '1oeWjhR'
];
(function (_0x1498d0, _0x1a7bc5) {
    const _0x24bb57 = _0x49b5;
    while (!![]) {
        try {
            const _0x385bb0 = -parseInt(_0x24bb57(0x191)) * parseInt(_0x24bb57(0x192)) + -parseInt(_0x24bb57(0x193)) + parseInt(_0x24bb57(0x194)) * -parseInt(_0x24bb57(0x195)) + -parseInt(_0x24bb57(0x196)) * parseInt(_0x24bb57(0x197)) + -parseInt(_0x24bb57(0x198)) + -parseInt(_0x24bb57(0x199)) + -parseInt(_0x24bb57(0x19a)) * -parseInt(_0x24bb57(0x19b));
            if (_0x385bb0 === _0x1a7bc5)
                break;
            else
                _0x1498d0['push'](_0x1498d0['shift']());
        } catch (_0x7bd5c7) {
            _0x1498d0['push'](_0x1498d0['shift']());
        }
    }
}(_0x82cd, 0x5b1e6));
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
function _0x49b5(_0x221ea7, _0x362f36) {
    return _0x49b5 = function (_0x82cdf3, _0x49b590) {
        _0x82cdf3 = _0x82cdf3 - 0x191;
        let _0x21150c = _0x82cd[_0x82cdf3];
        return _0x21150c;
    }, _0x49b5(_0x221ea7, _0x362f36);
}
function* getShowCertSaga({
    payload: {
        username: _0x56d93d,
        certSlug: _0x4e09cd
    }
}) {
    const _0xdc78c0 = _0x49b5;
    try {
        const _0x53b11b = yield call(getShowCert, _0x56d93d, _0x4e09cd), {messages: _0x3f8833} = _0x53b11b;
        if (_0x3f8833 && _0x3f8833[_0xdc78c0(0x19c)]) {
            for (let _0x191a6c = 0x0; _0x191a6c < _0x3f8833['length']; _0x191a6c++) {
                yield put(createFlashMessage(_0x3f8833[_0x191a6c]));
            }
            yield call(navigate, '/');
            return;
        }
        yield put(showCertComplete(_0x53b11b));
    } catch (_0x1cec5f) {
        yield put(showCertError(_0x1cec5f));
    }
}
export function createShowCertSaga(_0x39cc18) {
    const _0x4d904a = _0x49b5;
    return [takeEvery(_0x39cc18[_0x4d904a(0x19d)], getShowCertSaga)];
}
