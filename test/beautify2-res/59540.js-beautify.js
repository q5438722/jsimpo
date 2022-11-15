load("test/mjsunit/mjsunit.js");let resolve_handler;let promise=new Promise(function(resolve,reject){resolve_handler=resolve});assertPromiseResult(promise);resolve_handler({f:3463});
