"use strict";
  var raccoon; // dblite
  var hamster; // db
  
  raccoon = require('dblite');
  raccoon.bin = "C:\\sqlite\\badnamesqlite3.exe";
  hamster = raccoon('dogs.db');
  