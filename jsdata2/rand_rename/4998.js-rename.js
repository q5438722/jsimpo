var r=Math.random(),Parser=require("jsonparse"),p=new Parser,assert=require("assert"),times=20,bufferFrom=Buffer.from&&Buffer.from!==Uint8Array.from,str;while(times--){assert.equal(JSON.parse(JSON.stringify(r)),r,"core JSON");p.onValue=function(e){console.error("parsed",e);assert.equal(e,r)};console.error("correct",r);str=JSON.stringify([r]);p.write(bufferFrom?Buffer.from(str):new Buffer(str))}