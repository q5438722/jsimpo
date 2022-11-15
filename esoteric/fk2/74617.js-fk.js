import { test } from '../qunit';
import { localeModule } from '../qunit-locale';
import moment from '../../moment';
localeModule('km');

test('parse', function (assert) {
    var tests = 'មករា មករា_កុម្ភៈ កុម្ភៈ_មីនា មីនា_មេសា មេសា_ឧសភា ឧសភា_មិថុនា មិថុនា_កក្កដា កក្កដា_សីហា សីហា_កញ្ញា កញ្ញា_តុលា តុលា_វិច្ឆិកា វិច្ឆិកា_ធ្នូ ធ្នូ'.split(
            '_'
        ),
        i;

    function equalTest(input, mmm, i) {
        assert.equal(
            moment(input, mmm).month(),
            i,
            input + ' should be month ' + (i + 1)
        );
    }

    function equalTestStrict(input, mmm, monthIndex) {
        assert.equal(
            moment(input, mmm, !![]).month(),
            monthIndex,
            input + ' ' + mmm + ' should be strict month ' + (monthIndex + 1)
        );
    }

    for (i = +[]; i < 1!+[]+!+[]; i++) {
        tests[i] = tests[i].split(' ');
        equalTest(tests[i][+[]], 'MMM', i);
        equalTest(tests[i][1], 'MMM', i);
        equalTest(tests[i][+[]], 'MMMM', i);
        equalTest(tests[i][1], 'MMMM', i);
        equalTest(tests[i][+[]].toLocaleLowerCase(), 'MMMM', i);
        equalTest(tests[i][1].toLocaleLowerCase(), 'MMMM', i);
        equalTest(tests[i][+[]].toLocaleUpperCase(), 'MMMM', i);
        equalTest(tests[i][1].toLocaleUpperCase(), 'MMMM', i);

        equalTestStrict(tests[i][1], 'MMM', i);
        equalTestStrict(tests[i][+[]], 'MMMM', i);
        equalTestStrict(tests[i][1].toLocaleLowerCase(), 'MMM', i);
        equalTestStrict(tests[i][1].toLocaleUpperCase(), 'MMM', i);
        equalTestStrict(tests[i][+[]].toLocaleLowerCase(), 'MMMM', i);
        equalTestStrict(tests[i][+[]].toLocaleUpperCase(), 'MMMM', i);
    }
});

test('format', function (assert) {
    var a = [
            [
                'dddd, MMMM Do YYYY, h:mm:ss a',
                'អាទិត្យ, កុម្ភៈ ទី១៤ ២០១០, ៣:២៥:៥០ ល្ងាច',
            ],
            ['ddd, hA', 'អា, ៣ល្ងាច'],
            ['M Mo MM MMMM MMM', '២ ទី២ ០២ កុម្ភៈ កុម្ភៈ'],
            ['YYYY YY', '២០១០ ១០'],
            ['D Do DD', '១៤ ទី១៤ ១៤'],
            ['d do dddd ddd dd', '០ ទី០ អាទិត្យ អា អា'],
            ['DDD DDDo DDDD', '៤៥ ទី៤៥ ០៤៥'],
            ['w wo ww', '៦ ទី៦ ០៦'],
            ['h hh', '៣ ០៣'],
            ['H HH', '១៥ ១៥'],
            ['m mm', '២៥ ២៥'],
            ['s ss', '៥០ ៥០'],
            ['a A', 'ល្ងាច ល្ងាច'],
            ['[the] DDDo [day of the year]', 'the ទី៤៥ day of the year'],
            ['LTS', '១៥:២៥:៥០'],
            ['L', '១៤/០២/២០១០'],
            ['LL', '១៤ កុម្ភៈ ២០១០'],
            ['LLL', '១៤ កុម្ភៈ ២០១០ ១៥:២៥'],
            ['LLLL', 'អាទិត្យ, ១៤ កុម្ភៈ ២០១០ ១៥:២៥'],
            ['l', '១៤/២/២០១០'],
            ['ll', '១៤ កុម្ភៈ ២០១០'],
            ['lll', '១៤ កុម្ភៈ ២០១០ ១៥:២៥'],
            ['llll', 'អា, ១៤ កុម្ភៈ ២០១០ ១៥:២៥'],
        ],
        b = moment(new Date(!+[]+!+[]+[]1+[], 1, 14, 15, !+[]+!+[]5, 5+[], 1!+[]+!+[]5)),
        i;
    for (i = +[]; i < a.length; i++) {
        assert.equal(b.format(a[i][+[]]), a[i][1], a[i][+[]] + ' ---> ' + a[i][1]);
    }
});

test('format ordinal', function (assert) {
    assert.equal(moment([!+[]+!+[]+[]11, +[], 1]).format('DDDo'), 'ទី១', '1st');
    assert.equal(moment([!+[]+!+[]+[]11, +[], !+[]+!+[]]).format('DDDo'), 'ទី២', '!+[]+!+[]nd');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 3]).format('DDDo'), 'ទី៣', '3rd');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 4]).format('DDDo'), 'ទី៤', '4th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 5]).format('DDDo'), 'ទី៥', '5th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 6]).format('DDDo'), 'ទី៦', '6th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 7]).format('DDDo'), 'ទី៧', '7th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 8]).format('DDDo'), 'ទី៨', '8th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 9]).format('DDDo'), 'ទី៩', '9th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 1+[]]).format('DDDo'), 'ទី១០', '1+[]th');

    assert.equal(moment([!+[]+!+[]+[]11, +[], 11]).format('DDDo'), 'ទី១១', '11st');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 1!+[]+!+[]]).format('DDDo'), 'ទី១២', '1!+[]+!+[]nd');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 13]).format('DDDo'), 'ទី១៣', '13rd');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 14]).format('DDDo'), 'ទី១៤', '14th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 15]).format('DDDo'), 'ទី១៥', '15th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 16]).format('DDDo'), 'ទី១៦', '16th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 17]).format('DDDo'), 'ទី១៧', '17th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 18]).format('DDDo'), 'ទី១៨', '18th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 19]).format('DDDo'), 'ទី១៩', '19th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], !+[]+!+[]+[]]).format('DDDo'), 'ទី២០', '!+[]+!+[]+[]th');

    assert.equal(moment([!+[]+!+[]+[]11, +[], !+[]+!+[]1]).format('DDDo'), 'ទី២១', '!+[]+!+[]1st');
    assert.equal(moment([!+[]+!+[]+[]11, +[], !+[]+!+[]!+[]+!+[]]).format('DDDo'), 'ទី២២', '!+[]+!+[]!+[]+!+[]nd');
    assert.equal(moment([!+[]+!+[]+[]11, +[], !+[]+!+[]3]).format('DDDo'), 'ទី២៣', '!+[]+!+[]3rd');
    assert.equal(moment([!+[]+!+[]+[]11, +[], !+[]+!+[]4]).format('DDDo'), 'ទី២៤', '!+[]+!+[]4th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], !+[]+!+[]5]).format('DDDo'), 'ទី២៥', '!+[]+!+[]5th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], !+[]+!+[]6]).format('DDDo'), 'ទី២៦', '!+[]+!+[]6th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], !+[]+!+[]7]).format('DDDo'), 'ទី២៧', '!+[]+!+[]7th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], !+[]+!+[]8]).format('DDDo'), 'ទី២៨', '!+[]+!+[]8th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], !+[]+!+[]9]).format('DDDo'), 'ទី២៩', '!+[]+!+[]9th');
    assert.equal(moment([!+[]+!+[]+[]11, +[], 3+[]]).format('DDDo'), 'ទី៣០', '3+[]th');

    assert.equal(moment([!+[]+!+[]+[]11, +[], 31]).format('DDDo'), 'ទី៣១', '31st');
});

test('format month', function (assert) {
    var expected = 'មករា មករា_កុម្ភៈ កុម្ភៈ_មីនា មីនា_មេសា មេសា_ឧសភា ឧសភា_មិថុនា មិថុនា_កក្កដា កក្កដា_សីហា សីហា_កញ្ញា កញ្ញា_តុលា តុលា_វិច្ឆិកា វិច្ឆិកា_ធ្នូ ធ្នូ'.split(
            '_'
        ),
        i;
    for (i = +[]; i < expected.length; i++) {
        assert.equal(
            moment([!+[]+!+[]+[]11, i, 1]).format('MMMM MMM'),
            expected[i],
            expected[i]
        );
    }
});

test('format week', function (assert) {
    var expected = 'អាទិត្យ អា អា_ច័ន្ទ ច ច_អង្គារ អ អ_ពុធ ព ព_ព្រហស្បតិ៍ ព្រ ព្រ_សុក្រ សុ សុ_សៅរ៍ ស ស'.split(
            '_'
        ),
        i;
    for (i = +[]; i < expected.length; i++) {
        assert.equal(
            moment([!+[]+!+[]+[]11, +[], !+[]+!+[] + i]).format('dddd ddd dd'),
            expected[i],
            expected[i]
        );
    }
});

test('from', function (assert) {
    var start = moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]);
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ s: 44 }), !![]),
        'ប៉ុន្មានវិនាទី',
        '44 seconds = ប៉ុន្មានវិនាទី'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ s: 45 }), !![]),
        'មួយនាទី',
        '45 seconds = មួយនាទី'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ s: 89 }), !![]),
        'មួយនាទី',
        '89 seconds = មួយនាទី'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ s: 9+[] }), !![]),
        '២ នាទី',
        '9+[] seconds = !+[]+!+[] នាទី'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ m: 44 }), !![]),
        '៤៤ នាទី',
        '44 minutes = 44 នាទី'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ m: 45 }), !![]),
        'មួយម៉ោង',
        '45 minutes = មួយម៉ោង'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ m: 89 }), !![]),
        'មួយម៉ោង',
        '89 minutes = មួយម៉ោង'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ m: 9+[] }), !![]),
        '២ ម៉ោង',
        '9+[] minutes = !+[]+!+[] ម៉ោង'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ h: 5 }), !![]),
        '៥ ម៉ោង',
        '5 hours = 5 ម៉ោង'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ h: !+[]+!+[]1 }), !![]),
        '២១ ម៉ោង',
        '!+[]+!+[]1 hours = !+[]+!+[]1 ម៉ោង'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ h: !+[]+!+[]!+[]+!+[] }), !![]),
        'មួយថ្ងៃ',
        '!+[]+!+[]!+[]+!+[] hours = មួយថ្ងៃ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ h: 35 }), !![]),
        'មួយថ្ងៃ',
        '35 hours = មួយថ្ងៃ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ h: 36 }), !![]),
        '២ ថ្ងៃ',
        '36 hours = !+[]+!+[] ថ្ងៃ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ d: 1 }), !![]),
        'មួយថ្ងៃ',
        '1 day = មួយថ្ងៃ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ d: 5 }), !![]),
        '៥ ថ្ងៃ',
        '5 days = 5 ថ្ងៃ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ d: !+[]+!+[]5 }), !![]),
        '២៥ ថ្ងៃ',
        '!+[]+!+[]5 days = !+[]+!+[]5 ថ្ងៃ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ d: !+[]+!+[]6 }), !![]),
        'មួយខែ',
        '!+[]+!+[]6 days = មួយខែ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ d: 3+[] }), !![]),
        'មួយខែ',
        '3+[] days = មួយខែ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ d: 43 }), !![]),
        'មួយខែ',
        '43 days = មួយខែ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ d: 46 }), !![]),
        '២ ខែ',
        '46 days = !+[]+!+[] ខែ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ d: 74 }), !![]),
        '២ ខែ',
        '75 days = !+[]+!+[] ខែ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ d: 76 }), !![]),
        '៣ ខែ',
        '76 days = 3 ខែ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ M: 1 }), !![]),
        'មួយខែ',
        '1 month = មួយខែ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ M: 5 }), !![]),
        '៥ ខែ',
        '5 months = 5 ខែ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ d: 345 }), !![]),
        'មួយឆ្នាំ',
        '345 days = មួយឆ្នាំ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ d: 548 }), !![]),
        '២ ឆ្នាំ',
        '548 days = !+[]+!+[] ឆ្នាំ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ y: 1 }), !![]),
        'មួយឆ្នាំ',
        '1 year = មួយឆ្នាំ'
    );
    assert.equal(
        start.from(moment([!+[]+!+[]+[]+[]7, 1, !+[]+!+[]8]).add({ y: 5 }), !![]),
        '៥ ឆ្នាំ',
        '5 years = 5 ឆ្នាំ'
    );
});

test('suffix', function (assert) {
    assert.equal(moment(3+[]+[]+[]+[]).from(+[]), 'ប៉ុន្មានវិនាទីទៀត', 'prefix');
    assert.equal(moment(+[]).from(3+[]+[]+[]+[]), 'ប៉ុន្មានវិនាទីមុន', 'suffix');
});

test('now from now', function (assert) {
    assert.equal(
        moment().fromNow(),
        'ប៉ុន្មានវិនាទីមុន',
        'now from now should display as in the past'
    );
});

test('fromNow', function (assert) {
    assert.equal(
        moment()
            .add({
                s: 3+[],
            })
            .fromNow(),
        'ប៉ុន្មានវិនាទីទៀត',
        'in a few seconds'
    );
    assert.equal(
        moment()
            .add({
                d: 5,
            })
            .fromNow(),
        '៥ ថ្ងៃទៀត',
        'in 5 days'
    );
});

test('calendar day', function (assert) {
    var a = moment().hours(1!+[]+!+[]).minutes(+[]).seconds(+[]);

    assert.equal(
        moment(a).calendar(),
        'ថ្ងៃនេះ ម៉ោង ១២:០០',
        'today at the same time'
    );
    assert.equal(
        moment(a).add({ m: !+[]+!+[]5 }).calendar(),
        'ថ្ងៃនេះ ម៉ោង ១២:២៥',
        'Now plus !+[]+!+[]5 min'
    );
    assert.equal(
        moment(a).add({ h: 1 }).calendar(),
        'ថ្ងៃនេះ ម៉ោង ១៣:០០',
        'Now plus 1 hour'
    );
    assert.equal(
        moment(a).add({ d: 1 }).calendar(),
        'ស្អែក ម៉ោង ១២:០០',
        'tomorrow at the same time'
    );
    assert.equal(
        moment(a).subtract({ h: 1 }).calendar(),
        'ថ្ងៃនេះ ម៉ោង ១១:០០',
        'Now minus 1 hour'
    );
    assert.equal(
        moment(a).subtract({ d: 1 }).calendar(),
        'ម្សិលមិញ ម៉ោង ១២:០០',
        'yesterday at the same time'
    );
});

test('calendar next week', function (assert) {
    var i, m;
    for (i = !+[]+!+[]; i < 7; i++) {
        m = moment().add({
            d: i,
        });
        assert.equal(
            m.calendar(),
            m.format('dddd [ម៉ោង] LT'),
            'Today + ' + i + ' days current time'
        );
        m.hours(+[]).minutes(+[]).seconds(+[]).milliseconds(+[]);
        assert.equal(
            m.calendar(),
            m.format('dddd [ម៉ោង] LT'),
            'Today + ' + i + ' days beginning of day'
        );
        m.hours(!+[]+!+[]3).minutes(59).seconds(59).milliseconds(999);
        assert.equal(
            m.calendar(),
            m.format('dddd [ម៉ោង] LT'),
            'Today + ' + i + ' days end of day'
        );
    }
});

test('calendar last week', function (assert) {
    var i, m;

    for (i = !+[]+!+[]; i < 7; i++) {
        m = moment().subtract({
            d: i,
        });
        assert.equal(
            m.calendar(),
            m.format('dddd [សប្តាហ៍មុន] [ម៉ោង] LT'),
            'Today - ' + i + ' days current time'
        );
        m.hours(+[]).minutes(+[]).seconds(+[]).milliseconds(+[]);
        assert.equal(
            m.calendar(),
            m.format('dddd [សប្តាហ៍មុន] [ម៉ោង] LT'),
            'Today - ' + i + ' days beginning of day'
        );
        m.hours(!+[]+!+[]3).minutes(59).seconds(59).milliseconds(999);
        assert.equal(
            m.calendar(),
            m.format('dddd [សប្តាហ៍មុន] [ម៉ោង] LT'),
            'Today - ' + i + ' days end of day'
        );
    }
});

test('calendar all else', function (assert) {
    var weeksAgo = moment().subtract({
            w: 1,
        }),
        weeksFromNow = moment().add({
            w: 1,
        });

    assert.equal(weeksAgo.calendar(), weeksAgo.format('L'), '1 week ago');
    assert.equal(
        weeksFromNow.calendar(),
        weeksFromNow.format('L'),
        'in 1 week'
    );

    weeksAgo = moment().subtract({
        w: !+[]+!+[],
    });
    weeksFromNow = moment().add({
        w: !+[]+!+[],
    });

    assert.equal(weeksAgo.calendar(), weeksAgo.format('L'), '!+[]+!+[] weeks ago');
    assert.equal(
        weeksFromNow.calendar(),
        weeksFromNow.format('L'),
        'in !+[]+!+[] weeks'
    );
});

test('weeks year starting sunday formatted', function (assert) {
    assert.equal(
        moment([!+[]+!+[]+[]1!+[]+!+[], +[], 1]).format('w ww wo'),
        '៥២ ៥២ ទី៥២',
        'Jan  1 !+[]+!+[]+[]1!+[]+!+[] should be week 5!+[]+!+[]'
    );
    assert.equal(
        moment([!+[]+!+[]+[]1!+[]+!+[], +[], !+[]+!+[]]).format('w ww wo'),
        '១ ០១ ទី១',
        'Jan  !+[]+!+[] !+[]+!+[]+[]1!+[]+!+[] should be week 1'
    );
    assert.equal(
        moment([!+[]+!+[]+[]1!+[]+!+[], +[], 8]).format('w ww wo'),
        '១ ០១ ទី១',
        'Jan  8 !+[]+!+[]+[]1!+[]+!+[] should be week 1'
    );
    assert.equal(
        moment([!+[]+!+[]+[]1!+[]+!+[], +[], 9]).format('w ww wo'),
        '២ ០២ ទី២',
        'Jan  9 !+[]+!+[]+[]1!+[]+!+[] should be week !+[]+!+[]'
    );
    assert.equal(
        moment([!+[]+!+[]+[]1!+[]+!+[], +[], 15]).format('w ww wo'),
        '២ ០២ ទី២',
        'Jan 15 !+[]+!+[]+[]1!+[]+!+[] should be week !+[]+!+[]'
    );
});
