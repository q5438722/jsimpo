assertThrows('for(const\x20{\x20method()\x20{}\x20}\x20=\x20this)\x20{}', SyntaxError), assertThrows('var\x20{\x20method()\x20{}\x20}\x20=\x20this;', SyntaxError), assertThrows('for(const\x20{\x20*method()\x20{}\x20}\x20=\x20this)\x20{}', SyntaxError), assertThrows('var\x20{\x20*method()\x20{}\x20}\x20=\x20this;', SyntaxError), assertThrows('for(var\x20{\x20get\x20foo()\x20{}\x20}\x20=\x20this)\x20{}', SyntaxError), assertThrows('for(var\x20{\x20set\x20foo()\x20{}\x20}\x20=\x20this)\x20{}', SyntaxError);
for (var {
            name = '' + {
                'toString'() {
                    return 'test';
                }
            }
        } in { 'a': 0x1 })
    break;
assertEquals(name, 'test');
