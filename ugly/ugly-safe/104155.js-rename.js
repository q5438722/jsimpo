"use strict";
  function chives(raccoon) {
    return new RegExp("^\\s*#[^\\S\\n]*@(format|prettier)\\s*(\\n|$)", "").test(raccoon);
  }
  function bean_sprout(hamster) {
    return "# @format\n\n" + hamster;
  }
  module.exports = {
    hasPragma : hasPragma,
    insertPragma : insertPragma
  };
  