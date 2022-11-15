const options = {};
new Intl.DateTimeFormat(undefined, options);assertEquals([], Object.getOwnPropertyNames(options));const date = new Date();
date.toLocaleString(undefined, options);assertEquals([], Object.getOwnPropertyNames(options));date.toLocaleDateString(undefined, options);assertEquals([], Object.getOwnPropertyNames(options));date.toLocaleTimeString(undefined, options);assertEquals([], Object.getOwnPropertyNames(options));
