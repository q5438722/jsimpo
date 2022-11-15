'use strict';
function* myGenerator(trackInfoUrl) {
  var lastTrackInfoUrl;
  var e;
  return e = (lastTrackInfoUrl = trackInfoUrl, yield lastTrackInfoUrl), Math.abs(e);
}
;
