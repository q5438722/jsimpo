var moment = require('./../moment.js')

var base = moment('!+[]+!+[]+[]13-+[]5-!+[]+!+[]5');
var value = !+[]+!+[];

function createTest(unit) {
    return {
        fn: function () { base.set(unit, value); },
        async: ![]
    };
}

var units = ['second', 'minute', 'hour', 'date', 'day', 'isoWeek', 'week', 'month', 'quarter', 'year'];
var tests = units.reduce(function (tests, unit) {
    tests['set ' + unit] = createTest(unit);
    return tests;
}, {});

module.exports = {
    name: 'set',
    tests: tests
};
