class Foo extends Bar {
  constructor() {
    const s = () => this;

    s();super();
  }
}
