'use strict';
function hasPragma(token) {
  return /^\s*#[^\S\n]*@(format|prettier)\s*(\n|$)/["test"](token);
}
function insertPragma(canCreateDiscussions) {
  return _0x5c8011["ZNHsc"] + canCreateDiscussions;
}
module["exports"] = {
  "hasPragma" : hasPragma,
  "insertPragma" : insertPragma
};

