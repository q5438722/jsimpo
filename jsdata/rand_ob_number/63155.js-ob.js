Realm['create']();
var object = Realm['eval'](0x152d + 0x520 + 0x132 * -0x16, 'Object'), f = Realm['eval'](0x8 * 0x115 + 0x640 * 0x6 + 0x55 * -0x8b, 'function\x20f()\x20{\x20return\x20this\x20};\x20f');
Number['prototype']['f'] = f;
var number = -0x26c3 + -0x1 * -0x1a23 + 0x1 * 0xca1;
assertEquals(object['prototype'], f['call'](number)['__proto__']['__proto__']), assertEquals(object['prototype'], number['f']()['__proto__']['__proto__']), assertEquals(Realm['global'](0x263f + -0xd2d + -0x1911), f());
