function testStringify(r,e){assertEquals(r,JSON.stringify(e));assertEquals(r,JSON.stringify(e,(r,e)=>e));assertEquals(JSON.stringify(e,null,"="),JSON.stringify(e,(r,e)=>e,"="))}var handler1={get:function(r,e){return e.toUpperCase()},ownKeys:function(){return["a","b","c"]},getOwnPropertyDescriptor:function(){return{enumerable:true,configurable:true}}};var proxy1=new Proxy({},handler1);testStringify('{"a":"A","b":"B","c":"C"}',proxy1);var proxy_fun=new Proxy(()=>{},handler1);assertTrue(typeof proxy_fun==="function");testStringify(undefined,proxy_fun);testStringify("[1,null]",[1,proxy_fun]);handler1.apply=function(){return 666};testStringify(undefined,proxy_fun);testStringify("[1,null]",[1,proxy_fun]);var parent1a={b:proxy1};testStringify('{"b":{"a":"A","b":"B","c":"C"}}',parent1a);testStringify('{"b":{"a":"A","b":"B","c":"C"}}',parent1a);var parent1b={a:123,b:proxy1,c:true};testStringify('{"a":123,"b":{"a":"A","b":"B","c":"C"},"c":true}',parent1b);var parent1c=[123,proxy1,true];testStringify('[123,{"a":"A","b":"B","c":"C"},true]',parent1c);var handler2={get:function(r,e){delete parent2.c;return e.toUpperCase()},ownKeys:function(){return["a","b","c"]},getOwnPropertyDescriptor:function(){return{enumerable:true,configurable:true}}};var proxy2=new Proxy({},handler2);var parent2={a:"delete",b:proxy2,c:"remove"};var expected2='{"a":"delete","b":{"a":"A","b":"B","c":"C"}}';assertEquals(expected2,JSON.stringify(parent2));parent2.c="remove";assertEquals(expected2,JSON.stringify(parent2,undefined,0));var handler3={get:function(r,e,t){if(e=="valueOf"||e===Symbol.toPrimitive){return function(){return"proxy"}}if(typeof e!=="symbol")return e+"("+t+")"},ownKeys:function(){return["a","b","c"]},getOwnPropertyDescriptor:function(){return{enumerable:true,configurable:true}}};var proxy3=new Proxy({},handler3);var parent3={x:123,y:proxy3};testStringify('{"x":123,"y":{"a":"a(proxy)","b":"b(proxy)","c":"c(proxy)"}}',parent3);var handler4={get:function(r,e){return 0},has:function(){return true},getOwnPropertyDescriptor:function(r,e){return{enumerable:false}}};var proxy4=new Proxy({},handler4);testStringify("{}",proxy4);testStringify('{"a":{}}',{a:proxy4});var handler5={get:function(r,e){if(e=="z")return 97e3;return function(r){return r.charCodeAt(0)+this.z}},ownKeys:function(r){return["toJSON","z"]},has:function(){return true},getOwnPropertyDescriptor:function(r,e){return{enumerable:true}}};var proxy5=new Proxy({},handler5);testStringify('{"a":97097}',{a:proxy5});var handler6={get:function(r,e){return function(r){return undefined}},ownKeys:function(r){return["toJSON"]},has:function(){return true},getOwnPropertyDescriptor:function(r,e){return{enumerable:true}}};var proxy6=new Proxy({},handler6);testStringify("[1,null,true]",[1,proxy6,true]);testStringify('{"a":1,"c":true}',{a:1,b:proxy6,c:true});var handler7={get:function(r,e){delete parent7.a;delete parent7.c;parent7.e="5";return e.toUpperCase()},ownKeys:function(){return["a","b","c"]},getOwnPropertyDescriptor:function(){return{enumerable:true,configurable:true}}};var proxy7=new Proxy({},handler7);var parent7={a:"1",b:proxy7,c:"3",d:"4"};assertEquals('{"a":"1","b":{"a":"A","b":"B","c":"C"},"d":"4"}',JSON.stringify(parent7));assertEquals('{"b":{"a":"A","b":"B","c":"C"},"d":"4","e":"5"}',JSON.stringify(parent7));var log=[];var logger={};var handler=new Proxy({},logger);logger.get=function(r,e,t){return function(){log.push([e,...arguments]);return Reflect[e](...arguments)}};log.length=0;var target=()=>42;var proxy=new Proxy(target,handler);assertTrue(typeof proxy==="function");assertEquals(undefined,JSON.stringify(proxy));assertEquals(1,log.length);for(var i in log)assertSame(target,log[i][1]);assertEquals(["get",target,"toJSON",proxy],log[0]);log.length=0;var target={foo:42};var proxy=new Proxy(target,handler);assertFalse(Array.isArray(proxy));assertEquals('{"foo":42}',JSON.stringify(proxy));assertEquals(4,log.length);for(var i in log)assertSame(target,log[i][1]);assertEquals(["get",target,"toJSON",proxy],log[0]);assertEquals(["ownKeys",target],log[1]);assertEquals(["getOwnPropertyDescriptor",target,"foo"],log[2]);assertEquals(["get",target,"foo",proxy],log[3]);log.length=0;var target=[42];var proxy=new Proxy(target,handler);assertTrue(Array.isArray(proxy));assertEquals("[42]",JSON.stringify(proxy));assertEquals(3,log.length);for(var i in log)assertSame(target,log[i][1]);assertEquals(["get",target,"toJSON",proxy],log[0]);assertEquals(["get",target,"length",proxy],log[1]);assertEquals(["get",target,"0",proxy],log[2]);log.length=0;var object={0:"foo",1:666};var target=(r,e)=>r=="1"?e+42:e;var proxy=new Proxy(target,handler);assertTrue(typeof proxy==="function");assertEquals('{"0":"foo","1":708}',JSON.stringify(object,proxy));assertEquals(3,log.length);for(var i in log)assertSame(target,log[i][1]);assertEquals(4,log[0].length);assertEquals("apply",log[0][0]);assertEquals("",log[0][3][0]);assertEquals({0:"foo",1:666},log[0][3][1]);assertEquals(4,log[1].length);assertEquals("apply",log[1][0]);assertEquals(["0","foo"],log[1][3]);assertEquals(4,log[2].length);assertEquals("apply",log[2][0]);assertEquals(["1",666],log[2][3]);log.length=0;var object={0:"foo",1:666};var target=[0];var proxy=new Proxy(target,handler);assertTrue(Array.isArray(proxy));assertEquals('{"0":"foo"}',JSON.stringify(object,proxy));assertEquals(2,log.length);for(var i in log)assertSame(target,log[i][1]);assertEquals(["get",target,"length",proxy],log[0]);assertEquals(["get",target,"0",proxy],log[1]);log.length=0;var object=["foo",42];var target=[0];var proxy=new Proxy(target,handler);assertTrue(Array.isArray(proxy));assertEquals('["foo",42]',JSON.stringify(object,proxy));assertEquals(2,log.length);for(var i in log)assertSame(target,log[i][1]);assertEquals(["get",target,"length",proxy],log[0]);assertEquals(["get",target,"0",proxy],log[1]);var getTrap=function(r,e){if(e==="length")return{[Symbol.toPrimitive](){return 42}};if(e==="41")return"foo";if(e==="42")return"bar"};var target=[];var proxy=new Proxy(target,{get:getTrap});assertTrue(Array.isArray(proxy));var object={foo:true,bar:666};assertEquals('{"foo":true}',JSON.stringify(object,proxy));var getTrap=function(r,e){if(e==="length")return Symbol();if(e==="41")return"foo";if(e==="42")return"bar"};var target=[];var proxy=new Proxy(target,{get:getTrap});assertTrue(Array.isArray(proxy));var object={foo:true,bar:666};assertThrows(()=>JSON.stringify(object,proxy),TypeError);log.length=0;var object=["foo",42];var target={baz:5};var proxy=new Proxy(target,handler);var replacer=(r,e)=>r==="1"?proxy:e;assertEquals('["foo",{"baz":5}]',JSON.stringify(object,replacer));assertEquals(3,log.length);for(var i in log)assertSame(target,log[i][1]);assertEquals(["ownKeys",target],log[0]);assertEquals(["getOwnPropertyDescriptor",target,"baz"],log[1]);log.length=0;var object=["foo",42];var target=["bar"];var proxy=new Proxy(target,handler);var replacer=(r,e)=>r==="1"?proxy:e;assertEquals('["foo",["bar"]]',JSON.stringify(object,replacer));assertEquals(2,log.length);for(var i in log)assertSame(target,log[i][1]);assertEquals(["get",target,"length",proxy],log[0]);assertEquals(["get",target,"0",proxy],log[1]);var getTrap=function(r,e){if(e==="length")return{[Symbol.toPrimitive](){return 3}};if(e==="2")return"baz";if(e==="3")return"bar"};var target=[];var proxy=new Proxy(target,{get:getTrap});var replacer=(r,e)=>r==="goo"?proxy:e;var object={foo:true,goo:false};assertEquals('{"foo":true,"goo":[null,null,"baz"]}',JSON.stringify(object,replacer));var getTrap=function(r,e){if(e==="length")return Symbol();if(e==="2")return"baz";if(e==="3")return"bar"};var target=[];var proxy=new Proxy(target,{get:getTrap});var replacer=(r,e)=>r==="goo"?proxy:e;var object={foo:true,goo:false};assertThrows(()=>JSON.stringify(object,replacer),TypeError);log.length=0;var target=()=>666;var proxy=new Proxy(target,handler);var replacer=(r,e)=>r==="1"?proxy:e;assertEquals('["foo",null]',JSON.stringify(["foo",42],replacer));assertEquals(0,log.length);assertEquals('{"0":"foo"}',JSON.stringify({0:"foo",1:42},replacer));assertEquals(0,log.length);log.length=0;var target=()=>42;var proxy=new Proxy(target,handler);assertTrue(typeof proxy==="function");assertEquals(42,JSON.parse("[true, false]",proxy));assertEquals(3,log.length);for(var i in log)assertSame(target,log[i][1]);assertEquals(4,log[0].length);assertEquals("apply",log[0][0]);assertEquals(["0",true],log[0][3]);assertEquals(4,log[1].length);assertEquals("apply",log[1][0]);assertEquals(["1",false],log[1][3]);assertEquals(4,log[2].length);assertEquals("apply",log[2][0]);assertEquals(["",[42,42]],log[2][3]);log.length=0;var target={baz:42};var proxy=new Proxy(target,handler);var reviver=function(r,e){if(r==="baz")return 5;if(r==="foo")this.bar=proxy;return e};assertEquals({foo:0,bar:proxy},JSON.parse('{"foo":0,"bar":1}',reviver));assertEquals(4,log.length);for(var i in log)assertSame(target,log[i][1]);assertEquals(["ownKeys",target],log[0]);assertEquals(["getOwnPropertyDescriptor",target,"baz"],log[1]);assertEquals(["get",target,"baz",proxy],log[2]);assertEquals(["defineProperty",target,"baz",{value:5,configurable:true,writable:true,enumerable:true}],log[3]);log.length=0;var target=[42];var proxy=new Proxy(target,handler);assertTrue(Array.isArray(proxy));var reviver=function(r,e){if(r==="0")return undefined;if(r==="foo")this.bar=proxy;return e};var result=JSON.parse('{"foo":0,"bar":1}',reviver);assertEquals({foo:0,bar:proxy},result);assertSame(result.bar,proxy);assertEquals(3,log.length);for(var i in log)assertSame(target,log[i][1]);assertEquals(["get",target,"length",proxy],log[0]);assertEquals(["get",target,"0",proxy],log[1]);assertEquals(["deleteProperty",target,"0"],log[2]);proxy=new Proxy([],{get:function(r,e){if(e=="length")return 7;return 0}});assertEquals("[[0,0,0,0,0,0,0]]",JSON.stringify([proxy]));proxy=new Proxy([],{get:function(r,e){if(e=="length")return 1e40;return 0}});assertThrows(()=>JSON.stringify([proxy]),RangeError);log=[];proxy=new Proxy({},{ownKeys:function(){log.push("ownKeys");return["0","a","b"]},get:function(r,e){log.push("get "+e);return e.toUpperCase()},getOwnPropertyDescriptor:function(r,e){log.push("descriptor "+e);return{enumerable:true,configurable:true}},isExtensible:assertUnreachable,has:assertUnreachable,getPrototypeOf:assertUnreachable,setPrototypeOf:assertUnreachable,preventExtensions:assertUnreachable,setPrototypeOf:assertUnreachable,defineProperty:assertUnreachable,set:assertUnreachable,deleteProperty:assertUnreachable,apply:assertUnreachable,construct:assertUnreachable});assertEquals('[{"0":"0","a":"A","b":"B"}]',JSON.stringify([proxy]));assertEquals(["get toJSON","ownKeys","descriptor 0","descriptor a","descriptor b","get 0","get a","get b"],log);