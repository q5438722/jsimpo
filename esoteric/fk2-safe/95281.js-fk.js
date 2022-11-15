  beforeEach(function () {
    this.addMatchers({
      toBePlaying : function (raccoon) {
        var hamster; // player
        
              hamster = this.actual;
        return hamster.currentlyPlayingSong === raccoon && hamster.isPlaying;
      }
    });
  });
  