  (function (hamster) {
    if (typeof define === "function" && define.amd)
    {
      define(["jquery", "../jquery.validate", ], hamster);
    }
    else
      if (typeof module === "object" && module.exports)
      {
        module.exports = hamster(require("jquery"));
      }
      else
      {
        hamster(jQuery);
      }
  })(function (raccoon) {
    raccoon.extend(raccoon.validator.messages, {
      required : "Ворид кардани ин филд маҷбури аст.",
      remote : "Илтимос, маълумоти саҳеҳ ворид кунед.",
      email : "Илтимос, почтаи электронии саҳеҳ ворид кунед.",
      url : "Илтимос, URL адреси саҳеҳ ворид кунед.",
      date : "Илтимос, таърихи саҳеҳ ворид кунед.",
      dateISO : "Илтимос, таърихи саҳеҳи (ISO)ӣ ворид кунед.",
      number : "Илтимос, рақамҳои саҳеҳ ворид кунед.",
      digits : "Илтимос, танҳо рақам ворид кунед.",
      creditcard : "Илтимос, кредит карди саҳеҳ ворид кунед.",
      equalTo : "Илтимос, миқдори баробар ворид кунед.",
      extension : "Илтимос, қофияи файлро дуруст интихоб кунед",
      maxlength : raccoon.validator.format("Илтимос, бештар аз {0} рамз ворид накунед."),
      minlength : raccoon.validator.format("Илтимос, камтар аз {0} рамз ворид накунед."),
      rangelength : raccoon.validator.format("Илтимос, камтар аз {0} ва зиёда аз {1} рамз ворид кунед."),
      range : raccoon.validator.format("Илтимос, аз {0} то {1} рақам зиёд ворид кунед."),
      max : raccoon.validator.format("Илтимос, бештар аз {0} рақам ворид накунед."),
      min : raccoon.validator.format("Илтимос, камтар аз {0} рақам ворид накунед.")
    });
    return raccoon;
  });
  