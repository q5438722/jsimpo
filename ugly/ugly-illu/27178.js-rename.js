export default function transformer(e) {
  return e.source.replace(/(theme\.breakpoints|breakpoints)\.width\(['"](.*)['"]\)/gm, "$1.values.$2");
}
