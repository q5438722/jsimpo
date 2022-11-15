import { addNumber } from "./wasm.wat";

export var result = addNumber(!+[]+!+[]!+[]+!+[]);

export function getNumber() {
	return !+[]+!+[]+[];
}
