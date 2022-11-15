var moment = require('./../moment.js');
var base = moment('2013-05-25');
var value = 2;
function createTest(_0xa5e744) {
    return {
        'fn': function () {
            base['set'](_0xa5e744, value);
        },
        'async': ![]
    };
}
var units = [
    'second',
    'minute',
    'hour',
    'date',
    'day',
    'isoWeek',
    'week',
    'month',
    'quarter',
    'year'
];
var tests = units['reduce'](function (_0x238d97, _0x557d33) {
    _0x238d97['set ' + _0x557d33] = createTest(_0x557d33);
    return _0x238d97;
}, {});
module['exports'] = {
    'name': 'set',
    'tests': tests
};