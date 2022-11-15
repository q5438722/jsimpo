import {
    app,
    dialog
} from 'electron';
import _0x1fe2bb from 'electron-is';
import _0x347532 from './Logger';
const defaults = { 'showDialog': !_0x1fe2bb['dev']() };
export default class ExceptionHandler {
    constructor(_0x2302d3) {
        this['options'] = {
            ...defaults,
            ..._0x2302d3
        }, this['setup']();
    }
    ['setup']() {
        if (_0x1fe2bb['dev']())
            return;
        const {showDialog: _0x16ee07} = this['options'];
        process['on']('uncaughtException', _0x74cd9b => {
            const {
                message: _0x24875c,
                stack: _0x5d7695
            } = _0x74cd9b;
            _0x347532['error']('[Motrix]\x20Uncaught\x20exception:\x20' + _0x24875c), _0x347532['error'](_0x5d7695), _0x16ee07 && app['isReady']() && dialog['showErrorBox']('Error:\x20', _0x24875c);
        });
    }
}
