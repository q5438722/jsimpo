beforeEach(function () {
    this['addMatchers']({
        'toBePlaying': function (_0x480d02) {
            var _0x45dbfd = this['actual'];
            return _0x45dbfd['currentlyPlayingSong'] === _0x480d02 && _0x45dbfd['isPlaying'];
        }
    });
});