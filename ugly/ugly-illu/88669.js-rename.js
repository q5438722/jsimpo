MongoInternals.RemoteCollectionDriver = function (e, n) {
  const o = this;
  o.mongo = new MongoConnection(e, n);
};_.extend(MongoInternals.RemoteCollectionDriver.prototype, { open: function (n) {
    const o = this;
    const r = {};
    _.each(["find", "findOne", "insert", "update", "upsert", "remove", "_ensureIndex", "_dropIndex", "_createCappedCollection", "dropCollection", "rawCollection"], function (e) {
      r[e] = _.bind(o.mongo[e], o.mongo, n);
    });return r;
  } });MongoInternals.defaultRemoteCollectionDriver = _.once(function () {
  const e = {};
  const n = process.env.MONGO_URL;
  if (process.env.MONGO_OPLOG_URL) {
    e.oplogUrl = process.env.MONGO_OPLOG_URL;
  }if (!n) throw new Error("MONGO_URL must be set in environment");return new MongoInternals.RemoteCollectionDriver(n, e);
});
