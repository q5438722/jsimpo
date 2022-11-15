'use strict';
function treeEqual(option, props) {
  if (!option && !props) {
    return true;
  }
  if (!option || !props) {
    return false;
  }
  return option.val == props.val && treeEqual(option.left, props.left) && treeEqual(option.right, props.right);
}
;
