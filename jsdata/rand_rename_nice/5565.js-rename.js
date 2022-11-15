'use strict';
if (true) {
  (function() {
    require("a");
  })();
}
if (false) {
  (function() {
    var e = 10;
    switch(e) {
      case 1:
        require("b");
        break;
      default:
        break;
    }
  })();
}
function qqq() {
  require("c");
}
;
