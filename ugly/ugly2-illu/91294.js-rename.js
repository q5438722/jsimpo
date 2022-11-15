import * as t from "@babel/types";export default function isDefaultExport(e) {
  if (!e || !t.isMemberExpression(e)) {
    return false;
  }var { object: r, property: i } = e;
  if (!t.isIdentifier(r) || r.name !== `module`) return false;if (!t.isIdentifier(i) || i.name !== `exports`) return false;return true;
}
