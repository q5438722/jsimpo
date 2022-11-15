'use strict';
const common = require("../common.js");
const bench = common.createBenchmark(main, {
  size : [16, 512, 4096, 16386],
  args : [1, 2, 5],
  n : [1e6]
});
function main({
  n : nb_ft,
  size : len,
  args : argstring
}) {
  const h = Buffer.alloc(len, "a");
  const r = Buffer.alloc(len, "a");
  const no = h.length;
  const done = r.length;
  r[len - 1] = "b".charCodeAt(0);
  switch(argstring) {
    case 2:
      h.compare(r, 0);
      bench.start();
      for (let _t_ix = 0; _t_ix < nb_ft; _t_ix++) {
        h.compare(r, 0);
      }
      bench.end(nb_ft);
      break;
    case 3:
      h.compare(r, 0, done);
      bench.start();
      for (let _t_ix = 0; _t_ix < nb_ft; _t_ix++) {
        h.compare(r, 0, done);
      }
      bench.end(nb_ft);
      break;
    case 4:
      h.compare(r, 0, done, 0);
      bench.start();
      for (let _t_ix = 0; _t_ix < nb_ft; _t_ix++) {
        h.compare(r, 0, done, 0);
      }
      bench.end(nb_ft);
      break;
    case 5:
      h.compare(r, 0, done, 0, no);
      bench.start();
      for (let _t_ix = 0; _t_ix < nb_ft; _t_ix++) {
        h.compare(r, 0, done, 0, no);
      }
      bench.end(nb_ft);
      break;
    default:
      h.compare(r);
      bench.start();
      for (let _t_ix = 0; _t_ix < nb_ft; _t_ix++) {
        h.compare(r);
      }
      bench.end(nb_ft);
  }
}
;
