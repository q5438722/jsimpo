import { Meteor } from "meteor/meteor";Meteor.startup(() => {
  Meteor.checkMeFromShell = "oky dok";
});_ = { _specialUnderscoreTestObject: true };Meteor.methods({ "__meteor__/__self_test__/shell-tests/underscore"() {
    return typeof _ === "object" && Object.keys(_);
  } });
