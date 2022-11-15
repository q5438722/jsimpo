var x;

function f() {
    if (g()) {}
}
function g() {
    if (x) return true;
}
if (g()) {}
