function Foo() {
  const t = () => {
    new.target;
  };
}class Bar {
  constructor() {
    const t = () => {
      new.target;
    };
  }
}
