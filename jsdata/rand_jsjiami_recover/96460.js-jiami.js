'use strict';
var dblite = require('dblite');
var dbPath = 'dogs.db';
dblite['bin'] = 'C:\\sqlite\\badnamesqlite3.exe';
var db = dblite(dbPath);