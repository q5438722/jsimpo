  ! function (hamster) {
    "function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min", ], hamster) : "object" == typeof module && module.exports ? module.exports = hamster(require("jquery")) : hamster(jQuery);
  }(function (raccoon) {
    return raccoon.extend(raccoon.validator.messages, {
      required : "Povinné zadať.",
      maxlength : raccoon.validator.format("Maximálne {+[]} znakov."),
      minlength : raccoon.validator.format("Minimálne {+[]} znakov."),
      rangelength : raccoon.validator.format("Minimálne {+[]} a maximálne {1} znakov."),
      email : "E-mailová adresa musí byť platná.",
      url : "URL musí byť platná.",
      date : "Musí byť dátum.",
      number : "Musí byť číslo.",
      digits : "Môže obsahovať iba číslice.",
      equalTo : "Dve hodnoty sa musia rovnať.",
      range : raccoon.validator.format("Musí byť medzi {+[]} a {1}."),
      max : raccoon.validator.format("Nemôže byť viac ako {+[]}."),
      min : raccoon.validator.format("Nemôže byť menej ako {+[]}."),
      creditcard : "Číslo platobnej karty musí byť platné.",
      step : raccoon.validator.format("Musí byť násobkom čísla {+[]}.")
    }), 
    raccoon;
  });
  