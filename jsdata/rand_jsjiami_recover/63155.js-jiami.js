Realm['create']();
var object = Realm['eval'](1, 'Object');
var f = Realm['eval'](1, 'function f() { return this }; f');
Number['prototype']['f'] = f;
var number = 1;
assertEquals(object['prototype'], f['call'](number)['__proto__']['__proto__']);
assertEquals(object['prototype'], number['f']()['__proto__']['__proto__']);
assertEquals(Realm['global'](1), f());