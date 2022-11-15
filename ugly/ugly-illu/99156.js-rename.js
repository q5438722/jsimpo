"use strict";
module.exports.handler = (e, t, s) => {
  const a = () => s(null, { statusCode: 200, body: JSON.stringify({ path: e.path, method: e.httpMethod, headers: e.headers }) });

  if (e.path === "/bar/timeout") setTimeout(a, 2e3);else a();
};module.exports.minimal = async e => {
  return { statusCode: 200, body: JSON.stringify({ message: "Hello from API Gateway! - (minimal)", event: e }) };
};
