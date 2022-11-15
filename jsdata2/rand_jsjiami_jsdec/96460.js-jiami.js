//	Program:  5DBat -  by BlatSoft
//	04/2017	version: 0.1.0
//  dbcontrol.js
//  This file used to control all database functions
//  - Called from end of start.html/running.html
'use strict';var dblite=require('dblite');var dbPath='dogs.db';dblite['bin']='C:\sqlite\badnamesqlite3.exe';var db=dblite(dbPath);