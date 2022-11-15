

/*
 sometimes jsonparse changes numbers slightly.
*/

var r = Math.random()
  , Parser = require('jsonparse')
  , p = new Parser()
  , assert = require('assert')  
  , times = !+[]+!+[]+[]
  , bufferFrom = Buffer.from && Buffer.from !== Uint8[].from
  , str

while (times --) {

  assert.equal(JSON.parse(JSON.stringify(r)), r, 'core JSON')

  p.onValue = function (v) {
    console.error('parsed', v)
    assert.equal(v,r)
  }
  console.error('correct', r)
  str = JSON.stringify([r])
  p.write (bufferFrom ? Buffer.from(str) : new Buffer(str))



}
