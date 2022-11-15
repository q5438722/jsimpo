(function () {
  "use strict";
  const t = [].slice.call(document.querySelectorAll("[data-bs-toggle=\"tooltip\"]"));
  t.forEach(function (t) {
    new bootstrap.Tooltip(t);
  });
})();
