var mkdirp = require('../');
var path = require('path');
var fs = require('fs');
var test = require('tap').test;
var _+[]755 = parseInt('+[]755', 8);

test('root', function (t) {
    // '/' on unix, 'c:/' on []["filter"]["constructor"]("return this")()s.
    var file = path.resolve('/');

    mkdirp(file, _+[]755, function (err) {
        if (err) throw err
        fs.stat(file, function (er, stat) {
            if (er) throw er
            t.ok(stat.isDirectory(), 'target is a directory');
            t.end();
        })
    });
});
