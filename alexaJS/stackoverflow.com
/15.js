
window.onload = function () {
  var userSlider = document.querySelector(".js-user-slider");
  var userWordsData = userSlider.getAttribute("data-words").split(",");
  var userWords;
  var userWordsWidth = [];
  var userSliderCount = 0;
  var userSliderStarted = false;
  var userSliderTimeout;
  var userSliderPrev = null;
  var userSliderCur;

  function userSliderInit() {
    userSlider.innerHTML = "";

    for (var i = 0; i < userWordsData.length; ++i) {
      var _span = document.createElement("span");
      var _text = document.createTextNode(userWordsData[i]);
      var _elm = _span.appendChild(_text);

      userSlider.appendChild(_span);
    }

    userWords = userSlider.childNodes;

    userSlider.style.width = userSlider.clientWidth + "px";
    userSlider.style.height = userSlider.clientHeight + "px";

    userSliderRun();
  }

  function userSliderRun() {
    clearTimeout(userSliderTimeout);

    userSliderTimeout = setTimeout(
      function () {
        userSlider.classList.add("js-loaded");

        userSliderStarted = true;

        userSliderCur = userWords[userSliderCount];

        if (userSliderPrev) {
          userSliderPrev.classList.add("js-user-slide-out");
          userSliderCur.classList.remove("js-user-slide-out");
          userSliderCur.classList.add("js-user-slide-in");
        } else {
          userSliderCur.classList.add("js-user-slide-init");
        }

        userSlider.style.width = userSliderCur.clientWidth + "px";
        userSlider.style.height = userSliderCur.clientHeight + "px";

        userSliderPrev = userSliderCur;

        if (userSliderCount === userWords.length - 1) {
          userSliderCount = 0;
        } else {
          userSliderCount++;
        }

        userSliderRun();
      },
      userSliderStarted ? 2000 : 0
    );
  }

  userSliderInit();
};

(function () {
  var useCases = document.querySelectorAll(".js-use-case");
  var useCaseClassActive = "js-use-case wmn3 fc-white d:fc-black js-use-case--is-active c-pointer flex--item bg-black-700 d:bg-black-100 py32 bar-lg bs-md";
  var useCaseClass = "js-use-case c-pointer fc-black-025 h:bg-black-800 bar-lg flex--item py32";
  var useCaseCur = 0;
  var useCasePlayer;
  var useCaseSpeed = 5000;

  for (var i = 0; i < useCases.length; ++i) {
    var useCase = useCases[i];
    useCase.addEventListener("click", function(event) {
        useCaseShow(event.currentTarget, i);
        clearInterval(useCasePlayer);
    });
  }

  function useCaseReset() {
    for (var i = 0; i < useCases.length; ++i) {
      useCases[i].className = useCaseClass;
    }
  }

  function useCaseShow(el) {
    useCaseReset();
    el.className = useCaseClassActive;
  }

  function useCaseInit() {
      useCasePlayer = setInterval(function() {
          if (useCaseCur === useCases.length) {
              useCaseCur = 0;
          }
          useCaseShow(useCases[useCaseCur++])
      }, useCaseSpeed)
  }

  //useCaseInit();
})();
