const s = "('')x\nx\uF670";
assertEquals(s.match(/\((').*\1\)/i), ["('')", "'"]);
