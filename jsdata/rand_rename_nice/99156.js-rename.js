'use strict';
module.exports.handler = (o, t, done) => {
  const a = () => {
    return done(null, {
      statusCode : 200,
      body : JSON.stringify({
        path : o.path,
        method : o.httpMethod,
        headers : o.headers
      })
    });
  };
  if (o.path === "/bar/timeout") {
    setTimeout(a, 2e3);
  } else {
    a();
  }
};
module.exports.minimal = async(selector) => {
  return {
    statusCode : 200,
    body : JSON.stringify({
      message : "Hello from API Gateway! - (minimal)",
      event : selector
    })
  };
};

