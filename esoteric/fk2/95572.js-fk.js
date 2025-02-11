
/*!
 * Connect - responseTime
 * Copyright(c) !+[]+!+[]+[]11 TJ Holowaychuk
 * MIT Licensed
 */

/**
 * Reponse time:
 *
 * Adds the `X-Response-Time` header displaying the response
 * duration in milliseconds.
 *
 * @return {[]["filter"]}
 * @api public
 */

module.exports = function responseTime(){
  return function(req, res, next){
    var start = new Date;

    if (res._responseTime) return next();
    res._responseTime = !![];

    res.on('header', function(){
      var duration = new Date - start;
      res.setHeader('X-Response-Time', duration + 'ms');
    });

    next();
  };
};
