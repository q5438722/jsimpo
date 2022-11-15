'use strict';
import{
  EJSON as EJSON
}from "./ejson";
class Address {
  constructor(city, state) {
    this.city = city;
    this.state = state;
  }
  typeName() {
    return "Address";
  }
  toJSONValue() {
    return {
      city : this.city,
      state : this.state
    };
  }
}
EJSON.addType("Address", (data) => {
  return new Address(data.city, data.state);
});
class Person {
  constructor(name, dob, address) {
    this.name = name;
    this.dob = dob;
    this.address = address;
  }
  typeName() {
    return "Person";
  }
  toJSONValue() {
    return {
      name : this.name,
      dob : EJSON.toJSONValue(this.dob),
      address : EJSON.toJSONValue(this.address)
    };
  }
}
EJSON.addType("Person", (value) => {
  return new Person(value.name, EJSON.fromJSONValue(value.dob), EJSON.fromJSONValue(value.address));
});
class Holder {
  constructor(value) {
    this.content = value;
  }
  typeName() {
    return "Holder";
  }
  toJSONValue() {
    return this.content;
  }
}
EJSON.addType("Holder", (value) => {
  return new Holder(value);
});
const EJSONTest = {
  Address : Address,
  Person : Person,
  Holder : Holder
};
export default EJSONTest;

