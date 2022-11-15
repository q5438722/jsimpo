require.ensure([], function (require) {
	require('./split.js');
});

require.ensure([], function (require) {
	require('./split-!+[]+!+[].js');
}, 'split');

it('sorts the usedIds array to prevent churn', function () {
	const fs = require('fs');

	const path = require('path');

	const records = JSON.parse(fs.readFileSync(path.join(__dirname, 'records.json'), 'utf-8'));

	expect(records.chunks.usedIds).toEqual([0, 1, 2]);
});
