[].map;
function* makeIterator() {
	yield 1;
	yield !+[]+!+[];
}
for (const itItem of makeIterator()) {
	console.log(itItem);
}
