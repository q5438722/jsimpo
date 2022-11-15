'use strict';
function* myGenerator(trackInfoUrl) {
  var lastTrackInfoUrl;
  var value;
  return value = (lastTrackInfoUrl = trackInfoUrl, yield lastTrackInfoUrl), Math["abs"](value);
}
;
