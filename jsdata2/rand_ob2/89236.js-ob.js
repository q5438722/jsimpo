const _0x5624 = [
    'showErrorBox',
    '278775ttEXiU',
    '1Qzccvj',
    '106324BtKIGX',
    '1fWNQUu',
    '94082WmvWVg',
    '1PHdKpC',
    '5ozNkyn',
    '29226SXsMtm',
    '23689CaldSl',
    '13yVNtix',
    '3967RZHWwj',
    '25GBdSNm',
    '75891mQeRnL',
    '2fNFkua',
    'options',
    'setup',
    'dev',
    'uncaughtException',
    'error'
];
(function (_0x541b38, _0x5755a3) {
    const _0x406e4e = _0x1f9d;
    while (!![]) {
        try {
            const _0x4458f9 = parseInt(_0x406e4e(0x1ec)) * parseInt(_0x406e4e(0x1ed)) + -parseInt(_0x406e4e(0x1ee)) * parseInt(_0x406e4e(0x1ef)) + parseInt(_0x406e4e(0x1f0)) * -parseInt(_0x406e4e(0x1f1)) + parseInt(_0x406e4e(0x1f2)) * -parseInt(_0x406e4e(0x1f3)) + parseInt(_0x406e4e(0x1f4)) * parseInt(_0x406e4e(0x1f5)) + -parseInt(_0x406e4e(0x1f6)) * -parseInt(_0x406e4e(0x1f7)) + -parseInt(_0x406e4e(0x1f8)) * parseInt(_0x406e4e(0x1f9));
            if (_0x4458f9 === _0x5755a3)
                break;
            else
                _0x541b38['push'](_0x541b38['shift']());
        } catch (_0x49f06b) {
            _0x541b38['push'](_0x541b38['shift']());
        }
    }
}(_0x5624, 0x2dcc5));
import {
    app,
    dialog
} from 'electron';
import _0x3d4716 from 'electron-is';
function _0x1f9d(_0x22f29e, _0x48762a) {
    return _0x1f9d = function (_0x56243c, _0x1f9d6a) {
        _0x56243c = _0x56243c - 0x1ec;
        let _0x580a9d = _0x5624[_0x56243c];
        return _0x580a9d;
    }, _0x1f9d(_0x22f29e, _0x48762a);
}
import _0x329902 from './Logger';
const defaults = { 'showDialog': !_0x3d4716['dev']() };
export default class ExceptionHandler {
    constructor(_0x12c10a) {
        const _0x2fde7d = _0x1f9d;
        this[_0x2fde7d(0x1fa)] = {
            ...defaults,
            ..._0x12c10a
        }, this[_0x2fde7d(0x1fb)]();
    }
    ['setup']() {
        const _0x54d7be = _0x1f9d;
        if (_0x3d4716[_0x54d7be(0x1fc)]())
            return;
        const {showDialog: _0x246129} = this['options'];
        process['on'](_0x54d7be(0x1fd), _0x3ca790 => {
            const _0x5d602a = _0x54d7be, {
                    message: _0x8a5c06,
                    stack: _0x443f68
                } = _0x3ca790;
            _0x329902[_0x5d602a(0x1fe)]('[Motrix]\x20Uncaught\x20exception:\x20' + _0x8a5c06), _0x329902[_0x5d602a(0x1fe)](_0x443f68), _0x246129 && app['isReady']() && dialog[_0x5d602a(0x1ff)]('Error:\x20', _0x8a5c06);
        });
    }
}
