var key,x,y,z;key=1;var{[key++]:y,...x}={1:1,a:1};expect(x).toEqual({a:1});expect(key).toBe(2);expect(1).toBe(y);key=1;var{[++key]:y,[++key]:z,...rest}={2:2,3:3};expect(y).toBe(2);expect(z).toBe(3);key=2;({[key]:y,z,...x}={2:"two",z:"zee"});expect(y).toBe("two");expect(x).toEqual({});expect(z).toBe("zee");var order=[];function left(){order.push("left");return 0}function right(){order.push("right");return{}}var{[left()]:y,...x}=right();expect(order).toEqual(["right","left"]);