import { unstable_capitalize as _0xeaa02e } from '@material-ui/utils';
function isEmpty(_0x4f1f51) {
    return _0x4f1f51['length'] === 0x928 * -0x2 + -0xa * 0x46 + 0x150c;
}
export default function propsToClassKey(_0x5f2df5) {
    const {
        variant: _0x516867,
        ..._0x17115e
    } = _0x5f2df5;
    let _0x347366 = _0x516867 || '';
    return Object['keys'](_0x17115e)['sort']()['forEach'](_0x4a4af3 => {
        _0x4a4af3 === 'color' ? _0x347366 += isEmpty(_0x347366) ? _0x5f2df5[_0x4a4af3] : _0xeaa02e(_0x5f2df5[_0x4a4af3]) : _0x347366 += '' + (isEmpty(_0x347366) ? _0x4a4af3 : _0xeaa02e(_0x4a4af3)) + _0xeaa02e(_0x5f2df5[_0x4a4af3]['toString']());
    }), _0x347366;
}
