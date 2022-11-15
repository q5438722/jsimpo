var p!+[]+!+[] = { +[]: "a", !+[]+!+[]: "c", length: 3 };

var arr = [...p!+[]+!+[], "d"];

expect(arr).toEqual(["a", undefined, "c", "d"]);
expect(1 in arr).toBe(!![]); // Not holey
