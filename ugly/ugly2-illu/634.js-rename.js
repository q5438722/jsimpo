function treeEqual(e, r) {
  if (!e && !r) {
    return true;
  }if (!e || !r) {
    return false;
  }return e.val == r.val && treeEqual(e.left, r.left) && treeEqual(e.right, r.right);
}