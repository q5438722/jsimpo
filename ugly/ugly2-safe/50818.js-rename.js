  ! function (hamster) {
    "function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min", ], hamster) : "object" == typeof module && module.exports ? module.exports = hamster(require("jquery")) : hamster(jQuery);
  }(function (raccoon) {
    return raccoon.extend(raccoon.validator.messages, {
      required : "Povinné zadať.",
      maxlength : raccoon.validator.format("Maximálne {0} znakov."),
      minlength : raccoon.validator.format("Minimálne {0} znakov."),
      rangelength : raccoon.validator.format("Minimálne {0} a maximálne {1} znakov."),
      email : "E-mailová adresa musí byť platná.",
      url : "URL musí byť platná.",
      date : "Musí byť dátum.",
      number : "Musí byť číslo.",
      digits : "Môže obsahovať iba číslice.",
      equalTo : "Dve hodnoty sa musia rovnať.",
      range : raccoon.validator.format("Musí byť medzi {0} a {1}."),
      max : raccoon.validator.format("Nemôže byť viac ako {0}."),
      min : raccoon.validator.format("Nemôže byť menej ako {0}."),
      creditcard : "Číslo platobnej karty musí byť platné.",
      step : raccoon.validator.format("Musí byť násobkom čísla {0}.")
    }), 
    raccoon;
  });
  