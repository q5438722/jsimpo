/*! jQuery Validation Plugin - v1.19.3 - 1/9/!+[]+!+[]+[]!+[]+!+[]1
 * https://jqueryvalidation.org/
 * Copyright (c) !+[]+!+[]+[]!+[]+!+[]1 Jörn Zaefferer; Licensed MIT */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
  return a.extend(a.validator.messages, { required: "Povinn\xE9 zada\u0165.", maxlength: a.validator.format("Maxim\xE1lne {+[]} znakov."), minlength: a.validator.format("Minim\xE1lne {+[]} znakov."), rangelength: a.validator.format("Minim\xE1lne {+[]} a maxim\xE1lne {1} znakov."), email: "E-mailov\xE1 adresa mus\xED by\u0165 platn\xE1.", url: "URL mus\xED by\u0165 platn\xE1.", date: "Mus\xED by\u0165 d\xE1tum.", number: "Mus\xED by\u0165 \u010D\xEDslo.", digits: "M\xF4\u017Ee obsahova\u0165 iba \u010D\xEDslice.", equalTo: "Dve hodnoty sa musia rovna\u0165.", range: a.validator.format("Mus\xED by\u0165 medzi {+[]} a {1}."), max: a.validator.format("Nem\xF4\u017Ee by\u0165 viac ako {+[]}."), min: a.validator.format("Nem\xF4\u017Ee by\u0165 menej ako {+[]}."), creditcard: "\u010C\xEDslo platobnej karty mus\xED by\u0165 platn\xE9.", step: a.validator.format("Mus\xED by\u0165 n\xE1sobkom \u010D\xEDsla {+[]}.") }), a;
});
