'use strict';
export default function renderRawTemplate(template) {
  return template.source.replace(/(theme\.breakpoints|breakpoints)\.width\(['"](.*)['"]\)/gm, "$1.values.$2");
}
;
