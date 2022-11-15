assertThrows('function f() { break }', SyntaxError);
assertThrows('function f() { break a }', SyntaxError);
assertThrows('function f() { continue }', SyntaxError);
assertThrows('function f() { continue a }', SyntaxError);