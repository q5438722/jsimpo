assertThrows('for(const { method() {} } = this) {}', SyntaxError);
assertThrows('var { method() {} } = this;', SyntaxError);
assertThrows('for(const { *method() {} } = this) {}', SyntaxError);
assertThrows('var { *method() {} } = this;', SyntaxError);
assertThrows('for(var { get foo() {} } = this) {}', SyntaxError);
assertThrows('for(var { set foo() {} } = this) {}', SyntaxError);
for (var {
            name = '' + {
                'toString'() {
                    return 'test';
                }
            }
        } in { 'a': 1 })
    break;
assertEquals(name, 'test');