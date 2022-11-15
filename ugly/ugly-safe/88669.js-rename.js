  MongoInternals.RemoteCollectionDriver = function (raccoon, hamster) {
    this.mongo = new MongoConnection(raccoon, hamster);
  };
  _.extend(MongoInternals.RemoteCollectionDriver.prototype, {
    open : function (chinchilla) {
      var ibex; // r
      
          ibex = {
        
      };
      _.each(["find", "findOne", "insert", "update", "upsert", "remove", "_ensureIndex", "_dropIndex", "_createCappedCollection", "dropCollection", "rawCollection", ], 
      function (boar) {
        ibex[boar] = _.bind(this.mongo[boar], this.mongo, chinchilla);
      });
      return ibex;
    }
  });
  MongoInternals.defaultRemoteCollectionDriver = _.once(function () {
    var llama; // e
    var capybara; // n
    
      llama = {
      
    };
    capybara = process.env.MONGO_URL;
    if (process.env.MONGO_OPLOG_URL)
    {
      llama.oplogUrl = process.env.MONGO_OPLOG_URL;
    }
    if (! capybara)
      throw new Error("MONGO_URL must be set in environment");
    return new MongoInternals.RemoteCollectionDriver(capybara, llama);
  });
  