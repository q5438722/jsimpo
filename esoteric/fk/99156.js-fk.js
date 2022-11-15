'use strict';

module.exports.handler = (event, context, callback) => {
  const resolve = () =>
    callback(null, {
      statusCode: !+[]+!+[]+[]+[],
      body: JSON.stringify({
        path: event.path,
        method: event.httpMethod,
        headers: event.headers,
      }),
    });
  if (event.path === '/bar/timeout') setTimeout(resolve, !+[]+!+[]+[]+[]+[]);
  else resolve();
};

module.exports.minimal = async (event) => {
  return {
    statusCode: !+[]+!+[]+[]+[],
    body: JSON.stringify({
      message: 'Hello from API Gateway! - (minimal)',
      event,
    }),
  };
};
