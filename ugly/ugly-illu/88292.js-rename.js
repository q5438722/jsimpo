import { EJSON } from "./ejson";class Address {
  constructor(e, s) {
    this.city = e;this.state = s;
  }typeName() {
    return "Address";
  }toJSONValue() {
    return { city: this.city, state: this.state };
  }
}EJSON.addType("Address", e => new Address(e.city, e.state));class Person {
  constructor(e, s, t) {
    this.name = e;this.dob = s;this.address = t;
  }typeName() {
    return "Person";
  }toJSONValue() {
    return { name: this.name, dob: EJSON.toJSONValue(this.dob), address: EJSON.toJSONValue(this.address) };
  }
}EJSON.addType("Person", e => new Person(e.name, EJSON.fromJSONValue(e.dob), EJSON.fromJSONValue(e.address)));class Holder {
  constructor(e) {
    this.content = e;
  }typeName() {
    return "Holder";
  }toJSONValue() {
    return this.content;
  }
}EJSON.addType("Holder", e => new Holder(e));const EJSONTest = { Address: Address, Person: Person, Holder: Holder };
export default EJSONTest;
