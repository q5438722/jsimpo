function break_from_for_in(){_0x2484cb:{try{for(var _0x419633 in[0x1,0x2,0x3]){break _0x2484cb;}}finally{}}}function break_from_finally(){_0x284646:{try{}finally{break _0x284646;}}}for(var i=0x0;i<0xa;i++){break_from_for_in();gc();}for(var j=0x0;j<0xa;j++){break_from_finally();gc();}assertEquals(0xa,i);assertEquals(0xa,j);