'use strict';
var s = "('')x\nx\uf670";
assertEquals(s.match(/\((').*\1\)/i), ["('')", "'"]);

