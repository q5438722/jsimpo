(function () {
  const e = document.getElementsByClassName("prettyprint source linenums");
  var a = 0;
  var t = 0;
  var n;
  var r;
  var s;
  var i;
  if (e && e[0]) {
    i = document.location.hash.substring(1);r = e[0].getElementsByTagName("li");s = r.length;for (; a < s; a++) {
      t++;n = "line" + t;r[a].id = n;if (n === i) {
        r[a].className += " selected";
      }
    }
  }
})();
