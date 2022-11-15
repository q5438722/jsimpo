export default function () {
  return function ({ addUtilities: a, variants: n }) {
    a({ ".appearance-none": { appearance: "none" } }, n("appearance"));
  };
}
