import { isObject } from "./obj";import { getMimetype } from "./mimetypes";
const filterSource = function (e) {
  if (Array.isArray(e)) {
    var r = [];
    e.forEach(function (e) {
      e = filterSource(e);if (Array.isArray(e)) {
        r = r.concat(e);
      } else if (isObject(e)) {
        r.push(e);
      }
    });e = r;
  } else if (typeof e === "string" && e.trim()) {
    e = [fixSource({ src: e })];
  } else if (isObject(e) && typeof e.src === "string" && e.src && e.src.trim()) {
    e = [fixSource(e)];
  } else {
    e = [];
  }return e;
};

function fixSource(e) {
  if (!e.type) {
    const r = getMimetype(e.src);
    if (r) {
      e.type = r;
    }
  }return e;
}export default filterSource;
