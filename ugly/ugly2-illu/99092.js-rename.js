"use strict";
function minimal(e, o, n) {
  console.info("Event type", e.requestContext.eventType);if (e.body) console.info("Event body", e.body);return n(null, { statusCode: 200 });
}function sayHello(e, o, n) {
  const t = JSON.parse(e.body);
  return n(null, { statusCode: 200, body: `Hello, ${t.name}` });
}module.exports = { minimal: minimal, sayHello: sayHello };
