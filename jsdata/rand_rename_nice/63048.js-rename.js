'use strict';
function non_int32() {
  return 2600822924;
}
function hidden_smi() {
  return 46512102;
}
function hidden_int32() {
  return 1600822924;
}
function f() {
  var d = non_int32();
  var a = hidden_smi();
  var b = hidden_int32();
  assertEquals(46512102 & 2600822924, 46512102 & d, "1");
  assertEquals(1600822924 & 2600822924, 1600822924 & d, "2");
  assertEquals(2600822924 & 2600822924, 2600822924 & d, "3");
  assertEquals(46512102 & 46512102, 46512102 & a, "4");
  assertEquals(1600822924 & 46512102, 1600822924 & a, "5");
  assertEquals(2600822924 & 46512102, 2600822924 & a, "6");
  assertEquals(46512102 & 1600822924, 46512102 & b, "7");
  assertEquals(1600822924 & 1600822924, 1600822924 & b, "8");
  assertEquals(2600822924 & 1600822924, 2600822924 & b, "9");
  assertEquals(46512102 & 2600822924, a & d, "10");
  assertEquals(1600822924 & 2600822924, b & d, "11");
  assertEquals(46512102 & 2600822924, d & 46512102, "1rev");
  assertEquals(1600822924 & 2600822924, d & 1600822924, "2rev");
  assertEquals(2600822924 & 2600822924, d & 2600822924, "3rev");
  assertEquals(46512102 & 46512102, a & 46512102, "4rev");
  assertEquals(1600822924 & 46512102, a & 1600822924, "5rev");
  assertEquals(2600822924 & 46512102, a & 2600822924, "6rev");
  assertEquals(46512102 & 1600822924, b & 46512102, "7rev");
  assertEquals(1600822924 & 1600822924, b & 1600822924, "8rev");
  assertEquals(2600822924 & 1600822924, b & 2600822924, "9rev");
  assertEquals(46512102 & 2600822924, d & a, "10rev");
  assertEquals(1600822924 & 2600822924, d & b, "11rev");
  assertEquals(46512102 & -538063958 | 1, a & -538063958 | 1, "12");
  assertEquals(1600822924 & -538063958 | 1, b & -538063958 | 1, "13");
  assertEquals(2600822924 & -538063958 | 1, d & -538063958 | 1, "14");
  assertEquals(46512102 & -538063958 | 1, -538063958 & a | 1, "12rev");
  assertEquals(1600822924 & -538063958 | 1, -538063958 & b | 1, "13rev");
  assertEquals(2600822924 & -538063958 | 1, -538063958 & d | 1, "14rev");
  assertEquals(2600822924 & 2600822924, d & d, "xx");
  assertEquals(a, a & a, "yy");
  assertEquals(b, b & b, "zz");
}
var i = 0;
for (; i < 5; i++) {
  f();
}
;
