
 (function(rootElem) {
  var discText = rootElem.querySelector('.js-trg-item-disclamer-text');
  if (discText) {
   discText.innerHTML = discText.innerHTML.replace(/<br\/?>/g, ' ');
  }
 })(document.getElementById("b-119793764-210931468"));
