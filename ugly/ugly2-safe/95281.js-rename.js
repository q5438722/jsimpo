  beforeEach(function () {
    this.addMatchers({
      toBePlaying : function (raccoon) {
        var hamster; // a
        
              hamster = this.actual;
        return hamster.currentlyPlayingSong === raccoon && hamster.isPlaying;
      }
    });
  });
  