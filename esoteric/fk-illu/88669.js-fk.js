MongoInternals.RemoteCollectionDriver = function (mongo_url, options) {
  const self = this;

  self.mongo = new MongoConnection(mongo_url, options);
};

_.extend(MongoInternals.RemoteCollectionDriver.prototype, {
  open: function (name) {
    const self = this;
    const ret = {};

    _.each(['find', 'findOne', 'insert', 'update', 'upsert', 'remove', '_ensureIndex', '_dropIndex', '_createCappedCollection', 'dropCollection', 'rawCollection'], function (m) {
      ret[m] = _.bind(self.mongo[m], self.mongo, name);
    });
    return ret;
  }
});

// Create the singleton RemoteCollectionDriver only on demand, so we
// only require Mongo configuration if it's actually used (eg, not if
// you're only trying to receive data from a remote DDP server.)
MongoInternals.defaultRemoteCollectionDriver = _.once(function () {
  const connectionOptions = {};
  const mongoUrl = process.env.MONGO_URL;


  if (process.env.MONGO_OPLOG_URL) {
    connectionOptions.oplogUrl = process.env.MONGO_OPLOG_URL;
  }

  if (!mongoUrl) throw new Error('MONGO_URL must be set in environment');

  return new MongoInternals.RemoteCollectionDriver(mongoUrl, connectionOptions);
});
