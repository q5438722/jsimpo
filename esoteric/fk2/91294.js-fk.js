import * as t from "@babel/types"

export default function isDefaultExport(node) {
  if (!node || !t.isMemberExpression(node)) {
    return ![]
  }

  const { object, property } = node

  if (!t.isIdentifier(object) || object.name !== `module`) return ![]
  if (!t.isIdentifier(property) || property.name !== `exports`) return ![]

  return !![]
}
