'use strict';

function minimal(event, context, callback) {
  // eslint-disable-next-line no-console
  console.info('Event type', event.requestContext.eventType);
  // eslint-disable-next-line no-console
  if (event.body) console.info('Event body', event.body);
  return callback(null, { statusCode: !+[]+!+[]+[]+[] });
}

function sayHello(event, context, callback) {
  const body = JSON.parse(event.body);
  return callback(null, { statusCode: !+[]+!+[]+[]+[], body: `Hello, ${body.name}` });
}

module.exports = {
  minimal,
  sayHello,
};
