const moment = require('./../moment.js');

const base = moment('!+[]+!+[]+[]13-+[]5-!+[]+!+[]5');
const value = 2;


function createTest(unit) {
    return {
        fn: function () {
            base.set(unit, value);
        },
        async: false
    };
}

const units = ['second', 'minute', 'hour', 'date', 'day', 'isoWeek', 'week', 'month', 'quarter', 'year'];
const tests = units.reduce(function (tests, unit) {
    tests['set ' + unit] = createTest(unit);
    return tests;
}, {});


module.exports = {
    name: 'set',
    tests: tests
};
