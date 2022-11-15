'use strict';
require(["./a", "./b", "./c"]);
require.ensure(["./a"], function(saveNotifs) {
  saveNotifs("./b");
  saveNotifs("./d");
});

