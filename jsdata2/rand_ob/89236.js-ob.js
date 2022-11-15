const _0x4c10 = [
    '8uuqaRW',
    '15277HRzqAI',
    '1279uxeiGI',
    '135181kRwRim',
    '1vFvnJI',
    '27wwjAkP',
    '15NOAsdN',
    '301882ljddFJ',
    '1hDHcUr',
    '179719koMxwj',
    'dev',
    'options',
    'setup',
    'uncaughtException',
    'error',
    '[Motrix]\x20Uncaught\x20exception:\x20',
    'isReady',
    'showErrorBox',
    'Error:\x20',
    '265585qsLwXW'
];
const _0x4c9e11 = _0x3a78;
function _0x3a78(_0x551a9f, _0x312a39) {
    return _0x3a78 = function (_0x210ba8, _0x366d60) {
        _0x210ba8 = _0x210ba8 - (0x9 * 0x33e + -0x63c + -0x1 * 0x15b5);
        let _0x1a94a8 = _0x4c10[_0x210ba8];
        return _0x1a94a8;
    }, _0x3a78(_0x551a9f, _0x312a39);
}
(function (_0x249028, _0x3c4bf3) {
    const _0x30a429 = _0x3a78;
    while (!![]) {
        try {
            const _0x14e35a = -parseInt(_0x30a429(0x13d)) + parseInt(_0x30a429(0x13e)) * -parseInt(_0x30a429(0x13f)) + parseInt(_0x30a429(0x140)) + -parseInt(_0x30a429(0x141)) * -parseInt(_0x30a429(0x142)) + -parseInt(_0x30a429(0x143)) * -parseInt(_0x30a429(0x144)) + parseInt(_0x30a429(0x145)) * parseInt(_0x30a429(0x146)) + parseInt(_0x30a429(0x147));
            if (_0x14e35a === _0x3c4bf3)
                break;
            else
                _0x249028['push'](_0x249028['shift']());
        } catch (_0xca2271) {
            _0x249028['push'](_0x249028['shift']());
        }
    }
}(_0x4c10, -0x4015f + 0x2 * 0x1457f + 0x2 * 0x27db5));
import {
    app,
    dialog
} from 'electron';
import _0x181c25 from 'electron-is';
import _0x5a0d3c from './Logger';
const defaults = { 'showDialog': !_0x181c25[_0x4c9e11(0x148)]() };
export default class ExceptionHandler {
    constructor(_0x1b439b) {
        const _0x245165 = _0x4c9e11;
        this[_0x245165(0x149)] = {
            ...defaults,
            ..._0x1b439b
        }, this[_0x245165(0x14a)]();
    }
    [_0x4c9e11(0x14a)]() {
        const _0x7ee679 = _0x4c9e11, _0x16a502 = { 'PSkUa': _0x7ee679(0x14b) };
        if (_0x181c25[_0x7ee679(0x148)]())
            return;
        const {showDialog: _0x575218} = this[_0x7ee679(0x149)];
        process['on'](_0x16a502['PSkUa'], _0x45bc08 => {
            const _0x366da3 = _0x7ee679, {
                    message: _0x3a613b,
                    stack: _0x413cb9
                } = _0x45bc08;
            _0x5a0d3c[_0x366da3(0x14c)](_0x366da3(0x14d) + _0x3a613b), _0x5a0d3c[_0x366da3(0x14c)](_0x413cb9), _0x575218 && app[_0x366da3(0x14e)]() && dialog[_0x366da3(0x14f)](_0x366da3(0x150), _0x3a613b);
        });
    }
}
