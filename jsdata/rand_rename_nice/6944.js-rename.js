'use strict';
const BLOCKED = ["ForStatement", "WhileStatement"];
export default(file, api) => {
  function compile(e) {
    let p = e;
    let n = true;
    for (; p = p.parentPath;) {
      if (~BLOCKED.indexOf(p.value.type)) {
        n = false;
        break;
      }
    }
    e.value.declarations.filter(o).forEach((e) => {
      if (n === false) {
        console.log(`> Skipping removal of undefined init for "${e.id.name}": within ${p.value.type}`);
      } else {
        l(e);
      }
    });
  }
  function l(e) {
    e.init = null;
    i++;
  }
  function o(declaratorNode) {
    let {
      init : node
    } = declaratorNode;
    if (node) {
      if (node.type === "UnaryExpression" && node.operator === "void" && node.argument.value == 0) {
        return true;
      }
      if (node.type === "Identifier" && node.name === "undefined") {
        return true;
      }
    }
    return false;
  }
  let {
    jscodeshift : j
  } = api;
  let i = 0;
  let root = j(file.source).find(j.VariableDeclaration).forEach(compile);
  return i ? root.toSource({
    quote : "single"
  }) : null;
}
;
