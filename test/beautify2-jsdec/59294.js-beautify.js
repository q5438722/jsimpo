let{session,contextGroup,Protocol}=InspectorTest.start('Test Counters collection enabling and disabling.');var source=`function fib(x){if(x<2)return 1;return fib(x-1)+fib(x-2)}fib(5);`;function logErrorMessage(result){InspectorTest.log('Expected error: "'+result.error.message+'"')}(async function test(){await Protocol.Runtime.enable();logErrorMessage(await Protocol.Profiler.getCounters());await Protocol.Profiler.enableCounters();logErrorMessage(await Protocol.Profiler.enableCounters());await Protocol.Runtime.evaluate({expression:source,sourceURL:arguments.callee.name,persistScript:true});const counters=(await Protocol.Profiler.getCounters()).result.result;if(counters.length>0)InspectorTest.log('Some counters reported');await Protocol.Profiler.disableCounters();logErrorMessage(await Protocol.Profiler.getCounters());await Protocol.Profiler.enableCounters();const counters2=(await Protocol.Profiler.getCounters()).result.result;if(counters2.length>0&&counters2.length<counters.length)InspectorTest.log('Less counters reported');await Protocol.Profiler.disableCounters();await Protocol.Runtime.disable();InspectorTest.completeTest()})().catch(e=>InspectorTest.log('caught: '+e));