function f() {
  this.a = { text: "Hello!" };
}const v4 = new f();
const v7 = new f();
v7.b = {};Object.defineProperty(v4, "2", {});const v6 = new f();
v6.a = {};
