const _0x1e8b = ['10979IESZRJ', '26DvXnek', '461562ROdcbF', '668191DFfUVh', '1xXPsCo', '540475nzHhVD', '2012773CrkPuv', 'HQiyj', 'length', 'xQWbC', 'showCert', '5tccfpk', '205175xzQSIG', '644951WSxcrP'];

(function (_0x4d100f, _0x27903b) {
    const _0x464fd2 = _0xdad9;

    while (true) {
        try {
            const _0x1322fd = parseInt(_0x464fd2(0xa9)) * -parseInt(_0x464fd2(0xaa)) + parseInt(_0x464fd2(0xab)) + parseInt(_0x464fd2(0xac)) * -parseInt(_0x464fd2(0xad)) + parseInt(_0x464fd2(0xae)) + parseInt(_0x464fd2(0xaf)) * -parseInt(_0x464fd2(0xb0)) + -parseInt(_0x464fd2(0xb1)) + parseInt(_0x464fd2(0xb2));

            if (_0x1322fd === _0x27903b) break;else _0x4d100f.push(_0x4d100f.shift());
        } catch (_0x41c640) {
            _0x4d100f.push(_0x4d100f.shift());
        }
    }
})(_0x1e8b, 599291);
import { navigate } from 'gatsby';
import { put, takeEvery, call } from 'redux-saga/effects';
import { createFlashMessage } from '../components/Flash/redux';
import { getShowCert } from '../utils/ajax';
import { showCertComplete, showCertError } from '.';
function _0xdad9(_0x23377e, _0x31b6fc) {
    return _0xdad9 = function (_0x2798f7, _0x332bf2) {
        _0x2798f7 = _0x2798f7 - 169;
        const _0x1d6f29 = _0x1e8b[_0x2798f7];

        return _0x1d6f29;
    }, _0xdad9(_0x23377e, _0x31b6fc);
}
function* getShowCertSaga({
    payload: {
        username: _0x4d6e4f,
        certSlug: _0x4caeee
    }
}) {
    const _0x48c507 = _0xdad9;
    const _0x4b5aae = {
        'HQiyj': function (_0x9e0791, _0xf661f3, _0x55b59d, _0x2d717a) {
            return _0x9e0791(_0xf661f3, _0x55b59d, _0x2d717a);
        },
        'BUjFc': function (_0x292666, _0x5625c3) {
            return _0x292666 < _0x5625c3;
        },
        'xQWbC': function (_0x133ad5, _0x8bd99e) {
            return _0x133ad5(_0x8bd99e);
        },
        'REOwo': function (_0x279f16, _0x512c91, _0x392133) {
            return _0x279f16(_0x512c91, _0x392133);
        }
    };

    try {
        const _0x2c991c = yield _0x4b5aae[_0x48c507(0xb3)](call, getShowCert, _0x4d6e4f, _0x4caeee);

        var { messages: _0x5812f6 } = _0x2c991c;

        if (_0x5812f6 && _0x5812f6.length) {
            for (let _0x16f5c1 = 0; _0x4b5aae.BUjFc(_0x16f5c1, _0x5812f6[_0x48c507(0xb4)]); _0x16f5c1++) {
                yield _0x4b5aae[_0x48c507(0xb5)](put, _0x4b5aae[_0x48c507(0xb5)](createFlashMessage, _0x5812f6[_0x16f5c1]));
            }
            yield _0x4b5aae.REOwo(call, navigate, '/');
            return;
        }
        yield put(_0x4b5aae.xQWbC(showCertComplete, _0x2c991c));
    } catch (_0x587f20) {
        yield put(showCertError(_0x587f20));
    }
}
export function createShowCertSaga(_0xc83475) {
    const _0x1e73b6 = _0xdad9;
    const _0x2c2647 = {
        'CAkbj': function (_0x139dc8, _0xfbbbd8, _0x490330) {
            return _0x139dc8(_0xfbbbd8, _0x490330);
        }
    };

    return [_0x2c2647.CAkbj(takeEvery, _0xc83475[_0x1e73b6(0xb6)], getShowCertSaga)];
}
