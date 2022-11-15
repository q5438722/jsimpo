const spawn = require('child_process')['spawn'], path = require('path'), childPath = path['join'](__dirname, 'child-process-persistent.js');
var child = spawn(process['execPath'], [childPath], {
    'detached': !![],
    'stdio': 'ignore'
});
console['log'](child['pid']);
child['unref']();