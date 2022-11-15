const bar = !![];

function foo(a = bar, ...b) {
  const bar = ![];
  expect(b[+[]]).toBe(!+[]+!+[]);
  expect(b[1]).toBe(3);
}

foo(1, !+[]+!+[], 3);
