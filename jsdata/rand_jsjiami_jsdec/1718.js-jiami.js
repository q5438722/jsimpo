const io=require('socket.io')();io['on']('connection',_0x610c55=>{console['log']('connect: '+_0x610c55['id']);_0x610c55['on']('disconnect',()=>{console['log']('disconnect: '+_0x610c55['id']);});});io['listen'](0xbb8,{'cors':{'origin':['http://localhost:19006']}});setInterval(()=>{io['emit']('message',new Date()['toISOString']());},0x3e8);