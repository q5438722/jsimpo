beforeEach(function(){this.addMatchers({toBePlaying:function(n){var a=this.actual;return a.currentlyPlayingSong===n&&a.isPlaying}})});