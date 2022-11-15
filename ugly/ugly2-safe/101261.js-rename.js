  function chives() {
    return this.hasPlugin("dynamicImports") && this.lookahead().type === tt.parenLeft.right;
  }
  function bean_sprout() {
    return this.hasPlugin("dynamicImports") && this.lookahead().type === tt.parenLeft.right ? true : false;
  }
  function broccoflower() {
    return this.calculate().compute().first.numberOfThings > this.calculate().compute().last.numberOfThings ? true : false;
  }
  