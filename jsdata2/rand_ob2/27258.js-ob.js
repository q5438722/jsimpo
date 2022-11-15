const _0x50e5 = [
    '95129SuCFGL',
    '753702iOPXxh',
    '378403itVOVI',
    '3WXAcIy',
    '273926DFzjMX',
    '105291pNiQUt',
    'jscodeshift',
    'source',
    'printOptions',
    'TextareaAutosize',
    'minRows',
    'maxRows',
    'toSource',
    '1034891OZWVdM',
    '774997jrJylW',
    '4dVRpvF'
];
(function (_0x1db388, _0x117ec7) {
    const _0x14e158 = _0x5acb;
    while (!![]) {
        try {
            const _0x2a6693 = parseInt(_0x14e158(0xf7)) + parseInt(_0x14e158(0xf8)) + parseInt(_0x14e158(0xf9)) * parseInt(_0x14e158(0xfa)) + -parseInt(_0x14e158(0xfb)) + -parseInt(_0x14e158(0xfc)) * parseInt(_0x14e158(0xfd)) + parseInt(_0x14e158(0xfe)) + parseInt(_0x14e158(0xff));
            if (_0x2a6693 === _0x117ec7)
                break;
            else
                _0x1db388['push'](_0x1db388['shift']());
        } catch (_0x2813a2) {
            _0x1db388['push'](_0x1db388['shift']());
        }
    }
}(_0x50e5, 0xa6306));
function _0x5acb(_0x40f411, _0xc39ae9) {
    return _0x5acb = function (_0x50e56c, _0x5acb33) {
        _0x50e56c = _0x50e56c - 0xf7;
        let _0x26b7c0 = _0x50e5[_0x50e56c];
        return _0x26b7c0;
    }, _0x5acb(_0x40f411, _0xc39ae9);
}
import _0x184fc3 from '../util/renameProps';
export default function transformer(_0x559a3e, _0x14c8da, _0x4592d4) {
    const _0x13148a = _0x5acb, _0x2df18a = _0x14c8da[_0x13148a(0x100)], _0x4faff0 = _0x2df18a(_0x559a3e[_0x13148a(0x101)]), _0x4343bb = _0x4592d4[_0x13148a(0x102)];
    return _0x184fc3({
        'root': _0x4faff0,
        'componentName': _0x13148a(0x103),
        'props': {
            'rows': 'minRows',
            'rowsMin': _0x13148a(0x104),
            'rowsMax': _0x13148a(0x105)
        }
    }), _0x184fc3({
        'root': _0x4faff0,
        'componentName': 'TextField',
        'props': {
            'rowsMin': 'minRows',
            'rowsMax': _0x13148a(0x105)
        }
    }), _0x4faff0[_0x13148a(0x106)](_0x4343bb);
}
