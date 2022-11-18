
  document.addEventListener('DOMContentLoaded', function () {var b = document.body;b.className = b.className.replace(/\bdisable_transition\b/, '');}, false);window.userClick = false;function $click$ () {window.userClick = true;window.removeEventListener('click', $click$);}window.addEventListener('click', $click$);
