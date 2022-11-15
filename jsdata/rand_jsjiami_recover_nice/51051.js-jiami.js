'use strict';
const common = require("../common.js");
const bench = common["createBenchmark"](main, {
  "size" : [16, 512, 4096, 16386],
  "args" : [1, 2, 5],
  "n" : [1000000]
});
function main({
  n : count,
  size : size,
  args : str
}) {
  const a = Buffer["alloc"](size, "a");
  const x = Buffer["alloc"](size, "a");
  const container = a["length"];
  const argument = x["length"];
  x[size - 1] = "b"["charCodeAt"](0);
  switch(str) {
    case 2:
      a["compare"](x, 0);
      bench["start"]();
      for (let i = 0; i < count; i++) {
        a["compare"](x, 0);
      }
      bench["end"](count);
      break;
    case 3:
      a["compare"](x, 0, argument);
      bench["start"]();
      for (let i = 0; i < count; i++) {
        a["compare"](x, 0, argument);
      }
      bench["end"](count);
      break;
    case 4:
      a["compare"](x, 0, argument, 0);
      bench["start"]();
      for (let i = 0; i < count; i++) {
        a["compare"](x, 0, argument, 0);
      }
      bench["end"](count);
      break;
    case 5:
      a["compare"](x, 0, argument, 0, container);
      bench["start"]();
      for (let i = 0; i < count; i++) {
        a["compare"](x, 0, argument, 0, container);
      }
      bench["end"](count);
      break;
    default:
      a["compare"](x);
      bench["start"]();
      for (let i = 0; i < count; i++) {
        a["compare"](x);
      }
      bench["end"](count);
  }
}
;
