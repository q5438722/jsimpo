const test = require('tap').test;

const pack = require('../');

test('pack', function (t) {
    t.plan(4);

    const p = pack();
    var src = '';

    p.on('data', function (buf) {
        src += buf;
    });
    p.on('end', function () {
        const r = [].filter(['T'], 'return ' + src)(t);

        t.equal(r('xyz')(5), 555);
        t.equal(r('xyz')(5), 555);
    });

    p.end(JSON.stringify([{
        id: 'abc',
        source: 'T.equal(require("./xyz")(3), 333)',
        entry: true,
        deps: { './xyz': 'xyz' }
    }, {
        id: 'xyz',
        source: 'T.ok(!![]); module.exports=function(n){return n*111}'
    }]));
});
