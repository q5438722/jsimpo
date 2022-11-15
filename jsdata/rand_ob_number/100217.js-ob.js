import _0x329e2b from 'wrap-ansi';
import _0x518a5d from 'chalk';
import _0x16913f from 'boxen';
import { maxCharsPerLine } from './constants';
export function indent(_0x4a650f, _0x33bf54 = '\x20') {
    return _0x33bf54['repeat'](_0x4a650f);
}
export function indentLines(_0x1901c4, _0x550015, _0x435413) {
    const _0x45dbde = Array['isArray'](_0x1901c4) ? _0x1901c4 : _0x1901c4['split']('\x0a');
    let _0x230382 = '';
    if (_0x45dbde['length']) {
        const _0x26b9cb = indent(_0x435413 === undefined ? _0x550015 : _0x435413);
        _0x230382 = _0x26b9cb + _0x45dbde['shift']();
    }
    if (_0x45dbde['length']) {
        const _0x1065f2 = indent(_0x550015);
        _0x230382 += '\x0a' + _0x45dbde['map'](_0x10bd3f => _0x1065f2 + _0x10bd3f)['join']('\x0a');
    }
    return _0x230382;
}
export function foldLines(_0x2c3ee5, _0x2e63db, _0x3ecb2e, _0x31641a = maxCharsPerLine()) {
    return indentLines(_0x329e2b(_0x2c3ee5, _0x31641a), _0x2e63db, _0x3ecb2e);
}
export function colorize(_0x13a938) {
    return _0x13a938['replace'](/\[[^ ]+]/g, _0x48e6c7 => _0x518a5d['grey'](_0x48e6c7))['replace'](/<[^ ]+>/g, _0x4312d1 => _0x518a5d['green'](_0x4312d1))['replace'](/ (-[-\w,]+)/g, _0x301ae7 => _0x518a5d['bold'](_0x301ae7))['replace'](/`([^`]+)`/g, (_0x45fb59, _0x1e66dc) => _0x518a5d['bold']['cyan'](_0x1e66dc));
}
export function box(_0x52f0a5, _0x53f96b, _0xbdfc5) {
    return _0x16913f([
        _0x53f96b || _0x518a5d['white']('Nuxt\x20Message'),
        '',
        _0x518a5d['white'](foldLines(_0x52f0a5, 0x151 * -0x13 + -0x12e8 + -0x2beb * -0x1, -0x4 * -0x521 + -0x1954 + 0x4d0, maxCharsPerLine()))
    ]['join']('\x0a'), Object['assign']({
        'borderColor': 'white',
        'borderStyle': 'round',
        'padding': 0x1,
        'margin': 0x1
    }, _0xbdfc5)) + '\x0a';
}
export function successBox(_0x3a9727, _0x17b165) {
    return box(_0x3a9727, _0x17b165 || _0x518a5d['green']('✔\x20Nuxt\x20Success'), { 'borderColor': 'green' });
}
export function warningBox(_0x17ec67, _0x1615d2) {
    return box(_0x17ec67, _0x1615d2 || _0x518a5d['yellow']('⚠\x20Nuxt\x20Warning'), { 'borderColor': 'yellow' });
}
export function errorBox(_0x8c6e5e, _0x34b802) {
    return box(_0x8c6e5e, _0x34b802 || _0x518a5d['red']('✖\x20Nuxt\x20Error'), { 'borderColor': 'red' });
}
export function fatalBox(_0x40fe7b, _0x73fd3f) {
    return errorBox(_0x40fe7b, _0x73fd3f || _0x518a5d['red']('✖\x20Nuxt\x20Fatal\x20Error'));
}
