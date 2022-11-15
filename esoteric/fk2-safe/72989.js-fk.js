  module.exports = function (raccoon) {
    function chives(chinchilla, ibex) {
      ibex.redirect('http://forum.freecodecamp.org/');
    }
      var hamster; // router
    
      hamster = raccoon.loopback.Router();
    hamster.get('/wiki/*', showForum);
    raccoon.use(hamster);
  };
  