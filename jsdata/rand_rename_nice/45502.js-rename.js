'use strict';
var async = require("../../lib");
const {
  expect : expect
} = require("chai");
const assert = require("assert");
module.exports = function() {
  async function iterator(tasks) {
    var obj = await Promise.resolve(tasks);
    return obj;
  }
  this.retries(3);
  const arr = [1, 2, 3];
  const fields = {
    a : 1,
    b : 2,
    c : 3
  };
  it("should asyncify async functions", (saveNotifs) => {
    async.asyncify(iterator)(42, (notifications, resC) => {
      assert(resC === 42);
      saveNotifs(notifications);
    });
  });
  it("should handle errors in async functions", (saveNotifs) => {
    async.asyncify(async() => {
      throw new Error("thrown error");
    })((origErr) => {
      assert(origErr.message = "thrown error");
      saveNotifs();
    });
  });
  it("should handle async functions in each", (aCallback) => {
    async.each(arr, iterator, aCallback);
  });
  it("should handle async functions in eachLimit", (callback) => {
    async.eachLimit(arr, 2, iterator, callback);
  });
  it("should handle async functions in eachSeries", (callback) => {
    async.eachSeries(arr, iterator, callback);
  });
  it("should handle async functions in eachOf", (callback) => {
    async.eachOf(arr, iterator, callback);
  });
  it("should handle async functions in eachOfLimit", (done) => {
    async.eachOfLimit(arr, 2, iterator, done);
  });
  it("should handle async functions in eachOfSeries", (callback) => {
    async.eachOfSeries(arr, iterator, callback);
  });
  it("should handle async functions in map", (saveNotifs) => {
    async.map(arr, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(arr);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in mapLimit", (saveNotifs) => {
    async.mapLimit(arr, 2, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(arr);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in mapSeries", (saveNotifs) => {
    async.mapSeries(arr, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(arr);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in mapValues", (saveNotifs) => {
    async.mapValues(fields, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(fields);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in mapValuesLimit", (saveNotifs) => {
    async.mapValuesLimit(fields, 2, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(fields);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in mapValuesSeries", (saveNotifs) => {
    async.mapValuesSeries(fields, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(fields);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in filter", (saveNotifs) => {
    async.filter(arr, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(arr);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in filterLimit", (saveNotifs) => {
    async.filterLimit(arr, 2, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(arr);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in filterSeries", (saveNotifs) => {
    async.filterSeries(arr, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(arr);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in reject", (saveNotifs) => {
    async.reject(arr, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql([]);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in rejectLimit", (saveNotifs) => {
    async.rejectLimit(arr, 2, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql([]);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in rejectSeries", (saveNotifs) => {
    async.rejectSeries(arr, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql([]);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in every", (saveNotifs) => {
    async.every(arr, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(true);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in everyLimit", (saveNotifs) => {
    async.everyLimit(arr, 2, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(true);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in everySeries", (saveNotifs) => {
    async.everySeries(arr, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(true);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in some", (saveNotifs) => {
    async.some(arr, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(true);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in someLimit", (saveNotifs) => {
    async.someLimit(arr, 2, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(true);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in someSeries", (saveNotifs) => {
    async.someSeries(arr, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(true);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in groupBy", (saveNotifs) => {
    async.groupBy(arr, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql({
        1 : [1],
        2 : [2],
        3 : [3]
      });
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in groupByLimit", (saveNotifs) => {
    async.groupByLimit(arr, 2, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql({
        1 : [1],
        2 : [2],
        3 : [3]
      });
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in groupBySeries", (saveNotifs) => {
    async.groupBySeries(arr, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql({
        1 : [1],
        2 : [2],
        3 : [3]
      });
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in concat", (saveNotifs) => {
    async.concat(arr, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(arr);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in concatLimit", (moment) => {
    async.concatLimit(arr, 2, iterator, (started, channelSpark) => {
      expect(started).to.eql(null);
      expect(channelSpark).to.eql(arr);
      moment(started);
    });
  });
  it("should handle async functions in concatSeries", (saveNotifs) => {
    async.concatSeries(arr, iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(arr);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in reduce", (saveNotifs) => {
    async.reduce(arr, 0, async(currentVal, nextVal) => {
      var s = await Promise.resolve(currentVal + nextVal);
      return s;
    }, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(6);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in reduceRight", (saveNotifs) => {
    async.reduceRight(arr, 0, async(currentVal, nextVal) => {
      var s = await Promise.resolve(currentVal + nextVal);
      return s;
    }, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(6);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in sortBy", (saveNotifs) => {
    async.sortBy([3, 2, 1], iterator, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(arr);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in transform", (saveNotifs) => {
    async.transform(fields, async(secTypes, compressedJavaScript, s) => {
      secTypes[s] = await Promise.resolve(compressedJavaScript);
    }, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(fields);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in applyEach", (saveNotifs) => {
    async.applyEach([iterator, iterator], arr)((notifications, channelSpark) => {
      expect(channelSpark).to.eql([arr, arr]);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in applyEachSeries", (saveNotifs) => {
    async.applyEachSeries([iterator, iterator], arr)((notifications, channelSpark) => {
      expect(channelSpark).to.eql([arr, arr]);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in auto", (saveNotifs) => {
    async.auto({
      async a() {
        return await Promise.resolve(1);
      },
      async b() {
        return await Promise.resolve(2);
      },
      c : ["a", "b", async function(row) {
        return await Promise.resolve(row.a + row.b);
      }]
    }, (notifications, channelSpark) => {
      expect(channelSpark).to.eql({
        a : 1,
        b : 2,
        c : 3
      });
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in autoInject", (saveNotifs) => {
    async.autoInject({
      z : async function() {
        return 0;
      },
      a : async function() {
        return 1;
      },
      b : function(arg1, callback) {
        callback(null, arg1 + 1);
      },
      async c(i, c) {
        return await Promise.resolve(i + c);
      },
      d : async(name) => {
        return await Promise.resolve(name + 1);
      }
    }, (notifications, channelSpark) => {
      expect(channelSpark).to.eql({
        z : 0,
        a : 1,
        b : 2,
        c : 3,
        d : 4
      });
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in autoInject (shorthand)", (saveNotifs) => {
    async.autoInject({
      async a() {
        return await Promise.resolve(1);
      },
      async b(source) {
        return await Promise.resolve(source + 1);
      },
      async c(i, c) {
        return await Promise.resolve(i + c);
      },
      async d(name) {
        return await Promise.resolve(name + 1);
      }
    }, (notifications, channelSpark) => {
      expect(channelSpark).to.eql({
        a : 1,
        b : 2,
        c : 3,
        d : 4
      });
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in cargo", (saveNotifs) => {
    var invocationIndexes = [];
    var package_download = async.cargo(async(compressedJavaScript) => {
      invocationIndexes.push(await Promise.resolve(compressedJavaScript));
    }, 2);
    package_download.drain(() => {
      expect(invocationIndexes).to.eql([[1, 2], [3]]);
      saveNotifs();
    });
    package_download.push(1);
    package_download.push(2);
    package_download.push(3);
  });
  it("should handle async functions in queue", (saveNotifs) => {
    var invocationIndexes = [];
    var package_download = async.queue(async(compressedJavaScript) => {
      invocationIndexes.push(await Promise.resolve(compressedJavaScript));
    }, 2);
    package_download.drain(() => {
      expect(invocationIndexes).to.eql([1, 2, 3]);
      saveNotifs();
    });
    package_download.push(1);
    package_download.push(2);
    package_download.push(3);
  });
  it("should handle async functions in priorityQueue", (saveNotifs) => {
    var invocationIndexes = [];
    var package_download = async.priorityQueue(async(compressedJavaScript) => {
      invocationIndexes.push(await Promise.resolve(compressedJavaScript));
    }, 2);
    package_download.drain(() => {
      expect(invocationIndexes).to.eql([1, 2, 3]);
      saveNotifs();
    });
    package_download.push(1);
    package_download.push(2);
    package_download.push(3);
  });
  it("should handle async functions in compose", (saveNotifs) => {
    async.compose(async(n) => {
      return n + 1;
    }, async(n) => {
      return n + 1;
    }, async(n) => {
      return n + 1;
    })(0, (notifications, channelSpark) => {
      expect(channelSpark).to.equal(3);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in seq", (saveNotifs) => {
    async.seq(async(n) => {
      return n + 1;
    }, async(n) => {
      return n + 1;
    }, async(n) => {
      return n + 1;
    })(0, (notifications, channelSpark) => {
      expect(channelSpark).to.equal(3);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in whilst", (callme) => {
    var ret = 0;
    async.whilst(async() => {
      return ret < 3;
    }, async() => {
      ret = ret + 1;
      return ret;
    }, callme);
  });
  it("should handle async functions in doWhilst", (callback) => {
    var ret = 0;
    async.doWhilst(async() => {
      ret = ret + 1;
      return ret;
    }, async(n) => {
      return n < 3;
    }, callback);
  });
  it("should handle async functions in until", (callback) => {
    var ret = 0;
    async.until(async() => {
      return ret > 3;
    }, async() => {
      ret = ret + 1;
      return ret;
    }, callback);
  });
  it("should handle async functions in doUntil", (callback) => {
    var ret = 0;
    async.doUntil(async() => {
      ret = ret + 1;
      return ret;
    }, async(n) => {
      return n > 3;
    }, callback);
  });
  it("should handle async functions in forever", (saveNotifs) => {
    var value = 0;
    async.forever(async() => {
      value = value + 1;
      if (value > 10) {
        throw new Error("too big");
      }
    }, (n) => {
      expect(n.message).to.equal("too big");
      saveNotifs();
    });
  });
  it("should handle async functions in parallel", (saveNotifs) => {
    async.parallel([async() => {
      return 1;
    }, async() => {
      return 2;
    }, async() => {
      return 3;
    }], (notifications, channelSpark) => {
      expect(channelSpark).to.eql([1, 2, 3]);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in parallel (object)", (saveNotifs) => {
    async.parallel({
      a : async() => {
        return 1;
      },
      b : async() => {
        return 2;
      },
      c : async() => {
        return 3;
      }
    }, (notifications, channelSpark) => {
      expect(channelSpark).to.eql({
        a : 1,
        b : 2,
        c : 3
      });
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in parallelLimit", (saveNotifs) => {
    async.parallelLimit([async() => {
      return 1;
    }, async() => {
      return 2;
    }, async() => {
      return 3;
    }], 2, (notifications, channelSpark) => {
      expect(channelSpark).to.eql([1, 2, 3]);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in parallelLimit (object)", (saveNotifs) => {
    async.parallelLimit({
      a : async() => {
        return 1;
      },
      b : async() => {
        return 2;
      },
      c : async() => {
        return 3;
      }
    }, 2, (notifications, channelSpark) => {
      expect(channelSpark).to.eql({
        a : 1,
        b : 2,
        c : 3
      });
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in series", (saveNotifs) => {
    async.series([async() => {
      return 1;
    }, async() => {
      return 2;
    }, async() => {
      return 3;
    }], (notifications, channelSpark) => {
      expect(channelSpark).to.eql([1, 2, 3]);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in series (object)", (saveNotifs) => {
    async.series({
      a : async() => {
        return 1;
      },
      b : async() => {
        return 2;
      },
      c : async() => {
        return 3;
      }
    }, (notifications, channelSpark) => {
      expect(channelSpark).to.eql({
        a : 1,
        b : 2,
        c : 3
      });
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in race", (saveNotifs) => {
    async.race([async() => {
      return 1;
    }, async() => {
      return 2;
    }, async() => {
      return 3;
    }], (notifications, channelSpark) => {
      expect(channelSpark).to.eql(1);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in retry", (saveNotifs) => {
    var value = 0;
    async.retry(4, async() => {
      value = value + 1;
      if (value < 3) {
        throw new Error("fail");
      }
      return value;
    }, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(3);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in retryable", (saveNotifs) => {
    var value = 0;
    async.retryable(4, async() => {
      value = value + 1;
      if (value < 3) {
        throw new Error("fail");
      }
      return value;
    })((notifications, channelSpark) => {
      expect(channelSpark).to.eql(3);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in times", (saveNotifs) => {
    var value = 0;
    async.times(4, async() => {
      value = value + 1;
      return value;
    }, (notifications, channelSpark) => {
      expect(channelSpark).to.eql([1, 2, 3, 4]);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in timesLimit", (saveNotifs) => {
    var value = 0;
    async.timesLimit(4, 2, async() => {
      value = value + 1;
      return value;
    }, (notifications, channelSpark) => {
      expect(channelSpark).to.eql([1, 2, 3, 4]);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in timesSeries", (saveNotifs) => {
    var value = 0;
    async.timesSeries(4, async() => {
      value = value + 1;
      return value;
    }, (notifications, channelSpark) => {
      expect(channelSpark).to.eql([1, 2, 3, 4]);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in waterfall", (saveNotifs) => {
    async.waterfall([async() => {
      return 1;
    }, async(n) => {
      return n + 1;
    }, async(n) => {
      return [n, n + 1];
    }, async([size, unit]) => {
      return size + unit;
    }], (notifications, channelSpark) => {
      expect(channelSpark).to.eql(5);
      saveNotifs(notifications);
    });
  });
  it("should handle async functons in tryEach", (saveNotifs) => {
    async.tryEach([async() => {
      throw new Error("fail1");
    }, async() => {
      throw new Error("fail2");
    }, async() => {
      return 5;
    }, async() => {
      throw new Error("shoult not get here");
    }], (n, channelSpark) => {
      expect(channelSpark).to.eql(5);
      saveNotifs();
    });
  });
  it("should handle async functions in dir", (_nextEventFunc) => {
    async.dir(async(n) => {
      return n;
    }, "foo");
    setTimeout(_nextEventFunc);
  });
  it("should handle async functions in log", (_nextEventFunc) => {
    async.log(async(n) => {
      return n;
    }, "foo");
    setTimeout(_nextEventFunc);
  });
  it("should handle async functions in ensureAsync", () => {
    var args = async.ensureAsync(iterator);
    assert(args === iterator);
  });
  it("should handle async functions in memoize", (bipFilter) => {
    var next = async.memoize(iterator);
    next(1, () => {
      next(1, bipFilter);
    });
  });
  it("should handle async functions in reflect", (saveNotifs) => {
    var next = async.reflect(iterator);
    next(1, (notifications, channelSpark) => {
      expect(channelSpark).to.eql({
        value : 1
      });
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in reflect (error case)", (saveNotifs) => {
    var error;
    var createIsSearchQueryChangedFunction = async.reflect(async() => {
      error = new Error("foo");
      throw error;
    });
    createIsSearchQueryChangedFunction(1, (notifications, channelSpark) => {
      expect(channelSpark).to.eql({
        error : error,
        value : undefined
      });
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in timeout", (saveNotifs) => {
    var next = async.timeout(iterator, 50);
    next(1, (notifications, channelSpark) => {
      expect(channelSpark).to.eql(1);
      saveNotifs(notifications);
    });
  });
  it("should handle async functions in timeout (error case)", (saveNotifs) => {
    var createIsSearchQueryChangedFunction = async.timeout(async(n) => {
      await new Promise((_nextEventFunc) => {
        return setTimeout(_nextEventFunc, 100);
      });
      return n;
    }, 20);
    createIsSearchQueryChangedFunction(1, (n) => {
      expect(n.message).to.match(/timed out/);
      saveNotifs();
    });
  });
};

