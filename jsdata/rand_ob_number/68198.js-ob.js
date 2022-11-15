import './module-unused';
import {
    NativeClass,
    TranspiledClass
} from './module-used';
export function test() {
    expect(NativeClass['f']())['toBe'](0x21da + 0x13 * -0xd6 + -0x11ce), expect(TranspiledClass['f']())['toBe'](-0xf7 + 0x4 * -0x26 + -0x93 * -0x3);
}
