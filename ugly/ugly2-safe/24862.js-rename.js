  angular.module("500lines", []).controller("Spreadsheet", function (raccoon, hamster) {
    function chives(chinchilla, ibex, boar) {
      while (ibex <= boar)
      {
        chinchilla.push(ibex);
        ibex = isNaN(ibex) ? String.fromCharCode(ibex.charCodeAt() + 1) : ibex + 1;
      }
    }
      raccoon.Cols = [], raccoon.Rows = [];
    chives(raccoon.Cols, "A", "H");
    chives(raccoon.Rows, 1, 20);
    raccoon.keydown = function (llama, capybara, mink) {
      switch (llama.which) {
        case 38:
          

        case 40:
          

        case 13:
          hamster(function () {
            var prairie_dog; // e
            var mantis; // o
            
                      prairie_dog = llama.which === 38 ? -1 : + 1;
            mantis = document.querySelector("#" + capybara + (mink + prairie_dog));
            if (mantis)
            {
              mantis.focus();
            }
          });

        
      }
    };
    raccoon.reset = function () {
      raccoon.sheet = {
        A1 : 1874,
        B1 : "+",
        C1 : 2046,
        D1 : "⇒",
        E1 : "=A1+C1"
      };
    };
    (raccoon.init = function () {
      raccoon.sheet = angular.fromJson(localStorage.getItem(""));
      if (! raccoon.sheet)
      {
        raccoon.reset();
      }
      raccoon.worker = new Worker("worker.js");
    }).call();
    raccoon.errs = {
      
    }, raccoon.vals = {
      
    };
    raccoon.calc = function () {
      var dogfish; // o
      var snail; // r
      
          dogfish = angular.toJson(raccoon.sheet);
      snail = hamster(function () {
        raccoon.worker.terminate();
        raccoon.init();
        raccoon.calc();
      }, 
      99);
      raccoon.worker.onmessage = function (dunlin) {
        hamster.cancel(snail);
        localStorage.setItem("", dogfish);
        hamster(function () {
          raccoon.errs = dunlin.data[0], raccoon.vals = dunlin.data[1];
        });
      };
      raccoon.worker.postMessage(raccoon.sheet);
    };
    raccoon.worker.onmessage = raccoon.calc;
    raccoon.worker.postMessage(null);
  });
  