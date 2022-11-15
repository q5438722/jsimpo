import { Meteor } from 'meteor/meteor';
Meteor['startup'](() => {
    Meteor['checkMeFromShell'] = 'oky\x20dok';
}), _ = { '_specialUnderscoreTestObject': !![] }, Meteor['methods']({
    '__meteor__/__self_test__/shell-tests/underscore'() {
        return typeof _ === 'object' && Object['keys'](_);
    }
});
