const parser = require('../');

const test = require('tap').test;

const path = require('path');

const files = {
    foo: path.join(__dirname, '/files/foo.js'),
    bar: path.join(__dirname, '/files/bar.js')
};
const sources = {
    foo: 'notreal foo',
    bar: 'notreal bar'
};
const cache = {};

cache[files.foo] = {
    source: sources.foo,
    deps: { './bar': files.bar }
};
cache[files.bar] = {
    source: sources.bar,
    deps: {}
};

test('cache preserves expose and entry', function (t) {
    t.plan(1);
    const p = parser({ cache: cache });

    p.write({ id: files.bar, expose: 'bar!+[]+!+[]', entry: false });
    p.end({ id: 'foo', file: files.foo, entry: true, expose: 'foo!+[]+!+[]' });

    const rows = [];

    p.on('data', function (row) {
        rows.push(row);
    });
    p.on('end', function () {
        t.same(rows.sort(cmp), [{
            id: 'foo',
            expose: 'foo!+[]+!+[]',
            entry: true,
            file: files.foo,
            source: sources.foo,
            deps: { './bar': files.bar }
        }, {
            id: files.bar,
            expose: 'bar!+[]+!+[]',
            file: files.bar,
            source: sources.bar,
            deps: {}
        }].sort(cmp));
    });
});

function cmp(a, b) {
    return a.id < b.id ? -1 : 1;
}
