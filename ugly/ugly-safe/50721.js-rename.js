  ! function () {
    var raccoon; // n
    
      if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd)
      raccoon = jQuery.fn.select2.amd;
    raccoon.define("select2/i18n/ru", [], function () {
      function chives(hamster, chinchilla, ibex, boar) {
        return hamster % 10 < 5 && hamster % 10 > 0 && hamster % 100 < 5 || hamster % 100 > 20 ? hamster % 10 > 1 ? ibex : chinchilla : boar;
      }
          return {
        errorLoading : function () {
          return "Невозможно загрузить результаты";
        },
        inputTooLong : function (llama) {
          var capybara; // e
          var mink; // r
          
                  {
            capybara = llama.input.length - llama.maximum;
            mink = "Пожалуйста, введите на " + capybara + " символ";
          }
          return mink = mink + chives(capybara, "", "a", "ов"), mink = mink + " меньше";
        },
        inputTooShort : function (prairie_dog) {
          var mantis; // e
          var dogfish; // r
          
                  {
            mantis = prairie_dog.minimum - prairie_dog.input.length;
            dogfish = "Пожалуйста, введите ещё хотя бы " + mantis + " символ";
          }
          return dogfish = dogfish + chives(mantis, "", "a", "ов");
        },
        loadingMore : function () {
          return "Загрузка данных…";
        },
        maximumSelected : function (snail) {
          var dunlin; // e
          
                  dunlin = "Вы можете выбрать не более " + snail.maximum + " элемент";
          return dunlin = dunlin + chives(snail.maximum, "", "a", "ов");
        },
        noResults : function () {
          return "Совпадений не найдено";
        },
        searching : function () {
          return "Поиск…";
        },
        removeAllItems : function () {
          return "Удалить все элементы";
        }
      };
    }), 
    raccoon.define, 
    raccoon.require;
  }();
  