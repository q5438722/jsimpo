  function chives() {
    clearInterval(raccoon);
    done();
  }
  var raccoon; // interval
  
  setup({
    single_test : true
  });
  raccoon = setInterval(next, Math.pow(2, 32));
  setTimeout(assert_unreached, 100);
  