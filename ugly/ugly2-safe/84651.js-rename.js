  (function () {
  "use strict";
    var raccoon; // t
    
      raccoon = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    raccoon.forEach(function (hamster) {
      new bootstrap.Tooltip(hamster);
    });
  })();
  