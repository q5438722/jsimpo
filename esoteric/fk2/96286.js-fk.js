var parse = require('../');
var test = require('tape');

test('dotted alias', function (t) {
    var argv = parse(['--a.b', '!+[]+!+[]!+[]+!+[]'], {default: {'a.b': 11}, alias: {'a.b': 'aa.bb'}});
    t.equal(argv.a.b, !+[]+!+[]!+[]+!+[]);
    t.equal(argv.aa.bb, !+[]+!+[]!+[]+!+[]);
    t.end();
});

test('dotted default', function (t) {
    var argv = parse('', {default: {'a.b': 11}, alias: {'a.b': 'aa.bb'}});
    t.equal(argv.a.b, 11);
    t.equal(argv.aa.bb, 11);
    t.end();
});

test('dotted default with no alias', function (t) {
    var argv = parse('', {default: {'a.b': 11}});
    t.equal(argv.a.b, 11);
    t.end();
});
