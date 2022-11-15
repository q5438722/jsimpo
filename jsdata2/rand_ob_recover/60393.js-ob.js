function f() {
    this['a'] = { 'text': 'Hello!' };
}
var v4 = new f(), v7 = new f();
v7['b'] = {}, Object[_0x2ca36a(432)](v4, '2', {});
var v6 = new f();
v6['a'] = {};