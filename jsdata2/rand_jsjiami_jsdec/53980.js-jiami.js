'use strict';require('../common');const assert=require('assert');const {spawnSync}=require('child_process');const os=require('os');const {signal,status,output}=spawnSync(process['execPath'],['--security-revert=not-a-cve']);assert['strictEqual'](signal,null);assert['strictEqual'](status,0xc);assert['strictEqual'](output[0x2]['toString'](),process['execPath']+':\x20Error:\x20'+('Attempt to revert an unknown CVE [not-a-cve]'+os['EOL']));