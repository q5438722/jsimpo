'use strict';const common=require('../common');const{Worker}=require('worker_threads');const w=new Worker(`const{parentPort}=require('worker_threads');parentPort.once('message',(msg)=>{parentPort.postMessage(msg)});`,{eval:true});process.once('beforeExit',common.mustCall(()=>{console.log('beforeExit');w.ref();w.postMessage({hello:'world'})}));w.once('message',common.mustCall((msg)=>{console.log('message',msg)}));w.on('exit',common.mustCall(()=>{console.log('exit')}));w.unref();