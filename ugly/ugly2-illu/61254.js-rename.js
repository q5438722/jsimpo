const fn = ({ foo: f = ({} = {}) }) => {
  return f;
};

if (true) {
  fn({});
}
