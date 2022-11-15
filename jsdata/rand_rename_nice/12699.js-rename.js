'use strict';
const SCORMAPI = (attempt) => {
  const e = attempt.indexOf("mime_contains=file");
  const n = attempt.indexOf("mime_ncontains=file");
  let originalBaseURL = attempt;
  if (e !== -1) {
    originalBaseURL = originalBaseURL.replace("mime_contains=file", "mime_ncontains=image&mime_ncontains=video");
  }
  if (n !== -1) {
    originalBaseURL = originalBaseURL.replace("mime_ncontains=file", "mime_contains=image&mime_contains=video");
  }
  return originalBaseURL;
};
export default SCORMAPI;

