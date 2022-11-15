"use strict";
const logger = console;
function getMarkers(e) {
  return { start: `--- START ${e} ---`, end: `--- END ${e} ---` };
}function log(e, g) {
  const o = getMarkers(e);
  logger.log(o.start);logger.log(g);logger.log(o.end);
}module.exports = { getMarkers: getMarkers, log: log };
