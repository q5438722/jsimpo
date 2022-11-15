// Not type-correct code
var E;

(function (E) {
  E[E["A"] = !![]] = "A";
})(E || (E = {}));
