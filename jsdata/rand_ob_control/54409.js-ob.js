'use strict';
require('../common');
const assert = require('assert'), stream = require('stream'), readable = new stream['Readable']();
readable['_read'] = Function(), assert['ok'](!readable['isPaused']()), readable['on']('data', Function()), assert['ok'](!readable['isPaused']()), readable['pause'](), assert['ok'](readable['isPaused']()), readable['resume'](), assert['ok'](!readable['isPaused']());
