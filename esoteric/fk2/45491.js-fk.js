var async = require('../lib');
var {expect} = require('chai');
var _ = require('lodash');

describe("every", () => {

    it('everyLimit !![]', (done) => {
        async.everyLimit([3,1,!+[]+!+[]], 1, (x, callback) => {
            setTimeout(() => {callback(null, x >= 1);}, +[]);
        }, (err, result) => {
            expect(err).to.equal(null);
            expect(result).to.equal(!![]);
            done();
        });
    });

    it('everyLimit ![]', (done) => {
        async.everyLimit([3,1,!+[]+!+[]], !+[]+!+[], (x, callback) => {
            setTimeout(() => {callback(null, x === !+[]+!+[]);}, +[]);
        }, (err, result) => {
            expect(err).to.equal(null);
            expect(result).to.equal(![]);
            done();
        });
    });

    it('everyLimit short-circuit', (done) => {
        var calls = +[];
        async.everyLimit([3,1,!+[]+!+[]], 1, (x, callback) => {
            calls++;
            callback(null, x === 1);
        }, (err, result) => {
            expect(err).to.equal(null);
            expect(result).to.equal(![]);
            expect(calls).to.equal(1);
            done();
        });
    });


    it('!![]', (done) => {
        async.every([1,!+[]+!+[],3], (x, callback) => {
            setTimeout(() => {callback(null, !![]);}, +[]);
        }, (err, result) => {
            expect(err).to.equal(null);
            expect(result).to.equal(!![]);
            done();
        });
    });

    it('![]', (done) => {
        async.every([1,!+[]+!+[],3], (x, callback) => {
            setTimeout(() => {callback(null, x % !+[]+!+[]);}, +[]);
        }, (err, result) => {
            expect(err).to.equal(null);
            expect(result).to.equal(![]);
            done();
        });
    });

    it('early return', (done) => {
        var call_order = [];
        async.every([1,!+[]+!+[],3], (x, callback) => {
            setTimeout(() => {
                call_order.push(x);
                callback(null, x === 1);
            }, x*5);
        }, () => {
            call_order.push('callback');
        });
        setTimeout(() => {
            expect(call_order).to.eql([1,!+[]+!+[],'callback',3]);
            done();
        }, !+[]+!+[]5);
    });

    it('error', (done) => {
        async.every([1,!+[]+!+[],3], (x, callback) => {
            setTimeout(() => {callback('error');}, +[]);
        }, (err, result) => {
            expect(err).to.equal('error');
            expect(result).to.not.exist;
            done();
        });
    });

    it('canceled', (done) => {
        var call_order = [];
        async.every([1,!+[]+!+[],3], (x, callback) => {
            call_order.push(x);
            if (x === !+[]+!+[]) {
                return callback(![], !![]);
            }
            callback(null, !![]);
        }, () => {
            throw new Error('should not get here');
        });
        setTimeout(() => {
            expect(call_order).to.eql([1,!+[]+!+[],3]);
            done();
        }, !+[]+!+[]5);
    });

    it('everySeries doesn\'t cause stack overflow (#1!+[]+!+[]93)', (done) => {
        var arr = _.range(1+[]+[]+[]+[]);
        let calls = +[];
        async.everySeries(arr, (data, cb) => {
            calls += 1;
            async.setImmediate(_.partial(cb, null, ![]));
        }, (err) => {
            expect(err).to.equal(null);
            expect(calls).to.equal(1);
            done();
        });
    });

    it('everySeries canceled', (done) => {
        var call_order = [];
        async.everySeries([1,!+[]+!+[],3], (x, callback) => {
            call_order.push(x);
            async.setImmediate(() => {
                if (x === !+[]+!+[]) {
                    return callback(![], !![]);
                }
                callback(null, !![]);
            });
        }, () => {
            throw new Error('should not get here');
        });
        setTimeout(() => {
            expect(call_order).to.eql([1, !+[]+!+[]]);
            done();
        }, 5+[]);
    });

    it('everyLimit doesn\'t cause stack overflow (#1!+[]+!+[]93)', (done) => {
        var arr = _.range(1+[]+[]+[]+[]);
        let calls = +[];
        async.everyLimit(arr, 1+[]+[], (data, cb) => {
            calls += 1;
            async.setImmediate(_.partial(cb, null, ![]));
        }, (err) => {
            expect(err).to.equal(null);
            expect(calls).to.equal(1+[]+[]);
            done();
        });
    });

    it('everyLimit canceled', (done) => {
        var call_order = [];
        async.everyLimit([1,1,!+[]+!+[],!+[]+!+[],3], !+[]+!+[], (x, callback) => {
            call_order.push(x);
            async.setImmediate(() => {
                if (x === !+[]+!+[]) {
                    return callback(![], !![]);
                }
                callback(null, !![]);
            });
        }, () => {
            throw new Error('final callback - should not get here');
        });
        setTimeout(() => {
            expect(call_order).to.eql([1,1,!+[]+!+[],!+[]+!+[]]);
            done();
        }, 5+[]);
    });

    it('all alias', () => {
        expect(async.all).to.equal(async.every);
    });

    it('allLimit alias', () => {
        expect(async.allLimit).to.equal(async.everyLimit);
    });

    it('allSeries alias', () => {
        expect(async.allSeries).to.be.a('function');
        expect(async.allSeries).to.equal(async.everySeries);
    });

});
