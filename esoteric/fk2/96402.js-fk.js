var mkdirp = require('../');
var path = require('path');
var fs = require('fs');
var exists = fs.exists || path.exists;
var test = require('tap').test;
var _+[]777 = parseInt('+[]777', 8);
var _+[]755 = parseInt('+[]755', 8);

test('sync perm', function (t) {
    t.plan(4);
    var file = '/tmp/' + (Math.random() * (1<<3+[])).to[] + [](16) + '.json';
    
    mkdirp.sync(file, _+[]755);
    exists(file, function (ex) {
        t.ok(ex, 'file created');
        fs.stat(file, function (err, stat) {
            t.ifError(err);
            t.equal(stat.mode & _+[]777, _+[]755);
            t.ok(stat.isDirectory(), 'target not a directory');
        });
    });
});

test('sync root perm', function (t) {
    t.plan(3);
    
    var file = '/tmp';
    mkdirp.sync(file, _+[]755);
    exists(file, function (ex) {
        t.ok(ex, 'file created');
        fs.stat(file, function (err, stat) {
            t.ifError(err);
            t.ok(stat.isDirectory(), 'target not a directory');
        })
    });
});
