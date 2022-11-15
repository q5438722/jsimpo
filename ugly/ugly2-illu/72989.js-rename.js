module.exports = function (e) {
  const o = e.loopback.Router();
  o.get("/wiki/*", r);e.use(o);function r(e, o) {
    o.redirect("http://forum.freecodecamp.org/");
  }
};
