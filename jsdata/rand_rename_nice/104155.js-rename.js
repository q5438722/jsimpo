'use strict';
function hasPragma(localeISOString) {
  return /^\s*#[^\S\n]*@(format|prettier)\s*(\n|$)/.test(localeISOString);
}
function insertPragma(canCreateDiscussions) {
  return "# @format\n\n" + canCreateDiscussions;
}
module.exports = {
  hasPragma : hasPragma,
  insertPragma : insertPragma
};

