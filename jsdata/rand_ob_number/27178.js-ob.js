export default function transformer(_0x30a521) {
    return _0x30a521['source']['replace'](/(theme\.breakpoints|breakpoints)\.width\(['"](.*)['"]\)/gm, '$1.values.$2');
}
