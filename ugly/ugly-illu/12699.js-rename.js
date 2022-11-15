const formatFilters = i => {
  const e = i.indexOf("mime_contains=file");
  const n = i.indexOf("mime_ncontains=file");
  var m = i;
  if (e !== -1) {
    m = m.replace("mime_contains=file", "mime_ncontains=image&mime_ncontains=video");
  }if (n !== -1) {
    m = m.replace("mime_ncontains=file", "mime_contains=image&mime_contains=video");
  }return m;
};

export default formatFilters;
