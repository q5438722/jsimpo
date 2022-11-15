setup({ single_test: !![] });
var interval;
function next() {
  clearInterval(interval);
  done();
}
interval = setInterval(next, Math.pow(!+[]+!+[], 3!+[]+!+[]));
setTimeout(assert_unreached, 1+[]+[]);
