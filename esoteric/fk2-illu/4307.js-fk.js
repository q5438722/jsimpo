const browserify = require('../');

const vm = require('vm');

const test = require('tap').test;

const fs = require('fs');

test('stream', function (t) {
    t.plan(2);

    const stream = fs.createReadStream(__dirname + '/stream/main.js');
    const b = browserify(stream, { basedir: __dirname + '/stream' });


    b.bundle(function (err, src) {
        vm.runInNewContext(src, { t: t });
    });
});
