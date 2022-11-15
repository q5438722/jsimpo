const GetTarget = function (e) {
  var t;
  if (e !== "") {
    if (typeof e === "string") {
      t = document.getElementById(e);
    } else if (e && e.nodeType === 1) {
      t = e;
    }
  }if (!t) {
    t = document.body;
  }return t;
};

module.exports = GetTarget;
