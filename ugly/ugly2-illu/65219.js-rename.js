load("base.js");var str;
var re;
function Exec() {
  re.exec(str);
}function Exec1Setup() {
  re = /[Cz]/;str = createHaystack();
}function Exec2Setup() {
  re = /[Cz]/g;str = createHaystack();
}function Exec3Setup() {
  re = /([Cz])/y;str = createHaystack();
}function Exec4Setup() {
  re = /[cZ]/;str = createHaystack();
}function Exec5Setup() {
  re = /[cZ]/g;str = createHaystack();
}function Exec6Setup() {
  re = /([cZ])/y;str = createHaystack();
}function Exec7Setup() {
  re = /[Cz]/gy;re.lastIndex = 2 ** 32;str = createHaystack();
}const benchmarks = [[Exec, Exec1Setup], [Exec, Exec2Setup], [Exec, Exec3Setup], [Exec, Exec4Setup], [Exec, Exec5Setup], [Exec, Exec6Setup], [Exec, Exec7Setup]];