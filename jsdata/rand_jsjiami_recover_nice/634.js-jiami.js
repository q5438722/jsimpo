'use strict';
function treeEqual(sinfreq, parentMenuBorders) {
  if (!sinfreq && !parentMenuBorders) {
    return !![];
  }
  if (!sinfreq || !parentMenuBorders) {
    return ![];
  }
  return sinfreq["val"] == parentMenuBorders["val"] && treeEqual(sinfreq["left"], parentMenuBorders["left"]) && treeEqual(sinfreq["right"], parentMenuBorders["right"]);
}
;
