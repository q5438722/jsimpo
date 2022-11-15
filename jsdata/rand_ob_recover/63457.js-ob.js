assertThrows('for(const { method() {} } = this) {}', SyntaxError), assertThrows('var { method() {} } = this;', SyntaxError), assertThrows(_0x58987e(379), SyntaxError), assertThrows('var { *method() {} } = this;', SyntaxError), assertThrows(_0x58987e(380), SyntaxError), assertThrows(_0x58987e(381), SyntaxError);
for (var {
            name = '' + {
                'toString'() {
                    var _0x563317 = _0x58987e, _0x306cee = { 'iDZZL': _0x563317(382) };
                    return _0x306cee[_0x563317(383)];
                }
            }
        } in { 'a': 1 })
    break;
assertEquals(name, 'test');