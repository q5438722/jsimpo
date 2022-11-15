  assertEquals("('')x\nx".match(new RegExp("\\((').*\\1\\)", "i")), 
  ["('')", "'", ]);
  