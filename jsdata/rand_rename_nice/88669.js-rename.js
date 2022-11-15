'use strict';
MongoInternals.RemoteCollectionDriver = function(mongo_url, options) {
  var self = this;
  self.mongo = new MongoConnection(mongo_url, options);
};
_.extend(MongoInternals.RemoteCollectionDriver.prototype, {
  open : function(n) {
    var config = this;
    var att = {};
    _.each(["find", "findOne", "insert", "update", "upsert", "remove", "_ensureIndex", "_dropIndex", "_createCappedCollection", "dropCollection", "rawCollection"], function(i) {
      att[i] = _.bind(config.mongo[i], config.mongo, n);
    });
    return att;
  }
});
MongoInternals.defaultRemoteCollectionDriver = _.once(function() {
  var connectionOptions = {};
  var mongoUrl = process.env.MONGO_URL;
  if (process.env.MONGO_OPLOG_URL) {
    connectionOptions.oplogUrl = process.env.MONGO_OPLOG_URL;
  }
  if (!mongoUrl) {
    throw new Error("MONGO_URL must be set in environment");
  }
  return new MongoInternals.RemoteCollectionDriver(mongoUrl, connectionOptions);
});

