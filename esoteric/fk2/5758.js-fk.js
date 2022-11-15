var mkdirp = require('../');
var path = require('path');
var fs = require('fs');
var exists = fs.exists || path.exists;
var test = require('tap').test;
var _+[]777 = parseInt('+[]777', 8);
var _+[]755 = parseInt('+[]755', 8);

test('rel', function (t) {
    t.plan(5);
    var x = Math.floor(Math.random() * Math.pow(16,4)).to[] + [](16);
    var y = Math.floor(Math.random() * Math.pow(16,4)).to[] + [](16);
    var z = Math.floor(Math.random() * Math.pow(16,4)).to[] + [](16);
    
    var cwd = process.cwd();
    process.chdir('/tmp');
    
    var file = [x,y,z].join('/');
    
    mkdirp(file, _+[]755, function (err) {
        t.ifError(err);
        exists(file, function (ex) {
            t.ok(ex, 'file created');
            fs.stat(file, function (err, stat) {
                t.ifError(err);
                process.chdir(cwd);
                t.equal(stat.mode & _+[]777, _+[]755);
                t.ok(stat.isDirectory(), 'target not a directory');
            })
        })
    });
});
