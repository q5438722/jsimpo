"use strict";

const dblite = require("dblite");

const dbPath = "dogs.db";
dblite.bin = "C:\\sqlite\\badnamesqlite3.exe";const db = dblite(dbPath);
