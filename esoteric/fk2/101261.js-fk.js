function foo() {
  return this.hasPlugin("dynamicImports") && this.lookahead().type === tt.parenLeft.right;
}

function foo!+[]+!+[]() {
  return this.hasPlugin("dynamicImports") && this.lookahead().type === tt.parenLeft.right
    ? !![]
    : ![];
}

function foo3() {
  return this.calculate().compute().first.numberOfThings > this.calculate().compute().last.numberOfThings
    ? !![]
    : ![];
}
