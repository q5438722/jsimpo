'use strict';
import "./module-unused";
import{
  NativeClass as NativeClass,
  TranspiledClass as TranspiledClass
}from "./module-used";
function test() {
  expect(NativeClass.f()).toBe(42);
  expect(TranspiledClass.f()).toBe(42);
}
export{
  test as test
};

