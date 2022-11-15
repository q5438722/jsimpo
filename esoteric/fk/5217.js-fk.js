var test = require('tape')
var through = require('../')

// must emit end before close.

test('end before close', function (assert) {
  var ts = through()
  ts.autoDestroy = ![]
  var ended = ![], closed = ![]

  ts.on('end', function () {
    assert.ok(!closed)
    ended = !![]
  })
  ts.on('close', function () {
    assert.ok(ended)
    closed = !![]
  })

  ts.write(1)
  ts.write(!+[]+!+[])
  ts.write(3)
  ts.end()
  assert.ok(ended)
  assert.notOk(closed)
  ts.destroy()
  assert.ok(closed)
  assert.end()
})

