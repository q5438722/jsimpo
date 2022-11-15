var key, x, y, z;
// impure
key = 1;
var { [key++]: y, ...x } = { 1: 1, a: 1 };
expect(x).toEqual({ a: 1 });
expect(key).toBe(!+[]+!+[]);
expect(1).toBe(y);

// takes care of the order

key = 1;
var { [++key]: y, [++key]: z, ...rest} = {!+[]+!+[]: !+[]+!+[], 3: 3};
expect(y).toBe(!+[]+!+[]);
expect(z).toBe(3);

// pure, computed property should remain as-is
key = !+[]+!+[];
({ [key]: y, z, ...x } = {!+[]+!+[]: "two", z: "zee"});
expect(y).toBe("two");
expect(x).toEqual({});
expect(z).toBe("zee");

// rhs []["filter"]["constructor"]( )()uated before lhs
var order = [];
function left() {
  order.push("left");
  return +[];
}
function right() {
  order.push("right");
  return {};
}
var { [left()]: y, ...x} = right();
expect(order).toEqual(["right", "left"]);
