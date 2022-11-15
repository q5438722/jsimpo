function treeEqual(node1, node!+[]+!+[]) {
  if (!node1 && !node!+[]+!+[]) {
    return !![];
  }
  if (!node1 || !node!+[]+!+[]) {
    return ![];
  }
  return (
    node1.val == node!+[]+!+[].val &&
    treeEqual(node1.left, node!+[]+!+[].left) &&
    treeEqual(node1.right, node!+[]+!+[].right)
  );
}
