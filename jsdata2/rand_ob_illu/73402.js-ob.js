const _0x2819 = ['819179mkkkpi', 'length', 'Hagft', 'gipls', 'XvkAd', 'showCert', '7816KRezXX', '14ewFTBq', '232135ZMzkrM', '6727NJcsSh', '25kzUWpI', '447FYSOCi', '150TFJDDk', '53287SKnHwZ', '204070TAbTcN'];

(function (_0x5e8c61, _0x3643ae) {
    const _0x3a1300 = _0x3836;

    while (true) {
        try {
            const _0x116d52 = parseInt(_0x3a1300(0x9c)) * -parseInt(_0x3a1300(0x9d)) + -parseInt(_0x3a1300(0x9e)) + -parseInt(_0x3a1300(0x9f)) * parseInt(_0x3a1300(0xa0)) + parseInt(_0x3a1300(0xa1)) * parseInt(_0x3a1300(0xa2)) + -parseInt(_0x3a1300(0xa3)) + -parseInt(_0x3a1300(0xa4)) + parseInt(_0x3a1300(0xa5));

            if (_0x116d52 === _0x3643ae) break;else _0x5e8c61.push(_0x5e8c61.shift());
        } catch (_0x1d33dc) {
            _0x5e8c61.push(_0x5e8c61.shift());
        }
    }
})(_0x2819, 119138);
import { navigate } from 'gatsby';
import { put, takeEvery, call } from 'redux-saga/effects';
import { createFlashMessage } from '../components/Flash/redux';
function _0x3836(_0x38020a, _0x104894) {
    return _0x3836 = function (_0x3ccd62, _0x57f1a5) {
        _0x3ccd62 = _0x3ccd62 - 156;
        const _0x231905 = _0x2819[_0x3ccd62];

        return _0x231905;
    }, _0x3836(_0x38020a, _0x104894);
}
import { getShowCert } from '../utils/ajax';
import { showCertComplete, showCertError } from '.';
function* getShowCertSaga({
    payload: {
        username: _0x356b38,
        certSlug: _0x24862b
    }
}) {
    const _0x34f4b5 = _0x3836;
    const _0x2cb909 = {
        'XcnaD': function (_0xce1b4b, _0x30c222) {
            return _0xce1b4b < _0x30c222;
        },
        'Hagft': function (_0x586562, _0x1c13cd) {
            return _0x586562(_0x1c13cd);
        },
        'gipls': function (_0x370c33, _0x2b80c5, _0x407114) {
            return _0x370c33(_0x2b80c5, _0x407114);
        },
        'XvkAd': function (_0x3207f1, _0x2c884e) {
            return _0x3207f1(_0x2c884e);
        },
        'dAFPH': function (_0x44d6b6, _0x3e860c) {
            return _0x44d6b6(_0x3e860c);
        }
    };

    try {
        const _0x33c2e8 = yield call(getShowCert, _0x356b38, _0x24862b);

        var { messages: _0x242b92 } = _0x33c2e8;

        if (_0x242b92 && _0x242b92[_0x34f4b5(0xa6)]) {
            for (let _0x43c815 = 0; _0x2cb909.XcnaD(_0x43c815, _0x242b92[_0x34f4b5(0xa6)]); _0x43c815++) {
                yield _0x2cb909[_0x34f4b5(0xa7)](put, createFlashMessage(_0x242b92[_0x43c815]));
            }
            yield _0x2cb909[_0x34f4b5(0xa8)](call, navigate, '/');
            return;
        }
        yield _0x2cb909[_0x34f4b5(0xa7)](put, _0x2cb909[_0x34f4b5(0xa9)](showCertComplete, _0x33c2e8));
    } catch (_0x3cf8e0) {
        yield _0x2cb909[_0x34f4b5(0xa9)](put, _0x2cb909.dAFPH(showCertError, _0x3cf8e0));
    }
}
export function createShowCertSaga(_0x1a6617) {
    const _0x1e23ad = _0x3836;

    return [takeEvery(_0x1a6617[_0x1e23ad(0xaa)], getShowCertSaga)];
}
